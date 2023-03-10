import {customAlphabet} from "nanoid";

const CUSTOM_ID_SET = 'ABCDEFGHIJKLMNOPQRTUVWXYZ123456789';
export const generateGameId = () => {
    return `GM${customAlphabet(CUSTOM_ID_SET, 10)()}`;
};