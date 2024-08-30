function revealSection(sectionId) {
  
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
      section.classList.add('hide');
      section.classList.remove('show');
    });
    
    
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('show');
    selectedSection.classList.remove('hide');
}



function changeTheme() {
  var link = document.getElementById('my-theme');
  if (link.getAttribute("href") == "css/main.css/styles.css") {
      link.setAttribute("href", "css/main.css/stylesv3.css");
  } else {
      link.setAttribute("href", "css/main.css/styles.css");
  }
}