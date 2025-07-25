import '../styles/Navbar.css';

const Navbar = ({ activeSection, setActiveSection, mobile, closeMenu }) => {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${mobile ? 'mobile' : 'desktop'}`}>
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={() => {
            setActiveSection(link.id);
            if (mobile && closeMenu) closeMenu();
          }}
          className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;