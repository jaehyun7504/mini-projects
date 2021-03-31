const editorConfig = {
  language: 'ko',
  title: {
    placeholder: '제목을 입력하세요.',
  },
  placeholder: '내용을 입력하세요.',
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
    'insertTable',
    'blockQuote',
    'horizontalLine',
    'undo',
    'redo',
  ],
  image: {
    toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side'],
    upload: {
      types: [
        'jpg',
        'jpeg',
        'jfif',
        'pjpeg',
        'pjp',
        'png',
        'gif',
        'bmp',
        'webp',
        'tiff',
      ],
    },
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties',
    ],
  },
  cloudServices: {
    tokenUrl:
      'https://79588.cke-cs.com/token/dev/39c0dcba6908c7987b001f967e05278f8b757c69da7b3ef28417902e0cd1',
    uploadUrl: 'https://79588.cke-cs.com/easyimage/upload/',
  },
};

export default editorConfig;
