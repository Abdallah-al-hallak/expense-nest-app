import { ReportType } from "src/data";
import {IsNotEmpty,IsNumber,IsPositive,IsString} from 'class-validator';
import { Exclude, } from "class-transformer";


export interface DataDto {
    id : string;
    source: string;
    amount: number;
    created_at:Date;
    updated_at:Date;
    type: ReportType;
}

export class CreateReportDto {
    @IsPositive()
    @IsNumber()
    amount:number;
    @IsString()
    @IsNotEmpty()
    source:string;
  }

  export class ResponseReportDto{
    id : string;
    source: string;
    amount: number;
    created_at:Date;
    @Exclude()
    updated_at:Date;
    type: ReportType;
    constructor (partial: Partial<ResponseReportDto>){
        Object.assign(this,partial);
    }
  }