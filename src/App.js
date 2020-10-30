import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <p>Informações do contato</p>
    <p>nome</p>
    <p>email</p>
    <p>...</p>

    <p>tipo de mensagem texto livre/template</p>
    <input placeholder="digite..." />
    <input placeholder="olá {{1}}, tudo bem? como {{2}} está?" />

    <p>1</p><input placeholder="digite..." />
    <p>2</p><input placeholder="digite..." />
    </>
  );
}

export default App;
