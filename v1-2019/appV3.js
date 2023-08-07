var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var SUBMIT_FUNCTIONS = {};

////////////////////////////////////////////////////// RECAPTCHA

var PENDING_CALLBACK = null;

function displayCaptcha(callback) {

    $('.canvas-loading').show();
    $('.canvas-actions .canvas-actions-loader').show();

    PENDING_CALLBACK = callback;

    grecaptcha.reset();
    grecaptcha.execute();
}

function submitValidCaptcha(response) {

    $('.canvas-loading').hide();
    $('.canvas-actions .canvas-actions-loader').hide();

    //we will have to change the way we handle captcha protected functions on server side. (Like keeping the last captcha challenge success in session or something)
    SUBMIT_FUNCTIONS[PENDING_CALLBACK](response);

}


var LOCKED_LAST_FETCH = 0;

$(function () {


    ////////////////////////////////////////////////////// CREATE CANVAS

    var CAN = document.createElement("canvas");

    CAN.width = CONFIG.canvas.width * CONFIG.canvas.ratio;
    CAN.height = CONFIG.canvas.height * CONFIG.canvas.ratio;

    CAN.style.width = CONFIG.canvas.width + "px";
    CAN.style.height = CONFIG.canvas.height + "px";

    CAN.setAttribute('id', 'canvas-' + CONFIG.canvas.id);
    CAN.setAttribute('class', 'noselect');

    var CTX = CAN.getContext("2d");

    CTX.fillStyle = "#ffffff";
    CTX.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);

    var CANVAS = $(CAN);


    if (CONFIG.user.cursor.visible) {

        CURSOR.show();
    }
    else {
        CURSOR.hide();
    }

    if (CONFIG.user.placeHolder.visible) {

        PLACEHOLDER.show();
    }
    else {
        PLACEHOLDER.hide();
    }

    if (CONFIG.user.coords.visible) {

        COORDS.show();
    }
    else {
        COORDS.hide();
    }


    ////////////////////////////////////////////////////// GET CANVAS DATA

    var CANLOCKED = document.createElement("canvas");
    CANLOCKED.width = CONFIG.canvas.width * CONFIG.canvas.ratio;
    CANLOCKED.height = CONFIG.canvas.height * CONFIG.canvas.ratio;
    CANLOCKED.style.width = CONFIG.canvas.width + "px";
    CANLOCKED.style.height = CONFIG.canvas.height + "px";
    CANLOCKED.setAttribute('class', 'noselect canvas-locked');
    var CTXLOCKED = CANLOCKED.getContext("2d");

    var CANREFRESH = document.createElement("canvas");
    CANREFRESH.width = CONFIG.canvas.width * CONFIG.canvas.ratio;
    CANREFRESH.height = CONFIG.canvas.height * CONFIG.canvas.ratio;
    CANREFRESH.style.width = CONFIG.canvas.width + "px";
    CANREFRESH.style.height = CONFIG.canvas.height + "px";
    CANREFRESH.setAttribute('class', 'noselect canvas-locked');
    var CTXREFRESH = CANREFRESH.getContext("2d");


    var mainImg = new Image();
    var lockedImg = new Image();

    var url = '/back/canvasV3.php?b=' + CONFIG.canvas.id;
    $.ajax({

        url: url,
        type: 'GET',
        cache: false,
        dataType: 'json',

        success: function (response) {

            if (response.success) {

                mainImg.onload = function () {

                    CTX.drawImage(mainImg, 0, 0);

                    lockedImg.onload = function () {

                        CTXLOCKED.clearRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
                        CTXLOCKED.drawImage(lockedImg, 0, 0);
                        console.log('cleared');

                        if (CONFIG.canvas.isLoaded) {

                            //cause changing the source of the image will retrigger this function..
                            return;
                        }
                        else {

                            drawPixels(response.data.pixels);

                            CANVAS_MOVE.append(CANVAS);

                            CONFIG.canvas.x = CONFIG.canvas.width / 2 - ((CONFIG.canvas.width / CONFIG.canvas.ratio) / 2);
                            CONFIG.canvas.y = CONFIG.canvas.height / 2 - ((CONFIG.canvas.height / CONFIG.canvas.ratio) / 2);

                            updateCanvasScalePosition();


                            selectPaletteColor(randomIntFromInterval(0, (CONFIG.palette.length - 1)));

                            CONFIG.canvas.isLoaded = true;

                            $('.canvas-loading').hide();
                            $('.canvas-actions .canvas-actions-loader').hide();

                            if (CONFIG.canvas.id === 1 || CONFIG.canvas.id === 2 || CONFIG.canvas.id === 666) {
                                LOCKED_LAST_FETCH = parseInt(response.data.lockedLastFetch);
                            }

                            setInterval(function () {
                                getCanvasLastData();
                            }, CONFIG.canvas.updateLoop);

                        }
                    }

                    var canvasIdp = CONFIG.canvas.id;
                    if (CONFIG.canvas.id !== 1 && CONFIG.canvas.id !== 2 && CONFIG.canvas.id !== 666) {
                        canvasIdp = 0;
                    }

                    lockedImg.src = "canvas/" + canvasIdp + "p.png?t=" + new Date().getTime();

                }
                mainImg.src = "canvas/" + CONFIG.canvas.id + ".png?t=" + new Date().getTime();
            }
        },

        complete: function () {
        },

        error: function (e) {
        }
    });


    var lastRefresh = 0;
    var isRefreshing = false;

    function getCanvasLastData() {

        if (!isRefreshing && lastRefresh <= (time() - CONFIG.canvas.updateCooldown)) {

            lastRefresh = time();
            isRefreshing = true;

            var params = {
                b: CONFIG.canvas.id,
                l: LOCKED_LAST_FETCH,
            }

            $.ajax({

                url: '/back/canvasRefreshV3.php',
                type: 'GET',
                cache: false,
                data: params,
                dataType: 'json',
                success: function (response) {

                    isRefreshing = false;

                    if (response.success) {

                        if (CONFIG.canvas.id === 1 || CONFIG.canvas.id === 2 || CONFIG.canvas.id === 666) {

                            if (parseInt(response.data.lockedLastFetch) > LOCKED_LAST_FETCH) {

                                LOCKED_LAST_FETCH = parseInt(response.data.lockedLastFetch);
                                lockedImg.src = "canvas/" + CONFIG.canvas.id + "p.png?t=" + new Date().getTime();

                            }
                        }

                        drawPixels(response.data.pixels);
                    }
                },
                error: function (e) {
                    isRefreshing = false;
                }
            });
        }
    }


    function drawPixels(data) {

        for (var m in data) {

            var px = data[m];

            if (px.x < CONFIG.canvas.width && px.y < CONFIG.canvas.height && px.y >= 0 && px.x >= 0 && CONFIG.palette[px.c] != undefined) {

                if (!pixelLocked(px.x, px.y)) {

                    CTX.fillStyle = CONFIG.palette[px.c];
                    CTX.fillRect(px.x, px.y, 1, 1);

                    CTXREFRESH.fillStyle = CONFIG.palette[px.c];
                    CTXREFRESH.fillRect(px.x, px.y, 1, 1);
                }
            }
        }
    }

    function pixelLocked(x, y) {

        //please know that i don't register pixels placed on locked positions.
        //removing this check will achieve nothing for you except increase my server load, be nice :)

        var p = CTXLOCKED.getImageData(x, y, 1, 1).data;
        // var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

        if (p[0] === 204 && p[1] === 204 && p[2] === 204) {
            return true;
        }

        return false;
    }


    ////////////////////////////////////////////////////// SCROLL TO ZOOM IN/OUT


    CANVAS_CONTAINER.on("wheel", function (evt) {

        if (!CONFIG.canvas.isLoaded) {
            return;
        }

        var oldScale = CONFIG.canvas.scale;

        CONFIG.canvas.scale = formatScale((evt.originalEvent.deltaY > 0) ? CONFIG.canvas.scale / 1.5 : CONFIG.canvas.scale * 1.5);

        var dx = evt.clientX - CANVAS_CONTAINER.width() / 2;
        var dy = evt.clientY - CANVAS_CONTAINER.height() / 2;

        CONFIG.canvas.x -= dx / oldScale;
        CONFIG.canvas.x += dx / CONFIG.canvas.scale;

        CONFIG.canvas.y -= dy / oldScale;
        CONFIG.canvas.y += dy / CONFIG.canvas.scale;

        if (CONFIG.user.placeHolder.visible) {

            CONFIG.user.placeHolder.visible = false;
            PLACEHOLDER.hide();
        }


        updateCanvasScalePosition();
    });


    ////////////////////////////////////////////////////// MOVE & ZOOM IN/OUT (MOBILE)

    var cursorIconChanged = false;
    interact('.canvas-container').styleCursor(false).draggable({
        inertia: true,
        onmove: function (evt) {


            if (!CONFIG.canvas.isLoaded) {
                return;
            }

            if (!CONFIG.canvas.lockedPosition) {

                CONFIG.canvas.x += evt.dx / CONFIG.canvas.scale;
                CONFIG.canvas.y += evt.dy / CONFIG.canvas.scale;

                updateCanvasScalePosition();
            }
            else {
                toastr.warning('Please uncheck the Lock canvas position to be able to move it again', 'Canvas position locked', {
                    progressBar: true,
                    preventDuplicates: true
                });
            }
        },
        onend: function (evt) {

            if (!cursorIconChanged) {

                CANVAS_CONTAINER.css('cursor', 'crosshair');
                cursorIconChanged = false;
            }
        }

    }).gesturable({

        onmove: function (evt) {

            if (!CONFIG.canvas.isLoaded) {
                return;
            }

            CONFIG.canvas.scale = formatScale(CONFIG.canvas.scale * (1 + evt.ds));

            if (CONFIG.user.placeHolder.visible) {

                CONFIG.user.placeHolder.visible = false;
                PLACEHOLDER.hide();
            }


            updateCanvasScalePosition();
        }
    });


    ////////////////////////////////////////////////////// UPDATE LOCKED PIXELS DISPLAY


    $('.button-hide-protected-pixels-label').on("click touchstart", function (e) {

        if ($('.button-hide-protected-pixels[type="checkbox"]').is(":checked")) {
            $('.button-hide-protected-pixels[type="checkbox"]').prop('checked', false);
            getLockedPixels(0);
        }
        else {
            $('.button-hide-protected-pixels[type="checkbox"]').prop('checked', true);
            getLockedPixels(1);
        }
    });

    $('.button-hide-protected-pixels').on("click touchstart", function (e) {

        if ($(this).is(":checked")) {
            getLockedPixels(1);
        }
        else {
            getLockedPixels(0);
        }
    });


    function getLockedPixels(way) {

        if (!CONFIG.canvas.isLoaded) {
            return;
        }

        if (way) {

            CTX.fillStyle = "#ffffff";
            CTX.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);

            CTX.drawImage(mainImg, 0, 0);
            CTX.drawImage(CANREFRESH, 0, 0);

            if(CONFIG.user.special) {

                CTX.globalAlpha = 0.6;
            }

            CTX.drawImage(lockedImg, 0, 0);

            if(CONFIG.user.special) {

                CTX.globalAlpha = 1;
            }


        }
        else {
            CTX.fillStyle = "#ffffff";
            CTX.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);

            CTX.drawImage(mainImg, 0, 0);
            CTX.drawImage(CANREFRESH, 0, 0);
        }

    }


    ////////////////////////////////////////////////////// UPDATE ZOOM/POSITION DISPLAY


    $('.button-lock-canvas-position').on("click touchstart", function (e) {

        if (CONFIG.canvas.lockedPosition) {
            $('.button-lock-canvas-position[type="checkbox"]').prop('checked', false);
            CONFIG.canvas.lockedPosition = false;
        }
        else {

            $('.button-lock-canvas-position[type="checkbox"]').prop('checked', true);
            CONFIG.canvas.lockedPosition = true;
        }

    });


    ////////////////////////////////////////////////////// UPDATE ZOOM/POSITION DISPLAY

    function updateCanvasScalePosition() {

        CANVAS_MOVE.css('webkitTransform', 'translate(' + CONFIG.canvas.x + 'px, ' + CONFIG.canvas.y + 'px)');
        CANVAS_MOVE.css('transform', 'translate(' + CONFIG.canvas.x + 'px, ' + CONFIG.canvas.y + 'px)');

        CANVAS_ZOOM.css('webkitTransform', 'scale(' + CONFIG.canvas.scale + ')');
        CANVAS_ZOOM.css('transform', 'scale(' + CONFIG.canvas.scale + ')');
    }


    ////////////////////////////////////////////////////// GENERATE COLOR PALETTE

    var append = '';
    CONFIG.palette.forEach(function (color, index) {

        if(CONFIG.canvas.id === 666 && index > 3) {
            //Black and white canvas
        }
        else {
            append += '<div class="palette-color" style="background-color:' + color + '" data-index="' + index + '"></div>';
        }
    });

    PALETTE.append(append);


    ////////////////////////////////////////////////////// SELECTING A COLOR

    $(document).on('click touchstart', '.palette > .palette-color', function () {

        if (!CONFIG.canvas.isLoaded) {
            return;
        }

        selectPaletteColor($(this).attr('data-index'));
    });

    function selectPaletteColor(index) {

        $('.palette > .palette-color').removeClass('color-selected');

        if (index == -1) {

            if (!CONFIG.user.onMobile) {

                if (CONFIG.user.cursor.visible) {

                    CONFIG.user.cursor.visible = false;
                    CURSOR.hide();
                }
            }

        } else {

            $('.palette > .palette-color[data-index="' + index + '"]').addClass('color-selected');

            if (!CONFIG.user.onMobile) {

                CURSOR.css('background-color', CONFIG.palette[index]);

                if (!CONFIG.user.cursor.visible) {

                    CONFIG.user.cursor.visible = true;
                    CURSOR.show();
                }
            }
        }

        CONFIG.user.color = parseInt(index);
    }


    ////////////////////////////////////////////////////// WHEN MOVING CURSOR

    $(document).on('mousemove pointermove', function (evt) {

        if (!CONFIG.canvas.isLoaded) {
            return;
        }

        setUserCoords(evt);

        //Move the color preview block under the cursor
        CURSOR.offset({
            left: evt.pageX + 10,
            top: evt.pageY + 10
        });


        if (CONFIG.user.cursor.x != null && CONFIG.user.cursor.y != null) {

            //Move the placeholder next to the cursor according to the grid
            if (!CONFIG.user.onMobile) {

                var screenPos = boardToScreenSpace(CONFIG.user.cursor.x, CONFIG.user.cursor.y);


                PLACEHOLDER.css("transform", "translate(" + screenPos.x + "px, " + screenPos.y + "px) ");

                var scale = CONFIG.canvas.scale / CONFIG.canvas.ratio;


                PLACEHOLDER.css("width", scale + 1 + "px").css("height", scale + 1 + "px");


                if (!CONFIG.user.placeHolder.visible && evt.clientX > 250) {

                    CONFIG.user.placeHolder.visible = true;
                    PLACEHOLDER.show();
                }

                if (CONFIG.user.placeHolder.visible && evt.clientX <= 250) {

                    CONFIG.user.placeHolder.visible = false;
                    PLACEHOLDER.hide();
                }


                if (!CONFIG.user.cursor.visible && evt.clientX > 250) {

                    CONFIG.user.cursor.visible = true;
                    CURSOR.show();
                }

                if (CONFIG.user.cursor.visible && evt.clientX <= 250) {

                    CONFIG.user.cursor.visible = false;
                    CURSOR.hide();
                }
            }
            else {

                if (CONFIG.user.placeHolder.visible) {

                    CONFIG.user.placeHolder.visible = false;
                    PLACEHOLDER.hide();
                }

                if (CONFIG.user.cursor.visible) {

                    CONFIG.user.cursor.visible = false;
                    CURSOR.hide();
                }
            }
        }
        else {

            if (CONFIG.user.placeHolder.visible) {

                CONFIG.user.placeHolder.visible = false;
                PLACEHOLDER.hide();
            }

            if (CONFIG.user.cursor.visible) {

                CONFIG.user.cursor.visible = false;
                CURSOR.hide();
            }
        }
    });

    function setUserCoords(evt) {

        var boardPos = screenToBoardSpace(evt.clientX, evt.clientY);
        boardPos.x |= 0;
        boardPos.y |= 0;


        //Update coords display && cursor position info
        if (boardPos.x < 0 || boardPos.x > (CONFIG.canvas.width - 1) || boardPos.y < 0 || boardPos.y > (CONFIG.canvas.height - 1)) {

            CONFIG.user.cursor.x = null;
            CONFIG.user.cursor.y = null;

            COORDS.text('');

            if (CONFIG.user.coords.visible) {
                CONFIG.user.coords.visible = false;
                COORDS.hide();
            }

        }
        else {

            CONFIG.user.cursor.x = boardPos.x;
            CONFIG.user.cursor.y = boardPos.y;


            //because safarishit on ios11
            //if (CONFIG.user.onMobile) {
            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
                CONFIG.user.cursor.y++;
            }

            COORDS.text((boardPos.x) + "," + ( boardPos.y));

            if (!CONFIG.user.coords.visible) {
                CONFIG.user.coords.visible = true;
                COORDS.show();
            }
        }
    }


    function screenToBoardSpace(screenX, screenY) {

        var scale = CONFIG.canvas.scale / CONFIG.canvas.ratio;

        var boardBox = CANVAS[0].getBoundingClientRect();

        var boardX = (((screenX - boardBox.left) / scale)),

            boardY = (((screenY - boardBox.top) / scale));

        return {x: boardX, y: boardY};
    }

    function boardToScreenSpace(boardX, boardY) {

        var scale = CONFIG.canvas.scale / CONFIG.canvas.ratio;

        var boardBox = CANVAS[0].getBoundingClientRect();

        var x = boardX * scale + boardBox.left,

            y = boardY * scale + boardBox.top;

        return {x: x, y: y};
    }


    ////////////////////////////////////////////////////// PLACING A PIXEL

    var cooldownCleared = true;
    var cursorPosOnClick = {clientX: null, clientY: null};
    var canvasPosOnClick = {x: null, y: null};

    $(document).on('keypress', function (evt) {

        if (evt.originalEvent) {

            if (evt.which == 32) {
                attemptToPlace();
            }

            if(CONFIG.user.special) {

                if (evt.which == 49) {
                    attemptToPlace(100);
                }

                if (evt.which == 50) {
                    attemptToPlace(101);
                }

                if (evt.which == 51) {
                    attemptToPlace(102);
                }

                if (evt.which == 52) {
                    attemptToPlace(200);
                }

                if (evt.which == 53) {
                    attemptToPlace(201);
                }

                if (evt.which == 54) {
                    attemptToPlace(202);
                }

                if (evt.which == 55) {
                    attemptToPlace(300);
                }

                if (evt.which == 56) {
                    attemptToPlace(301);
                }

                if (evt.which == 57) {
                    attemptToPlace(302);
                }
            }
        }
    });



    $(CANVAS_CONTAINER).contextmenu(function (e) {
        e.preventDefault();
    });


    if (CONFIG.user.onMobile) {

        $(CANVAS_CONTAINER).on('pointerdown mousedown touchstart', function (evt) {

            cursorPosOnClick = evt;

            canvasPosOnClick.x = CONFIG.canvas.x;
            canvasPosOnClick.y = CONFIG.canvas.y;
        });

        $(CANVAS_CONTAINER).on('pointerup mouseup touchend', function (evt) {

            if (CONFIG.user.onMobile) {

                attemptToPlace();
            }
        });
    }
    else {

        //too much delay (todo check mobile): $(CANVAS_CONTAINER).on('pointerup mouseup touchend', function (evt) {
        $(CANVAS_CONTAINER).on('pointerdown mousedown touchstart', function (evt) {

            cursorPosOnClick = evt;

            canvasPosOnClick.x = CONFIG.canvas.x;
            canvasPosOnClick.y = CONFIG.canvas.y;

            downFn(evt);
        });

        $(CANVAS_CONTAINER).on('pointerup mouseup touchend', function (evt) {

            upFn(evt);

        });
    }

    var downX, downY;
    var downFn = function (evt) {

        downX = evt.clientX;
        downY = evt.clientY;
    };

    var upFn = function (evt) {

        var dx = Math.abs(downX - evt.clientX);

        var dy = Math.abs(downY - evt.clientY);


        if (dx < 5 && dy < 5) {

            if (evt.originalEvent) {

                attemptToPlace();
            }
        }
    }


    var chill = false;
    var preventDuplicate = 0;
    var preventDuplicateData = '';



    function attemptToPlace(colorId) {
        //addPixelToCanvas(CONFIG.user.cursor.x, CONFIG.user.cursor.y,CONFIG.user.color);
        if (!CONFIG.canvas.isLoaded) {
            return;
        }

        if (chill) {
            return;
        }

        // alert("sd"+CONFIG.user.onMobile);
        if ((CONFIG.canvas.x != canvasPosOnClick.x && CONFIG.canvas.y != canvasPosOnClick.y) && CONFIG.user.onMobile) {
            return;
        }


        if ((CONFIG.user.cursor.x == null || CONFIG.user.cursor.y == null) || CONFIG.user.onMobile) {

            if (CONFIG.user.onMobile) {

                if (cursorPosOnClick.touches != undefined && cursorPosOnClick.touches.length == 1) {

                    setUserCoords(cursorPosOnClick.touches[0]);
                }
            }
            else {
                setUserCoords(cursorPosOnClick);
            }
        }

        if (cooldownCleared && CONFIG.user.cursor.x != null && CONFIG.user.cursor.y != null) {

            if (CONFIG.canvas.chillTime > 0) {

                chill = true;
                setTimeout(function () {
                    chill = false;
                }, CONFIG.canvas.chillTime);
            }

            /*if (CONFIG.canvas.cooldown > 0) {
             setTimeout(function () {
             cooldownCleared = true;
             }, CONFIG.canvas.cooldown)

             cooldownCleared = false;
             }*/

            var params = {
                'attemptPlaceV3': true,
                'x': CONFIG.user.cursor.x,
                'y': CONFIG.user.cursor.y,
                'c': colorId != undefined ? colorId : CONFIG.user.color,
                'b': CONFIG.canvas.id
            }

            var tmpPreventDuplicateData = params.x + '-' + params.y + '-' + params.c;
            if (tmpPreventDuplicateData == preventDuplicateData && preventDuplicate > time() - 2) {
                //prevent duplicate requests
            }
            else {

                if (CONFIG.canvas.id === 23) {

                    toastr.error('This canvas is full', {
                        progressBar: true,
                        preventDuplicates: false
                    });

                }
                else if (params.c < 100 && pixelLocked(params.x, params.y)) {

                    toastr.error('People can request a permanent protection of their pixels to prevent griefing. Use the checkbox on the left menu to hide protected pixels', 'This pixel is protected', {
                        progressBar: true,
                        preventDuplicates: false
                    });

                }
                else {

                    preventDuplicate = time();
                    preventDuplicateData = params.x + '-' + params.y + '-' + params.c;


                    $.ajax({
                        url: '/back/placepixelV3.php',
                        type: 'POST',
                        data: params,
                        dataType: 'json',
                        success: function (response) {

                            if (response === undefined) {

                                // addPixelToCanvas(response.data.x, response.data.y, response.data.c);

                                drawPixels([params]);

                                //CONFIG.user.captcha = response.data.captcha;
                            }
                            else {

                                if(response.data.errorType == 'disconnect.session' || response.data.errorType == 'not.connected') {
                                    $('.auth-block').removeClass('display-none');
                                    $('.auth-block').show();
                                    $('.button-logout').hide();
                                    $('.account-name').hide();
                                }


                                if (response.data.errorType == 'cooldown') {

                                    toastr.warning(response.data.message, 'Cooldown', {
                                        progressBar: true,
                                        preventDuplicates: true,
                                        timeOut: response.data.secondsLeft * 1000,
                                        closeOnHover: false
                                    });
                                }
                                else if (response.data.errorType == 'cooldownSpam') {

                                    toastr.warning(response.data.message, 'Cooldown', {
                                        progressBar: true,
                                        preventDuplicates: true,
                                        timeOut: response.data.secondsLeft * 1000,
                                        closeOnHover: false
                                    });
                                }
                                else if (response.data.errorType == 'notApprouvedTriggerBox') {

                                    toastr.error(response.data.message, '', {
                                        progressBar: true,
                                        preventDuplicates: false
                                    });

                                    $('#modal-request-access section.hide').hide();
                                    $('#modal-request-access').iziModal('open');
                                }
                                else if (CONFIG.user.special && response.data.errorType == 'debugVisual') {

                                    var startX = params.x;
                                    var startY = params.y;
                                    var startMaxX = response.data.xl;
                                    var startMaxY = response.data.yl;

                                    if (response.data.t == 1) {

                                        while (startY <= startMaxY) {

                                            startX = params.x;
                                            while (startX <= startMaxX) {

                                                CTX.fillStyle = '#FFFFFF';
                                                CTX.fillRect(startX, startY, 1, 1);

                                                startX++;
                                            }

                                            startY++;
                                        }

                                    }
                                    else if (response.data.t == 2) {

                                        while (startY <= startMaxY) {

                                            startX = params.x;
                                            while (startX <= startMaxX) {

                                                CTX.fillStyle = 'rgba(135, 114, 15, 0.50)';
                                                CTX.fillRect(startX, startY, 1, 1);

                                                startX++;
                                            }

                                            startY++;
                                        }
                                    }
                                    else if (response.data.t == 3) {

                                        while (startY <= startMaxY) {

                                            startX = params.x;
                                            while (startX <= startMaxX) {

                                                CTX.fillStyle = 'rgba(168, 255, 168, 0.50)';
                                                CTX.fillRect(startX, startY, 1, 1);

                                                startX++;
                                            }

                                            startY++;
                                        }
                                    }
                                }
                                else {
                                    toastr.error(response.data.message, '', {
                                        progressBar: true,
                                        preventDuplicates: false
                                    });
                                }

                            }
                        },
                        error: function (e) {
                            //alert('Internal error, please contact us (error code : Place pixel)');
                        }
                    });
                }
            }
        }

    }

    function addPixelToCanvas(x, y, color) {

        CTX.fillStyle = CONFIG.palette[color];
        CTX.fillRect(x, y, 1, 1);
    }

    ////////////////////////////////////////////////////// MODAL REQUEST ACCESS
    $("#modal-request-access").iziModal({
        group: 'modals',
        history: false,
        overlayClose: true,
        width: 600,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'bounceInDown',
        transitionOut: 'bounceOutDown',
        navigateCaption: true,
        navigateArrows: "false"
    });

    $(document).on('click touchstart', '#modal-request-access .button-request-access', function (e) {

        e.preventDefault();

        $('#modal-request-access section').hide();
        $('#modal-request-access .modal-loader').show();

        var params = {
            'requestApprovalForm': true,
            'boardId': CONFIG.canvas.id
        };

        $.ajax({
            url: '/back/modals.php',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (response) {

                if (response.success) {

                    toastr.success(response.data, 'Success');

                    setTimeout(function () {
                        $('#modal-request-access').iziModal('close');
                        $('#modal-request-access section.hide').hide();
                        $('#modal-request-access .modal-users-access').show();
                    }, 400);
                }
                else {

                    $('#modal-request-access section.hide').hide();
                    $('#modal-request-access .modal-users-access').show();
                    toastr.error(response.data, '', {
                        progressBar: true,
                        preventDuplicates: false
                    });
                }
            },
            error: function (e) {

                $('#modal-request-access section.hide').hide();
                $('#modal-request-access .modal-users-access').show();
                alert('Internal error, please contact us (error code : Request approval)');
            }
        });

    });


    ////////////////////////////////////////////////////// EXPORT CANVAS TO PNG

    $('.button-download-canvas').on('click touchstart', function (e) {

        var hidden_canv = document.createElement('canvas');
        hidden_canv.style.display = 'none';
        document.body.appendChild(hidden_canv);
        hidden_canv.width = CONFIG.canvas.width;
        hidden_canv.height = CONFIG.canvas.height;

        var hidden_ctx = hidden_canv.getContext('2d');
        hidden_ctx.drawImage(CANVAS[0], 0, 0, CONFIG.canvas.width, CONFIG.canvas.height, 0, 0, hidden_canv.width, hidden_canv.height);

        var hidden_data = hidden_canv.toDataURL("image/png").replace("image/png", "image/octet-stream");

        var downloadAnchor = document.createElement('a');


        var date = new Date();

        downloadAnchor.setAttribute('download', "pixeplace.io-" + CONFIG.canvas.id + "-" + date.getFullYear() + "-" + twoDigits(1 + date.getMonth()) + "-" + twoDigits(date.getDate()) + "-" + twoDigits(date.getHours()) + "-" + twoDigits(date.getMinutes()) + "-" + twoDigits(date.getSeconds()) + ".png");
        downloadAnchor.innerHTML = "Download canvas";
        downloadAnchor.setAttribute('href', hidden_data);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        document.body.removeChild(downloadAnchor);
        if (typeof downloadAnchor.remove === "function") {
            downloadAnchor.remove();
        }
    });


    ////////////////////////////////////////////////////// MODAL CANVAS LIST


    $("#modal-canvas-list").iziModal({
        group: 'modals',
        history: false,
        overlayClose: true,
        width: 600,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'bounceInDown',
        transitionOut: 'bounceOutDown',
        navigateCaption: true,
        navigateArrows: "false"
    });


    $(document).on('click touchstart', '.button-canvas-list', function (e) {

        e.preventDefault();
        $('#modal-canvas-list .modal-canvas-list').hide();
        $('#modal-canvas-list .modal-loader').show();
        $('#modal-canvas-list').iziModal('open');

        var params = {
            'getCanvasListV2': true
        };

        $.ajax({
            url: '/back/modalsV2.php',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (response) {

                if (response.success) {

                    var html = '';
                    for (var k in response.data.friends) {

                        var u = response.data.friends[k];

                        var visibility = 'Everyone';
                        var visibilityClass = 'everyone';
                        if(u.visibility == 2) {
                            visibility = 'Approval';
                            visibilityClass = 'approval';
                        }
                        else if(u.visibility == 3) {
                            visibility = 'Owner only';
                            visibilityClass = 'private';
                        }

                        var coolClass = u.cooldown > 0 ? 'yes':'none';



                        html += '<a href="/'+u.id+'" class="canvas-preview"><div class="imgCanvas"><img src="canvas/'+u.id+'.png" width="100"></div><div class="infoCanvas"><div class="title">' + u.name + '</div><div class="size">' + u.xMax + ' x ' + u.yMax + '</div><div class="visibility">Access: <span class="'+visibilityClass+'">'+visibility+'</span></div><div class="cooldown">Cooldown: <span class="'+coolClass+'">'+u.cooldown+'s</span></div></div></a>';
                    }

                    if(html !='') {
                        $('#modal-canvas-list .friends-canvas').html(html);
                    }


                    var html = '';
                    for (var k in response.data.owned) {

                        var u = response.data.owned[k];

                        var visibility = 'Everyone';
                        var visibilityClass = 'everyone';
                        if(u.visibility == 2) {
                            visibility = 'Approval';
                            visibilityClass = 'approval';
                        }
                        else if(u.visibility == 3) {
                            visibility = 'Owner only';
                            visibilityClass = 'private';
                        }

                        var coolClass = u.cooldown > 0 ? 'yes':'none';


                        html += '<a href="/'+u.id+'" class="canvas-preview"><div class="imgCanvas"><img src="canvas/'+u.id+'.png" width="100"></div><div class="infoCanvas"><div class="title">' + u.name + '</div><div class="size">' + u.xMax + ' x ' + u.yMax + '</div><div class="visibility">Access: <span class="'+visibilityClass+'">'+visibility+'</span></div><div class="cooldown">Cooldown: <span class="'+coolClass+'">'+u.cooldown+'s</span></div></div></a>';
                    }

                    if(html !='') {
                        $('#modal-canvas-list .owned-canvas').html(html);
                    }



                    var html = '';
                    for (var k in response.data.top30) {

                        var u = response.data.top30[k];

                        var visibility = 'Everyone';
                        var visibilityClass = 'everyone';
                        if(u.visibility == 2) {
                            visibility = 'Approval';
                            visibilityClass = 'approval';
                        }
                        else if(u.visibility == 3) {
                            visibility = 'Owner only';
                            visibilityClass = 'private';
                        }

                        var coolClass = u.cooldown > 0 ? 'yes':'none';


                        html += '<a href="/'+u.id+'" class="canvas-preview"><div class="imgCanvas"><img src="canvas/'+u.id+'.png" width="100"></div><div class="infoCanvas"><div class="title">' + u.name + '</div><div class="size">' + u.xMax + ' x ' + u.yMax + '</div><div class="visibility">Access: <span class="'+visibilityClass+'">'+visibility+'</span></div><div class="cooldown">Cooldown: <span class="'+coolClass+'">'+u.cooldown+'s</span></div></div></a>';
                    }

                    if(html !='') {

                        $('#modal-canvas-list .top-canvas').html(html);
                    }


                    setTimeout(function( ){
                        $('#modal-canvas-list section.hide').hide();
                        $('#modal-canvas-list .modal-canvas-list').show();
                    },1);

                }
                else {

                    $('#modal-canvas-list section.hide').hide();
                    $('#modal-canvas-list .modal-canvas-list').show();
                    alert(response.data.message);
                }
            },
            error: function (e) {

                $('#modal-canvas-list section.hide').hide();
                $('#modal-canvas-list .modal-canvas-list').show();
                alert('Internal error, please contact us (error code : Canvas list)');
            }
        });

    });


    ////////////////////////////////////////////////////// MODAL REQUEST PROTECTION


    $("#modal-request-protection").iziModal({
        group: 'modals',
        history: false,
        overlayClose: true,
        width: 600,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'bounceInDown',
        transitionOut: 'bounceOutDown',
        navigateCaption: true,
        navigateArrows: "false"
    });


    $(document).on('click touchstart', '.button-request-protection', function (e) {

        e.preventDefault();
        $('#modal-request-protection section.hide').hide();
        $('#modal-request-protection section.coming-soon').show();
        $('#modal-request-protection').iziModal('open');
    });

    ////////////////////////////////////////////////////// MODAL CREATE CANVAS

    $("#modal-create-canvas").iziModal({
        group: 'modals',
        history: false,
        overlayClose: true,
        width: 600,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'bounceInDown',
        transitionOut: 'bounceOutDown',
        navigateCaption: true,
        navigateArrows: "false"
    });

    var isEditingCanvas = false;

    $(document).on('click', '.trigger-modal-create-canvas, .trigger-modal-update-canvas', function (e) {

        e.preventDefault();


        $('#modal-create-canvas section.hide').hide();


        if ($(e.target).hasClass('trigger-modal-update-canvas')) {

            isEditingCanvas = true;

            $('#modal-create-canvas .modal-title').text('Update canvas');
            $('#modal-create-canvas .button-create-canvas').text('UPDATE CANVAS');
            $('#modal-create-canvas .canvas-name').text(CONFIG.canvas.name);

            $('#modal-create-canvas .canvas-name').val(CONFIG.canvas.name);
            $('#modal-create-canvas .canvas-width').val(CONFIG.canvas.width);
            $('#modal-create-canvas .canvas-height').val(CONFIG.canvas.height);
            $('#modal-create-canvas .canvas-cooldown').val(CONFIG.canvas.cooldown);

            if (CONFIG.user.isPremium) {
                $('#modal-create-canvas [name="canvas-privacy"][value="' + CONFIG.canvas.privacy + '"]').prop('checked', true);
            }
            else {
                $('#modal-create-canvas [name="canvas-privacy"][value="1"]').prop('checked', true);
            }
        }
        else {

            isEditingCanvas = false;

            $('#modal-create-canvas .update-canvas-id').val('');
            $('#modal-create-canvas .modal-title').text('Create a new canvas');
            $('#modal-create-canvas .button-create-canvas').text('CREATE CANVAS');
            $('#modal-create-canvas .canvas-name').val('My canvas');

            $('#modal-create-canvas [name="canvas-privacy"][value="1"]').prop('checked', true);

            if (CONFIG.user.isPremium) {

                $('#modal-create-canvas .canvas-width').val(CONFIG.creation.premium.size.min);
                $('#modal-create-canvas .canvas-height').val(CONFIG.creation.premium.size.min);
                $('#modal-create-canvas .canvas-cooldown').val(CONFIG.creation.premium.cooldown.min);
            }
            else {

                $('#modal-create-canvas .canvas-width').val(CONFIG.creation.normal.size.min);
                $('#modal-create-canvas .canvas-height').val(CONFIG.creation.normal.size.min);
                $('#modal-create-canvas .canvas-cooldown').val(CONFIG.creation.normal.cooldown.min);
            }

        }

        if (CONFIG.user.isPremium) {

            $('#modal-create-canvas .normal-user').hide();
            $('#modal-create-canvas .premium-user').show();
            $('#modal-create-canvas .premium-icon').hide();


            if (CONFIG.creation.premium.privacy.public) {
                $('#modal-create-canvas [name="canvas-privacy"][value="1"]').removeAttr('disabled');
            }
            else {
                $('#modal-create-canvas [name="canvas-privacy"][value="1"]').attr('disabled', 'disabled');
            }

            if (CONFIG.creation.premium.privacy.approval) {
                $('#modal-create-canvas [name="canvas-privacy"][value="2"]').removeAttr('disabled');
            }
            else {
                $('#modal-create-canvas [name="canvas-privacy"][value="2"]').attr('disabled', 'disabled');
            }

            if (CONFIG.creation.premium.privacy.approval) {
                $('#modal-create-canvas [name="canvas-privacy"][value="3"]').removeAttr('disabled');
            }
            else {
                $('#modal-create-canvas [name="canvas-privacy"][value="3"]').attr('disabled', 'disabled');
            }
        }
        else {

            $('#modal-create-canvas .premium-user').hide();
            $('#modal-create-canvas .normal-user').show();
            $('#modal-create-canvas .premium-icon').show();


            if (CONFIG.creation.normal.privacy.public) {
                $('#modal-create-canvas [name="canvas-privacy"][value="1"]').removeAttr('disabled');
            }
            else {
                $('#modal-create-canvas [name="canvas-privacy"][value="1"]').attr('disabled', 'disabled');
            }

            if (CONFIG.creation.normal.privacy.approval) {
                $('#modal-create-canvas [name="canvas-privacy"][value="2"]').removeAttr('disabled');
            }
            else {
                $('#modal-create-canvas [name="canvas-privacy"][value="2"]').attr('disabled', 'disabled');
            }

            if (CONFIG.creation.normal.privacy.approval) {
                $('#modal-create-canvas [name="canvas-privacy"][value="3"]').removeAttr('disabled');
            }
            else {
                $('#modal-create-canvas [name="canvas-privacy"][value="3"]').attr('disabled', 'disabled');
            }
        }


        $('#modal-create-canvas').iziModal('open');
    });

    $(document).on('click touchstart', '#modal-create-canvas .button-create-canvas', function (e) {

        e.preventDefault();


        var params = {
            'createCanvasForm': true,
            'name': $('#modal-create-canvas .canvas-name').val(),
            'xMax': parseInt($('#modal-create-canvas .canvas-width').val()),
            'yMax': parseInt($('#modal-create-canvas .canvas-height').val()),
            'cooldown': parseInt($('#modal-create-canvas .canvas-cooldown').val()),
            'visibility': parseInt($('#modal-create-canvas [name="canvas-privacy"]:checked').val()),
            'boardId': ''
        };

        if (isEditingCanvas) {
            params.boardId = CONFIG.canvas.id;
        }

        $('#modal-create-canvas .input-error').hide();

        if (CONFIG.user.isPremium) {

            if (params.name.length < CONFIG.creation.premium.name.min || params.name.length > CONFIG.creation.premium.name.max) {
                $('#modal-create-canvas .input-error[data-id="1"]').show();
                $('#modal-create-canvas .input-error[data-id="1"]').text("Canvas name must be between " + CONFIG.creation.premium.name.min + " and " + CONFIG.creation.premium.name.max + " characters");


                toastr.warning("Canvas name must be between " + CONFIG.creation.premium.name.min + " and " + CONFIG.creation.premium.name.max + " characters", '', {
                    progressBar: true,
                    preventDuplicates: true
                });

                return;
            }

            if (isNaN(params.xMax) || isNaN(params.yMax) || params.xMax < CONFIG.creation.premium.size.min || params.xMax > CONFIG.creation.premium.size.max) {

                $('#modal-create-canvas .input-error[data-id="2"]').show();
                $('#modal-create-canvas .input-error[data-id="2"]').text("Canvas width/height must be between " + CONFIG.creation.premium.size.min + " and " + CONFIG.creation.premium.size.max);

                toastr.warning("Canvas width/height must be between " + CONFIG.creation.premium.size.min + " and " + CONFIG.creation.premium.size.max, '', {
                    progressBar: true,
                    preventDuplicates: true
                });


                return;
            }

            if (isNaN(params.yMax) || params.yMax < CONFIG.creation.premium.size.min || params.yMax > CONFIG.creation.premium.size.max) {

                $('#modal-create-canvas .input-error[data-id="2"]').show();
                $('#modal-create-canvas .input-error[data-id="2"]').text("Canvas width/height must be between " + CONFIG.creation.premium.size.min + " and " + CONFIG.creation.premium.size.max);


                toastr.warning("Canvas width/height must be between " + CONFIG.creation.premium.size.min + " and " + CONFIG.creation.premium.size.max, '', {
                    progressBar: true,
                    preventDuplicates: true
                });


                return;
            }

            if (isNaN(params.cooldown) || params.cooldown < CONFIG.creation.premium.cooldown.min || params.cooldown > CONFIG.creation.premium.cooldown.max) {

                $('#modal-create-canvas .input-error[data-id="3"]').show();
                $('#modal-create-canvas .input-error[data-id="3"]').text("Canvas cooldown must be between " + CONFIG.creation.premium.cooldown.min + " and " + CONFIG.creation.premium.cooldown.max + " secs");

                toastr.warning("Canvas cooldown must be between " + CONFIG.creation.premium.cooldown.min + " and " + CONFIG.creation.premium.cooldown.max + " secs", '', {
                    progressBar: true,
                    preventDuplicates: true
                });


                return;
            }
        }
        else {

            if (params.name.length > CONFIG.creation.normal.name) {
                $('#modal-create-canvas .input-error[data-id="1"]').show();
                $('#modal-create-canvas .input-error[data-id="1"]').text("Canvas name cannot be more than " + CONFIG.creation.normal.name + " characters");

                toastr.warning("Canvas name cannot be more than " + CONFIG.creation.normal.name + " characters", '', {
                    progressBar: true,
                    preventDuplicates: true
                });

                return;
            }

            if (isNaN(params.xMax) || params.xMax < CONFIG.creation.normal.size.min || params.xMax > CONFIG.creation.normal.size.max) {

                $('#modal-create-canvas .input-error[data-id="2"]').show();
                $('#modal-create-canvas .input-error[data-id="2"]').text("Canvas width/height must be between " + CONFIG.creation.normal.size.min + " and " + CONFIG.creation.normal.size.max + " for non premium users");

                toastr.warning("Canvas width/height must be between " + CONFIG.creation.normal.size.min + " and " + CONFIG.creation.normal.size.max + " for non premium users", '', {
                    progressBar: true,
                    preventDuplicates: true
                });

                return;
            }

            if (isNaN(params.yMax) || params.yMax < CONFIG.creation.normal.size.min || params.yMax > CONFIG.creation.normal.size.max) {

                $('#modal-create-canvas .input-error[data-id="2"]').show();
                $('#modal-create-canvas .input-error[data-id="2"]').text("Canvas width/height must be between " + CONFIG.creation.normal.size.min + " and " + CONFIG.creation.normal.size.max + " for non premium users");

                toastr.warning("Canvas width/height must be between " + CONFIG.creation.normal.size.min + " and " + CONFIG.creation.normal.size.max + " for non premium users", '', {
                    progressBar: true,
                    preventDuplicates: true
                });

                return;
            }

            if (isNaN(params.cooldown) || params.cooldown < CONFIG.creation.normal.cooldown.min || params.cooldown > CONFIG.creation.normal.cooldown.max) {

                $('#modal-create-canvas .input-error[data-id="3"]').show();
                $('#modal-create-canvas .input-error[data-id="3"]').text("Canvas cooldown must be between " + CONFIG.creation.normal.cooldown.min + " and " + CONFIG.creation.normal.cooldown.max + " for non premium users");

                toastr.warning("Canvas cooldown must be between " + CONFIG.creation.normal.cooldown.min + " and " + CONFIG.creation.normal.cooldown.max + " for non premium users", '', {
                    progressBar: true,
                    preventDuplicates: true
                });

                return;
            }
        }

        $('#modal-create-canvas section').hide();
        $('#modal-create-canvas .modal-loader').show();

        $.ajax({
            url: '/back/modals.php',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (response) {

                if (response.success) {

                    if (isEditingCanvas) {
                        toastr.success('Canvas updated, redirecting..', 'Success');
                    }
                    else {
                        toastr.success('Canvas created, redirecting..', 'Success');
                    }

                    setTimeout(function () {
                        $('#modal-create-canvas').iziModal('close');
                    }, 400);

                    setTimeout(function () {
                        window.location.replace('/' + response.data.id);
                    }, 800);
                }
                else {

                    $('#modal-create-canvas section.hide').hide();
                    $('#modal-create-canvas .modal-create-canvas').show();
                    alert(response.data.message);
                }
            },
            error: function (e) {


                $('#modal-create-canvas section.hide').hide();
                $('#modal-create-canvas .modal-create-canvas').show();
                alert('Internal error, please contact us (error code : Create canvas)');
            }
        });

    });

    $(document).on('click touchstart', '#modal-create-canvas .radio-block', function (e) {

        e.preventDefault();

        if (CONFIG.user.isPremium) {

            if ($(this).attr("data-id") == 1 && !CONFIG.creation.premium.privacy.public) {
                alert('This privacy setting is not available');
                return;
            }

            if ($(this).attr("data-id") == 2 && !CONFIG.creation.premium.privacy.approval) {
                alert('This privacy setting is not available');
                return;
            }

            if ($(this).attr("data-id") == 3 && !CONFIG.creation.premium.privacy.private) {
                alert('This privacy setting is not available');
                return;
            }
        }
        else {

            if ($(this).attr("data-id") == 1 && !CONFIG.creation.normal.privacy.public) {
                alert('This privacy setting is only available to premium users');
                return;
            }

            if ($(this).attr("data-id") == 2 && !CONFIG.creation.normal.privacy.approval) {
                alert('This privacy setting is only available to premium users');
                return;
            }

            if ($(this).attr("data-id") == 3 && !CONFIG.creation.normal.privacy.private) {
                alert('This privacy setting is only available to premium users');
                return;
            }
        }

        $('#modal-create-canvas .radio-block input').prop('checked', false);

        $('#modal-create-canvas .radio-block input[value=' + $(this).attr("data-id") + ']').prop('checked', true);
    });


    ////////////////////////////////////////////////////// MODAL SIGN IN UP

    $(document).on('click', '.trigger-modal-sign-in, .trigger-modal-sign-up', function (e) {

        e.preventDefault();

        $('#modal-sign-in-up').iziModal('open');

        if ($(this).hasClass('trigger-modal-sign-in')) {
            $("#modal-sign-in-up header a").eq(0).trigger('click');
        }
        else {
            $("#modal-sign-in-up header a").eq(1).trigger('click');
        }
    });

    $(document).on('click touchstart', '#modal-sign-in-up .button-create-account', function (e) {

        e.preventDefault();

        if (!$('#modal-sign-in-up .register-tou').is(":checked")) {
            alert('You must agree to our terms (checkbox)');
        }
        else {
            $('#modal-sign-in-up section.hide').hide();
            $('#modal-sign-in-up .modal-loader').show();
            displayCaptcha('create-account');
        }
    });

    SUBMIT_FUNCTIONS['create-account'] = function submitCreateAccount(response) {

        var params = {
            'registerFormV2': true,
            'email': $('#modal-sign-in-up .register-email').val(),
            'password': $('#modal-sign-in-up .register-password').val(),
            'username': $('#modal-sign-in-up .register-username').val(),
            'g-recaptcha-response': response
        };

        $.ajax({
            url: '/back/modalsV2.php',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (response) {

                if (response.success) {

                    toastr.success('Account created, redirecting..', 'Success');

                    setTimeout(function () {
                        $('#modal-sign-in-up').iziModal('close');
                    }, 400);

                    setTimeout(function () {
                        window.location.reload();
                    }, 800);
                }
                else {

                    $('#modal-sign-in-up section.hide').hide();
                    $('#modal-sign-in-up .modal-register').show();
                    alert(response.data.message);
                }
            },
            error: function (e) {

                $('#modal-sign-in-up section.hide').hide();
                $('#modal-sign-in-up .modal-register').show();
                alert('Internal error, please contact us (error code : Register)');
            }
        });
    }

    $(document).on('click touchstart', '#modal-sign-in-up .button-login-in', function (e) {

        e.preventDefault();

        $('#modal-sign-in-up section.hide').hide();
        $('#modal-sign-in-up .modal-loader').show();

        displayCaptcha('login-account');
    });

    SUBMIT_FUNCTIONS['login-account'] = function submitLoginAccount(response) {

        var params = {
            'loginFormV2': true,
            'email': $('#modal-sign-in-up .login-email').val(),
            'password': $('#modal-sign-in-up .login-password').val(),
            'g-recaptcha-response': response
        };

        $.ajax({
            url: '/back/modalsV2.php',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (response) {

                if (response.success) {

                    toastr.success('Redirecting..', 'Success');

                    setTimeout(function () {
                        $('#modal-sign-in-up').iziModal('close');
                    }, 400);

                    setTimeout(function () {
                        window.location.reload();
                    }, 800);
                }
                else {

                    $('#modal-sign-in-up section.hide').hide();
                    $('#modal-sign-in-up .modal-login').show();
                    alert(response.data.message);
                }
            },
            error: function (e) {

                $('#modal-sign-in-up section.hide').hide();
                $('#modal-sign-in-up .modal-login').show();
                alert('Internal error, please contact us (error code : Login)');
            }
        });
    }

    $("#modal-sign-in-up").iziModal({
        group: 'modals',
        history: false,
        overlayClose: true,
        width: 600,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'bounceInDown',
        transitionOut: 'bounceOutDown',
        navigateCaption: true,
        navigateArrows: "false"
    });


    $("#modal-sign-in-up").on('click', 'header a', function (e) {

        e.preventDefault();

        var $this = $(this);
        var index = $this.index();
        $this.addClass('active').siblings('a').removeClass('active');

        var $sections = $this.closest('div').find('.sections');
        var $currentSection = $this.closest("div").find("section").eq(index);

        $sections.css('height', $currentSection.innerHeight());

        function changeHeight() {
            $this.closest("div").find("section").eq(index).fadeIn().siblings('section').fadeOut(100);
        }

        if ($currentSection.innerHeight() > $sections.innerHeight()) {
            changeHeight();
        } else {
            setTimeout(function () {
                changeHeight();
            }, 150);
        }

        if ($this.index() === 0) {
            $("#modal-custom .iziModal-content .icon-close").css('background', '#262626');
        } else {
            $("#modal-custom .iziModal-content .icon-close").attr('style', '');
        }
    });

    ////////////////////////////////////////////////////// MODAL MANAGE USERS ACCESS

    $("#modal-users-access").iziModal({
        group: 'modals',
        history: false,
        overlayClose: true,
        width: 600,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'bounceInDown',
        transitionOut: 'bounceOutDown',
        navigateCaption: true,
        navigateArrows: "false"
    });

    $(document).on('click', '#modal-users-access .doRequestAccess', function (e) {

        var params = {
            'doRequestId': true,
            'requestId': $(this).attr('data-id'),
            'requestAnswer': $(this).attr('data-action')
        };

        $.ajax({
            url: '/back/modals.php',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (response) {

                if (response.success) {


                    if (params.requestAnswer == 2) {
                        $('.doRequestAccess[data-id="' + params.requestId + '"]').closest('tr').remove();
                    }
                    else {
                        var elem = $('#modal-users-access .waiting-users .doRequestAccess[data-id="' + params.requestId + '"]').closest('tr').html();

                        $('#modal-users-access .waiting-users .doRequestAccess[data-id="' + params.requestId + '"]').closest('tr').remove();

                        $('#modal-users-access .approved-users').append('<tr>' + elem + '</tr>');

                        $('#modal-users-access .approved-users .doRequestAccess[data-id="' + params.requestId + '"]').attr('data-action', 2);
                        $('#modal-users-access .approved-users .doRequestAccess[data-id="' + params.requestId + '"]').text('Remove');
                    }


                }
                else {
                    alert(response.data.message);
                }
            },
            error: function (e) {
                alert('Internal error, please contact us (error code : Manage user access)');
            }
        });

    });


    $(document).on('click', '.trigger-modal-users-access', function (e) {

        e.preventDefault();

        $('#modal-users-access').iziModal('open');

        var params = {
            'getUsersAccessV2': true,
            'boardId': CONFIG.canvas.id
        };

        $.ajax({
            url: '/back/modalsV2.php',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (response) {

                if (response.success) {

                    var html = '<tr><td style="width: 60%">Pending requests</td><td style="width: 20%">Access</td></tr>';
                    for (var k in response.data.waiting) {

                        var u = response.data.waiting[k];

                        html += '<tr><td>' + u.email + '</td>';


                        if (u.status == 0) {
                            html += '<td><a href="#" class="doRequestAccess" data-id="' + u.id + '"  data-action="1">Approve</a></td>';
                        }
                        else {
                            html += '<td><a href="#" class="doRequestAccess" data-id="' + u.id + '"  data-action="2">Remove</a></td>';
                        }

                        html += '</tr>';
                    }


                    $('#modal-users-access .waiting-users').html(html);


                    var html = '<tr><td style="width: 60%">Approved users</td><td style="width: 20%">Access</td></tr>';
                    for (var k in response.data.approved) {

                        var u = response.data.approved[k];

                        html += '<tr><td>' + u.email + '</td>';



                        if (u.status == 0) {
                            html += '<td><a href="#" class="doRequestAccess" data-id="' + u.id + '" data-action="1">Approve</a></td>';
                        }
                        else {
                            html += '<td><a href="#" class="doRequestAccess" data-id="' + u.id + '" data-action="2">Remove</a></td>';
                        }

                        html += '</tr>';
                    }


                    $('#modal-users-access .approved-users').html(html);


                    $('#modal-users-access section.hide').hide();
                    $('#modal-users-access .modal-users-access').show();
                }
                else {

                    $('#modal-users-access section.hide').hide();
                    $('#modal-users-access .modal-users-access').show();
                    alert(response.data.message);
                }
            },
            error: function (e) {

                $('#modal-users-access section.hide').hide();
                $('#modal-users-access .modal-users-access').show();
                alert('Internal error, please contact us (error code : Manage user access)');
            }
        });
    });


    ////////////////////////////////////////////////////// SIDEBAR COLLAPSE


    var SIDEBAR_OPEN = true;
    var SIDEBAR_TRIGGERED = false;
    $(document).on('click touchstart', '.sidebar-trigger', function () {

        if (!SIDEBAR_TRIGGERED) {

            SIDEBAR_TRIGGERED = true;

            setTimeout(function () {

                SIDEBAR_TRIGGERED = false;

            }, 500);

            if (SIDEBAR_OPEN) {
                $('.sidebar-trigger .closed').show();
                $('.sidebar-trigger .open').hide();
                $('.sidebar-container').animate({"margin-left": '-=250'});
                SIDEBAR_OPEN = false;
            }
            else {
                $('.sidebar-trigger .open').show();
                $('.sidebar-trigger .closed').hide();
                $('.sidebar-container').animate({"margin-left": '+=250'});
                SIDEBAR_OPEN = true;
            }

        }

    });


    ////////////////////////////////////////////////////// BUTTON LOGOUT

    $(document).on('click touchstart', '.button-logout', function (e) {

        e.preventDefault();

        var params = {
            'logoutForm': true
        };

        $.ajax({
            url: '/back/modals.php',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (response) {

                if (response.success) {
                    window.location.reload();
                }
                else {
                    alert(response.data.message);
                }
            },
            error: function (e) {
                alert('Internal error, please contact us (error code : Register)');
            }
        });
    });


    ////////////////////////////////////////////////////// ABOUT


    $("#modal-about").iziModal({
        group: 'modals',
        history: false,
        overlayClose: true,
        width: 600,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'bounceInDown',
        transitionOut: 'bounceOutDown',
        navigateCaption: true,
        navigateArrows: "false"
    });

    $(document).on('click', '.trigger-modal-about', function (e) {

        e.preventDefault();

        $('#modal-about').iziModal('open');
    });


    ////////////////////////////////////////////////////// TOOLTIP

    $('.tooltip').on('click touchstart', function (e) {
        alert($(this).attr('data-text'));
    });


    ////////////////////////////////////////////////////// GENERIC FUNCTIONS

    //prevent pinchin on ioshit
    $(document).on('touchmove', function (evt) {

        if (!$(evt.target).is('.canvas-container') && !$(evt.target).is('.links-container') && $(event.target).closest(".sidebar-container").length < 1 && $(event.target).closest(".iziModal").length < 1) {

            evt.preventDefault();
        }
    });

    function formatScale(scale) {

        if (scale < CONFIG.canvas.minZoom) {
            scale = CONFIG.canvas.minZoom;
        }
        else if (scale > CONFIG.canvas.maxZoom) {
            scale = CONFIG.canvas.maxZoom;
        }
        else {
            scale = round(scale, 2);
        }

        return scale;
    }


    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }


    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function twoDigits(d) {
        if (0 <= d && d < 10) return "0" + d.toString();
        if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
        return d.toString();
    }


    function time() {
        return Math.floor(new Date().getTime() / 1000)
    }


});



}
/*
     FILE ARCHIVED ON 10:40:24 Feb 03, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:45:38 Aug 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 194.915
  exclusion.robots: 0.094
  exclusion.robots.policy: 0.083
  cdx.remote: 0.076
  esindex: 0.01
  LoadShardBlock: 158.117 (3)
  PetaboxLoader3.datanode: 140.259 (4)
  load_resource: 126.768
  PetaboxLoader3.resolve: 103.815
*/