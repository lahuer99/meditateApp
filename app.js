let  button=document.querySelectorAll('.divelement:nth-of-type(1) > button')
let timerspan=document.querySelector('#timer')
let  rbutton=document.querySelectorAll('.divelement:nth-of-type(3) > button')

let pbutton=document.querySelector('.divelement:nth-of-type(2) > button')

let odo=document.querySelector('audio')
let vdo=document.querySelector('video')

button.forEach((b)=>{
	b.addEventListener('click',(e)=>{
			let ttime=2;
			if(e.target.innerHTML==='2 minutes'){
				ttime=2;
			}
			else if(e.target.innerHTML==='5 minutes'){
				ttime=5;
			}
			if(e.target.innerHTML==='10 minutes'){
				ttime=10;
			}

			timerspan.innerHTML=`${ttime}:00`
			setTimeout(startTimer(ttime),1000);
		})
})

const startTimer=(ttime)=>{
	let seconds=59;
	ttime--;
	timerspan.innerHTML=`${ttime}:${seconds}`

	var runTimer=setInterval(()=>{
					seconds--;
					if(seconds==0){
						ttime--;
					}
					seconds=seconds==0?59:seconds;
					if(ttime==-1){
						timerspan.innerHTML=`0:00`
						clearInterval(runTimer)
					}
					else{
						console.log(`${ttime}:${seconds}`)
						timerspan.innerHTML=`${ttime}:${seconds}`
					}
				},1000)
}

rbutton.forEach((b)=>{
	b.addEventListener('click',(e)=>{
		var arr = Array.prototype.slice.call(rbutton);
		console.dir(vdo.firstElementChild.getAttribute('src'))
		if(arr.indexOf(b)==1){
			vdo.firstElementChild.setAttribute('src','./video/beach.mp4')
			odo.firstElementChild.setAttribute('src','./sounds/beach.mp3')
		}
		else{
			vdo.firstElementChild.setAttribute('src','./video/rain.mp4')
			odo.firstElementChild.setAttribute('src','./sounds/rain.mp3')
		}
		b.classList.toggle('clicked')
		rbutton[(arr.indexOf(b)+1)%2].classList.remove('clicked')
	})
})


pbutton.addEventListener('click',function(e){
	let ii=this.lastElementChild.lastElementChild.lastElementChild
	ii.classList.toggle('fa-play')
	ii.classList.toggle('fa-pause')

	if(odo.paused){
		odo.play()
		vdo.play()
	}
	else{
		odo.pause()
		vdo.pause()
	}
})
