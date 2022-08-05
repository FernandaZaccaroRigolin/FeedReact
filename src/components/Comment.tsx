import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps{
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state +1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://media-exp1.licdn.com/dms/image/C4E03AQE6_JnND6STTA/profile-displayphoto-shrink_400_400/0/1653591822128?e=1662595200&v=beta&t=-AHYiP-oL2Tabk4jEtPqvVr5Uwe50XF3FlbNFE_qJgI" alt=""/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent} >
          <header> 
            <div className={styles.authorAndTime}> 
              <strong>Fernanda Rigolin</strong>   
              <time title="06 de julho as 09:33h" dateTime="2022-07-06">Cerca de 1h atrás</time>                       
            </div> 

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>  
          <p>{content}</p>                             
        </div> 
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>        
    </div>          
  )

  /*
  return (
    

    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://media-exp1.licdn.com/dms/image/C4E03AQE6_JnND6STTA/profile-displayphoto-shrink_400_400/0/1653591822128?e=1662595200&v=beta&t=-AHYiP-oL2Tabk4jEtPqvVr5Uwe50XF3FlbNFE_qJgI" alt=""/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent} >
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernanda Rigolin</strong>
              <time title=`06 de julho as 09:33h` dateTime="2022-07-06">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>
          <p>{content}</p>

        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>
    </div>
  
  )
  */


}