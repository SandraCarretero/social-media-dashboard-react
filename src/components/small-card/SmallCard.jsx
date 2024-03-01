import {
	StyledChangeToday,
	StyledIcon,
	StyledNumber,
	StyledSmallCard,
	StyledSmallCardFooter,
	StyledTitle
} from './small-card.styles';

const SmallCard = ({
	icon,
	iconName,
	title,
	number,
	arrowIcon,
	changeToday
}) => {
	return (
		<StyledSmallCard>
			<StyledTitle>{title}</StyledTitle>
			<StyledIcon src={icon} alt={iconName} />
			<StyledNumber>{number}</StyledNumber>
			<StyledSmallCardFooter>
				<img src={arrowIcon} alt='' />
				<StyledChangeToday $arrowIcon={arrowIcon}>
					{changeToday}
				</StyledChangeToday>
			</StyledSmallCardFooter>
		</StyledSmallCard>
	);
};

export default SmallCard;
