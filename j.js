let search = document.querySelector('#search_bar');
let div = document.querySelector('#class_result');
let i = 0;

let a = {
    "fruits": [
        {
            "name": "Apple",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
            "description": "A classic favorite, this crisp and juicy apple boasts a beautiful red hue. Perfect for a refreshing snack, it’s as delicious as it is nutritious. Enjoy it on its own, sliced in a salad, or baked into a warm pie.",
            "price": 35
        },
        {
            "name": "Banana",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
            "description": "This ripe banana is a powerhouse of energy and essential nutrients. With its creamy texture and naturally sweet flavor, it’s ideal for breakfast, smoothies, or a quick snack on the go. A versatile fruit that’s always a hit!",
            "price": 12
        },
        {
            "name": "Grapes",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
            "weight": 0.1,
            "description": "These fresh, juicy grapes are bursting with flavor and are perfect for snacking or adding to your favorite dishes. Each grape is plump and sweet, providing a delightful burst of natural goodness in every bite. Ideal for a healthy treat!",
            "price": 45
        },
        {
            "name": "Pineapple",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
            "description": "This tropical delight is a sweet and tangy treat. The golden-yellow flesh of this pineapple is juicy and bursting with flavor, making it perfect for fresh eating, grilling, or adding to a variety of dishes. A taste of the tropics in every bite!",
            "price": 200
        }
    ]
};

function myFunction() {
    let s = search.value.toLowerCase();  // Convert the input to lowercase
    div.innerHTML = "";  // Clear previous results
    
    a.fruits.forEach(fruit => {
        if (fruit.name.toLowerCase().includes(s)) {
            createDiv(fruit);  // Create and append a div for each matching fruit
        }
    });
}

function createDiv(fruit) {
    let a = document.createElement('div');
    a.id = `s${i + 1}`;
    a.style.width = "60%";
    a.style.height = "150px";
    a.style.margin = "10px";
    
    // Set the content of the div with fruit details
    a.innerHTML = `
        <div class="image">
            <img src="${fruit.image}" >
        </div>
        <div class="dis">
            <h2>${fruit.name}</h2>
            <h4>${fruit.description}</h4>
        </div>
        <div class="pro">
            <h2>Price: $${fruit.price}</h2>
        </div>
    `;
    
    div.appendChild(a);
    i++;
}

// Add event listener to the search bar to trigger the search function on input
search.addEventListener('input', myFunction);
