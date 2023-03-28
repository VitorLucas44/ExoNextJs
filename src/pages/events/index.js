const Page = ({ title }) => {
    return (
        <div>
        <h1> {title} </h1>
        <div>
        <a href="">
        <img/>
        <h2>Event in London</h2>
        
            </a>
            <a href="">
            <img/>
            <h2>Event in San Fransico</h2>
            
            </a>
            <a href="">
            <img/>
            <h2>Event in Barcelona</h2>
            
            </a>
        </div>
        </div>

    )
}
export default Page;

export function getServerSideProps (){   
    return {
        props:{
            title:'hello everyone!',
        }
    }
}