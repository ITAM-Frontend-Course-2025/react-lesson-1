import Header from "./layouts/Header/Header.tsx";
import Main from "./layouts/Main/Main.tsx";
import {useState} from "react";

const App = () => {
  const [textName, setTextName] = useState('Миша')
  const [isEditing, setIsEditing] = useState(false)

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