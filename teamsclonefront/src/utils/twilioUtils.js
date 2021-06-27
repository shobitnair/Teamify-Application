import axios from "axios";

export const checkIfRoomExists = async (roomId) => {
  const response = await axios.get(
    `https://teamscloneservice-7248-dev.twil.io/room-exists?roomId=${roomId}`
  );

  return response.data.roomExists;
};
