import styles from './Banner.module.css'

const Text =()=>{

    return(
        <>
        <div className={styles.block}> 
            <h2>a few words about me and the project:</h2>
            <p>My name is Maksim. I'm a first-year student at NUST MISIS, and this is my first project. You won't see any particularly cool designs; I believe beauty lies in simplicity.</p>
        </div>
        <div className={styles.block}> 
            <h2>so there is my contacts:</h2>
            <p>If you're interested, you can write me on <i className="fa-brands fa-telegram"></i><a href="https://t.me/enfantpunk" target="_blank">enfantpunk</a> My other works can be found here: <i className="fa-brands fa-github"></i><a href="https://github.com/dysthmia" target="_blank">dysthmia</a></p>
        </div>
        </> 
    )
}

export default Text