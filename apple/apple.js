$(document).ready(function(){
	$('.abc').addClass(' touming');
})
window.onload = function(){
	var fdj = document.getElementById('fdj');
	var hide = document.getElementsByClassName('hide');
	fdj.onclick = function(){
                document.getElementById('header_two_div').style.display = 'block';
                document.getElementById('header_three_div').style.display = 'block';
                document.getElementById('htd_o_ul').setAttribute('class','htd_o_ul htd_o_ul_demo')
                document.getElementById('header_one').style.display = 'none';
                document.getElementById('htdinput').setAttribute('autofocus','autofocus');
                document.body.style.width = '100%';
                document.body.style.height = '100%';
                document.body.style.overflow = 'hidden';
        for(var i = 0;i<hide.length;i++){
        	hide[i].style.display = 'inline-block';
        	hide[i].setAttribute("class", "hide hidden");
        }
        var header_two_div = document.getElementById('header_two_div');
        header_two_div.onclick = function(){
                header_two_div.style.display = 'none';
                document.getElementById('header_one').style.display = 'block';
                document.getElementById('header_three_div').style.display = 'none';
                for(var i = 0;i<hide.length;i++){
                         hide[i].style.display = 'none';
                         hide[i].setAttribute("class", "hide");
                         timer = null;
                }
                document.body.style.overflow = 'scroll';
                for(var i = 0 ;i<hide.length;i++){
                        hide[i].style.display = 'inline-block'
                }
        }
    } 
}
