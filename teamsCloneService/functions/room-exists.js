
exports.handler = function (context, event, callback) {

    const client = context.getTwilioClient();
    const roomId = event.roomId;

    const response = new Twilio.Response();
  
    const headers = {
      "Access-Control-Allow-Origin": "*", // change this to your client-side URL after deployment
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };
  
    response.setHeaders(headers);
    client.video.rooms(roomId).fetch().then((room)=>{
        if(room){
            response.setBody({
                roomExists: true,
                room,
            })
        }
        else{
            response.setBody({
                roomExists: false,
                room,
            })
        }
        return callback(null, response);
    }).catch(err=>{
        response.setBody({
            roomExists: false,
            err
        })
        return callback(null, response);
    })
};
  