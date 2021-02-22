var tooBigs = [
"onii-chan, y-your upload is t-too big...",
"t-that just won't fit... i-it's too big...",
"nnn, s-senpai, it's t-too big...",
"y-you'll tear me in half with that upload s-senpai..."
];

var badFiles = [
"y-you can't put that in h-here...",
"th-that's dirty, you can't put it in..."
];

function grabTooBig() {

var num = Math.floor( Math.random() * tooBigs.length );
var str = tooBigs[ num ];

return str;

}

function grabBadType() {

var num = Math.floor( Math.random() * badFiles.length );
var str = badFiles[ num ];

return str;

}


Dropzone.options.dropzoneUpload = {
	paramName: "fileToUpload", 
	clickable: true,
	uploadMultiple: false,
	autoProcessQueue: true,
	createImageThumbnails: false,
	maxFilesize: 200,
	timeout: 120000,
	dictDefaultMessage: "Select or drop files",
	dictFallbackMessage: "Your browser is outdated or doesn't support drag and drop.",
	dictFallbackText: "Consider updating.",
	dictFileTooBig: grabTooBig(),
	maxFiles: 40,
	parallelUploads: 5,
	previewTemplate: $("div.templateForUploads").html(),
	init: function() {
		this.on("success", function(file, responseText) {

			var para = document.createElement("div");
			var textHolder = document.createElement("span");
			var t = document.createTextNode(responseText);
			para.appendChild(textHolder);
			textHolder.appendChild(t);
			para.className = "responseText";
			textHolder.className = "textHolder";

			file.previewTemplate.appendChild(para);
			file.previewTemplate.style.borderColor = "#23B748";
			file.previewTemplate.childNodes[3].childNodes[0].style.backgroundColor = "#23B748";

			$(file.previewTemplate).find("span.textHolder").on('click', function(event) {


				if (event.which === 2 && !$(this).hasClass('disabled')) {

					window.open($(this).text(),'_blank');
					$(this).removeClass('disabled');
					return;

				} else if (event.which === 1 && !$(this).hasClass('disabled')) {

					var selection = window.getSelection();     
					var range = document.createRange();
					range.selectNodeContents(textHolder);
					selection.removeAllRanges();
					selection.addRange(range);

					document.execCommand('copy');

					var oldtext = $(this).text();
					$(this).text("Copied!");

					$(this).fadeTo("slow", 0, function() {
						$(this).text(oldtext);
						$(this).fadeTo(0, 1);
						$(this).removeClass('disabled');
					});
				}

				$(this).addClass('disabled');

			});

		});

		this.on("error", function(file, responseText) {
			file.previewTemplate.childNodes[3].childNodes[0].style.backgroundColor = "#FF5C5C";
		});
	},

	accept: function(file, done) {

		if (file.type === "application/exe" || file.name.substr(file.name.length - 4) === ".scr" || file.name.substr(file.name.length - 4) === ".exe" || file.name.substr(file.name.length - 4) === ".doc" || file.name.substr(file.name.length - 4) === ".jar") {
			done(grabBadType());
		} else {
			done();
		}
	}

};

$( document ).ready(function() {

	$(document).on("keypress", "form", function(event) { 
		return event.keyCode != 13;
	});

	$("#showURLUp").click(function(){
		var upform = $(".urlUploadForm");

		if (upform.css("display") == "none") {
			upform.css("display", "");
		} else {
			upform.css("display", "none");
		}
	});

	$("button.urlUpSubmit").click(function(){

		var url = $("input[name='url']").val();
		var userhash = $("input[name='userhash']").val();		
		
		if (!url.trim()) {
			return;
		}

		$.post("user/api.php", { reqtype: "urlupload", userhash: userhash, url: url }, function(data, status) {
			$("p.urlUploadResponse").css("display", "");
			$("p.urlUploadResponse").append("Done! Your file is available at <div class='responseText'><span class='urlResponse'>" + data + "</span></div>");
	
			$("p span").on('click', function(event) {


				if (event.which === 2 && !$(this).hasClass('disabled')) {

					window.open($(this).text(),'_blank');
					$(this).removeClass('disabled');
					return;

				} else if (event.which === 1 && !$(this).hasClass('disabled')) {

					var selection = window.getSelection();     
					var range = document.createRange();
					range.selectNodeContents($(this).get(0));
					selection.removeAllRanges();
					selection.addRange(range);

					document.execCommand('copy');

					var oldtext = $(this).text();
					$(this).text("Copied!");

					$(this).fadeTo("slow", 0, function() {
						$(this).text(oldtext);
						$(this).fadeTo(0, 1);
						$(this).removeClass('disabled');
					});
				}

				$(this).addClass('disabled');

			});


		}).fail(function(xhr, error, status) {

			$("p.urlUploadResponse").css("display", "");
			if (status == "Precondition Failed") {
				$("p.urlUploadResponse").append("<p>Something went wrong trying to upload that file. Reason: " + status + ". Is the file publicly accessible?</p>");
			} else if (status == "Internal Server Error") {
				$("p.urlUploadResponse").append("<p>Something went wrong trying to upload that file. Reason: " + status + ". It's probably my fault. Sorry~.</p>");
			}

		});

	});
	$("input[name='url']").focus(function(){
		$(this).attr("placeholder", "");
	});

	$("input[name='url']").blur(function(){
		$(this).attr("placeholder", "Put your link in here, onii-chan~");
	});



});


