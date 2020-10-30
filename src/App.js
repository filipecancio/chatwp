import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="column home">
      <div className="column">
        <p>Informações do contato</p>
        <p>nome</p>
        <p>email</p>
        <p>...</p>
      </div>

      <div className="row"><p>tipo de mensagem </p><p className="gray">texto livre/template</p></div>
      <div className="column">
        <input className="gray inptBig" placeholder="digite..." />
        <input className="gray inptBig" placeholder="olá {{1}}, tudo bem? como {{2}} está?" />
      </div>

      <div className="column">
        <div className="row"><p className="smallLabel">1</p><input className="gray inptSmall" placeholder="digite..." /></div>
        <div className="row"><p className="smallLabel">2</p><input className="gray inptSmall" placeholder="digite..." /></div>
      </div>
    </div>
  );
}

export default App;
