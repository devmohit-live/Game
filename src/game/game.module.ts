import {Module} from '@nestjs/common';
import {GameApiController} from './controllers/game.api.controller';
import {GameService} from './services/game.service';
import {GameMapper} from './mappers/game.mapper';
import {CommonsModule} from "../common/commons.module";
import {GameMongoRepository} from "./repository/gameMongoRepository";
import {GameApiTestController} from "./controllers/game.api.test.controller";

@Module({
    imports: [CommonsModule],
    controllers: [GameApiController, GameApiTestController],
    providers: [GameService, GameMapper, GameMongoRepository],
    exports: []
})
export class GameModule {
}
