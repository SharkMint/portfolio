import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./chakra-theme";
import "./index.css";
import App from "./App";

// Inject Google Fonts for Poppins
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>,
	document.getElementById("root")
);
