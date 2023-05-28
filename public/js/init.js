tinymce.init({
  tinydrive_token_provider: '/jwt',
  tinydrive_dropbox_app_key: 'ihkijjskgoe4t5e',
  tinydrive_google_drive_key: 'AIzaSyAIEOn5AS_PAYltTMmXT4keqDpw8IHQLew',
  tinydrive_google_drive_client_id: '987625185671-scqadt5bk2ptlbvsahfqt2luo5gpfom5.apps.googleusercontent.com',
  branding: false,
  selector: 'textarea#fontapp',
  skin: 'dazzle',
  icons: 'small',
  tinydrive_skin: 'oxide',
  content_style: "body { font-family: 'iA Writer Serif';font-size: 18pt; }",
  font_css: ['/css/iafonts.css', '/css/jffonts.css'],
  font_family_formats: 'iA Writer Serif=ia writer serif;iA Writer Sans=ia writer sans;iA Writer Mono=ia writer mono;iA Writer Duo=ia writer duo;iA Writer Quattro=ia writer quattro;JF Regular=jf regular;JF Garamond=jf garamond;JF Infant=jf infant;JF Smallcase=jf smallcase;JF Unicase=jf unicase;JF Upright=jf upright;Elisabeth Serif=elisabeth serif;Elisabeth Serif Swash=elisabeth serif swash',
  font_size_formats: '6pt 8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
  plugins: 'preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage formatpainter permanentpen pageembed charmap mentions quickbars linkchecker emoticons advtable export footnotes mergetags autocorrect',
  toolbar: 'insertfile | undo redo | bold italic underline | fontfamily fontsize',
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
    '#51CF66', 'Light Green',
    '#FCC419', 'Light Yellow',
    '#F06595', 'Light Red',
    '#845EF7', 'Light Purple',
    '#339AF0', 'Light Blue',

    '#37B24D', 'Green',
    '#F59F00', 'Yellow',
    '#D6336C', 'Red',
    '#7048E8', 'Purple',
    '#1C7ED6', 'Blue',

    '#2B8A3E', 'Dark Turquoise',
    '#E67700', 'Orange',
    '#A61E4D', 'Dark Red',
    '#5F3DC4', 'Dark Purple',
    '#1864AB', 'Dark Blue',

    '#CED4DA', 'Light Gray',
    '#ADB5BD', 'Medium Gray',
    '#868E96', 'Gray',
    '#495057', 'Dark Gray',
    '#212529', 'Navy Blue',

    '#000000', 'Black',
    '#ffffff', 'White'
  ],
});
