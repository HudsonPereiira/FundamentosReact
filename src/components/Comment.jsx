import { ThumbsUp, Trash } from 'phosphor-react'; // Importa os ícones ThumbsUp e Trash da biblioteca Phosphor Icons
import styles from './Comment.module.css'; // Importa os estilos CSS específicos para o componente Comment
import { Avatar } from './Avatar'; // Importa o componente Avatar

export function Comment() { // Declara o componente funcional Comment
    return (
        <div className={styles.comment}> {/* Aplica a classe CSS comment para estilizar o contêiner do comentário */}
            <Avatar hasBorder={false} src="https://github.com/HudsonPereiira.png" alt=" " /> {/* Renderiza o Avatar com uma imagem e sem borda */}

            <div className={styles.commentBox}> {/* Define o contêiner para a caixa de comentário */}
                <div className={styles.commentContent}> {/* Define o contêiner para o conteúdo do comentário */}
                    <header> {/* Inicia o cabeçalho do comentário */}
                        <div className={styles.authorAndTime}> {/* Contém o nome do autor e o horário do comentário */}
                            <strong>Homem Formiga</strong> {/* Nome do autor do comentário */}
                            <time title="09 de Outubro, às 15h41min." dateTime="2024-10-09 15:41:35">Cerca de 1h atrás.</time> {/* Mostra o horário em um tooltip e o valor datetime em formato legível por máquina */}
                        </div>
                        <button title="Deletar Comentário"> {/* Botão para deletar o comentário */}
                            <Trash size={24} /> {/* Ícone de lixeira para representar a ação de deletar */}
                        </button>
                    </header>
                    <p>Não!</p> {/* Texto do comentário */}
                </div>
                <footer> {/* Inicia o rodapé do comentário */}
                    <button> {/* Botão de 'Aplaudir' */}
                        <ThumbsUp /> {/* Ícone de 'curtir' */}
                        Aplaudir <span>20</span> {/* Texto e contador de aplausos */}
                    </button>
                </footer>
            </div>
        </div>
    );
}
