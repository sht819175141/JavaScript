	var city = "",
	dThreshold = 3500,
	fThreshold = 4800,
	cFeeArr = [0, 0, 0, 0, 0, 0],
	pFeeArr = [0, 0, 0, 0],
	isOutputListShow = !1,
	BLinkStatus = 0,
	browserCore = null;
jf = [];
jf["北京"] = [];
jf["北京"][0] = [8, 2, 0.2, 12];
jf["北京"][1] = [20, 10, 1, 0.3, 0.8, 12];
jf["北京"][2] = [3134, 17379];
jf["上海"] = [];
jf["上海"][0] = [8, 2, 0.5, 7];
jf["上海"][1] = [21, 11, 1.5, 0.5, 1, 7];
jf["上海"][2] = [3022, 15108];
jf["深圳"] = [];
jf["深圳"][0] = [8, 2, 1, 5];
jf["深圳"][1] = [10, 5, 2, 0.5, 0.5, 5];
jf["深圳"][2] = [2336, 15654];
jf["广州"] = [];
jf["广州"][0] = [8, 2, 1, 8];
jf["广州"][1] = [20, 8, 2, 0.5, 0.85, 8];
jf["广州"][2] = [2461, 12303];
jf["南京"] = [];
jf["南京"][0] = [8, 2, 0.5, 8];
jf["南京"][1] = [20, 9, 1.5, 0.5, 0.8, 8];
jf["南京"][2] = [2200, 16200];
jf["成都"] = [];
jf["成都"][0] = [8, 2, 1, 7];
jf["成都"][1] = [20, 7.5, 2, 0.6, 0.6, 7];
jf["成都"][2] = [1562, 7629];
jf["杭州"] = [];
jf["杭州"][0] = [8, 2, 1, 8];
jf["杭州"][1] = [14, 11.5, 2, 0.5, 0.8, 8];
jf["杭州"][2] = [1374, 6870];
jf["重庆"] = [];
jf["重庆"][0] = [8, 2, 1, 7];
jf["重庆"][1] = [20, 7, 2, 0.6, 0.5, 7];
jf["重庆"][2] = [1513, 11349];
jf["天津"] = [];
jf["天津"][0] = [8, 2, 1, 11];
jf["天津"][1] = [20, 9, 2, 0.5, 0.8, 11];
jf["天津"][2] = [1934, 14508];
jf["武汉"] = [];
jf["武汉"][0] = [8, 2, 1, 8];
jf["武汉"][1] = [20, 8, 2, 0.5, 0.7, 8];
jf["武汉"][2] = [1621, 8106];
jf["西安"] = [];
jf["西安"][0] = [8, 2, 1, 8];
jf["西安"][1] = [20, 7, 2, 0.5, 0.5, 8];
jf["西安"][2] = [1514, 7572];
jf["宁波"] = [];
jf["宁波"][0] = [8, 2, 1, 8];
jf["宁波"][1] = [12, 13, 2, 0.4, 0.7, 8];
jf["宁波"][2] = [1685, 8423];
jf["苏州"] = [];
jf["苏州"][0] = [8, 2, 1, 8];
jf["苏州"][1] = [20, 8, 2, 0.5, 1, 8];
jf["苏州"][2] = [2013, 16208];
jf["青岛"] = [];
jf["青岛"][0] = [8, 2, 1, 8];
jf["青岛"][1] = [20, 9, 1, 0.5, 1, 8];
jf["青岛"][2] = [1638, 8190];
jf["厦门"] = [];
jf["厦门"][0] = [8, 2, 1, 8];
jf["厦门"][1] = [14, 8, 2, 0.5, 0.8, 8];
jf["厦门"][2] = [1822, 9114];
jf["沈阳"] = [];
jf["沈阳"][0] = [8, 2, 1, 8];
jf["沈阳"][1] = [19, 8, 2, 2, 0.8, 8];
jf["沈阳"][2] = [1929, 9645];
jf["东莞"] = [];
jf["东莞"][0] = [8, 2, 0.5, 10];
jf["东莞"][1] = [10, 7.5, 1.5, 0.5, 0.5, 8];
jf["东莞"][2] = [1655, 8277];
jf["无锡"] = [];
jf["无锡"][0] = [8, 2, 1, 8];
jf["无锡"][1] = [20, 8, 1, 0.3, 0.9, 8];
jf["无锡"][2] = [1800, 12880];
jf["长沙"] = [];
jf["长沙"][0] = [8, 2, 1, 8];
jf["长沙"][1] = [20, 8, 2, 0.5, 0.7, 8];
jf["长沙"][2] = [1500, 7500];
jf["福州"] = [];
jf["福州"][0] = [8, 2, 1, 8];
jf["福州"][1] = [18, 8, 2, 0.5, 0.7, 8];
jf["福州"][2] = [1369, 6845];
jf["哈尔滨"] = [];
jf["哈尔滨"][0] = [8, 2, 1, 8];
jf["哈尔滨"][1] = [22, 7.5, 1, 0.4, 0.5, 8];
jf["哈尔滨"][2] = [1276, 6381];
jf["郑州"] = [];
jf["郑州"][0] = [8, 2, 1, 8];
jf["郑州"][1] = [20, 8, 2, 0.5, 1, 8];
jf["郑州"][2] = [1492, 8195];
jf["合肥"] = [];
jf["合肥"][0] = [8, 2, 1, 8];
jf["合肥"][1] = [20, 8, 1, 0.5, 0.7, 8];
jf["合肥"][2] = [1489, 7446];
jf["济南"] = [];
jf["济南"][0] = [8, 2, 1, 8];
jf["济南"][1] = [20, 8, 2, 0.5, 0.8, 8];
jf["济南"][2] = [1556, 7776];
jf["南昌"] = [];
jf["南昌"][0] = [8, 2, 1, 8];
jf["南昌"][1] = [20, 6, 2, 0.4, 0.8, 8];
jf["南昌"][2] = [1522, 7611];
jf["昆明"] = [];
jf["昆明"][0] = [8, 2, 0.5, 10];
jf["昆明"][1] = [20, 10, 1, 0.3, 0.5, 10];
jf["昆明"][2] = [1449, 7248];
jf["石家庄"] = [];
jf["石家庄"][0] = [8, 2, 1, 7];
jf["石家庄"][1] = [20, 8, 2, 0.5, 0.8, 11];
jf["石家庄"][2] = [1419, 7095];
jf["长春"] = [];
jf["长春"][0] = [8, 2, 1, 7];
jf["长春"][1] = [21, 7, 1.5, 0.5, 0.7, 7];
jf["长春"][2] = [1522, 7611];
jf["太原"] = [];
jf["太原"][0] = [8, 2, 0.5, 6];
jf["太原"][1] = [20, 6.5, 1.5, 0.6, 0.5, 10];
jf["太原"][2] = [774, 3873];
jf["南宁"] = [];
jf["南宁"][0] = [8, 2, 1, 8];
jf["南宁"][1] = [20, 7.5, 1, 0.4, 0.6, 8];
jf["南宁"][2] = [1283, 6415];
jf["乌鲁木"] = [];
jf["乌鲁木"][0] = [8, 2, 1, 12];
jf["乌鲁木"][1] = [20, 7.5, 2, 0.5, 0.8, 12];
jf["乌鲁木"][2] = [740, 3702];
jf["贵阳"] = [];
jf["贵阳"][0] = [8, 2, 1, 8];
jf["贵阳"][1] = [18, 7.5, 2, 0.6, 0.7, 12];
jf["贵阳"][2] = [1230, 6150];
jf["兰州"] = [];
jf["兰州"][0] = [8, 2, 1, 10];
jf["兰州"][1] = [21, 6, 2, 0.5, 1, 10];
jf["兰州"][2] = [1305, 6528];
jf["海口"] = [];
jf["海口"][0] = [8, 2, 1, 12];
jf["海口"][1] = [20, 7, 2, 1, 0.5, 12];
jf["海口"][2] = [1532, 7662];
jf["西宁"] = [];
jf["西宁"][0] = [8, 2, 1, 7];
jf["西宁"][1] = [20, 6, 1.5, 1, 1.5, 7];
jf["西宁"][2] = [929, 4647];
jf["呼和浩"] = [];
jf["呼和浩"][0] = [8, 2, 1, 8];
jf["呼和浩"][1] = [20, 4, 2, 2, 0.7, 8];
jf["呼和浩"][2] = [1015, 5076];
jf["银川"] = [];
jf["银川"][0] = [8, 2, 1, 8];
jf["银川"][1] = [20, 6, 2, 0.9, 0.7, 8];
jf["银川"][2] = [1839, 9198];
jf["其他"] = [];
jf["其他"][0] = [8, 2, 1, 8];
jf["其他"][1] = [20, 10, 1, 0.5, 0.5, 8];
jf["其他"][2] = [1449, 7457];

	browserCore = getBrowserCore();
	if ("msie" == browserCore.name) {
		var a = parseInt(browserCore.version);
		7 >= a && ($("#income_type_select").wrap('<i class="mh-select_wrapper"><i class="mh-select_shelter" id="income_type_select_shelter"></i></i>'), $("input.mh-input_box").focus(function() {
			$(this).css("border-color", "#66afe9").css("outline", "0")
		}), $("input.mh-input_box").blur(function() {
			$(this).css("border-color", "#ccc")
		}));
		6 >= a && ($(".mh-btn_group .mh-aftertax_calc_btn").hover(function() {
			$(this).css("background",
				"#0099FF")
		}, function() {
			$(this).css("background", "#5385E0")
		}), $(".mh-btn_group .mh-pretax_calc_btn").hover(function() {
			$(this).css("background", "#fafafa")
		}, function() {
			$(this).css("background", "#F6F6F6")
		}), $(".mh-input_box[disabled]").css("background-color", "#F6F6F6").css("color", "#E285AB"))
	}
	$("#salary_tab").click(function() {
		$(this).removeClass("mh-normal_tab").addClass("mh-select_tab").siblings(".mh-tab").removeClass("mh-select_tab").addClass("mh-normal_tab");
		$("#salary_calc").show().siblings(".mh-calc_body").hide();
		$("#salary_atc_recmd").show().siblings(".mh-btm_atc_recmd").hide();
		$(".mh-city_list").hide()
	});
	$("#bonus_tab").click(function() {
		$(this).removeClass("mh-normal_tab").addClass("mh-select_tab").siblings(".mh-tab").removeClass("mh-select_tab").addClass("mh-normal_tab");
		$("#bonus_calc").show().siblings(".mh-calc_body").hide();
		$("#bonus_atc_recmd").show().siblings(".mh-btm_atc_recmd").hide();
		$(".mh-city_list").hide()
	});
	$("#other_tab").click(function() {
		$(this).removeClass("mh-normal_tab").addClass("mh-select_tab").siblings(".mh-tab").removeClass("mh-select_tab").addClass("mh-normal_tab");
		$("#other_calc").show().siblings(".mh-calc_body").hide();
		$("#other_atc_recmd").show().siblings(".mh-btm_atc_recmd").hide();
		$(".mh-city_list").hide()
	});
	$("#city_select").click(function() {
		$("#citylist_1").show()
	});
	$("#city_select_2").click(function() {
		$("#citylist_2").show()
	});
	$(".mh-city_list .mh-close").click(function() {
		$(this).parent().hide()
	});
	$(".mh-city_list li").click(function() {
		var a = $(this).text();
		$("#city_select i").text(a);
		$("#city_select_2 i").text(a);
		city = a;
		rate_fillin();
		$("#city_select_warning").hide();
		$("#city_select2_warning").hide();
		$(this).parents(".mh-city_list").hide()
	});
	$(".mh-city_list").mouseleave(function() {
		$(this).hide()
	});
	$("#pension_rate").blur(function() {
		var a = get_pSocialBase();
		pPension_calc(a);
		personal_pay_update()
	});
	$("#medical_rate").blur(function() {
		var a = get_pSocialBase();
		pMedical_calc(a);
		personal_pay_update()
	});
	$("#unemployment_rate").blur(function() {
		var a = get_pSocialBase();
		pUnemployment_calc(a);
		personal_pay_update()
	});
	$("#paf_rate").blur(function() {
		var a = get_pPAFBase();
		pPAF_calc(a);
		personal_pay_update()
	});
	$("#pension_company_rate").blur(function() {
		var a = get_cSocialBase();
		cPension_calc(a);
		company_pay_update()
	});
	$("#medical_company_rate").blur(function() {
		var a = get_cSocialBase();
		cMedical_calc(a);
		company_pay_update()
	});
	$("#unemployment_company_rate").blur(function() {
		var a = get_cSocialBase();
		cUnemployment_calc(a);
		company_pay_update()
	});
	$("#injury_company_rate").blur(function() {
		var a = get_cSocialBase();
		cInjury_calc(a);
		company_pay_update()
	});
	$("#fertility_company_rate").blur(function() {
		var a =
			get_cSocialBase();
		cFertility_calc(a);
		company_pay_update()
	});
	$("#paf_company_rate").blur(function() {
		var a = get_cPAFBase();
		cPAF_calc(a);
		company_pay_update()
	});
	$("#income_type_select").change(function() {
		$("#other_calc input.mh-input_box").val("");
		var a = parseInt($(this).val());
		0 == a || 1 == a ? ($("#year_income_line").show(), $("#total_cost_line").show(), $("#pretax_income_line").hide()) : ($("#year_income_line").hide(), $("#total_cost_line").hide(), $("#pretax_income_line").show())
	});
	$('input[name="nationality_radio"]').click(function() {
		1 ==
			$(this).val() ? $("#pretax_salary").attr("placeholder", "个人起征4800") : 0 == $(this).val() && $("#pretax_salary").attr("placeholder", "个人起征3500");
		userInputCheck_1() && (personal_pay_calc(), company_pay_calc(), isOutputListShow || ($("#salary_calc_btn_group").removeClass("mh-high_btn_group").addClass("mh-low_btn_group"), $("#output_list").show()))
	});
	$("#pretax_salary").focus(function() {
		$(this).removeClass("mh-normal_border").removeClass("mh-warning_border").addClass("mh-focus_border");
		$("#pretax_salary_warning").hide()
	});
	$("#pretax_salary_2").focus(function() {
		$(this).removeClass("mh-normal_border").removeClass("mh-warning_border").addClass("mh-focus_border");
		$("#pretax_salary2_warning").hide()
	});
	$("#aftertax_salary").focus(function() {
		$(this).removeClass("mh-normal_border").removeClass("mh-warning_border").addClass("mh-focus_border");
		$("#aftertax_salary_warning").hide()
	});
	$("#annual_bonus").focus(function() {
		$(this).removeClass("mh-normal_border").removeClass("mh-warning_border").addClass("mh-focus_border");
		$("#annual_bonus_warning").hide()
	});
	$("#pretax_income").focus(function() {
		$(this).removeClass("mh-normal_border").removeClass("mh-warning_border").addClass("mh-focus_border");
		$("#pretax_income_warning").hide()
	});
	$("#year_income").focus(function() {
		$(this).removeClass("mh-normal_border").removeClass("mh-warning_border").addClass("mh-focus_border");
		$("#year_income_warning").hide()
	});
	$("#total_cost").focus(function() {
		$(this).removeClass("mh-normal_border").removeClass("mh-warning_border").addClass("mh-focus_border");
		$("#total_cost_warning").hide()
	});
	$("#pretax_salary, #pretax_salary_2, #aftertax_salary, #annual_bonus, #pretax_income, #year_income, #total_cost").blur(function() {
		$(this).removeClass("mh-focus_border").removeClass("mh-warning_border").addClass("mh-normal_border")
	});
	$('[link-type="A_Link"]').click(function() {
		0 == BLinkStatus && ($('[link-type="B_Link"]').each(function() {
			$(this).attr("href", $(this).attr("href2"))
		}), BLinkStatus = 1)
	});
	$('[link-type="B_Link"]').click(function() {
		0 == BLinkStatus && ($(this).addClass("clicked"), $('[link-type="B_Link"]:not(.clicked)').each(function() {
			$(this).attr("href",
				$(this).attr("href2"))
		}), BLinkStatus = 1)
	});
	$("#calc_1").click(function() {
		userInputCheck_1() && (personal_pay_calc(), company_pay_calc(), isOutputListShow || ($("#salary_calc_btn_group").removeClass("mh-high_btn_group").addClass("mh-low_btn_group"), $("#output_list").show()))
	});
	$("#calc_3").click(function() {
		userInputCheck_3() && bonus_tax_calc()
	});
	$("#calc_4").click(function() {
		var a = parseInt($("#income_type_select").val());
		if (0 == a || 1 == a) {
			var c = userInputCheck_4_1();
			c && other_tax_calc_1()
		} else(c = userInputCheck_4_2()) &&
			other_tax_calc_2(a)
	})


