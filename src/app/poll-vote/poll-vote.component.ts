import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent{
  options: ['Monday','Tuesday','Wednesday'];
  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('',[Validators.required]),
    });
   }

   submitForm(data){
    console.log("formData:" , data);
  }

}
