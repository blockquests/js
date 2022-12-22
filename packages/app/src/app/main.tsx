import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from './app.router';

export function Main() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
