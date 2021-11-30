import { useState, useEffect } from 'react'
import { BiError } from 'react-icons/bi'
import Item from "./Item"
import Loading from "../misc/Loading"



export default function ItemList({ items, category, error }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(items);
    }, [items]);

    if (products.length === 0) {
        return (
            <Loading text="Cargando productos..." />
        )
    } else if (error === true) {
        return (
            <>
                <span className="mx-5 error"><BiError /> Hubo un problema al cargar los productos, intente nuevamente en unos minutos <BiError /></span>
                <button onClick={() => window.location.reload(false)}>Recargar página</button>
            </>
        )
    } else {
        return (
            <div className="d-flex flex-column align-items-center">
                <h1 className="mx-3 mb-5">Galería {category ? "de " + category + "s" : ""}</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    {products.map((e) => {
                        return (
                            <Item key={e.id} id={e.id} title={e.title} pictureUrl={e.pictureUrl} fadeInTime={800} />
                        );
                    })}
                </div>
            </div>
        );
    }
}