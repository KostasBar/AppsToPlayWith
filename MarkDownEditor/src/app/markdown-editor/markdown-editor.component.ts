import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';

@Component({
  selector: 'app-markdown-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './markdown-editor.component.html',
  styleUrl: './markdown-editor.component.css'
})
export class MarkdownEditorComponent {
  markdownText: string = '';

  get formattedMarkdown(): string {
    console.log(marked(this.markdownText))
    return marked(this.markdownText); // Synchronous processing
  }
}
