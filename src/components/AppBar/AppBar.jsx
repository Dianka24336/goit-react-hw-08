import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div className={s.header}>
      <Navigation />
      {isLoggedIn && <div>Welcome,{user.email}</div>}
      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && <UserMenu/>}
      
    </div>
  );
};

export default AppBar;
