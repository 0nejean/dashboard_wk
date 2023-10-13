//js와 jsx 확장자 이름은 크게 차이가 없지만, 둘 중에 하나를 택하면 그걸로 꾸준히 사용해야함.
import React from "react";
import Title from "../components/title/Title";

const Home = () => {
  return (
    <div>
      <Title title="홈" desc="이 페이지는 홈 입니다." />
    </div>
  );
};

export default Home;
