import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {
  form
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name:['',Validators.required],
      contact: fb.group({
        email:[],
        phone:[]
      }),
      topics : fb.array([])
    })
  }
 //  FormControl: any;
 //  addTopic(topic: HTMLInputElement) {
 //    this.topics.push(new FormControl(topic.value))
 //    topic.value = '';
 //  }
 //
 //  removeTopic(topic: AbstractControl | FormArray) {
 //    let index = this.topics?.controls.indexOf(topic)
 //   this.topics.removeAt(index)
 // }
 //  get topics() {
 //    return this.form.get('topics') as FormArray
 //  }
  topics: any;
}
