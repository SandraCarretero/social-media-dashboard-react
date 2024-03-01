import { SMALL_CARD_DATA } from '../../constants/small-card-data';
import SmallCard from '../small-card/SmallCard';
import { StyledSmallCardContainer, StyledTitle } from './small-card-container.styles';

const SmallCardContainer = () => {
	return (
		<>
		<StyledTitle>Overview - Today</StyledTitle>
		<StyledSmallCardContainer>
			
			{SMALL_CARD_DATA.map(card => (
				<SmallCard key={card.id} {...card} />
			))}
		</StyledSmallCardContainer>
		</>
	);
};

export default SmallCardContainer;
