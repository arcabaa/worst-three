import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Loading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 45 }} spin />;
  return (
    <StyledDiv>
      <Spin indicator={antIcon} />
    </StyledDiv>
  );
};

export default Loading;

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  width: 100px;
  height: 100px;
`;
