import styled from 'styled-components';

const StyledBigCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-shrink: 0;
	width: 326px;
	height: 216px;
	padding-block: 2rem 24px;
	border-radius: 0.3125rem;
	background-color: #252b42;
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		top: -5px;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		${({ $borderColor }) =>
			$borderColor.includes('gradient')
				? `background-image: ${$borderColor}`
				: `background-color:${$borderColor}`}
	}

	@media screen and (width > 768px) {
		width: 255px;
		height: 216px;
	}

	@media (hover:hover){
		&:hover{
			background-color: #333A55
		}
	}
`;

const StyledBigCardHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	width: 86px;
	margin-bottom: 1rem;
`;

const StyledIcon = styled.img`
	width: 20px;
`;

const StyledUsername = styled.span`
	color: #8c98c6;
	font-size: 0.75rem;
`;

const StyledNumber = styled.span`
	font-size: 3.5rem;
	color: #fff;
	font-weight: bold;
`;

const StyledCategory = styled.span`
	font-size: 0.75rem;
	color: #8c98c6;
	letter-spacing: 5px;
	text-transform: uppercase;
	margin: 0;
	margin-bottom: 1.5625rem;
`;

const StyledBigCardFooter = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	width: fit-content;
`;

const StyledArrow = styled.img``;

const StyledChangesToday = styled.span`
	font-size: 0.75rem;
	color: ${({ $arrowIcon }) =>
		$arrowIcon.includes('up') ? '#1eb589' : '#DC414C'};
`;

export {
	StyledArrow,
	StyledBigCard,
	StyledBigCardFooter,
	StyledBigCardHeader,
	StyledCategory,
	StyledChangesToday,
	StyledIcon,
	StyledNumber,
	StyledUsername
};
