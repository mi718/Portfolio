const arrowOpenAbout = document.getElementById("arrowOpenAbout")
const extraAboutInfo = document.getElementById('extraAboutInfo')
const arrowCloseAbout = document.getElementById('arrowCloseAbout')
const myCvBtn = document.getElementById('myCV')
const arrowOpenSkills = document.getElementById('arrowOpenSkills')
const arrowCloseSkills = document.getElementById('arrowCloseSkills')

arrowOpenAbout.addEventListener('click', function(){
 extraAboutInfo.style.display = 'block'
 myCvBtn.style.display = 'none'
 arrowOpenAbout.style.display = 'none'
})

arrowCloseAbout.addEventListener('click', function(){
 extraAboutInfo.style.display = 'none'
 myCvBtn.style.display = 'block'
 arrowOpenAbout.style.display = 'block'
})

arrowOpenSkills.addEventListener('click', function(){
 skillsTxtExtension.style.display  = 'block'
 arrowOpenSkills.style.display = 'none' 
})

arrowCloseSkills.addEventListener('click', function(){
 skillsTxtExtension.style.display  = 'none'
 arrowOpenSkills.style.display = 'block'
})