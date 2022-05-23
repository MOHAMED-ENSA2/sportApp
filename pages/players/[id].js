import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import http  from '../../service/http'
import {apiEndpoint} from "../../config/configData.json"
import MainCard from "../../components/MainCard"
import Card from "../../components/Card"
import styles from "../../styles/League.module.css"
import LastNews from '../../components/LastNews'
import About from '../../components/About'

function League() {
  const router = useRouter()
  const {id} = router.query
  const [selectedItem , setSelectedItem] = useState("news")
  const [player , setPlayer] = useState({})

  const handleSelection = (target) => {
    setSelectedItem(target)
  }

  useEffect(() => { 
    if(id){
        http.get(apiEndpoint + "/players/" + id)
            .then(res => {
                console.log(res.data) 
                setPlayer(res.data)
            })
            .catch(error => console.error(error))
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
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

        </Head>
        <div className={styles.wrapper}>
            <div className={styles.player}>
                <div className={styles.playerphoto}>
                    {   
                        player.Photo &&
                        <Image
                            src={player.Photo}
                            layout='fill'
                        />
                    }
                    <div className={styles.teamlogo}>
                       { player.Team &&
                        <Image
                            src={player.Team.Logo}
                            width="30"
                            height = "30"
                        />
                        }
                    </div>
                </div>
                <div className={styles.playername}>
                    <div className={styles.number}>{player.Number}</div>
                    <div>{player.Name} </div>
                </div>
                <div className={styles.playernumber}>
                    {player.Number}
                </div>
            </div>
            <div className={styles.sections}>
                <div onClick={() => handleSelection("about")} style = {{background: selectedItem === "about" ? "rgb(var(--clr-grey))" : ""   }}>
                    المعلومات
                </div>
                <div onClick={() => handleSelection("news")} style = {{background: selectedItem === "news" ? "rgb(var(--clr-grey))" : ""   }}>
                    الأخبار
                </div>
                <div onClick={() => handleSelection("matches")} style = {{background: selectedItem === "matches" ? "rgb(var(--clr-grey))" : ""   }}>
                    فيديو
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
                : selectedItem === "about" 
                ? <About 
                    birthday = {player.Birthdate.slice(0,10) || ""}  
                    nationality = {player.Nationality.Value || ""}
                    height = {player.Height || ""} 
                    weight = {player.Weight || ""}
                    number = {player.Number || ""}
                    teamName = {player.Team.Name || ""}
                    teamLogo = {player.Team.Logo || ""}
                    age = {(2022 - parseInt(player.Birthdate.slice(0,4)) ) || ""}
                    nationalTeamName = {player.NationalTeam ? player.NationalTeam.Name : ""}
                    nationalTeamLogo = {player.NationalTeam ? player.NationalTeam.Logo : ""}
                  />
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