import { Header } from './components/Header'
import { Post } from './components/Post'
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from './components/Sidebar'
import { PostProps } from './dto'

const posts: PostProps[] = [

  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alexandre-cartaxo.png',
      name: 'Alexandre Cartaxo',
      role: 'Algum cargo'

    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2024-12-05 23:00:00'),

  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/wwchacalww.png',
      name: 'Alexandre Oliveira',
      role: 'Algum outro cargo'

    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2022-05-03 20:00:00'),

  },

]



export function App() {
  return (
    <>

      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar


          />
          <main>
            {posts.map(post => {
              return (<Post

                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}

              />)
            })}
          </main>
        </div>


      </div>





    </>


  )
}


