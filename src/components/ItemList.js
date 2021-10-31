import { useState, useEffect } from 'react'
import Item from "./Item"


export default function ItemList({ items }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
            setProducts(items);
    }, [items]);

    if (products.length === 0) {
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
                <h1 className="mx-3 mb-4">Galería</h1>
                <div className="d-flex">
                    {products.map((e, i) => {
                        return (
                            <>
                                <Item id={e.id} title={e.title} description={e.description} price={e.price} pictureUrl={e.pictureUrl} />
                            </>
                        );
                    })}
                </div>
            </div>
        );
    }
}