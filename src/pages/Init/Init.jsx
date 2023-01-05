import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./styles";
import Button from "../../components/Button/Button";
import WhiteRef from "../../images/WhiteRef.svg";
import YellowRef from "../../images/YellowRef.svg";
import BlackRef from "../../images/BlackRef.svg";
import PurpleRef from "../../images/PurpleRef.svg";

const Init = () => {
  const RefColor =
    [
      {id : 1, rColor : "#D9D9D9"},
      {id : 2, rColor : "#5E5E5E"},
      {id : 3, rColor : "#FFE5A0"},
      {id : 4, rColor : "#A5AEFF"},
    ]
  const [nickName, setNickName] = useState('');
  const [RefCol, setRefCol] = useState(1);
  const navigate = useNavigate();

  const onChange = (e) =>{
    setNickName(e.target.value.slice(0,6));
  }

  const checkActive = (nickName) =>{
    if ((nickName === "") || (nickName.charAt(0) === " ") ||
    (nickName.charAt(nickName.length-1) === " ")){
      return false;
    }
    else{
      return true;
    }
  }

  const onButtonClick = () => {
    navigate('/mysetting', {state:{nickName, RefCol}});
    console.log({ nickName, RefCol })
  }

  return (
      <styled.Container>
          <styled.MainText>{`친구가 나를 알아볼 수 있도록\n별명을 정해주세요`}.</styled.MainText>
          <styled.BtnContainer>
            <styled.WhiteBtn>
              <styled.NickNameInput
                input type="text"
                maxLength='6'
                onChange={onChange}
                value = {nickName || ''}/>
            </styled.WhiteBtn>
            <styled.WhosRefTxt>님의 냉장고</styled.WhosRefTxt>
          </styled.BtnContainer>
          <styled.SelectRefColTxt>냉장고 색상을 선택하세요.</styled.SelectRefColTxt>
          <styled.RefBgTop RefBg = "#F5F5F5">
            <styled.RefBgBtm>
              <styled.RefContainer>
                {RefColor.map((item)=> {
                  return <styled.RefColor
                    key={`refColor-${item.id}`}
                    backgroundColor={item.rColor}
                    onClick = {() => setRefCol(item.id)}
                  >
                    {item.id === RefCol && <styled.CheckBtnImg/>}
                  </styled.RefColor>
                })}
              </styled.RefContainer>
            </styled.RefBgBtm >
            {[WhiteRef, BlackRef, YellowRef, PurpleRef].map((ref, index)=>{
              return <styled.RefImg key={`ref-${index}`} imageUrl={ref}
                                    refVisible={index+1 === RefCol} />
            })}

          </styled.RefBgTop>
          <Button
            active={checkActive(nickName)}
            text = "다음"
            onClickEvent={onButtonClick}
          />
      </styled.Container>
  );
};

export default Init;
