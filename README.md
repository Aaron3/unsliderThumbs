unsliderThumbs
==============

Adds basic thumbnail support to <a href="http://unslider.com">Unslider</a>. Quick and dirty to start. (Pushing early and often.)

__unsliderThumbs requires the https://github.com/Aaron3/unslider/tree/unslider_onStart branch at a minimum__

Assumes the `li` element that holds the slide has a `data-thumb="http://placeholder.it/70x70"` atribute that holds the thumbnail image.

Called with chaining:

`$('element').unslider().unsliderThumbs();`

Css classes:

```css
.unsliderThumbs{} /*thumbNailDiv*/
.unsliderThumb{} /*li that holds individual thumb*/
.unsliderThumb.active{} /*current thumbnail*/

/*Full selector:*/
div.unsiderThumbs ul li.unsliderThumb a img{}
```

No CSS is required; however, at a minimum you will probably want to position the thumbnails absolutely and set dimensions so they don't break your layout add a .active style.

For example, the following will position them vertically alongside the right of the slider.

```css
.unsliderThumbs {
  position: absolute;
	top: 0;
	right: 0;
	width: 70px;
	height: 300px;
	overflow: hidden;
}

.unsliderThumbs .unsliderThumb img {
	opacity: .3;
	height: 70px;
	width: 70px;
}

.unsliderThumbs .unsliderThumb.active img {
	opacity: 1;
	-webkit-transition: opacity 0.4s ease-in-out;
	-ms-transition: opacity 0.4s ease-in-out;
	-o-transition: opacity 0.4s ease-in-out;
	-transition: opacity 0.4s ease-in-out;
	transition: opacity 0.4s ease-in-out;
}
```

