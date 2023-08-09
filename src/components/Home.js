import React, { useState } from 'react'
import styled from "styled-components";
import { PlayerSearch } from './playerSearch';
import { Results } from './Results'
import Spinner from './common/Spinner.js'

const Home = () => {

	const [loading, isLoading] = useState(false)
	const [kda, setKda] = useState()
	const [summoner, setSummoner] = useState('')

	{ 
		if (kda) {
			return (
				<HomeContainer>
					<Results kda={kda} summoner={summoner} />
				</HomeContainer>
			)
		} else if (!loading) {
			return (
				<HomeContainer>
					<h1 style={{ fontWeight: 700, fontSize: '2.75rem', margin: 0 }}>Worst Three</h1>
					<p style={{ textAlign: 'center' }}>Type a summoner name below and press enter to get that<br />summoners worst three champions played in their last 50 games</p>
					<PlayerSearch isLoading={isLoading} setKda={setKda} setSummoner={setSummoner} />
				</HomeContainer>
			)
		} else {
			return (
				<HomeContainer>
					<Spinner />
				</HomeContainer>
			)
		}
	}
}

const HomeContainer = styled.div`
  display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

export default Home