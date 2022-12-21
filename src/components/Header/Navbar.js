import React from "react";
import s from './NavBar.module.css'
import { Link } from 'react-scroll'


function NavBar() {

    return (
        <div className={s.navBar}>
            <Link
                className={s.link}
                activeClass={s.active}
                to="table"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                Таблица
            </Link>
            <Link
                activeClass={s.active}
                to="charts"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                График
            </Link>
        </div>
    );
}

export default NavBar;