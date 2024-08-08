import React, { useEffect, useState } from "react";

import { postItemAll } from "../service/ApiService";

import search from "../image/img/search.png";
import AddLargeActive from "../image/btn/AddLargeActive.png";

  const Input: React.FC = () => {
    // 상태 변수 선언 후 초기값 빈 문자열 설정
    const [inputItems, setInputItems] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputItems(event.target.value);
    };

    // 추가하기 클릭 시 작동하는 아이템 추가 함수
    const handleInputItems = async () => {
      console.log("handleInputItems 올바르게 작동중")
      if (inputItems.trim() === "") {
        alert("할 일을 입력해주세요");
        return;
      }
      try {
        // 새로운 아이템 객체 생성
        const newItem = {
          name: inputItems,
        };
        console.log(newItem);
        await postItemAll(newItem);
        setInputItems("");
      } catch (error) {
        console.error("inputItems 실행 중 에러 발생", error);
      }
    };

  return (
    <>
      <img
        src={search}
        alt="search"
        style={{
          width: "1016px",
          height: "56px",
          cursor: "pointer",
          // 가장 가까운 조상 요소 기준으로 이동, 공간 차지 하지X
          // 레이아웃 겹치거나 특정 위치에 고정시킬때 이용
          position: "absolute",
          top: "84px",
          left: "360px",
        }}
      />
      <img
        src={AddLargeActive}
        alt="AddLargeActive"
        onClick={handleInputItems} // "추가하기" 버튼 클릭 시 handleInputItems 함수 호출
        style={{
          width: "168px",
          height: "56px",
          // 마우스 올렸을 때 클릭 가능한 요소임을 직관적으로 알게함
          cursor: "pointer",
          position: "absolute",
          top: "84px",
          left: "1392px",
        }}
      />
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={inputItems}
        onChange={handleInputChange} // 입력 필드 값 변경 시 handleInputChange 함수 호출
        style={{
          // 이미지 위에 input 창을 투명하게 띄움
          position: "absolute",
          top: "84px",
          left: "384px",
          width: "1016px",
          height: "56px",
          border: "none",
          backgroundColor: "transparent",
          color: "black",
          cursor: "text",
          // 투명한 요소도 클릭이 가능한 상태로 하기 위해 모든 이벤트 수용
          pointerEvents: "all",
          outline: "none",
        }}
      />
    </>
  );
};

export default Input;
