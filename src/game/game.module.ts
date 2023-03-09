import {Module} from '@nestjs/common';
import {GameApiController} from './controllers/game.api.controller';
import {GameService} from './services/game.service';
import {GameMapper} from './mappers/game.mapper';
import {GameRepository} from "./repository/game.repository";
import {CommonsModule} from "../common/commons.module";
// import {GameMongoRepository} from "./repository/gameMongoRepository";

@Module({
    imports: [CommonsModule],
    controllers: [GameApiController],
    providers: [GameService, GameMapper],
    exports: []
})
export class GameModule {
}
