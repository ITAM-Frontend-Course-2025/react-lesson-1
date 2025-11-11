import React from 'react'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import styles from './MainInfo.module.css'
import Favorite from '../Favorite/Favorite'

const MainInfo: React.FC = () => {
  const mainPhotoUrl = "https://sun9-29.userapi.com/s/v1/ig2/TGxnFqctINSjqlDzWyfw3QECnOyNf6_eFky-3N1U3aT4tHNbsiim7TuEx6sqYvO68TQHNPDqfskFYhrZz5pQL_yC.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x721,1080x1081,1279x1280&from=bu&cs=1279x0"
  const hoverPhotoUrl = "https://avatars.mds.yandex.net/i?id=f2b36b1420a8796bd4157c5145399cd5c1371229-10897519-images-thumbs&n=13"
  const gifUrl = "https://media1.tenor.com/m/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif"

  const handleImageHover = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.currentTarget as HTMLImageElement;
    target.src = hoverPhotoUrl;
  }

  const handleImageLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.currentTarget as HTMLImageElement;
    target.src = mainPhotoUrl;
  }

  return (
    <div className={styles.mainInfo}>
      <div className={styles.contentGrid}>
        <img 
          src={mainPhotoUrl} 
          alt="фоточка" 
          className={styles.mainPhoto}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
        
        <Favorite/>
        
        <PersonalInfo />
        
        <div className={styles.footer}>
          <h2 className={styles.footerText}>
            У автора данной странички закончилось воображение. Дождитесь загрузки...
          </h2>
          <img 
            src={gifUrl}
            alt="Never gonna give you up" 
            className={styles.gif}
          />
        </div>
      </div>
    </div>
  )
}

export default MainInfo