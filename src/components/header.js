import React from "react";
import Logo from "../images/logo-awesome-profile-cards.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="logo" src={Logo} alt="Awesome profile cards" />
      </div>
    </header>
  );
};

export default Header;

/* class Header extends React.Component{
  render (){
    return(
<header class="header">
  <div class="header__logo">
    <img
      class="logo"
      src="./assets/images/logo-awesome-profile-cards.svg"
      alt="Awesome profile cards"
    />
  </div>
</header>
);
}
} */
