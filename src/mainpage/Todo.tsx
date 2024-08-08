import React, { useState, useEffect } from "react";
import { getItemsAll, ItemsAll } from "../service/ApiService";

import done from "../image/img/done.png";
import todo from "../image/img/todo.png";
import Ellipse from "../image/ic/Ellipse.png";
import checkbox from "../image/ic/checkbox.png";

const Todo: React.FC = () => {
  // 상태변수 추가하여 API에서 가져온 데이터 저장
  const [itemsAll, setItemsAll] = useState<ItemsAll[]>([]);

  // 컴포넌트가 마운트 될 때 fetch ~ 함수 호출하여 데이터 가져옴
  useEffect(() => {
    const fetchItemsAll = async () => {
      try {
        const data = await getItemsAll();
        // itemsAll에 데이터 저장
        setItemsAll(data);
        console.log(data);
      } catch (error) {
        console.error("fetchItems 실행 중 에러 발생", error);
      }
    };

    fetchItemsAll();
  }, []);

  return (
    <>
      <img
        src={todo}
        alt="todo"
        style={{
          width: "101px",
          height: "36px",
          cursor: "pointer",
          position: "absolute",
          top: "180px",
          left: "360px",
        }}
      />
      <img
        src={done}
        alt="done"
        style={{
          width: "97px",
          height: "36px",
          cursor: "pointer",
          position: "absolute",
          top: "180px",
          left: "972px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "588px",
          height: "",
          top: "232px",
          left: "360px",
          display: "flex",
          flexDirection: "column", // 자식 요소를 세로로 정렬
          gap: "16px", // 각 아이템 간격
        }}
      >
        {itemsAll
          .filter((item) => item.isCompleted)
          .map((item) => (
            <div
              key={item.id}
              style={{
                width: "588px",
                height: "50px",
                display: "flex",
                alignItems: "center", // 수직 중앙 정렬
                gap: "10px",
                borderRadius: "27px 27px 27px 27px",
                border: "2px solid #0F172A",
                background: "#FFFFFF",
              }}
            >
              <div
                style={{
                  width: "",
                  height: "32px",
                  display: "flex",
                  alignItems: "center", // 수직 중앙 정렬
                  gap: "16px",
                }}
              >
                <img
                  src={Ellipse}
                  alt="Ellipse"
                  style={{
                    width: "32px",
                    height: "32px",
                    marginLeft: "12px",
                  }}
                />
                <div
                  style={{
                    height: "18px",
                    gap: "12px",
                    fontFamily: "NanumSquare, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "18.16px",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div
        style={{
          position: "absolute",
          width: "588px",
          height: "",
          top: "230px",
          left: "972px",
          display: "flex",
          flexDirection: "column", // 자식 요소를 세로로 정렬
          gap: "16px", // 각 아이템 간격
        }}
      >
        {itemsAll
          .filter((item) => !item.isCompleted)
          .map((item) => (
            <div
              key={item.id}
              style={{
                width: "588px",
                height: "50px",
                display: "flex",
                alignItems: "center", // 수직 중앙 정렬
                gap: "10px",
                borderRadius: "27px 27px 27px 27px",
                border: "2px solid #0F172A",
                background: "#EDE9FE",
              }}
            >
              <div
                style={{
                  width: "",
                  height: "32px",
                  display: "flex",
                  alignItems: "center", // 수직 중앙 정렬
                  gap: "16px",
                }}
              >
                <img
                  src={checkbox}
                  alt="checkbox"
                  style={{
                    width: "32px",
                    height: "32px",
                    marginLeft: "12px",
                  }}
                />
                <div
                  style={{
                    height: "18px",
                    gap: "12px",
                    fontFamily: "NanumSquare, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "18.16px",
                    textAlign: "center",
                    textDecoration: "line-through",
                  }}
                >
                  {item.name}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Todo;
