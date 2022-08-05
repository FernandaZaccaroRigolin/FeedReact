import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src= "https://media-exp1.licdn.com/dms/image/C4E03AQE6_JnND6STTA/profile-displayphoto-shrink_400_400/0/1653591822128?e=1662595200&v=beta&t=-AHYiP-oL2Tabk4jEtPqvVr5Uwe50XF3FlbNFE_qJgI" /> 
        <strong>Fernanda Rigolin</strong>
        <span>Web Developes</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
      </a>
      </footer>
    </aside>

  );
}