function rate_fillin() {
	$("#pension_rate").val(jf[city][0][0]);
	$("#medical_rate").val(jf[city][0][1]);
	$("#unemployment_rate").val(jf[city][0][2]);
	$("#paf_rate").val(jf[city][0][3]);
	$("#pension_company_rate").val(jf[city][1][0]);
	$("#medical_company_rate").val(jf[city][1][1]);
	$("#unemployment_company_rate").val(jf[city][1][2]);
	$("#injury_company_rate").val(jf[city][1][3]);
	$("#fertility_company_rate").val(jf[city][1][4]);
	$("#paf_company_rate").val(jf[city][1][5])
}

function get_pSocialBase() {
	var a = $('input[name="nationality_radio"]:checked').val(),
		b = parseFloat(trim($("#pretax_salary").val())),
		c = 0;
	0 == a && (b <= jf[city][2][0] ? c = jf[city][2][0] : b > jf[city][2][0] && b <= jf[city][2][1] ? c = b : b > jf[city][2][1] && (c = jf[city][2][1]));
	return c
}

function get_pPAFBase() {
	var a = $('input[name="nationality_radio"]:checked').val(),
		b = parseFloat(trim($("#pretax_salary").val()));
	return 1 == a ? 0 : b >= jf[city][2][1] ? jf[city][2][1] : b
}

