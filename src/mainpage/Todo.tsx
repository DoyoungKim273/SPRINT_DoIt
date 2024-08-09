import React, { useState, useEffect } from "react";
import { getItemsAll, ItemsAll } from "../service/ApiService";

import done from "../image/img/done.png";
import todo from "../image/img/todo.png";
import Ellipse from "../image/ic/Ellipse.png";
import checkbox from "../image/ic/checkbox.png";

interface TodoProps {
  itemsAll: ItemsAll[];
}

const Todo: React.FC<TodoProps> = ({ itemsAll }) => {
  console.log("todo 컴포넌트가 itemsAll을 제대로 렌더링 하고 있음", itemsAll);

  return (
    <>
      {/* 화면 상단 제목 2개 */}
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
      {/* 완료 전 리스트 */}
      <div
        style={{
          position: "absolute",
          width: "588px",
          height: "",
          top: "232px",
          left: "360px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
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
                alignItems: "center",
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
                  alignItems: "center",
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
      {/* 완료된 리스트 */}
      <div
        style={{
          position: "absolute",
          width: "588px",
          height: "",
          top: "230px",
          left: "972px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
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
                alignItems: "center",
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
                  alignItems: "center",
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
