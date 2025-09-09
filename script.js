const allPlantsContainer = document.getElementById("all-plants-container");
const categoriesContainer = document.getElementById("categories-container");
const cartContainer = document.getElementById("cart-container");
const totalPriceContainer = document.getElementById("total-money-container");

let addToCart =[]

const allPlantsLoad = () =>{
    fetch('https://openapi.programming-hero.com/api/plants')
    .then((res)=> res.json())
    .then((data)=> {
        allPlantsShow(data.plants)
    })
}

// {
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500
// }



const allPlantsShow= (plants) =>{
    // console.log(plants)
    for(const plant of plants){
        
        const description = plant.description
        let shortDescription = "";
        
        for(let i=0; i<40; i++){
            let sd = description[i];
            shortDescription= shortDescription+ sd;
        }
        // console.log(shortDescription)

        allPlantsContainer.innerHTML += `
        
          <div class="rounded-3xl shadow-lg overflow-hidden h-[400px]">
        <img src=${plant.image} alt="" class="h-[190px] w-full object-cover">
        <div id="${plant.id}" class="p-5 space-y-2">
        <h2 class="text-[18px] font-semibold">${plant.name}</h2>
        <p class="text-[12px] font-normal">${shortDescription}...</</p>
        <div class="flex items-center justify-between">
        <p class="text-[15px] text-[#15803D] bg-[#DCFCE7] rounded-3xl p-2">${plant.category}</p>
        <p class="text-[15px]">$<span>${plant.price}</span></p>
        </div>
        <button class="btn text-[14px] text-white bg-[#15803D] rounded-3xl w-full">Add To Cart</button>
        </div>
        </div>
        
        `
    }
    
}
// const cartAddParentF = ()=>{
//     console.log('aldfjljfdlj')
//     allPlantsContainer.addEventListener('click',(e)=>{
//     if(e.target.innerText === 'Add To Cart'){
//         // console.log(e)
//         handleCartAll(e)
        
//     }
    
// })
// }

// const handleCartAll = (e)=>{
    
//     const tree= e.target.parentNode.children[0].innerText
//     const money= e.target.parentNode.children[2].children[1].innerText
//     const realMoney= e.target.parentNode.children[2].children[1].children[0].textContent;
    
//     console.log(realMoney)
//     const id= e.target.parentNode.id
    
//     addToCart.push({
//         title: tree,
//         price: money,
//         id:id,
//         realPrice: realMoney
//     })
//     // showCart(addToCart)
// }


const loadCategories = ()=> {
    fetch('https://openapi.programming-hero.com/api/categories')
    .then((res)=> res.json())
    .then((data)=> {
        showCategories(data.categories)
    })
}

const showCategories = (categories)=> {
    
    for(const cat of categories){
        
        categoriesContainer.innerHTML += `
        <h1 onclick="loadPlantByCategories(${cat.id});" id="${cat.id}" class="rounded-sm text-[15px] text-gray-600 hover:bg-[#15a850] p-3 ">${cat.category_name}</h1>
        `
    }

    categoriesContainer.addEventListener('click', (e)=>{
        const allH1 =categoriesContainer.querySelectorAll('h1')
        allH1.forEach(h=> h.classList.remove('bg-[#15803D]'))
        // console.log(allH1)                                        

        if(e.target.localName === 'h1'){
            e.target.classList.add('bg-[#15803D]')
        }
    })
    
}

const loadPlantByCategories= (catsid)=>{
    fetch(`https://openapi.programming-hero.com/api/category/${catsid}`)
    .then((res)=> res.json())
    .then((data)=> {
        showPlantByCategories(data.plants)
    })
    
}


