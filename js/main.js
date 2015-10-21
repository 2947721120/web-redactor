(function() {

    $('#setItal').on('click', function () { setItal(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#setBold').on('click', function () { setBold(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#insertUl').on('click', function () { insertUl(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#insertOl').on('click', function () { insertOl(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#underline').on('click', function () { underline(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#insertPh').on('click', function () { insertPh(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#justifyLeft').on('click', function () { justifyLeft(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#justifyCenter').on('click', function () { justifyCenter(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#justifyRight').on('click', function () { justifyRight(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#undo').on('click', function () { Undo(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#redo').on('click', function () { Redo(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#createLink').on('click', function () { createLink(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#insertImageBtn').on('click', function () { InsertImage(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#pickFontFamily').on('click', function () { fontName(); });
    //------------------------------------------------------------------------------------------------------------------
    $('#pickFontSize').on('click', function () { fontSize(); });
    //------------------------------------------------------------------------------------------------------------------




    var isGecko = navigator.userAgent.toLowerCase().indexOf("gecko") != -1;
    var iframe = (isGecko) ? document.getElementById("iframe") : frames["iframe"];
    var win = (isGecko) ? iframe.contentWindow : iframe.window;
    var doc = (isGecko) ? iframe.contentDocument : iframe.document;

    iHTML = "<html><head></head><body style='background-color: white;'></body></html>";
    doc.open();
    doc.write(iHTML);
    doc.close();
    doc.designMode = "on";

    function setBold() {
        win.focus();
        win.document.execCommand("bold", null, "");
    }
    function setItal() {
        win.focus();
        win.document.execCommand("italic", null, "");
    }
    function insertUl() {
        win.focus();
        win.document.execCommand("InsertUnorderedList", null, "");
    }
    function insertOl() {
        win.focus();
        win.document.execCommand("InsertOrderedList", null, "");
    }
    function underline() {
        win.focus();
        win.document.execCommand("Underline", null, "");
    }
    function justifyLeft() {
        win.focus();
        win.document.execCommand("JustifyLeft", null, "");
        $(this).closest('.modal').modal('hide');
    }
    function justifyCenter() {
        win.focus();
        win.document.execCommand("JustifyCenter", null, "");
        $(this).closest('.modal').modal('hide');
    }
    function justifyRight() {
        win.focus();
        win.document.execCommand("JustifyRight", null, "");
        $(this).closest('.modal').modal('hide');
    }
    function insertPh() {
        win.focus();
        win.document.execCommand("InsertParagraph", null, "");
    }
    function fontSize() {
        win.focus();
        var fontSizeVal = $('#chooseFontSize').val();
        win.document.execCommand("FontSize", null, fontSizeVal);
        $(this).closest('.modal').modal('hide');
    }
    function fontName() {
        win.focus();
        var fontNameVal = $('#chooseFont').val();
        win.document.execCommand("FontName", null, fontNameVal);
        $(this).closest('.modal').modal('hide');
    }
    function createLink() {
        win.focus();
        var linkPath = $('#linkPath').val();
        win.document.execCommand("CreateLink", null, linkPath);
        $(this).closest('.modal').modal('hide');
    }
    function InsertImage() {
        win.focus();
        var imgPath = $('#insertImageFile').val();
        win.document.execCommand("InsertImage", null, imgPath);
    }
    function Undo(imgPath) {
        win.focus();
        win.document.execCommand("Undo", null, imgPath);
    }
    function Redo(imgPath) {
        win.focus();
        win.document.execCommand("Redo", null, imgPath);
    }


    //------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------

    $("#iframe").bind('paste', function(e) {
        e.preventDefault();
        alert('pasting!');
        var text = e.clipboardData.getData("text/plain");
        win.execCommand("insertHTML", false, 'ass');
    });







}).call(this);


