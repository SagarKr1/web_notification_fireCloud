import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";


const firebaseConfig = {
    
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const onMessageListener = ()=>{
    new Promise((resolve)=>{
        onMessage(messaging,(payload)=>{
            resolve(payload);
        })
    })
}