import Todo from "./Todo";
import Input from "./Input";

import gnbL from "../image/gnb/gnbL.png";
import done from "../image/img/done.png";
import todo from "../image/img/todo.png";


const Homepage: React.FC = () => {
  return (
    <div>
      <img src={gnbL} alt="gnbL" />
      <div>
        <Input/>
      </div>
        <Todo />
    </div>
  );
};

export default Homepage;
