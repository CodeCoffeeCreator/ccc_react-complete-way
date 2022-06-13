function Footer() {
  return (
    <footer className='page-footer white'>
      <div className='footer-copyright purple'>
        <div className='container'>
          Copyright © {new Date().getFullYear()} CodeCoffeeCreator
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/CodeCoffeeCreator/ccc_react-complete-way'
            target='_blank'
            rel='noreferrer'>
            CodeCoffeeCreator repository
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
