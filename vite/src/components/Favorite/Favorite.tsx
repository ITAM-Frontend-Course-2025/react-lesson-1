import React from 'react'
import styles from './Favorite.module.css'

const Favorite: React.FC = () => {
  const favoriteItems = [
    {
      title: "Любимые вещи:",
      items: ["Мисис", "мои питомцы", "капучинка"]
    },
    {
      title: "В свободное время я:",
      items: ["учу что-то новое", "смотрю сериальчики", "во что-нибудь играю"]
    },
    {
      title: "А тут я ни знаю что уже написать:",
      items: ["Пу пу пу", "Вот так вот", "Дааа..."]
    }
  ]

  return (
    <div className={styles.favorite}>
      {favoriteItems.map((item, index) => (
        <div key={index} className={styles.favoriteItem}>
          <strong>{item.title}</strong>
          <br />
          <br />
          {item.items.map((subItem, subIndex) => (
            <div key={subIndex}>- {subItem}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Favorite;