import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-delete-modal',
    templateUrl: './delete-modal.component.html',
    styleUrls: ['./delete-modal.component.css'],
})

export class DeleteModalComponent {
    @Input() itemTitle: string = '';

    @Output() deleteConfirmation = new EventEmitter<string>();

    onAction (action: string): void {
        this.deleteConfirmation.emit(action);
    }
}