import React from 'react';
import styled from "styled-components";
import SLogo from "../assets/Sc.png";
import Bar from "../assets/progressbar.png";
import "@fontsource/montserrat";

const Analytics = ({}) => {
  return (
    <Analyticspage>
      <Group>
        <Sc src={SLogo} />
      </Group>
      <Group1>
        <Title>Analytics</Title>
        <WhiteFlexRow>
          <Text1>Month</Text1>
          <Eparrowdown
            src={`https://file.rendit.io/n/HbchNL8hFtsQyceZts8a.svg`}
          />
        </WhiteFlexRow>
      </Group1>
      <Tasksection>UNI Tasks</Tasksection>
      <Group2>
        <Paragraph>
          The pie chart shows the amount of new tasks, tasks in progress, and
          completed tasks. Overral progress can be seen on the bar chart below.
          The progress also depends on the priority of the tasks.
          <br />
          High Priority=Bigger Progress
        </Paragraph>
        <Chartspana src={`https://file.rendit.io/n/6JJbVotCgw0pSsaeWkZo.svg`} />
      </Group2>
      <Inprogress>Progress :</Inprogress>
      <Group3>
        <WhiteFlexColumn src={Bar}><Image1 src={`https://file.rendit.io/n/jqSRBCmGaC96xJTzJomf.svg`} /></WhiteFlexColumn>
        <Element1>50%</Element1>
      </Group3>
      <Line src={`https://file.rendit.io/n/ax2ZIa5y1qOTQjvimxUl.svg`} />
      <Tasksection1>My Tasks</Tasksection1>
      <Group4>
        <Paragraph>
          The pie chart shows the amount of new tasks, tasks in progress, and
          completed tasks. Overral progress can be seen on the bar chart below.
          The progress also depends on the priority of the tasks.
          <br />
          High Priority=Bigger Progress
        </Paragraph>
        <Chartspana src={`https://file.rendit.io/n/xcFsUBUmDNfZJm2mvteW.svg`} />
      </Group4>
      <Inprogress1>Progress :</Inprogress1>
      <Group5>
        <WhiteFlexColumn>
          <Image1 src={`https://file.rendit.io/n/jqSRBCmGaC96xJTzJomf.svg`} />
        </WhiteFlexColumn>
        <Element1>50%</Element1>
      </Group5>
    </Analyticspage>
  );
};

const Paragraph = styled.div`
  width: 196px;
  height: 154px;
  left: 0px;
  top: 0px;
  position: absolute;
  font-size: 14px;
`;
const Chartspana = styled.img`
  width: 147px;
  height: 147px;
  position: relative;
`;
const WhiteFlexColumn = styled.div`
  width: 144px;
  height: 18px;
  display: flex;
  flex-direction: column;
  padding: 0px 144px 0px 0px;
  border-width: 01px;
  border-radius: 20px;
  border-style: solid;
  border-color: #d80818;
`;
const Image1 = styled.img`
  width: 145px;
  height: 20px;
  margin-left:-5px;
  margin-top:-0.5px;
`;
const Element1 = styled.div`
  width: 34px;
  height: 19px;
  margin: 0px 0px 0px 0px;
  color: #d80818;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const Analyticspage = styled.div`
  height: 778px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 55px 21.9px 32.9px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  body {
    font-family: "Montserrat";
  }
`;
const Group = styled.div`
  width: 348px;
  height: 30.1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 28.7px 0px;
`;
const Sc = styled.img`
  width: 95.4px;
  height: 40.1px;
`;
const Group1 = styled.div`
  width: 346px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 41.3px 1.02px;
`;
const Title = styled.div`
  width: 109px;
  height: 29px;
  margin: 5.5px 0px 0px 0px;
  font-size: 24px;
  font-weight: 600;
  white-space: nowrap;
`;
const WhiteFlexRow = styled.div`
  gap: 6.19px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 11.6px 10px 15.3px;
  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  border-color: #000000;
  background-color: #ffffff;
`;
const Text1 = styled.div`
  width: 43px;
  height: 17px;
  margin: 0.5px 0px 0px 0px;
  font-size: 14px;
  white-space: nowrap;
`;
const Eparrowdown = styled.img`
  width: 18px;
  height: 18px;
`;
const Tasksection = styled.div`
  width: 96px;
  height: 24px;
  margin: 0px 0px 31.5px 0px;
  font-size: 20px;
  font-weight: 500;
  white-space: nowrap;
`;
const Group2 = styled.div`
  width: 147px;
  height: 154px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 0px 20.5px 0px;
  padding: 0px 0px 0px 194px;
`;
const Inprogress = styled.div`
  width: 77px;
  height: 19px;
  margin: 0px 0px 14.1px 0.99px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const Group3 = styled.div`
  gap: 15.9px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 23.5px 0.99px;
`;
const Line = styled.img`
  width: 298px;
  height: 0.5px;
  margin: 0px 0px 21px 20px;
`;
const Tasksection1 = styled.div`
  width: 91px;
  height: 24px;
  margin: 0px 0px 31.8px 1.98px;
  font-size: 20px;
  font-weight: 500;
  white-space: nowrap;
`;
const Group4 = styled.div`
  width: 147px;
  height: 154px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 0px 20.5px 0px;
  padding: 0px 0px 0px 193px;
`;
const Inprogress1 = styled.div`
  width: 77px;
  height: 19px;
  margin: 0px 0px 14.1px 0px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const Group5 = styled.div`
  gap: 15.9px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;


export default Analytics;