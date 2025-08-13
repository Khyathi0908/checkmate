const form=document.getElementById("signForm");
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const passwordInput=document.getElementById("password");
const confirmPasswordInput=document.getElementById("confirmPassword");
const smessage=document.getElementById("successMessage");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let isValid=true;
    if(nameInput.ariaValueMax.trim()===""){
        setError(nameInput,"Name cannot be empty");
        isValid=false;
    }
    else{
        clearError(nameInput);
    }
    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)){
        setError(emailInput,"Enter a valid email");
        isValid=false;
    }
    else{
        clearError(emailInput);
    }
    if(passwordInput.value.length<6){
        setError(passwordInput,"Password must be atleast 6 characters");
        isValid=false;
    }
    else{
        clearError(passwordInput);
    }
    if(!confirmPasswordInput.value!==passwordInput.value){
        setError(confirmPasswordInput,"Passwords do not match");
        isValid=false;
    }
    else{
        clearError(confirmPasswordInput);
    }
    if(isValid){
        smessage.textContent="SignUp Successful";
        form.reset();
    }
    else{
        smessage.textContent="";
    }
});
function setError(input,message){
    const parent=input.parentElement;
    const small=parent.querySelector("small");
    small.textContent=message;
}
function clearError(input){
    const parent=input.parentElement;
    const small=parent.querySelector("small");
    small.textContent="";
}