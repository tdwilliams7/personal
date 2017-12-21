import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project = {
    img: 'assets/momentumClone.png',
    description: `          Static Clone of seriouseats.com. Made with HTML/CSS, Bootstrap, and React. Tried to mimic as much as possible.
          Links do take you to that site.`
  }
    project1 = {
    img: 'assets/momentumClone.png',
    description: `          Static Clone of seriouseats.com. Made with HTML/CSS, Bootstrap, and React. Tried to mimic as much as possible.
          Links do take you to that site.`
  }
  constructor() { }

  activeProject = {};

  setActive(event){
    console.log(event.target.attributes.link.textContent);
    this.activeProject = {
      img: event.target.src,
      description: event.target.attributes.description.textContent,
      link: event.target.attributes.link.textContent;
    }
  }

  ngOnInit() {
    this.activeProject = this.project;
  }

}
