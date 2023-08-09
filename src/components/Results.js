import React from 'react'
import styled from "styled-components";

export const Results = ({ summoner, kda }) => {
	return (
		<div className="ResultsContainer">
			<h1 style={{ padding: `5vh` }}>{summoner}'s worst three champions</h1>
			<PodiumContainer>
				<div>
					<h1 style={{ textAlign: `center` }}>{kda[1][1]}</h1>
					<div className="second">
						<p>{kda[1][0]}</p>
					</div>
				</div>
				<div>
					<h1 style={{ textAlign: `center` }}>{kda[0][1]}</h1>
					<div className="first">
						<p>{kda[0][0]}</p>
					</div>
				</div>
				<div>
					<h1 style={{ textAlign: `center` }}>{kda[2][1]}</h1>
					<div className="third">
						<p>{kda[2][0]}</p>
					</div>
				</div>
			</PodiumContainer>
		</div>
	)
}

const PodiumContainer = styled.div`
  display: flex;
	flex-direction: row;
	width: 100%;
	align-items: end;
	justify-content: center;
`;