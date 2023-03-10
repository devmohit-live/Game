import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {ApiInternalServerErrorResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('/healthcheck')
    @ApiTags('Health Check')
    @ApiOperation({
        description: 'This Api is for the health check of the server'
    })
    @ApiResponse({
        status: 200,
        description: 'Server is running fine'
    })
    @ApiInternalServerErrorResponse({
        description: 'Server crashed'
    })
    getHello(): string {
        console.log('Healtcheck is called')
        return this.appService.getHello();
    }
}
