(function($) {
"use strict";
    var tpj=jQuery;
    var revapi206;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_206_1").revolution==undefined) {
            revslider_showDoubleJqueryError("#rev_slider_206_1");
        }
        else {
            revapi206=tpj("#rev_slider_206_1").show().revolution( {
                sliderType: "standard", jsFileLocation: "revolution/js/", sliderLayout: "auto", dottedOverlay: "none", delay: 9000, navigation: {
                    keyboardNavigation: "off", keyboard_direction: "horizontal", mouseScrollNavigation: "off", onHoverStop: "off", touch: {
                        touchenabled: "on", swipe_threshold: 75, swipe_min_touches: 50, swipe_direction: "horizontal", drag_block_vertical: false
                    }
                    , tabs: {
                        style: "metis", enable: true, width: 250, height: 40, min_width: 249, wrapper_padding: 0, wrapper_color: "", wrapper_opacity: "0", tmp: '<div class="tp-tab-wrapper"><div class="tp-tab-number">{{param1}}</div><div class="tp-tab-divider"></div><div class="tp-tab-title-mask"><div class="tp-tab-title">{{title}}</div></div></div>', visibleAmount: 5, hide_onmobile: true, hide_under: 800, hide_onleave: false, hide_delay: 200, direction: "vertical", span: true, position: "inner", space: 0, h_align: "left", v_align: "center", h_offset: 0, v_offset: 0
                    }
                }
                , responsiveLevels: [1240, 1024, 778, 480], visibilityLevels: [1240, 1024, 778, 480], gridwidth: [1240, 1024, 778, 480], gridheight: [868, 768, 960, 720], lazyType: "none", parallax: {
                    type: "3D", origo: "slidercenter", speed: 1000, levels: [2, 4, 6, 8, 10, 12, 14, 16, 45, 50, 47, 48, 49, 50, 0, 50], type: "3D", ddd_shadow: "off", ddd_bgfreeze: "on", ddd_overflow: "hidden", ddd_layer_overflow: "visible", ddd_z_correction: 100,
                }
                , spinner: "off", stopLoop: "on", stopAfterLoops: 0, stopAtSlide: 1, shuffle: "off", autoHeight: "off", fullScreenAutoWidth: "off", fullScreenAlignForce: "off", fullScreenOffsetContainer: "", fullScreenOffset: "0", disableProgressBar: "on", hideThumbsOnMobile: "off", hideSliderAtLimit: 0, hideCaptionAtLimit: 0, hideAllCaptionAtLilmit: 0, debugMode: false, fallbacks: {
                    simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: false,
                }
            }
            );
        }
    }
    );

    var tpj=jQuery;
    var revapi84;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_84_1").revolution==undefined) {
            revslider_showDoubleJqueryError("#rev_slider_84_1");
        }
        else {
            revapi84=tpj("#rev_slider_84_1").show().revolution( {
                sliderType:"standard", jsFileLocation:"revolution/js/", sliderLayout:"auto", dottedOverlay:"none", delay:9000, navigation: {
                    onHoverStop: "off",
                }
                , responsiveLevels:[1240, 1024, 778, 480], gridwidth:[1240, 1024, 778, 480], gridheight:[400, 400, 300, 170], lazyType:"none", parallax: {
                    type: "scroll", origo: "slidercenter", speed: 2000, levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                }
                , shadow:0, spinner:"off", stopLoop:"on", stopAfterLoops:0, stopAtSlide:1, shuffle:"off", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:false, fallbacks: {
                    simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: false,
                }
            }
            );
        }
    }
    );
})(jQuery);