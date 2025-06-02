import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //this will unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptClickToggle = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="w-screen absolute px-7 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-48 mx-auto md:mx-0" src={LOGO_URL} alt="LOGO" />
      {user && (
        <div className="flex py-4  md:mx-0 justify-between">
          {showGptSearch && (
            <select
              className="p-2 bg-black text-white rounded-lg"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="md:py-4 md:my-0 py-2 my-2 mx-4 px-4 text-sm bg-gray-500 text-white rounded-lg font-bold"
            onClick={handleGptClickToggle}
          >
            {!showGptSearch ? "GPT Search" : "BrowsePage"}
          </button>
          <div className="flex gap-2 md:gap-0 text-sm">
            <img
              className="md:w-11 md:h-11 h-8 mt-2 md:mt-0"
              src={user?.photoURL}
              alt="USERLOGO"
            />
            {/* <h5>{user.displayName}</h5> */}
            <button
              onClick={handleSignOut}
              className="font-bold text-white md:p-3 "
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
