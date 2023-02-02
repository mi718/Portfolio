const arrowOpenAbout = document.getElementById("arrowOpenAbout")
const extraAboutInfo = document.getElementById('extraAboutInfo')
const arrowCloseAbout = document.getElementById('arrowCloseAbout')
const myCvBtn = document.getElementById('myCV')

arrowOpenAbout.addEventListener('click', function(){
 extraAboutInfo.style.display = 'block'
 myCvBtn.style.display = 'none'
})

arrowCloseAbout.addEventListener('click', function(){
 extraAboutInfo.style.display = 'none'
 myCvBtn.style.display = 'block'
})