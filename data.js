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
  },
  {
    id:11, name:"Ristorante La Pergola", city:"Roma", cat:"ristorante",
    emoji:"🌿", stars:"★★★★★", avgPrice:"€120–200",
    address:"Via Cadlolo 101, Roma", phone:"06 3509 2152",
    orari:"19:30–23:00 (chiuso dom–lun)",
    desc:"Tre stelle Michelin con vista panoramica su Roma. Lo chef Heinz Beck firma una cucina di altissimo livello creativa e mediterranea. Dress code richiesto.",
    lat:41.9090, lng:12.4274,
    menu:{
      antipasti:[
        {name:"Foie gras marinato al Porto",desc:"Riduzione di Porto 20 anni, gelatina di Moscato, pan brioche",price:"€38.00"},
        {name:"Carpaccio di gambero rosso di Mazara",desc:"Olio EVO Sicilia monocultivar, caviale Oscietra 10g",price:"€45.00"},
        {name:"Uovo di Paolo Parisi",desc:"Uovo a 65°, fonduta di Parmigiano 36 mesi, tartufo nero",price:"€32.00"},
        {name:"Capesante scottate",desc:"Saint-Jacques, crema di pastinaca, pancetta croccante, erba cipollina",price:"€36.00"},
      ],
      primi:[
        {name:"Spaghetto alla Nerano",desc:"Zucchine fritte, provolone del Monaco, basilico, bottarga di muggine",price:"€42.00"},
        {name:"Risotto alle erbe aromatiche",desc:"Riso Carnaroli Riserva San Massimo, 32 erbe, Parmigiano vacche rosse",price:"€44.00"},
        {name:"Raviolo aperto di astice",desc:"Astice bretone, bisque, caviale, burro di arachidi",price:"€58.00"},
        {name:"Tagliolini al tartufo bianco d'Alba",desc:"Pasta fresca, burro Occelli, tartufo 15g STAGIONALE",price:"€85.00"},
      ],
      secondi:[
        {name:"Piccione di Bresse in due cotture",desc:"Petto rosato, coscia confite, foie gras, spinacino selvatico",price:"€68.00"},
        {name:"Branzino selvaggio del Mediterraneo",desc:"In crosta di erbe, emulsione di limone, asparagi bianchi di Bassano",price:"€62.00"},
        {name:"Wagyu A5 Miyazaki",desc:"Controfiletto, 200g, gel di tartufo nero, purè di Ratte al tartufo",price:"€95.00"},
        {name:"Agnello da latte irpino",desc:"Sella, costolette, salsa verde, carciofi fritti",price:"€58.00"},
      ],
      dolci:[
        {name:"Sfera di cioccolato Valrhona",desc:"Guanaja 70%, cremoso al caffè, oro alimentare",price:"€22.00"},
        {name:"Soufflé al limone di Amalfi",desc:"Caldo, gelato alla vaniglia del Madagascar",price:"€20.00"},
        {name:"Tiramisù reinterpretato",desc:"Savoiardo soffiato, spuma di mascarpone, caffè di Napoli",price:"€18.00"},
        {name:"Piccola pasticceria",desc:"Mignardises dello chef – 12 pezzi",price:"€16.00"},
      ],
      vini:[
        {name:"Sassicaia DOC 2018",desc:"Bolgheri – bottiglia 75cl",price:"€280.00"},
        {name:"Barolo Monfortino Giacomo Conterno 2016",desc:"Bottiglia 75cl",price:"€380.00"},
        {name:"Ceretto Blangé Arneis 2023",desc:"Bianco piemontese – bottiglia 75cl",price:"€55.00"},
        {name:"Champagne Krug Grande Cuvée",desc:"Bottiglia 75cl",price:"€220.00"},
        {name:"Abbazia di Novacella Kerner 2023",desc:"Alto Adige – bottiglia 75cl",price:"€48.00"},
        {name:"Calice selezionato dal sommelier",desc:"Abbinamento al piatto",price:"€25–60"},
      ],
      birre:[
        {name:"Birra artigianale premium",desc:"Selezione stagionale dello chef",price:"€12.00"},
      ],
      bibite:[
        {name:"Acqua Fiuggi naturale",desc:"75cl – premium",price:"€6.00"},
        {name:"Acqua Lurisia frizzante",desc:"75cl",price:"€6.00"},
        {name:"Succo di frutta Yoga Bio",desc:"20cl – pera, albicocca, melagrana",price:"€8.00"},
        {name:"Tè Dammann Frères",desc:"Selezione di 12 varietà – teiera",price:"€12.00"},
        {name:"Caffè Specialty – filtro V60",desc:"Ethiopia Yirgacheffe, filtro",price:"€8.00"},
        {name:"Amaro Montenegro invecchiato",desc:"Digestivo 10cl",price:"€14.00"},
      ]
    }
  },
  {
    id:12, name:"Pizzeria Fratelli Salvo", city:"Napoli", cat:"pizzeria",
    emoji:"🔥", stars:"★★★★★", avgPrice:"€12–25",
    address:"Largo Arso 10, San Giorgio a Cremano, Napoli", phone:"081 472 2333",
    orari:"12:00–15:00 · 19:00–23:30",
    desc:"I fratelli Salvo sono considerati i maestri della nuova pizza napoletana. Impasto integrale, farine macinate a pietra, topping gourmet e forno a legna da 500°.",
    lat:40.8290, lng:14.3379,
    menu:{
      antipasti:[
        {name:"Montanara classica",desc:"Disco di pizza fritta, pomodoro San Marzano DOP, parmigiano",price:"€5.00"},
        {name:"Frittura napoletana della casa",desc:"Crocchè, pasta cresciuta, panzarotto ricotta e salame",price:"€10.00"},
        {name:"Mozzarella di bufala DOP intera",desc:"250g di bufala campana, pomodorini gialli del Vesuvio",price:"€10.00"},
        {name:"Selezione salumi campani",desc:"Salame napoli, capocollo, provolone del Monaco",price:"€12.00"},
      ],
      pizze:[
        {name:"Marinara Antica",desc:"Pomodoro San Marzano DOP, aglio, origano di Pantelleria, olio EVO",price:"€6.00"},
        {name:"Margherita Classica",desc:"Pomodoro San Marzano DOP, fior di latte Agerola, basilico fresco",price:"€8.00"},
        {name:"Bufala e Pomodorini",desc:"Mozzarella di bufala DOP, pomodorini del Piennolo, basilico",price:"€13.00"},
        {name:"Salsiccia e Friarielli",desc:"Fior di latte, salsiccia di maiale nero, friarielli stufati",price:"€12.00"},
        {name:"Cosacca Gourmet",desc:"Pomodoro autentico, pecorino di grotta stagionato 18M, basilico",price:"€9.00"},
        {name:"Quattro Formaggi",desc:"Fior di latte, provolone, gorgonzola DOP, parmigiano 36M",price:"€13.00"},
        {name:"Piennolo e Colatura",desc:"Pomodorini del Piennolo, colatura di alici di Cetara, oregano",price:"€14.00"},
        {name:"Don Salvatore (signature)",desc:"Bufala, gamberi rosa, zucchine, fiori di zucca",price:"€18.00"},
        {name:"Integrale al farro",desc:"Farina tipo 2 biologica, ricotta di pecora, spinaci, noci",price:"€14.00"},
        {name:"Fritta Classica",desc:"Fritta con ricotta, cicoli, provola",price:"€9.00"},
      ],
      dolci:[
        {name:"Babà al rum Bacardi",desc:"Classico lievitato, rum invecchiato, panna montata",price:"€4.00"},
        {name:"Pastiera integrale",desc:"Versione integrale con farro, ricotta, fiori d'arancio",price:"€4.50"},
        {name:"Struffoli al miele",desc:"Solo in stagione natalizia",price:"€5.00"},
      ],
      vini:[
        {name:"Falanghina Feudi di San Gregorio",desc:"Bianco campano – bottiglia 75cl",price:"€18.00"},
        {name:"Aglianico Taurasi DOCG",desc:"Rosso campano – bottiglia 75cl",price:"€28.00"},
        {name:"Greco di Tufo DOCG",desc:"Bianco – bottiglia 75cl",price:"€20.00"},
        {name:"Prosecco di Valdobbiadene",desc:"Flute – toasting",price:"€5.00"},
        {name:"Vino della casa bianco/rosso",desc:"Caraffa 0.5L",price:"€5.00"},
      ],
      birre:[
        {name:"Peroni Nastro Azzurro",desc:"33cl",price:"€3.50"},
        {name:"Birra Artigianale Kjupo",desc:"50cl – ambrata napoletana",price:"€6.50"},
        {name:"Weizen tedesca",desc:"33cl – frumento, non filtrata",price:"€4.50"},
      ],
      bibite:[
        {name:"Acqua Lete naturale/frizzante",desc:"75cl – sorgente campana",price:"€2.00"},
        {name:"Coca-Cola in bottiglia vetro",desc:"33cl",price:"€2.50"},
        {name:"Limonata Sant'Erasmo",desc:"Limoni di Procida, artigianale 25cl",price:"€3.50"},
        {name:"Aranciata rossa siciliana",desc:"San Benedetto – 33cl",price:"€2.50"},
        {name:"Caffè espresso napoletano",desc:"Torrefazione Gambrinus",price:"€1.00"},
        {name:"Limoncello di Sorrento IGP",desc:"Digestivo – 4cl",price:"€3.50"},
      ]
    }
  },
  {
    id:13, name:"Osteria Francescana", city:"Modena", cat:"osteria",
    emoji:"⭐", stars:"★★★★★", avgPrice:"€250–350",
    address:"Via Stella 22, Modena", phone:"059 210 118",
    orari:"12:30–14:00 · 20:00–22:00 (chiuso dom–lun)",
    desc:"Best Restaurant del Mondo 2016 e 2018. Lo chef Massimo Bottura trasforma la tradizione emiliana in arte contemporanea. Prenotazione con mesi di anticipo.",
    lat:44.6471, lng:10.9251,
    menu:{
      antipasti:[
        {name:"Cinque stagionature del Parmigiano Reggiano",desc:"24, 30, 36, 40, 50 mesi – cinque consistenze",price:"€38.00"},
        {name:"Oops! Ho lasciato cadere la crostata di limone",desc:"Dessert-antipasto filosofico dello chef",price:"€32.00"},
        {name:"Anguilla che risale il Po",desc:"Anguilla affumicata, polenta, mela verde, foie gras",price:"€42.00"},
        {name:"Il mare Adriatico – tutto in una forchetta",desc:"Crudi, cotti, marinature – il mare in un boccone",price:"€45.00"},
      ],
      primi:[
        {name:"Tagliatelle al sugo di arrosto",desc:"Pasta fresca doppio uovo, fondo di vitello, Parmigiano 40M",price:"€48.00"},
        {name:"Tortellini in crema di Parmigiano",desc:"Pasta ripiena, crema 36 mesi senza brodo – rivoluzione",price:"€52.00"},
        {name:"Risotto cacio e pepe alla maniera di Modena",desc:"Riso Nano Vialone, aceto balsamico tradizionale 25 anni",price:"€58.00"},
      ],
      secondi:[
        {name:"Il vitello non è partito",desc:"Vitello crudo e cotto, cervella fritta, jus",price:"€72.00"},
        {name:"Compressione di pasta e fagioli",desc:"Reinterpretazione del classico contadino emiliano",price:"€65.00"},
        {name:"Piccione di Bresse",desc:"Tre cotture, fegato, jus al balsamico 12 anni",price:"€78.00"},
      ],
      dolci:[
        {name:"Ricordo di un panino",desc:"Pane, burro e acciughe – dessert salato memorabile",price:"€22.00"},
        {name:"Tiramisù walk around the world",desc:"Versione Bottura con caffè di origini diverse",price:"€24.00"},
        {name:"Mignardises della tradizione emiliana",desc:"15 piccoli dolci artigianali",price:"€20.00"},
      ],
      vini:[
        {name:"Lambrusco di Sorbara – Cleto Chiarli",desc:"Rosso secco frizzante DOC – bottiglia 75cl",price:"€35.00"},
        {name:"Brunello di Montalcino Biondi Santi 2015",desc:"Bottiglia 75cl",price:"€420.00"},
        {name:"Champagne Dom Pérignon Blanc 2013",desc:"Bottiglia 75cl",price:"€350.00"},
        {name:"Trebbiano d'Abruzzo Valentini 2018",desc:"Bianco – bottiglia 75cl",price:"€180.00"},
        {name:"Menu abbinamento vini",desc:"7 calici selezionati in abbinamento ai piatti",price:"€180.00"},
      ],
      birre:[
        {name:"Selezionata su richiesta",desc:"Birra artigianale stagionale italiana",price:"€15.00"},
      ],
      bibite:[
        {name:"Aceto Balsamico Tradizionale di Modena DOP",desc:"25 anni – in degustazione 10ml",price:"€30.00"},
        {name:"Acqua Surgiva naturale/frizzante",desc:"75cl",price:"€8.00"},
        {name:"Caffè estratto a freddo 12h",desc:"Cold brew specialty, Ethiopia",price:"€10.00"},
        {name:"Succo di lambrusco analcolico",desc:"Mosto d'uva biologico – 20cl",price:"€8.00"},
        {name:"Digestivo Vecchio Amaro del Capo",desc:"4cl",price:"€12.00"},
      ]
    }
  },
  {
    id:14, name:"Bar dello Sport", city:"Bari", cat:"bar",
    emoji:"⚽", stars:"★★★☆☆", avgPrice:"€2–10",
    address:"Corso Cavour 55, Bari", phone:"080 521 3344",
    orari:"06:00–23:00",
    desc:"Il bar tipico barese. Colazione con cornetto e caffè, panini farciti, aperitivo pugliese con olive e taralli. Sempre animato, sempre autentico.",
    lat:41.1177, lng:16.8719,
    menu:{
      colazione:[
        {name:"Caffè espresso",desc:"Torrefazione locale",price:"€0.90"},
        {name:"Cappuccino",desc:"Latte intero",price:"€1.20"},
        {name:"Cornetto alla crema",desc:"Crema pasticcera artigianale",price:"€1.00"},
        {name:"Cornetto integrale con miele",desc:"",price:"€1.20"},
        {name:"Latte macchiato caldo",desc:"",price:"€1.40"},
        {name:"Succo di frutta Yoga",desc:"20cl – pesca, albicocca, ACE",price:"€1.50"},
      ],
      panini:[
        {name:"Panino con focaccia barese",desc:"Focaccia classica pugliese, pomodoro, olive verdi, origano",price:"€3.00"},
        {name:"Panino prosciutto e mozzarella",desc:"Ciabatta fresca, prosciutto cotto, fior di latte",price:"€3.50"},
        {name:"Panino tonno e cipolla",desc:"Tonno in olio d'oliva, cipolla dolce di Acquaviva",price:"€3.50"},
        {name:"Puccia con mortadella",desc:"Pane pugliese tipico, mortadella IGP, pistacchio",price:"€4.00"},
        {name:"Toast misto",desc:"Pane in cassetta, prosciutto, formaggio fuso",price:"€3.00"},
      ],
      aperitivo:[
        {name:"Taralli pugliesi",desc:"Dose da tavolo con l'aperitivo – olio e finocchio",price:"€2.00"},
        {name:"Olive baresane in salamoia",desc:"Ciotola condita, aglio, peperoncino",price:"€2.50"},
        {name:"Friselle con pomodoro",desc:"Pane biscottato, pomodoro, olio, oregano",price:"€3.00"},
        {name:"Bruschettine miste",desc:"8 pezzi – marinara, caprese, olive",price:"€5.00"},
      ],
      vini:[
        {name:"Primitivo di Manduria DOC",desc:"Rosso pugliese – calice",price:"€4.50"},
        {name:"Negroamaro Salice Salentino",desc:"Rosso – calice",price:"€4.00"},
        {name:"Verdeca Puglia IGT",desc:"Bianco – calice",price:"€3.50"},
        {name:"Aperol Spritz",desc:"Aperol, Prosecco, arancia",price:"€5.00"},
        {name:"Campari Spritz",desc:"Campari, Prosecco, arancia",price:"€5.50"},
      ],
      birre:[
        {name:"Peroni 33cl",desc:"",price:"€2.50"},
        {name:"Moretti 66cl",desc:"Bottiglia grande",price:"€4.50"},
        {name:"Heineken 33cl",desc:"",price:"€3.00"},
        {name:"Birra artigianale Puglia",desc:"50cl – ambrata",price:"€5.50"},
      ],
      bibite:[
        {name:"Acqua minerale",desc:"50cl",price:"€1.00"},
        {name:"Coca-Cola / Fanta / Sprite",desc:"33cl",price:"€2.00"},
        {name:"Aranciata / Limonata San Pellegrino",desc:"33cl",price:"€2.00"},
        {name:"Chinotto",desc:"20cl – amaro classico",price:"€2.00"},
        {name:"Caffè freddo shakerato",desc:"Estate pugliese",price:"€1.50"},
        {name:"Granita di caffè",desc:"Stile barese – cremosa",price:"€2.00"},
      ]
    }
  },
  {
    id:15, name:"Ristorante Da Vittorio", city:"Bergamo", cat:"ristorante",
    emoji:"🏔️", stars:"★★★★★", avgPrice:"€120–180",
    address:"Via Cantalupa 17, Brusaporto (Bergamo)", phone:"035 681024",
    orari:"12:30–14:00 · 19:30–21:30 (chiuso martedì)",
    desc:"Tre stelle Michelin, tradizione lombarda elevata al massimo livello. La famiglia Cerea porta avanti dal 1966 una cucina di eccellenza tra lago e montagna.",
    lat:45.6938, lng:9.7816,
    menu:{
      antipasti:[
        {name:"Gamberi di Sanremo con burrata",desc:"Crudi, emulsione citronnette, burrata pugliese, caviale",price:"€42.00"},
        {name:"Terrina di foie gras",desc:"Chutney di albicocche, brioche al vapore, gel di Sauternes",price:"€38.00"},
        {name:"Capesante bretoni",desc:"Saint-Jacques, crema di topinambur, tartufo nero, pancetta",price:"€40.00"},
        {name:"Polenta e osei bergamasca",desc:"Reinterpretazione contemporanea del dolce tipico",price:"€28.00"},
      ],
      primi:[
        {name:"Casoncelli alla bergamasca",desc:"Pasta ripiena di macinato, uva passa, amaretti, burro fuso e salvia",price:"€38.00"},
        {name:"Risotto allo zafferano di Navelli",desc:"Riso Carnaroli, midollo, vino bianco, Parmigiano 36M",price:"€42.00"},
        {name:"Spaghettone all'astice",desc:"Astice bretone, corallo, bisque ridotta, bottarga di muggine",price:"€55.00"},
        {name:"Tagliolini al tartufo nero di Norcia",desc:"Pasta fresca, burro di Normandia, scaglie di tartufo",price:"€58.00"},
      ],
      secondi:[
        {name:"Filetto di manzo Fassona",desc:"Fassona piemontese, midollo, jus al vino rosso, patate soffiate",price:"€68.00"},
        {name:"Branzino selvatico",desc:"Cottura in crosta di sale, salsa vierge, asparagi verdi",price:"€62.00"},
        {name:"Fagiano in due cotture",desc:"Petto, coscia confit, foie gras, cavolo verza",price:"€65.00"},
      ],
      dolci:[
        {name:"Polenta e osei (dolce originale)",desc:"Pan di spagna, crema, amaretti, cioccolato",price:"€18.00"},
        {name:"Sfera di cioccolato Araguani",desc:"Valrhona 72%, caramello salato, gelato nocciola Langhe",price:"€20.00"},
        {name:"Soufflé di pistacchio Bronte",desc:"Caldo, gelato alla crema, pralinato",price:"€22.00"},
        {name:"Piccola pasticceria Da Vittorio",desc:"12 mignardises artigianali",price:"€18.00"},
      ],
      vini:[
        {name:"Franciacorta Bellavista Alma Cuvée",desc:"Brut DOCG – bottiglia 75cl",price:"€55.00"},
        {name:"Curtefranca Bianco Ca' del Bosco",desc:"Bianco lombardia – bottiglia 75cl",price:"€48.00"},
        {name:"Barolo Serralunga Aldo Conterno 2017",desc:"Bottiglia 75cl",price:"€145.00"},
        {name:"Amarone della Valpolicella Allegrini 2016",desc:"Bottiglia 75cl",price:"€120.00"},
        {name:"Menu abbinamento sommelier",desc:"6 calici selezionati",price:"€95.00"},
      ],
      birre:[
        {name:"Birra artigianale lombarda",desc:"Selezione stagionale – 33cl",price:"€10.00"},
      ],
      bibite:[
        {name:"Acqua Surgiva naturale",desc:"75cl",price:"€5.00"},
        {name:"Acqua Ferrarelle frizzante",desc:"75cl",price:"€5.00"},
        {name:"Tè aromatizzato Dammann",desc:"Selezione – teiera per 2",price:"€14.00"},
        {name:"Caffè estratto a freddo",desc:"Cold brew specialty – 15cl",price:"€8.00"},
        {name:"Grappa Poli Cleopatra Moscato",desc:"Digestivo – 4cl",price:"€14.00"},
      ]
    }
  },
  {
    id:16, name:"Trattoria Al Gatto Nero", city:"Venezia", cat:"ristorante",
    emoji:"🐱", stars:"★★★★☆", avgPrice:"€45–70",
    address:"Fondamenta della Misericordia 2140, Venezia", phone:"041 721 120",
    orari:"12:00–14:30 · 19:00–22:00 (chiuso lunedì)",
    desc:"Pesce lagunare e cucina veneziana autentica sull'isola della Giudecca. Sarde in saor, fegato alla veneziana, risotto di gò e frittura di moeche.",
    lat:45.4316, lng:12.3120,
    menu:{
      antipasti:[
        {name:"Sarde in saor",desc:"Sardine fritte, cipolle caramellate, uvetta, pinoli, aceto di vino",price:"€14.00"},
        {name:"Capesante alla veneziana",desc:"Saint-Jacques, pangrattato, limone, prezzemolo, aglio",price:"€18.00"},
        {name:"Polenta e baccalà mantecato",desc:"Baccalà norvegese, polenta bianca di mais biancoperla",price:"€15.00"},
        {name:"Antipasto di mare della laguna",desc:"Vongole, cozze, gamberetti, insalata di polpo",price:"€22.00"},
      ],
      primi:[
        {name:"Risotto di gò",desc:"Ghiozzo lagunare, bisque, prezzemolo riccio",price:"€22.00"},
        {name:"Bigoli in salsa",desc:"Pasta grossa, acciughe, cipolla, pepe",price:"€16.00"},
        {name:"Spaghetti alle vongole in bianco",desc:"Vongole veraci della laguna, aglio, prezzemolo, vino bianco",price:"€20.00"},
        {name:"Risi e bisi",desc:"Riso e piselli freschi di Sant'Erasmo, pancetta",price:"€18.00"},
      ],
      secondi:[
        {name:"Fegato alla veneziana",desc:"Fegato di vitello, cipolle bianche, olio EVO, polenta",price:"€24.00"},
        {name:"Frittura di moeche",desc:"Granchi morbidi lagunari fritti – stagionale",price:"€32.00"},
        {name:"Branzino al forno con verdure",desc:"Branzino selvaggio, patate, olive, capperi",price:"€28.00"},
        {name:"Seppie al nero con polenta",desc:"Seppie lagunari, sugo al nero, polenta bianca",price:"€22.00"},
      ],
      dolci:[
        {name:"Tiramisù veneziano",desc:"Savoiardi, mascarpone, caffè ristretto, cacao",price:"€8.00"},
        {name:"Baicoli con zabaione",desc:"Biscotti veneziani, zabaione al Marsala",price:"€9.00"},
        {name:"Frittelle di Carnevale",desc:"Solo gennaio-febbraio – crema, uvetta o fritte",price:"€5.00"},
      ],
      vini:[
        {name:"Soave Classico Pieropan",desc:"Bianco veneto DOC – bottiglia 75cl",price:"€28.00"},
        {name:"Amarone Allegrini 2017",desc:"Rosso DOCG – bottiglia 75cl",price:"€75.00"},
        {name:"Prosecco Superiore Valdobbiadene DOCG",desc:"Bottiglia 75cl",price:"€22.00"},
        {name:"Pinot Grigio Jermann",desc:"Friulano – bottiglia 75cl",price:"€32.00"},
        {name:"Vino della casa",desc:"Soave 0.5L",price:"€9.00"},
      ],
      birre:[
        {name:"Birra Pedavena",desc:"33cl – bionda veneta storica",price:"€4.00"},
        {name:"Ichnusa non filtrata",desc:"33cl",price:"€4.50"},
      ],
      bibite:[
        {name:"Acqua San Benedetto naturale/frizzante",desc:"75cl",price:"€2.50"},
        {name:"Spritz Aperol",desc:"Prosecco, Aperol, soda, arancia",price:"€6.00"},
        {name:"Bitter Campari con soda",desc:"Aperitivo tradizionale",price:"€5.00"},
        {name:"Caffè veneziano",desc:"Espresso ristretto",price:"€1.50"},
        {name:"Grappa di Prosecco",desc:"Mazzetti d'Altavilla – 4cl",price:"€5.00"},
      ]
    }
  },
  {
    id:17, name:"Pasticceria Siciliana Rosciglione", city:"Palermo", cat:"pasticceria",
    emoji:"🍋", stars:"★★★★★", avgPrice:"€3–15",
    address:"Via Discesa dei Giudici 4, Palermo", phone:"091 589 144",
    orari:"07:30–21:00",
    desc:"La pasticceria siciliana più antica di Palermo, dal 1890. Cannoli con ricotta freschissima, cassate artigianali, paste di mandorla e granita vera.",
    lat:38.1175, lng:13.3655,
    menu:{
      colazione:[
        {name:"Caffè espresso palermitano",desc:"Miscela Morettino – la più famosa di Palermo",price:"€1.00"},
        {name:"Cappuccino",desc:"Con latte fresco intero",price:"€1.30"},
        {name:"Granita con brioche col tuppo",desc:"Limone, caffè, mandorla, fragola o gelso",price:"€3.50"},
        {name:"Cornetto siciliano",desc:"Con crema, pistacchio o cioccolato",price:"€1.50"},
        {name:"Iris fritta",desc:"Frittella soffice, crema di ricotta, cioccolato",price:"€2.00"},
      ],
      dolci:[
        {name:"Cannolo siciliano – piccolo",desc:"Scorza fritta, ricotta di pecora fresca, scaglie cioccolato",price:"€2.50"},
        {name:"Cannolo siciliano – grande",desc:"Scorza fritta, ricotta, canditi, pistacchio di Bronte",price:"€4.00"},
        {name:"Cassata siciliana – porzione",desc:"Pan di Spagna, pasta reale, ricotta, canditi, glassa",price:"€5.50"},
        {name:"Cassata intera",desc:"Torta intera per 8-10 persone",price:"€38.00"},
        {name:"Pasta di mandorla",desc:"100g – mandorle di Avola, zucchero, aromi",price:"€4.00"},
        {name:"Frutta martorana",desc:"Pasta reale a forma di frutta – pezzi",price:"€2.50"},
        {name:"Mpanatigghi di Modica",desc:"Dolce modicano con cioccolato e carne",price:"€3.00"},
        {name:"Cioccolato di Modica fondente",desc:"100g – cacao crudo, zucchero",price:"€5.00"},
        {name:"Torta di ricotta e visciole",desc:"Classico siciliano – porzione",price:"€5.00"},
        {name:"Minne di Sant'Agata",desc:"Dolce catanese – ricotta, pistacchio",price:"€3.50"},
      ],
      granite:[
        {name:"Granita al limone",desc:"Limoni di Siracusa, acqua, zucchero – no coloranti",price:"€3.00"},
        {name:"Granita al caffè",desc:"Caffè ristretto, con o senza panna",price:"€3.00"},
        {name:"Granita alla mandorla",desc:"Mandorle di Avola, fiori d'arancio",price:"€3.00"},
        {name:"Granita al gelso nero",desc:"Gelsi freschi di Sicilia",price:"€3.50"},
        {name:"Granita al pistacchio",desc:"Pistacchio di Bronte DOP",price:"€4.00"},
      ],
      bevande:[
        {name:"Acqua minerale",desc:"50cl",price:"€1.00"},
        {name:"Succo di arancia rossa Tarocco",desc:"20cl – spremuta artigianale",price:"€2.50"},
        {name:"Limonata di Sicilia artigianale",desc:"Limoni di Siracusa, 25cl",price:"€2.50"},
        {name:"Caffè freddo shakerato",desc:"Estate siciliana – amandorlato",price:"€2.00"},
        {name:"Rosolio di Limone",desc:"Liquore artigianale – 4cl",price:"€3.00"},
        {name:"Marsala fine secco",desc:"Florio DOC – aperitivo – 10cl",price:"€4.00"},
      ]
    }
  },
  {
    id:18, name:"Ristorante Il Frantoio", city:"Fasano", cat:"ristorante",
    emoji:"🫒", stars:"★★★★★", avgPrice:"€60–100",
    address:"SS16 km 874, Fasano (Brindisi)", phone:"080 441 0444",
    orari:"20:00–22:30 (prenotazione obbligatoria)",
    desc:"Masseria storica del 1500, uliveto millenario. Cucina pugliese d'autore con olio extravergine prodotto in loco, verdure dell'orto e carni locali.",
    lat:40.8370, lng:17.3611,
    menu:{
      antipasti:[
        {name:"Antipasto della masseria",desc:"Burrata, stracciatella, pomodorini sott'olio, fave e cicorie",price:"€18.00"},
        {name:"Crudités di verdure dell'orto",desc:"Con pinzimonio di olio EVO frantoio monocultivar Coratina",price:"€14.00"},
        {name:"Polpette di carne e ricotta forte",desc:"Con sugo di pomodoro San Marzano",price:"€15.00"},
        {name:"Tagliere di formaggi pugliesi",desc:"Caciocavallo podolico, canestrato, ricotta forte, miele",price:"€20.00"},
      ],
      primi:[
        {name:"Orecchiette con cime di rapa",desc:"Pasta fresca, cime di rapa stufate, acciughe, aglio, peperoncino",price:"€18.00"},
        {name:"Orecchiette al ragù di agnello",desc:"Pasta fresca, agnello del Murge, pomodoro, pecorino",price:"€20.00"},
        {name:"Tria e ciceri",desc:"Pasta fritta e lessata, ceci, pomodoro, alloro",price:"€16.00"},
        {name:"Minestrone freddo con ricotta",desc:"Verdure estive dell'orto, ricotta fresca",price:"€15.00"},
      ],
      secondi:[
        {name:"Agnello della Murgia a scottadito",desc:"Costolette, brace di quercia, limone, rosmarino",price:"€32.00"},
        {name:"Grigliata mista di carni rurali",desc:"Salsiccia piccante, bombette pugliesi, tracina",price:"€28.00"},
        {name:"Alici fritte alla ghiotta",desc:"Alice fresca, capperi di Pantelleria, pomodorini",price:"€22.00"},
      ],
      dolci:[
        {name:"Cartellate al miele e vincotto",desc:"Dolce natalizio pugliese",price:"€6.00"},
        {name:"Pasticciotto leccese",desc:"Pasta frolla, crema pasticcera, amarena",price:"€4.00"},
        {name:"Granita di mandorla con spumante",desc:"Mandorle di Toritto, Prosecco",price:"€8.00"},
        {name:"Formaggi locali con confetture",desc:"Selezione di 4 formaggi, marmellate artigianali",price:"€16.00"},
      ],
      vini:[
        {name:"Primitivo di Manduria Es – Gianfranco Fino",desc:"Rosso DOC – bottiglia 75cl",price:"€35.00"},
        {name:"Negroamaro Tenute Rubino",desc:"Rosso Salento IGT – bottiglia 75cl",price:"€28.00"},
        {name:"Bombino Bianco IGT Puglia",desc:"Bianco fresco – bottiglia 75cl",price:"€20.00"},
        {name:"Locorotondo DOC",desc:"Bianco pugliese – bottiglia 75cl",price:"€18.00"},
        {name:"Vino della casa",desc:"Primitivo giovane 0.5L",price:"€8.00"},
      ],
      birre:[
        {name:"Birra Messina Cristallo di Sale",desc:"33cl – siciliana",price:"€4.00"},
        {name:"Peroni Nastro Azzurro",desc:"33cl",price:"€3.50"},
        {name:"Birra artigianale Puglia",desc:"50cl – bionda cereali antichi",price:"€7.00"},
      ],
      bibite:[
        {name:"Acqua naturale / frizzante",desc:"75cl – produzione locale",price:"€2.00"},
        {name:"Limonata artigianale della masseria",desc:"Limoni del giardino, 25cl",price:"€3.50"},
        {name:"Succo di fico d'india",desc:"Succone di stagione – 20cl",price:"€4.00"},
        {name:"Caffè espresso",desc:"Torrefazione Quarta Caffè",price:"€1.00"},
        {name:"Amaro Lucano",desc:"Digestivo calabrese – 4cl",price:"€4.00"},
        {name:"Olio EVO frantoio",desc:"Degustazione monocultivar 3 cultivar – 30ml",price:"€8.00"},
      ]
    }
  },
  {
    id:19, name:"Ristorante Pizzarium", city:"Roma", cat:"pizzeria",
    emoji:"🍕", stars:"★★★★☆", avgPrice:"€8–18",
    address:"Via della Meloria 43, Roma", phone:"06 3974 5416",
    orari:"11:00–22:00",
    desc:"La pizza bianca e rossa in teglia più famosa di Roma. Gabriele Bonci, il Michelangelo della pizza, usa solo grani antichi biologici e topping creativi stagionali.",
    lat:41.9074, lng:12.4614,
    menu:{
      antipasti:[
        {name:"Supplì al telefono classico",desc:"Ragù di manzo, mozzarella fiordilatte – 1 pezzo",price:"€2.50"},
        {name:"Supplì burro e alici",desc:"Burro della Normandia, alice di Cetara – 1 pezzo",price:"€3.50"},
        {name:"Frittata di patate e cipolla",desc:"Uova biologiche, patate, cipolla di Tropea",price:"€5.00"},
      ],
      pizze:[
        {name:"Pizza bianca romana",desc:"Solo farina biologica, olio EVO, sale grosso – al kg",price:"€14.00/kg"},
        {name:"Margherita classica",desc:"Pomodoro San Marzano, fior di latte, basilico – al kg",price:"€16.00/kg"},
        {name:"Patate e rosmarino",desc:"Patate a fette sottili, rosmarino fresco, olio – al kg",price:"€15.00/kg"},
        {name:"Porchetta e ricotta",desc:"Porchetta di Ariccia IGP, ricotta di pecora – al kg",price:"€20.00/kg"},
        {name:"Mortadella e pistacchio",desc:"Mortadella IGP, crema di pistacchio – al kg",price:"€22.00/kg"},
        {name:"Zucchine, fiori e alici",desc:"Zucchine romane, fiori, alici di Cetara – stagionale – al kg",price:"€22.00/kg"},
        {name:"Cacio e pepe in crosta",desc:"Pecorino romano, pepe nero, scioglimento in teglia",price:"€18.00/kg"},
        {name:"Portion media (ca.150g)",desc:"Per chi vuole solo un assaggio",price:"€4.00–5.50"},
      ],
      dolci:[
        {name:"Biscotto al burro di malga",desc:"Burro Occelli, farina di grano antico",price:"€2.00"},
        {name:"Torta di mele biologica",desc:"Mele marchigiane, farina integrale, cannella",price:"€4.00"},
      ],
      vini:[
        {name:"Vino Naturale della settimana",desc:"Bianco o rosso – produttore artigianale – calice",price:"€5.00"},
        {name:"Birra artigianale abbinata",desc:"Selezione mensile – 33cl",price:"€5.00"},
      ],
      birre:[
        {name:"Birra Baladin Nazionale",desc:"33cl – bionda artigianale italiana",price:"€5.50"},
        {name:"Birra Baladin Isaac",desc:"33cl – blanche al coriandolo",price:"€5.50"},
        {name:"Birra del Borgo Duchessa",desc:"33cl – farmhouse ale",price:"€5.50"},
        {name:"Birra Brasserie de la Senne",desc:"33cl – belga importata",price:"€6.00"},
      ],
      bibite:[
        {name:"Acqua naturale / frizzante",desc:"50cl",price:"€1.50"},
        {name:"Chinotto Lurisia",desc:"20cl – amaro artigianale",price:"€3.00"},
        {name:"Gassosa al limone",desc:"Lurisia – 20cl",price:"€3.00"},
        {name:"Caffè espresso",desc:"Sant'Eustachio il Caffè – torrefazione",price:"€1.20"},
        {name:"Kombucha artigianale",desc:"Fermentato biologico – 25cl",price:"€4.50"},
      ]
    }
  },
  {
    id:20, name:"Enoteca Pinchiorri", city:"Firenze", cat:"ristorante",
    emoji:"🏆", stars:"★★★★★", avgPrice:"€150–220",
    address:"Via Ghibellina 87, Firenze", phone:"055 242 757",
    orari:"19:30–22:00 (chiuso dom–lun–mer pranzo)",
    desc:"Tre stelle Michelin, una delle cantine più importanti del mondo con 130.000 bottiglie. Cucina toscana contemporanea di altissimo livello nello storico Palazzo Jacometti.",
    lat:43.7697, lng:11.2623,
    menu:{
      antipasti:[
        {name:"Uovo di quaglia e tartufo bianco",desc:"Uovo cremoso, vellutata di topinambur, lamelle di tartufo bianco d'Alba",price:"€42.00"},
        {name:"Foie gras al Vin Santo",desc:"Terrina, composta di fichi, brioche alle noci, gel di mostarda",price:"€45.00"},
        {name:"Astice blu in carpaccio",desc:"Maionese di corallo, gazpacho di datterino, bottarga di tonno",price:"€55.00"},
      ],
      primi:[
        {name:"Pici al ragù di chianina",desc:"Pasta grossa, ragù di manzo Chianina, Parmigiano 36M",price:"€48.00"},
        {name:"Risotto al tartufo bianco",desc:"Riso Carnaroli, Parmigiano, fonduta, tartufo d'Alba 20g",price:"€95.00"},
        {name:"Ravioli di piccione",desc:"Pasta fresca, ripieni di piccione, jus al Sangiovese",price:"€52.00"},
      ],
      secondi:[
        {name:"Bistecca di Chianina",desc:"800g al sangue, sale di Cervia, olio monocultivar Frantoio",price:"€98.00"},
        {name:"Piccione di Bresse con tartufo",desc:"Due cotture, salsa Périgueux, spinaci al burro",price:"€72.00"},
        {name:"Rombo chiodato in crosta",desc:"Sale di Cervia, erbe aromatiche toscane, carciofi",price:"€68.00"},
      ],
      dolci:[
        {name:"Cantucci e Vin Santo invecchiato",desc:"Cantucci alle mandorle, Vin Santo 1993",price:"€28.00"},
        {name:"Selezione formaggi toscani",desc:"5 formaggi, confetture e noci – servizio al carrello",price:"€32.00"},
        {name:"Piccola pasticceria Pinchiorri",desc:"12 mignardises artigianali",price:"€22.00"},
      ],
      vini:[
        {name:"Sassicaia 2015 Tenuta San Guido",desc:"Bolgheri DOC – bottiglia 75cl",price:"€320.00"},
        {name:"Ornellaia 2016",desc:"Bolgheri DOC Superiore – bottiglia 75cl",price:"€290.00"},
        {name:"Brunello Biondi Santi Riserva 2010",desc:"DOCG – bottiglia 75cl",price:"€680.00"},
        {name:"Vernaccia di San Gimignano Teruzzi",desc:"Bianco DOCG – bottiglia 75cl",price:"€38.00"},
        {name:"Krug Vintage 2008 Champagne",desc:"Bottiglia 75cl",price:"€380.00"},
        {name:"Menu abbinamento vini",desc:"6 calici selezionati dalla cantina",price:"€150.00"},
      ],
      birre:[
        {name:"Birra artigianale toscana su richiesta",desc:"Selezione stagionale",price:"€15.00"},
      ],
      bibite:[
        {name:"Acqua Panna naturale",desc:"75cl – toscana",price:"€8.00"},
        {name:"Acqua San Pellegrino frizzante",desc:"75cl",price:"€8.00"},
        {name:"Tè Dammann – selezione",desc:"Teiera per 2 persone",price:"€16.00"},
        {name:"Caffè Illy Riserva",desc:"Miscela premium, espresso",price:"€5.00"},
        {name:"Grappa Nonino Monovitigno",desc:"Picolit – digestivo – 4cl",price:"€18.00"},
      ]
    }
  }
];
