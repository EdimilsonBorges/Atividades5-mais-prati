import { Container, Ul, Link } from "./style";

const Header = () => {
    return (
            <Container>
                <nav>
                    <Ul>
                        <li><Link to={"/"}>Inicio</Link></li>
                        <li><Link to={"/favorites"}>Favoritos</Link></li>
                    </Ul>
                </nav>
            </Container>
    )
}
export default Header;