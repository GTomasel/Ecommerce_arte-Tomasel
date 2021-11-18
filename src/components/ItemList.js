import { useState, useEffect } from 'react'
import Item from "./Item"


export default function ItemList({ items, category }) {

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
            <div className="mx-5">
                <h1 className="mx-3 mb-4">Galería {category}</h1>
                <div className="d-flex flex-wrap">
                    {products.map((e, i) => {
                        return (
                            <>
                                <Item id={e.id} title={e.title} pictureUrl={e.pictureUrl} />
                            </>
                        );
                    })}
                </div>
            </div>
        );
    }
}