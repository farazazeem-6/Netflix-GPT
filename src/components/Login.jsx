import Header from "./Header";
import {
  facebookImg,
  githubImg,
  googleImg,
  HeroImg,
  microsoftImg,
  playGamesImg,
  twitterImg,
} from "../utils/Image";
import { useRef, useState } from "react";
import { validateSignIn, validateSignUp } from "../utils/Validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import {
  signInWithFacebook,
  signInWithGithub,
  signInWithGoogle,
  signInWithTwitter,
} from "../utils/socialAuth";

const Login = () => {
  //use state hooks
  const [isSignIn, setIsSignIn] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [isResponseError, setIsResponseError] = useState(null);

  // use ref hooks
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // toggle beween signup and sign in form function
  function toggle() {
    setIsSignIn(!isSignIn);
    setIsError(null);
  }
  // Clear error for specific field when user types
  function handleInputChange(field) {
    if ((isError && isError.field === field) || isResponseError) {
      setIsError(null);
      setIsResponseError(null);
    }
  }

  // login function which check validations also
  function handleButtonClick() {
    const validationResult = isSignIn
      ? validateSignIn(email.current.value, password.current.value)
      : validateSignUp(
          email.current.value,
          password.current.value,
          name.current.value
        );
    setIsError(validationResult);
    if (validationResult) return;
    setIsApiLoading(true);
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsResponseError(errorMessage);
          console.log("errorCode:", errorCode, "errorMessage:", errorMessage);
        })
        .finally(() => {
          setIsApiLoading(false);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsResponseError(errorMessage);
          console.log("errorCode:", errorCode, "errorMessage:", errorMessage);
        })
        .finally(() => {
          setIsApiLoading(false);
        });
    }
  }

  // Social Login Handler (Reusable for all providers)
  async function handleSocialLogin(provider) {
    setIsApiLoading(true);
    setIsResponseError(null);

    let result;
    switch (provider) {
      case "google":
        result = await signInWithGoogle();
        break;
      case "facebook":
        result = await signInWithFacebook();
        break;
      case "github":
        result = await signInWithGithub();
        break;
      case "twitter":
        result = await signInWithTwitter();
        break;
      default:
        return;
    }
    if (result.success) {
      console.log(result);
    } else {
      console.log(result.error);
    }
  }
  return (
    <div
      style={{ background: `url(${HeroImg})` }}
      className="w-full flex flex-col items-center justify-center"
    >
      {/* //a dim black background wrapper div  */}
      <div className="fixed z-10 bg-black/50 w-full inset-0"></div>
      {/* called header component here */}
      <div className="absolute top-0 left-40 w-[200px] z-20">
        <Header />
      </div>

      <div className="bg-black/70 flex items-center flex-col justify-center z-40 py-10 px-15 mt-28">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex flex-col gap-4 w-[350px]"
        >
          <h1 className="text-[32px] font-bold text-white text-left">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {/* name input for sign up form  */}
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              onChange={() => handleInputChange("name")}
              className="border border-[rgb(110,98,98)] mt-2 px-4 py-4 rounded bg-black/40 text-white placeholder-gray-400 w-full"
            />
          )}
          {isError?.field === "name" && (
            <p className="text-red-500 text-[12px] flex items-center">
              <i className="ri-close-circle-line px-1 text-xl"></i>
              {isError.message}.
            </p>
          )}

          <input
            ref={email}
            type="text"
            placeholder="Enter email"
            onChange={() => handleInputChange("email")}
            className="border border-[rgb(110,98,98)] mt-2 px-4 py-4 rounded bg-black/40 text-white placeholder-gray-400 w-full"
          />
          {isError?.field === "email" && (
            <p className="text-red-500 text-[12px] flex items-center">
              <i className="ri-close-circle-line px-1 text-xl"></i>
              {isError.message}
            </p>
          )}

          <input
            ref={password}
            type="password"
            placeholder="Password"
            onChange={() => handleInputChange("password")}
            className="border border-[rgb(110,98,98)] mt-2 px-4 py-4 rounded bg-black/40 text-white placeholder-gray-400 w-full"
          />
          {isError?.field === "password" && (
            <p className="text-red-500 text-[12px] flex ">
              <i className="ri-close-circle-line px-1 text-xl"></i>
              {isError.message}
            </p>
          )}

          {isSignIn && (
            <p className="cursor-pointer underline text-white font-bold text-right text-[13px] hover:text-[#c7b4b4]">
              Forgot password?
            </p>
          )}

          <button
            onClick={handleButtonClick}
            disabled={isApiLoading}
            className="text-white cursor-pointer w-full bg-red-600 py-2 px-12 font-bold rounded text-[16px] hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-red-600"
          >
            {isSignIn
              ? isApiLoading
                ? "Signing In..."
                : "Sign In"
              : isApiLoading
              ? "Signing Up..."
              : "Sign Up"}
          </button>
          {isResponseError && (
            <p className="text-red-500 text-[12px] flex items-center">
              <i className="ri-close-circle-line px-1 text-xl"></i>
              {isResponseError}
            </p>
          )}
        </form>
        <p className="text-[#bbb] text-center mt-4">OR</p>
        <div className="grid grid-cols-4 gap-2">
          <div
            onClick={() => handleSocialLogin("google")}
            className="bg-black/70 py-2 px-6 rounded-xl cursor-pointer my-2 hover:bg-black/90 hover:-translate-y-1 transition duration-500"
            title="Continue with Google"
          >
            <img className="w-[30px]" src={googleImg} alt="" />
          </div>
          <div
            onClick={() => handleSocialLogin("facebook")}
            className="bg-black/70 py-2 px-6 rounded-xl cursor-pointer my-2 hover:bg-black/90 hover:-translate-y-1 transition duration-500"
            title="Continue with Facebook"
          >
            <img className="w-[30px]" src={facebookImg} alt="" />
          </div>
          <div
            onClick={() => handleSocialLogin("github")}
            className="bg-black/70 py-2 px-6 rounded-xl cursor-pointer my-2 hover:bg-black/90 hover:-translate-y-1 transition duration-500"
            title="Continue with Github"
          >
            <img className="w-[30px]" src={githubImg} alt="" />
          </div>
          {/* <div className="bg-black/70 py-2 px-10 rounded-xl cursor-pointer my-2 hover:bg-black/90 hover:-translate-y-1 transition duration-500">
            <img className="w-[30px]" src={playGamesImg} alt="" />
          </div> */}
          <div
            onClick={() => handleSocialLogin("twitter")}
            className="bg-black/70 py-2 px-6 rounded-xl cursor-pointer my-2 hover:bg-black/90 hover:-translate-y-1 transition duration-500"
            title="Continue with Twitter"
          >
            <img className="w-[30px]" src={twitterImg} alt="" />
          </div>
          {/* <div className="bg-black/70 py-2 px-10 rounded-xl cursor-pointer my-2 hover:bg-black/90 hover:-translate-y-1 transition duration-500">
            <img className="w-[30px]" src={microsoftImg} alt="" />
          </div>  */}
        </div>
        <div className="flex gap-1 mt-2">
          <p className="text-[#c7b4b4]">
            {isSignIn ? "New to Netflix?" : "Already have an account?"}
          </p>
          <p
            onClick={() => toggle()}
            className="text-white font-bold cursor-pointer hover:text-[#c7b4b4] hover:underline"
          >
            {isSignIn ? "Sign Up." : "Sign In now."}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
