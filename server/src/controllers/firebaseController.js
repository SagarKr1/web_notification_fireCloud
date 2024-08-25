const Notification = require('../service/notificationService');

const sendNotification = async (req,res)=>{
    try{
        console.log(req.body);
        const {deviceToken,title,body} = req.body;
        await Notification.sendNotification(deviceToken,title,body);
        res.json({
            statusCode:200,
            body:"Notification Send Successfully"
        });
    }catch(e){
        res.json({
            statusCode:500,
            body:e.message
        });
    }
}


module.exports = sendNotification;