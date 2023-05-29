tinymce.init({
  tinydrive_token_provider: '/jwt',
  tinydrive_dropbox_app_key: 'ihkijjskgoe4t5e',
  tinydrive_google_drive_key: 'AIzaSyAIEOn5AS_PAYltTMmXT4keqDpw8IHQLew',
  tinydrive_google_drive_client_id: '987625185671-scqadt5bk2ptlbvsahfqt2luo5gpfom5.apps.googleusercontent.com',
  branding: false,
  selector: 'textarea#fontapp',
  skin: 'borderless',
  icons: 'small',
  tinydrive_skin: 'oxide',
  content_style: "body { font-family: 'iA Writer Serif';font-size: 14pt; }",
  font_css: ['/css/fonts.css'],
  font_family_formats: 'iA Writer Duo=ia writer duo;iA Writer Mono=ia writer mono;iA Writer Quattro=ia writer quattro;iA Writer Sans=ia writer sans;iA Writer Serif=ia writer serif',
  font_size_formats: '6pt 8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
  plugins: 'preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage formatpainter permanentpen pageembed charmap mentions quickbars linkchecker emoticons advtable export footnotes mergetags autocorrect',
  toolbar: 'insertfile | undo redo | bold italic underline | fontfamily | fontsize | code fullscreen',
  toolbar_sticky: true,
  statusbar: false,
  menubar: 'file edit insert view format tools table',
  menu: {
    file: { title: 'File', items: 'newdocument restoredraft | preview | save export print | deleteallconversations' },
    edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
    view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
    insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
    table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' }
  },
  quickbars_insert_toolbar: false,
  quickbars_image_toolbar: 'alignleft aligncenter alignright',
  color_map: [
    '#D3F9D8', 'White Green',
    '#FFF3BF', 'White Amber',
    '#FFE3E3', 'White Red',
    '#FFDEEB', 'White Pink',
    '#E5DBFF', 'White Purple',
    '#D0EBFF', 'White Blue',
    '#F1F3F5', 'White Gray',
    
    '#8CE99A', 'Pale Green',
    '#FFE066', 'Pale Amber',
    '#FFA8A8', 'Pale Red',
    '#FAA2C1', 'Pale Pink',
    '#B197FC', 'Pale Purple',
    '#74C0FC', 'Pale Blue',
    '#DEE2E6', 'Pale Gray',
    
    '#51CF66', 'Light Green',
    '#FCC419', 'Light Amber',
    '#FF6B6B', 'Light Red',
    '#F06595', 'Light Pink',
    '#845EF7', 'Light Purple',
    '#339AF0', 'Light Blue',
    '#ADB5BD', 'Light Gray',

    '#37B24D', 'Medium Green',
    '#F59F00', 'Medium Amber',
    '#F03E3E', 'Medium Red',
    '#D6336C', 'Medium Pink',
    '#7048E8', 'Medium Purple',
    '#1C7ED6', 'Medium Blue',
    '#495057', 'Medium Gray',

    '#2B8A3E', 'Dark Green',
    '#E67700', 'Dark Amber',
    '#C92A2A', 'Dark Red',
    '#A61E4D', 'Dark Pink',
    '#5F3DC4', 'Dark Purple',
    '#1864AB', 'Dark Blue',
    '#212529', 'Dark Gray',

    '#000000', 'Black',
    '#ffffff', 'White',
    '#ffffff', 'White'
  ],
});
