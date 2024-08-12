let search = document.querySelector('#search_bar');
let div = document.querySelector('#class_result');
let i = 0;

let a={
    "fruit": [
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
            "description": "These fresh, juicy grapes are bursting with flavor and are perfect for snacking or adding to your favorite dishes. Each grape is plump and sweet, providing a delightful burst of natural goodness in every bite. Ideal for a healthy treat!",
            "price": 45
        },
        {
            "name": "Pineapple",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
            "description": "This tropical delight is a sweet and tangy treat. The golden-yellow flesh of this pineapple is juicy and bursting with flavor, making it perfect for fresh eating, grilling, or adding to a variety of dishes. A taste of the tropics in every bite!",
            "price": 200
        },
        {
            "name": "Mango",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mango_2010_G1.jpg/320px-Mango_2010_G1.jpg",
            "description": "The mango is known for its sweet, tropical flavor and vibrant orange color. Rich in vitamins and antioxidants, it's perfect for eating fresh, adding to smoothies, or using in salsas and desserts.",
            "price": 25
        },
        {
            "name": "Strawberry",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Strawberry_3505.jpg/320px-Strawberry_3505.jpg",
            "description": "Sweet and juicy strawberries are a delightful treat. Their bright red color and fragrant aroma make them a favorite for snacking, desserts, or as a fresh addition to salads.",
            "price": 30
        },
        {
            "name": "Blueberry",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Blueberry_%28Pseudocydonia%29.jpg/320px-Blueberry_%28Pseudocydonia%29.jpg",
            "description": "These small, nutrient-packed berries are known for their sweet taste and numerous health benefits. Blueberries are great for snacking, adding to yogurt, or incorporating into baked goods.",
            "price": 40
        },
        {
            "name": "Peach",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Peach.jpg/320px-Peach.jpg",
            "description": "With its juicy flesh and sweet flavor, the peach is a favorite summer fruit. It's perfect for eating fresh, baking into pies, or blending into smoothies.",
            "price": 20
        },
        {
            "name": "Kiwi",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kiwi_fruit.jpg/320px-Kiwi_fruit.jpg",
            "description": "The kiwi, with its unique tart flavor and green interior, is both refreshing and nutritious. Rich in vitamin C, it's great for adding to fruit salads, smoothies, or eating on its own.",
            "price": 50
        },
        {
            "name": "Watermelon",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Watermelon_-_whole_and_cut.jpg/320px-Watermelon_-_whole_and_cut.jpg",
            "description": "Watermelon is a refreshing and hydrating fruit, perfect for hot summer days. Its sweet, juicy flesh is great for snacking or adding to fruit salads.",
            "price": 70
        },
        {
            "name": "Carrot",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Carrots_-_whole_and_cut.jpg/320px-Carrots_-_whole_and_cut.jpg",
            "description": "Carrots are crunchy and sweet root vegetables that are packed with vitamins and fiber. They're perfect for snacking, adding to salads, or cooking in various dishes.",
            "price": 15
        },
        {
            "name": "Broccoli",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Broccoli_2.jpg/320px-Broccoli_2.jpg",
            "description": "Broccoli is a nutritious green vegetable that's rich in vitamins, minerals, and antioxidants. It's great for steaming, roasting, or adding to stir-fries and salads.",
            "price": 18
        },
        {
            "name": "Tomato",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Tomato_je.jpg/320px-Tomato_je.jpg",
            "description": "Tomatoes are versatile fruits used in a variety of dishes. They're juicy and tangy, perfect for salads, sauces, and soups.",
            "price": 25
        },
        {
            "name": "Cucumber",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cucumber_and_cross_section.jpg/320px-Cucumber_and_cross_section.jpg",
            "description": "Cucumbers are crisp and refreshing, with a mild flavor that's perfect for salads and sandwiches. They're also great for hydrating and cooling down.",
            "price": 10
        },
        {
            "name": "Spinach",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Spinach_Leaf.jpg/320px-Spinach_Leaf.jpg",
            "description": "Spinach is a leafy green vegetable that's packed with nutrients and vitamins. It's great for salads, smoothies, and cooking in various dishes.",
            "price": 12
        },
        {
            "name": "Bell Pepper",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bell_pepper.jpg/320px-Bell_pepper.jpg",
            "description": "Bell peppers come in various colors and are sweet and crunchy. They are perfect for salads, stir-fries, and grilling.",
            "price": 20
        },
        {
            "name": "Potato",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Potatoes.jpg/320px-Potatoes.jpg",
            "description": "Potatoes are versatile tubers that can be baked, boiled, mashed, or fried. They're a staple in many cuisines around the world.",
            "price": 10
        },
        {
            "name": "Onion",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Onions_and_cross_section.jpg/320px-Onions_and_cross_section.jpg",
            "description": "Onions add a distinctive flavor to dishes. They can be used raw in salads, sautéed for a base, or caramelized for a sweeter taste.",
            "price": 14
        },
        {
            "name": "Garlic",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Garlic_bulb.jpg/320px-Garlic_bulb.jpg",
            "description": "Garlic is known for its strong aroma and flavor, adding depth to many dishes. It's used in cooking for its health benefits and savory taste.",
            "price": 8
        },
        {
            "name": "Zucchini",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Zucchini_yellow_03.jpg/320px-Zucchini_yellow_03.jpg",
            "description": "Zucchini is a summer squash with a mild flavor. It can be used in various dishes, from stir-fries to baked goods.",
            "price": 16
        },
        {
            "name": "Sweet Corn",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Corn_on_the_cob.jpg/320px-Corn_on_the_cob.jpg",
            "description": "Sweet corn is a popular summer vegetable with a sweet and crunchy taste. It's great for grilling, boiling, or adding to salads.",
            "price": 20
        },
        {
            "name": "Lettuce",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Green_lettuce.jpg/320px-Green_lettuce.jpg",
            "description": "Lettuce is a crisp, leafy green often used as a base for salads. It's refreshing and can be used in sandwiches and wraps.",
            "price": 12
        },
        {
            "name": "Avocado",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Avocado_and_cross_section.jpg/320px-Avocado_and_cross_section.jpg",
            "description": "Avocados are creamy and rich in healthy fats. They're great for salads, spreads, or making guacamole.",
            "price": 30
        },
        {
            "name": "Beetroot",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Beetroot_2.jpg/320px-Beetroot_2.jpg",
            "description": "Beetroots are root vegetables known for their vibrant color and sweet flavor. They can be roasted, boiled, or eaten raw.",
            "price": 18
        },
        {
            "name": "Pumpkin",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Pumpkin_2.jpg/320px-Pumpkin_2.jpg",
            "description": "Pumpkins are large, round vegetables with a sweet flavor. They are perfect for soups, pies, and roasting.",
            "price": 25
        },
        {
            "name": "Cauliflower",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cauliflower.jpg/320px-Cauliflower.jpg",
            "description": "Cauliflower is a versatile vegetable that can be used in a variety of dishes, from curries to rice alternatives.",
            "price": 22
        },
        {
            "name": "Radish",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Radishes.JPG/320px-Radishes.JPG",
            "description": "Radishes are crisp and slightly spicy. They add a nice crunch to salads and can be pickled or eaten raw.",
            "price": 14
        },
        {
            "name": "Chili Pepper",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Chili_peppers.jpg/320px-Chili_peppers.jpg",
            "description": "Chili peppers add heat and flavor to dishes. They come in various heat levels and can be used fresh, dried, or ground.",
            "price": 18
        },
        {
            "name": "Asparagus",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Asparagus.jpg/320px-Asparagus.jpg",
            "description": "Asparagus is a tender, green vegetable with a unique flavor. It’s perfect for grilling, steaming, or adding to pasta dishes.",
            "price": 25
        },
        {
            "name": "Artichoke",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Artichoke.JPG/320px-Artichoke.JPG",
            "description": "Artichokes are a delicious and nutritious vegetable with a unique taste. They're great for steaming or adding to salads.",
            "price": 30
        },
        {
            "name": "Brussels Sprouts",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Brussels_sprouts.JPG/320px-Brussels_sprouts.JPG",
            "description": "Brussels sprouts are small cabbage-like vegetables with a strong flavor. They're perfect for roasting or sautéing.",
            "price": 22
        },
        {
            "name": "Celery",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Celery.jpg/320px-Celery.jpg",
            "description": "Celery is a crunchy, watery vegetable often used in salads and soups. It adds a nice texture and mild flavor.",
            "price": 15
        },
        {
            "name": "Leek",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Leek.jpg/320px-Leek.jpg",
            "description": "Leeks have a mild, onion-like flavor and are great for soups, stews, and sautés.",
            "price": 20
        },
        {
            "name": "Squash",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Squash_varieties.jpg/320px-Squash_varieties.jpg",
            "description": "Squash comes in various types and flavors, perfect for roasting, baking, or adding to soups and stews.",
            "price": 22
        },
        {
            "name": "Green Beans",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Green_beans.jpg/320px-Green_beans.jpg",
            "description": "Green beans are crisp and tender, ideal for steaming, stir-fries, or adding to salads.",
            "price": 18
        },
        {
            "name": "Beet",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Beetroot_1.jpg/320px-Beetroot_1.jpg",
            "description": "Beets have a sweet, earthy flavor and can be roasted, pickled, or eaten raw in salads.",
            "price": 15
        },
        {
            "name": "Corn",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Corn_on_the_cob.jpg/320px-Corn_on_the_cob.jpg",
            "description": "Corn is a versatile grain with a sweet flavor, great for grilling, boiling, or adding to salads and soups.",
            "price": 20
        },
        {
            "name": "Cabbage",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Red_cabbage.jpg/320px-Red_cabbage.jpg",
            "description": "Cabbage is a versatile vegetable that can be used in salads, soups, and stir-fries. It has a mild flavor and is rich in vitamins.",
            "price": 18
        },
        {
            "name": "Radicchio",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Radicchio.jpg/320px-Radicchio.jpg",
            "description": "Radicchio is a type of chicory with a slightly bitter taste. It's great for adding a unique flavor to salads and grilled dishes.",
            "price": 25
        },
        {
            "name": "Fennel",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Fennel_bulb.jpg/320px-Fennel_bulb.jpg",
            "description": "Fennel has a distinct anise-like flavor and is used in salads, soups, and as a roasted vegetable.",
            "price": 22
        },
        {
            "name": "Arugula",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Arugula.jpg/320px-Arugula.jpg",
            "description": "Arugula is a leafy green with a peppery flavor. It's perfect for salads and adding a spicy kick to dishes.",
            "price": 15
        },
        {
            "name": "Chard",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Swiss_chard.jpg/320px-Swiss_chard.jpg",
            "description": "Chard is a leafy green with a slightly bitter taste. It's great for sautéing or adding to soups and stews.",
            "price": 20
        },
        {
            "name": "Kale",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kale_8.jpg/320px-Kale_8.jpg",
            "description": "Kale is a nutrient-dense leafy green that can be used in salads, smoothies, and soups. It has a slightly bitter taste.",
            "price": 18
        },
        {
            "name": "Cilantro",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Coriander_-_Cilantro_Leaves.jpg/320px-Coriander_-_Cilantro_Leaves.jpg",
            "description": "Cilantro adds a fresh, citrusy flavor to dishes. It's commonly used in Mexican and Asian cuisines.",
            "price": 12
        },
        {
            "name": "Basil",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Basil.JPG/320px-Basil.JPG",
            "description": "Basil has a sweet and aromatic flavor, perfect for adding to Italian dishes, salads, and pesto.",
            "price": 15
        }
    ]
}

function myFunction() {
    let s = search.value.toLowerCase(); 
    div.innerHTML = "";  
    
    a.fruit.forEach(fruit => { 
        if (fruit.name.toLowerCase().includes(s)) {
            createDiv(fruit);  
        }
    });
}

function createDiv(fruit) {
    let a = document.createElement('div');
    a.id = `s${i + 1}`;
    a.style.width = "60%";
    a.style.height = "150px";
    a.style.margin = "10px";
    
   
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

search.addEventListener('input', myFunction);
