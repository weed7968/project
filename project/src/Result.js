import "./Result.css";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="v30_48">
      <div className="v34_74">
        <span className="v34_41">푸드 파인더</span>
        <span className="v34_113">오늘 먹을 음식은?</span>
        <div className="v34_1">결과창</div>
        <Link className="v34_111" to="/">
          <div className="v34_55_1">처음으로</div>
        </Link>
      </div>
    </div>
  );
};

export default Result;
