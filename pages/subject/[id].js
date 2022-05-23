import React, {useState,useEffect}  from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import http from "../../service/http"
import {apiEndpoint} from "../../config/configData.json"
import LastNewsCard from '../../components/lastNewsCard'
import styles from "../../styles/Subject.module.css"

export default function Subject() {
  const router = useRouter()
  const {id} = router.query
  const [subject,setSubject] = useState({})

  useEffect(() => {
      if(id){
          http.get(apiEndpoint + "/getSubject/" + id )
          .then((res) => {
              setSubject(res.data)
              console.log("subject : " , res.data)
          })
          .catch((error) => console.error(error))
      }
  } , [id])

  return (
    <div className={styles.container}>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

      </Head>

      <div className={styles.wrapper}>
          <div className= {styles.title} >
              {subject.title}
          </div>
          <div className={styles.time}>
                نشر منذ 4 ساعات
          </div>
          <div>
              <Image
                src= {"/images" + subject.image}
                width = "644"
                height = "367"
              />
          </div>
          <div className={styles.text}>
            {subject.content}
          
          </div>
      </div>

      <div className={styles.left}>
          <div className={styles.section}>
            <div className={styles.lefttitle}>
                <div className={styles.line}></div>
                <div className={styles.main}>أهم وآخر الأخبار </div>
                <div className={styles.line}></div>
            </div>
            <LastNewsCard image = "/images/img1.jpg" type = "B"  />
            <LastNewsCard image = "/images/salah.jpg" type = "B"  />
            <LastNewsCard image = "/images/img2.jpg" type = "B"  />
            <LastNewsCard image = "/images/img3.jpg" type = "B"  />
          </div>

          <div className={styles.section}>
            <div className={styles.lefttitle}>
                <div className={styles.line}></div>
                <div className={styles.main}>أهم وآخر ألأخبار </div>
                <div className={styles.line}></div>
            </div>
            <LastNewsCard image = "/images/salah.jpg" type = "B"  />
            <LastNewsCard image = "/images/img2.jpg" type = "B"  />
            <LastNewsCard image = "/images/img1.jpg" type = "B"  />
          </div>

      </div>
    </div>
  )
}
