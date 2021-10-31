import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Item = ({ detail }) => {

    if (detail.length === 0) {
        return (
            <>
                <div className="d-flex mx-3 align-items-center">
                    <img src="/loading.gif" alt="cargando" width="50px" />
                    <p className="mx-2">Cargando productos...</p>
                </div>
            </>
        )
    } else {
        return (
            <div>
                <h3 className="mx-3 mb-1 mt-5">Detalle de item</h3>
                <div className="d-flex">
                    <div className="text-white bg-dark d-flex flex-column mt-4 mx-4 align-items-center">
                        <div className="card-header">{detail.title}</div>
                        <img src={detail.pictureUrl} alt="Foto del producto" />
                        <div className="card-body d-flex flex-column align-items-center">
                            <span>Detalles: {detail.description}</span>
                            <span>Precio: {detail.price}</span>
                        </div>
                        <div className="p-3">
                            <p>Stock: 10</p>
                            <button className="m-1" ><AiOutlineMinusCircle /></button>
                            <button className="m-1" ><AiOutlinePlusCircle /></button>
                            <button className="mx-3" >Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item