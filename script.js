const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

VANTA.CELLS({
    el: "#container1",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 2.00,
    size: 1.00,
    speed: 5.00
  });

  
const r = new rive.Rive({
  
src: '412-781-mad-scientist-login.riv',
canvas: document.getElementById("canvas"),
autoplay: true,
stateMachines: 'State Machine 1',
fit: rive.Fit.cover,
onLoad: ( ) => {
const inputs = r.stateMachineInputs('State Machine 1')
const checking = inputs.find(i=>i.name === 'Checking')
const success = inputs.find(i=>i.name === 'Success')
const fail = inputs.find(i=>i.name === 'Fail')
eInput.onkeyup = ()=>{checking.fire();}
pInput.onkeyup = ()=>{checking.fire();}
form.onsubmit = (e) => {
e.preventDefault(); //preventing from form submitting
//if email and password is blank then add shake class in it else call specified function
(eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail(); 
(pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

eInput.onkeyup = ()=>{checking.fire();} //calling checkEmail function on email input keyup
pInput.onkeyup = ()=>{checking.fire();} //calling checkPassword function on pass input keyup

function checkEmail(){ //checkEmail function
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
  if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
    eField.classList.add("error");
    eField.classList.remove("valid");
    let errorTxt = eField.querySelector(".error-txt");
    //if email value is not empty then show please enter valid email else show Email can't be blank
    (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
  }else{ //if pattern matched then remove error and add valid class
    eField.classList.remove("error");
    eField.classList.add("valid");
  }
}

function checkPass(){ //checkPass function
  if(pInput.value == ""){ //if pass is empty then add error and remove valid class
    pField.classList.add("error");
    pField.classList.remove("valid");
  }else{ //if pass is empty then remove error and add valid class
    pField.classList.remove("error");
    pField.classList.add("valid");
  }
}

if(!eField.classList.contains("error") && !pField.classList.contains("error")){
  
  setTimeout(function()
  {
    success.fire();
  }, 1000); // 1000 = 1 seconds
  setTimeout(function()
{
  window.location.href = "home.html"; //redirecting user to the specified url which is inside action attribute of form tag// Delayed code in here
}, 2500); // 2500 = 2.5 seconds

}
else {
  fail.fire();
}

    }
  }
});





