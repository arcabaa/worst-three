import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { axiosWithHeader } from "../utils/axiosWithHeaders";

export const PlayerSearch = () => {
  const onFinish = async (values) => {
    console.log("Success:", values);
    const getSummoner = await axiosWithHeader.get(
      "/lol/summoner/v4/summoners/by-name/floppyman11"
    );
    console.log(getSummoner.data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <SummonerForm>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Summoner Name"
          name="summonerName"
          rules={[
            { required: true, message: "Please input your Summoner Name" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </SummonerForm>
  );
};

const SummonerForm = styled.div`
  margin: 25px;
`;
