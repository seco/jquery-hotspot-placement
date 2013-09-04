// -*- mode: js; js-indent-level: 2; -*-
// Copyright (C) 2013 Rudolf Olah <omouse@gmail.com>
// Licensed under the GNU GPL version 3 or later

(function() {
  var HotSpotUI = function () {
	if (!(this instanceof HotSpotUI)) {
	  return new HotSpotUI();
	}
	var self = this;

	this.areaSelector = '.hotspot-area';
	this.setup = function() {
	  self.createBackgroundImage();
	  self.createMarker();
	  self.setupDraggable();
	  self.hideFields();
	};

	this.createBackgroundImage = function() {
	  var bg = new Image();
	  $(bg).addClass('hotspot-image').load(function() {
		console.log(bg.height);
		console.log(self.areaSelector);
		$(self.areaSelector).css('width', bg.width).css('height', bg.height);
	  });
	  bg.src = 'img/theme.jpg';
	  $(this.areaSelector).append(bg);
	};

	this.createMarker = function() {
	  $(this.areaSelector).append('<img src="img/hotspot.png" class="hotspot-marker" />');
	};

	this.setupDraggable = function() {
	  $('.hotspot-marker').draggable({ containment: '.hotspot-image'});
	};

	this.hideFields = function() {
	};

	this.updateFields = function() {
	};

	this.add = function() {
	};

	this.remove = function(hotspot_id) {
	};
  };

  $(document).ready(function() {
	var ui = new HotSpotUI();
	ui.setup();
  });
})();
