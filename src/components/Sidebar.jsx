
import {PencilLine} from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar.jsx';

export function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
            <img
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&50=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%50">
            </img>

            <div className={styles.profile}>
                <Avatar src = "https://github.com/maykbrito.png" />

                <strong> Hudson Pereira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )

}
