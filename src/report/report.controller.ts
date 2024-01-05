import { Body, Controller, Delete, Get,Param,ParseEnumPipe,ParseUUIDPipe,Post,Put,Req } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';
import { ReportType } from 'src/data';

import { CreateReportDto, ResponseReportDto } from 'src/dtos/report_dto';
import { ReportService } from './report.service';

@Controller('api/v1/report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get() 
  getAllReports(@Param('type',new ParseEnumPipe(ReportType)) type:string,@Req() request:Request):ResponseReportDto[] {
  console.log(type)
  const reportType = type==='expense' ? ReportType.EXPENSE : ReportType.INCOME;
    return this.reportService.getAllReports(reportType);
  }
  @Get(':id')
  getreportById(@Param('id',ParseUUIDPipe) id:string,@Param('type',new ParseEnumPipe(ReportType)) type:string,@Req() request:Request):ResponseReportDto {
   const reportType = type==='expense' ? ReportType.EXPENSE : ReportType.INCOME;
    return this.reportService.getReportById(id,reportType);
      
  }
  @Post()
  createReport(@Body() body: CreateReportDto,@Param ('type',new ParseEnumPipe(ReportType)) type:string):ResponseReportDto {
    const reportType = type==='expense' ? ReportType.EXPENSE : ReportType.INCOME;
    
   return this.reportService.createReport(reportType,body);
 
  }
  @Put(':id')
 updateReport(@Param('id', ParseUUIDPipe) id:string,@Param('type') type:string,@Body() body: CreateReportDto) :ResponseReportDto{
  const reportType = type==='expense' ? ReportType.EXPENSE : ReportType.INCOME;
  return this.reportService.updateReport(reportType,id,body);

  }
  @Delete(':id')
  deleteReport(@Param('id',ParseUUIDPipe) id:string,@Param('type') type:string,@Body() body: {amount:number;source:string}) {
    return this.reportService.deleteReport(id);
  }
}
