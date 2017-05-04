import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import {TranslateModule} from "@ngx-translate/core";

import {TgCommonModule} from "../../ts/modules/common/common.module";
import {TgPipesModule} from "../pipes/pipes.module";
import {TgComponentsModule} from "../components/components.module";
import {TgAttachmentsModule} from "../attachments/attachments.module";
import {TgServicesModule} from "../services/services.module";
import {WikiPage} from "./wiki.component";
import {WikiListPage} from "./wiki-list.component";
import {WikiListRow} from "./wiki-list-row/wiki-list-row.component";
import {WikiNav} from "./wiki-nav/wiki-nav.component";
import {WikiEffects} from "./wiki.effects";
import {WikiSummary} from "./wiki-summary/wiki-summary.component";

@NgModule({
    declarations: [
        WikiPage,
        WikiListPage,
        WikiNav,
        WikiListRow,
        WikiSummary,
    ],
    exports: [
        WikiPage,
        WikiListPage,
    ],
    imports: [
        CommonModule,
        TgCommonModule,
        TgComponentsModule,
        TgAttachmentsModule,
        TgServicesModule,
        TgPipesModule,
        FormsModule,
        StoreModule,
        TranslateModule.forChild({}),
        RouterModule.forChild([
            { path: "project/:slug/wiki", redirectTo: "project/:slug/wiki/home"},
            { path: "project/:slug/wiki/:page", component: WikiPage },
            { path: "project/:slug/wiki-list", component: WikiListPage },
        ]),
        EffectsModule.run(WikiEffects),
    ],
    providers: [
    ],
})
export class WikiModule {}
