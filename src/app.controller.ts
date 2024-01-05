import { Body, Controller, Delete, Get,Param,ParseEnumPipe,ParseUUIDPipe,Post,Put,Req } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuidv4 } from 'uuid';
import { Data, ReportType, data } from './data';
import { CreateReportDto, ResponseReportDto } from './dtos/report_dto';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

}
