import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
    constructor(private readonly reportService: ReportService){}
    calculateSummary(){
        const totalExpense = this.reportService.getAllReports(ReportType.EXPENSE).reduce((sum,current)=>sum+current.amount,0);
        const totalIncome = this.reportService.getAllReports(ReportType.INCOME).reduce((sum,current)=>sum+current.amount,0);
        return {
            totalExpense :totalExpense,
            totalIncome:totalIncome,
            netCome: totalExpense -totalIncome,
        }
    }
}
