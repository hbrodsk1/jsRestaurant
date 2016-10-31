$(function() {
    console.log( "ready!" );
});
$( "#content" ).css("text-align", "center");
$( "html" ).css("background-image", "url(cheap_diagonal_fabric.png)")

// Initial view
$(function() {
	$( ".home-tab" ).addClass("active")
	$( ".home" ).show();
    $( ".menu" ).hide();
    $( ".contact" ).hide();
});

$( "#content" ).append("<ul class=nav></ul>");
$( ".nav" ).append("<li class='tab home-tab'><a href='#content' class='home-button'>Home</a></li>");
$( ".nav" ).append("<li class='tab menu-tab'><a href='#content' class='menu-button'>Menu</a></li>");
$( ".nav" ).append("<li class='tab contact-tab'><a href=#'content' class='contact-button'>Contact</a></li>");



// Home
$( "#content" ).append( "<h1 class='home'>Fancy Restaurant</h1>" );
//$( "#content" ).append( "<img class=active src=https://upload.wikimedia.org/wikipedia/commons/1/1e/Tom's_Restaurant,_NYC.jpg>" );
$( "#content" ).append( "<p class='home'>Come on down to Fancy Restaurant, where the food is edible and the staff is adequate.</p>" );

// Menu
$( "#content" ).append( "<h1 class='menu'>Menu</h1>" );
$( "#content" ).append( "<p class='menu'>Our menu is coming soon, but we don't have food at the moment</p>" );

// Contact
$( "#content" ).append( "<h1 class='contact'>Contact Us</h1>" );
$( "#content" ).append( "<p class='contact'>Hit me up</p>" );


// Tab Funtionality
$( ".home-tab" ).click(function() {
	$( ".home-tab" ).addClass("active");
	$( ".menu-tab" ).removeClass("active");
	$( ".contact-tab" ).removeClass("active");
    $( ".home" ).show();
    $( ".menu" ).hide();
    $( ".contact" ).hide();   
});

$( ".menu-tab" ).click(function() {
	$( ".home-tab" ).removeClass("active");
	$( ".menu-tab" ).addClass("active");
	$( ".contact-tab" ).removeClass("active");
    $( ".home" ).hide();
    $( ".menu" ).show();
    $( ".contact" ).hide();   
});

$( ".contact-tab" ).click(function() {
	$( ".home-tab" ).removeClass("active");
	$( ".menu-tab" ).removeClass("active");
	$( ".contact-tab" ).addClass("active");
    $( ".home" ).hide();
    $( ".menu" ).hide();
    $( ".contact" ).show();   
});