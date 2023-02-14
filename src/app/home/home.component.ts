import { Component, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponentModule } from '../components/table/table.component'

@Component({
  selector: 'app-home',
  template: `
		<!-- No templates provided, will use default layout -->
    <app-table [data]="products"></app-table>

		<!-- Basic configured template -->
    <app-table [data]="products">
      <ng-template #headers>
        <th>Code</th>
        <th>Name</th>
      </ng-template>
    </app-table>

		<!-- Highly configured template with conditional elements -->
    <app-table [data]="inventory">
      <ng-template #headers>
        <th>Item</th>
        <th>Price</th>
        <th></th>
        <th></th>
      </ng-template>
      <ng-template #rows let-row>
        <td>{{ row.name }}</td>
        <td>{{ row.price | currency: row.currency }}</td>
        <td>
          <button *ngIf="row.inStock > 0" (click)="purchaseItem(row.plu)">
            Buy now
          </button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </ng-template>
    </app-table>
	`,
  styles: [`
	`]
})
export class HomeComponent {
	products = [
    { code: 'Ac52R31', name: 'Chocolate' },
    { code: 'Ac52R32', name: 'Pipoca' },
    { code: 'Ac52R33', name: 'Arroz' },
    { code: 'Ac52R34', name: 'Coca-cola' },
    { code: 'Ac52R35', name: 'Banana' },
  ];

	inventory = [
    {
      code: 'Ac52R31',
      supplier: 'Company X',
      name: 'Chocolate',
      inStock: 500,
      price: 12,
      currency: 'BRL',
    },
    {
      code: 'Ac52R32',
      supplier: 'Company X',
      name: 'Pipoca',
      inStock: 0,
      price: 5,
      currency: 'BRL',
    },
    {
      code: 'Ac52R33',
      supplier: 'Company Y',
      name: 'Arroz',
      inStock: 1,
      price: 32,
      currency: 'BRL',
    },
    {
      code: 'Ac52R34',
      supplier: 'Company Y',
      name: 'Coca-cola',
      inStock: 1,
      price: 12,
      currency: 'BRL',
    },
    {
      code: 'Ac52R35',
      supplier: 'Company Y',
      name: 'Banana',
      inStock: 1,
      price: 8,
      currency: 'BRL',
    },
  ];

	purchaseItem(code: string) {
    console.log('handle purchase for', code);
  }
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TableComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
