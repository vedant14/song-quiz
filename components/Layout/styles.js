import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const LayoutWrapper = styled.div`
	margin: 0 auto;
	background-color: ${colors.primaryBlack};
	background-size: 100%;
	> main {
		margin-top: 0px;
	}
`;
