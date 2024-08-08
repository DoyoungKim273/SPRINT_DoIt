import { Link } from "react-router-dom"
import logoLarge from "../image/img/logoLarge.png"

export default function LogoBar() {

  return (
    <header
    style={{
        width: "1920px",
        height: "60px",
        borderBottom: "1px solid #E2E8F0",
        background: "#FFFFFF",
        position: "absolute",
    }}>
        <Link to="/">
        <img src={logoLarge} alt="logoLarge"
        style={{
            width: "151px",
            height: "40px",
            top: "10px",
            left: "360px",
            position: "absolute",
        }}/>
        </Link>
    </header>
  )
}
