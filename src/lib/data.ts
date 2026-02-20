export const restaurant = {
  name:     'Gastro No 8',
  sub:      'Cafe & Bar',
  tagline:  'Klassiske retter og drikkevarer — midt i Blåvand',
  bio:      'Midt i Blåvand finder du Gastro No 8 — en hyggelig café og bar med et udvalg af gourmetburgere, klassiske danske retter og et roterende øludvalg. God mad, god stemning.',
  address:  'Blåvandvej 8a, 6857 Blåvand',
  phone:    '61 31 72 40',
  email:    'Klaus@gastro8.dk',
  facebook: 'https://www.facebook.com/GastroNo8/',
  hours:    'Ring for aktuelle åbningstider',
  lunchHours: '11:00 – 16:00',
}

export const features = [
  { label: 'Gourmet Burgere',     sub: 'Fra 165 kr'            },
  { label: 'Bar & Øl',           sub: 'Ny øl hver måned'       },
  { label: 'Frokost 11–16',      sub: 'Klassisk dansk køkken'  },
  { label: 'Takeaway',           sub: 'Ring og bestil'          },
]

export const menu = [
  {
    category: 'Gourmet Burgere',
    note: 'Alle burgere serveres med pommes frites',
    items: [
      { name: 'Gastro Bøfsandwich',    description: '400 gr beef · baguette, baked cucumber, blue cress, salat, sennep, remoulade, ristede løg',           price: '225' },
      { name: 'Cheeseover Bearnaise',  description: '200 gr beef · ost, mozzarella, syltede rødløg, bacon, tomat',                                         price: '195' },
      { name: 'BBQ Texas',             description: '200 gr beef · ost, bacon, BBQ sauce, chili mayo, tomat',                                               price: '195' },
      { name: 'Hot & Spicy',           description: '200 gr beef · chili mayo, ost, bacon, jalapeños, habanero, rød løg',                                   price: '185' },
      { name: 'Truffel & Onion',       description: '200 gr beef · trøffelaioli, karameliserede løg, rucola',                                               price: '185' },
      { name: 'Gastro Original',       description: '200 gr beef · klassisk burger med cheddar, salat, tomat og dressing',                                  price: '170' },
      { name: 'Crispy Chicken',        description: '150 gr kylling · sprødt paneret kyllingefilet med coleslaw og mayo',                                   price: '165' },
      { name: 'Veggie',                description: '100 gr falafel · pickles, tahini, rødløg, rucola',                                                     price: '165' },
    ],
  },
  {
    category: 'Gastro Signatur',
    note: null,
    items: [
      { name: 'Ground Beef 250 gr',    description: 'Håndformet bøf med chili mayo og pommes frites',                                                       price: '235' },
      { name: '"Stjerneskud"',         description: 'Paneret rødspættefilet, koldtrøget laks, thousand island dressing, rejer',                             price: '215' },
      { name: 'Rumpsteak 180 gr',      description: 'Grillet rumpsteak med pommes frites og bearnaise',                                                     price: '215' },
      { name: 'Steak & Fries',         description: 'Dagens bøf med pommes frites og sauce',                                                                price: '185' },
      { name: 'Lunch Schnitzel',       description: 'Med skinke, pommes frites og remoulade',                                                               price: '175' },
      { name: 'Fish & Chips',          description: 'Paneret fisk, rejer, sweet & sour sauce, pommes frites',                                               price: '165' },
      { name: 'Smoked Salmon Salad',   description: 'Røget laks, salat, syltede løg, dressing, tomat, brød og smør',                                       price: '165' },
      { name: 'Chicken Salad',         description: 'Marineret kyllingefilet, salat, ristede rødløg, dressing, majs og brød',                              price: '165' },
      { name: '"Pariserbøf"',          description: '200 gr beef · klassisk pariserbøf med æg, kapers og rødløg',                                          price: '165' },
      { name: 'Grill Chicken',         description: '450 gr grillet kylling med pommes frites og dip',                                                      price: '165' },
      { name: 'Smørrebrød',            description: 'Åbent sandwich — dagens valg',                                                                         price: '95'  },
    ],
  },
  {
    category: 'Snacks & Deling',
    note: null,
    items: [
      { name: 'Gastro Snack to Share', description: 'Onion rings, chicken pieces, dips (2 portioner)',                                                      price: '135' },
      { name: 'Gastro Nachos',         description: 'Nachos, cheddar, topping efter valg: beef eller kylling',                                              price: '135' },
    ],
  },
  {
    category: 'Børnemenu',
    note: null,
    items: [
      { name: 'Hamburger m. fries',    description: 'Med cheddar, ketchup, løg',                                                                            price: '120' },
      { name: 'Paneret fiskefilet',    description: 'Breaded fish fillet med pommes frites og remoulade',                                                   price: '95'  },
      { name: 'Nuggets (4 stk)',       description: 'Kyllingenuggets med pommes frites og dip',                                                             price: '85'  },
      { name: '2× American Pancakes', description: 'Med vaniljeis',                                                                                         price: '65'  },
    ],
  },
  {
    category: 'Dessert',
    note: null,
    items: [
      { name: '3× American Pancakes', description: 'Med vaniljeis',                                                                                         price: '95'  },
      { name: 'Belgian Waffle',        description: 'Med vaniljeis',                                                                                         price: '85'  },
      { name: 'Warm Apple Pie',        description: 'Med creme fraîche',                                                                                    price: '75'  },
      { name: 'Æblekage',              description: 'Danish apple cake med crisp og fløde',                                                                 price: '65'  },
    ],
  },
]
