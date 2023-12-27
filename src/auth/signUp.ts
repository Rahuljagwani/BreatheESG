import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { Providers } from "../config/firebase";

const auth = getAuth();

export const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const googleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, Providers.google)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential !== null ? credential.accessToken : null;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}

export const signOutLocal = () => {
    signOut(auth).then(() => {
      }).catch((error) => {
      });
}