import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";



const initializauthentication = () =>{
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
}
export default initializauthentication;