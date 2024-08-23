import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { Observable, of, switchMap } from 'rxjs';
import _ from 'lodash';

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      switchMap((response) => {
        // su dung switchMap de xu ly response tra ve
        if (!response) return of(response);
        return of(this.formResponse(response));
      }),
    );
  }

  formResponse(response: any) {
    if (response instanceof Object) {
   
      return {
        status: 200,
        message: 'Success',
        // dung lodash de loai bo password
        data: _.omit( response,'password'),
      };
    }
    return response;
  }
}
