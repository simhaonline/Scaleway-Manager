import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AccountPage} from "./account";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountPage,
        outlet: 'account'
      }
    ])
  ],
  declarations: [AccountPage],
  entryComponents: [AccountPage]
})
export class AccountPageModule {}
