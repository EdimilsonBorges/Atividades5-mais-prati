
import PageNotFoundImage from '../../assets/images/pageNotFound.svg';
import {Container,ImgNotFound} from './style';
const PageNotFound = () => {
    return (
        <>
            <Container>
                <ImgNotFound src={PageNotFoundImage}/>
            </Container>
        </>
    );
}
export default PageNotFound;