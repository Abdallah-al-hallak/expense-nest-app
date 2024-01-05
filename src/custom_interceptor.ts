import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";


export class CustomInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('this is intercepting the request')
        console.log({context})
        return next.handle().pipe(
            map((data)=>{
                console.log('this is intercepting the response')  ;
                console.log({context})
                return data;
            }),
        );
    }

}