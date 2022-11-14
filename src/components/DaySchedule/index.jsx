import React from "react";
import StageSchedule from "../StageSchedule";
import {
  StyledDaySchedule,
  StyledDayBody,
  StyledDayHeader,
  StyledDayTitle,
} from "./styles.js";

const DaySchedule = (props) => {
  const { dayInfo } = props;

  return (
    <StyledDaySchedule>
      <StyledDayHeader>
        <StyledDayTitle>{`${dayInfo.date}`}</StyledDayTitle>
      </StyledDayHeader>
      <StyledDayBody>
        {dayInfo.stages.map((stageInfo, i) => (
          <StageSchedule key={i} stageInfo={stageInfo} />
        ))}
      </StyledDayBody>
    </StyledDaySchedule>
  );
};

export default DaySchedule;