const showPlantByCategories = (plantsCat)=>{
    allPlantsContainer.innerHTML= "";
    
    for(const plant of plantsCat){    
        
        const description = plant.description
        let shortDescription = "";
        
        for(let i=0; i<40; i++){
            let sd = description[i];
            shortDescription= shortDescription+ sd;
        } 
        
        allPlantsContainer.innerHTML += `
        
        <div class="rounded-3xl shadow-lg overflow-hidden h-[400px]">
        <img src=${plant.image} alt="" class="h-[190px] w-full object-cover">
        <div id="${plant.id}" class="p-5 space-y-2">
        <h2 class="text-[18px] font-semibold">${plant.name}</h2>
        <p class="text-[12px] font-normal">${shortDescription}...</</p>
        <div class="flex items-center justify-between">
        <p class="text-[15px] text-[#15803D] bg-[#DCFCE7] rounded-3xl p-2">${plant.category}</p>
        <p class="text-[15px]">$<span>${plant.price}</span></p>
        </div>
        <button class="btn text-[14px] text-white bg-[#15803D] rounded-3xl w-full">Add To Cart</button>
        </div>
        </div>
        
        `
        
    }
    
    
    
    
}
const cartAddParentFunc =()=>{
allPlantsContainer.addEventListener('click',(e)=>{
    if(e.target.innerText === 'Add To Cart'){
        handleCart(e)
        
    }
    
})
} 

cartAddParentFunc()

const handleCart = (e)=>{
    
    const tree= e.target.parentNode.children[0].innerText
    const money= e.target.parentNode.children[2].children[1].innerText
    const realMoney= e.target.parentNode.children[2].children[1].children[0].textContent;
    
    console.log(realMoney)
    const id= e.target.parentNode.id
    
    addToCart.push({
        title: tree,
        price: money,
        id:id,
        realPrice: realMoney
    })
    showCart(addToCart)
}

const showCart= (addToCart)=>{
    cartContainer.innerHTML = ''
    let price=[];
    let currentCardId =[];
    addToCart.forEach((cart)=> {
        // let i=0;
        
        if(currentCardId.includes(cart.id)=== false){
            // console.log(cart.id)
            currentCardId.push(cart.id)
            price.push(cart.realPrice)
            // i++
            
            cartContainer.innerHTML += `
            <div  class="flex justify-between items-center shadow-md p-3">
            <div class="space-y-2">
            <h1 class="text-[18px] font-semibold">${cart.title}</h1>
            <p id="cartParent" class="text-[15px] font-light">${cart.price}</p>
            </div>
            <i onclick="deleteCart(${cart.id});" class="fa-solid fa-xmark text-red-700 font-semibold"></i>
            </div>
            
            `
            
            
        }
        
        
    })
    
    showRealPrice(price)

}

const showRealPrice= (prices)=>{
    let totalPrice= 0;
    prices.forEach(price=>{
        totalPrice= totalPrice+ Number(price)
        
    })
    console.log(totalPrice)

    // prices.forEach(price=>{
    totalPriceContainer.innerHTML=''
    totalPriceContainer.innerHTML +=`
    
    <div class="flex justify-between items-center">
                <h1 class="text-[16px] font-semibold">Total:</h1>
                <h1 class="text-[16px] font-semibold">${totalPrice}</h1>
             </div>
    
    `
}

const deleteCart= (cartId)=>{
    const filteredAddToCart= addToCart.filter(cart=> cart.id != cartId )
    
    addToCart = filteredAddToCart 

    showCart(addToCart)


}


// allPlantsContainer.addEventListener('click',(e)=>{
//     if(e.target.innerText === 'Add To Cart'){
        
//     let money=0;
//     addToCart.forEach(cart=> {
//         const cartM= parseInt(cart.realPrice)
//         money= money+ cartM

//     })
//     showMoney(money)
        
//     }
    
// })


// const showMoney= (money)=>{
//     console.log(money)
// }



loadCategories();
allPlantsLoad();



































// const categoriesClickBold = (id)=>{
    // const allCategoriesh1 = document.getElementById("categories-container").querySelectorAll('h1')
    // allCategoriesh1.forEach(h => h.classList.remove('bg-[#15803D] rounded-sm'))
    // const Categoryh1 = document.getElementById(id).classList.add('bg-[#15803D] rounded-sm')
    // }
    
    
    // category:"Fruit Tree"
    // description:"A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
    // id:1
    // image:"https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
    // name:"Mango Tree"
    // price:500


    // console.log(addToCart)
    // let upgAddToCart =[]
    // let title=[]
    // for(let i =0; i<addToCart.length; i++){
    //     if(title[i] !== addToCart[i].title){
    //         upgAddToCart.push(addToCart[i])
    //         title.push(addToCart[i].title)
    //     }
        
    // }
    // console.log(upgAddToCart)
