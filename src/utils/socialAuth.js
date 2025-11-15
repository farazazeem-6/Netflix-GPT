import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

// Google Sign In
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Facebook Sign In
export const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// GitHub Sign In
export const signInWithGithub = async () => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Twitter Sign In
export const signInWithTwitter = async () => {
  const provider = new TwitterAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
