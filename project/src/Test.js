import { useState } from "react";
import { Link } from "react-router-dom";
import "./Test.css";

let i = 0;
let j = 0;
let j1 = 0;
let j2 = 0;
let j3 = 0;
let jj = 0;
let history = "";

const Test = () => {
  const contents = [
    ["한식은", "일식은", "중식은", "이탈리안은", "아시아쪽은"],
    ["밥은", "면은", "국물요리는", "볶음은"],
    ["담백한 맛은", "매운맛은", "기름진 맛은", "웰빙은"],
  ];

  const ect = ["고기", "생선", "빵", "과일"];

  const [count, setCount] = useState(1);
  const [back, setBack] = useState("v34_55");

  const [main, setMain] = useState(contents[0][0]);

  const clickYes = () => {
    setCount(count + 1);
    if (j1 === 99) {
      jj = j + 1;
    } else {
      i++;
      if (j1 === 0) {
        j1 = j + 1;
      } else if (j2 === 0) {
        j2 = j + 1;
      } else {
        j3 = j + 1;
      }
      j = 0;
      history = "a";
      setMain(contents[i][j]);
      if (back === "v34_55") {
        setBack("v34_55_1");
      }
    }
  };

  const clickNo = () => {
    setCount(count + 1);
    if (j1 === 99) {
      j++;
      setMain(ect[j]);
    } else {
      j++;
      history = "b";
      setMain(contents[i][j]);
      if (back === "v34_55") {
        setBack("v34_55_1");
      }
    }
  };

  const clickMollu = () => {
    setCount(count + 1);
    history = "c";
    if (back === "v34_55") {
      setBack("v34_55_1");
    }
    if (j1 === 0) {
      j1 = 99;
      j = 0;
      setMain(ect[j]);
    } else if (j1 === 99) {
      j++;
      setMain(ect[j]);
    } else {
      j++;
      setMain(contents[i][j]);
    }
  };

  const clickBack = (e) => {
    setCount(count - 1);
    count === 2 ? setBack("v34_55") : setBack("v34_55_1");
    if (history === "a") {
      i = i - 1;
      if (j2 === 0) {
        j = j1 - 1;
        j1 = 0;
      } else if (j3 === 0) {
        j = j2 - 1;
        j2 = 0;
      } else {
        j = j3 - 1;
        j3 = 0;
      }
      setMain(contents[i][j]);
    } else if (history === "b") {
      j === 0 ? i-- : j--;
      setMain(contents[i][j]);
    } else {
      j--;
      setMain(ect[j]);
    }
  };

  return (
    <div className="v30_48">
      <div className="v34_74">
        <span className="v34_41">푸드 파인더</span>
        <span className="v34_113">오늘 먹을 음식은?</span>
        <div className="v34">
          <div className="v34_43">{count}</div>
          <div className="v34_42">
            {main} 어떠세요?{j1}
            {j2}
            {j3}
            {jj}
          </div>
        </div>
        {j1 === 99 || j2 !== 0 ? (
          <Link
            className="v34_111"
            onClick={clickYes}
            to={`/result/${jj}${j1}${j2}${j3}`}
          >
            <div className="v34_45">예</div>
          </Link>
        ) : (
          <div className="v34_45" onClick={clickYes}>
            예
          </div>
        )}
        <div className="v34_47" onClick={clickNo}>
          아니요
        </div>
        <div className="v34_51" onClick={clickMollu}>
          모르겠습니다
        </div>
        <div className={back} onClick={clickBack}>
          이전 질문
        </div>
      </div>
    </div>
  );
};

export default Test;
