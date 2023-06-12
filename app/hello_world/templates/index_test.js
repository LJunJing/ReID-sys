const titleEle = document.querySelector(".title-icon");
const sideBarEle = document.querySelector(".sidebar");
titleEle.addEventListener("click", function () {
  sideBarEle.classList.toggle("active");
});

// function uploadImage() {
//   var get_img = document.getElementById("input_img");
//   get_img.onchange = function () {
//     console.log(this.files, this.value);
//     // var file = this.files;
//     // console.log(file);
//     // var reader = new FileReader();
//     // reader.readAsDataURL(file[0]);
//     // reader.onload = function () {
//     //   var image = document.createElement("img");
//     //   image.width = "1000";
//     //   image.src = reader.result;
//     //   var showPicture = document.getElementById("show_img");
//     //   showPicture.append(image);
//     // };
//   };
// }
const input_imgEle = document.querySelectorAll(".picUpload");
Array.from(document.querySelectorAll(".picUpload")).forEach((input_imgEle) => {
  input_imgEle.onchange = function () {
    let files = input_imgEle.files[0]; // 传入的图像文件
    const fileRead = new FileReader(); // 新建读取器
    fileRead.readAsDataURL(files); // 读取器读图像文件
    let that = this;
    fileRead.onload = function () {
      let imgEle = document.createElement("img");
      imgEle.src = this.result;
      imgEle.setAttribute("width", "100px");
      console.log(this, that);
      that.parentElement.parentElement.lastElementChild.append(imgEle);
    };
  };
});
