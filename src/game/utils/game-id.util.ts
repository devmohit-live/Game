import {nanoid} from "nanoid";

export const generateGameId = () => {
    return nanoid(14);
};