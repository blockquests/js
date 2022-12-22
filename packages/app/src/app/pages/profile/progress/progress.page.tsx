import { Link } from 'react-router-dom';

export function ProgressPage() {
  return (
    <>
      <main>
        <h2>ProgressPage</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
}
