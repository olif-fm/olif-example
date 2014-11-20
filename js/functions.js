/**
 * Funciones genéricas
 */

function loadURL(url) {
    window.location.replace(url);
}
/**
 * showFastForm Muestra la barra para añadir de manera Express un registro
 */
/**
 *
 *
 */
function seeData(url, id) {
    $('.line').removeClass('lineSelected');
    $('#line_' + id).addClass('lineSelected');
    $('#ventanaPopUp_close').attr(
        'onclick',
        "$('#ventanaPopUp').css('display','none');$('#line_" + id
            + "').removeClass('lineSelected');return false;")
    // alert('ID'+id);
    // alert('ventanaPopUp'+id);
    openWindow(url + '&id=' + id, 'ventanaPopUp' + id);
    return false;
}
/**
 * function reloadWindow Recarga una pÃ¡gina. Nozmalmente el contendio de la
 * pÃ¡gina pricnipal
 */
function reloadWindow() {
    if (contenido != "/") {
    loadWindow(contenido, 'contenidosmain', 'reload');
    }

}

/**
 * cleanURL Quita caracteres que impiden que al realizar un envío con ajax y se
 * llama a closeWindows se cierre la ventana
 *
 * @params _url: fichero donde guardar
 */
function cleanURL(_url) {
    _url = _url.replace('#', '');
    _url = _url.replace('&result_op=ok', '');
    _url = _url.replace('&result_op=error', '');
    _url = _url.replace('&order=albaran', '');
    _url = _url.replace('&order=senddate', '');
    _url = _url.replace('&order=canceldate', '');
    _url = _url.replace('&order=client', '');
    _url = _url.replace('&order=factura', '');
    return _url;
}
/*
 * sendGenericForm Guarda un formulario sencillo
 */
function sendGenericForm(id_form, file, action, overlay) {
    var _data = getFields(id_form);
    // console.log(_data);
    // return false;
    if (_data != null) {
    $('#' + id_form + ' #please_wait').css('display', 'block');
    if (action == 'submit') {
        $('#' + id_form).submit();
        return true;
    } else {
        $.easyAjax({
            stack : true,
            admin : false,
            file : file,
            dataType : 'json',
            data : _data,
            success : function(json) {
                if (json.result == true && (json.ID != "" || (json.redirect != "" && json.redirect != undefined))) {
                    if (json.redirect != '' && json.redirect != undefined) {
                        window.location.replace(base_url + json.redirect + '&result_op=ok');
                    } else {
                        window.location.replace(base_url+ actual_page + '&id='+ json.ID + '&result_op=ok');
                    }
                } else {
                    $('#' + id_form + ' #please_wait').css('display', 'none');
                    $('#' + id_form + ' #error_gen').css('display',"none");
                    $('#' + id_form + ' #error_crass > div > div ').html('<i class="icon24 i-warning"></i>'+ json.response);
                    $('#' + id_form + ' #error_crass').css(
                        'display', 'block');
                    }
            },
            error : function(response) {
                $('#' + id_form + ' #error_crass').css('display', 'block');
            }
            });
    }
    } else {
    $('#' + id_form + ' #send').css('display', 'block');
    $('#' + id_form + ' #please_wait').css('display', 'none');
    $('#' + id_form + ' #error_gen').css('display', "block");
    }
}
/*
 * getFields Guarda en un Array los campos de un formulario
 */
