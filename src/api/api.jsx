import axios from "axios";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://www.dartravel.store",
});

export const getUserId = async (email) => {
  try {
    const data = {
      email: email,
    };

    const response = await api.post("/api/users/add", data);

    const { userId } = response.data;

    return userId;
  } catch (error) {
    console.error("Error adding user:", error);
    // 에러 처리
    throw error;
  }
};
