//主体表格第一列绑定事件
$(document).on("mousemove", ".abstractinp", function () {
	$(this).attr('title', $(this).val())
})
//点击时候显示下拉内容
$(document).on("click", ".abstract", function (e) {
	stopPropagation(e)
	var editStatus0 = ($("#pzzhuantai").attr("vou-status") == undefined);
	if (!editStatus0) {
		var editStatus1 = ($("#pzzhuantai").attr("vou-status") == "O");
		var editStatus2 = (isInputor == true && (selectdata.data.inputor == ufgovkey.svUserCode || selectdata.data.inputor == undefined))
		var editStatus3 = ((isvousource && isvousourceclick == false) || isvousourceclick)
		var editStatus4 = $(this).parents('.voucher-center').attr('ifEdit') == 'false'
		if (editStatus1 && (editStatus2 || isInputor == false) && editStatus3 && !editStatus4 && vouiseditsave) {
			if (isabstract) {
				var sctop = $(this).offset().top - $(window).scrollTop() + 50
				var scleft = $(this).offset().left - $(window).scrollLeft()
				$('#abstract-container').show().css({
					'position': 'fixed',
					'top': sctop,
					'left': scleft
				});
			}
			$(this).find(".abstractinp").removeAttr("readonly");
			stopPropagation(e)
		} else {
			$(this).find(".abstractinp").attr("readonly", "readonly");
			return false;
		}
	} else {
		if (isabstract) {
			var sctop = $(this).offset().top - $(window).scrollTop() + 50
			var scleft = $(this).offset().left - $(window).scrollLeft()
			$('#abstract-container').show().css({
				'position': 'fixed',
				'top': sctop,
				'left': scleft
			});;
		}
		$(this).find(".abstractinp").removeAttr("readonly");
	}
	$(".all-no").hide();
})
$(document).on("dblclick", ".abstract", function (e) {
	var editStatus0 = ($("#pzzhuantai").attr("vou-status") == undefined);
	if (!editStatus0) {
		var editStatus1 = ($("#pzzhuantai").attr("vou-status") == "O");
		var editStatus2 = (isInputor == true && (selectdata.data.inputor == ufgovkey.svUserCode || selectdata.data.inputor == undefined))
		var editStatus3 = ((isvousource && isvousourceclick == false) || isvousourceclick)
		var editStatus4 = $(this).parents('.voucher-center').attr('ifEdit') == 'false'
		if (editStatus1 && (editStatus2 || isInputor == false) && editStatus3 && !editStatus4 && vouiseditsave) {
			if (isabstract) {
				var sctop = $(this).offset().top - $(window).scrollTop() + 50
				var scleft = $(this).offset().left - $(window).scrollLeft()
				$('#abstract-container').show().css({
					'position': 'fixed',
					'top': sctop,
					'left': scleft
				});;
			}
			$(this).find(".abstractinp").removeAttr("readonly");
			stopPropagation(e)
		} else {
			$(this).find(".abstractinp").attr("readonly", "readonly");
			return false;
		}
	} else {
		if (isabstract) {
			var sctop = $(this).offset().top - $(window).scrollTop() + 50
			var scleft = $(this).offset().left - $(window).scrollLeft()
			$('#abstract-container').show().css({
				'position': 'fixed',
				'top': sctop,
				'left': scleft
			});;
		}
		$(this).find(".abstractinp").removeAttr("readonly");
		stopPropagation(e)
	}
})
$(document).on("click", ".abstractinp", function () {
	for (var i = 0; i < $('#abstract-container').find("li").length; i++) {
		if ($(this).val() == "") {
			$('#abstract-container').find("li").eq(i).removeClass("noselected").addClass("PopListBoxItem");
		} else {
			var tempStr = $('#abstract-container').find("li").eq(i).text();
			var tempStrs = $('#abstract-container').find("li").eq(i).attr("name");
			var bool = tempStr.indexOf($(this).val());
			var bools = tempStrs.indexOf($(this).val());
			if (bool >= 0 || bools >= 0) {
				$('#abstract-container').find("li").eq(i).removeClass("noselected").addClass("PopListBoxItem");
			} else {
				$('#abstract-container').find("li").eq(i).addClass("noselected").removeClass("PopListBoxItem");
			}
		}
	}
})
//失去焦点的时候下拉内容隐藏
$(document).on("blur", ".abstractinp", function () {
	var _this = $(this);
	setTimeout(function () {
		_this.removeClass('abstractcheck')
		$('#abstract-container').hide(100);
	}, 200)
})
$(document).on("focus", ".abstractinp", function () {
	var editStatus4 = $(this).parents('.voucher-center').attr('ifEdit') == 'false'
	if (!isInputChange() || editStatus4) {
		$(this).attr("readonly", "readonly");
		$(this).select()
		return false;
	} else {
		if ($(".voucher-head").attr("namess") != undefined) {
			if (selectdata.data.vouStatus == "O") {
				$("#pzzhuantai").hide();
				voubiaoji();
			}
		}
		$(this).addClass('abstractcheck')
		if (isabstract) {
			var sctop = $(this).offset().top - $(window).scrollTop() + 50
			var scleft = $(this).offset().left - $(window).scrollLeft()
			$('#abstract-container').show().css({
				'position': 'fixed',
				'top': sctop,
				'left': scleft
			});
		}
		if ($(this).val() == "") {
			if ($(this).parents(".voucher-body").prevAll(".voucher-center").length >= 1 && vousinglepzzy != true) {
				for (var i = 0; i < $(this).parents(".voucher-body").prevAll(".voucher-center").length; i++) {
					if ($(this).parents(".voucher-body").prevAll(".voucher-center").eq(i).hasClass('deleteclass') != true) {
						$(this).val($(this).parents(".voucher-center").prevAll(".voucher-center").eq(i).find(".abstractinp").eq(0).val())
						break;
					}
				}
			} else if ($(this).parents(".voucher-centercw").prevAll(".voucher-centercw").length >= 1 && vousinglepzzy == true) {
				for (var i = 0; i < $(this).parents(".voucher-centercw").prevAll(".voucher-centercw").length; i++) {
					if ($(this).parents(".voucher-centercw").prevAll(".voucher-centercw").eq(i).hasClass('deleteclass') != true) {
						$(this).val($(this).parents(".voucher-centercw").prevAll(".voucher-centercw").eq(i).find(".abstractinp").eq(0).val())
						break;
					}
				}
			} else if ($(this).parents(".voucher-centerys").prevAll(".voucher-centerys").length >= 1 && vousinglepzzy == true) {
				if (isysorcw) {
					for (var i = 0; i < $(this).parents(".voucher-centerys").prevAll(".voucher-centerys").length; i++) {
						if ($(this).parents(".voucher-centerys").prevAll(".voucher-centerys").eq(i).hasClass('deleteclass') != true) {
							$(this).val($(this).parents(".voucher-centerys").prevAll(".voucher-centerys").eq(i).find(".abstractinp").eq(0).val())
							break;
						}
					}
				} else {
					$(this).val($(this).parents(".voucher-centerys").prev(".voucher-center").find(".abstractinp").eq(0).val())
				}
			}
			//当本侧无摘要时候向对侧方获取摘要	
			if ($(this).val() == "") {
				if ($(this).parents(".voucher-body").prevAll(".voucher-center").length >= 1) {
					for (var i = 0; i < $(this).parents(".voucher-body").prevAll(".voucher-center").length; i++) {
						if ($(this).parents(".voucher-body").prevAll(".voucher-center").eq(i).find(".abstractinp").eq(0).val() != '') {
							$(this).val($(this).parents(".voucher-center").prevAll(".voucher-center").eq(i).find(".abstractinp").eq(0).val())
							break;
						}
					}
				}
			}
		}
		$(this).select()
	}
})
var isseldesc = false
//输入框内容改变的时候执行模糊查询,根据内容查询下拉并筛选
$(document).on("input", ".abstractinp", function () {
	inde = 0;
	$('#abstract-container').animate({
		scrollTop: 0
	}, 0);
	$('#abstract-container').find("li").removeClass("selected").addClass("unselected");

	if (isabstract) {
		var sctop = $(this).offset().top - $(window).scrollTop() + 50
		var scleft = $(this).offset().left - $(window).scrollLeft()
		$('#abstract-container').show().css({
			'position': 'fixed',
			'top': sctop,
			'left': scleft
		});
		var desc = $(this)
		isseldesc = $(this).val()
		setTimeout(function () {
			if (desc.val() == isseldesc) {
				if (rpt.nowAgencyCode != "*") {
					ufma.ajax("/gl/vou/selDesc", "get", { 'descName': desc.val(), 'agencyCode': rpt.nowAgencyCode, 'acctCode': rpt.nowAcctCode }, function (data) {
						zaiyao = data;
						var ssr = ''
						for (var i = 0; i < data.data.length; i++) {
							ssr += '<li class="PopListBoxItem unselected" name = "' + data.data[i].assCode + '">' + data.data[i].descName + '</li>'
						}
						$("#abstract-container").html(ssr);
						for (var i = 0; i < $('#abstract-container').find("li").length; i++) {
							if (desc.val() == "") {
								$('#abstract-container').find("li").eq(i).removeClass("noselected").addClass("PopListBoxItem");
							} else {
								var tempStr = $('#abstract-container').find("li").eq(i).text();
								var tempStrs = $('#abstract-container').find("li").eq(i).attr("name");
								var bool = tempStr.indexOf(desc.val());
								var bools = tempStrs.indexOf(desc.val());
								if (bool >= 0 || bools >= 0) {
									var tempStr = $('#abstract-container').find("li").eq(i).removeClass("noselected").addClass("PopListBoxItem");
								} else {
									var tempStr = $('#abstract-container').find("li").eq(i).addClass("noselected").removeClass("PopListBoxItem");
								}
							}
						}
						$('#abstract-container').find(".PopListBoxItem").eq(0).removeClass("unselected").addClass("selected");
					})
				}
			}
		}, 500)

	}
})
$(document).on("input propertychange", ".abstractinp", function () {
	var $this = $(this)
	$(this).parents('.voucher-center').attr('descpt', $this.val())
	_val = $this.val();
	if (_val.length > 300) {
		$this.val(_val.substring(0, 300));
	}
});
//点击下拉 内容时候,获取内容并传给输入框
$(document).on("click", "#abstract-container li", function (e) {
	inde = -1;
	$(".abstractcheck").val($(this).text());
	$('#abstract-container').hide();
	$(".abstractcheck").parents(".abstract").next(".accounting").find(".accountinginp").focus().select();
	$('#abstract-container').animate({
		scrollTop: 0
	}, 100);
	stopPropagation(e);
})
//全键盘操作方式
$(document).on("keydown", ".abstractinp", function (event) {
	var editStatus0 = ($("#pzzhuantai").attr("vou-status") == undefined);
	if (!editStatus0) {
		var editStatus1 = ($("#pzzhuantai").attr("vou-status") == "O");
		var editStatus2 = (isInputor == true && (selectdata.data.inputor == ufgovkey.svUserCode || selectdata.data.inputor == undefined))
		var editStatus3 = ((isvousource && isvousourceclick == false) || isvousourceclick)
		var editStatus4 = $(this).parents('.voucher-center').attr('ifEdit') == 'false'
		if (editStatus1 && (editStatus2 || isInputor == false) && editStatus3 && !editStatus4 && vouiseditsave) { } else {
			if (event.ctrlKey && event.keyCode == 67) {}else{
				return false;
			}
		}
	}
	event = event || window.event;
	if (event.shiftKey && event.keyCode == 37) {
		var athis;
		if ($(this).parents('.voucher').hasClass('voucher-singelzybg') || $(this).parents('.voucher').hasClass('voucher-singelzy')) {
			athis = $(this).parents('.voucher-center').prev('.voucher-center').prev('.voucher-center')
		} else {
			athis = $(this).parents('.voucher-center').prev('.voucher-center')
		}
		if (athis.length > 0) {
			if (athis.find('.fuyan').css('display') != 'none') {
				athis.find('.accountinginp').focus()
			} else {
				if (athis.find('.money-ys').length > 0) {
					if (athis.find('.money-ys').parents('.money-jd').length > 0) {
						athis.find('.money-ys').parents('.money-jd').click()
					} else {
						athis.find('.money-ys').click()
					}
				} else {
					if (athis.find('.accountinginp').attr("accbal") != '0') {
						athis.find('.moneyj').click()
					} else {
						athis.find('.moneyd').click()
					}
				}
			}
		}
		event.preventDefault();
		event.returnValue = false;
		event.keyCode == 0
		return false;
	}
	if (event.shiftKey && event.keyCode == 39) {
		event.preventDefault();
		inde = 0;
		if ($('#abstract-container').find(".selected").length > 0 && $('#abstract-container').css("display") != "none") {
			$(this).val($('#abstract-container').find(".selected").text())
			$('#abstract-container').hide();
		}
		$(this).parents(".abstract").next(".accounting").find(".accountinginp").focus().select();
		$('#abstract-container').find("li").removeClass("selected").addClass("unselected");
		event.keyCode = 0;
		if (event.preventDefault) { // firefox
			event.preventDefault();
		} else { // other
			event.returnValue = false;
		}
	}
	if (event.shiftKey && event.keyCode == 38) {
		var athis;
		if ($(this).parents('.voucher').hasClass('voucher-singelzybg') || $(this).parents('.voucher').hasClass('voucher-singelzy')) {
			athis = $(this).parents('.voucher-center').prev('.voucher-center').prev('.voucher-center')
		} else {
			athis = $(this).parents('.voucher-center').prev('.voucher-center')
		}
		if (athis.length > 0) {
			athis.find('.abstractinp').focus()
		}
		event.preventDefault();
		event.returnValue = false;
		event.keyCode == 0
		return false;
	}
	if (event.shiftKey && event.keyCode == 40) {
		var athis;
		if ($(this).parents('.voucher').hasClass('voucher-singelzybg') || $(this).parents('.voucher').hasClass('voucher-singelzy')) {
			athis = $(this).parents('.voucher-center').next('.voucher-center').next('.voucher-center')
		} else {
			athis = $(this).parents('.voucher-center').next('.voucher-center')
		}
		if (athis.length > 0) {
			athis.find('.abstractinp').focus()
		}
		event.preventDefault();
		event.returnValue = false;
		event.keyCode == 0
		return false;
	}
	if (event.ctrlKey && event.keyCode == 81) {
		searchmobandata = $(this).val()
		if ($(this).parents('.voucher-center').find('.accountinginp').val() != '') {
			searchmobandata += " " + $(this).parents('.voucher-center').find('.accountinginp').val()
		}
		$('#mbsr').trigger('click')
		event.preventDefault();
		event.returnValue = false;
		event.keyCode == 0
		return false;
	}
	if (event.altKey && event.keyCode == 67) {
		voucopydata = huoquone($(this).parents('.voucher-center'))
		event.preventDefault();
		event.returnValue = false;
		event.keyCode == 0
		return false;
	}
	if (event.altKey && event.keyCode == 86) {
		chapzone($(this).parents('.voucher-center'))
		if (vousinglepz == true) {
			if ($(this).parents('.voucher-center').find(".accountinginp").attr('acca') == '1') {
				$(this).parents('.voucher-center').removeClass('voucher-center-ys').removeClass('voucher-center-cw').addClass('voucher-center-cw')
				$(this).parents('.voucher-center').find('.vouchertypebody').html('<div class="vouchertypebodycw">财</div>')
			} else if ($(this).parents('.voucher-center').find(".accountinginp").attr('acca') == '2') {
				$(this).parents('.voucher-center').removeClass('voucher-center-ys').removeClass('voucher-center-cw').addClass('voucher-center-ys')
				$(this).parents('.voucher-center').find('.vouchertypebody').html('<div class="vouchertypebodyys">预</div>')
			}
		}
		bidui()
		event.preventDefault();
		event.returnValue = false;
		event.keyCode == 0
		return false;
	}
	//点击上下箭头的时候,通过添加删除样式selected和unselected来确定选择内容,当在最上方的时候,点击上箭头移到最下方的内容
	if (event.keyCode == 38) {
		$(this).next(".accountinginps").find("li").removeClass("selected").addClass("unselected");
		inde--;
		if (inde < 0) {
			$('#abstract-container').find(".PopListBoxItem").eq(inde + 1).removeClass("selected").addClass("unselected");
			inde = $('#abstract-container').find(".PopListBoxItem").length - 1;
		}

		$('#abstract-container').find(".PopListBoxItem").eq(inde + 1).removeClass("selected").addClass("unselected");
		$('#abstract-container').find(".PopListBoxItem").eq(inde).removeClass("unselected").addClass("selected");
		$('#abstract-container').animate({
			scrollTop: (inde - 4) * 30
		}, 0);
	}
	//点击上下箭头的时候,通过添加删除样式selected和unselected来确定选择内容,当在最下方的时候,点击上箭头移到最上方的内容
	if (event.keyCode == 40) {
		if ($('#abstract-container').find(".selected").length == 0) {
			inde = -1;
		}
		$(this).next(".accountinginps").find("li").removeClass("selected").addClass("unselected");
		inde++;
		if (inde >= $('#abstract-container').find(".PopListBoxItem").length) {
			$('#abstract-container').find(".PopListBoxItem").eq(inde - 1).removeClass("selected").addClass("unselected");
			inde = 0;
		}
		$('#abstract-container').find(".PopListBoxItem").eq(inde - 1).removeClass("selected").addClass("unselected");
		$('#abstract-container').find(".PopListBoxItem").eq(inde).removeClass("unselected").addClass("selected");
		$('#abstract-container').animate({
			scrollTop: (inde - 4) * 30
		}, 0);
	}
	if (event.keyCode == 13) {
		event.preventDefault();
		inde = 0;
		if ($('#abstract-container').find(".selected").length > 0 && $('#abstract-container').css("display") != "none") {
			$(this).val($('#abstract-container').find(".selected").text())
			$('#abstract-container').hide();
		}
		if($(this).parents(".abstract").next(".accounting").find(".accountinginp").length>0){
			$(this).parents(".abstract").next(".accounting").find(".accountinginp").focus().select();
			$('#abstract-container').find("li").removeClass("selected").addClass("unselected");
		}else{
			$(this).parents(".voucher-center").find(".projectuniver").find('.projectuniverinp').focus().select()
			$(this).parents(".voucher-center").find(".projectuniver").find('.vouopenbtnbycenter').trigger('click');
		}
		event.keyCode = 0;
		if (event.preventDefault) { // firefox
			event.preventDefault();
		} else { // other
			event.returnValue = false;
		}
		return false;
	}
	if (event.shiftKey && event.keyCode == 13) {
		event.preventDefault();
		if ($(this).parents(".voucher-center").hasClass('voucher-centercw')) {
			for (var i = 0; i < $(".voucher-centerys").length; i++) {
				if ($(".voucher-centerys").eq(i).hasClass("deleteclass") != true) {
					$(".accountinginps").hide();
					$(".voucher-centerys").eq(i).find(".abstractinp").focus();
					break;
				}
			}
		} else if ($(this).parents(".voucher-center").hasClass('voucher-centerys')) {
			for (var i = 0; i < $(".voucher-centercw").length; i++) {
				if ($(".voucher-centercw").eq(i).hasClass("deleteclass") != true) {
					$(".abstractinps").hide();
					$(".voucher-centercw").eq(i).find(".abstractinp").focus();
					break;
				}
			}
		}
		event.keyCode = 0;
		if (event.preventDefault) { // firefox
			event.preventDefault();
		} else { // other
			event.returnValue = false;
		}
		return false;
	}
	//点击确定按钮的时候,将inde初始化,并获取class是selected的值,赋值后清空所有selected的calss
	if (event.keyCode == 9) {
		event.preventDefault();
		if (keydownctrls == true) {
			keydownctrls = false;
			_this = $(this)
			setTimeout(function () {
				if (vousinglepzzy) {
					if (_this.parents('.voucher-center').hasClass("voucher-centercw")) {
						for (var i = 0; i < $(".voucher-centerys").length; i++) {
							if ($(".voucher-centerys").eq(i).hasClass('deleteclass') != true) {
								$(".voucher-centerys").eq(i).find('.abstractinp').focus()
								if(isprojectByVou){
									$(".voucher-centerys").eq(i).find('.accountinginp').focus()
								}
								break;
							}
						}
						autoRelationacco('.voucher-centercw')
					} else {
						for (var i = 0; i < $(".voucher-centercw").length; i++) {
							if ($(".voucher-centercw").eq(i).hasClass('deleteclass') != true) {
								$(".voucher-centercw").eq(i).find('.abstractinp').focus()
								break;
							}
						}
						autoRelationacco('.voucher-centerys')
					}
				}
				keydownctrls = true;
			}, 1)
			event.keyCode = 0;
			if (event.preventDefault) { // firefox
				event.preventDefault();
			} else { // other
				event.returnValue = false;
			}
		}
	}
})
//高校模板项目启用的逻辑

