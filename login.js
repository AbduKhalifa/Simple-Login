import * as all from "./main.js";

document.querySelector("#btnLogin").addEventListener("click",function()
{
    var theName = all.L_name.value;
    var thePass = all.L_pass.value;
    var opened =0;
    var checkAccount = function test()
    {

        if(all.arrOfUsers.some( (ele) => { 
            opened = {
                email: ele.email,
                name: ele.name
            };
            return ele.email === theName && ele.pass === thePass;
        } ))
        {
            return true;
        }
        else
        {
            return false
        }
    }

    if(checkAccount())
    {
        all.login(opened);
        console.log(opened);
    }
    else
    {
        all.warning("warning",`
        <img src="./error-48245.png"  height=30  alt="">
        <span>Error</span>
        `);

    }

    all.clearForm();
})
