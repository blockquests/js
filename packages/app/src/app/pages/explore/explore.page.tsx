import { Link } from 'react-router-dom';

export function ExplorePage() {
  console.log('eqweqwe');
  return (
    <>
      <main>
        <h2>ExplorePage</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
}
