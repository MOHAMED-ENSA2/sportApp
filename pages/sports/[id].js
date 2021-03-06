import React, {useState} from 'react'
import MainCard from "../../components/MainCard"
import Card from "../../components/Card"
import Head from 'next/head'

import styles from "../../styles/League.module.css"
import LastNews from '../../components/LastNews'
import Table from '../../components/Table'
import TopScorer from '../../components/TopScorer'
import Match from '../../components/Match'

function League() {
  
  const [selectedItem , setSelectedItem] = useState("news")

  const handleSelection = (target) => {
    setSelectedItem(target)
  }

  return (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

        </Head>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                الدوري الإنجليزي
            </div>
            <div className={styles.sections}>
                <div onClick={() => handleSelection("news")} style = {{background: selectedItem === "news" ? "rgb(var(--clr-grey))" : ""   }}>
                    الأخبار
                </div>
                <div onClick={() => handleSelection("table")} style = {{background: selectedItem === "table" ? "rgb(var(--clr-grey))" : ""   }}>
                    الترتيب
                </div>
                <div onClick={() => handleSelection("matches")} style = {{background: selectedItem === "matches" ? "rgb(var(--clr-grey))" : ""   }}>
                    المباريات
                </div>
                <div onClick={() => handleSelection("results")} style = {{background: selectedItem === "results" ? "rgb(var(--clr-grey))" : ""   }}>
                    النتائج
                </div>
                <div onClick={() => handleSelection("topscorer")} style = {{background: selectedItem === "topscorer" ? "rgb(var(--clr-grey))" : ""   }}>
                    الهدافين
                </div>
                <div onClick={() => handleSelection("other1")} style = {{background: selectedItem === "other1" ? "rgb(var(--clr-grey))" : ""   }}>
                    الإنتقالات
                </div>
                <div onClick={() => handleSelection("other2")} style = {{background: selectedItem === "other2" ? "rgb(var(--clr-grey))" : ""   }}>
                    الفيديو
                </div>
                <div onClick={() => handleSelection("other3")} style = {{background: selectedItem === "other3" ? "rgb(var(--clr-grey))" : ""   }}>
                    الفيديو
                </div>
            </div>
            {   selectedItem === "news" ?
                <div className={styles.main}>
                    <div className={styles.maincard}>
                        <MainCard image = "/images/salah.jpg" />
                        <LastNews />
                    </div>
                    <div className={styles.cards}>
                        <Card image = "/images/salah.jpg" />
                        <Card image = "/images/salah.jpg" />
                        <Card image = "/images/salah.jpg" />
                        <Card image = "/images/salah.jpg" />
                        <Card image = "/images/salah.jpg" />
                        <Card image = "/images/salah.jpg" />
                    </div>
                </div>
                : selectedItem === "table" 
                ? <Table/>
                : selectedItem === "topscorer" 
                ? <TopScorer/>
                : selectedItem === "matches"
                ? <Match image = "https://img.kooora.com/?i=o%2fl%2f22%2f439%2fitaly-serie-b-1.png" />
                :  <div className={styles.main}>
                        <div className={styles.maincard}>
                            <MainCard image = "/images/salah.jpg" />
                            <LastNews />
                        </div>
                        <div className={styles.cards}>
                            <Card image = "/images/salah.jpg" />
                            <Card image = "/images/salah.jpg" />
                            <Card image = "/images/salah.jpg" />
                            <Card image = "/images/salah.jpg" />
                            <Card image = "/images/salah.jpg" />
                            <Card image = "/images/salah.jpg" />
                        </div>
                    </div>
            }

        </div>
    </div>
  )
}

export default League