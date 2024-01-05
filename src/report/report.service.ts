import { Injectable } from '@nestjs/common';
;
import { v4 as uuidv4 } from 'uuid';

import { ReportType, data } from 'src/data';
import { CreateReportDto, DataDto, ResponseReportDto } from 'src/dtos/report_dto';
@Injectable()
export class ReportService {
  getAllReports( type:ReportType):ResponseReportDto[] {
  return  data.report.filter((report)=>report.type===type).map((report)=>new ResponseReportDto(report));
  }
  getReportById( id:string,type:ReportType) :ResponseReportDto{
    var report= data.report.filter((report)=>report.type===type) .find((report)=>report.id===id);
    if (!report) {
      return;
    }
    return new ResponseReportDto(report);
  }
  createReport(type:ReportType,{amount,source}:CreateReportDto):ResponseReportDto{
    const newReport : DataDto ={
      id:uuidv4(),
      amount:amount,
      created_at:new Date(),
      updated_at:new Date(),
      source:source,
      type,
     
         
        }
       data.report.push(newReport)
       return new ResponseReportDto(newReport);
  }
  updateReport(type:ReportType,id:string,{amount,source}:CreateReportDto):ResponseReportDto{
    const reportType= type==='income' ? ReportType.INCOME : ReportType.EXPENSE;
    const report:DataDto =  data.report.filter((report)=> report.type ===reportType).find((report)=>report.id===id);
   const index= data.report.findIndex((rep)=>rep===report);
    data.report[index].amount= amount;
    data.report[index].source= source;
    data.report[index].updated_at= new Date();
    return new ResponseReportDto(data.report[index]);
  }
  deleteReport(id:string,){
    const index= data.report.findIndex((rep)=>rep.id===id);
    data.report.splice(index,1)
  }
}


