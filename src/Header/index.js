import React from "react"
import "./style.css"

const Header = ({headerH1}) => (<header className="header">
<h1 className="header__h1">{headerH1}</h1>
</header>
);

export default Header;