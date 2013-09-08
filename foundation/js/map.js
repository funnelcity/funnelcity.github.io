// JavaScript Document


function initializeMap() {
      
      
	var myLatlng = new google.maps.LatLng(49.281187,-123.060657);
	var mapOptions = {
	  zoom: 15,
	  center: myLatlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var contentString = '<div id="content">'+
	    '<div id="siteNotice">'+
	    '</div>'+
	    '<h2 id="firstHeading" class="firstHeading">funnel city inc.</h2>'+
	    '<div id="bodyContent">'+
	    '<p>2150 Hastings St. East<br/>Suite PH9<br/>Vancouver, BC<br/>V5L 0A5</p>'+
	    '</div>'+
	    '</div>';

	var infowindow = new google.maps.InfoWindow({
	    content: contentString
	});

	var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title:"Cabrera Martinez S.A. de C.V."
	});

	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	});



}

$(document).ready(function() {
			  // Handler for .ready() called.
			  initializeMap();
});






