
import { BsFacebook, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../../src/App.css";
const Socialcomponent = () => {
  return (
    <div className="social">
      <a href="https://www.facebook.com/qweqwetikorts">
        <BsFacebook />
      </a>
      <a href="https://github.com/Liebe3">
        <BsGithub />
      </a>
      <a href="mailto:jallenqweqwe123@gmail.com">
        <MdEmail />
      </a>
    </div>
  );
};

export default Socialcomponent;
