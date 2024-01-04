import PostComp from "../../Component/PostData";


function HomePage(prop) {
    return <PostComp brand={prop.brand} title={prop.title} description={prop.description} price={prop.price} />
}

export default HomePage;