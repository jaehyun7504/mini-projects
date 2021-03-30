import React from 'react';
import { nanoid } from 'nanoid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import './App.css';

const editorConfig = {
  language: 'ko',
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
    'imageUpload',
    'CKFinder',
    'mediaEmbed',
    'insertTable',
    'specialCharacters',
    'blockQuote',
    'horizontalLine',
    'undo',
    'redo',
  ],
  title: { placeholder: '제목을 입력해주세요.' },
  placeholder: '내용을 입력해주세요.',
  simpleUpload: { uploadUrl: 'http://localhost:8080/simple-upload/' },
};
const editorId = nanoid(12);

const App = () => {
  return (
    <div className="App">
      <h2 className="title">Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={Editor}
        config={editorConfig}
        id={editorId}
        onReady={editor => {
          // console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          // const data = editor.getData();
          // console.log({ event, editor, data });
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
};

export default App;
