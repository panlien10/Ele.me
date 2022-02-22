window.onload=function(){
	document.onscroll=function(){
		let s1=document.documentElement.scrollTop;
		let s2=document.body.scrollTop;
		let scroll = s1==0?s2:s1;
		let width=document.documentElement.clientWidth;
		let search=document.getElementsByClassName('search-location')[0];
		
		if(scroll>=width*0.13){
			//第二个窗口固定在顶部
			search.style.position="fixed";
			search.style.left='0';
			search.style.top='0';
		}
		else{
			//不固定
			search.style.position='static';
		}
	}
}