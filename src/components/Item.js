import { Link } from 'react-router-dom'

const Item = ({ id, title, description, price, pictureUrl }) => {

    const linkDetail = "/item/"+id

    return (
        <div className="card text-white bg-dark d-flex flex-column mx-4 align-items-center justify-content-between">
            <div className="card-header">{title}</div>
            <img className="mx-4 cardImg" src={pictureUrl} alt="Foto del producto"/>
            <div className="p-3">
                <Link to={linkDetail}><button className="mx-3 px-1" >Ver más detalles</button></Link>
            </div>
        </div>
    )
}

export default Item