import { Injectable } from '@angular/core';
import { TreeData } from '../const/data';
import { TreeNode } from 'primeng/api';

@Injectable()
export class LocalTreeParserService {

  getBrunch(dataObj: TreeData): TreeNode {
    const newDataObj: TreeNode = {
      label: dataObj.id,
      data: {
        id: dataObj.id,
        name: dataObj.name
      }
    }

    if(dataObj.children && dataObj.children.length !== 0) {
      newDataObj.selectable = false;
      newDataObj.children = dataObj.children.map((child) => {
        return this.getBrunch(child);
      })
    }

    if (dataObj.selectable === false) {
      newDataObj.selectable = false;
    }

    return newDataObj;
  }

  parse(data: TreeData[]): TreeNode[] {
    const trees: TreeNode[] = [];
    data.forEach((obj) => {
      trees.push(this.getBrunch(obj))
    })
    return trees;
  }

  constructor() { }
}
