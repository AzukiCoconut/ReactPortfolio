function Nav({ links }) {
    return (
        <ul className="navbar-nav">
            {links.map((link) => link)}
        </ul>
    );
}

export default Nav;