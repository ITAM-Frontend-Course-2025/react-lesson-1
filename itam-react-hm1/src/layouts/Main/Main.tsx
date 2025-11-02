import classes from './main.module.css'

const Main = () => {
  return (
    <main className="info container">
      <div className={classes.info__inner}>
        <div className={classes.info__myStory}>
          <h2 className="my-story__title title">Обо мне</h2>
          <p className={classes.myStory__text}>Учусь на 4 курсе Управления Проектами, хочу стать фронтенд-разработчиком</p>
          <p className={classes.myStory__text}>Я из города Донецк, поступил на менеджмент сначала на бюджет, до конца 2 курса я себе говорил, что никогда не стану программистом и что мне это абсолютно не интересно.</p>
          <p className={classes.myStory__text}>Уже на 3 курсе у нас стали появляться предметы, кое-как связаные с этой сферой, начал с SQL и мне понравилось. В следующем семестре у нас начались пары по HTML + CSS</p>
          <p className={classes.myStory__text}>И вот так, параллельно просматривая курсы от Ламкова и посещая пары я стал понимать на каком-то уровне HTML + CSS и чуть позже прошел еще курс JS от Ламкова. Мне конечно хотелось перейти в ИКН, но я понимаю, что платить мне не особо хотелось, а если перепоступать, то меня заберут на сво (а я домой обратно не хочу).</p>
          <p className={classes.myStory__text}>Сейчас работаю маркетологом-аналитиком, иногда пишу скрипты на питоне</p>
          <p className={classes.myStory__text}>Задумываюсь о поступлении на магу в ИКН (может быть даже на платную магу Веб-разработчик, но пока еще не спрашивал)</p>
        </div>

        <div className={classes.info__additional}>
          <div className="additional__facts">
            <h2 className="facts__title title">Интересные факты</h2>
            <ul className="facts__list">
              <li className="facts__item">Играл в сборной по баскетболу на 1-2 курсе</li>
              <li className="facts__item">Поступил в университет в 16 лет</li>
            </ul>
          </div>

          <div className="additional__soc1als">
            <h2 className="soc1als__title title">Cоц. сети</h2>
            <div className={classes.soc1als__images}>
              <a
                className="soc1als__image"
                href="https://t.me/amadeooo"
                target="_blank"
              >
                <img
                  src="/telegram.png"
                  alt="telegram"
                  loading="lazy"
                />
              </a>
              <a
                className="soc1als__image"
                href="https://www.instagram.com/amade.ooo"
                target="_blank"
              >
                <img
                  src="/instagram.png"
                  alt="instagram"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main