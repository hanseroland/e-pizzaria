export const categories = [
    {
      id: 1,
      img: require('../images/pizza-3.jpg').default,
      title: "PIZZAS!",
      type:"pizza"
    },
    {
      id: 2,
      img: require('../images/sweet-1.jpg').default,
      title: "PATISSERIES!",
      type:"pâtisserie"
    },
  
  ];


export const products = [
    {
        _id:1,
        nom:"Margherita",
        img: require('../images/Margherita.jpg').default,
        description:"Sauce marinara, Mozzarella",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["fromage"],
        dimensions: [
            {
                taille:"Moyenne",
                prix: 4500
            },
            {
                taille:"Large",
                prix: 6000
            },
            {
                taille:"X-Large",
                prix: 6500
            },
        ]
    },
    {
        _id:2,
        nom:"Fiery Veg",
        img: require("../images/fiery-veggie.jpg").default ,
        description:"Mozzarella, Jalapnos, champigons, peppadew, oigons rouges, sauce peri-peri",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["fromage"],
        dimensions: [
            {
                taille:"Moyenne",
                prix: 4500
            },
            {
                taille:"Large",
                prix: 6000
            },
            {
                taille:"X-Large",
                prix: 8500
            },
        ]
    },
    {
        _id:3,
        nom:"Very Veg",
        img: require('../images/veryVeg.jpeg').default,
        description:"Mozzarella, poivron, champigons, olives, oigons rouges, sauce marinara",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["fromage"],
        dimensions: [
            {
                taille:"Moyenne",
                prix: 4500
            },
            {
                taille:"Large",
                prix: 6000
            },
            {
                taille:"X-Large",
                prix: 8500
            },
        ]
    },
    {
        _id:4,
        nom:"Poulet Sweet Chili",
        img: require('../images/sweet-chili-garlic-chicken-pizza-recipe-1.jpg').default,
        description:"Mozzarella, poulet, sauce sweet chili, piment rouge, peppadew",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["poulet"],
        dimensions: [
            {
                taille:"Large",
                prix: 8500
            }
        ]
    },
    {
        _id:5,
        nom:"Poulet suprême",
        img: require('../images/pizza-supreme-au-poulet.jpg').default,
        description:"Mozzarella, poulet,poivron vert, champignons, oigons rouges, sauce marinara",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["poulet"],
        dimensions: [
            {
                taille:"Moyen",
                prix: 5500
            },
            {
                taille:"Large",
                prix: 8500
            },
            {
                taille:"X-Large",
                prix: 11000
            }
        ]
    },
    {
        _id:6,
        nom:"Hawaïenne",
        img: require('../images/Pizza-hawaienne-au-jambon-et-a-l-ananas.jpg').default,
        description:"Mozzarella, Dinde ,Tranches d'ananas, sauce marinara",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["poulet"],
        dimensions: [
            {
                taille:"Moyen",
                prix: 5500
            },
            {
                taille:"Large",
                prix: 8500
            },
            {
                taille:"X-Large",
                prix: 11000
            }
        ]
    },
    {
        _id:7,
        nom:"Classic d'inde",
        img: require('../images/Classic_d_inde.jpg').default,
        description:"Mozzarella, Pepperoni ,Dinde, Sauce Marinara, Olives, Champignons d'ananas",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["poulet"],
        dimensions: [
            {
                taille:"Moyen",
                prix: 5500
            },
            {
                taille:"Large",
                prix: 8500
            },
            {
                taille:"X-Large",
                prix: 11000
            }
        ]
    },
    {
        _id:8,
        nom:"Pepperoni",
        img: require('../images/pepperoni.jpg').default,
        description:"Mozzarella, Pepperoni , Sauce Marinara",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["viande"],
        dimensions: [
            {
                taille:"Moyen",
                prix: 6000
            },
            {
                taille:"Large",
                prix: 9000
            },
            {
                taille:"X-Large",
                prix: 12000
            }
        ]
    },
    {
        _id:9,
        nom:"Hot Stuff Beef (Bœuf épicé)",
        img: require('../images/Hot_Stuff_Beef.jpg').default,
        description:"Mozzarella, viande de bœuf ,Jalapeno, oignons rouges, sauce peri-peri",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["viande"],
        dimensions: [
            {
                taille:"Moyen",
                prix: 6000
            },
            {
                taille:"Large",
                prix: 9000
            },
            {
                taille:"X-Large",
                prix: 12000
            }
        ]
    },
    {
        _id:10,
        nom:"BBQ Amateurs viande",
        img: require('../images/BBQ-Chicken-Pizza-one-slice.jpg').default,
        description:"Mozzarella, sauce barbecue ,Viande de bœuf, dés de becon, pepperoni, jambon",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["viande"],
        dimensions: [
            {
                taille:"Moyen",
                prix: 6000
            },
            {
                taille:"Large",
                prix: 9000
            },
            {
                taille:"X-Large",
                prix: 12000
            }
        ]
    },
    {
        _id:11,
        nom:"Super Suprême",
        img: require('../images/Super-Supreme-Pizza-Hut-Pizza-Review.jpg').default,
        description:"Mozzarella,Viande de bœuf, dés de becon, pepperoni, jambon, oigons rouges, olives & poivrons verts",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["viande"],
        dimensions: [
            {
                taille:"Moyen",
                prix: 6000
            },
            {
                taille:"Large",
                prix: 9000
            },
            {
                taille:"X-Large",
                prix: 12000
            }
        ]
    },
    {
        _id:12,
        nom:"Triple viandes",
        img: require('../images/Tripleviandes.jpg').default,
        description:"Mozzarella,Viande de bœuf, dés de becon, pepperoni, sauce marinara",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["viande"],
        dimensions: [
            {
                taille:"Moyen",
                prix: 6000
            },
            {
                taille:"Large",
                prix: 9000
            },
            {
                taille:"X-Large",
                prix: 12000
            }
        ]
    },
    {
        _id:13,
        nom:"Fruits de mer",
        img: require('../images/pizza-5.jpg').default,
        description:"Mozzarella,Crevettes, poivrons verts, olives, sauce marinara",
        cuissons:"25-40 minutes",
        type:"pizza",
        categorie:["fruits_de_mer"],
        dimensions: [
            {
                taille:"Moyen",
                prix: 7000
            },
            {
                taille:"Large",
                prix: 9000
            },
            {
                taille:"X-Large",
                prix: 13000
            }
        ]
    },
    {
        _id:14,
        nom:"Tarte cookie",
        img: require('../images/tarte_Asha.jpg').default,
        description:"Cookie moelleux au chocolat noir et lait, enrobage chocolat  noir 66%, caramel onctueux, crémeux dulcey",
        cuissons:"",
        type:"pâtisserie",
        categorie:["chocolat"],
        prix:1900
    },
    {
        _id:16,
        nom:"Sweet",
        img: require("../images/sweet2.jpg").default,
        description:"Pâte sucrée, biscuit amande sans farine, praliné feuilleté, sésame, crème de lait parfumée à l'eau de rose et fleur",
        cuissons:"",
        type:"pâtisserie",
        categorie:["creme","chocolat"],
        prix:1900
    },
    {
        _id:17,
        nom:"Pur marron",
        img: require("../images/sweet3.jpg").default,
        description:"Biscuit châtaigne, crème onctueuse au marron, imbibage léger au whisky, ganache montée",
        cuissons:"",
        type:"pâtisserie",
        categorie:["creme","chocolat"],
        prix:1900
    },
    {
        _id:18,
        nom:"Doughlicious",
        img:require("../images/sweet-2.jpg").default,
        description:"Beignets glacés au chocolat belge recouverts de glaçage avec des pépites sur le dessus",
        cuissons:"",
        type:"pâtisserie",
        categorie:["chocolat","donuts"],
        prix:2500
    },
    {
        _id:19,
        nom:"Brownie",
        img:require("../images/sweet-3.jpg").default,
        description:"Chocolat noir,sucre, Beurre",
        cuissons:"",
        type:"pâtisserie",
        categorie:["chocolat"],
        prix:2500
    },
    {
        _id:20,
        nom:"Framboiserie",
        img:require("../images/pexels-any-lane-5945568.jpg").default,
        description:"Fraise, crème, vanille",
        cuissons:"",
        type:"pâtisserie",
        categorie:["creme"],
        prix:2500
    },
    {
        _id:21,
        nom:"Feuilles Vanille",
        img:require("../images/pexels-solodsha-7664402.jpg").default,
        description:"Fraise, crème, vanille",
        cuissons:"",
        type:"pâtisserie",
        categorie:["creme"],
        prix:2500
    },
    {
        _id:22,
        nom:"Tarte Vanille aux Fruits Noirs",
        img:require("../images/pexels-shvets-production-7525189.jpg").default,
        description:"Fraise, crème, vanille",
        cuissons:"",
        type:"pâtisserie",
        categorie:["creme"],
        prix:2500
    }
]