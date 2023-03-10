import {Injectable} from '@nestjs/common';
import {Game} from '../entities/game.entity';
import {GameRequestDto, GameResponseDto} from '../dtos/game.dto';
import {GameMapper} from '../mappers/game.mapper';
import {GameBo} from "../bos/game.bo";
import {generateGameId} from "../utils/game-id.util";
import {GameMongoRepository} from "../repository/gameMongoRepository";
import {GameTestDto} from "../dtos/game-test.dto";

@Injectable()
export class GameService {

    constructor(private gameMapper: GameMapper, private  gameRepository: GameMongoRepository) {
    }

    async getAllGames(): Promise<GameResponseDto[]> {
        const games: Game[] = await this.gameRepository.getAllGames();
        return this.gameMapper.mapGameBosToGameResponseDtos(this.gameMapper.mapGamesToGameBos(games));
    }

    async getGame(id: string): Promise<GameResponseDto> {
        const game: Game = await this.gameRepository.findGame(id);
        if (!game) {
            return null;
        }
        return this.gameMapper.mapGameBoToGameResponseDto(this.gameMapper.mapGameToGameBo(game));
    }

    async addGame(game: GameRequestDto) {
        const gameBo = new GameBo(generateGameId());
        this.gameMapper.mapGameRequestDtoToGameBo(game, gameBo);
        const gameEntity: Game = this.gameMapper.mapGameRequestBoToGame(gameBo);
        await this.gameRepository.addGame(gameEntity);
    }

    async deleteGameById(id: string): Promise<boolean> {
        return this.gameRepository.deleteGame(id);
    }

    async updateGame(id: string, gameRequestDto: GameRequestDto): Promise<boolean> {
        const game: Game = await this.gameRepository.findGame(id);
        if (!game) return false;
        const gameBo = this.gameMapper.mapGameToGameBo(game);
        const updatedGameBo = this.gameMapper.mapGameRequestDtoToGameBo(gameRequestDto, gameBo);
        const gameEntity: Game = this.gameMapper.mapGameBoToGame(updatedGameBo);
        await this.gameRepository.updateGame(gameEntity);
    }


    //Testing/Playing with games api
    /*

    Used to get the games id for testing the update, delete verbs and getById api
    */

    async getAllGamesWithIds(): Promise<GameTestDto[]> {
        const gamesWithIds: Game[] = await this.gameRepository.getAllGames();
        return this.gameMapper.mapGameBosToGameTestDtos(this.gameMapper.mapGamesToGameBos(gamesWithIds));
    }
}