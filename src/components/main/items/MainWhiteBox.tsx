import React, {useState} from "react";
import * as S from "./style";
import Modal from "./Modal";
import ReactAudioPlayer from "react-audio-player";

// interface Props {
//   item: any;
// }npm

const MainWhiteBox = (item: any) => {
  // if (item === undefined) return <></>;
  const [sound, setSound] = useState<boolean>(item.sound);

  return (
    <S.WhiteBoxContainer>
      <S.BoxContainer>
        <S.Header>
          <div className="btn_red btn"></div>
          <div className="btn_yellow btn"></div>
          <div className="btn_green btn"></div>
          <span>mirimirim</span>
        </S.Header>
        <ReactAudioPlayer
          src="https://drive.google.com/uc?export=download&id=1Yq-osHFqz7FX_uHzpY-G2SR2qNBKLoSm"
          autoPlay
          loop>
        </ReactAudioPlayer>
      </S.BoxContainer>
    </S.WhiteBoxContainer>
  );
};

export default MainWhiteBox;
