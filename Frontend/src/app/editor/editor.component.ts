import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {Location } from '@angular/common';

import * as ace from 'ace-builds';
// import 'ace-builds/src-noconflict/mode-javascript';
// import 'ace-builds/src-noconflict/theme-github';

// const THEME = 'ace/theme/github';
// const LANG = 'ace/mode/javascript';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

  lesson: any;
  stringWithoutComma: any

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.lesson = localStorage.getItem('lesson');
    
    this.stringWithoutComma =  this.lesson.replaceAll(',','\n') 
    console.log("Original String: "+ this.lesson )
    console.log("Final String: "+ this.stringWithoutComma)
  
  }
  
  @ViewChild('editor') private editor: ElementRef<HTMLElement>;

  // 4️⃣
  ngAfterViewInit(): void {
    ace.config.set('fontSize', '14px');
    ace.config.set(
      'basePath',
      'https://unpkg.com/ace-builds@1.4.12/src-noconflict'
    );
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue(this.stringWithoutComma);
    aceEditor.renderer.attachToShadowRoot();

    //setting the theme
    aceEditor.setTheme('ace/theme/twilight');
    aceEditor.session.setMode('ace/mode/html');

    aceEditor.on('focus', () => {
      // console.log(aceEditor.getValue());
      document.querySelector('#code-editor-output').innerHTML =
        aceEditor.getValue();
    });

    aceEditor.on('change', () => {
      // console.log(aceEditor.getValue());
      document.querySelector('#code-editor-output').innerHTML =
        aceEditor.getValue();
    });
  }

  navigateBack() {
    this.location.back();    
  }
}