let pages = document.getElementsByClassName('page')

function navClick (pageName) {
  for (let page of pages) {
    page.classList.add('hidden')
  }
  document.getElementById(pageName).classList.remove('hidden')
}
