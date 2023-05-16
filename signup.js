import * as all from "./main.js";
document.querySelector("#btnCreateNew").addEventListener("click",function()
{


    if(
        all.check(all.C_theName.value,/^[A-Z][a-z]{2,13}( [A-Z][a-z]{2,13})?$/) &&
        all.check(all.C_theEmail.value,/^(([A-Za-z]{2,4}))\w{0,9}@gmail.com$/) && 
        all.check(all.C_thePassword.value,/^\w{8,20}$/)
    )
    {
        all.addUser();
        all.warning("news","Success");
        all.clearForm();
    }
    else
        all.warning("news","Worng with data");


    
})