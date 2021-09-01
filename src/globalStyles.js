import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
  	font-family: "Open Sans Condensed";
  	padding: 20px 60px;
  	margin: 0;
  	-moz-osx-font-smoothing: grayscale;

		@media screen and (max-width: 800px ) {
			padding: 10px;
		}
	}

	* {
	  box-sizing: border-box;
	}

	a {
	  text-decoration: none;
	  color: black;
	}

	code {
	  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
	    monospace;
	}
`;

export default GlobalStyle;
