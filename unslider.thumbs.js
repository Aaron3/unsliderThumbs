(function() {
  var $, unsliderThumbs,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $ = jQuery;

  unsliderThumbs = (function() {
    function unsliderThumbs(element, options, unslider) {
      this.element = element;
      this.options = options;
      this.unslider = unslider;
      this.init = __bind(this.init, this);
      this.init();
    }

    unsliderThumbs.prototype.init = function() {
      this.addThumbs();
      this.unslider.o.onStart = this.onMove;
      return this.element.data(this.element.data('key'), this.unslider);
    };

    unsliderThumbs.prototype.addThumbs = function() {
      var $a, $li, i, li, thumb, _i, _len, _ref, _results,
        _this = this;

      this.$thumbWrapper = $("<div class='" + this.options.wrapperClass + "'></div>");
      this.$thumbWrapper.append('<ul></ul>');
      this.$thumbWrapper.appendTo(this.element);
      i = 0;
      _ref = this.unslider.li;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        li = _ref[_i];
        $li = $("<li class='" + this.options.liClass + "'></li>");
        thumb = $(li).data('thumb');
        $a = $('<a></a>').append("<img src='" + thumb + "' />").click(function(e) {
          return _this.unslider.to($(e.currentTarget).parent().prevAll().length);
        });
        $li.append($a);
        $('ul', this.$thumbWrapper).append($li);
        _results.push(i++);
      }
      return _results;
    };

    unsliderThumbs.prototype.onMove = function(el, index) {
      this.unslider = el.data(el.data('key'));
      $(".unsliderThumbs li", el).removeClass('active');
      return $(".unsliderThumbs li:eq(" + index + ")", el).addClass('active');
    };

    return unsliderThumbs;

  })();

  $.unsliderThumbs = function(element, options, unslider) {
    this.defaults = {
      wrapperClass: 'unsliderThumbs',
      liClass: 'unsliderThumb'
    };
    this.settings = {};
    this.$element = $(element);
    this.unsliderThumbs = {};
    this.unslider = unslider;
    this.init = function() {
      this.settings = $.extend({}, this.defaults, options);
      return this.unsliderThumbs = new unsliderThumbs(this.$element, this.settings, this.unslider);
    };
    this.init();
    return this;
  };

  $.fn.unsliderThumbs = function(options) {
    return this.each(function() {
      var plugin, unslider;

      unslider = $(this).data($(this).data('key'));
      if (unslider != null) {
        plugin = new $.unsliderThumbs(this, options, unslider);
        return $(this).data('unsliderThumbs', plugin);
      }
    });
  };

}).call(this);
