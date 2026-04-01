const RESTAURANTS = [
  {
    id:1, name:"Trattoria da Mario", city:"Roma", cat:"ristorante",
    emoji:"🍝", stars:"★★★★☆", avgPrice:"€25–40",
    address:"Via della Croce 12, Roma", phone:"06 678 3818",
    orari:"12:00–15:00 · 19:00–23:00",
    desc:"Cucina romana autentica dal 1953. Carbonara e cacio e pepe indimenticabili, atmosfera calda e familiare nel cuore di Trastevere.",
    lat:41.8894, lng:12.4706,
    menu:{
      antipasti:[
        {name:"Bruschetta al pomodoro",desc:"Pane casereccio, pomodorini, basilico, olio EVO",price:"€5.00"},
        {name:"Supplì al telefono",desc:"Riso, ragù, mozzarella filante – 3 pezzi",price:"€6.00"},
        {name:"Fiori di zucca fritti",desc:"Ripieni di ricotta e acciughe",price:"€7.50"},
        {name:"Antipasto misto romano",desc:"Carciofi, fritti, olive, mortadella",price:"€12.00"},
      ],
      primi:[
        {name:"Carbonara",desc:"Guanciale, uovo, pecorino, pepe nero",price:"€14.00"},
        {name:"Cacio e Pepe",desc:"Tonnarelli, pecorino romano DOP, pepe",price:"€13.00"},
        {name:"Amatriciana",desc:"Guanciale, pomodoro San Marzano, pecorino",price:"€14.00"},
        {name:"Gricia",desc:"Guanciale, pecorino, pepe – la carbonara bianca",price:"€13.00"},
        {name:"Pasta e ceci",desc:"Ceci, rosmarino, pasta corta",price:"€10.00"},
      ],
      secondi:[
        {name:"Saltimbocca alla romana",desc:"Vitello, prosciutto crudo, salvia, vino bianco",price:"€18.00"},
        {name:"Abbacchio al forno",desc:"Agnello romano, patate, rosmarino",price:"€20.00"},
        {name:"Pollo alla cacciatora",desc:"Olive, capperi, pomodoro, vino bianco",price:"€16.00"},
        {name:"Baccalà in pastella",desc:"Merluzzo fritto, limone",price:"€15.00"},
      ],
      dolci:[
        {name:"Tiramisù della casa",desc:"Mascarpone, savoiardi, caffè",price:"€5.50"},
        {name:"Panna cotta al caramello",desc:"Vaniglia bourbon, salsa caramello salato",price:"€5.00"},
        {name:"Crostata di visciole",desc:"Confettura di amarena, pasta frolla",price:"€4.50"},
        {name:"Maritozzi con panna",desc:"Brioche soffice, panna montata",price:"€3.00"},
      ],
      vini:[
        {name:"Frascati DOC",desc:"Bianco laziale – bottiglia 75cl",price:"€14.00"},
        {name:"Cesanese del Piglio",desc:"Rosso laziale – bottiglia 75cl",price:"€18.00"},
        {name:"Chianti Classico DOCG",desc:"Toscano – bottiglia 75cl",price:"€22.00"},
        {name:"Montepulciano d'Abruzzo",desc:"Bottiglia 75cl",price:"€16.00"},
        {name:"Vino della casa (bianco/rosso)",desc:"Caraffa 0,5L",price:"€6.00"},
        {name:"Vino della casa (bianco/rosso)",desc:"Caraffa 0,25L",price:"€3.50"},
      ],
      birre:[
        {name:"Peroni Nastro Azzurro",desc:"33cl – bottiglia",price:"€3.50"},
        {name:"Moretti",desc:"33cl – bottiglia",price:"€3.50"},
        {name:"Birra artigianale IPA",desc:"40cl – locale, luppolata",price:"€5.50"},
        {name:"Birra artigianale bionda",desc:"40cl – fresca e leggera",price:"€5.00"},
      ],
      bibite:[
        {name:"Acqua naturale / frizzante",desc:"Bottiglia 75cl",price:"€2.00"},
        {name:"Coca-Cola / Fanta / Sprite",desc:"Lattina 33cl",price:"€2.50"},
        {name:"Succo di frutta",desc:"Pera, albicocca o ace – 20cl",price:"€2.50"},
        {name:"Limonata artigianale",desc:"Limoni di Sorrento, menta, seltz",price:"€3.50"},
        {name:"Caffè espresso",desc:"Miscela romana",price:"€1.00"},
        {name:"Cappuccino",desc:"Con latte fresco intero",price:"€1.50"},
      ]
    }
  },
  {
    id:2, name:"Pizzeria Napoli Verace", city:"Napoli", cat:"pizzeria",
    emoji:"🍕", stars:"★★★★★", avgPrice:"€10–20",
    address:"Via dei Tribunali 94, Napoli", phone:"081 446 643",
    orari:"12:00–15:30 · 18:30–23:30",
    desc:"Pizza napoletana STG cotta in forno a legna. Impasto a lunga lievitazione 48h. Dal 1971 nella capitale della pizza mondiale.",
    lat:40.8518, lng:14.2681,
    menu:{
      antipasti:[
        {name:"Frittura mista napoletana",desc:"Montanara, crocchè, panzarotti, sciurilli",price:"€8.00"},
        {name:"Bruschetta con pomodorini del Vesuvio",desc:"Aglio, basilico, olio EVO",price:"€4.00"},
        {name:"Mozzarella di bufala campana DOP",desc:"250g, pomodorini, basilico",price:"€9.00"},
      ],
      pizze:[
        {name:"Margherita",desc:"Pomodoro San Marzano, fior di latte, basilico, olio EVO",price:"€7.00"},
        {name:"Marinara",desc:"Pomodoro, aglio, origano, olio – la più antica",price:"€5.50"},
        {name:"Bufala",desc:"Pomodoro, mozzarella di bufala DOP, basilico",price:"€11.00"},
        {name:"Diavola",desc:"Pomodoro, fior di latte, salame piccante",price:"€9.00"},
        {name:"Quattro stagioni",desc:"Pomodoro, mozzarella, funghi, prosciutto, olive, carciofi",price:"€11.00"},
        {name:"Cosacca",desc:"Pomodoro San Marzano, pecorino, basilico",price:"€7.50"},
        {name:"Ripieno fritto",desc:"Ricotta, salame, cicoli – fritto",price:"€9.00"},
        {name:"Montanara",desc:"Fritta e poi condita con pomodoro e parmigiano",price:"€8.00"},
      ],
      dolci:[
        {name:"Sfogliatella riccia",desc:"Ricotta e semolino profumati",price:"€2.50"},
        {name:"Babà al rum",desc:"Il classico napoletano",price:"€3.00"},
        {name:"Pastiera napoletana",desc:"Grano, ricotta, fiori d'arancio",price:"€4.00"},
      ],
      vini:[
        {name:"Falanghina del Sannio DOC",desc:"Bianco campano – bottiglia 75cl",price:"€15.00"},
        {name:"Aglianico del Taburno",desc:"Rosso campano – bottiglia 75cl",price:"€18.00"},
        {name:"Lacryma Christi del Vesuvio",desc:"Bianco – bottiglia 75cl",price:"€16.00"},
        {name:"Vino della casa",desc:"Caraffa 0,5L",price:"€5.00"},
      ],
      birre:[
        {name:"Birra Peroni",desc:"33cl",price:"€3.00"},
        {name:"Nastro Azzurro",desc:"66cl – bottiglia grande",price:"€5.00"},
        {name:"Baffo d'oro",desc:"33cl – lager premium",price:"€3.50"},
      ],
      bibite:[
        {name:"Acqua naturale / frizzante",desc:"75cl",price:"€1.50"},
        {name:"Coca-Cola",desc:"33cl – vetro",price:"€2.50"},
        {name:"Limonata San Pellegrino",desc:"33cl – lattina",price:"€2.50"},
        {name:"Aranciata San Pellegrino",desc:"33cl – lattina",price:"€2.50"},
        {name:"Caffè espresso napoletano",desc:"La Moka più famosa d'Italia",price:"€0.90"},
      ]
    }
  },
  {
    id:3, name:"Osteria del Chianti", city:"Firenze", cat:"osteria",
    emoji:"🍷", stars:"★★★★☆", avgPrice:"€30–50",
    address:"Piazzale Michelangelo 2, Firenze", phone:"055 234 2777",
    orari:"12:30–14:30 · 19:30–22:30",
    desc:"Osteria toscana con vista su Firenze. Bistecca alla fiorentina, ribollita e vini del Chianti Classico selezionati direttamente dai produttori.",
    lat:43.7696, lng:11.2558,
    menu:{
      antipasti:[
        {name:"Crostini toscani",desc:"Fegatini di pollo, capperi, acciughe",price:"€7.00"},
        {name:"Panzanella",desc:"Pane sciocco, pomodoro, cipolla rossa, basilico",price:"€8.00"},
        {name:"Lardo di Colonnata su crostino",desc:"Lardo stagionato in marmo",price:"€9.00"},
        {name:"Affettati toscani misti",desc:"Finocchiona, sbriciolona, prosciutto Toscano",price:"€13.00"},
      ],
      primi:[
        {name:"Ribollita",desc:"Pane, fagioli, cavolo nero, verdure – zuppa tradizionale",price:"€12.00"},
        {name:"Pappa al pomodoro",desc:"Pomodoro maturo, pane toscano, basilico",price:"€11.00"},
        {name:"Pici al ragù di cinghiale",desc:"Pasta grossa artigianale, ragù di cinghiale",price:"€16.00"},
        {name:"Tagliatelle al tartufo nero",desc:"Pasta fresca, tartufo nero di Norcia",price:"€22.00"},
      ],
      secondi:[
        {name:"Bistecca alla Fiorentina",desc:"Chianina, al sangue, 800g – per 2 persone",price:"€55.00"},
        {name:"Peposo dell'Impruneta",desc:"Manzo stufato al vino Chianti, pepe nero",price:"€18.00"},
        {name:"Cinghiale in umido",desc:"Cinghiale, olive, capperi, pomodoro",price:"€20.00"},
        {name:"Fagioli all'uccelletto",desc:"Cannellini, salvia, aglio, pomodoro",price:"€10.00"},
      ],
      dolci:[
        {name:"Cantucci e Vin Santo",desc:"Biscotti alle mandorle + bicchiere Vin Santo",price:"€8.00"},
        {name:"Panna cotta al miele del Mugello",desc:"Miele di acacia, noci",price:"€6.00"},
        {name:"Torta della nonna",desc:"Crema pasticcera, pinoli, zucchero a velo",price:"€5.50"},
      ],
      vini:[
        {name:"Chianti Classico DOCG Riserva",desc:"Castellina in Chianti – bottiglia 75cl",price:"€28.00"},
        {name:"Brunello di Montalcino DOCG",desc:"Bottiglia 75cl – eccellenza toscana",price:"€65.00"},
        {name:"Vernaccia di San Gimignano",desc:"Bianco DOC – bottiglia 75cl",price:"€18.00"},
        {name:"Super Tuscan IGT",desc:"Sangiovese, Cabernet – bottiglia 75cl",price:"€35.00"},
        {name:"Vin Santo del Chianti",desc:"Dessert wine – 37.5cl",price:"€20.00"},
        {name:"Vino della casa",desc:"Caraffa 0.5L – Chianti giovane",price:"€8.00"},
      ],
      birre:[
        {name:"Birra Menabrea",desc:"33cl – bionda piemontese",price:"€4.00"},
        {name:"Birra artigianale Fiorentina",desc:"50cl – rossa ambrata",price:"€6.00"},
      ],
      bibite:[
        {name:"Acqua Panna / S.Pellegrino",desc:"75cl",price:"€2.50"},
        {name:"Limonata di casa",desc:"Limone, zucchero, menta",price:"€4.00"},
        {name:"Succhi di frutta premium",desc:"Yoga, 20cl",price:"€3.00"},
        {name:"Caffè espresso",desc:"Miscela toscana",price:"€1.20"},
        {name:"Amaro Averna / Fernet",desc:"Digestivo – 4cl",price:"€4.00"},
      ]
    }
  },
  {
    id:4, name:"Bar Centrale Venezia", city:"Venezia", cat:"bar",
    emoji:"☕", stars:"★★★★☆", avgPrice:"€5–15",
    address:"Campo San Polo 2168, Venezia", phone:"041 523 4456",
    orari:"07:00–22:00",
    desc:"Bar storico veneziano con cicchetti, ombra di vino e tramezzini. Colazione tipica veneziana e aperitivo Spritz originale.",
    lat:45.4372, lng:12.3320,
    menu:{
      colazione:[
        {name:"Caffè espresso",desc:"Miscela veneziana tostata",price:"€1.10"},
        {name:"Cappuccino",desc:"Con latte fresco",price:"€1.50"},
        {name:"Cornetto burro",desc:"Vuoto o con marmellata/crema",price:"€1.30"},
        {name:"Cornetto integrale",desc:"Con cereali e miele",price:"€1.50"},
        {name:"Tramezzino misto",desc:"Prosciutto e mozzarella, tonno e olive",price:"€2.50"},
        {name:"Brioche veneziana",desc:"Soffice, con uvetta",price:"€2.00"},
      ],
      cicchetti:[
        {name:"Baccalà mantecato su polenta",desc:"Merluzzo montato, polenta bianca – 2 pezzi",price:"€4.00"},
        {name:"Sarde in saor",desc:"Sardine fritte, cipolle, uvetta, pinoli",price:"€4.50"},
        {name:"Mozzarella in carrozza",desc:"Fritto dorato, mozzarella filante",price:"€3.50"},
        {name:"Crostino con speck e brie",desc:"Pane tostato, speck Alto Adige",price:"€3.00"},
        {name:"Uova sode con maionese",desc:"Classico cicchetto veneziano",price:"€1.50"},
        {name:"Polpette di carne",desc:"Fritte, con prezzemolo",price:"€3.50"},
        {name:"Tagliere cicchetti misti",desc:"Selezione di 8 cicchetti",price:"€14.00"},
      ],
      dolci:[
        {name:"Tiramisù veneziano",desc:"La versione originale veneziana",price:"€5.00"},
        {name:"Baicoli con gelato",desc:"Biscotti veneziani, gelato artigianale",price:"€4.50"},
        {name:"Frittelle veneziane",desc:"Solo a Carnevale – con crema o uvetta",price:"€2.50"},
      ],
      vini:[
        {name:"Prosecco DOC Treviso",desc:"Flute – frizzante",price:"€4.00"},
        {name:"Soave DOC",desc:"Bianco veneto – calice",price:"€4.50"},
        {name:"Amarone della Valpolicella",desc:"Calice – vino rosso potente",price:"€9.00"},
        {name:"Pinot Grigio delle Venezie",desc:"Calice – fresco e minerale",price:"€4.00"},
        {name:"Spritz Aperol",desc:"Prosecco, Aperol, arancia, oliva",price:"€5.50"},
        {name:"Spritz Campari",desc:"Prosecco, Campari, arancia",price:"€6.00"},
        {name:"Ombra di vino bianco/rosso",desc:"Calice piccolo – tradizione veneziana",price:"€2.50"},
      ],
      birre:[
        {name:"Birra Pedavena",desc:"33cl – bionda veneta storica",price:"€3.50"},
        {name:"Corona extra",desc:"33cl – bottiglia",price:"€4.00"},
        {name:"Heineken",desc:"33cl – lattina",price:"€3.50"},
      ],
      bibite:[
        {name:"Acqua minerale",desc:"50cl",price:"€1.50"},
        {name:"Succo ACE",desc:"Arancia, carota, limone – 20cl",price:"€2.50"},
        {name:"The freddo",desc:"Pesca o limone – 33cl",price:"€2.50"},
        {name:"Coca-Cola / Fanta",desc:"33cl – vetro",price:"€2.50"},
        {name:"Gassosa",desc:"Bibita italiana classica – 20cl",price:"€2.00"},
      ]
    }
  },
  {
    id:5, name:"Pasticceria Marchesi", city:"Milano", cat:"pasticceria",
    emoji:"🥐", stars:"★★★★★", avgPrice:"€5–20",
    address:"Via Santa Maria alla Porta 11, Milano", phone:"02 876 730",
    orari:"08:00–20:00 (chiuso lunedì)",
    desc:"Pasticceria milanese dal 1824. Panettone artigianale, torta Marchesi e dolci della tradizione lombarda in un locale storico nel cuore di Milano.",
    lat:45.4643, lng:9.1879,
    menu:{
      colazione:[
        {name:"Caffè espresso",desc:"Miscela milanese pregiata",price:"€1.50"},
        {name:"Caffè macchiato",desc:"Espresso con goccia di latte",price:"€1.70"},
        {name:"Cappuccino",desc:"Latte intero montato a mano",price:"€2.00"},
        {name:"Croissant burro",desc:"Sfogliato, burro francese AOP",price:"€2.50"},
        {name:"Pain au chocolat",desc:"Cioccolato fondente 70%",price:"€2.80"},
        {name:"Brioche con crema pasticcera",desc:"Crema all'uovo profumata alla vaniglia",price:"€3.00"},
      ],
      dolci:[
        {name:"Panettone artigianale",desc:"Uvetta sultanina, cedro, arancia candita – 1kg",price:"€38.00"},
        {name:"Torta Marchesi",desc:"Pasta frolla, crema, frutta fresca – porzione",price:"€7.50"},
        {name:"Millefoglie",desc:"Sfoglia caramellata, crema chantilly",price:"€6.50"},
        {name:"Torta Sacher",desc:"Cioccolato fondente, confettura di albicocche",price:"€7.00"},
        {name:"Eclair al cioccolato",desc:"Pasta choux, fondente 70%",price:"€4.50"},
        {name:"Cannolo siciliano",desc:"Ricotta di pecora, pistacchio di Bronte",price:"€4.00"},
        {name:"Macaron assortiti",desc:"6 gusti – fragola, pistacchio, limone…",price:"€12.00"},
        {name:"Babà al rum",desc:"Bagnato nel rum giamaicano invecchiato",price:"€5.00"},
        {name:"Torta di mele della tradizione",desc:"Mele golden, cannella, vaniglia",price:"€5.50"},
      ],
      cioccolato:[
        {name:"Tavoletta fondente 70%",desc:"Cacao Ecuador, 100g",price:"€6.00"},
        {name:"Tavoletta al latte",desc:"Cacao Ghana, nocciole piemontesi, 100g",price:"€6.00"},
        {name:"Praline assortite",desc:"Scatola da 9 pezzi – assortimento stagionale",price:"€18.00"},
        {name:"Tartufi al cioccolato",desc:"Scatola da 6 – cacao e rum",price:"€14.00"},
      ],
      bevande:[
        {name:"Marocchino",desc:"Espresso, cacao, latte montato",price:"€2.50"},
        {name:"Cioccolata calda",desc:"Fondente 70%, densa e cremosa",price:"€4.50"},
        {name:"Tè in foglia",desc:"Earl Grey, Darjeeling, Camomilla",price:"€4.00"},
        {name:"Acqua Lurisia naturale/frizzante",desc:"50cl – premium italiana",price:"€2.50"},
        {name:"Succo di frutta Toschi",desc:"Pesca, pera, albicocca – 20cl",price:"€3.00"},
        {name:"Limonata artigianale",desc:"Limoni di Sicilia, zucchero di canna",price:"€4.50"},
        {name:"Prosecco Valdobbiadene DOCG",desc:"Calice – con dolce",price:"€7.00"},
      ]
    }
  },
  {
    id:6, name:"Ristorante Il Pescatore", city:"Palermo", cat:"ristorante",
    emoji:"🐟", stars:"★★★★★", avgPrice:"€35–55",
    address:"Via del Porto 18, Palermo", phone:"091 611 5628",
    orari:"12:00–15:00 · 19:30–23:00",
    desc:"Pesce freschissimo del Mediterraneo, pesca del giorno. Cascate di frutti di mare, pasta con le sarde e couscous alla trapanese.",
    lat:38.1157, lng:13.3615,
    menu:{
      antipasti:[
        {name:"Frutti di mare misti",desc:"Cozze, vongole, gamberi, ostriche – pesca del giorno",price:"€18.00"},
        {name:"Caponata di melanzane",desc:"Agrodolce siciliana con pinoli e uvetta",price:"€9.00"},
        {name:"Insalata di polpo",desc:"Polpo verace, patate, prezzemolo, limone",price:"€14.00"},
        {name:"Gamberi rossi crudi di Mazara",desc:"Olio EVO Sicilia, sale marino",price:"€22.00"},
        {name:"Panelle e crocchè",desc:"Street food palermitano – 4 pezzi",price:"€6.00"},
      ],
      primi:[
        {name:"Pasta con le sarde",desc:"Sarde, finocchietto, uvetta, pinoli, zafferano",price:"€16.00"},
        {name:"Spaghetti alle vongole veraci",desc:"Vongole del Golfo, aglio, prezzemolo",price:"€17.00"},
        {name:"Busiate al pesto trapanese",desc:"Basilico, pomodoro, mandorle, aglio",price:"€14.00"},
        {name:"Risotto allo scoglio",desc:"Frutti di mare, crostacei, zafferano",price:"€19.00"},
        {name:"Couscous alla trapanese",desc:"Pesce misto, brodo di pesce aromatico",price:"€18.00"},
      ],
      secondi:[
        {name:"Grigliata mista di pesce",desc:"Spigola, orata, gamberi, calamari – pesca del giorno",price:"€28.00"},
        {name:"Spigola al sale",desc:"Intera, cotta nel sale, servita al tavolo",price:"€24.00"},
        {name:"Totani ripieni alla messinese",desc:"Calamari, pangrattato, aglio, prezzemolo, pomodoro",price:"€20.00"},
        {name:"Tonno alla stemperata",desc:"Tonno rosso del Mediterraneo, olive, capperi",price:"€24.00"},
      ],
      dolci:[
        {name:"Cannolo siciliano originale",desc:"Ricotta fresca di pecora, pistacchio Bronte",price:"€4.50"},
        {name:"Cassata siciliana",desc:"Pan di Spagna, ricotta, canditi, pasta reale",price:"€6.50"},
        {name:"Granita al limone con brioche",desc:"Limoni di Siracusa, brioche col tuppo",price:"€5.00"},
        {name:"Sfinci di San Giuseppe",desc:"Frittella con ricotta e scaglie di cioccolato",price:"€3.50"},
      ],
      vini:[
        {name:"Nero d'Avola DOC",desc:"Rosso siciliano – bottiglia 75cl",price:"€20.00"},
        {name:"Grillo DOC",desc:"Bianco Sicilia – bottiglia 75cl",price:"€18.00"},
        {name:"Etna Bianco DOC",desc:"Carricante, vulcanico – bottiglia 75cl",price:"€25.00"},
        {name:"Marsala Fine DOC",desc:"Secco – aperitivo o dessert, 37.5cl",price:"€14.00"},
        {name:"Zibibbo Passito di Pantelleria",desc:"Vino dolce, 37.5cl",price:"€22.00"},
      ],
      birre:[
        {name:"Birra Messina",desc:"33cl – siciliana storica",price:"€3.50"},
        {name:"Birra Moretti Radler",desc:"33cl – limone, leggera",price:"€3.50"},
        {name:"Birra artigianale Sicula",desc:"50cl – ambrata, agrumi siciliani",price:"€6.00"},
      ],
      bibite:[
        {name:"Acqua Limone / Arancia fresca",desc:"Spremuta al momento",price:"€3.50"},
        {name:"Granita di caffè",desc:"Caffè siciliano, granita finissima",price:"€3.00"},
        {name:"Acqua naturale / frizzante",desc:"75cl",price:"€2.00"},
        {name:"Bitter Campari spritz",desc:"Aperitivo siciliano",price:"€5.00"},
        {name:"Limoncello di Sicilia",desc:"Digestivo – 4cl",price:"€4.00"},
      ]
    }
  },
  {
    id:7, name:"Trattoria Bolognese", city:"Bologna", cat:"ristorante",
    emoji:"🍖", stars:"★★★★★", avgPrice:"€30–45",
    address:"Via delle Moline 5, Bologna", phone:"051 235 343",
    orari:"12:00–14:30 · 19:30–22:30",
    desc:"La vera cucina emiliana: tagliatelle al ragù bolognese DOC, tortellini in brodo e lasagne come vuole la tradizione. Siamo depositari della ricetta originale.",
    lat:44.4979, lng:11.3426,
    menu:{
      antipasti:[
        {name:"Affettati emiliani DOP",desc:"Mortadella IGP, Prosciutto di Parma 24M, Salame Milano",price:"€14.00"},
        {name:"Gnocco fritto con salumi",desc:"Pasta fritta soffice, tigelle, lardo",price:"€10.00"},
        {name:"Crescentine con squacquerone",desc:"Pane emiliano fritto, formaggio fresco",price:"€9.00"},
        {name:"Parmigiana di melanzane",desc:"Melanzane, ragù, parmigiano 24M",price:"€11.00"},
      ],
      primi:[
        {name:"Tagliatelle al ragù bolognese",desc:"Pasta fresca uovo, ragù originale iscritto alla CCIAA",price:"€15.00"},
        {name:"Tortellini in brodo di cappone",desc:"Ripieni di carne e parmigiano, brodo fatto in casa",price:"€16.00"},
        {name:"Lasagne verdi al forno",desc:"Sfoglia verde, besciamella, ragù, parmigiano",price:"€14.00"},
        {name:"Garganelli al ragù bianco",desc:"Pasta rigata fresca, salsiccia, panna, parmigiano",price:"€14.00"},
        {name:"Passatelli in brodo",desc:"Pan grattato, uovo, parmigiano – piatto invernale",price:"€13.00"},
      ],
      secondi:[
        {name:"Cotoletta alla bolognese",desc:"Vitello impanato, prosciutto, parmigiano, tartufo",price:"€22.00"},
        {name:"Bollito misto emiliano",desc:"5 tagli, salsa verde, mostarda",price:"€25.00"},
        {name:"Maiale al latte",desc:"Lonza di maiale, latte intero, salvia",price:"€18.00"},
        {name:"Coniglio alla cacciatora",desc:"Olive, capperi, erbe aromatiche",price:"€19.00"},
      ],
      dolci:[
        {name:"Torta di riso bolognese",desc:"Riso, mandorle, rhum, limone",price:"€5.00"},
        {name:"Zuppa inglese",desc:"Alchermes, pan di Spagna, crema",price:"€6.00"},
        {name:"Panna cotta alla nocciola",desc:"Nocciole piemontesi IGP",price:"€5.50"},
        {name:"Tortino al cioccolato fondente",desc:"Cuore morbido, gelato vaniglia",price:"€7.00"},
      ],
      vini:[
        {name:"Pignoletto DOC Colli Bolognesi",desc:"Bianco frizzante – bottiglia 75cl",price:"€15.00"},
        {name:"Lambrusco di Sorbara DOC",desc:"Rosso secco frizzante – bottiglia 75cl",price:"€16.00"},
        {name:"Sangiovese di Romagna DOC",desc:"Rosso fermo – bottiglia 75cl",price:"€18.00"},
        {name:"Albana di Romagna DOCG",desc:"Bianco fermo – bottiglia 75cl",price:"€20.00"},
        {name:"Vino della casa",desc:"Lambrusco 0.5L",price:"€7.00"},
      ],
      birre:[
        {name:"Birra del Borgo ReAle",desc:"33cl – IPA italiana",price:"€5.50"},
        {name:"Birra Forst",desc:"33cl – bionda altoatesina",price:"€4.00"},
        {name:"Ichnusa non filtrata",desc:"33cl – sarda, profumata",price:"€4.50"},
      ],
      bibite:[
        {name:"Acqua naturale / frizzante",desc:"75cl",price:"€2.00"},
        {name:"Coca-Cola / Chinotto",desc:"33cl – vetro",price:"€2.50"},
        {name:"Lambrusco analcolico",desc:"Uva, frizzante, fresca",price:"€3.00"},
        {name:"Caffè espresso",desc:"Miscela bolognese",price:"€1.10"},
        {name:"Grappino di Romagna",desc:"Digestivo – 4cl",price:"€4.00"},
      ]
    }
  },
  {
    id:8, name:"Gelateria Artigianale Giolitti", city:"Roma", cat:"bar",
    emoji:"🍦", stars:"★★★★★", avgPrice:"€3–8",
    address:"Via degli Uffici del Vicario 40, Roma", phone:"06 699 1243",
    orari:"07:00–01:00",
    desc:"La gelateria più famosa di Roma dal 1900. Gelato artigianale fresco ogni giorno, granite, semifreddi e dolci storici romani.",
    lat:41.8993, lng:12.4768,
    menu:{
      gelati:[
        {name:"Cono piccolo 1 gusto",desc:"Cialda o coppetta",price:"€2.50"},
        {name:"Cono medio 2 gusti",desc:"Cialda o coppetta",price:"€3.50"},
        {name:"Cono grande 3 gusti",desc:"Cialda o coppetta",price:"€4.50"},
        {name:"Gusti del giorno",desc:"Stracciatella, pistacchio, nocciola, limone, fragola, cioccolato, crema, tiramisù, amarena, caffè, zabaione…",price:"–"},
        {name:"Cassata gelato",desc:"Vaschetta 500ml – assortimento classico",price:"€8.00"},
      ],
      granite:[
        {name:"Granita di limone",desc:"Limoni di Sicilia, granita finissima",price:"€3.50"},
        {name:"Granita di caffè",desc:"Con o senza panna montata",price:"€3.50"},
        {name:"Granita di fragola",desc:"Fragole fresche di stagione",price:"€3.50"},
        {name:"Granita di mandorla",desc:"Mandorle siciliane, fiori d'arancio",price:"€3.50"},
      ],
      dolci:[
        {name:"Maritozzi con panna",desc:"Soffice brioche romana, panna fresca",price:"€3.00"},
        {name:"Millefoglie",desc:"Sfoglia croccante, crema chantilly",price:"€5.50"},
        {name:"Torta di ricotta romana",desc:"Ricotta, cedro, cannella",price:"€5.00"},
        {name:"Cialde con Nutella e gelato",desc:"Waffle belga, gelato alla crema",price:"€6.00"},
      ],
      bevande:[
        {name:"Caffè espresso",desc:"Torrefazione Giolitti",price:"€1.00"},
        {name:"Caffè shakerato",desc:"Ghiacciato, zucchero, schiuma",price:"€3.00"},
        {name:"Cioccolata calda",desc:"Fondente densa – solo d'inverno",price:"€4.50"},
        {name:"Frullato di frutta",desc:"Fragola, banana, frutti di bosco",price:"€5.00"},
        {name:"Acqua naturale / frizzante",desc:"50cl",price:"€1.50"},
        {name:"Succhi di frutta",desc:"Assortiti, 20cl",price:"€2.50"},
        {name:"Prosecco con gelato",desc:"Affogato al Prosecco – golosità",price:"€7.00"},
      ]
    }
  },
  {
    id:9, name:"Osteria al Bacco", city:"Torino", cat:"osteria",
    emoji:"🍷", stars:"★★★★☆", avgPrice:"€28–42",
    address:"Via San Domenico 22, Torino", phone:"011 436 9790",
    orari:"12:00–14:00 · 19:30–22:30",
    desc:"Cucina piemontese autentica: tajarin al tartufo bianco, fonduta, brasato al Barolo. Cantina con oltre 200 etichette piemontesi.",
    lat:45.0703, lng:7.6869,
    menu:{
      antipasti:[
        {name:"Vitello tonnato",desc:"Vitello arrosto, salsa tonnata classica, capperi",price:"€13.00"},
        {name:"Acciughe al verde",desc:"Acciughe del Cantabrico, salsa verde prezzemolo",price:"€10.00"},
        {name:"Bagna cauda",desc:"Salsa calda acciughe aglio, verdure crude e cotte",price:"€14.00"},
        {name:"Insalata russa piemontese",desc:"Verdure, maionese, capperi",price:"€9.00"},
        {name:"Lardo d'Arnad DOP",desc:"Con miele di montagna e noci",price:"€11.00"},
      ],
      primi:[
        {name:"Tajarin al tartufo bianco",desc:"Pasta fresca uovo, burro di malga, tartufo Alba",price:"€28.00"},
        {name:"Agnolotti del plin al sugo d'arrosto",desc:"Pasta ripiena piemontese, fondo di carne",price:"€16.00"},
        {name:"Risotto al Barolo",desc:"Riso Carnaroli, Barolo, Parmigiano",price:"€18.00"},
        {name:"Gnocchi al gorgonzola",desc:"Gnocchi di patate, gorgonzola DOP, noce",price:"€14.00"},
      ],
      secondi:[
        {name:"Brasato al Barolo",desc:"Manzo piemontese, Barolo, verdure, 8 ore di cottura",price:"€24.00"},
        {name:"Fonduta piemontese",desc:"Fontina DOP, uovo, tartufo nero",price:"€18.00"},
        {name:"Coniglio in civet",desc:"Coniglio, vino rosso, cipolle, aromi",price:"€20.00"},
        {name:"Finanziera piemontese",desc:"Rigaglie di pollo, funghi, Marsala",price:"€19.00"},
      ],
      dolci:[
        {name:"Bunet",desc:"Budino cioccolato e amaretti – dolce piemontese",price:"€6.00"},
        {name:"Panna cotta al caramello",desc:"Con nocciole delle Langhe IGP",price:"€5.50"},
        {name:"Bonet",desc:"Semifreddo, caffè, cioccolato",price:"€6.50"},
        {name:"Zabaione al Moscato",desc:"Uova, zucchero, Moscato d'Asti",price:"€7.00"},
      ],
      vini:[
        {name:"Barolo DOCG",desc:"Nebbiolo, Langhe – bottiglia 75cl",price:"€45.00"},
        {name:"Barbaresco DOCG",desc:"Nebbiolo, Treiso – bottiglia 75cl",price:"€38.00"},
        {name:"Moscato d'Asti DOCG",desc:"Dolce frizzante – bottiglia 75cl",price:"€18.00"},
        {name:"Barbera d'Asti Superiore",desc:"Bottiglia 75cl",price:"€22.00"},
        {name:"Dolcetto d'Alba DOC",desc:"Bottiglia 75cl",price:"€18.00"},
        {name:"Roero Arneis DOCG",desc:"Bianco piemontese – bottiglia 75cl",price:"€20.00"},
        {name:"Vino della casa",desc:"Barbera 0.5L",price:"€8.00"},
      ],
      birre:[
        {name:"Birra Menabrea Ambrata",desc:"33cl – fonderia di Biella 1846",price:"€4.50"},
        {name:"Birra artigianale Torino",desc:"50cl – luppolata locale",price:"€6.50"},
      ],
      bibite:[
        {name:"Acqua S.Pellegrino / Panna",desc:"75cl",price:"€2.50"},
        {name:"Chinotto San Pellegrino",desc:"20cl – amaro, tradizionale",price:"€3.00"},
        {name:"Sambuca Molinari",desc:"Digestivo – 4cl",price:"€4.00"},
        {name:"Caffè espresso",desc:"Lavazza – la casa di Torino",price:"€1.20"},
        {name:"Bicerin torinese",desc:"Caffè, cioccolato, panna – bevanda storica",price:"€5.00"},
      ]
    }
  },
  {
    id:10, name:"Ristorante Mare e Monti", city:"Genova", cat:"ristorante",
    emoji:"🌊", stars:"★★★★☆", avgPrice:"€25–40",
    address:"Piazza Caricamento 3, Genova", phone:"010 247 1090",
    orari:"12:00–15:00 · 19:00–23:00",
    desc:"Cucina ligure autentica: pesto con le trofie, focaccia di Recco, acciughe del mar Ligure e tocco di vitello. Vista sul porto antico.",
    lat:44.4128, lng:8.9200,
    menu:{
      antipasti:[
        {name:"Farinata di ceci",desc:"Cotta nel forno a legna – piatto ligure",price:"€6.00"},
        {name:"Acciughe sotto sale del Mar Ligure",desc:"Con burro e pane di campagna",price:"€10.00"},
        {name:"Cappon magro",desc:"Verdure, pesce, salsa verde – piatto storico genovese",price:"€16.00"},
        {name:"Pansoti con salsa di noci",desc:"Antipasto o primo leggero",price:"€12.00"},
      ],
      primi:[
        {name:"Trofie al pesto genovese",desc:"Pesto DOP: basilico Genovese, pinoli, pecorino, aglio",price:"€14.00"},
        {name:"Trenette al pesto con patate e fagiolini",desc:"Ricetta originale genovese",price:"€15.00"},
        {name:"Minestrone alla genovese",desc:"Verdure fresche, pesto, pasta corta",price:"€11.00"},
        {name:"Spaghetti ai gamberi rosa",desc:"Gamberi del Golfo, pomodorini, vino bianco",price:"€18.00"},
      ],
      secondi:[
        {name:"Tocco di vitello",desc:"Stufato al vino rosso, pinoli, verdure",price:"€19.00"},
        {name:"Brandacujun",desc:"Stoccafisso mantecato, patate, aglio, prezzemolo",price:"€16.00"},
        {name:"Branzino al cartoccio",desc:"Olio EVO Liguria, olive taggiasche, capperi",price:"€22.00"},
        {name:"Coniglio alla ligure",desc:"Olive taggiasche, aglio, vino bianco, timo",price:"€20.00"},
      ],
      dolci:[
        {name:"Pandolce genovese",desc:"Frutta candita, uvetta, pinoli – dolce tradizionale",price:"€5.00"},
        {name:"Canestrelli",desc:"Biscotti al burro con zucchero a velo",price:"€4.00"},
        {name:"Focaccia di Recco col formaggio",desc:"Croccante, stracchino filante",price:"€8.00"},
      ],
      vini:[
        {name:"Vermentino di Gallura DOCG",desc:"Bianco sardo – bottiglia 75cl",price:"€22.00"},
        {name:"Pigato Ligure IGT",desc:"Bianco ligure – bottiglia 75cl",price:"€20.00"},
        {name:"Rossese di Dolceacqua DOC",desc:"Rosso ligure – bottiglia 75cl",price:"€22.00"},
        {name:"Cinque Terre DOC",desc:"Bianco di montagna – bottiglia 75cl",price:"€24.00"},
        {name:"Sciacchetrà Cinque Terre",desc:"Passito – 37.5cl",price:"€28.00"},
      ],
      birre:[
        {name:"Birra artigianale Ligure",desc:"50cl – bionda con luppolo nobile",price:"€6.00"},
        {name:"Corona con lime",desc:"33cl",price:"€4.50"},
      ],
      bibite:[
        {name:"Acqua Sangemini naturale",desc:"75cl",price:"€2.00"},
        {name:"Succo di agrumi freschi",desc:"Arancia e pompelmo – 20cl",price:"€3.50"},
        {name:"Gassosa al limone",desc:"Artigianale, frizzante",price:"€2.50"},
        {name:"Caffè espresso",desc:"Illy – miscela genovese",price:"€1.10"},
        {name:"Grappa di Moscato",desc:"Poli Distillerie – 4cl",price:"€5.00"},
      ]
    }
  }
];
