import axios from "axios";

//HTTP Api requests from twilio server

//using the twilio serer , we check if a room exists with the given roomid
export const checkIfRoomExists = async (roomId) => {
  const response = await axios.get(
    `https://teamscloneservice-7248-dev.twil.io/room-exists?roomId=${roomId}`
  );
  return response.data.roomExists;
};
