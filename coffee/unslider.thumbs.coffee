#
#  a unsliderThumbs plugin for jQuery
#

$ = jQuery

class unsliderThumbs

	constructor: (@element, @options, @unslider) ->
		@init()

	init: =>
		@addThumbs()
		@unslider.o.onStart = @onMove
		@element.data(@element.data('key'), @unslider);

	addThumbs: ->
		@$thumbWrapper = $ "<div class='#{@options.wrapperClass}'></div>"
		@$thumbWrapper.append '<ul></ul>'
		@$thumbWrapper.appendTo(@element);

		i=0
		for li in @unslider.li
			$li = $("<li class='#{@options.liClass}'></li>");
			thumb = $(li).data('thumb');
			$a = $('<a></a>').append("<img src='#{thumb}' />").click (e) =>
				@unslider.to($(e.currentTarget).parent().prevAll().length)
			$li.append($a)
			$('ul',@$thumbWrapper).append($li)
			i++


	onMove: (el, index) ->
		@unslider = el.data(el.data('key'));

		$(".unsliderThumbs li", el).removeClass('active');
		$(".unsliderThumbs li:eq(#{index})", el).addClass('active')



$.unsliderThumbs = (element, options, unslider) ->
	# default plugin settings
	@defaults =
		# general
		wrapperClass:			'unsliderThumbs'  	# unsliderThumbs framedObject class name
		liClass:				'unsliderThumb'  	# unsliderThumbs framedObject class name
		
	## public variables
	# plugin settings
	@settings = {}

	# jQuery version of DOM element attached to the plugin
	@$element = $ element

	# unsliderThumbs object
	@unsliderThumbs = {}

	@unslider = unslider
	# init function
	@init = ->
		@settings = $.extend {}, @defaults, options
		@unsliderThumbs = new unsliderThumbs(@$element, @settings, @unslider)

	# initialise the plugin
	@init()

	this #returned

$.fn.unsliderThumbs = (options) ->
	return this.each ->
		unslider = $(this).data($(this).data('key'));
		if unslider?
			plugin = new $.unsliderThumbs this, options, unslider
			$(this).data 'unsliderThumbs', plugin
