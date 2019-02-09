let pageNumber = 0
//page content
const pages = [
  {copy: "a Brooklyn-based graphic designer", background: "#edc7a9", circle: "#3e78ed" },
  {copy: "Kanye West's biggest fan", background: "#a1fffe", circle: "#e34a47" },
  {copy: "looking for a job at the start of October", background: "#d3c7f3", circle: "#f7fe00"},
  {copy: `letting you <a href="pdf.pdf">download her PDF</a>`, background: "#faffb8", circle: "#b472e6"}
]
//data 
const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.rand")
const outputTag = document.querySelector("h2")
const backgroundTag = document.querySelector("body")
const circleTag = document.querySelector("section div.circle")

//features
const next = function() {
  pageNumber += 1
  if(pageNumber > pages.length - 1) {
    pageNumber = 0
  }
  updateSection()
}

const previous = function() {
  pageNumber -= 1
  if(pageNumber < 0) {
    pageNumber = pages.length - 1
  }
  updateSection()
}

const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)
  updateSection()
}

const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  backgroundTag.style.backgroundColor = pages[pageNumber].background
  circleTag.style.backgroundColor = pages[pageNumber].circle
}
//execute on clicks
nextTag.addEventListener("click", function() {
	next()
})
previousTag.addEventListener("click", function() {
	previous()
})
randomTag.addEventListener("click",function() {
  random()
})

//execute on key
document.addEventListener("keyup", function(event) {
	console.log(event)
  if (event.key == "ArrowRight") {
      next()
  }
  if(event.key == "ArrowLeft") {
    previous()
  }
})


