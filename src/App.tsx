
import { useState } from 'react'
import { Modal } from './components/Modal'
import { Title } from './components/Title'
import { UploadForm } from './components/UploadForm'
import { UploadImage } from './components/UploadImage'

function App() {

  const [selectedImage, setSelectedImage] = useState<string>("")

  return (
    <div className='App'>
      <Title />
      <UploadForm/>
      <UploadImage setSelectedImage={setSelectedImage}/>
      {selectedImage !== "" && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
    )
  }


export default App
