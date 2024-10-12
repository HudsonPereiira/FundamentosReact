import styles from './Post.module.css'; // Importa o arquivo CSS para estilização do componente Post
import { Comment } from './Comment.jsx'; // Importa o componente Comment
import { Avatar } from './Avatar.jsx'; // Importa o componente Avatar

export function Post() { // Declara o componente funcional Post
    return (
        <article className={styles.post}> {/* Define o elemento <article> para o post, aplicando a classe de estilos correspondente */}
            <header> {/* Início do cabeçalho do post */}
                <div className={styles.author}> {/* Contêiner para as informações do autor */}
                    <Avatar src="https://github.com/maykbrito.png" /> {/* Exibe o avatar do autor com a imagem fornecida */}
                    <div className={styles.authorInfo}> {/* Contêiner para as informações do autor */}
                        <strong>Thanos</strong> {/* Nome do autor em negrito */}
                        <span>Destruidor de Mundos</span> {/* Descrição ou título do autor */}
                    </div>
                </div>

                <time title="09 de Outubro, às 15h41min." dateTime="2024-10-09 15:41:35">Publicado há 1h.</time> {/* Data e hora da publicação */}
            </header>

            <div className={styles.content}> {/* Contêiner para o conteúdo do post */}
                <p>Acesse o meu link!</p> {/* Texto do post */}
                <p>  <a href="">www.google.com.br</a></p> {/* Link incluído no post */}
            </div>

            <form className={styles.commentForm}> {/* Formulário para comentários */}
                <strong> Deixe seu feedback</strong> {/* Título do formulário de comentários */}
                <textarea
                    placeholder="Deixe um comentário." /> {/* Área de texto para o usuário digitar o comentário */}
                <footer> {/* Rodapé do formulário */}
                    <button type="submit">Publicar</button> {/* Botão para enviar o comentário */}
                </footer>
            </form>
            <div className={styles.commentList}> {/* Contêiner para a lista de comentários */}
                <Comment /> {/* Exibe o componente Comment, que representa um comentário individual */}
            </div>
        </article>
    )
}
