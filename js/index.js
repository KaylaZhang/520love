// JavaScript Document

//==================获取产品价格==========================================================================
	$(function(){
		var packagesApi = new yllyAPI();

				packagesApi.access([
		      {
		        url : 'https://www.ylly.com:443/api/v1/packages/search/?package_id=12340866',
		        success : function(res) {
		             $(".proList02 .bigTxt").html(res.results[0].price.substr(1));
		        }
		    },
		    {
		        url : 'https://www.ylly.com:443/api/v1/packages/search/?package_id=12341136',
		        success : function(res) {
		             $(".proList03 .bigTxt").html(res.results[0].price.substr(1));
		        }
		    }
		]);		
	});






	    
		

















