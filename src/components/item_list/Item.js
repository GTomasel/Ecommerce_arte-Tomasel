import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

const Item = ({ id, title, pictureUrl, fadeInTime }) => {

    const linkDetail = "/item/" + id

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { opacity: fadeInTime }
    })

    return (
        <animated.div style={fadeIn}>
            <div className="card text-white bg-dark d-flex flex-column mx-4 align-items-center justify-content-between">
                <div className="card-header">{title}</div>
                <img className="mx-4 cardImg" src={pictureUrl} alt="Foto del producto" />
                <div className="p-3">
                    <Link to={linkDetail}><button className="mx-3 px-1" >Ver más detalles</button></Link>
                </div>
            </div>
        </animated.div>
    )

}

export default Item