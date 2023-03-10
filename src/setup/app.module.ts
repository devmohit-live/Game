import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GameModule} from '../game/game.module';
import {ConfigModule} from "@nestjs/config";
import {CommonsModule} from "../common/commons.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        CommonsModule,
        GameModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
