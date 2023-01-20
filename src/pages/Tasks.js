import React from 'react';
import styled from "styled-components";
import "@fontsource/montserrat";

const Tasks = ({}) => {

  const WhiteFlexRowFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const WhiteFlexRow1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const FlexColumn8Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <Taskspage>
      <Topbar>
        <Backbutton/>
      </Topbar>
      <Tasks1>
        <Text4>UNI Tasks</Text4>
        <Line src={`https://file.rendit.io/n/vb08gpNHBiBw1MYJrojn.svg`} />
        <Text5>My Tasks</Text5>
      </Tasks1>
      <Calendar_Date>November 8, 2022</Calendar_Date>
      <Calendar>
        <Group>
          <Text8>6</Text8>
          <Text7>Sun</Text7>
        </Group>
        <WhiteRectangle />
        <WhiteFlexColumn>
          <Text8>7</Text8>
          <Text7>Mon</Text7>
        </WhiteFlexColumn>
        <ScarletFlexRow>
          <Group2>
            <Text11>8</Text11>
            <Text12>Tue</Text12>
          </Group2>
          <Ellipse1 src={`https://file.rendit.io/n/1VXFeInAHyfY4ZSTaqVP.svg`} />
        </ScarletFlexRow>
        <WhiteFlexColumn1>
          <Group3>
            <Text13>9</Text13>
            <Ellipse1
              src={`https://file.rendit.io/n/xhx59Nb1cWnlRBDbRrjw.svg`}
            />
          </Group3>
          <Text14>Wed</Text14>
        </WhiteFlexColumn1>
        <WhiteFlexColumn2>
          <Text15>10</Text15>
          <Text16>Thu</Text16>
        </WhiteFlexColumn2>
        <WhiteRectangle1 />
        <Group1>
        </Group1>
      </Calendar>
      <Sort_Filter>
        <WhiteFlexRow onClick={(e) => WhiteFlexRowFunction(e, "Filter Button")}>
          <Text19>Filter</Text19>
          <Image1 src={`https://file.rendit.io/n/8fRRLsxbsuNbNqf4HqDV.svg`} />
        </WhiteFlexRow>
        <WhiteFlexRow1
          onClick={(e) => WhiteFlexRow1Function(e, "Sort Button")}
        >
          <Text20>Sort</Text20>
          <Image2 src={`https://file.rendit.io/n/3GJ7Lhri7k1J6z3gNa1n.svg`} />
        </WhiteFlexRow1>
      </Sort_Filter>
      <Task1>
        <Text32>
          <Text21>Practice Python tasks</Text21>
          <Group5>
            <Text22>Module: COM618</Text22>
            <Text23>Due Date: 09/11/2022</Text23>
          </Group5>
        </Text32>
        <Group4>
          <Image3 src={`https://file.rendit.io/n/Obcr8rzedsTxdUp5zwtR.svg`} />
          <Priority6>
            <Priority>Low</Priority>
            <Image4 src={`https://file.rendit.io/n/TGSK0o2K9EMUI5mfLOpp.svg`} />
          </Priority6>
        </Group4>
      </Task1>
      <Task2>
        <Text32>
          <Text24>Create a 404 page</Text24>
          <Group7>
            <Text25>Module: COM623</Text25>
            <Text26>Due Date: 17/11/2022</Text26>
          </Group7>
        </Text32>
        <Group4>
          <Image3 src={`https://file.rendit.io/n/S6sCgTNFnV4eF64OdrZM.svg`} />
          <Priority6>
            <Priority2>Medium</Priority2>
            <Image4 src={`https://file.rendit.io/n/1vv1m2TE5jOEvV8UG34X.svg`} />
          </Priority6>
        </Group4>
      </Task2>
      <Task3>
        <Group8>
          <Text27>Dissertation Project research</Text27>
          <Image7 src={`https://file.rendit.io/n/pYgoKkjNrTAOXpJE4dmM.svg`} />
        </Group8>
        <Group9>
          <Group10>
            <Text22>Module: COM616</Text22>
            <Text23>Due Date: 01/12/2022</Text23>
          </Group10>
          <Priority8>
            <Priority4>High</Priority4>
            <Image4 src={`https://file.rendit.io/n/E2dipDzaAazdYNYL2mT5.svg`} />
          </Priority8>
        </Group9>
      </Task3>
      <Bottombar>
        <Task4>
          <Text32>
            <DiscoverLawsOfUX>Discover Laws of UX </DiscoverLawsOfUX>
            <Group11>
              <Text22>Module: COM621</Text22>
              <Text23>Due Date: 20/11/2022</Text23>
            </Group11>
          </Text32>
          <Image7 src={`https://file.rendit.io/n/2trH0gYE5okbNSIWWJfj.svg`} />
        </Task4>
        <FlexColumn8>
      <a href="/createtask"> 
      <Createtaskbutton
      />
      </a>
        </FlexColumn8>
      </Bottombar>
    </Taskspage>
  );
};

