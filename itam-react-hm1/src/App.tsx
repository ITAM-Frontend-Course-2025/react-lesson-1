import Header from "./layouts/Header/Header.tsx";
import Main from "./layouts/Main/Main.tsx";
import {useEffect, useState} from "react";

const App = () => {
  const [textName, setTextName] = useState(() => {
    const savedName = localStorage.getItem('name')

    if(savedName) {
      return JSON.parse(savedName)
    }

    return 'Миша'
  })
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    localStorage.setItem('name',JSON.stringify(textName))
  }, [textName]);

  return (
    <>
      <Header
        textName={textName}
        setTextName={setTextName}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <Main />
    </>
  )
}

export default App