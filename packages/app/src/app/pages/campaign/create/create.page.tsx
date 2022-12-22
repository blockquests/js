import { Link } from 'react-router-dom';

export function CreatePage() {
  return (
    <>
      <main>
        <h2>CreatePage</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
}
