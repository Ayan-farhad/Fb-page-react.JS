import { useState } from 'react'
import Gif from '../../assest/Gif.gif'
import like from '../../assest/Like.svg'
import Comment from '../../assest/Comment.svg'
import Share from '../../assest/share.svg'


function Feet(){
    const [showGif,setShowGif ] = useState(false)

    const mouseOver = ()=>{
      setShowGif(true);
    }

    const mouseOut = ()=>{
      setShowGif(false);
    }



    return  <div className='Btn'>
    <button onMouseOver={mouseOver} onMouseOut={mouseOut} className='Btn1' > <img src={like} alt='svg.img' style={{color:'gray' , marginRight:5 , marginBottom:7}}  /> Like</button>
   
    {showGif && <div style={{ display:'flex'}}>
      <img src='https://noobspace.com/aglynyst/2023/09/new-facebook-reactions-2023-noobspace.gif' 
      style={{position:'absolute' , top:750 , left:375 , width:400  ,height:100 , borderRadius:10 }} />
      </div>}

    <button className='Btn1'> <img src={Comment} alt='svg.img' style={{color:'gray' , marginRight:5 , marginBottom:7}} /> Comment</button>
    <button className='Btn1'> <img src={Share} alt='svg.img' style={{color:'gray ' , marginRight:5 , marginBottom:7}} /> Share</button>
  </div>

}

export default Feet;