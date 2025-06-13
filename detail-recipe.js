//Récupération des paramètres d'URL
document.getElementById('print-recipe-btn').addEventListener('click', function() {
    // Imprimer la page actuelle
    window.print();
});
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id');
        
        // Base de données des recettes (simulée)
        const recipesDatabase = {
            '1': {
                title: "Couscous Royal",
                category: "Viande",
                difficulty: "moyen",
                time: "2h30",
                rating: 4.5,
                votes: 24,
                description: "Un classique de la cuisine marocaine avec viande et légumes savoureux. Le couscous royal est un plat complet qui combine semoule, légumes variés et plusieurs types de viande (agneau, poulet et merguez). Parfait pour les grandes occasions et les repas en famille.",
                image: "couscous.jpg",
                ingredients: [
                    {quantity: "500 g", name: "de semoule moyenne"},
                    {quantity: "4", name: "pilons de poulet"},
                    {quantity: "500 g", name: "d'épaule d'agneau en morceaux"},
                    {quantity: "4", name: "merguez"},
                    {quantity: "2", name: "carottes"},
                    {quantity: "2", name: "courgettes"},
                    {quantity: "1", name: "navet"},
                    {quantity: "1", name: "oignon"},
                    {quantity: "2 c.à.s", name: "de concentré de tomate"},
                    {quantity: "1 c.à.c", name: "de gingembre"},
                    {quantity: "1 c.à.c", name: "de curcuma"},
                    {quantity: "1 c.à.c", name: "de paprika"},
                    {quantity: "Sel", name: "et poivre au goût"},
                    {quantity: "50 g", name: "de beurre"}
                ],
                instructions: [
                    "Préparez la semoule : dans un grand plat, versez la semoule et arrosez-la d'un peu d'eau froide. Mélangez du bout des doigts pour humidifier uniformément. Laissez reposer 10 minutes puis ajoutez le beurre et égrenez à nouveau.",
                    "Dans une cocotte-minute, faites revenir l'oignon émincé dans un peu d'huile. Ajoutez les morceaux d'agneau et faites-les dorer sur toutes les faces.",
                    "Ajoutez les épices (gingembre, curcuma, paprika), le concentré de tomate, et couvrez d'eau à hauteur. Salez et poivrez. Fermez la cocotte et laissez cuire 20 minutes après le sifflement.",
                    "Ajoutez ensuite les pilons de poulet et les légumes épluchés et coupés en gros morceaux. Couvrez à nouveau d'eau si nécessaire et poursuivez la cuisson pendant 15 minutes.",
                    "Pendant ce temps, faites griller les merguez dans une poêle à part.",
                    "Faites chauffer le couscoussier avec de l'eau bouillante. Disposez la semoule dans le panier vapeur et laissez cuire à la vapeur pendant 20 minutes en couvrant bien.",
                    "Servez la semoule dans un grand plat, disposez les légumes et les viandes par-dessus. Arrosez avec un peu de bouillon et servez le reste à part."
                ]
            },
            '2': {
                title: "Salade Marocaine",
                category: "Végétarien",
                difficulty: "facile",
                time: "25 min",
                rating: 4,
                votes: 18,
                description: "Une salade fraîche et colorée aux saveurs méditerranéennes. Parfaite en entrée ou en accompagnement, cette salade marocaine est un délice de couleurs et de saveurs avec ses légumes croquants et ses épices parfumées.",
                image: "salade.jpg",
                ingredients: [
                    {quantity: "2", name: "tomates fermes"},
                    {quantity: "1", name: "concombre"},
                    {quantity: "1", name: "poivron vert"},
                    {quantity: "1", name: "oignon rouge"},
                    {quantity: "1/2", name: "citron jaune"},
                    {quantity: "2 c.à.s", name: "d'huile d'olive"},
                    {quantity: "1 c.à.c", name: "de cumin"},
                    {quantity: "1/2 c.à.c", name: "de paprika"},
                    {quantity: "Sel", name: "et poivre au goût"},
                    {quantity: "Quelques", name: "feuilles de coriandre fraîche"}
                ],
                instructions: [
                    "Lavez et coupez les tomates en dés. Épluchez le concombre et coupez-le en dés également.",
                    "Épépinez le poivron et coupez-le en petits morceaux. Émincez finement l'oignon rouge.",
                    "Dans un grand saladier, mélangez tous les légumes préparés.",
                    "Préparez la vinaigrette : dans un petit bol, mélangez le jus de citron, l'huile d'olive, le cumin, le paprika, du sel et du poivre.",
                    "Versez la vinaigrette sur la salade et mélangez délicatement.",
                    "Parsemez de coriandre fraîche ciselée juste avant de servir.",
                    "Vous pouvez servir immédiatement ou laisser reposer 30 minutes au réfrigérateur pour que les saveurs se mélangent."
                ]
            },
            
    "3": {
        "title": "Briouats aux amandes",
        "category": "Dessert",
        "difficulty": "moyen",
        "time": "1h15",
        "rating": 4.7,
        "votes": 32,
        "description": "Délicieuses pâtisseries marocaines croustillantes fourrées à la pâte d'amandes parfumée à la fleur d'oranger. Parfaites pour le thé ou les occasions spéciales.",
        "image": "briouat.jpg",
        "ingredients": [
            { "quantity": "250 g", "name": "d'amandes mondées" },
            { "quantity": "100 g", "name": "de sucre fin" },
            { "quantity": "2 c.à.s", "name": "de fleur d'oranger" },
            { "quantity": "1 c.à.c", "name": "de cannelle" },
            { "quantity": "20", "name": "feuilles de brick" },
            { "quantity": "100 g", "name": "de beurre fondu" },
            { "quantity": "1", "name": "jaune d'œuf (pour la dorure)" },
            { "quantity": "2 c.à.s", "name": "d'eau de rose" },
            { "quantity": "1 pincée", "name": "de sel" }
        ],
        "instructions": [
            "Préparez la farce : mixez les amandes avec le sucre jusqu'à obtenir une poudre fine.",
            "Ajoutez la cannelle, la fleur d'oranger, l'eau de rose et le sel. Mélangez bien jusqu'à obtenir une pâte homogène.",
            "Si la pâte est trop sèche, ajoutez un peu d'eau de rose jusqu'à ce qu'elle soit malléable.",
            "Préchauffez votre four à 180°C (thermostat 6).",
            "Découpez les feuilles de brick en bandes de 10 cm de largeur.",
            "Déposez une petite cuillère de pâte d'amandes au bout de chaque bande.",
            "Pliez la feuille de brick en forme de triangle en repliant successivement sur elle-même (comme un feuilleté).",
            "Badigeonnez chaque briouat de beurre fondu à l'aide d'un pinceau.",
            "Disposez les briouats sur une plaque recouverte de papier sulfurisé.",
            "Dorez avec le jaune d'œuf dilué dans un peu d'eau.",
            "Enfournez pour 20-25 minutes jusqu'à ce qu'ils soient bien dorés et croustillants.",
            "Laissez refroidir avant de déguster. Saupoudrez éventuellement de sucre glace avant service."
        ]
    },
    "4": {
        "title": "Poisson Chermoula",
        "category": "Poisson",
        "difficulty": "facile",
        "time": "1h (dont 30 min de marinade)",
        "rating": 4.6,
        "votes": 29,
        "description": "Poisson mariné aux herbes et épices, cuit au four. Un classique de la cuisine marocaine avec sa marinade parfumée.",
        "image": "charmoula.jpg",
        "ingredients": [
            { "quantity": "1", "name": "poisson entier (dorade ou loup de mer)" },
            { "quantity": "1 bouquet", "name": "de coriandre fraîche" },
            { "quantity": "1 bouquet", "name": "de persil frais" },
            { "quantity": "4", "name": "gousses d'ail" },
            { "quantity": "1 c.à.s", "name": "de paprika" },
            { "quantity": "1 c.à.c", "name": "de cumin" },
            { "quantity": "1 c.à.c", "name": "de gingembre" },
            { "quantity": "1", "name": "citron" },
            { "quantity": "5 c.à.s", "name": "d'huile d'olive" },
            { "quantity": "1 pincée", "name": "de safran" },
            { "quantity": "Sel", "name": "et poivre au goût" }
        ],
        "instructions": [
            "Nettoyer le poisson et faire des entailles profondes sur chaque côté.",
            "Mixer la coriandre, persil, ail, épices, jus de citron et huile d'olive pour faire la chermoula.",
            "Badigeonner généreusement le poisson à l'intérieur et à l'extérieur avec la marinade.",
            "Laisser mariner au réfrigérateur pendant 30 minutes minimum.",
            "Préchauffer le four à 200°C.",
            "Envelopper le poisson dans du papier aluminium avec le reste de marinade.",
            "Cuire au four pendant 25-30 minutes selon la taille du poisson.",
            "Pour finir, griller 5 minutes sans papier aluminium pour dorer.",
            "Servir avec des quartiers de citron et du pain frais."
        ]
    },
    "5": {
        "title": "Harira Express",
        "category": "Soupe",
        "difficulty": "facile",
        "time": "45 min",
        "rating": 4.3,
        "votes": 21,
        "description": "Version rapide de la soupe traditionnelle marocaine. Réconfortante et riche en saveurs.",
        "image": "harira.jpg",
        "ingredients": [
            { "quantity": "200 g", "name": "de viande d'agneau hachée" },
            { "quantity": "1", "name": "oignon haché" },
            { "quantity": "2", "name": "tomates râpées" },
            { "quantity": "1 c.à.s", "name": "de concentré de tomate" },
            { "quantity": "100 g", "name": "de lentilles" },
            { "quantity": "50 g", "name": "de vermicelles fins" },
            { "quantity": "1 c.à.s", "name": "de farine" },
            { "quantity": "1 c.à.c", "name": "de gingembre" },
            { "quantity": "1 c.à.c", "name": "de curcuma" },
            { "quantity": "1 c.à.c", "name": "de cannelle" },
            { "quantity": "1 bouquet", "name": "de coriandre et persil" },
            { "quantity": "1,5 L", "name": "d'eau" },
            { "quantity": "Sel", "name": "et poivre au goût" }
        ],
        "instructions": [
            "Dans une cocotte, faire revenir l'oignon avec un peu d'huile.",
            "Ajouter la viande et faire dorer.",
            "Incorporer les tomates, concentré de tomate et épices. Mélanger 2 min.",
            "Ajouter les lentilles et couvrir d'eau. Porter à ébullition.",
            "Baisser le feu et laisser mijoter 30 minutes.",
            "Délayer la farine dans un peu d'eau froide et l'ajouter à la soupe en remuant.",
            "Ajouter les vermicelles et laisser cuire 5 minutes.",
            "Hacher finement les herbes et les incorporer au dernier moment.",
            "Servir chaud avec des dattes et des crêpes msemen."
        ]
    },"6": {
        "title": "Tajine d'agneau",
        "category": "Viande",
        "difficulty": "moyen",
        "time": "2h",
        "rating": 4.8,
        "votes": 35,
        "description": "Tajine d'agneau aux pruneaux et amandes, une merveille sucrée-salée. Plat de fête par excellence.",
        "image": "taginii.jpg",
        "ingredients": [
            { "quantity": "1,5 kg", "name": "d'épaule d'agneau en morceaux" },
            { "quantity": "300 g", "name": "de pruneaux dénoyautés" },
            { "quantity": "100 g", "name": "d'amandes mondées" },
            { "quantity": "2", "name": "oignons émincés" },
            { "quantity": "3 c.à.s", "name": "de miel" },
            { "quantity": "1 c.à.s", "name": "de cannelle" },
            { "quantity": "1 c.à.c", "name": "de gingembre" },
            { "quantity": "1 pincée", "name": "de safran" },
            { "quantity": "50 g", "name": "de beurre" },
            { "quantity": "3 c.à.s", "name": "d'huile d'olive" },
            { "quantity": "1 c.à.s", "name": "de graines de sésame" },
            { "quantity": "Sel", "name": "et poivre au goût" }
        ],
        "instructions": [
            "Faire tremper les pruneaux dans de l'eau tiède.",
            "Dans un tajine ou cocotte, faire revenir les oignons dans l'huile et le beurre.",
            "Ajouter les morceaux d'agneau et les faire dorer sur toutes les faces.",
            "Saupoudrer avec les épices, sel et poivre. Couvrir d'eau à mi-hauteur.",
            "Couvrir et laisser mijoter à feu doux pendant 1h30.",
            "Pendant ce temps, faire torréfier les amandes à sec dans une poêle.",
            "Égoutter les pruneaux et les ajouter au tajine avec le miel après 1h de cuisson.",
            "Laisser cuire encore 30 minutes jusqu'à ce que la viande soit tendre.",
            "Au moment de servir, parsemer d'amandes torréfiées et de graines de sésame.",
            "Servir avec du pain maison ou de la semoule."
        ]
    },

            '7': {
                title: "Pastilla au Poulet",
                category: "Viande",
                difficulty: "difficile",
                time: "2h15",
                rating: 4.9,
                votes: 28,
                description: "La pastilla est un chef-d'œuvre de la cuisine marocaine, une tourte feuilletée sucrée-salée qui combine poulet, amandes et épices, le tout enveloppé dans des feuilles de brick et saupoudré de sucre glace et cannelle.",
                image: "pastila.jpg",
                ingredients: [
                    {quantity: "1", name: "poulet (environ 1,5 kg)"},
                    {quantity: "10", name: "feuilles de brick"},
                    {quantity: "150 g", name: "d'amandes effilées"},
                    {quantity: "3", name: "oignons émincés"},
                    {quantity: "1 c.à.s", name: "cannelle"},
                    {quantity: "1 c.à.c", name: "gingembre"},
                    {quantity: "1 pincée", name: "safran"},
                    {quantity: "1 c.à.s", name: "sucre"},
                    {quantity: "2", name: "œufs"},
                    {quantity: "50 g", name: "beurre fondu"},
                    {quantity: "2 c.à.s", name: "sucre glace"},
                    {quantity: "1 c.à.c", name: "cannelle (pour la décoration)"},
                    {quantity: "Sel", name: "et poivre au goût"}
                ],
                instructions: [
                    "Faites cuire le poulet dans une grande casserole avec les oignons, les épices et un peu d'eau pendant 1h30. Égouttez et réservez le bouillon.",
                    "Désossez le poulet et émincez la chair. Faites dorer les amandes à sec dans une poêle.",
                    "Dans la même poêle, faites revenir la viande avec un peu de bouillon, les œufs battus et les amandes. Laissez épaissir.",
                    "Beurrez un moule à tarte. Disposez les feuilles de brick en les superposant et en les badigeonnant de beurre fondu.",
                    "Versez la préparation au poulet, repliez les feuilles de brick et badigeonnez le dessus de beurre.",
                    "Enfournez à 180°C pendant 30 minutes jusqu'à ce que ce soit bien doré.",
                    "Retournez la pastilla sur un plat, saupoudrez de sucre glace et de cannelle en formant des motifs."
                ]
            },
            "8": {
        "title": "Zaalouk",
        "category": "Entrée",
        "difficulty": "facile",
        "time": "40 min",
        "rating": 4.4,
        "votes": 27,
        "description": "Caviar d'aubergines à la marocaine, un délicieux mezze à déguster avec du pain frais.",
        "image": "zaalok.jpg",
        "ingredients": [
            {"quantity": "2", "name": "grosses aubergines"},
            {"quantity": "3", "name": "tomates mûres"},
            {"quantity": "3", "name": "gousses d'ail"},
            {"quantity": "1 c.à.s", "name": "de paprika"},
            {"quantity": "1 c.à.c", "name": "de cumin"},
            {"quantity": "1/2", "name": "citron pressé"},
            {"quantity": "3 c.à.s", "name": "d'huile d'olive"},
            {"quantity": "1", "name": "petit bouquet de coriandre"},
            {"quantity": "", "name": "Sel et poivre"}
        ],
        "instructions": [
            "Griller les aubergines entières au four (200°C) pendant 30 min jusqu'à ce qu'elles ramollissent",
            "Peler et écraser les aubergines à la fourchette",
            "Dans une poêle, faire revenir l'ail haché dans l'huile d'olive",
            "Ajouter les tomates pelées et épépinées, coupées en dés",
            "Incorporer les aubergines et les épices, mélanger",
            "Laisser mijoter à feu doux 15 min en écrasant à la cuillère en bois",
            "Ajouter le jus de citron et la coriandre hachée",
            "Servir tiède arrosé d'un filet d'huile d'olive"
        ]
    },
    "9": {
        "title": "Msemen",
        "category": "Petit-déjeuner",
        "difficulty": "moyen",
        "time": "1h",
        "rating": 4.6,
        "votes": 35,
        "description": "Crêpes feuilletées marocaines, parfaites pour le petit-déjeuner avec du miel ou de l'amlou.",
        "image": "msamen.jpg",
        "ingredients": [
            {"quantity": "500 g", "name": "de farine"},
            {"quantity": "1 c.à.c", "name": "de sel"},
            {"quantity": "1 c.à.s", "name": "de sucre"},
            {"quantity": "1 c.à.s", "name": "de levure boulangère"},
            {"quantity": "300 ml", "name": "d'eau tiède"},
            {"quantity": "150 g", "name": "de semoule fine"},
            {"quantity": "100 ml", "name": "d'huile végétale"},
            {"quantity": "100 g", "name": "de beurre fondu"}
        ],
        "instructions": [
            "Mélanger farine, sel, sucre et levure dans un saladier",
            "Ajouter l'eau progressivement pour former une pâte molle",
            "Pétrir 10 min jusqu'à obtenir une pâte lisse",
            "Diviser la pâte en 8 boules, huiler et laisser reposer 30 min",
            "Étaler chaque boule très finement sur un plan de travail huilé",
            "Plier en carré en badigeonnant chaque couche de beurre fondu",
            "Cuire à feu moyen dans une poêle 3-4 min de chaque côté",
            "Servir chaud avec du miel ou du fromage frais"
        ]
    },"10": {
        "title": "Tajine de poulet aux citrons",
        "category": "Viande",
        "difficulty": "moyen",
        "time": "1h30",
        "rating": 4.7,
        "votes": 42,
        "description": "Poulet mijoté avec des citrons confits et des olives, un classique de la cuisine marocaine.",
        "image": "taginePoulet.jpg",
        "ingredients": [
            {"quantity": "1", "name": "poulet coupé en morceaux"},
            {"quantity": "2", "name": "oignons émincés"},
            {"quantity": "3", "name": "citrons confits"},
            {"quantity": "100 g", "name": "d'olives vertes dénoyautées"},
            {"quantity": "2", "name": "gousses d'ail"},
            {"quantity": "1 c.à.s", "name": "de gingembre"},
            {"quantity": "1 c.à.s", "name": "de curcuma"},
            {"quantity": "1 pincée", "name": "de safran"},
            {"quantity": "3 c.à.s", "name": "d'huile d'olive"},
            {"quantity": "", "name": "Persil et coriandre"}
        ],
        "instructions": [
            "Faire revenir les oignons et l'ail dans l'huile",
            "Ajouter les morceaux de poulet et les faire dorer",
            "Saupoudrer avec les épices et couvrir d'eau à mi-hauteur",
            "Laisser mijoter 45 min à feu doux",
            "Ajouter les citrons confits coupés en morceaux et les olives",
            "Poursuivre la cuisson 15 min",
            "Parsemer de persil et coriandre avant de servir"
        ]
    },
     "17": {
        "title": "Bagrir",
        "category": "Petit-déjeuner",
        "difficulty": "moyen",
        "time": "1h (dont 30 min de repos)",
        "rating": 4.5,
        "votes": 28,
        "description": "Crêpes marocaines légères et aérées aux mille trous, traditionnellement servies avec du beurre et du miel pour le petit-déjeuner.",
        "image": "bagrir.jpg",
        "ingredients": [
            {"quantity": "250 g", "name": "de semoule fine"},
            {"quantity": "250 g", "name": "de farine"},
            {"quantity": "1 sachet", "name": "de levure chimique"},
            {"quantity": "1 c.à.c", "name": "de sel"},
            {"quantity": "1 c.à.s", "name": "de sucre"},
            {"quantity": "850 ml", "name": "d'eau tiède"},
            {"quantity": "1 c.à.s", "name": "de levure boulangère fraîche"},
            {"quantity": "", "name": "Beurre et miel pour servir"}
        ],
        "instructions": [
            "Délayer la levure boulangère dans un peu d'eau tiède avec le sucre. Laisser mousser 10 min.",
            "Dans un saladier, mélanger semoule, farine, levure chimique et sel.",
            "Ajouter progressivement l'eau tiède et le mélange levure en fouettant pour éviter les grumeaux.",
            "Couvrir d'un torchon et laisser reposer 30 min dans un endroit tiède.",
            "Chauffer une poêle antiadhésive à feu moyen.",
            "Verser une louche de pâte au centre (sans étaler, les trous se formeront naturellement).",
            "Cuire à feu moyen jusqu'à ce que la surface soit couverte de trous et que le dessus soit sec (environ 3-4 min).",
            "Retirer délicatement sans retourner (le bagrir ne se cuit que d'un côté).",
            "Servir chaud arrosé de beurre fondu et de miel d'abeille."
        ],
        "tips": [
            "La pâte doit avoir la consistance d'une pâte à crêpe liquide",
            "Ne pas graisser la poêle pour permettre la formation des trous",
            "Plus la pâte repose, plus les trous seront nombreux",
            "Consommer immédiatement pour profiter de leur légèreté"
        ]
    },
    "12": {
        "title": "Méchoui",
        "category": "Viande",
        "difficulty": "difficile",
        "time": "4h",
        "rating": 4.9,
        "votes": 38,
        "description": "Agneau rôti à la broche, tendre et parfumé, plat traditionnel des fêtes.",
        "image": "mechoui.jpg",
        "ingredients": [
            {"quantity": "1", "name": "épaule ou gigot d'agneau (2-3 kg)"},
            {"quantity": "4", "name": "gousses d'ail"},
            {"quantity": "2 c.à.s", "name": "de cumin"},
            {"quantity": "2 c.à.s", "name": "de paprika"},
            {"quantity": "1 c.à.s", "name": "de gingembre"},
            {"quantity": "1 c.à.c", "name": "de poivre noir"},
            {"quantity": "100 g", "name": "de beurre fondu"},
            {"quantity": "", "name": "Sel"}
        ],
        "instructions": [
            "Mélanger toutes les épices avec le beurre fondu",
            "Inciser la viande et la badigeonner généreusement de mélange",
            "Laisser mariner 12h au réfrigérateur",
            "Enfourner à 160°C pendant 3h (temps variable selon le poids)",
            "Arroser régulièrement avec le jus de cuisson",
            "Augmenter à 200°C les 15 dernières minutes pour dorer",
            "Servir avec du cumin et du sel pour tremper les morceaux"
        ]
    },
    '13':{"title": "Seffa",
        "category": "Dessert",
        "difficulty": "moyen",
        "time": "45 min",
        "rating": 4.5,
        "votes": 31,
        "description": "Vermicelles sucrés parfumés à la cannelle, accompagnés d'amandes grillées et de lait parfumé.",
        "image": "seffa.jpg",
        "ingredients": [
            {"quantity": "500 g", "name": "de vermicelles fins"},
            {"quantity": "100 g", "name": "de beurre"},
            {"quantity": "150 g", "name": "de sucre"},
            {"quantity": "2 c.à.s", "name": "de cannelle"},
            {"quantity": "100 g", "name": "d'amandes grillées"},
            {"quantity": "1 L", "name": "de lait"},
            {"quantity": "2", "name": "bâtons de cannelle"},
            {"quantity": "1", "name": "gousse de vanille"},
            {"quantity": "", "name": "Fleur d'oranger (optionnel)"}
        ],
        "instructions": [
            "Cuire les vermicelles al dente dans de l'eau bouillante",
            "Égoutter et mélanger avec le beurre et la moitié du sucre",
            "Dans une casserole, porter le lait à ébullition avec la cannelle et vanille",
            "Disposer les vermicelles en dôme dans un plat",
            "Saupoudrer généreusement de cannelle et sucre restant",
            "Parsemer d'amandes concassées",
            "Servir avec le lait chaud parfumé à part"
        ]
    },
    
    "14": {
        "title": "Makrout aux dattes",
        "category": "Pâtisserie",
        "difficulty": "difficile",
        "time": "2h",
        "rating": 4.8,
        "votes": 29,
        "description": "Pâtisserie à base de semoule fourrée aux dattes, frite puis trempée dans du miel.",
        "image": "makrout.jpg",
        "ingredients": [
            {"quantity": "500 g", "name": "de semoule fine"},
            {"quantity": "200 g", "name": "de farine"},
            {"quantity": "250 g", "name": "de beurre fondu"},
            {"quantity": "1 c.à.c", "name": "de cannelle"},
            {"quantity": "1 pincée", "name": "de safran"},
            {"quantity": "1 verre", "name": "d'eau de fleur d'oranger"},
            {"quantity": "500 g", "name": "de pâte de dattes"},
            {"quantity": "1 c.à.c", "name": "de cannelle (pour la farce)"},
            {"quantity": "300 ml", "name": "d'huile de friture"},
            {"quantity": "300 g", "name": "de miel"}
        ],
        "instructions": [
            "Mélanger semoule, farine, beurre et épices",
            "Ajouter l'eau de fleur d'oranger jusqu'à obtenir une pâte souple",
            "Former des boudins de 2 cm de diamètre",
            "Étaler la pâte de dattes mélangée à la cannelle en fins boudins",
            "Insérer un boudin de dattes dans chaque boudin de pâte",
            "Couper en losanges de 4 cm",
            "Frire à l'huile chaude jusqu'à dorure",
            "Tremper dans le miel tiède avant refroidissement"
        ]
    },
     "15": {
        "title": "Tajine de poisson",
        "category": "Poisson",
        "difficulty": "moyen",
        "time": "1h",
        "rating": 4.3,
        "votes": 24,
        "description": "Poisson cuit avec des légumes dans un tajine, parfumé au citron et aux olives.",
        "image": "tajine-poisson.jpg",
        "ingredients": [
            {"quantity": "4", "name": "filets de poisson blanc (merlu, dorade)"},
            {"quantity": "2", "name": "poivrons"},
            {"quantity": "2", "name": "tomates"},
            {"quantity": "1", "name": "oignon"},
            {"quantity": "2", "name": "pommes de terre"},
            {"quantity": "1", "name": "citron confit"},
            {"quantity": "50 g", "name": "d'olives vertes"},
            {"quantity": "2", "name": "gousses d'ail"},
            {"quantity": "1 c.à.s", "name": "de paprika"},
            {"quantity": "1 c.à.s", "name": "de cumin"},
            {"quantity": "3 c.à.s", "name": "d'huile d'olive"},
            {"quantity": "", "name": "Coriandre fraîche"}
        ],
        "instructions": [
            "Disposer les légumes coupés en rondelles au fond du tajine",
            "Ajouter l'ail haché et les épices",
            "Déposer les filets de poisson sur les légumes",
            "Ajouter les olives et le citron confit coupé",
            "Arroser d'huile d'olive et d'un peu d'eau",
            "Couvrir et cuire à feu doux 30-40 min",
            "Parsemer de coriandre avant de servir"
        ]
    }, 
    
    "16": {
        "title": "Bissara",
        "category": "Entrée",
        "difficulty": "facile",
        "time": "1h30",
        "rating": 4.2,
        "votes": 18,
        "description": "Purée de fèves, un plat simple et nourrissant, traditionnellement consommé au petit-déjeuner.",
        "image": "bessara.jpg",
        "ingredients": [
            {"quantity": "500 g", "name": "de fèves sèches"},
            {"quantity": "3", "name": "gousses d'ail"},
            {"quantity": "1 c.à.s", "name": "de cumin"},
            {"quantity": "1 c.à.c", "name": "de paprika"},
            {"quantity": "6 c.à.s", "name": "d'huile d'olive"},
            {"quantity": "", "name": "Sel"},
            {"quantity": "", "name": "Eau"}
        ],
        "instructions": [
            "Faire tremper les fèves 12h dans l'eau froide",
            "Égoutter et cuire dans de l'eau avec l'ail pendant 1h",
            "Écraser au mixeur ou au pilon",
            "Ajouter les épices et l'huile d'olive",
            "Servir chaud avec un filet d'huile et du cumin"
        ]
    },
    "17": {
        "title": "Kefta",
        "category": "Viande",
        "difficulty": "facile",
        "time": "30 min",
        "rating": 4.6,
        "votes": 33,
        "description": "Boulettes de viande épicées, grillées ou en sauce, souvent servies avec des œufs.",
        "image": "kefta.webp",
        "ingredients": [
            {"quantity": "500 g", "name": "de viande hachée (bœuf/agneau)"},
            {"quantity": "1", "name": "oignon râpé"},
            {"quantity": "1 bouquet", "name": "de persil"},
            {"quantity": "1 c.à.s", "name": "de paprika"},
            {"quantity": "1 c.à.s", "name": "de cumin"},
            {"quantity": "1 c.à.c", "name": "de gingembre"},
            {"quantity": "", "name": "Sel et poivre"}
        ],
        "instructions": [
            "Mélanger tous les ingrédients",
            "Former des boulettes allongées",
            "Griller au barbecue ou à la poêle 8-10 min",
            "Pour la version en sauce : faire revenir dans une sauce tomate épicée et ajouter des œufs pochés"
        ]
    },
    
    "18": {
        "title": "Sellou",
        "category": "Pâtisserie",
        "difficulty": "moyen",
        "time": "1h",
        "rating": 4.7,
        "votes": 25,
        "description": "Poudre énergétique à base d'amandes et de sésame, traditionnelle pendant le Ramadan.",
        "image": "sallo.jpg",
        "ingredients": [
            {"quantity": "500 g", "name": "de farine"},
            {"quantity": "250 g", "name": "d'amandes"},
            {"quantity": "250 g", "name": "de graines de sésame"},
            {"quantity": "100 g", "name": "de sucre glace"},
            {"quantity": "150 g", "name": "de beurre fondu"},
            {"quantity": "2 c.à.s", "name": "de cannelle"},
            {"quantity": "1 c.à.s", "name": "d'eau de fleur d'oranger"}
        ],
        "instructions": [
            "Torréfier la farine à sec à feu doux jusqu'à coloration dorée",
            "Griller séparément les amandes et le sésame",
            "Mixer les amandes avec le sucre glace",
            "Mélanger tous les ingrédients secs",
            "Ajouter le beurre fondu et l'eau de fleur d'oranger",
            "Malaxer jusqu'à obtenir une texture sableuse",
            "Conserver dans des bocaux hermétiques"
        ]
    }


        };

        // Chargement des données de la recette
        function loadRecipeData() {
            const recipe = recipesDatabase[recipeId];
            if (recipe) {
                document.getElementById('recipe-title').textContent = recipe.title;
                document.getElementById('recipe-category').textContent = recipe.category;
                document.getElementById('recipe-difficulty').textContent = recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1);
                document.getElementById('recipe-difficulty').className = `difficulty-badge ${recipe.difficulty}`;
                document.getElementById('recipe-time').textContent = recipe.time;
                document.getElementById('recipe-description').textContent = recipe.description;
                document.getElementById('recipe-main-image').src = recipe.image;
                document.getElementById('recipe-main-image').alt = recipe.title;

                // Mise à jour des ingrédients
                const ingredientsList = document.getElementById('ingredients-list');
                ingredientsList.innerHTML = '';
                recipe.ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.className = 'ingredient-item';
                    li.innerHTML = `
                        <span class="ingredient-quantity">${ingredient.quantity}</span>
                        <span class="ingredient-name">${ingredient.name}</span>
                    `;
                    ingredientsList.appendChild(li);
                });

                // Mise à jour des instructions
                const instructionsList = document.getElementById('instructions-list');
                instructionsList.innerHTML = '';
                recipe.instructions.forEach((instruction, index) => {
                    const li = document.createElement('li');
                    li.className = 'instruction-step';
                    li.textContent = instruction;
                    instructionsList.appendChild(li);
                });

                // Mise à jour du rating
                const ratingStars = document.querySelector('.recipe-rating');
                ratingStars.innerHTML = '';
                const fullStars = Math.floor(recipe.rating);
                const hasHalfStar = recipe.rating % 1 >= 0.5;

                for (let i = 0; i < 5; i++) {
                    const star = document.createElement('i');
                    if (i < fullStars) {
                        star.className = 'fas fa-star';
                    } else if (i === fullStars && hasHalfStar) {
                        star.className = 'fas fa-star-half-alt';
                    } else {
                        star.className = 'far fa-star';
                    }
                    ratingStars.appendChild(star);
                }

                const votesSpan = document.createElement('span');
                votesSpan.textContent = `(${recipe.votes})`;
                ratingStars.appendChild(votesSpan);
            } else {
                // Redirection si la recette n'existe pas
                window.location.href = 'recettes.html';
            }
        }

        // Gestion du bouton de sauvegarde
        document.getElementById('save-recipe-btn').addEventListener('click', function() {
            this.classList.toggle('saved');
            const icon = this.querySelector('i');
            
            if (this.classList.contains('saved')) {
                icon.className = 'fas fa-bookmark';
                // Ajouter la recette aux favoris (localStorage)
                saveRecipeToFavorites(recipeId);
                showNotification('Recette sauvegardée dans vos favoris!');
            } else {
                icon.className = 'far fa-bookmark';
                // Retirer la recette des favoris
                removeRecipeFromFavorites(recipeId);
                showNotification('Recette retirée de vos favoris');
            }
        });

        // Vérifier si la recette est déjà sauvegardée
        function checkIfRecipeIsSaved() {
            const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
            if (savedRecipes.includes(recipeId)) {
                const btn = document.getElementById('save-recipe-btn');
                btn.classList.add('saved');
                btn.querySelector('i').className = 'fas fa-bookmark';
            }
        }

        // Sauvegarder une recette
        function saveRecipeToFavorites(id) {
            const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
            if (!savedRecipes.includes(id)) {
                savedRecipes.push(id);
                localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            }
        }

        // Retirer une recette des favoris
        function removeRecipeFromFavorites(id) {
            let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
            savedRecipes = savedRecipes.filter(recipeId => recipeId !== id);
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        }

        // Afficher une notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

 // === Gestion du thème (dark/light mode) ===
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const currentTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    }

    themeToggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-mode');
        document.body.classList.toggle('dark-mode', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    });

    function updateThemeIcon(isDark) {
        const icon = themeToggle.querySelector('i');
        if (!icon) return;
        icon.classList.remove('fa-sun', 'fa-moon');
        icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
    }
}
document.addEventListener('DOMContentLoaded', initTheme);


// === Menu hamburger ===
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// === Chargement initial ===
document.addEventListener('DOMContentLoaded', function () {
    loadRecipeData();
    checkIfRecipeIsSaved();
});