function get_cSocialBase() {
	var a = $('input[name="nationality_radio"]:checked').val(),
		b = parseFloat(trim($("#pretax_salary").val())),
		c = 0;
	0 == a && (b <= jf[city][2][0] ? c = jf[city][2][0] : b > jf[city][2][0] && b <= jf[city][2][1] ? c = b : b > jf[city][2][1] && (c = jf[city][2][1]));
	return c
}

function get_cPAFBase() {
	var a = $('input[name="nationality_radio"]:checked').val(),
		b = parseFloat(trim($("#pretax_salary").val()));
	return 1 == a ? 0 : b >= jf[city][2][1] ? jf[city][2][1] : b
}

function personal_pay_calc() {
	var a = $('input[name="nationality_radio"]:checked').val(),
		b = parseFloat(trim($("#pretax_salary").val())),
		c = get_pSocialBase(),
		d = get_pPAFBase(),
		c = pPension_calc(c) + pMedical_calc(c) + pUnemployment_calc(c) + pPAF_calc(d),
		c = Math.round(100 * c) / 100;
	$("#personal_total_fee").text("" + c);
	a = b - c - (0 == a ? dThreshold : fThreshold);
	a = 0 >= a ? 0 : Math.round(100 * a) / 100;
	$("#personal_tax_total").text("" + a);
	a = pIncomeTax_calc(a);
	b = Math.round(100 * (b - c - a)) / 100;
	$("#aftertax_salary").val("" + b)
}

