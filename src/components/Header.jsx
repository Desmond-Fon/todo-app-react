// import moon from "../images/icon-moon";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

const Header = ({ handleThemeSwitch }) => {
  return (
    <div className="px-5 py-10 flex justify-between items-center lg:px-96 lg:py-16">
      <h1 className="text-white text-2xl tracking-[7px] font-bold uppercase">
        Todo
      </h1>
      <div>
        <img
          src={moon}
          alt=""
          className="w-5 dark:hidden block cursor-pointer"
          id="moon-icon"
          onClick={handleThemeSwitch}
        />
        <img
          src={sun}
          alt=""
          className="w-5 hidden dark:block cursor-pointer"
          id="sun-icon"
          onClick={handleThemeSwitch}
        />
      </div>
    </div>
  );
};

export default Header;
