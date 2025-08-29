import { TitleCredit, Credit, CardCredit, ImageCredit, NameCredit, FunctionCredit } from './style';

const Credits = ({ credits, title }) => {

    return (
        <>
            <TitleCredit>{title}</TitleCredit>
            <Credit>
                {credits.filter((credit) => credit.profile_path != null).slice(0, 6).map((credit, index) => (
                    <CardCredit key={index}>
                        <ImageCredit src={`https://image.tmdb.org/t/p/w200/${credit.profile_path}`} alt={credit.name} title={credit.name} />
                        <NameCredit>{credit.name}</NameCredit>
                        <FunctionCredit>{credit.character ? credit.character : credit.department}</FunctionCredit>
                    </CardCredit>))}
            </Credit>
        </>
    );
}

export default Credits;