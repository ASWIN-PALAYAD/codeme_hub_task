import { Link } from "react-router-dom"

const Nabbar = () => {
  return (
    <div>
        <div className="logo">
                <img src={'/src/assets/logo.png'} height={'100px'} />
        </div>
        <div className="nav_icons">
            <Link></Link>
        </div>
    </div>
  )
}

export default Nabbar