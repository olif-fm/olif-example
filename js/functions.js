function sendRoomPriceSeason(input){
	ID=$(input).data("id");
	FK_ROOM=$(input).data("room");
	FK_SEASON=$(input).data("season");
	PRICE = $(input).val();
	$.easyAjax({
		file: 'sendBookingRoomSeasonPrice',
		data:{
			ID : ID,
			FK_ROOM : FK_ROOM,
			FK_SEASON : FK_SEASON,
			PRICE : PRICE
		},
		stack:true,
		isAdmin: false,
		dataType: 'json',
		success: function(json){
			console.log(json)
		},
		error: function(json){
			alert(json)
		}
	});
	console.log('ID: '+ID);
	console.log('FK_ROOM: '+FK_ROOM);
	console.log('FK_SEASON: '+FK_SEASON);
	console.log('PRICE: '+PRICE);
}

function sendRoom2(form, riaFile){
	var _data = new Array();
	var ok = true;
	_data= {
		ID : $('#'+form+' #ID').val(),
		NAME : $('#'+form+' #NAME').val(),
		CAPACITY : $('#'+form+' #CAPACITY').val(),
		CAPACITY_EXTRA : $('#'+form+' #CAPACITY_EXTRA').val(),
		IS_SPECIAL : $('#'+form+' #IS_SPECIAL:checked').val(),
		IS_MINUS : $('#'+form+' #IS_MINUS:checked').val()
	};
	/*
	for(var i in _data){
		if(cm_is_empty(_data[i]) ||  _data[i] == undefined){
			ok = false;
		}
	}
	*/
	$('#'+form+' #error_gen').css('display','none');
	$('#'+form+' #please_wait').css('display','block');
	$('#'+form+' #block_gen_coupon').css('display','none'); 
	if(ok){
		$.easyAjax({
			file: riaFile,
			data:_data,
			stack:true,
			isAdmin: false,
			dataType: 'json',
			success: function(json){
				console.log(json)
				if (json.response=="OK"){
					$('#'+form+' #block_msgs').html('<div class="alert alert-info" >Save Ok</div>');
					$('#'+form+' #block_msgs').css('display','block');
					$('#'+form+' #please_wait').css('display','none');
				}else{
					$('#'+form+' #block_msgs').html('<div class="alert alert-danger" >An error occurred</div>');
					$('#'+form+' #block_msgs').css('display','block');
					$('#'+form+' #please_wait').css('display','none');
				}
			},
			error: function(json){
				console.log(json)
			}
		});
	}else{
		$('#'+form+' #error_gen').css('display','block');
		$('#'+form+' #please_wait').css('display','none'); 
	}
	return false;
}
function sendSeason2(form, riaFile){
	var _data = new Array();
	var ok = true;
	_data= {
		ID : $('#'+form+' #ID').val(),
		NAME : $('#'+form+' #NAME').val(),
		TYPE : $('#'+form+' #TYPE').val(),
		YEAR : $('#'+form+' #YEAR').val()
	};
	/*
	for(var i in _data){
		if(cm_is_empty(_data[i]) ||  _data[i] == undefined){
			ok = false;
		}
	}
	*/
	$('#'+form+' #error_gen').css('display','none');
	$('#'+form+' #please_wait').css('display','block');
	$('#'+form+' #block_gen_coupon').css('display','none'); 
	if(ok){
		$.easyAjax({
			file: riaFile,
			data:_data,
			stack:true,
			isAdmin: false,
			dataType: 'json',
			success: function(json){
				console.log(json)
				if (json.response=="OK"){
					$('#'+form+' #block_msgs').html('<div class="alert alert-info" >Save Ok</div>');
					$('#'+form+' #block_msgs').css('display','block');
					$('#'+form+' #please_wait').css('display','none');
				}else{
					$('#'+form+' #block_msgs').html('<div class="alert alert-danger" >An error occurred</div>');
					$('#'+form+' #block_msgs').css('display','block');
					$('#'+form+' #please_wait').css('display','none');
				}
			},
			error: function(json){
				console.log(json)
			}
		});
	}else{
		$('#'+form+' #error_gen').css('display','block');
		$('#'+form+' #please_wait').css('display','none'); 
	}
	return false;
}
function sendSeasonDate(riaFile){
	var _data = new Array();
	var ok = true;
	_data= {
		FK_SEASON : $('#ID').val(),
		DATE_START : $('#DATE_START').val(),
		DATE_END : $('#DATE_END').val()
	};
	
	for(var i in _data){
		if(cm_is_empty(_data[i]) ||  _data[i] == undefined){
			ok = false;
		}
	}
	/**/
	$('#please_wait2').css('display','inline-block');
	if(ok){
		$.easyAjax({
			file: riaFile,
			data:_data,
			stack:true,
			isAdmin: false,
			dataType: 'json',
			success: function(json){
				console.log(json)
				if (json.response=="OK"){
					var url=cleanURL(window.location.href);
		        	window.location.replace(url+'&result_op=ok');
				}else{
					alert('An error occurred');
					$('#please_wait2').css('display','none');
				}
			},
			error: function(json){
				console.log(json)
			}
		});
	}else{
		$('#please_wait2').css('display','none');
	}
	return false;
}
function sendCoupon(form, riaFile){
	var _data = new Array();
	var ok = true;
	_data= {
		EMAIL : $('#'+form+' #EMAIL').val(),
		CODE : $('#'+form+' #CODE').val()
	};
	for(var i in _data){
		if(cm_is_empty(_data[i]) ||  _data[i] == undefined){
			ok = false;
		}
	}
	$('#'+form+' #error_gen').css('display','none');
	$('#'+form+' #please_wait').css('display','block');
	$('#'+form+' #block_gen_coupon').css('display','none'); 
	if(ok){
		$.easyAjax({
			file: riaFile,
			data:_data,
			stack:true,
			isAdmin: false,
			dataType: 'json',
			success: function(json){
				console.log(json)
				if (json.response=="OK"){
					$('#'+form+' #block_gen_coupon').html('<div class="alert alert-info" >Your COUPON:<br><b>'+json.coupon+'</b></div>');
					$('#'+form+' #block_gen_coupon').css('display','block');
					$('#'+form+' #please_wait').css('display','none');
				}else if (json.response=="ERROR_CODE_ASSIGNED"){
					$('#'+form+' #block_gen_coupon').html('<div class="alert alert-danger" >The CODE was assigned previously</div>');
					$('#'+form+' #block_gen_coupon').css('display','block');
 					$('#'+form+' #please_wait').css('display','none');
				}else if (json.response=="ERROR_SAVE_CODE"){
					$('#'+form+' #block_gen_coupon').html('<div class="alert alert-danger" >An error occurred saving the CODE</div>');
					$('#'+form+' #block_gen_coupon').css('display','block');
 					$('#'+form+' #please_wait').css('display','none');
				}else if (json.response=="ERROR_SAVE_COUPON"){
					$('#'+form+' #block_gen_coupon').html('<div class="alert alert-danger" >An error occurred saving the COUPON</div>');
					$('#'+form+' #block_gen_coupon').css('display','block');
					$('#'+form+' #please_wait').css('display','none');
				}else if (json.response=="ERROR_GET_COUPON"){
					$('#'+form+' #block_gen_coupon').html('<div class="alert alert-danger" >An error occurred getting the COUPON</div>');
					$('#'+form+' #block_gen_coupon').css('display','block');
					$('#'+form+' #please_wait').css('display','none');
				}else if (json.response=="ERROR_CODE_NOT_EXIST_OR_IS_ASSIGNED"){
					$('#'+form+' #block_gen_coupon').html('<div class="alert alert-danger" >The CODE not exist or it was assigned previously</div>');
					$('#'+form+' #block_gen_coupon').css('display','block');
					$('#'+form+' #please_wait').css('display','none');
				}else if (json.response=="ERROR_NO_DATA_SEND"){
					$('#'+form+' #block_gen_coupon').html('<div class="alert alert-danger" >No data was sending</div>');
					$('#'+form+' #block_gen_coupon').css('display','block');
					$('#'+form+' #please_wait').css('display','none');
				}else{
					$('#'+form+' #block_gen_coupon').html('<div class="alert alert-danger" >An error occurred</div>');
					$('#'+form+' #block_gen_coupon').css('display','block');
					$('#'+form+' #please_wait').css('display','none');
				}
			},
			error: function(json){
				console.log(json)
			}
		});
	}else{
		$('#'+form+' #error_gen').css('display','block');
		$('#'+form+' #please_wait').css('display','none'); 
	}
	return false;
}


