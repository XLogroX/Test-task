import { Injectable } from '@angular/core';
import { DATA, NO_DATA, ProductData, TreeData, TREE_DATA } from '../const/data';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  trees: TreeData[] = TREE_DATA;

  id: string = ''

  table: ProductData[] = [{}];

  get treesData(): TreeData[]{
    return this.trees;
  }

  get tableData(): ProductData[] {
    return this.table;
  }

  get idData(): string {
    return this.id;
  }

  setId(evt: any) {
    this.id = evt.node.data.id;
    this.changeTableData();
  }

  changeTableData() {
    if (Object.keys(DATA).includes(this.id)) {
      this.table = DATA[this.id as keyof typeof DATA];
    } else this.table = NO_DATA;
  }


  constructor() { }
}
