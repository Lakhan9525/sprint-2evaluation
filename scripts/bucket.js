// On clicking remove button the item should be removed from DOM as well as localstorage.


cartdata=JSON.parse(localStorage.getItem("coffee"))||[];
var total1=cardata=JSON.parse(localStorage.getItem("coffee"));
var total1=cartdata.reduce(function(sum,e,i,arr1){
    return sum+Number(e.price)
},0)
document.querySelector("#total-div").append (total1);




cartdata.map(function(e,i){
        let box=document.createElement("div");
        let image=document.createElement("img");
        image.src=e.image;
        let name=document.createElement("p");
        name.innerText=e.title;
        let price=document.createElement("p");
        price.innerText=e.price;

        let remove=document.createElement("button");
        remove.setAttribute("id","remove_coffee");
        remove.innerText="remove";
        remove.addEventListener("click",function(){
            removeitem(e,i)
        })
        box.append(image,name,price,remove);
        document.querySelector("#bucket").append(box);

})
function removeitem(e,i){
    console.log(e,i);
    cartdata.splice(i,1);
    localStorage.setItem("coffee",JSON.stringify(cartdata));
    window.location.reload();
}