$(document).on("focus", ".projectuniver", function(e) {
	var that = $(this).find('.projectuniverinp')
	var editStatus4 = $(this).parents('.voucher-center').attr('ifEdit') == 'false'
	if (!isInputChange() || editStatus4) {
		$(this).attr("readonly", "readonly");
		return false;
	} else {
		$(this).removeAttr("readonly");
		if(that.parents('.voucher-center').hasClass('voucher-centerys') && that.val()=='' && that.parents('.voucher-center').prev('.voucher-center').find('.projectuniverinp').val()!=''){
			var  prevdata = that.parents('.voucher-center').prev('.voucher-center').find('.projectuniverinp')
			that.val(prevdata.val()).attr('code',prevdata.attr('code')).attr('name',prevdata.attr('name'))
			that.parents('.projectuniver').next('.accounting').attr('accos',prevdata.parents('.projectuniver').next('.accounting').attr('accos'))
		}
	}
})
$(document).on("mouseover", ".projectuniver", function() {
	$(this).find('.vouopendelbycenter').show()
	if($(this).find('.projectuniverinp').attr('code')!=undefined){
		$(this).find('.vouopenbtndetailbycenter').show()
	}
})
$(document).on("mouseout", ".projectuniver", function() {
	$(this).find('.vouopendelbycenter').hide()
	$(this).find('.vouopenbtndetailbycenter').hide()
})
$(document).on("click", ".vouopendelbycenter", function(e) {
	stopPropagation(e)
	var editStatus4 = $(this).parents('.voucher-center').attr('ifEdit') == 'false'
	if (!isInputChange() || editStatus4) {
		return false;
	}
	$(this).parents('.projectuniver').next('.accounting').removeAttr('accos')
	$(this).parents('.projectuniver').find('.projectuniverinp').val('').removeAttr('code').removeAttr('name')
})
$(document).on("click", ".vouopenbtndetailbycenter", function(e) {
	stopPropagation(e)
	if($(this).parents('.projectuniver').find('.projectuniverinp').attr('code')!=undefined){
	}
	var title= '项目详情'
	var baseUrl= '/pf/pbm/index.html#/projectQuickquery?menuid=916fa44c-5311-48e5-8597-17b67c5aa51f'
	uf.openNewPage(page.isCrossDomain,$(this), 'openMenu', baseUrl, false, title);
})
$(document).on("click", ".vouopenbtnbycenter", function (e) {
	stopPropagation(e)
	var editStatus4 = $(this).parents('.voucher-center').attr('ifEdit') == 'false'
	if (!isInputChange() || editStatus4) {
		return false;
	}
	var $this = $(this)
	var vouGuid = ''
	if($(".voucher-head").attr("namess") != undefined){
		vouGuid = $(".voucher-head").attr("namess")
	}
	var projectCodeval = $this.parents(".projectuniver").find('.projectuniverinp').val()
	if($this.parents(".projectuniver").find('.projectuniverinp').attr('code')!=undefined){
		projectCodeval = $this.parents(".projectuniver").find('.projectuniverinp').attr('code')
	}
	ufma.open({
		url: '/pf/pbm/index.html#/projectAndQuotaSelect',
		title: "项目预算",
		width: 1200,
		data: {"vouGuid":vouGuid,"projectCode":projectCodeval},
		ondestory: function (result) {
			if(result.action.length!=0){
				var projectCode = result.action.currentQuotaInfo.projectCode
				var projectName = result.action.currentQuotaInfo.projectName
				if(projectCode!=undefined){
					var accos ;
					$this.parents(".projectuniver").find('.projectuniverinp').val(projectCode+' '+projectName).attr('code',projectCode).attr('name',projectName)
					ufma.ajaxDef('/pf/pbm/pbm/api/project/queryProjectDetailGl','post',{"project":{"projectCode":projectCode}},function(result){
						accos = result.data
						accos.depproCodes=result.data.proGroups
						$this.parents('.projectuniver').next('.accounting').attr('accos',JSON.stringify(accos))
						changeprojectData($this.parents(".projectuniver").find('.projectuniverinp'))
					})
					var sedata = {
						"pbmProjectWithQuotaVo": [{
							"projectCode": projectCode, 
							"proQuotaList": [{
								"proQuotaCode":'' 
							}]
						}]
					}
					ufma.ajaxDef('/pf/pbm/pbm/base/project/queryExpecoByProjectQuota','post',sedata,function(result){
						accos.expecos=result.data
					})
					$this.parents('.projectuniver').next('.accounting').attr('accos',JSON.stringify(accos))
					$('.voucher-close').click()
					var delacco=true;
					for(var i=0;i<accos.accos.length;i++){
						if(accos.accos[i].chrCode == $this.parents('.voucher-center').find('.accountinginp')){
							delacco = false
						}
					}
					if(delacco){
						$this.parents('.projectuniver').next('.accounting').removeAttr('fudata')
						$this.parents('.voucher-center').find('.voucher-yc').remove()
						$this.parents('.voucher-center').find(".fuyan").hide();
						$this.parents('.voucher-center').find('.accountinginp').val('')
						$this.parents('.voucher-center').find('.accountinginp').removeAttr('allname').removeAttr('acca').removeAttr('accoindex').removeAttr('accbal')
						$this.parents('.voucher-center').find('.accountinginp').removeAttr('code').removeAttr('name').removeAttr('cashflow').removeAttr('fname')
					}else{
						changeprojectData($this.parents(".projectuniver").find('.projectuniverinp'))
					}
				}else{
				}
				
			}
		}
	})
});
function changeprojectData(that){
	if(that.parents('.voucher-center').find('.accounting').attr('accos') == undefined){
		return false
	}
	var accos = JSON.parse(that.parents('.voucher-center').find('.accounting').attr('accos'))
	var centerdata =huoquone(that.parents('.voucher-center')) 
	var assData = centerdata.vouDetailAsss
	for(var i=0;i<assData.length;i++){
		for(var j in assData[i]){
			if(accos[j]!=undefined && accos[j]!=''){
				assData[i][j] = accos[j]
			}
			if(j == 'quotaCode' && assData[i][j]!=""){
				var kl = true;
				for(var z=0;z<accos.quotas.length;z++){
					if(accos.quotas[z].quotaCode == assData[i][j]){
						kl=false;
					}
				}
				if(kl){
					assData[i][j] = ''
				}
			}
			if(j == 'expecoCode' && assData[i][j]!=""){
		
				var kl = true;
				for(var z=0;z<accos.quotas.length;z++){
					if(accos.quotas[z].quotaCode == assData[i][j]){
						kl=false;
					}
				}
				if(kl){
					assData[i][j] = ''
				}
			}
		}
	}
	that.parents('.voucher-center').find('.accounting').attr('fudata', assData)
	that.parents('.voucher-center').find('.voucher-yc').remove()
}