import React, { useState } from "react";
import Button from "../../components/Button/Button";
import TopBar from "../../components/TopBar/TopBar";
import tteok from "../../images/tteok.svg";
import gim from "../../images/gim.svg";
import gyeranjidan from "../../images/gyeranjidan.svg";
import daepa from "../../images/daepa.svg";
import yakgwa from "../../images/yakgwa.svg";
import sanjeok from "../../images/sanjeok.svg";
import empty from "../../images/whiteBox.svg";
import * as styled from "./styles";

const IngredientComponent = ({
  setSelectedItem,
  setCurrItemSrc,
  setCurrItemName,
  selectedItem,
  index,
  imgBg,
  name,
}) => {
  return (
    <styled.Ingredient
      onClick={() => {
        setSelectedItem(index);
        setCurrItemSrc(imgBg);
        setCurrItemName(name);
      }}
      imgBg={imgBg}
    >
      {selectedItem === index && <styled.CheckMark />}
    </styled.Ingredient>
  );
};

const Delivery = () => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [currItemSrc, setCurrItemSrc] = useState(empty);
  const [currItemName, setCurrItemName] = useState("ㅤ");

  const ingredientList = [
    { index: 0, imgBg: tteok, name: "떡" },
    { index: 1, imgBg: gim, name: "김" },
    { index: 2, imgBg: gyeranjidan, name: "계란지단" },
    { index: 3, imgBg: daepa, name: "대파" },
    { index: 4, imgBg: yakgwa, name: "약과" },
    { index: 5, imgBg: sanjeok, name: "산적" },
  ];

  return (
    <>
      <TopBar titleName={"떡국 재료 선물하기"} />
      <styled.PageContainer>
        <styled.FontDiv fontSize={"20px"} padding={"30px 0px 30px 0px"}>
          선물할 떡국 재료를 선택해주세요
        </styled.FontDiv>
        <IngredientComponent index={-1} imgBg={currItemSrc} />
        <styled.FontDiv fontSize={"18px"} padding={"14px 0px 14px 0px"}>
          {currItemName}
        </styled.FontDiv>
        <styled.GridContainer>
          {ingredientList.map((item) => (
            <IngredientComponent
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              setCurrItemSrc={setCurrItemSrc}
              setCurrItemName={setCurrItemName}
              index={item.index}
              imgBg={item.imgBg}
              name={item.name}
            />
          ))}
        </styled.GridContainer>
        <Button text={"다음"} pageName={"/delivery2"} />
      </styled.PageContainer>
    </>
  );
};

export default Delivery;
