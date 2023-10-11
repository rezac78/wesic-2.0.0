import axios from "./axiosConfig";
interface SongData {
  name: string;
  bio: string;
  coverPhoto: File | null;
}

export const Dashboard = async (songData: SongData) => {
  try {
    const data = new FormData();
    Object.keys(songData).forEach((key) => {
      const value = songData[key as keyof SongData];
      if (value !== null && value !== undefined) {  
          data.append(key, value);
      }
  });
    const response = await axios.post("/dashboard/admin/traditional", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetAllSong = async () => {
  try {
    const response = await axios.get(`/dashboard/admin/traditional`);
    if (response.statusText !== "OK") {
      throw new Error("Network response was not ok");
    }
    return response.data.data; // Simply return data
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
};

export const GetOneSong = async ({ songId, id }: any) => {
  try {
    const response = await axios.get(`/dashboard/admin/traditional/${id}`);
    songId(response.data.song);
  } catch (error) {}
};

export const DeletedSong = async (songId: any) => {
  try {
    const response = await axios.delete(
      `/dashboard/admin/traditional/${songId}`
    );
  } catch (error) {
    console.error("There was an error deleting the song", error);
  }
};
