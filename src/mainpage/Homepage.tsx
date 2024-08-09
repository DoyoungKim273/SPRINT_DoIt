import { useEffect, useState } from "react";

import LogoBar from "./LogoBar";
import Todo from "./Todo";
import Input from "./Input";
import { ItemsAll, getItemsAll } from "../service/ApiService";

const Homepage: React.FC = () => {
  // 아이템 리스트를 관리하는 상태 변수
  const [itemsAll, setItemsAll] = useState<ItemsAll[]>([]);

  const fetchNewItem = async () => {
    try {
      const data = await getItemsAll();
      setItemsAll(data);
      console.log("fetchNewItem 올바르게 동작, 업데이트 된 목록", data);
    } catch (error) {
      console.error("fetchNewItem 실행 중 에러 발생", error);
    }
  };

  // 컴포넌트가 마운트 될 때 데이터 가져옴
  useEffect(() => {
    fetchNewItem();
  }, []);

  return (
    <div>
      <LogoBar />
      <Input fetchNewItem={fetchNewItem} />
      <Todo itemsAll={itemsAll} />
    </div>
  );
};

export default Homepage;
