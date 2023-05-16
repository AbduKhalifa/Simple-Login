

export var C_theName = document.querySelector('[name="c-name"]');
export var C_theEmail = document.querySelector('[name="c-email"]');
export var C_thePassword = document.querySelector('[name="c-pass"]');
export var L_name = document.querySelector('[name="l-name"]');
export var L_pass = document.querySelector('[name="l-pass"]');
export var arrOfUsers = [];


if(localStorage.getItem("users") === null)
{
    arrOfUsers = [];
}
else
{
    arrOfUsers = localStorage.getItem("users");
    swapToJs();
}





// use this function to swap JSON from string to Js
export function swapToJs()
{
    arrOfUsers = JSON.parse(arrOfUsers);
}

// use this function to swap JSON from Js to string
export function swapToString()
{
    arrOfUsers = JSON.stringify(arrOfUsers);

}


// use this function to check the inputs valid or not
export function check(content,reg)
{
    if(reg.test(content))
        return true
    else
        return false
} 


// Call this function for add Account in database
export function addUser()
{
    var user = {
        name: C_theName.value,
        email: C_theEmail.value,
        pass: C_thePassword.value
    };
    if( arrOfUsers.every((currentElement)=>{ return user.email != currentElement.email}) )
    {
        arrOfUsers.push(user);
        swapToString();
        localStorage.setItem("users",arrOfUsers);
        swapToJs();
    }
    else{
        warning("news","The email is already used");
    }
    
}


// warning function
export function warning(id,content)
{
    var theElement = document.querySelector(`#${id}`);
    theElement.innerHTML = content;
    theElement.style.opacity = 1;
    setTimeout(() => {
        theElement.style.opacity = 0;
    }, 3000);
    
}


// Use this function to Login in webApp
export function login(object)
{
    localStorage.setItem("userOpen",JSON.stringify(object));

}













