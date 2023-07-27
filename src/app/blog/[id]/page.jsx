import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from "next/navigation"

async function getData(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store"
  })
  if(!res.ok){
    return notFound()
  }

  return res.json();
}

const BlogPost = async({params}) => {

  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus ab natus veritatis rerum facilis!
          </p>
          <div className={styles.author}>
            <Image 
              src="https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jenner Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem vel ullam exercitationem, quas dignissimos asperiores. Sequi, soluta. Tenetur veniam praesentium minima consequuntur accusantium omnis, minus, vero rerum eligendi perspiciatis odit. Nam veniam at illo delectus dicta saepe vel repellat doloremque architecto mollitia. Nostrum a voluptas nobis quod harum fugit sed iusto quam ut pariatur alias veniam esse possimus quae temporibus soluta illum necessitatibus perspiciatis eos quisquam aliquid, repellat tenetur aut. Deleniti tempore beatae distinctio laudantium officiis quos nulla consectetur. Voluptatibus, fugiat suscipit neque nisi ad eius nobis voluptatem. Non minima, expedita eligendi laboriosam voluptatem saepe reprehenderit pariatur consectetur quidem tempora doloribus, doloremque eius magnam odit ea sunt? Nobis recusandae culpa ullam soluta suscipit! Nam, dolor rem autem quaerat, consectetur voluptates sequi corrupti sed, laborum voluptas ullam iure repudiandae delectus adipisci sit enim a dignissimos earum odio aspernatur amet ipsam sapiente! Voluptate rem vel illo tenetur corporis facilis ab, laborum possimus necessitatibus et suscipit, obcaecati quam quasi maxime? Ad consectetur consequatur, beatae quis dolorum exercitationem at asperiores! Distinctio beatae ducimus consectetur ab molestias placeat tempore aliquam veritatis eum repellat libero sed ullam accusantium vel dicta, itaque eligendi exercitationem asperiores animi? Eius sint necessitatibus dolorum eveniet eum repellat ipsam dicta cumque porro.
        </p>
      </div>
    </div>
  )
}

export default BlogPost
