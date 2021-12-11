import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
	color: ${colors.white};
	background: ${colors.primaryBlue};
	text-align: center;
	overflow: hidden;
	border-radius: 10px;
	margin-top: 140px;
	margin-bottom: 10px;
	padding: 30px 20px;
	@media screen and (min-width: 768px) {
		padding: 80px 30px;
		margin-top: 120px;
		margin-bottom: 60px;
	}
	> div#score {
		margin: 50px auto;
		> button {
			margin: 10px auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			> div {
				margin-right: 15px !important;
			}
			@media screen and (min-width: 768px) {
				margin: 10px auto;
			}
		}
	}
	> hr {
		width: 200px;
		margin: 30px auto;
	}
	> div#share > div#share-buttons {
		button {
			padding: 5px 20px;
		}
	}
`;
