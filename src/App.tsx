
// import { Card } from './Components/Card'
// import { Email } from './Components/Email'
// import { Card } from './Components/Create-cards/card'
// import { Image } from './Components/Create-cards/image'
import { ImageProvider } from './Components/Create-cards/imageContext'
import { Home } from './Components/Home'
// import { Massaging } from './Components/Massaging'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card/> */}
      {/* <Massaging/> */}
      {/* <Createcard/> */}

      {/* <Card /> */}
      <ImageProvider>
        <Home />
        {/* <Image/> */}
      </ImageProvider>
      {/* <Email/> */}
    </>
  )
}

export default App
