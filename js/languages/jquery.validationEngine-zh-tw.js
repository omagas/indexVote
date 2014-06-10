

(function($) {
	$.fn.validationEngineLanguage = function() {};
	$.validationEngineLanguage = {
		newLang: function() {
			$.validationEngineLanguage.allRules = 	{
					"required":{    			// Add your regex rules here, you can take telephone as an example
						"regex":"none",
						"alertText":"* 請輸入內容",
						"alertTextCheckboxMultiple":"* 請選擇一個選項",
						"alertTextCheckboxe":"* 請勾選一或複數個選項"},
					"length":{   // Like:  *請輸入 0 到 3 個字元長度
						"regex":"none",
						"alertText":"* 請輸入 ",
						"alertText2":" 到 ",
						"alertText3": " 個字元長度"},
					"maxCheckbox":{
						"regex":"none",
						"alertText":"* 勾選的選項已超過 ",
						"alertText2":" 個以上"},	
					"minCheckbox":{  // Like: * 請勾選 2 個以上的選項
						"regex":"none",
						"alertText":"* 請勾選 ",
						"alertText2":" 個以上的選項"},	
					"confirm":{
						"regex":"none",
						"alertText":"* 與確認項目不符合"},
					"tel":{
						"regex": /^0[0-9]{1,3}\-[0-9]{7,8}$/,
						"alertText": "* 電話格式錯誤。"},
					"cellphone":{
						"regex": /^09[0-9]{8}$/,
						"alertText":"* 手機號碼格式錯誤"},
					"email":{
						// Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
						"regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/,
						"alertText":"* E-Mail格式錯誤"},
					"integer":{
						"regex": /^[-+]?\d+$/,
						"alertText":"* 請輸入整數"},
					"number":{
						// Number, including positive, negative, and floating decimal. Credit: bassistance
						"regex": /^[-+]?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)$/,
						"alertText":"* 請輸入數字(可包含小數點)"},
					"date":{
						// Date in ISO format. Credit: bassistance
                         "regex":/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                         "alertText":"* 日期格式為 YYYY-MM-DD"},
                    "ip":{
                    	"regex": /^([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+$/,
                    	"alertText":"* IP格式錯誤"},      
                    "url":{
                    	"regex":/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    	"alertText":"* 網址格式錯誤"},
					"onlyNumber":{
						"regex":/^[0-9\ ]+$/,
						"alertText":"* 只能輸入數字"},	
					"noSpecialCaracters":{
						"regex":/^[0-9a-zA-Z]+$/,
						"alertText":"* 請輸入數字或英文字母"},		
					"onlyLetter":{
						"regex":/^[a-zA-Z\ \']+$/,
						"alertText":"* 只能輸入英文"},
					"startTest":{
						"regex":/^(TEST).*$/i,
						"alertText":"* 請輸入TEST開頭的字句"},
					"testAJAX":{
						"file":"/example/ajax_validation_engine.php",
						"extraData":"testAJAX",
						"alertTextOk":"OK",	
						"alertTextLoad":"* 檢查中，請稍候",
						"alertText":"* 驗證失敗"},
					"testFnCall":{
						"nname":"testFnCall",
						"alertText":"* 輸入錯誤"}
					}
		}
	}
})(jQuery);

$(document).ready(function() {	
	$.validationEngineLanguage.newLang()
});


function testFnCall (fieldId)
{
	if (fieldId == 'testFuncCall')
	{
		var myval = $('#testFuncCall').val();
	} else
	{
		var myval = $('#atestFuncCall').val();
	}
	
	var answer = $('#testFuncCallAnswer').html();
	
	if (myval == answer)
	{
		return true;
	} else 
	{
		return false;
	}
}