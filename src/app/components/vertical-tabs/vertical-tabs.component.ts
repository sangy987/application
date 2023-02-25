import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'app-vertical-tabs',
	templateUrl: './vertical-tabs.component.html',
	styleUrls: ['./vertical-tabs.component.scss'],
	providers: [NgbModalConfig, NgbModal],
})
export class VerticalTabsComponent {
	constructor(config: NgbModalConfig, private modalService: NgbModal) {
		config.backdrop = 'static';
		config.keyboard = false;
	}
	value1!: string;
	remainingText!: number;
	value!: string;
	value2!: string;
	value3!: string;


	open(content: any) {
		this.modalService.open(content);
	}
	valueChange(value: string) {
		this.remainingText = 1024 - value.length;
	}
}
