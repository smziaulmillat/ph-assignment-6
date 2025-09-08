const allPlantsContainer = document.getElementById("all-plants-container");
const categoriesContainer = document.getElementById("categories-container");

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
        
        for(let i=0; i<50; i++){
            let sd = description[i];
            shortDescription= shortDescription+ sd;
        }
        // console.log(shortDescription)

        allPlantsContainer.innerHTML += `
        
        <div class="rounded-3xl shadow-lg overflow-hidden h-[400px]">
            <img src=${plant.image} alt="" class="h-[190px] w-full object-cover">
            <div class="p-5 space-y-2">
                <h2 class="text-[18px] font-semibold">${plant.name}</h2>
                <p class="text-[12px] font-normal">${shortDescription}...</</p>
                <div class="flex items-center justify-between">
                    <p class="text-[15px] text-[#15803D] bg-[#DCFCE7] rounded-3xl p-2">${plant.category}</p>
                    <p class="text-[15px]">$${plant.price}</p>
                </div>
                <button class="btn text-[14px] text-white bg-[#15803D] rounded-3xl w-full">Get Involved</button>
            </div>
          </div>
          
        
        
        `
    }
}

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

// category:"Fruit Tree"
// description:"A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
// id:1
// image:"https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
// name:"Mango Tree"
// price:500

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
        <div class="p-5 space-y-2">
        <h2 class="text-[18px] font-semibold">${plant.name}</h2>
        <p class="text-[12px] font-normal">${shortDescription}...</</p>
        <div class="flex items-center justify-between">
        <p class="text-[15px] text-[#15803D] bg-[#DCFCE7] rounded-3xl p-2">${plant.category}</p>
        <p class="text-[15px]">$${plant.price}</p>
        </div>
        <button class="btn text-[14px] text-white bg-[#15803D] rounded-3xl w-full">Get Involved</button>
        </div>
        </div>
        
        `
    }

    
}




loadCategories();
allPlantsLoad();
// const categoriesClickBold = (id)=>{
// const allCategoriesh1 = document.getElementById("categories-container").querySelectorAll('h1')
// allCategoriesh1.forEach(h => h.classList.remove('bg-[#15803D] rounded-sm'))
// const Categoryh1 = document.getElementById(id).classList.add('bg-[#15803D] rounded-sm')
// }