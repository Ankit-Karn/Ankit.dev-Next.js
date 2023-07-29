import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/6803523/pexels-photo-6803523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore repellendus sint, eius ea excepturi, aut, iure fugiat repudiandae ullam itaque molestias pariatur dolores explicabo quos quidem distinctio nihil ipsa?<br /><br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vero quibusdam fugiat nemo labore ab debitis esse impedit? Aliquam culpa modi eum accusantium illum dolore voluptatum inventore exercitationem nobis voluptas.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quae quidem suscipit veniam deleniti cum sapiente eaque ipsam praesentium molestias, quia dolorem dolorum itaque consequatur, obcaecati quod harum libero laborum.<br /><br /> - Dynamic Websites<br /><br /> - Fast and Handy</p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About
