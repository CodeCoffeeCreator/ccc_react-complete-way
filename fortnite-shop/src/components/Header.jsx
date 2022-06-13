function Header() {
  return (
    <nav className='purple darken-1'>
      <div className='nav-wrapper'>
        <a href='#!' className='brand-logo'>
          Fortnite API Shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/CodeCoffeeCreator/ccc_react-complete-way'
              target='_blank'
              rel='noreferrer'>
              CodeCoffeeCreator
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
