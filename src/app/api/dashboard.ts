import axios from "./axiosConfig";
interface SongData {
  songName: string;
  singerName: string;
  songType: string;
  coverPhoto: File | null;
  songFile: File | null;
}

export const Dashboard = async (songData: SongData) => {
  try {
    const data = new FormData();
    Object.keys(songData).forEach((key) => {
      data.append(key, songData[key as keyof SongData]);
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

export const GetAllSong = async (SetData: any) => {
  try {
    const response = await axios.get(`/dashboard/admin/traditional`);
    if (!response.statusText === "OK") {
      throw new Error("Network response was not ok");
    }
    const data = await response.data.data;
    SetData(data);
  } catch (error) {
    console.error("There was an error deleting the song", error);
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
    console.log(response);
    if (response.ok) {
      alert(response.ok);
    } else {
      alert("Delete failed");
    }
  } catch (error) {
    console.error("There was an error deleting the song", error);
  }
};