function personal_pay_update() {
	var a = parseFloat(trim($("#pretax_salary").val())),
		b = pFeeArr[0] + pFeeArr[1] + pFeeArr[2] + pFeeArr[3],
		b = Math.round(100 * b) / 100;
	$("#personal_total_fee").text("" + b);
	var c = $('input[name="nationality_radio"]:checked').val(),
		c = a - b - (0 == c ? dThreshold : fThreshold),
		c = 0 >= c ? 0 : Math.round(100 * c) / 100;
	$("#personal_tax_total").text("" + c);
	c = pIncomeTax_calc(c);
	a = Math.round(100 * (a - b - c)) / 100;
	$("#aftertax_salary").val("" + a)
}

function company_pay_calc() {
	$('input[name="nationality_radio"]:checked').val();
	var a = parseFloat(trim($("#pretax_salary").val())),
		b = get_cSocialBase(),
		c = get_cPAFBase(),
		b = cPension_calc(b) + cMedical_calc(b) + cUnemployment_calc(b) + cInjury_calc(b) + cFertility_calc(b) + cPAF_calc(c),
		b = Math.round(100 * b) / 100;
	$("#company_total_fee").text("" + b);
	a = Math.round(100 * (a + b)) / 100;
	$("#compay_pay_total").text("" + a)
}

