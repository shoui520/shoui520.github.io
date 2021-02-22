$( document ).ready(function() {

	$("#changeTheme").click(function() {
		var darkness = Cookies.get("darktheme");

		if (darkness) {
			$( "link[href='resources/style-dark.css']" ).remove();
			Cookies.remove("darktheme", {domain: 'catbox.moe'});
			$("img:first").attr("src", "pictures/logo.png");

			$(this).text("Go Dark?");
		} else {
			$('head').append('<link rel="stylesheet" href="resources/style-dark.css" type="text/css" />');
			Cookies.set("darktheme", 1, { expires : 31, domain: 'catbox.moe' });
			$("img:first").attr("src", "pictures/logo_white.png");

			$(this).text("Lights on!");
		}
		
		return false;

	});

});

