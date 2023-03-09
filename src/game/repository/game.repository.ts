import {Game} from "../entities/game.entity";
import {WithId} from "mongodb";

export interface GameRepository {
    findGame(id:string) : Promise<Game>;
    getAllGames() : Promise<WithId<Game>[]>;
    addGame(game : Game):Promise<void>;
    deleteGame(game:Game):Promise<void>;
    updateGame(game:Game):Promise<void>;

}
