var iteam=JSON.parse(localStorage.getItem("coffee"));
function my(){
    event.preventDefault();
    let status="open";


    let mypromise=new Promise(function(resolve,reject){
        setTimeout(function(){
            if(status="open"){
                resolve(iteam);
                alert("your order id accepted");

            }
            else{
                reject(status);
            }
        },0)
    })

    mypromise.then(function(){
        setTimeout(function(){
            alert("your order is being prepared");
            setTimeout(function(){
                alert("your order id being packed");
                setTimeout(function(){
                    alert("your order id is out of delivery");
                    setTimeout(function(){
                        alert(" order deliverd");
                    },12000)

                },10000)

            },8000)
        },3000)
    })
}