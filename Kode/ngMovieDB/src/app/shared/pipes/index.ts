import { TruncatePipe } from "./truncate.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [TruncatePipe],
  exports: [TruncatePipe]
})
export class TruncateModule {}
