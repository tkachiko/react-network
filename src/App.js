import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
      </header>
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
      <main className='app-content'>
        <div>
          <img className='app-cover' src='https://vistapointe.net/images/reindeer-9.jpg' alt='cover-image' />
        </div>
        <div>avatar + description</div>
        <div>
          my posts
          <div>new post</div>
        </div>
        <div>
          posts
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </main>
    </div>
  );
}

export default App;
