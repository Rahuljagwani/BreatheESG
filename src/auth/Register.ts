import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { Providers } from "../config/firebase";

const auth = getAuth();

export const signUp = async (email: string, password: string) => {
    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        return userCred.user;
    } catch (error) {
        console.log(error);
    }
}

export const signIn = async (email: string, password: string) => {
    try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        return userCred.user;
    } catch (error) {
        console.log(error);
    }
}

export const googleSignIn = async () => {
    try {
        const userCred = await signInWithPopup(auth, Providers.google);
        return userCred.user;
    } catch (error) {
        console.log(error);
    }
}

export const signOutLocal = async () => {
    await signOut(auth).then(() => {
      }).catch((error) => {
        console.log(error);
      });
}