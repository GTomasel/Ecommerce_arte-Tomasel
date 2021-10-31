import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Item = ({ title, description, price, pictureUrl }) => {

    return (
        <div className="text-white bg-dark d-flex flex-column mx-4 align-items-center">
            <div className="card-header">{title}</div>
            <img className="mx-4" src={pictureUrl} alt="Foto del producto"/>
            <div className="card-body d-flex flex-column align-items-center">
                {/* <span>{description}</span>
                <span>Precio: {price}</span> */}
            </div>
            <div className="p-3">
                {/* <p>Stock:</p>
                <button className="m-1" ><AiOutlineMinusCircle /></button>
                <button className="m-1" ><AiOutlinePlusCircle /></button> */}
                <button className="mx-3" >Ver más detalles</button>
            </div>
        </div>
    )
}

export default Item