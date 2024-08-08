import LogoBar from "./LogoBar";
import Todo from "./Todo";
import Input from "./Input";

const Homepage: React.FC = () => {
  return (
    <div>
        <LogoBar/>
        <Input/>
        <Todo />
    </div>
  );
};

export default Homepage;
