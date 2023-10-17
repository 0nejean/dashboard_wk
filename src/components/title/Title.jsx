import React from "react";
//(인식) 대문자 = 컴포넌트 | 소문자 =

const Title = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default Title;
