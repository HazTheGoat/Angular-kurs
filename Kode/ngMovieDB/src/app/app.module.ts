import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MovieModule } from "./areas/movie";
import { AppRoutesModule } from "./app.routes";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MovieModule, AppRoutesModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
