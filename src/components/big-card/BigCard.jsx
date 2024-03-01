import {
	StyledArrow,
	StyledBigCard,
	StyledBigCardFooter,
	StyledBigCardHeader,
	StyledCategory,
	StyledChangesToday,
	StyledIcon,
	StyledNumber,
	StyledUsername
} from './big-card.styles';

const BigCard = ({
	icon,
	iconName,
	username,
	number,
	category,
	arrowIcon,
	changesToday,
	borderColor
}) => {
	return (
		<StyledBigCard $borderColor={borderColor}>
			<StyledBigCardHeader>
				<StyledIcon src={icon} alt={iconName} />
				<StyledUsername>{username}</StyledUsername>
			</StyledBigCardHeader>
			<StyledNumber>{number}</StyledNumber>
			<StyledCategory>{category}</StyledCategory>
			<StyledBigCardFooter>
				<StyledArrow src={arrowIcon} alt='arrow icon' />
				<StyledChangesToday $arrowIcon={arrowIcon}>
					{changesToday}
				</StyledChangesToday>
			</StyledBigCardFooter>
		</StyledBigCard>
	);
};

export default BigCard;
