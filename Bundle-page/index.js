var xpos = 1, ypos = 1, count = 0;
var currentFrame;
var direction = ">";
currentFrame = $(".gun-sprite")[0];
const height = -19.3125;
const left = -14.125;

setInterval(function(){
    if(xpos === 0 || xpos === 8){
        currentFrame.style.top = (height*ypos) + "rem";        
        ypos++;  
        count++;

        switch(direction){
            case ">":
                direction = "<";
                break;
            case "<":
                direction = ">";
                break;
        }
    }

    currentFrame.style.left = (left*xpos) + "rem";
    count++;

    switch(direction){
        case ">":
            xpos++; 
            break;
        case "<":
            xpos--;
            break;
    }

    if(count === 48){
        count = 0;
        direction = ">";
        currentFrame.style.top = "0rem";
        currentFrame.style.left = "0rem";
        xpos = 1;
        ypos = 1;
    }
}, 120);

// JS cho Carousel và caption
    // Lấy các phần tử cần thiết
    var carousel = document.querySelector(".carousel");
    var images = document.querySelectorAll(".carousel-image");
    var prev = document.querySelector(".carousel-button.prev");
    var next = document.querySelector(".carousel-button.next");

    // Khai báo biến lưu trữ chỉ số ảnh hiện tại
    var index = 0;

    // Hàm hiển thị ảnh theo chỉ số
    function showImage(index) {
      // Ẩn tất cả các ảnh
      for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
      }
      // Hiển thị ảnh có chỉ số index
      images[index].classList.add("active");
    }

    // Hàm chuyển sang ảnh trước đó
    function prevImage() {
      // Giảm chỉ số xuống 1
      index--;
      // Nếu chỉ số nhỏ hơn 0 thì chuyển sang ảnh cuối cùng
      if (index < 0) {
        index = images.length - 1;
      }
      // Hiển thị ảnh có chỉ số index
      showImage(index);
    }

    // Hàm chuyển sang ảnh tiếp theo
    function nextImage() {
      // Tăng chỉ số lên 1
      index++;
      // Nếu chỉ số lớn hơn số ảnh thì chuyển về ảnh đầu tiên
      if (index > images.length - 1) {
        index = 0;
      }
      // Hiển thị ảnh có chỉ số index
      showImage(index);
    }

    // Thêm sự kiện click cho nút prev
    prev.addEventListener("click", prevImage);

    // Thêm sự kiện click cho nút next
    next.addEventListener("click", nextImage);