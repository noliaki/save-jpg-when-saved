;(function(){
  'use strict';

  var acDoc    = activeDocument,
      filePath = acDoc.path,
      fileName = acDoc.name,
      exportPath = filePath + '/../JPG/',

      fileObj  = new File( exportPath + fileName.replace(/(\.psd)$/, '.jpg')),
      jpegOpt  = new JPEGSaveOptions();

  var exportDir = new Folder(exportPath);
  if (!exportDir.exists) {
    if (confirm(exportPath + 'フォルダを作成します')) {
      if (exportDir.create()) {
        alert( exportPath + 'フォルダを作成しました' );
      } else {
        alert( exportPath + 'フォルダを作成中にエラーになりました' );
        return;
      }
    } else {
      alert( '処理を中断しました' );
      return;
    }
  }

  jpegOpt.embedColorProfile = true;
  jpegOpt.quality           = 12;
  jpegOpt.formatOptions     = FormatOptions.PROGRESSIVE;
  jpegOpt.scans             = 3;
  jpegOpt.matte             = MatteType.NONE;

  acDoc.saveAs(fileObj, jpegOpt, true, Extension.LOWERCASE);
})();
