;(function(){
	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});

// Snippet credits: http://www.scala-lang.org/resources/js/main.js
  function expandSnippetAction(snippetID, container) {
    var codeBox = container.find(".inject");

    function go() {
      var snippet = $(snippetID).html();

      // for positioning the arrow
      var arrow = $(this).parent().siblings(".code-snippet-arrow");
      var centerPoint = $(this).position().left + $(this).width()/2;
      arrow.css("left", centerPoint);

      var codeSnippetInContainer = codeBox.html();

      if (container.is(":hidden")) {
        arrow.show();
        arrow.addClass("hover");
        codeBox.html(snippet);
        container.slideDown();
      } else if (codeSnippetInContainer == snippet) {
        container.slideUp(function() {
          arrow.hide();
        });
      } else {
        var hgt = $(snippetID).height();
        arrow.addClass("hover");
        codeBox.html(snippet);
        codeBox.animate({height: hgt}, 400);
      }
    }
    return go;
  }

  var row1 = $("#code-snippet-row1");
  var row2 = $("#code-snippet-row2");

  $("#team-1").click(expandSnippetAction("#hidden-team-1", row1));
  $("#team-2").click(expandSnippetAction("#hidden-team-2", row1));
  $("#team-3").click(expandSnippetAction("#hidden-team-3", row1));
  $("#team-5").click(expandSnippetAction("#hidden-team-5", row1));
  $("#team-4").click(expandSnippetAction("#hidden-team-4", row2));

})(jQuery)

  $(".teams").click(function () {
    $(".teams").not(this).removeClass('darker'); 
    $(this).toggleClass("darker");

  });