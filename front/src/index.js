import ReactDOM from 'react-dom';

import './styles/global.css';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// fetch('http://localhost:3001/posts', {
//   headers: {
//     teste: 'teste',
//   },
// })
//   .then((response) => {
//     console.log(response)
//   })

//   .catch((error) => {
//     console.log(error.message);
//     console.log('Houve um erro!')
//   })

