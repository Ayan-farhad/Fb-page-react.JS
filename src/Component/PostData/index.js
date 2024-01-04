function PostComp(prop){
    return <div>
        <h3 style={{marginLeft:10}}>Brand: {prop.brand}</h3>
        <h3 style={{marginTop: 10 , marginLeft:10 }}>Title: {prop.title} </h3>
        <p style={{marginLeft:10, fontSize:20 }}> {prop.description}</p>
        <h4 style={{marginLeft:10, fontSize:20 }}>Price : ${prop.price}</h4>
        
    </div>
}

export default PostComp;