import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate"
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, limit: any = 25): any {
    return `${value.substr(0, limit)}...`;
  }
}
