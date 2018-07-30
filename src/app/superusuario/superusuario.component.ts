import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-superusuario',
  templateUrl: './superusuario.component.html',
  styleUrls: ['./superusuario.component.css']
})
export class SuperusuarioComponent implements OnInit {

  public tabSelector: number;

  constructor(private modalService: NgbModal) { 
    this.tabSelector = 0;
  }

  ngOnInit() {
  }

  open(content, nombreModal:string) {
    this.modalService.open(content, { ariaLabelledBy: nombreModal , centered: true })
  }

}
