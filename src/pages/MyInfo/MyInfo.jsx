import React, { useState } from "react";
import Message from "../../components/Message/Message";
import TopBar from "../../components/TopBar/TopBar";
import * as styled from "./styles";
import tgStrange from "../../images/tgStrange.svg";
import tgIdeal from "../../images/tgIdeal.svg";
import tgMyTaste from "../../images/tgMyTaste.svg";
import tgSpicy from "../../images/tgSpicy.svg";
import tgOnlytteok from "../../images/tgOnlytteok.svg";
import tgOnlyegg from "../../images/tgOnlyegg.svg";
import tgBlack from "../../images/tgBlack.svg";

const Cooked = () => {
  const unlock = [false, false, false, false, true];

  return (
    <styled.FlexBox>
      <styled.GridContainer>
        <styled.FlexBox direction="column" gap="4px" aCenter={true}>
          <styled.Tteokguk background={tgIdeal}>
            {!false && <styled.TteockgukLock />}
          </styled.Tteokguk>
          <styled.FontDiv fontSize="12px">
            {false ? "취향이 보이는 떡국" : "???"}
          </styled.FontDiv>
        </styled.FlexBox>

        <styled.Tteokguk />
        <styled.Tteokguk />
        <styled.Tteokguk />
        <styled.Tteokguk />
      </styled.GridContainer>
    </styled.FlexBox>
  );
};

const MyInfo = () => {
  const [currPage, setCurrPage] = useState(0);
  const userMessage = [
    {
      username: "한",
      ingredient: "떡",
      content:
        "수미야 새해에도 행복한 일들만 가득하길 바랄게! 올해는 골골대지말고 건강하게 잘 지내보자ㅎㅎ",
    },
    {
      username: "두글",
      ingredient: "김",
      content: "수미야 새해에도 행복한 일들만 가득하길 바랄게! ",
    },
    {
      username: "세글자",
      ingredient: "계란지단",
      content: "새해 복 많이 받아!",
    },
    {
      username: "여섯글자별명",
      ingredient: "대파",
      content:
        "수미야 새해에도 행복한 일들만 가득하길 바랄게! 올해는 골골대지말고 건강하게 잘 지내보자ㅎㅎ",
    },
    {
      username: "한",
      ingredient: "떡",
      content:
        "수미야 새해에도 행복한 일들만 가득하길 바랄게! 올해는 골골대지말고 건강하게 잘 지내보자ㅎㅎ",
    },
    {
      username: "두글",
      ingredient: "김",
      content: "수미야 새해에도 행복한 일들만 가득하길 바랄게! ",
    },
    {
      username: "세글자",
      ingredient: "계란지단",
      content: "새해 복 많이 받아!",
    },
    {
      username: "여섯글자별명",
      ingredient: "대파",
      content:
        "수미야 새해에도 행복한 일들만 가득하길 바랄게! 올해는 골골대지말고 건강하게 잘 지내보자ㅎㅎ",
    },
  ];

  return (
    <styled.FlexBox direction="column" width="360px">
      <TopBar titleName={"나의 떡국"} />
      <styled.FlexBox>
        <styled.NaviItem
          onClick={() => {
            setCurrPage(0);
          }}
          isCurr={currPage === 0 ? true : false}
        >
          내가 만든 떡국
        </styled.NaviItem>
        <styled.NaviItem
          onClick={() => {
            setCurrPage(1);
          }}
          isCurr={currPage === 1 ? true : false}
        >
          받은 덕담
        </styled.NaviItem>
      </styled.FlexBox>
      {currPage === 0 && <Cooked />}
      {currPage === 1 && <Message message={userMessage} />}
    </styled.FlexBox>
  );
};

export default MyInfo;
