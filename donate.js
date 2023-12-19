let donate_popup=document.getElementById("donate_popup");
let btn=document.getElementById("donatebtn")
btn.addEventListener("click",popup);
  function popup()
  {
     donate_popup.style.display="block";
  }
  function cancel()
  {
    donate_popup.style.display="none";
  }