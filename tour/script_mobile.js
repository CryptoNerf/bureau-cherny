(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
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
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
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
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
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
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer_mobile","this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile","this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile","this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile","this.Image_DB640E69_D4F8_1984_41DB_DC59D650F7A1"],"buttonToggleFullscreen":["this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile"],"watermark":false,"id":"rootPlayer","scripts":{"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"clone":TDV.Tour.Script.clone,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"openLink":TDV.Tour.Script.openLink,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setValue":TDV.Tour.Script.setValue,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"mixObject":TDV.Tour.Script.mixObject,"quizFinish":TDV.Tour.Script.quizFinish,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getKey":TDV.Tour.Script.getKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPixels":TDV.Tour.Script.getPixels,"executeJS":TDV.Tour.Script.executeJS,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"shareSocial":TDV.Tour.Script.shareSocial,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"showWindowBase":TDV.Tour.Script.showWindowBase,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"registerKey":TDV.Tour.Script.registerKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeech":TDV.Tour.Script.textToSpeech,"init":TDV.Tour.Script.init,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showWindow":TDV.Tour.Script.showWindow,"initAnalytics":TDV.Tour.Script.initAnalytics,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"toggleVR":TDV.Tour.Script.toggleVR,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"disableVR":TDV.Tour.Script.disableVR,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"downloadFile":TDV.Tour.Script.downloadFile,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"createTween":TDV.Tour.Script.createTween,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"unloadViewer":TDV.Tour.Script.unloadViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"enableVR":TDV.Tour.Script.enableVR,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getComponentByName":TDV.Tour.Script.getComponentByName,"translate":TDV.Tour.Script.translate,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizStart":TDV.Tour.Script.quizStart,"setLocale":TDV.Tour.Script.setLocale,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"existsKey":TDV.Tour.Script.existsKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay},"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"data":{"locales":{"ru":"locale/ru.txt"},"history":{},"displayTooltipInTouchScreens":true,"defaultLocale":"ru","name":"Player486","initialScale":0.5,"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false},"surfaceSelectionHotspotMode":"circleEnabled"},"xrPanelsEnabled":true,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","backgroundColorRatios":[0],"class":"Player","gap":10,"propagateClick":false,"layout":"absolute","minHeight":20,"minWidth":20,"scrollBarColor":"#000000","height":"100%","vrPolyfillScale":0.5,"hash": "629abf00f0888e1df3e313906a674703b30bb44e51cbd40ca4133e4436514e41", "definitions": [{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile","tabIndex":0,"data":{"name":"Next"},"class":"IconButton","iconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":46,"transparencyActive":true,"width":46,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)"},{"id":"mainPlayList","items":[{"camera":"this.panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA_camera","media":"this.panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer"}],"class":"PlayList"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","tabIndex":0,"data":{"name":"Right"},"class":"IconButton","iconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":23,"transparencyActive":true,"pressedIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_pressed.png","width":23,"rollOverIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_rollover.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile","tabIndex":0,"data":{"name":"Collapse"},"class":"IconButton","iconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":46,"transparencyActive":true,"width":46,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile); invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false)}.bind(this); visibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile); visibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile); visibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile)"},{"data":{"label":"P1000361_12"},"audio":"this.audiores_E6D8C196_ED1D_30CA_4177_391D9CEB7795","id":"audio_E00A5970_ED1D_5045_41E8_D03DB38CA125","autoplay":true,"class":"MediaAudio"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile","overflow":"scroll","left":"25%","scrollBarMargin":1,"layout":"horizontal","right":"25%","scrollBarWidth":5,"data":{"name":"Center"},"class":"Container","propagateClick":false,"verticalAlign":"middle","minHeight":1,"minWidth":1,"top":"0%","scrollBarColor":"#000000","height":"100%","children":["this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile"],"visible":false},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","tabIndex":0,"data":{"name":"Left"},"class":"IconButton","iconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":23,"transparencyActive":true,"pressedIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_pressed.png","width":23,"rollOverIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_rollover.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","tabIndex":0,"left":"40%","data":{"name":"-Expand"},"right":"40%","maxHeight":46,"maxWidth":46,"class":"IconButton","iconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile.png","verticalAlign":"middle","minHeight":1,"minWidth":1,"propagateClick":false,"bottom":0,"height":46,"transparencyActive":true,"visible":false,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false)}.bind(this); invisibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile); invisibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile); invisibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile)"},{"id":"MainViewer_mobilePanoramaPlayer","viewerArea":"this.MainViewer_mobile","buttonZoomOut":["this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile"],"class":"PanoramaPlayer","buttonCardboardView":["this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile"],"buttonMoveLeft":["this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile"],"displayPlaybackBar":true,"buttonMoveRight":["this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile"],"arrowKeysAction":"translate","buttonZoomIn":["this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile"],"keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","buttonMoveUp":["this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile"],"aaEnabled":true,"buttonMoveDown":["this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile"]},{"thumbnailUrl":"media/panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA_t.webp","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":9,"height":4608,"url":"media/panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA_0/{face}/0/{row}_{column}.webp","colCount":54,"tags":"ondemand","class":"TiledImageResourceLevel","width":27648},{"rowCount":5,"height":2560,"url":"media/panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA_0/{face}/1/{row}_{column}.webp","colCount":30,"tags":"ondemand","class":"TiledImageResourceLevel","width":15360},{"rowCount":3,"height":1536,"url":"media/panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA_0/{face}/2/{row}_{column}.webp","colCount":18,"tags":"ondemand","class":"TiledImageResourceLevel","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA_0/{face}/3/{row}_{column}.webp","colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA_0/{face}/4/{row}_{column}.webp","colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}]}}],"hfovMax":130,"hfov":360,"vfov":180,"label":trans('panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA.label'),"id":"panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA","data":{"label":"3P9A0004 \u041f\u0430\u043d\u043e\u0440\u0430\u043c\u0430"}},{"backgroundOpacity":0,"horizontalAlign":"center","toolTipBorderColor":"#767676","toolTipFontColor":"#606060","toolTipPaddingRight":3,"toolTipBackgroundColor":"#F6F6F6","id":"IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","tabIndex":0,"toolTipShadowBlurRadius":1,"data":{"name":"fullscreen"},"maxHeight":46,"toolTipPaddingLeft":3,"toolTipBorderRadius":1,"maxWidth":46,"class":"IconButton","iconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.png","verticalAlign":"middle","minHeight":1,"toolTipShadowColor":"#333333","propagateClick":false,"toolTipTextShadowBlurRadius":1,"minWidth":1,"toolTipFontFamily":"Arial","height":46,"transparencyActive":true,"toolTipTextShadowColor":"#000000","toolTipFontSize":6,"width":46,"toolTip":trans('IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.toolTip'),"mode":"toggle"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","tabIndex":0,"data":{"name":"Up"},"class":"IconButton","iconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":23,"transparencyActive":true,"pressedIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_pressed.png","width":23,"rollOverIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_rollover.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile","tabIndex":0,"data":{"name":"next"},"right":"2%","maxHeight":46,"maxWidth":46,"class":"IconButton","iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile.png","verticalAlign":"middle","minHeight":1,"propagateClick":false,"top":"35%","minWidth":1,"bottom":"35%","width":46,"transparencyActive":true,"visible":false,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)"},{"id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist","items":[{"camera":"this.panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA_camera","media":"this.panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer"}],"class":"PlayList"},{"id":"effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7","class":"FadeInEffect","duration":200},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","tabIndex":0,"data":{"name":"Zoom In"},"class":"IconButton","iconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":23,"transparencyActive":true,"pressedIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_pressed.png","width":23,"rollOverIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_rollover.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","tabIndex":0,"left":"2%","data":{"name":"previous"},"maxHeight":46,"maxWidth":46,"class":"IconButton","iconURL":"skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile.png","verticalAlign":"middle","minHeight":1,"propagateClick":false,"top":"35%","minWidth":1,"bottom":"35%","width":46,"transparencyActive":true,"visible":false,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)"},{"id":"effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050","class":"FadeInEffect","duration":100},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile","tabIndex":0,"data":{"name":"Zoom Out"},"class":"IconButton","iconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":23,"transparencyActive":true,"pressedIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_pressed.png","width":23,"rollOverIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_rollover.png"},{"id":"effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5","class":"FadeOutEffect","duration":200},{"backgroundOpacity":0,"horizontalAlign":"right","paddingRight":5,"id":"Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile","overflow":"scroll","scrollBarMargin":1,"layout":"horizontal","data":{"name":"Right"},"right":"0%","scrollBarWidth":5,"class":"Container","propagateClick":false,"verticalAlign":"middle","minHeight":1,"minWidth":1,"top":"0%","scrollBarColor":"#000000","height":"100%","children":["this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile","this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile"],"width":"50%"},{"id":"effect_0A30489F_1C86_6738_41A8_2722230A2E2F","class":"FadeOutEffect","duration":100},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Image_DB640E69_D4F8_1984_41DB_DC59D650F7A1","left":"0%","data":{"name":"Image"},"url":trans('Image_DB640E69_D4F8_1984_41DB_DC59D650F7A1.url'),"class":"Image","verticalAlign":"middle","propagateClick":false,"minHeight":1,"top":"1.14%","minWidth":1,"height":"12.506%","scaleMode":"fit_inside","width":"27.653%"},{"playbackBarHeadWidth":6,"width":"100%","toolTipBorderColor":"#767676","subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderRadius":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarBorderSize":0,"progressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressRight":0,"subtitlesTop":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":1.5,"subtitlesFontColor":"#FFFFFF","progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","playbackBarLeft":0,"subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"id":"MainViewer_mobile","playbackBarHeadShadow":true,"subtitlesBorderColor":"#FFFFFF","progressBackgroundColor":["#FFFFFF"],"vrThumbstickRotationStep":20,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":0,"playbackBarBottom":5,"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingLeft":6,"toolTipPaddingTop":4,"progressBorderSize":0,"progressBarBorderSize":0,"class":"ViewerArea","progressBarBorderRadius":0,"firstTransitionDuration":0,"propagateClick":false,"playbackBarHeight":10,"toolTipShadowColor":"#333333","progressHeight":10,"minHeight":25,"playbackBarProgressBorderSize":0,"minWidth":50,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"toolTipFontFamily":"Arial","progressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipFontSize":"2vmin","toolTipTextShadowColor":"#000000","height":"100%","progressLeft":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontFamily":"Arial"},{"backgroundOpacity":0.9,"itemThumbnailWidth":120,"toolTipBorderColor":"#767676","toolTipFontColor":"#606060","selectedItemLabelFontColor":"#FFFFFF","rollOverItemLabelFontWeight":"normal","toolTipBackgroundColor":"#F6F6F6","left":"2%","selectedItemLabelFontWeight":"bold","paddingTop":8.5,"itemThumbnailOpacity":1,"right":"2%","itemThumbnailScaleMode":"fit_outside","itemLabelFontFamily":"Arial","data":{"name":"THUMBNAIL LIST"},"itemLabelTextDecoration":"none","selectedItemBackgroundColor":["#534741"],"backgroundColorRatios":[0],"itemBackgroundColorDirection":"vertical","gap":5,"selectedItemBackgroundColorRatios":[0.0392156862745098],"itemThumbnailBorderSize":0,"itemLabelFontWeight":"normal","itemLabelFontColor":"#999999","playList":"this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist","itemBackgroundOpacity":0,"selectedItemBackgroundOpacity":0.9,"itemLabelGap":4,"itemPaddingBottom":3,"selectedItemBorderColor":"#FFFFFF","itemPaddingTop":3,"itemThumbnailShadowBlurRadius":8,"itemThumbnailShadowOpacity":0.54,"paddingLeft":7,"itemPaddingLeft":3,"paddingRight":7,"itemLabelFontStyle":"normal","toolTipPaddingRight":3,"rollOverItemLabelFontColor":"#FFFFFF","id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile","itemPaddingRight":3,"backgroundColor":["#534741"],"toolTipShadowBlurRadius":1,"itemBorderRadius":0,"scrollBarMargin":0,"itemLabelFontSize":"9px","scrollBarWidth":2,"selectedItemBorderSize":1.5,"itemThumbnailBorderRadius":0,"toolTipPaddingLeft":3,"itemThumbnailHeight":70,"tabIndex":0,"toolTipBorderRadius":1,"layout":"horizontal","class":"ThumbnailList","propagateClick":false,"toolTipShadowColor":"#333333","minWidth":10,"minHeight":10,"toolTipTextShadowBlurRadius":1,"toolTipFontFamily":"Arial","bottom":60,"scrollBarOpacity":0,"itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","height":101,"toolTipTextShadowColor":"#000000","itemBackgroundColor":[],"itemThumbnailShadow":false,"itemBackgroundColorRatios":[],"visible":false,"toolTipFontSize":6,"rollOverItemBackgroundOpacity":0,"itemThumbnailShadowSpread":1},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile","tabIndex":0,"data":{"name":"VR"},"maxHeight":46,"maxWidth":46,"class":"IconButton","iconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile.png","verticalAlign":"middle","minHeight":1,"propagateClick":false,"minWidth":1,"height":46,"transparencyActive":true,"width":46},{"id":"effect_3A451B34_1C82_9908_41AD_37B1C5A316C2","class":"FadeOutEffect","duration":100},{"initialSequence":"this.sequence_E2067D67_E959_09CF_41D8_C4DDA0A5337D","class":"PanoramaCamera","id":"panorama_E3C24E02_ED2D_33C5_41DE_382BEC35B9AA_camera","initialPosition":{"pitch":-0.22,"class":"PanoramaCameraPosition","yaw":165.73},"enterPointingToHorizon":true},{"backgroundOpacity":0,"id":"Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile","overflow":"scroll","left":"0%","scrollBarMargin":1,"layout":"horizontal","scrollBarWidth":5,"data":{"name":"Left"},"class":"Container","propagateClick":false,"verticalAlign":"middle","minHeight":1,"top":"0%","scrollBarColor":"#000000","minWidth":1,"height":"100%","children":["this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile","this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile","this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile"],"width":"50%","paddingLeft":5},{"backgroundOpacity":0.2,"id":"Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile","overflow":"scroll","backgroundColor":["#000000"],"scrollBarMargin":1,"left":"2%","layout":"absolute","right":"2%","scrollBarWidth":5,"data":{"name":"SETTINGS"},"backgroundColorRatios":[0],"class":"Container","gap":5,"propagateClick":false,"minWidth":1,"minHeight":1,"bottom":10,"scrollBarColor":"#000000","height":50,"children":["this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile","this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile","this.Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile"]},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile","tabIndex":0,"data":{"name":"Thumblist"},"class":"IconButton","iconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":46,"transparencyActive":true,"width":46,"mode":"toggle","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false)}.bind(this); if(this.isComponentVisible(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile)){ invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile) } else { visibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile) }"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","tabIndex":0,"data":{"name":"Down"},"class":"IconButton","iconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":23,"transparencyActive":true,"pressedIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_pressed.png","width":23,"rollOverIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_rollover.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile","tabIndex":0,"data":{"name":"Previous"},"class":"IconButton","iconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":46,"transparencyActive":true,"width":46,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)"},{"url":trans('audiores_E6D8C196_ED1D_30CA_4177_391D9CEB7795.url'),"class":"AudioResource","id":"audiores_E6D8C196_ED1D_30CA_4177_391D9CEB7795"},{"class":"PanoramaCameraSequence","id":"sequence_E2067D67_E959_09CF_41D8_C4DDA0A5337D","movements":[{"yawSpeed":2.66,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":2.66,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":2.66,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}]}],"defaultMenu":["fullscreen","mute","rotation"],"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Tue Sep 29 2026