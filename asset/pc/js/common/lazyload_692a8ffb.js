!function(){$.fn.extend({lazyload:function(a){var b=this;b.img.onerrorImgUrl="http://www.9apps.com/asset/v2/images/default_app.png",b.img.srcStore="dataimg",b.img.className="lazy",b.img.sensitivity=50,b.img.init()},img:{trigger:function(){var a=this;a.imglist=$("img."+a.className),$(window).trigger("scroll")},init:function(){var a=this;$(window).on("scroll",function(){a.changeimg()}),a.trigger()},changeimg:function(){function a(a){var b=window.pageYOffset,d=window.pageYOffset+window.innerHeight,e=a.offset().top;return e>=b&&e-c.sensitivity<=d}function b(a,b){var d=a.attr(c.srcStore);a.attr("src",d),a[0].onload||(a[0].onload=function(){$(this).removeClass(c.className).removeAttr(c.srcStore),c.imglist[b]=null,this.onerror=this.onload=null},a[0].onerror=function(){this.src=c.onerrorImgUrl,$(this).removeClass(c.className).removeAttr(c.srcStore),c.imglist[b]=null,this.onerror=this.onload=null})}var c=this;c.imglist.each(function(d,e){if(e){var f=$(e);(navigator.userAgent.toLowerCase().indexOf("msie 8")>0||navigator.userAgent.toLowerCase().indexOf("msie 7")>0||navigator.userAgent.toLowerCase().indexOf("msie 6")>0||a(f))&&f.attr(c.srcStore)&&b(f,d)}})}}})}(jQuery);