import {GameRequestDto, GameResponseDto} from '../dtos/game.dto';
import {Game} from '../entities/game.entity';
import {GameBo} from '../bos/game.bo';
import {Injectable} from '@nestjs/common';
import {GameTestDto} from "../dtos/game-test.dto";

@Injectable()
export class GameMapper {

    mapGamesToGameBos(games: Game[]): GameBo[] {
        return games.map(game => this.mapGameToGameBo(game));
    }

    mapGameToGameBo(game: Game): GameBo {
        const gameBo = new GameBo(game._id);
        gameBo.author = game.author;
        gameBo.name = game.name;
        gameBo.url = game.url;
        gameBo.publishedDate = game.publishedDate;
        gameBo.createdAt = game.createdAt;
        gameBo.modifiedAt = game.modifiedAt;
        gameBo.isActive = game.isActive;
        return gameBo;
    }

    mapGameBosToGameResponseDtos(games: GameBo[]): GameResponseDto[] {
        return games.map(game => this.mapGameBoToGameResponseDto(game));
    }

    mapGameBoToGameResponseDto(game: GameBo): GameResponseDto {
        return {
            name: game.name, author: game.author, publishedDate: game.getFormattedDate(), url: game.url
        };
    }

    mapGameRequestDtoToGameBo(gameRequestDto: GameRequestDto, gameBo: GameBo): GameBo {
        gameBo.name = gameRequestDto.name;
        gameBo.author = gameRequestDto.author;
        gameBo.url = gameRequestDto.url;
        gameBo.publishedDate = gameRequestDto.publishedDate;
        gameBo.isActive = true;
        return gameBo;
    }

    mapGameRequestBoToGame(gameBo: GameBo): Game {
        return {
            _id: gameBo.id,
            name: gameBo.name,
            author: gameBo.author,
            url: gameBo.url,
            publishedDate: gameBo.publishedDate,
            createdAt: gameBo.createdAt,
            modifiedAt: gameBo.modifiedAt,
            isActive: gameBo.isActive
        }
    }


    mapGameBoToGame(gameBo: GameBo): Game {
        return {
            _id: gameBo.id,
            name: gameBo.name,
            author: gameBo.author,
            url: gameBo.url,
            publishedDate: gameBo.publishedDate,
            createdAt: gameBo.createdAt,
            modifiedAt: gameBo.modifiedAt,
            isActive: gameBo.isActive
        }
    }

    mapGameBosToGameTestDtos(gameBos: GameBo[]): GameTestDto[] {
        return gameBos.map((gameBo) => this.mapGameBotoGameTestDto(gameBo));
    }

    mapGameBotoGameTestDto(gameBo: GameBo): GameTestDto {
        return {
            id: gameBo.id,
            name: gameBo.name,
            author: gameBo.author,
            publishedDate: gameBo.getFormattedDate(),
            url: gameBo.url
        }
    }
}