import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: #20222f;
	padding: 2.25rem 1.5625rem;
	height: 14.6875rem;
`;

// MARGIN COLLAPSING

const StyledTitle = styled.h1`
	margin: 0;
	font-size: 1.5rem;
`;

const StyledSubtitle = styled.span`
	font-size: 0.875rem;
	color: #8c98c6;
	font-weight: bold;
`;

export { StyledHeader, StyledSubtitle, StyledTitle };