function company_pay_update() {
	var a = parseFloat(trim($("#pretax_salary").val())),
		b = cFeeArr[0] + cFeeArr[1] + cFeeArr[2] + cFeeArr[3] + cFeeArr[4] + cFeeArr[5],
		b = Math.round(100 * b) / 100;
	$("#company_total_fee").text("" + b);
	a = Math.round(100 * (a + b)) / 100;
	$("#compay_pay_total").text("" + a)
}

function pIncomeTax_calc(a) {
	var b = 0;
	1500 >= a ? b = 0.03 * a : 1500 < a && 4500 >= a ? b = 0.1 * a - 105 : 4500 < a && 9E3 >= a ? b = 0.2 * a - 555 : 9E3 < a && 35E3 >= a ? b = 0.25 * a - 1005 : 35E3 < a && 55E3 >= a ? b = 0.3 * a - 2755 : 55E3 < a && 8E4 >= a ? b = 0.35 * a - 5505 : 8E4 < a && (b = 0.45 * a - 13505);
	b = Math.round(100 * b) / 100;
	$("#salary_tax").val("" + b);
	return b
}

function pPension_calc(a) {
	a = a * parseFloat(trim($("#pension_rate").val())) / 100;
	a = Math.round(100 * a) / 100;
	$("#pension_fee").text("" + a);
	return pFeeArr[0] = a
}

