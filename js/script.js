let menu = document.querySelector('#bars');
let navigation = document.querySelector('.navigation');

menu.onclick = () =>{
menu.classList.toggle('fa-times');
navigation.classList.toggle('active');
}

window.onscroll = () => {
	menu.classList.remove('fa-times');
	navigation.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () =>{
	document.querySelector('#search').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
	document.querySelector('#search').classList.remove('active');
}  
