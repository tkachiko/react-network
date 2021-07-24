const Navbar = () => {
  return (
    <nav className='app-nav'>
      <ul className='list'>
        <li className='list-item'>
          <a className='link' href=''>
            Profile
          </a>
        </li>
        <li className='list-item'>
          <a className='link' href=''>
            Messages
          </a>
        </li>
        <li className='list-item'>
          <a className='link' href=''>
            News
          </a>
        </li>
        <li className='list-item'>
          <a className='link' href=''>
            Music
          </a>
        </li>
        <li className='list-item'>
          <a className='link' href=''>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
