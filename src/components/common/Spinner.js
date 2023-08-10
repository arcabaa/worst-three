import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Spinner = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 45 }} spin />;

  return (
    <SpinnerContainer>
      <Spin indicator={antIcon} />
			<p style={{ marginTop: `5vh` }}>Calculating worst three performances...</p>
    </SpinnerContainer>	
  );
};

export default Spinner;

const SpinnerContainer = styled.div`
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
