import ReactDOM from 'react-dom';

test('renders the app', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.append(root);

  // cleanup
  ReactDOM.unmountComponentAtNode(root);
  document.body.removeChild(root);
});
