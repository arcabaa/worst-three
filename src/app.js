import React from 'react'
import Home from './components/Home';
import styled from "styled-components";

const App = () => {
	return (
		<AppContainer>
				<Home />
		</AppContainer>
	)
}

const AppContainer = styled.div`
  display: flex;
	flex-direction: row;
	height: 100vh;
	justify-content: center;
`;

export default App;
