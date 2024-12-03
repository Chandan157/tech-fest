const windowWidth = window.innerWidth;
const numberList = document.querySelectorAll(".number");
const emailList = document.querySelectorAll(".mail");
const numberListCopy = [...numberList];
const emailListCopy = [...emailList];

const contactDetails = [
  { number: "+91 6307 196 019", email: "" },
  { number: "+91 6200 408 819", email: "" },
  { number: "+91 6296 499 137", email: "" },
  { number: "+91 8101 492 928", email: "" },
  { number: "+91 8927 109 852", email: "" },
  { number: "+91 6909 764 006", email: "" },
  { number: "7", email: "" },
  { number: "8", email: "" },
  { number: "9", email: "" },
];

setInterval(() => {
  if (window.innerWidth < 1201) {
    numberList.forEach((element) => {
      element.innerHTML = `<i class="fa-solid fa-phone"></i>`;
    });
    emailList.forEach((phone) => {
      phone.innerHTML = `<i class="fa-solid fa-envelope"></i>`;
    });
  } else {
    numberList.forEach((element, index) => {
      element.innerHTML = contactDetails[index].number;
    });
    emailList.forEach((phone, index) => {
      phone.innerHTML = contactDetails[index].email;
    });
  }
  // else{
  //     numberList.forEach((element)=>{
  //         element.innerHTML=numberListCopy.
  //     })
  // }
  //   console.log("recheck");
}, 50);

window.addEventListener("load", () => {});
console.log(numberList);

// window.addEventListener("resize", () => {
//   if (windowWidth < 1201) {
//     numberList.forEach((element) => {
//       element.innerHTML = `<i class="fa-solid fa-phone"></i>`;
//     });
//     emailList.forEach((phone) => {
//       phone.innerHTML = `<i class="fa-solid fa-envelope"></i>`;
//     });
//   }
//   console.log("resize");
// });
