import styled from 'styled-components';

const StyledBigCardContainer = styled.div`
	position: relative;
	top: -80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	transform: translateZ(0);

	@media screen and (width>=768px) {
		flex-direction: row;
		justify-content: center;
	}
`;

export { StyledBigCardContainer };
