import { BIG_CARD_DATA } from '../../constants/big-card-data';
import BigCard from '../big-card/BigCard';
import { StyledBigCardContainer } from './big-card-container.styles';

const BigCardContainer = () => {
	return (
		<StyledBigCardContainer>
			{BIG_CARD_DATA.map(card => (
				<BigCard key={card.id} {...card} />
			))}
		</StyledBigCardContainer>
	);
};

export default BigCardContainer;