const Taskspage = styled.div`
  height: 844px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  body {
    font-family: "Montserrat";
  }
`;
const Text8 = styled.div`
  width: 15px;
  height: 30px;
  margin: 0px 0px 0px 9.5px;
  font-size: 25px;
  font-weight: 500;
  white-space: nowrap;
`;
const Text7 = styled.div`
  width: 34px;
  height: 19px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const Ellipse1 = styled.img`
  width: 8.19px;
  height: 8.19px;
`;
const Text32 = styled.div`
  gap: 13.1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text22 = styled.div`
  width: 134px;
  height: 19px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;
const Text23 = styled.div`
  width: 169px;
  height: 19px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;
const Group4 = styled.div`
  height: 80.1px;
  gap: 39.9px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Image3 = styled.img`
  width: 4.4px;
  height: 18.4px;
  align-self: flex-end;
`;
const Priority6 = styled.div`
  gap: 5.36px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Image4 = styled.img`
  width: 12px;
  height: 14px;
  margin: 2.5px 0px 0px 0px;
`;
const Image7 = styled.img`
  width: 4.4px;
  height: 18.4px;
  margin: 2.8px 0px 0px 0px;
`;
const Topbar = styled.div`
  width: 347px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 19.7px 21.5px;
`;
const Backbutton = styled.div`
  width: 25px;
  height: 21px;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-image: url("https://file.rendit.io/n/yoiDdd5qyNuXXxFwRngX.svg");
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Tasks1 = styled.div`
  width: 252px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 29.4px 70px;
`;
const Text4 = styled.div`
  width: 108px;
  height: 27px;
  margin: 4px 18px 0px 0px;
  color: #d80818;
  font-size: 22px;
  font-weight: 700;
  white-space: nowrap;
`;
const Line = styled.img`
  width: 3px;
  height: 35px;
  margin: 0px 22px 0px 0px;
`;
const Text5 = styled.div`
  width: 101px;
  height: 27px;
  margin: 4px 0px 0px 0px;
  font-size: 22px;
  font-weight: 600;
  white-space: nowrap;
`;
const Calendar_Date = styled.div`
  width: 142px;
  height: 19px;
  margin: 0px 0px 9px 20px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const Calendar = styled.div`
  width: 474px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 29.4px -42px;
`;
const Group = styled.div`
  gap: 1.17px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 8px 0px 0px;
  padding: 10px 0px 11.8px 0px;
`;
const WhiteRectangle = styled.div`
  width: 8px;
  height: 68px;
  margin: 1px 17.2px 0px 0px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #d80818;
  background-color: #ffffff;
`;
const WhiteFlexColumn = styled.div`
  gap: 1.17px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 16.4px 0px 0px;
  padding: 9px 18px 10.8px 18px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #d80818;
  background-color: #ffffff;
`;
const ScarletFlexRow = styled.div`
  width: 49.1px;
  height: 52.4px;
  gap: 1.86px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 16.4px 0px 0px;
  padding: 6.81px 10.4px 10.8px 10.4px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #d80818;
  background-color: rgba(216, 8, 24, 0.15);
`;
const Group2 = styled.div`
  height: 52.4px;
  gap: 1.17px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Text11 = styled.div`
  width: 16px;
  height: 30px;
  align-self: flex-end;
  margin: 0px 6px 0px 0px;
  font-size: 25px;
  font-weight: 500;
  white-space: nowrap;
`;
const Text12 = styled.div`
  width: 29px;
  height: 19px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const WhiteFlexColumn1 = styled.div`
  height: 56.4px;
  gap: 1.17px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 16.4px 0px 0px;
  padding: 6.81px 11px 6.81px 17.5px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #d80818;
  background-color: #ffffff;
`;
const Group3 = styled.div`
  width: 41.5px;
  height: 32.2px;
  gap: 7.27px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Text13 = styled.div`
  width: 16px;
  height: 30px;
  align-self: flex-end;
  font-size: 25px;
  font-weight: 500;
  white-space: nowrap;
`;
const Text14 = styled.div`
  width: 35px;
  height: 19px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const WhiteFlexColumn2 = styled.div`
  gap: 1.17px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 15.6px 0px 0px;
  padding: 9px 20px 10.8px 20px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #d80818;
  background-color: #ffffff;
`;
const Text15 = styled.div`
  width: 28px;
  height: 30px;
  margin: 0px 0px 0px 1px;
  font-size: 25px;
  font-weight: 500;
  white-space: nowrap;
`;
const Text16 = styled.div`
  width: 30px;
  height: 19px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const WhiteRectangle1 = styled.div`
  width: 8px;
  height: 68px;
  margin: 1px 8px 0px 0px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #d80818;
  background-color: #ffffff;
