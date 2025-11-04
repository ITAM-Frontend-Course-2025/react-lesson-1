import React from "react";
import { useState } from 'react';
import styles from './aboutMe.module.css'
import stamp from '../assets/stamp.png'
import me from '../assets/Me.jpg'

export default function AboutMe() {
  const [name,setName] = useState('Мушкина Виктория')
  const[isEditing,setIsEditing] = useState(false)
  const [newName, setNewName] = useState(name);

  const handleEditClick = () => {
    setIsEditing(true);
    setNewName(name);
  };

  const handleSaveClick = () => {
    setName(newName);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setNewName(name);
    setIsEditing(false);
  };

  return(
    <section className={styles.about_me}>
    <div className="container">
      <img src={stamp} alt="Stamp" className={styles.stamp} />
      <div className={styles.numbers}>0610 020250</div>
      <div className={styles.about_me__flex}>
      <img src={me} alt="Me" />
      <div className={styles.about_me__text}>
        <div>
          {
            isEditing? 
            <div className={styles.inp}>
              <input type="text" autoFocus value={newName} onChange={(e) => setNewName(e.target.value)} />
              <div className={styles.buttons}>
                <button onClick={handleSaveClick}>Сохранить</button>
                <button onClick={handleCancelClick}>Отмена</button>
              </div>
            </div>
            :<h2 className={styles.textH2} onClick={handleEditClick}>{name}</h2>
          }
        </div>
        <p className={styles.textP}>
        Пол: <span>Frontend-разработчик</span> <br /> Дата (пере)рождения:
        <span>13.09.2025</span> <br /> Место рождения:
        <span>НИТУ МИСИС, <br /> “Вайбатон”</span>
        </p>
      </div>
      </div>
    </div>
  </section>)
}