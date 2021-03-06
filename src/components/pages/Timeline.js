import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Timeline, Card } from "antd";

const TimelimeLabelDemo = () => {
  return (
    <>
      <Timeline mode="right">
        <Timeline.Item label="2015-09-01">
          <Card>Create a services</Card>
        </Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Solve initial network problems
        </Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Network problems being solved
        </Timeline.Item>
      </Timeline>
    </>
  );
}

export default TimelimeLabelDemo