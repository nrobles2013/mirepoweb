import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import { LegacyTooltipPosition as TooltipPosition } from '@angular/material/legacy-tooltip';

@Component({
  selector: 'app-auto-hide-tooltip',
  templateUrl: './auto-hide-tooltip.component.html',
  styleUrls: ['./auto-hide-tooltip.component.scss']
})
export class AutoHideTooltipComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new UntypedFormControl(this.positionOptions[0]);
  
  constructor() { }

  ngOnInit() {
  }

}
