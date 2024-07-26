import axios from "axios";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: "http://54.180.50.177:8080",
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
