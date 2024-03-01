import styled from 'styled-components';

const StyledSmallCard = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 23px;
	background-color: #252b42;
	border-radius: 0.3125rem;
	width: 326px;
	height: 125px;
	padding: 24px;

	@media screen and (width > 768px) {
		width: 255px;
	}
`;

const StyledTitle = styled.span`
	font-size: 0.875rem;
	font-weight: bold;
	color: #8c98c6;
`;

const StyledIcon = styled.img`
	width: 20px;
	justify-self: end;
`;

const StyledNumber = styled.span`
	font-size: 2rem;
	font-weight: bold;
`;

const StyledSmallCardFooter = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	width: fit-content;
	justify-self: end;
`;

const StyledChangeToday = styled.span`
	font-size: 0.75rem;
	color: ${({ $arrowIcon }) =>
		$arrowIcon.includes('up') ? '#1eb589' : '#DC414C'};
`;

export {
	StyledSmallCard,
	StyledIcon,
	StyledTitle,
	StyledNumber,
	StyledChangeToday,
	StyledSmallCardFooter
};
