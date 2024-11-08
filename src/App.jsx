import {Header} from './components/Header.jsx';
import {Post} from './components/Post.jsx'
import {Sidebar} from './components/Sidebar.jsx';

import'./global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/hudsonpereiira.png',
      name: 'Hudson Pereira',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Acesse o meu link!'},
      {type: 'link', content: <a href="">www.google.com.br</a>},
    ],
    publishedAt: new Date('2023-05-08 20:00:15'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayke Brito',
      role: 'Educator'
    },
    content: [
      {type: 'paragraph', content: 'Acesse o meu link!'},
      {type: 'link', content: <a href="">www.google.com.br</a>},
    ],
    publishedAt: new Date('2023-05-10 20:00:15'),
  },

];


  

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
           author={post.author}
           content={post.content}
           publishedAt={'2023-05-10 20:00:15'}
           />
          )
          })}
          
        </main>

      </div>

    </div>

  )
}