function getFields(form, validate) {
    var $form = $('#' + form), focusMe = [];
    if (validate === undefined)
    validate = true;
    if ($form) {
    var values = {}, valid = true;
    $form
        .find(":input")
        .each(
            function(index, el) {
                // console.log(this.id);
                // console.log(this.type);
                if (this.type == "radio") {
                if (this.checked) {
                    if ($form.find("input[name=" + this.name
                        + "]").length > 0)
                    values[this.name] = $(this).val();
                    else
                    values[this.id] = $(this).val();
                }

                } else if (this.type === "checkbox") {
                if (values[this.id] === undefined) {
                    values[this.id] = new Array();
                }
                if (this.checked) {
                    // console.log(this)
                    // values[this.id]=$(this).val();
                    values[this.id].push($(this).val());
                }
                /**/
                } else {
                if (this.type === "email"
                    && $(this).val() != ""
                    && !isEmail(this.value)
                    && this.required === false) {
                    valid = false;
                    if (validate) {
                    bindError(this);
                    focusMe.push(this);
                    }
                } else
                    values[this.id] = $(this).val();
                }

                if (this.required !== false
                    && this.required !== undefined) {
                if ((this.type === "radio" || this.type === "checkbox")
                    && !this.checked) {
                    if (validate) {
                    bindError(this);
                    focusMe.push(this);
                    }
                    valid = false;
                } else {
                    if (isEmpty(this.value)
                        || (this.type === "email" && !isEmail(this.value))) {
                    valid = false;
                    if (validate) {
                        bindError(this);
                        focusMe.push(this);
                    }
                    } else if (validate)
                    unbindError(this);
                }
                }
            });
    if (validate) {
        if (valid)
        return values;
        else {
        $(focusMe[0]).focus();
        return null;
        }
    } else
        return values;
    } else
    return null;
}
function isEmail(email) {
    return email
        .match(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,9})$/);
};

function isEmpty(variable) {
    return (typeof variable === "undefined" || variable === null
        || variable.length == 0 || variable.value === "");
};

function haveWhitespaces(variable) {
    var espacio = [ " ", "\n", "\t", "\r" ];
    if (!Form.isEmpty(variable))
    for (var i = 0; i < variable.length; i++)
        if (espacio.indexOf(variable.substring(i, i + 1)) != -1)
        return true;
    return false;
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function bindError(node) {
    var $inputNode = $(node);
    if ($inputNode.type !== "submit") {
    if ($inputNode.nodeName == "OPTION")
        $inputNode = $inputNode.parent();
    $inputNode.addClass("error");
    if ($inputNode.type === "checkbox" || $inputNode.type === "radio"
        || $inputNode.type === "select-one"
        || $inputNode.type === "select-multiple")
        $inputNode.bind("change.inputError", function() {
        $inputNode.removeClass("error");
        $inputNode.unbind("change.error");
        });
    else if ($inputNode.type !== "submit")
        $inputNode.bind("keyup.inputError", function() {
        $inputNode.removeClass("error");
        $inputNode.unbind("keyup.error");
        });
    }
}
function unbindError(node) {
    var $inputNode = $(node);
    if ($inputNode.type !== "submit") {
    if ($inputNode.nodeName == "OPTION")
        $inputNode = $inputNode.parent();
    $inputNode.removeClass("input_error");
    if ($inputNode.type === "checkbox" || $inputNode.type === "radio"
        || $inputNode.type === "select-one"
        || $inputNode.type === "select-multiple")
        $inputNode.unbind("change.inputError");
    else if ($inputNode.type !== "submit")
        $inputNode.unbind("keyup.inputError");
    }
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
        vars[key] = value;
        });
    return vars;
}
function teclaPresionada(e) {
    if (window.event) {
    keynum = e.keyCode;
    } else if (e.which) {
    keynum = e.which;
    }
    return keynum;
}
function showLayer(action, section, effect) {
    if ($('#' + section)) {
    if (effect == 'fade') {
        if (action == 'mostrar') {
        $('#' + section).fadeIn("600");
        } else {
        $('#' + section).fadeOut("600");
        }
    } else if (effect == 'slide') {
        if (action == 'mostrar') {
        $('#' + section).show("slide", {
            direction : "up"
        }, 1000);
        } else {
        $('#' + section).hide("slide", {
            direction : "up"
        }, 1000);
        }
    } else if (effect == 'nofx') {
        if (action == 'mostrar') {
        $('#' + section).css("display", "block");
        } else {
        $('#' + section).css("display", "none");
        }
    }
    }
    return false;
}
