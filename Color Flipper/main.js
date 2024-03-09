//  an arraw function to genrate random numbers using random() on the click of the button

const getcolor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const hexCode = "#" + randomNumber.toString(16); // this will covert the random number into a hexcode
  document.body.style.backgroundColor = hexCode;
  document.getElementById("color-code").innerText = hexCode;
};

document.getElementById("btn").addEventListener("click", getcolor); // this is an event call

getcolor(); // this is the initial call this will run as the web loads on the browser
