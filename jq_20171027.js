$(document).ready(function() {
	
	// add an element
	var txt = document.createElement("h1");
	txt.innerHTML = "cis255 - jQuery Intro - Build HTML from scratch";
	$("body div span").append(txt);
	
	
	
	// add a class to an element
	$("body div h1").addClass("title");
	
	// add an ID to an element
	$("body div h1").attr("id", "title1");
	
	// add 5 paragraph elements in a "for" loop, giving each a unique ID
	for(var i=0; i<15; i++){
		var txt = document.createElement("p");
		txt.innerHTML = "This is paragraph " + i + ".";
		txt.id = "p" + (i+"").padStart(3,"0");
		$("body div span").append(txt);
	}
	
	// change paragraph text if clicked 
	$("p").click(function() {$(this).text("Hey, the text changed!")});
	
	
	
	$("#p010").click(function() {
		$(".overlay1, modal1").addClass("active");
	});
	
	$("#p011").click(function() {
		$(".overlay1, .modal1").addClass("active");
	});
	
	$("#p012").click(function() {
		$(".overlay1, .modal1").addClass("active");
	});
	
	$("#p013").click(function() {
		$(".overlay1, .modal1").addClass("active");
	});
	
	$("#p014").click(function() {
		$(".overlay1, .modal1").addClass("active");
	});
	
	
	// use "each" loop to console-log ids of each paragraph element
	var elems = document.getElementsByTagName("p");
	console.log(elems);
	$.each(elems, function(index, value) {
		console.log(elems[index].id);
	});
	
	// use "$(selector).each" loop to console-log hover message
	$("p").each(function() {
		$(this).hover(function() {
			console.log("hovered over " + this.id);
		});
	});
	
	// toggle() method switches between show() and hide()
	$(".open1").on("click", function() {
        $(".overlay1, .modal1").addClass("active");
    });
	
	// Accordion example
	$(".accordion").on("click", ".accordion-header", function() {
    $(this).toggleClass("active").next().slideToggle();
	});
	
	// Tabs example
	$(".tab-list").on("click", ".tab", function(e) {
    e.preventDefault();

    $(".tab").removeClass("active");
    $(".tab-content").removeClass("show");
    $(this).addClass("active");
    $($(this).attr("href")).addClass("show");
	});
	
	// DropDown example
	$("html").click(function() {
    $(".dropdown").hide();
	});

	$("nav ul li a:not(:only-child)").click(function(e) {
    $(this).siblings(".dropdown").toggle();

    $(".dropdown").not($(this).siblings()).hide();
    e.stopPropagation();
	});
 
	// Popup Modal example
	$(".open1").on("click", function(){
		$(".overlay1, .modal1").addClass("active");
    });

	$(".close1, .overlay").on("click", function(){
	   $(".overlay1, .modal1").removeClass("active");
	});

	$(document).keyup(function(e) {
	  if (e.keyCode === 27) {
		$(".overlay1, .modal1").removeClass("active");
	  }
	});
	
	// Change on Scroll example
	$(window).on("scroll", function() {
		var position = $("#begin").offset();

		if ($(window).scrollTop() > position.top - 80) {
			$("span nav p").addClass("active");
		} else {
			$("span nav p").removeClass("active");
		};
	});

	
	
	
}); // end $(document).ready



 