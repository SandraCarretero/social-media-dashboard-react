import styled from 'styled-components';

const StyledTitle = styled.span`
	display: block;
	font-size: 1.5rem;
	font-weight: bold;
	padding: 2.25rem 1.5625rem;
`;

const StyledSmallCardContainer = styled.div`
	display: grid;
	justify-content: center;
	gap: 1.5rem;
	margin-bottom: 4.6875rem;

	@media screen and (width>=768px) {
		grid-template-columns: repeat(4, 15.9375rem);
	}
`;

export { StyledSmallCardContainer, StyledTitle };
