import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-nav',
  templateUrl: './post-nav.component.html',
  styleUrls: ['./post-nav.component.css']
})
export class PostNavComponent {


  constructor(  
    private router: Router,
    private route: ActivatedRoute )
    { }

  navigateToSubmit(){
    const groupId = this.route.snapshot.paramMap.get('groupId');
    this.router.navigate([`group/${groupId}/post/submit`]);
  }
}
