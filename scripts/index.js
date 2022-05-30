// Add the coffee to local storage with key "coffee"


async function coffee(){
    let url="https://masai-mock-api.herokuapp.com/coffee/menu";
    let res=await fetch(url);
    let data=await res.json();
    append(data.menu.data);
    console.log("data:",data);
}
coffee();

let arr1=JSON.parse(localStorage.getItem("coffee"))||[];

let length=arr1.length;
console.log(length);
document.querySelector("#coffee_count").append(length);

function append(data){
    let container=document.getElementById("menu");
    container.innerHTML=null;
    data.forEach(function(el){
        //let box=document.createElemnt("div");
        let image=document.createElement("img");
        image.src=el.image;
        let name=document.createElement("p");
        name.innerText=el.title;
        let price=document.createElement("p");
        price.innerText=el.price;

        let bucket=document.createElement("button");
         bucket.innerText="add_to_bucket";
           bucket.setAttribute=("id","add_to_bucket");

           bucket.addEventListener("click",function(){
               additem(el);
           })
           //box.append(image,name,price,bucket);
           container.append(image,name,price,bucket);



    })
}
//let arr1=JSON.parse(localStorage.getItem("coffee"))||[];
function additem(el){
    console.log(el);
    arr1.push(el);
    localStorage.setItem("coffee",JSON.stringify(arr1));
}