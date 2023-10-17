
document.querySelector(".bx-search").addEventListener("click", function() {
  if (document.querySelector("#search-area").classList.contains("d-none")) {
    document.querySelector("#search-area").classList.remove("d-none");
  } else {
    document.querySelector("#search-area").classList.add("d-none");
  }
});

document.querySelector(".bx-menu").addEventListener("click", function() {
    document.querySelector(".nav-left").classList.add("active");   
})

document.querySelector(".bx-x").addEventListener("click", function() {
  document.querySelector(".nav-left").classList.remove("active"); 
})

document.querySelector(".course-active").addEventListener("click", function() {
  if (document.querySelector(".courses-hidden").classList.contains("active")) {
    document.querySelector(".courses-hidden").classList.remove("active");
  } else {
    document.querySelector(".courses-hidden").classList.add("active");
  }
});
const courseActiveElements = document.querySelectorAll('.course-active');
courseActiveElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Tìm phần tử div "courses-hidden" cùng cấp với phần tử p được click
    const coursesHr = element.nextElementSibling;
    const coursesHiddenElement = coursesHr.nextElementSibling;

    // Kiểm tra trạng thái hiển thị và thay đổi nó
    if (coursesHiddenElement.style.display === 'none' || coursesHiddenElement.style.display === '') {
      coursesHiddenElement.style.display = 'block';
    } else {
      coursesHiddenElement.style.display = 'none';
    }
  });
});

