import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Paragraph from './Paragraph';

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Paragraph />
      </ErrorBoundary>
    </div>
  );
}

export default App;
