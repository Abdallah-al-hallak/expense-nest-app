import { DataDto } from "./dtos/report_dto";

export enum ReportType {
    INCOME = 'income',
    EXPENSE = 'expense',
}
export interface Data {
 report:DataDto[];
}

export const data:Data = {
    report :[
        {
            id:'uuid1',
            source:'Salary',
            amount:7500,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.INCOME,
        },
        {
            id:'uuid2',
            source:'Salary',
            amount:5000,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.EXPENSE,
        },
        {
            id:'uuid3',
            source:'Salary',
            amount:4500,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.INCOME,
        },
    ]
}