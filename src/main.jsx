import { StrictMode } from 'react'; // Importa o StrictMode do React para ajudar na identificação de problemas no código.
import { createRoot } from 'react-dom/client'; // Importa a função createRoot para criar um ponto de anexo para a aplicação React.
import { App } from './App.jsx'; // Importa o componente principal App da aplicação.

createRoot(document.getElementById('root')).render( // Cria a raiz da aplicação no elemento HTML com o id 'root' e inicia o processo de renderização.
  <StrictMode> {/* Envolve a aplicação em StrictMode, que ativa verificações adicionais e avisos em desenvolvimento. */}
    <App /> {/* Renderiza o componente App dentro do StrictMode. */}
  </StrictMode>, // Fecha o StrictMode.
); // Finaliza a chamada de renderização.