`;
const Group1 = styled.div`
  gap: 1.17px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0px 11.8px 0px;
`;
const Sort_Filter = styled.div`
  width: 342px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 30px 25px;
`;
const WhiteFlexRow = styled.button`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  padding-top: 6px;
  padding-right: 13px;
  padding-bottom: 6px;
  padding-left: 13px;
  border-width: 0px;
  border-radius: 5px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #000000;
  box-sizing: content-box;
  background-color: #ffffff;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text19 = styled.div`
  width: 37px;
  height: 18px;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`;
const Image1 = styled.img`
  width: 15px;
  height: 15px;
  margin: 1.5px 0px 0px 0px;
`;
const WhiteFlexRow1 = styled.button`
  gap: 13.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  padding-top: 6px;
  padding-right: 14.5px;
  padding-bottom: 6px;
  padding-left: 15px;
  border-width: 0px;
  border-radius: 5px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #000000;
  box-sizing: content-box;
  background-color: #ffffff;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text20 = styled.div`
  width: 31px;
  height: 18px;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`;
const Image2 = styled.img`
  width: 14px;
  height: 14px;
  margin: 2px 0px 0px 0px;
`;
const Task1 = styled.div`
  height: 80.1px;
  gap: 37.7px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
  margin: 0px 24.6px 24.8px 25px;
  padding: 9.94px 16.3px 11.2px 20.1px;
  border-width: 2px;
  border-radius: 5px;
  border-style: solid;
  border-color: #6bab90;
  background-color: #ffffff;
`;
const Text21 = styled.div`
  width: 212px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
`;
const Group5 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 42.2px 0px 0.84px;
`;
const Priority = styled.div`
  width: 32px;
  height: 19px;
  color: #6bab90;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const Task2 = styled.div`
  height: 80.1px;
  gap: 39.7px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
  margin: 0px 24.6px 22.3px 25px;
  padding: 9.94px 16.3px 11.2px 20.1px;
  border-width: 2px;
  border-radius: 5px;
  border-style: solid;
  border-color: #f0cf65;
  background-color: #ffffff;
`;
const Text24 = styled.div`
  width: 180px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
`;
const Group7 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 14.2px 0px 0.84px;
`;
const Text25 = styled.div`
  width: 136px;
  height: 19px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;
const Text26 = styled.div`
  width: 165px;
  height: 19px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;
const Priority2 = styled.div`
  width: 62px;
  height: 19px;
  color: #f0cf65;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const Task3 = styled.div`
  gap: 13.1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
  margin: 0px 24.6px 22px 25px;
  padding: 9.94px 16.3px 11.2px 20.1px;
  border-width: 2px;
  border-radius: 5px;
  border-style: solid;
  border-color: #e4572e;
  background-color: #ffffff;
`;
const Group8 = styled.div`
  gap: 12.6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text27 = styled.div`
  width: 282px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
`;
const Group9 = styled.div`
  width: 299px;
  height: 43px;
  gap: 76.2px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Group10 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Priority8 = styled.div`
  gap: 5.04px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px 0px 0px 0px;
`;
const Priority4 = styled.div`
  width: 36px;
  height: 19px;
  color: #e4572e;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const Bottombar = styled.div`
  width: 390px;
  height: 125px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Task4 = styled.div`
  height: 80.1px;
  left: 25.9px;
  top: 0px;
  position: absolute;
  gap: 95.6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 9.94px 16.3px 11.2px 20.1px;
  border-width: 2px;
  border-radius: 5px;
  border-style: solid;
  border-color: #6bab90;
  background-color: #ffffff;
`;
const DiscoverLawsOfUX = styled.div`
  width: 199px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
`;
const Group11 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 29.2px 0px 0.84px;
`;
const FlexColumn8 = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  padding-top: 24.6px;
  padding-right: 165px;
  padding-bottom: 28.9px;
  padding-left: 165px;
  border-width: 0px;
  box-sizing: content-box;
  background-color: transparent;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/v6wsrFvZuHeyR5qQO3zZ.svg");
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Createtaskbutton = styled.div`
  width: 60px;
  height: 60px;
  background-size: cover;
  background-position: center;
  cursor:pointer;
  background-image: url("https://file.rendit.io/n/pkKlBZLW5lm4QSHiFHnK.svg");
`;

export default Tasks;