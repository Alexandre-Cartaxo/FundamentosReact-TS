import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';


export function Sidebar() {

    return (

        <aside className={styles.sidebar}>

            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1622675235457-38708d51d6d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww'
            />

            <div className={styles.profile}>
                <Avatar src='https://github.com/alexandre-cartaxo.png'/>
                <strong>Alexandre Cartaxo</strong>
                <span>Web Developer</span>

                <footer>
                    <a href='#'>
                        <PencilLine size= {20} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>

    )
}