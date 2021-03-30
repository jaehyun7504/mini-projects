import './App.css';
import { nanoid } from 'nanoid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

function App() {
  const editorConfig = {
    language: 'ko',
    title: { placeholder: '제목을 입력해주세요.' },
    placeholder: '내용을 입력해주세요.',
    toolbar: [
      'heading',
      '|',
      'alignment',
      'bold',
      'italic',
      'underline',
      'highlight',
      'fontColor',
      'fontSize',
      'fontFamily',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'outdent',
      'indent',
      '|',
      'imageInsert',
      'insertTable',
      'blockQuote',
      'specialCharacters',
      'horizontalLine',
      'undo',
      'redo',
    ],
  };
  const editorId = nanoid(12);

  return (
    <div className="App">
      <h2>CKEditor 5</h2>
      <CKEditor
        editor={Editor}
        config={editorConfig}
        id={editorId}
        onReady={editor => {
          console.log('Editor is ready to use!');
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ data });
        }}
        onBlur={(event, editor) => {
          // console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          // console.log('Focus.', editor);
        }}
      />
    </div>
  );
}

export default App;
