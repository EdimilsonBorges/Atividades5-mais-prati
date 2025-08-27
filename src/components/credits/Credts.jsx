import { TitleCredit, Credit, ImageCredit, NameCredit, FunctionCredit } from './style';

const Credits = ({ credits, title }) => {

    return (
        <>
            <TitleCredit>{title}</TitleCredit>
            <Credit>
                {credits.filter((credit) => credit.profile_path != null).slice(0, 5).map((credit, index) => (
                    <div key={index}>
                        <ImageCredit src={`https://image.tmdb.org/t/p/w200/${credit.profile_path}`} alt={credit.name} title={credit.name} />
                        <NameCredit>{credit.name}</NameCredit>
                        <FunctionCredit>{credit.character ? credit.character : credit.department}</FunctionCredit>
                    </div>))}
            </Credit>
        </>
    );
}

export default Credits;