function pMedical_calc(a) {
	var b = $('input[name="nationality_radio"]:checked').val(),
		a = a * parseFloat(trim($("#medical_rate").val())) / 100,
		a = Math.round(100 * (a + (0 == b ? 3 : 0))) / 100;
	$("#medical_fee").text("" + a);
	return pFeeArr[1] = a
}

function pUnemployment_calc(a) {
	a = a * parseFloat(trim($("#unemployment_rate").val())) / 100;
	a = Math.round(100 * a) / 100;
	$("#unemployment_fee").text("" + a);
	return pFeeArr[2] = a
}

function pPAF_calc(a) {
	a = a * parseFloat(trim($("#paf_rate").val())) / 100;
	a = Math.round(100 * a) / 100;
	$("#paf_fee").text("" + a);
	return pFeeArr[3] = a
}

function cPension_calc(a) {
	a = a * parseFloat(trim($("#pension_company_rate").val())) / 100;
	a = Math.round(100 * a) / 100;
	$("#pension_company_fee").text("" + a);
	return cFeeArr[0] = a
}

function cMedical_calc(a) {
	a = a * parseFloat(trim($("#medical_company_rate").val())) / 100;
	a = Math.round(100 * a) / 100;
	$("#medical_company_fee").text("" + a);
	return cFeeArr[1] = a
}

