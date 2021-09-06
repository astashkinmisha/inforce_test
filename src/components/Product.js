import './Product.css'

export default function Product({product:{id, title, description, category, image}}){

    // let handleDetailsInfo = (event) => {
    //   console.log('')
    // };
    return (
        <div className={'wrapper'}>
            <div className={'product-box'}>
            <h1>{id}. {title}</h1>
            <p><i>Desc: {description}</i></p>
            <p>Cat: {category}</p>
            <img className={'img'} src={image} alt=""/>
            {/*<button onClick={handleDetailsInfo}>show details</button>*/}
            </div>
        </div>
    );
}
