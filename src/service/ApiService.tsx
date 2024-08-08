import axios from "axios";

// API URL 가져오기
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 아이템 전체 조회 - ItemsAll 인터페이스 정의
export interface ItemsAll {
  id: number;
  isCompleted: boolean;
  name: string;
}

export interface ItemMain {
  name: string;
}

// 아이템 전체 조회 함수 정의
export const getItemsAll = async (): Promise<ItemsAll[]> => {
  try {
    const response = await axios.get<ItemsAll[]>(`${API_BASE_URL}/items`);
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.error("getItemsAll 함수 실행 중 에러 발생.", error);
    throw error;
  }
};

// 메인 화면에서의 아이템 포스트 함수 정의 
export const postItemAll = async (item: ItemMain): Promise<ItemMain> => {
  try {
    const response = await axios.post<ItemMain>(`${API_BASE_URL}/items`, item);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("postItemAll 함수 실행 중 에러 발생.", error);
    throw error;
  }
};
