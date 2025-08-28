import { Container, Ul, Link, Logo } from "./style";
import { useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); 
      window.location.reload();
    }
  };

    return (
            <Container>
                <Logo to={"/"} onClick={handleHomeClick}>Filmes</Logo>
                <nav>
                    <Ul>
                        <li><Link to={"/"} onClick={handleHomeClick}>Inicio</Link></li>
                        <li><Link to={"/favorites"}>Favoritos</Link></li>
                    </Ul>
                </nav>
            </Container>
    )
}
export default Header;