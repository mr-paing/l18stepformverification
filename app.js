var getdots = document.getElementsByClassName("dot");
var getpages = document.getElementsByClassName("page");
// console.log(getpages);
var getform = document.getElementById('form');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');
// console.log(getprevbtn);
const getretcontainer = document.getElementById('result-container');
var objkeys = ["email","password","firstname","lastname","dob","phone","address"];
var datas = [];


let curridx = 0;

showpage(curridx);

function showpage(num){
    // console.log(num)

    getpages[num].style.display = "block";
    
    num === 0 ? getprevbtn.style.display = "none" : getprevbtn.style.display="inline-block";

    num === (getpages.length-1) ? getnextbtn.textContent = "Submit" : getnextbtn.innerText = "Next";

    dotindicator(num)
}

function dotindicator(num){
    // console.log('hi I am working');

    for(var x = 0;x < getdots.length; x++){
        getdots[x].classList.remove("active");
    }

    getdots[num].className += " active";
    // getdots[num].classList.add("active");
}

function gonow(num){
    // console.log(num);
    // getpages[curridx].style.display = "none";

    // curridx = curridx + num;
    // // console.log(curridx);

    // if(curridx >= getpages.length){
    //     getform.submit();
    // }

    // showpage(curridx);

    // formvalidation();
    // console.log(formvalidation());

// Method-1
    // if(formvalidation()){
    //     getpages[curridx].style.display = "none";

    //     curridx = curridx + num;
    //     // console.log(curridx);
    
    //     if(curridx >= getpages.length){
    //         getform.submit();
    //     }
    
    //     showpage(curridx);
    // }


    // if(num === 1 && formvalidation()){
    //     getpages[curridx].style.display = "none";

    //     curridx = curridx + num;
    //     // console.log(curridx);
    
    //     if(curridx >= getpages.length){
    //         getform.submit();
    //     }
    
    //     showpage(curridx);
    // }


// Method 2

    // if(!formvalidation()){
    //     return false;
    // }

    // getpages[curridx].style.display = "none";

    //     curridx = curridx + num;
    //     // console.log(curridx);
    
    //     if(curridx >= getpages.length){
    //         getform.submit();
    //     }
    
    //     showpage(curridx);



    // if(num === 1 && !formvalidation()){
    //         return false;
    //     }

    //     getpages[curridx].style.display = "none";
    
    //         curridx = curridx + num;
    //         // console.log(curridx);
        
    //         if(curridx >= getpages.length){
    //             getform.submit();
    //         }
        
    //         showpage(curridx);



// Method 3

        // if(!formvalidation()) return false;

        // getpages[curridx].style.display = "none";
    
        //     curridx = curridx + num;
        //     // console.log(curridx);
        
        //     if(curridx >= getpages.length){
        //         getform.submit();
        //     }
        
        //     showpage(curridx);



        if(num === 1 && !formvalidation()) return false;

        getpages[curridx].style.display = "none";
    
            curridx = curridx + num;
            // console.log(curridx);
        
            if(curridx >= getpages.length){
                // getform.submit();

                getform.style.display = "none"; 
                getretcontainer.style.display = 'block';

                result(datas);

                return false;  // to stop next page if not equal above condition
            }
        
            showpage(curridx);
            



}

function* genfun(){
    var index = 0;

    while(index < objkeys.length){
        yield index++;
    }

}
// console.log(genfun().next().value);

let gen = genfun();
// console.log(gen.next().value);
// console.log(gen.next().value);




function formvalidation(){
    var getvalid = true;

    var getcurrinput = getpages[curridx].getElementsByTagName('input');
    // console.log(getcurrinput);
    // console.log(getcurrinput[0].value);

    for(var x = 0; x < getcurrinput.length; x++){
        // console.log(getcurrinput[x].value);
        if(getcurrinput[x].value === ''){
            getcurrinput[x].classList.add('invalid');
            getvalid = false;
        }else{

            // console.log('x value is = ', x);
            // console.log(objkeys[x]);
            // console.log(getcurrinput[x].value);

            // let obj = {
            //     key : getcurrinput[x].value
            // }

            
        // Method 1
            // console.log('Gen Value is = ', gen.next().value);
            // const keys = objkeys[gen.next().value];
            // const values = getcurrinput[x].value;
            // const obj = {
            //     [keys] : values
            // }
            // datas.push(obj);

// object ထဲတွင် dynamic ဖြစ်စေလိုလျှင် key ကို [] array ထဲမှာထားပေး, သို့မှသာ ထိုထဲရှိသော value ကို variable အနေနဲ့ သိမည်၊



        // Method 2
            // const keys = objkeys[gen.next().value];
            // const values = getcurrinput[x].value;
            // var obj = {};
            // obj[keys] = values; //add from outside
            // datas.push(obj);


        // Method 3 
            const keys = objkeys[gen.next().value];
            const values = getcurrinput[x].value;
            datas.push({[keys]:values}); // add directly without create object

        }
    }

    if(getvalid){
        getdots[curridx].className += " done";
    }

    return getvalid;
}


function result(){
    // console.log(datas);

    getretcontainer.innerHTML = `
        <ul>
            <li>Name : ${datas[2].firstname} ${datas[3].lastname} </li>
            <li>Email : ${datas[0].email} </li>
            <li>Password : ${datas[1].password} </li>
            <li>Date Of Birth : ${datas[4].dob} </li>
            <li>Phone : ${datas[5].phone} </li>
            <li>Address : ${datas[6].address} </li>
        </ul>

        <button type="submit" class="submit-btn" onclick="submitbtn()"> Apply Now </button>
    `;

}

function submitbtn(){
    getform.submit();
}
