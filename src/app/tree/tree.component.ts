import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { TreeData } from '../const/data';
import { GlobalDataService } from '../services/global-data.service';
import { LocalTreeParserService } from '../services/local-tree-parser.service';









@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  providers: [LocalTreeParserService]
})
export class TreeComponent implements OnInit {

  trees: TreeNode[] = [];

  selectedFile!: TreeNode;

  constructor(public globalData: GlobalDataService,
    private treeParser: LocalTreeParserService) {}

  ngOnInit(): void {
    const treeData: TreeData[] = this.globalData.treesData;
    this.trees = this.treeParser.parse(treeData);
  }

}
