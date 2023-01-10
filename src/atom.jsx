import {atom} from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const IDState = atom({
    key: 'IDState',
    default: {ref:15, kakao:"kakao_purple", link:"kakao_purple"},
    // default: {ref: null, kakao: null, link: null}, // 비로그인 사용자
    effects_UNSTABLE: [persistAtom],
});
