
import styles from './Post.module.css';
import {Comment} from './Comment.jsx';
import { Avatar } from './Avatar.jsx';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/maykbrito.png" />
                    <div className={styles.authorInfo}>
                        <strong>Thanos</strong>
                        <span>Destruidor de Mundos</span>
                    </div>
                </div>

                <time title="09 de Outubro, às 15h41min. " dateTime="2024-10-09 15:41:35">Publicado há 1h.</time>
            </header>

            <div className={styles.content}>
                <p>Acesse o meu link!</p>
                <p>  <a href="">www.google.com.br</a></p>

            </div>

            <form className={styles.commentForm}>
                <strong> Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário." />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}