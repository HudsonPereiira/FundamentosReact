import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return(
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/HudsonPereiira.png" alt=" "/>

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Homem Formiga</strong>
                        <time title="09 de Outubro, às 15h41min. " dateTime="2024-10-09 15:41:35">Cerca de 1h atrás.</time>
                    </div>
                    <button title="Deletar Comentário">
                        <Trash size={24} />
                    </button>
                </header>
                <p>Não!</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
    )
} 