function startIntroCoupons(){
    var intro = introJs();
      intro.setOptions({
        tooltipClass: 'olif-tooltip',
        steps: [
          {
            element: document.querySelector('#CouponsLoad'),
            intro: "<b>Cupons Load:</b> Carga tu listado de códigos y cupones, juntos o por separado",
          },
          {
            element: document.querySelector('#CouponsAssign'),
            intro: "<b>Coupons Assign:</b> Prueba como lo visualizaría tu cliente.<br>\n\
             - introduce tu email<br>\n\
             - introduce tu código<br>\n\
             - se generará tu cupón",
            position: 'right'
          },
          {
            element: document.querySelector('#codesCoupons'),
            intro: "<b>Codes & Coupon:</b> Comprueba todos los datos de la asignación de cupones: fecha, hora, a quién ha sido asignado...",
            position: 'right'
          },
          {
            element: document.querySelector('#CouponsStatics'),
            intro: '<b>Coupons Statistics:</b> Mide tus resultados visualizando el movimiento de cupones de tu campaña',
            position: 'right'
          }
        ]
      });

      intro.start();
}
function exportGenericToXls(file,action,formFilters){
	$('#downloadCSV').css('display','none');
	$('#preDownload').css('display','inline-block');
    var selectedIds = new Array();
    var filters="";
	if(action=='filtered'){
		if(formFilters=='' || formFilters==undefined)formFilters='formL1';
		filters = getFields(formFilters);
	}    
    if(action=='selected'){
    	$("input[name=checkIds]:checked").each(function() {
    		selectedIds.push($(this).val());
    	});	    	
    }
   	$.easyAjax({
		file: file,
		data: {
			filters:			filters,
        	selectedIds:		selectedIds,
        	actionFilter:		action,

        },
        stack:true,
		isAdmin: false,
		dataType: 'json',
		success: function(json){
        	$('#preDownload').css('display','none');
        	if(json.response=='OK' && json.fileID != ""){
        		var href=(window.location.href).replace(/^(.*)#.*$/,"$1");
        		$('#downloadCSV').attr("href",href+"&doFa="+json.fileID);
        		$('#downloadCSV').css('display','inline-block');
        		
        		$('#uploadDrive').attr("href",href+"&exportYanezDrive="+json.fileID);
        		$('#uploadDrive').css('display','inline-block');
        		
            }else{
            	$('#downloadCSV').removeClass('btn-success');
            	$('#downloadCSV').addClass('btn-danger');
            	$('#downloadCSV').html('Error en su petici�n:'+json.response);
            }
		},
		error: function(response){
			var url=cleanURL(window.location.href);
        	window.location.replace(url+'&result_op=error');
		}
   });
}
function cm_is_empty(variable) { 
    if((variable == null) || (variable.length == 0) || (variable.value == "")) { 
      return true; 
    }
    return false;
}
/**
 *  cleanURL
 * Quita caracteres que impiden que al realizar un envío con ajax y se llama a closeWindows se cierre la ventana
 * @params _url: fichero donde guardar
 * */
function cleanURL(_url){
	_url=_url.replace('#', '');
	_url=_url.replace('&result_op=ok', '');
	_url=_url.replace('&result_op=error', '');
	_url=_url.replace('&order=albaran', '');
	_url=_url.replace('&order=senddate', '');
	_url=_url.replace('&order=canceldate', '');
	_url=_url.replace('&order=client', '');
	_url=_url.replace('&order=factura', '');
	return _url;
}