function cUnemployment_calc(a) {
	a = a * parseFloat(trim($("#unemployment_company_rate").val())) / 100;
	a = Math.round(100 * a) / 100;
	$("#unemployment_company_fee").text("" + a);
	return cFeeArr[2] = a
}

function cInjury_calc(a) {
	a = a * parseFloat(trim($("#injury_company_rate").val())) / 100;
	a = Math.round(100 * a) / 100;
	$("#injury_company_fee").text("" + a);
	return cFeeArr[3] = a
}

function cFertility_calc(a) {
	a = a * parseFloat(trim($("#fertility_company_rate").val())) / 100;
	a = Math.round(100 * a) / 100;
	$("#fertility_company_fee").text("" + a);
	return cFeeArr[4] = a
}

function cPAF_calc(a) {
	a = a * parseFloat(trim($("#paf_company_rate").val())) / 100;
	a = Math.round(100 * a) / 100;
	$("#paf_company_fee").text("" + a);
	return cFeeArr[5] = a
}

function bonus_tax_calc() {
	var a = parseFloat(trim($("#pretax_salary_2").val())),
		b = parseFloat(trim($("#annual_bonus").val())),
		c = 0,
		a = a >= dThreshold ? b / 12 : (b - (dThreshold - a)) / 12,
		a = Math.round(100 * a) / 100,
		c = pBonusTax_calc(a, b),
		b = Math.round(100 * (b - c)) / 100;
	$("#aftertax_bonus").val("" + b)
}

function pBonusTax_calc(a, b) {
	var c = 0;
	1500 >= a ? c = 0.03 * b : 1500 < a && 4500 >= a ? c = 0.1 * b - 105 : 4500 < a && 9E3 >= a ? c = 0.2 * b - 555 : 9E3 < a && 35E3 >= a ? c = 0.25 * b - 1005 : 35E3 < a && 55E3 >= a ? c = 0.3 * b - 2755 : 55E3 < a && 8E4 >= a ? c = 0.35 * b - 5505 : 8E4 < a && (c = 0.45 * b - 13505);
	c = Math.round(100 * c) / 100;
	$("#bonus_tax").val("" + c);
	return c
}

function other_tax_calc_1() {
	var a = parseFloat(trim($("#year_income").val())),
		b = parseFloat(trim($("#total_cost").val())),
		a = a - b,
		a = 0 >= a ? 0 : a,
		b = 0,
		c = a;
	15E3 >= c ? b = 0.05 * c : 15E3 < c && 3E4 >= c ? b = 0.1 * c - 750 : 3E4 < c && 6E4 >= c ? b = 0.2 * c - 3750 : 6E4 < c && 1E5 >= c ? b = 0.3 * c - 9750 : 1E5 < c && (b = 0.35 * c - 14750);
	b = Math.round(100 * b) / 100;
	$("#other_tax").val("" + b);
	a = Math.round(100 * (a - b)) / 100;
	$("#aftertax_income").val("" + a)
}

function other_tax_calc_2(a) {
	var b = parseFloat(trim($("#pretax_income").val())),
		c = 0,
		d = 0;
	if (2 == a) d = 4E3 >= b ? b - 800 : 0.8 * b, 2E4 >= d ? c = 0.2 * d : 2E4 < d && 5E4 >= d ? c = 4E3 + 0.3 * (d - 2E4) : 5E4 < d && (c = 13E3 + 0.4 * (d - 5E4));
	else if (3 == a) c = 0.7 * 0.2 * (4E3 >= b ? b - 800 : 0.8 * b);
	else if (4 == a || 5 == a) c = 0.2 * (4E3 >= b ? b - 800 : 0.8 * b);
	else if (6 == a || 7 == a || 8 == a) c = 0.2 * b;
	c = Math.round(100 * c) / 100;
	$("#other_tax").val("" + c);
	a = Math.round(100 * (b - c)) / 100;
	$("#aftertax_income").val("" + a)
}

