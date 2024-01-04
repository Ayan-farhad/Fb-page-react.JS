import './App.css';
import HomePage from './Views/HomePage';
import { useState, useEffect } from 'react';
import FbImageLibrary from 'react-fb-image-grid'
import Topitems from './Component/PostData/Top'
import Feet from './Component/PostData/Feet'

function App() {
  const [postData, setPostData] = useState([])


  useEffect(() => {
    getApiData()
  }, [])


  function getApiData() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPostData(res.products);
      })

  }

  if (!postData.length) {
    return <h1>Loading...</h1>
  }





  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color:'blue' , fontWeight:'bold' }} >Facebook</h1>

        <div className='font'>
          {postData.map(item => (
            <div key={item.id}>
              <div className='FbStyle'>

                <Topitems />

                <div>
                  <HomePage brand={item.brand} title={item.title} description={item.description} price={item.price} />
                </div>

                <div >
                  <FbImageLibrary images={item.images}  />
                </div> <hr />

                <Feet />

              </div>
            </div>
          ))}
        </div>

      </header>
    </div>
  );
}

export default App;