const admin = require('../utils/firebase');

class Notification{
    static async sendNotification(deviceToken,title,body){
        const message = {
            notification:{
                title,body
            },
            token:deviceToken
        }
        try{
            const response = await admin.messaging().send(message);
            return response;
        }catch(e){
            throw e;
        }
    }
}

module.exports = Notification;