function userInputCheck_1() {
	var a = citySelectInputCheck("#city_select_warning"),
		b = inputBoxInputCheck("#pretax_salary", "#pretax_salary_warning");
	return a && b ? !0 : !1
}

function userInputCheck_3() {
	var a = citySelectInputCheck("#city_select2_warning"),
		b = inputBoxInputCheck("#pretax_salary_2", "#pretax_salary2_warning"),
		c = inputBoxInputCheck("#annual_bonus", "#annual_bonus_warning");
	return a && b && c ? !0 : !1
}

function userInputCheck_4_1() {
	var a = inputBoxInputCheck("#year_income", "#year_income_warning"),
		b = inputBoxInputCheck("#total_cost", "#total_cost_warning");
	return a && b ? !0 : !1
}

function userInputCheck_4_2() {
	return inputBoxInputCheck("#pretax_income", "#pretax_income_warning") ? !0 : !1
}

function inputBoxInputCheck(a, b) {
	var c = trim($(a).val()),
		d = /^\d*[\.]?\d*$/;
	if ("" != c && d.test(c)) return !0;
	$(a).removeClass("mh-normal_border").removeClass("mh-focus_border").addClass("mh-warning_border");
	$(b).show();
	return !1
}

function citySelectInputCheck(a) {
	if ("" != city) return !0;
	$(a).show();
	return !1
}

function trim(a) {
	return a.replace(/(^\s*)|(\s*$)/g, "")
}

function getBrowserCore() {
	var a = {},
		b = uaMatch();
	if (0 < b.browser.length)
		if ("msie" == b.browser) {
			if (a.name = b.browser, a.version = b.version, b = parseInt(b.version), 8 <= b) {
				var c = !1,
					d = document.documentMode;
				"IE=8" == d ? (a.version = "8.0", c = !0) : "IE=EmulateIE8" == d ? (a.version = "8.0", c = !0) : "IE=7" == d ? (a.version = "7.0", c = !0) : "IE=EmulateIE7" == d ? (a.version = "7.0", c = !0) : "IE=5" == d && (a.version = "5.0", c = !0);
				9 <= b && !c && ("IE=9" == d ? (a.version = "9.0", c = !0) : "IE=EmulateIE9" == d && (a.version = "9.0", c = !0));
				10 <= b && !c && ("IE=10" == d ? a.version = "10.0" :
					"IE=EmulateIE10" == d && (a.version = "10.0"))
			}
		} else a.name = b.browser, a.version = b.version;
	else a.name = "other", a.version = "0";
	return a
}

function uaMatch() {
	var a = navigator.userAgent.toLowerCase(),
		b = null,
		b = /.*(msie) ([\w.]+).*/.exec(a);
	if (null != b) return {
		browser: b[1] || "",
		version: b[2] || "0"
	};
	b = /.*(chrome)\/([\w.]+).*/.exec(a);
	if (null != b) return {
		browser: b[1] || "",
		version: b[2] || "0"
	};
	b = /.*version\/([\w.]+).*(safari).*/.exec(a);
	if (null != b) return {
		browser: b[2] || "",
		version: b[1] || "0"
	};
	b = /.*(firefox)\/([\w.]+).*/.exec(a);
	if (null != b) return {
		browser: b[1] || "",
		version: b[2] || "0"
	};
	b = /(opera).+version\/([\w.]+)/.exec(a);
	if (null != b) return {
		browser: b[1] || "",
		version: b[2] || "0"
	};
	if (null == b) return {
		browser: "",
		version: "0"
	}
};