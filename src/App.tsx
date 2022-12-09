import { Header } from './components/Header'
import { Post, PostProps } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'

import styles from './App.module.css'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: string

interface Post extends PostProps {
  id: number;
}

const posts:Post[]  = [
  {
    id: 1,
    author:{
      // avatarUrl:'https://media-exp1.licdn.com/dms/image/C4E03AQE6_JnND6STTA/profile-displayphoto-shrink_400_400/0/1653591822128?e=1662595200&v=beta&t=-AHYiP-oL2Tabk4jEtPqvVr5Uwe50XF3FlbNFE_qJgI',
      avatarUrl:'https://github.com/fernandazaccarorigolin.png',
      name: 'Fernanda Rigolin',
      role: 'Web Developer'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-01 15:00') 
  },
  {
    id: 2,
    author:{
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content:[
      { type: "paragraph", content: 'Fala galeraa 👋'},
      { type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-03 16:00') 
  },
  {
    id: 3,
    author:{
      avatarUrl:'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-06 20:00') 
  }
]


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key = {post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}                
              />
            )
          })}
        </main>
      </div>
    </div>
    )
}