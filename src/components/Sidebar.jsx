import { PencilLine } from 'phosphor-react'; // Importa o ícone PencilLine da biblioteca 'phosphor-react'
import styles from './Sidebar.module.css'; // Importa os estilos do módulo CSS
import { Avatar } from './Avatar.jsx'; // Importa o componente Avatar

export function Sidebar() { // Define o componente Sidebar
    return (
        <aside className={styles.Sidebar}> {/* Define um elemento <aside> com a classe de estilo Sidebar */}
            <img
                className={styles.cover} // Atribui a classe de estilo cover da Sidebar
                src="https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&50=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%50" // URL da imagem de capa
            >
            </img>

            <div className={styles.profile}> {/* Cria um contêiner para o perfil */}
                <Avatar src="https://github.com/maykbrito.png" /> {/* Componente Avatar com a imagem do perfil */}
                
                <strong> Hudson Pereira</strong> {/* Nome do usuário em negrito */}
                <span>Web Developer</span> {/* Descrição do usuário */}
            </div>
            <footer> {/* Rodapé da sidebar */}
                <a href="#"> {/* Link para editar o perfil */}
                    <PencilLine size={20} /> {/* Ícone de lápis para edição */}
                    Editar seu perfil {/* Texto do link */}
                </a>
            </footer>
        </aside>
    )
}
