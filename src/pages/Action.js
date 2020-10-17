import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/CatagoriesBody'
import Footer from '../components/Footer'

function Action () {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   getData('posts').then(response => setData(response))
  // }, [])
  return (
    <>
      <Navbar />
      <Body>
        Action
        {/* {data.map((item, index) => (
          <div key={index}>{item}</div>
        ))} */}
      </Body>
      <Footer />
    </>
  )
}
export default Action
