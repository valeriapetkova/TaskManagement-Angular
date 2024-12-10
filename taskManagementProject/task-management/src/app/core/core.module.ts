import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { ErrorComponent } from "./error/error.component";
import { FooterComponent } from "./footer/footer.component";


@NgModule({
    declarations: [HeaderComponent, FooterComponent, ErrorComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, FooterComponent],
})

export class CoreModule {}