import { useState } from "react";
import './reset.css';
import styles from './App.module.css';
import './App.css';

function App() {
  const [name, setName] = useState("Тая Гагаркина");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <header className={styles.panel}>
        <nav>
          <ul>
            <li><a href="#about_me">О себе</a></li>
            <li><a href="#hobby">Хобби</a></li>
            <li><a href="#travels">Путешествия</a></li>
            <li><a href="#dreams">Мечты</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainpage}>
        <section id="about_me">
          <h2 className={styles.about_me__title}>О себе</h2>

          <div className={styles.about_me1}>
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button onClick={() => setIsEditing(false)}>Сохранить</button>
              </div>
            ) : (
              <h1
                onClick={() => setIsEditing(true)}
                style={{ cursor: 'pointer' }}
              >
                Меня зовут {name}.
              </h1>
            )}

            <p>Я начинающий фронтенд-разработчик.</p>

            <div className={styles.about_me2}>
              <p>Я хочу развиваться в IT, но пока не могу определиться с направлением.</p>
              <p>Иногда тянет к веб-разработке, иногда — к созданию мобильных приложений, дизайну,</p>
              <p>3D-анимации или даже разработке игр. Я ищу себя в этой сфере</p>
              <p>и хочу попробовать всё, чтобы понять, что вдохновляет больше всего.</p>
            </div>

            <div className={styles.photos_for_about_me}>
              <img src="/img/firstimg.jpg" alt="firstimg" />
              <img src="/img/secondimg.jpg" alt="secondimg" />
              <img src="/img/thirdimg.jpg" alt="thirdimg" />
            </div>
          </div>
        </section>

        <section id="hobby">
          <h2 className={styles.hobby__title}>Хобби</h2>
          <div className={styles.hobby__group}>
            <article className={styles.hobby__item}>
              <h4>Искусство</h4>
              <p className={styles.hobby__small_text}>
                С трёх лет я ходила на занятия по рисованию, и именно тогда появилось моё увлечение искусством.
                Позже я поступила в художественную школу и закончила её с красным дипломом. Долгое время я даже
                думала связать свою жизнь с дизайном или архитектурой. Искусство по-прежнему занимает особое
                место в моей жизни — не могу представить себя без творчества.
              </p>
            </article>
            <article className={styles.hobby__item}>
              <h4>Танцы</h4>
              <p className={styles.hobby__small_text}>
                Мой путь в танцах начался с самого раннего возраста. Сначала я занималась хореографией, позже
                меня отправили на латиноамериканские танцы, а потом я открыла для себя контемпорари. Последние
                несколько лет я занималась джаз-фанком — стилем, который объединяет разные современные
                направления, от хип-хопа до вога.
              </p>
            </article>
            <article className={styles.hobby__item}>
              <h4>Serialoholic</h4>
              <p className={styles.hobby__small_text}>
                Когда мой список сериалов перевалил за сотню, я перестала считать и записывать, что уже
                посмотрела. Люблю сериалы и смотрю их где-угодно и когда-угодно. Дома, за едой, в метро, на
                парах, в машине, в самолете, перед сном и во время абсолютно любых сборов. Если я не отвечаю вам
                — значит, вы отправили не самое интригующее сообщение, чтобы я отвлеклась от очередной серии :)
              </p>
            </article>
            <article className={styles.hobby__item}>
              <h4>Пить кофе</h4>
              <p className={styles.hobby__small_text}>
                Можно, пожалуйста, раф на банановом с лесным орехом или айс-капучино с каштановым сиропом..
              </p>
            </article>
          </div>
        </section>

        <section id="travels">
          <h2 className={styles.travels__title}>Путешествия</h2>
          <div className={styles.travels}>
            <h2>Цель: побывать в каждом уголке мира</h2>
          </div>
          <div className={styles.country_block}>
            <div className={styles.photos_for_travels}>
              <img src="/img/turkey1img.jpg" alt="turkey1img" />
              <img src="/img/turkey2img.jpg" alt="turkey2img" />
              <img src="/img/bulgaria1img.jpg" alt="bulgaria1img" />
              <img src="/img/bulgaria2img.jpg" alt="bulgaria2img" />
              <img src="/img/thai1img.jpg" alt="thai1img" />
              <img src="/img/thai2img.jpg" alt="thai2img" />
            </div>
          </div>
          <div className={styles.small_text_travels}>
            Я побывала в таких прекрасных местах как: Турция, Болгария, Таиланд, Греция, Египет, Испания, Франция,
            Чехия, Германия, Кипр, Майорка, Тенерифе, Украина, Казахстан, Киргизия. И это только начало. Список
            стран, где я оставлю свой след, будет только расти!
          </div>
        </section>
        <section id="dreams">
          <h2 className={styles.dreams__title}>Мечты</h2>
          <div className={styles.dreams__group}>
            <article className={styles.dream}>
              <h3 className={styles.dream_title}>Завести сфинкса</h3>
              <div className={styles.small_text_dreams}>
                Осуждаю всех, кому не нравятся сфинксы. Самые красивые и милые создания во всем человечестве!!!
              </div>
            </article>
            <article className={styles.dream}>
              <h3 className={styles.dream_title}>Пожить у моря</h3>
              <div className={styles.small_text_dreams}>
                Хочу жить на берегу у моря — всегда свежий воздух, пляж рядом, купайся когда только вздумается.
                Просыпаешься под шум волн, ужинаешь с видом на закат..
              </div>
            </article>
            <article className={styles.dream}>
              <h3 className={styles.dream_title}>Побывать в Азии</h3>
              <div className={styles.small_text_dreams}>
                Когда-нибудь я обязательно окажусь там и буду пробовать азиатскую еду, изучать архитектуру,
                любоваться природой и кормить милых панд, оленей и других чудесных существ!
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer className={styles.bottom_panel}>
        <ul>
          <li>
            <a href="https://t.me/taaayaaaa" target="_blank">
              Telegram: @taaayaaaa
            </a>
          </li>
          <li>
            <a href="https://instagram.com/xpuwie" target="_blank">
              Instagram: xpuwie
            </a>
          </li>
          <li>
            <a href="mailto: gagarkina.taya@gmail.com" target="_blank">
              Gmail: gagarkina.taya@gmail.com
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App;
