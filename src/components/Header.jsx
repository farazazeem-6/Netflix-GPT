import Netflix_Logo from "../../public/Netflix_Logo.png";
const Header = () => {
  return (
    <div className="absolute z-10">
      <img className="w-48" src={Netflix_Logo} alt="Netflix_Logo" />
    </div>
  );
};
export default Header;
