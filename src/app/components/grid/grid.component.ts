import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
ngOnInit(): void {
}

private draggedImage: any;

onDragStart(event: any) {
   this.draggedImage = event.target; }

onDragOver(event: any) { 
  event.preventDefault(); }

onDrop(event: any) { 
  event.preventDefault(); 
  const targetImage = event.target;
   const gallery = targetImage.parentElement; gallery.insertBefore(this.draggedImage, targetImage); }

}

