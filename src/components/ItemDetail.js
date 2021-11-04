import ItemCount from "./ItemCount"


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
            <div div className="mx-5">
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
                            <ItemCount stock={10} initial={1} onAdd={function () { console.log("") }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item