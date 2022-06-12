function Footer() {
  return (
    <footer className='page-footer green lighten-4'>
      <div className='footer-copyright'>
        <div className='container'>
          Copyright © {new Date().getFullYear()} CodeCoffeeCreator
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/CodeCoffeeCreator'
            rel='noreferrer'
            target='_blank'>
            CodeCoffeCreator Repository
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
