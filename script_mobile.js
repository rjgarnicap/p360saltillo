(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"children":["this.MainViewer_mobile","this.Container_2CDA958C_36F9_655A_41C9_2FB0EC0AD1CE_mobile","this.Container_3AA26786_36C9_6556_41C8_04C2B4B74010_mobile","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"class":"Player","minHeight":0,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_21053389_36FB_BD5A_41CB_1C0E71282DB5_mobile], 'cardboardAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_2C1D15CB_36CB_E4DF_41C1_047C4B90782C_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","gap":10,"minWidth":0,"data":{"locales":{"es":"locale/es.txt"},"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false},"defaultLocale":"es","displayTooltipInTouchScreens":true,"name":"Player760","history":{}},"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"propagateClick":false,"id":"rootPlayer","defaultMenu":["fullscreen","mute","rotation"],"hash": "d6344825ae67392667ef8a99dc8dc5766598f43d515fda0b14d55567b8d0d21b", "definitions": [{"backgroundOpacity":0,"maxHeight":64,"horizontalAlign":"center","iconURL":"skin/IconButton_2C1D15CB_36CB_E4DF_41C1_047C4B90782C.png","class":"IconButton","toolTipPaddingLeft":3,"toolTipFontColor":"#606060","minHeight":1,"verticalAlign":"middle","minWidth":1,"toolTipShadowColor":"#333333","data":{"name":"IconButton1493"},"toolTipBorderRadius":1,"id":"IconButton_2C1D15CB_36CB_E4DF_41C1_047C4B90782C_mobile","tabIndex":0,"right":"10%","propagateClick":false,"toolTipShadowBlurRadius":1,"toolTip":trans('IconButton_2C1D15CB_36CB_E4DF_41C1_047C4B90782C_mobile.toolTip'),"toolTipTextShadowColor":"#000000","transparencyActive":true,"toolTipBorderColor":"#767676","toolTipFontFamily":"Arial","toolTipFontSize":6,"toolTipPaddingRight":3,"mode":"toggle","bottom":"45%","toolTipTextShadowBlurRadius":1,"width":24.5,"height":19.5,"toolTipBackgroundColor":"#F6F6F6","maxWidth":64},{"mouseControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer","aaEnabled":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_21053389_36FB_BD5A_41CB_1C0E71282DB5_mobile","arrowKeysAction":"translate","displayPlaybackBar":true,"gyroscopeEnabled":true,"viewerArea":"this.MainViewer_mobile"},{"id":"panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787_camera","enterPointingToHorizon":true,"class":"PanoramaCamera","displayOriginPosition":{"pitch":-90,"stereographicFactor":1,"hfov":165,"class":"RotationalCameraDisplayPosition","yaw":0},"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"targetStereographicFactor":0,"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","duration":3000,"targetPitch":0}],"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_3C3E5E1D_36CA_E77A_41C4_27F57A0317A3"},{"frames":[{"thumbnailUrl":"media/panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787_t.jpg","cube":{"class":"ImageResource","levels":[{"width":30720,"url":"media/panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787_0/{face}/0/{row}_{column}.jpg","rowCount":10,"height":5120,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":60},{"width":15360,"url":"media/panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787_0/{face}/1/{row}_{column}.jpg","rowCount":5,"height":2560,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":30},{"width":9216,"url":"media/panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787_0/{face}/2/{row}_{column}.jpg","rowCount":3,"height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18},{"width":6144,"url":"media/panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787_0/{face}/3/{row}_{column}.jpg","rowCount":2,"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"url":"media/panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787_0/{face}/4/{row}_{column}.jpg","rowCount":1,"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Pano_Saltillo_16k"},"thumbnailUrl":"media/panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787_t.jpg","label":trans('panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787.label'),"class":"Panorama","vfov":180,"overlays":["this.overlay_26E619E9_36D6_ACDA_41C2_1B9A2B9DF8BB","this.overlay_27AE9819_36DA_EB7B_41B1_3FBB2CB1377E","this.overlay_27CBA2D5_36D9_BCCA_419F_A830CFA6B992","this.overlay_2471546B_36DE_FBDE_4199_E146DDC429A8","this.overlay_25DF9150_36DE_BDCA_41C8_A137A56198E0","this.overlay_25F78194_36DB_9D4A_41B5_0937328034F1","this.popup_23B8BA3E_36D7_6FB6_41AB_1348298D6F71","this.popup_23E35A16_36C9_6F76_419D_32379A839820"],"hfovMax":130,"hfov":360,"id":"panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787"},{"height":"100%","progressLeft":"33%","toolTipPaddingLeft":3,"progressRight":"33%","toolTipFontColor":"#606060","minHeight":25,"playbackBarHeadShadowBlurRadius":1.5,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"minWidth":50,"playbackBarLeft":0,"toolTipShadowColor":"#333138","progressOpacity":0.7,"toolTipBorderRadius":1,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","vrThumbstickRotationStep":20,"progressBarBackgroundColorDirection":"horizontal","toolTipShadowBlurRadius":1,"data":{"name":"Main Viewer"},"toolTipTextShadowColor":"#000000","progressBarBorderColor":"#000000","toolTipBorderColor":"#767676","surfaceReticleSelectionColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarHeadBorderSize":0,"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"playbackBarProgressBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","toolTipTextShadowBlurRadius":1,"subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"progressBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","vrPointerColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarBorderSize":0,"playbackBarBottom":5,"class":"ViewerArea","progressBarBackgroundColor":["#3399FF"],"subtitlesFontFamily":"Arial","vrPointerSelectionTime":2000,"playbackBarBackgroundColor":["#FFFFFF"],"id":"MainViewer_mobile","propagateClick":false,"subtitlesFontSize":"3vmin","progressBackgroundColor":["#000000"],"progressBottom":10,"toolTipFontFamily":"Arial","playbackBarHeight":10,"subtitlesTextShadowColor":"#000000","progressBarBorderRadius":2,"progressBorderSize":0,"playbackBarHeadWidth":6,"surfaceReticleColor":"#FFFFFF","progressHeight":2,"toolTipPaddingRight":3,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"firstTransitionDuration":0,"progressBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBottom":50,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"progressBorderRadius":2,"subtitlesTop":0,"progressBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"width":"100%","playbackBarHeadShadowOpacity":0.7},{"levels":["this.imlevel_2E782C89_36F9_EB5A_4193_94B511267763","this.imlevel_2E780C8A_36F9_EB5E_41B9_7245E08B2C75","this.imlevel_2E787C8A_36F9_EB5E_41A6_AD8DC28CB384","this.imlevel_2E785C8A_36F9_EB5E_41A8_D618E7473FEA","this.imlevel_2E7BBC8A_36F9_EB5E_41C1_0A793A15D74C","this.imlevel_2E7B9C8B_36F9_EB5E_41C4_69265ECBB7F7"],"class":"ImageResource","id":"ImageResource_2E47EE44_36F9_E7CA_41C0_ACB9DFEBBADF"},{"backgroundOpacity":0,"class":"Container","scrollBarWidth":5,"minHeight":10,"minWidth":10,"data":{"name":"Container10211"},"propagateClick":false,"overflow":"scroll","id":"Container_2CDA958C_36F9_655A_41C9_2FB0EC0AD1CE_mobile","right":"1%","scrollBarColor":"#000000","bottom":"1%","scrollBarMargin":1,"height":"10%","children":["this.IconButton_21053389_36FB_BD5A_41CB_1C0E71282DB5_mobile","this.IconButton_2C1D15CB_36CB_E4DF_41C1_047C4B90782C_mobile"],"gap":5,"width":"9.325%","layout":"absolute"},{"backgroundOpacity":0,"textShadowOpacity":0.7,"class":"Label","minHeight":8,"minWidth":15,"left":"5%","data":{"name":"Label2669"},"propagateClick":false,"text":trans('Label_389D26B9_36CE_E4BA_4193_F817A0F88931_mobile.text'),"id":"Label_389D26B9_36CE_E4BA_4193_F817A0F88931_mobile","fontFamily":"Bebas Neue Bold","fontWeight":"bold","fontSize":"8vmin","textShadowColor":"#000000","bottom":"0%","fontColor":"#FFFFFF","height":"100%","textShadowBlurRadius":1.5,"width":"100%"},{"backgroundOpacity":0,"class":"Container","scrollBarWidth":5,"minHeight":10,"minWidth":10,"left":"0%","data":{"name":"TextContainer"},"propagateClick":false,"overflow":"scroll","id":"Container_3AA26786_36C9_6556_41C8_04C2B4B74010_mobile","scrollBarColor":"#000000","top":"0%","scrollBarMargin":1,"height":"9.424%","children":["this.Label_389D26B9_36CE_E4BA_4193_F817A0F88931_mobile"],"gap":5,"width":"33.98%","layout":"absolute"},{"pitch":-35.62,"yaw":-51.57,"popupMaxWidth":"95%","image":"this.ImageResource_2E445E43_36F9_E7CE_41A4_F76344C5AC6A","class":"PopupPanoramaOverlay","showEasing":"cubic_in","hideEasing":"cubic_out","showDuration":500,"hideDuration":500,"popupMaxHeight":"95%","hfov":14.97,"popupDistance":100,"id":"popup_23E35A16_36C9_6F76_419D_32379A839820"},{"id":"mainPlayList","items":[{"camera":"this.panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787_camera","media":"this.panorama_3DC9D855_36CA_ABCA_41C2_7A7837675787","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"backgroundOpacity":0,"maxHeight":27.5,"horizontalAlign":"center","iconURL":"skin/IconButton_21053389_36FB_BD5A_41CB_1C0E71282DB5.png","class":"IconButton","minHeight":1,"verticalAlign":"middle","minWidth":1,"left":"9%","id":"IconButton_21053389_36FB_BD5A_41CB_1C0E71282DB5_mobile","data":{"name":"IconButton8351"},"tabIndex":0,"propagateClick":false,"bottom":"1%","width":28,"height":27.5,"maxWidth":28},{"pitch":-39.16,"yaw":47.23,"popupMaxWidth":"95%","image":"this.ImageResource_2E47EE44_36F9_E7CA_41C0_ACB9DFEBBADF","class":"PopupPanoramaOverlay","showEasing":"cubic_in","hideEasing":"cubic_out","showDuration":500,"hideDuration":500,"popupMaxHeight":"95%","hfov":15.04,"popupDistance":100,"id":"popup_23B8BA3E_36D7_6FB6_41AB_1348298D6F71"},{"levels":["this.imlevel_2E784CA0_36F9_EB4A_41C8_FBA3E6156B66","this.imlevel_2E7BBCA0_36F9_EB4A_4186_1C2B2B5B12EE","this.imlevel_2E7BACA0_36F9_EB4A_41C5_34C9752CEB02","this.imlevel_2E7B9CA1_36F9_EB4A_4162_F40CCC077F14","this.imlevel_2E7BFCA1_36F9_EB4A_417B_3D339DE6E9F3","this.imlevel_2E7BECA1_36F9_EB4A_41C3_50891B4E2689"],"class":"ImageResource","id":"ImageResource_2E445E43_36F9_E7CE_41A4_F76344C5AC6A"},{"backgroundOpacity":0.55,"class":"UIComponent","minHeight":0,"minWidth":0,"id":"veilPopupPanorama","left":0,"backgroundColor":["#000000"],"data":{"name":"UIComponent15628"},"backgroundColorRatios":[0],"propagateClick":false,"right":0,"top":0,"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":350},"bottom":0,"visible":false},{"class":"ZoomImage","minHeight":0,"minWidth":0,"id":"zoomImagePopupPanorama","left":0,"backgroundColor":[],"data":{"name":"ZoomImage15629"},"backgroundColorRatios":[],"propagateClick":false,"right":0,"top":0,"bottom":0,"scaleMode":"custom","visible":false},{"class":"CloseButton","minHeight":0,"minWidth":0,"data":{"name":"CloseButton15630"},"id":"closeButtonPopupPanorama","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"tabIndex":0,"backgroundColorRatios":[0,0.09803921568627451,1],"propagateClick":false,"right":10,"fontFamily":"Arial","iconHeight":"100%","fontSize":"1.29vmin","iconLineWidth":2,"top":10,"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":350},"iconColor":"#000000","fontColor":"#FFFFFF","pressedIconColor":"#888888","borderColor":"#000000","iconWidth":"100%","visible":false,"rollOverIconColor":"#666666","layout":"horizontal"},{"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_3C3E5E1D_36CA_E77A_41C4_27F57A0317A3","class":"PanoramaCameraSequence"},{"data":{"label":"Texto"},"items":["this.HotspotPanoramaOverlayTextImage_26CA89D9_36D6_ACFB_41A5_5C281343F1D5"],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_265D7A48_36D6_AFDA_41C4_E9A2875C3179"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"id":"overlay_26E619E9_36D6_ACDA_41C2_1B9A2B9DF8BB"},{"data":{"label":"Arrow Black Down"},"items":[{"pitch":-22.54,"yaw":75.93,"data":{"label":"Arrow Black Down"},"distance":50,"image":"this.res_24CACD9D_36D9_E57B_41C3_166797EEF88C","class":"HotspotPanoramaOverlayImage","vfov":5.48,"scaleMode":"fit_inside","hfov":7.31}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_279568B3_36DA_EB4E_41C3_FE81413CA7BF"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"id":"overlay_27AE9819_36DA_EB7B_41B1_3FBB2CB1377E"},{"data":{"label":"Texto"},"items":["this.HotspotPanoramaOverlayTextImage_27C762D3_36D9_BCCE_4199_EAA31A6B611D"],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_278CB2E7_36D9_BCD7_41B9_6E73FF962CA9"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"id":"overlay_27CBA2D5_36D9_BCCA_419F_A830CFA6B992"},{"data":{"label":"Arrow Black Down"},"items":[{"pitch":-47.6,"roll":0.33,"yaw":-90.8,"data":{"label":"Arrow Black Down"},"distance":50,"image":"this.res_24CACD9D_36D9_E57B_41C3_166797EEF88C","class":"HotspotPanoramaOverlayImage","vfov":4.83,"scaleMode":"fit_inside","hfov":6.38}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_246E3487_36DE_FB56_41A6_6DF95AD46F06"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"id":"overlay_2471546B_36DE_FBDE_4199_E146DDC429A8"},{"data":{"label":"Texto"},"items":["this.HotspotPanoramaOverlayTextImage_25DF414F_36DE_BDD6_41A9_6CC03F49518C"],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_25D83156_36DE_BDF6_41C2_1AD9D9E3F814"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"id":"overlay_25DF9150_36DE_BDCA_41C8_A137A56198E0"},{"data":{"label":"Texto"},"items":["this.HotspotPanoramaOverlayTextImage_25CB2193_36DB_9D4E_419D_9F92C28FF63C"],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_25F52195_36DB_9D4A_41BA_C67E8CFC185B"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"id":"overlay_25F78194_36DB_9D4A_41B5_0937328034F1"},{"width":16383,"url":trans('imlevel_2E782C89_36F9_EB5A_4193_94B511267763.url'),"id":"imlevel_2E782C89_36F9_EB5A_4193_94B511267763","height":12079,"class":"ImageResourceLevel"},{"width":8191,"url":trans('imlevel_2E780C8A_36F9_EB5E_41B9_7245E08B2C75.url'),"id":"imlevel_2E780C8A_36F9_EB5E_41B9_7245E08B2C75","height":6039,"class":"ImageResourceLevel"},{"width":4095,"url":trans('imlevel_2E787C8A_36F9_EB5E_41A6_AD8DC28CB384.url'),"id":"imlevel_2E787C8A_36F9_EB5E_41A6_AD8DC28CB384","height":3019,"class":"ImageResourceLevel"},{"width":2047,"url":trans('imlevel_2E785C8A_36F9_EB5E_41A8_D618E7473FEA.url'),"id":"imlevel_2E785C8A_36F9_EB5E_41A8_D618E7473FEA","height":1509,"class":"ImageResourceLevel"},{"width":1023,"url":trans('imlevel_2E7BBC8A_36F9_EB5E_41C1_0A793A15D74C.url'),"id":"imlevel_2E7BBC8A_36F9_EB5E_41C1_0A793A15D74C","height":754,"class":"ImageResourceLevel"},{"width":511,"url":trans('imlevel_2E7B9C8B_36F9_EB5E_41C4_69265ECBB7F7.url'),"id":"imlevel_2E7B9C8B_36F9_EB5E_41C4_69265ECBB7F7","height":377,"class":"ImageResourceLevel"},{"width":16384,"url":trans('imlevel_2E784CA0_36F9_EB4A_41C8_FBA3E6156B66.url'),"id":"imlevel_2E784CA0_36F9_EB4A_41C8_FBA3E6156B66","height":12245,"class":"ImageResourceLevel"},{"width":8192,"url":trans('imlevel_2E7BBCA0_36F9_EB4A_4186_1C2B2B5B12EE.url'),"id":"imlevel_2E7BBCA0_36F9_EB4A_4186_1C2B2B5B12EE","height":6122,"class":"ImageResourceLevel"},{"width":4096,"url":trans('imlevel_2E7BACA0_36F9_EB4A_41C5_34C9752CEB02.url'),"id":"imlevel_2E7BACA0_36F9_EB4A_41C5_34C9752CEB02","height":3061,"class":"ImageResourceLevel"},{"width":2048,"url":trans('imlevel_2E7B9CA1_36F9_EB4A_4162_F40CCC077F14.url'),"id":"imlevel_2E7B9CA1_36F9_EB4A_4162_F40CCC077F14","height":1530,"class":"ImageResourceLevel"},{"width":1024,"url":trans('imlevel_2E7BFCA1_36F9_EB4A_417B_3D339DE6E9F3.url'),"id":"imlevel_2E7BFCA1_36F9_EB4A_417B_3D339DE6E9F3","height":765,"class":"ImageResourceLevel"},{"width":512,"url":trans('imlevel_2E7BECA1_36F9_EB4A_41C3_50891B4E2689.url'),"id":"imlevel_2E7BECA1_36F9_EB4A_41C3_50891B4E2689","height":382,"class":"ImageResourceLevel"},{"id":"HotspotPanoramaOverlayTextImage_26CA89D9_36D6_ACFB_41A5_5C281343F1D5","distance":50,"image":{"levels":["this.imlevel_24FD8EF6_36D9_E4B6_4185_4D5252853666"],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","vfov":5.97,"pitch":-17.86,"yaw":76.03,"data":{"label":"Texto"},"hfov":20.87},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_265D7A48_36D6_AFDA_41C4_E9A2875C3179"},{"levels":[{"width":118,"url":"media/res_24CACD9D_36D9_E57B_41C3_166797EEF88C_0.png","height":118,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_24CACD9D_36D9_E57B_41C3_166797EEF88C"},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_279568B3_36DA_EB4E_41C3_FE81413CA7BF"},{"id":"HotspotPanoramaOverlayTextImage_27C762D3_36D9_BCCE_4199_EAA31A6B611D","distance":50,"image":{"levels":["this.imlevel_25D0504E_36D9_FBD6_4189_180E3115BF12"],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","vfov":7.55,"pitch":-43.3,"yaw":-91.21,"data":{"label":"Texto"},"hfov":21.61},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_278CB2E7_36D9_BCD7_41B9_6E73FF962CA9"},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_246E3487_36DE_FB56_41A6_6DF95AD46F06"},{"id":"HotspotPanoramaOverlayTextImage_25DF414F_36DE_BDD6_41A9_6CC03F49518C","distance":50,"image":{"levels":["this.imlevel_252881BD_36D9_FCBA_41C9_9D8A14D4B3C5"],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","vfov":6.88,"roll":-40.28,"pitch":-35.62,"yaw":-51.57,"data":{"label":"Texto"},"hfov":14.97},{"toolTip":trans('HotspotPanoramaOverlayArea_25D83156_36DE_BDF6_41C2_1AD9D9E3F814.toolTip'),"click":"this.showPopupPanoramaOverlay(this.popup_23E35A16_36C9_6F76_419D_32379A839820,{'backgroundOpacity':1,'paddingBottom':5,'iconWidth':20,'paddingRight':5,'pressedIconHeight':20,'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':2,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundOpacity':1,'rollOverBackgroundOpacity':1,'pressedBorderColor':'#000000','rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedIconColor':'#888888','pressedBorderSize':0,'pressedIconLineWidth':2,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':2,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderRadius':0,'iconHeight':20},this.ImageResource_2E445E43_36F9_E7CE_41A4_F76344C5AC6A,null,null,null,false)","id":"HotspotPanoramaOverlayArea_25D83156_36DE_BDF6_41C2_1AD9D9E3F814","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayTextImage_25CB2193_36DB_9D4E_419D_9F92C28FF63C","distance":50,"image":{"levels":["this.imlevel_22D50292_36D9_FF49_41C5_77DD5327F398"],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","vfov":6.9,"roll":38.1,"pitch":-39.16,"yaw":47.23,"data":{"label":"Texto"},"hfov":15.04},{"toolTip":trans('HotspotPanoramaOverlayArea_25F52195_36DB_9D4A_41BA_C67E8CFC185B.toolTip'),"click":"this.showPopupPanoramaOverlay(this.popup_23B8BA3E_36D7_6FB6_41AB_1348298D6F71,{'backgroundOpacity':1,'paddingBottom':5,'iconWidth':20,'paddingRight':5,'pressedIconHeight':20,'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','borderSize':0,'iconLineWidth':2,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundOpacity':1,'rollOverBackgroundOpacity':1,'pressedBorderColor':'#000000','rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedIconColor':'#888888','pressedBorderSize':0,'pressedIconLineWidth':2,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':2,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderRadius':0,'iconHeight':20},this.ImageResource_2E47EE44_36F9_E7CA_41C0_ACB9DFEBBADF,null,null,null,false)","id":"HotspotPanoramaOverlayArea_25F52195_36DB_9D4A_41BA_C67E8CFC185B","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea"},{"width":1854.88,"url":trans('imlevel_24FD8EF6_36D9_E4B6_4185_4D5252853666.url'),"id":"imlevel_24FD8EF6_36D9_E4B6_4185_4D5252853666","height":524.91,"class":"ImageResourceLevel"},{"width":1921.32,"url":trans('imlevel_25D0504E_36D9_FBD6_4189_180E3115BF12.url'),"id":"imlevel_25D0504E_36D9_FBD6_4189_180E3115BF12","height":664.07,"class":"ImageResourceLevel"},{"width":1330.26,"url":trans('imlevel_252881BD_36D9_FCBA_41C9_9D8A14D4B3C5.url'),"id":"imlevel_252881BD_36D9_FCBA_41C9_9D8A14D4B3C5","height":608.39,"class":"ImageResourceLevel"},{"width":1337.13,"url":trans('imlevel_22D50292_36D9_FF49_41C5_77DD5327F398.url'),"id":"imlevel_22D50292_36D9_FF49_41C5_77DD5327F398","height":610.14,"class":"ImageResourceLevel"}],"scrollBarColor":"#000000","watermark":false,"buttonToggleFullscreen":"this.IconButton_2C1D15CB_36CB_E4DF_41C1_047C4B90782C_mobile","scrollBarMargin":2,"scripts":{"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizShowScore":TDV.Tour.Script.quizShowScore,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"clone":TDV.Tour.Script.clone,"openLink":TDV.Tour.Script.openLink,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getOverlays":TDV.Tour.Script.getOverlays,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPixels":TDV.Tour.Script.getPixels,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"enableVR":TDV.Tour.Script.enableVR,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"historyGoBack":TDV.Tour.Script.historyGoBack,"toggleVR":TDV.Tour.Script.toggleVR,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"init":TDV.Tour.Script.init,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"existsKey":TDV.Tour.Script.existsKey,"setValue":TDV.Tour.Script.setValue,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"disableVR":TDV.Tour.Script.disableVR,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"cloneBindings":TDV.Tour.Script.cloneBindings,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"isPanorama":TDV.Tour.Script.isPanorama,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"downloadFile":TDV.Tour.Script.downloadFile,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeJS":TDV.Tour.Script.executeJS,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"textToSpeech":TDV.Tour.Script.textToSpeech,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"mixObject":TDV.Tour.Script.mixObject,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getKey":TDV.Tour.Script.getKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"translate":TDV.Tour.Script.translate,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"createTween":TDV.Tour.Script.createTween,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setLocale":TDV.Tour.Script.setLocale,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight},"height":"100%","width":"100%","layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.16.js.map
})();
//Generated with v2024.0.16, Fri Sep 27 2024