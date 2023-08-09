import React from "react";
import styled from "styled-components";
import { Form, Input } from "antd";
import axios from 'axios'

export const PlayerSearch = ({ isLoading, setKda, setSummoner }) => {
  const onFinish = async (values) => {
		try {
			isLoading(true)
			setSummoner(values.summonerName)

			// get summoner puuid
			const summonerPuuid = await axios.get(`http://localhost:4000/summoner/${values.summonerName}`)
			
			// get summoner last 50 matches
			const summonerData = JSON.stringify({"puuid":`${summonerPuuid.data.puuid}`})
			const matchesConfig = {
				method: 'post',
				url: 'http://localhost:4000/matches/',
				headers: { 
					'Content-Type': 'application/json'
				},
				data: summonerData
			};
			const matches = await axios(matchesConfig)

			// get KDA
			const kdaData = { "matches": matches.data.matches, "puuid": summonerPuuid.data.puuid }
			const kdaConfig = {
				method: 'post',
				url: 'http://localhost:4000/matchData',
				headers: { 
					'Content-Type': 'application/json'
				},
				data: kdaData
			};

			const kdaRes = await axios(kdaConfig)
			const kda = kdaRes.data.results
			setKda(kda)
			isLoading(false)
		} catch (err) {
			console.error(err)
			isLoading(false)
		}
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <SummonerForm>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="summonerName"
          rules={[
            { required: true, message: "Please enter a summoner name" },
          ]}
        >
          <Input size="large" />
        </Form.Item>
      </Form>
    </SummonerForm>
  );
};

const SummonerForm = styled.div`
	width: 50%;
	margin: 0 auto;
`;
