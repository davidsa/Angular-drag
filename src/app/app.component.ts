import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['red', 'blue', 'green', 'yellow', 'red', 'blue', 'green', 'yellow', 'red', 'blue', 'green', 'yellow'];
  isMouseDown = false;
  dragged = false;
  lastMousePosition = null;
  @ViewChild('container') private containerRef: ElementRef;

  ngAfterViewInit() {
    this.containerRef.nativeElement.addEventListener('mousedown', (event) => this.onMouseDown(event));
    this.containerRef.nativeElement.addEventListener('mouseup', (event) => this.onMouseUp(event));
    this.containerRef.nativeElement.addEventListener('mousemove', (event) => this.onMouseMove(event));
  }

  onMouseDown(event: MouseEvent) {
    this.lastMousePosition = event.clientX;
    this.isMouseDown = true;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isMouseDown) {
      return null;
    }
    const { clientX } = event;
    this.containerRef.nativeElement.scrollLeft += this.lastMousePosition - clientX;
    this.lastMousePosition = clientX;
    this.dragged = true;
  }

  onMouseUp(event: MouseEvent) {
    setTimeout(() => {
      this.dragged = false;
    }, 0);
    this.lastMousePosition = null;
    this.isMouseDown = false;
  }
}
