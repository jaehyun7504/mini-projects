import React from 'react';
import { nanoid } from 'nanoid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import editorConfig from './editorConfig';
import data from './data';
import './App.css';

function App() {
  const editorId = nanoid(12);

  return (
    <div className="App">
      <h2 className="title">CKEditor 5</h2>
      <CKEditor
        editor={Editor}
        config={editorConfig}
        id={editorId}
        onReady={editor => {
          // console.log('Editor is ready to use!', editor);
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
      <div className="gap" />
      <CKEditor
        editor={Editor}
        data={data}
        config={{
          language: 'ko',
          removePlugins: ['toolbar'],
        }}
        disabled
      />
    </div>
  );
}

export default App;
