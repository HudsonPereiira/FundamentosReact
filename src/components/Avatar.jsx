import styles from './Avatar.module.css'; // Importa o arquivo de estilos CSS como um módulo para uso no componente

export function Avatar({ hasBorder = true, src }) { // Define o componente Avatar com duas props: hasBorder e src
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} // Aplica a classe CSS avatarWithBorder ou avatar dependendo do valor de hasBorder
            src={src} // Define a URL da imagem com a prop src
        />
    );
}
