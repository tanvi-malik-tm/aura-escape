export type EscapeSize = 'day' | 'weekend' | 'global';

export type Stop = {
  time: string;
  title: string;
  detail: string;
  search: string;
  kind?: 'Restaurant' | 'Café' | 'Bar' | 'Activity';
  emoji?: string;
};

export type Escape = {
  id: string;
  size: EscapeSize;
  destination: string;
  title: string;
  moods: string[];
  wants: string[];
  price: number;
  duration: string;
  travel: string;
  why: string;
  image?: string;
  imageAlt?: string;
  event?: { from: string; to: string; label: string };
  stops: Stop[];
};

const singaporeImage =
  'https://upload.wikimedia.org/wikipedia/commons/2/22/Singapore_Pulau_Ubin_02.jpg';

export const escapes: Escape[] = [
  {
    id: 'sentosa-afterglow', size: 'day', destination: 'Sentosa, Singapore',
    title: 'A little sun, then a proper night out', moods: ['Playful', 'Celebratory', 'Restless', 'Energised', 'Sociable'],
    wants: ['Water views', 'Social energy', 'A good drink', 'Nightlife', 'A surprise'], price: 138, duration: 'An easy afternoon into night', travel: 'Across Singapore',
    why: 'A change of scene, one playful activity and a sunset drink let the day feel bigger without demanding a full getaway.',
    stops: [
      { time: '14:00', title: 'SkyPark by AJ Hackett', detail: 'Choose the swing, bungy or a simple lookout depending on how much energy you have.', search: 'AJ Hackett Sentosa Singapore', kind: 'Activity', emoji: '🎢' },
      { time: '17:00', title: 'Beach time at Tanjong Beach', detail: 'Let the sea and a little sand reset the pace.', search: 'Tanjong Beach Sentosa', kind: 'Activity', emoji: '🌊' },
      { time: '18:30', title: 'Drinks at Tipsy Unicorn', detail: 'Settle in for sunset cocktails and a room that is easy to be sociable in.', search: 'Tipsy Unicorn Beach Club Sentosa', kind: 'Bar', emoji: '🍹' },
      { time: '20:30', title: 'Dinner at Coastes', detail: 'Keep the evening by the water with a relaxed dinner and no second venue required.', search: 'Coastes Sentosa dinner', kind: 'Restaurant', emoji: '🍽️' },
    ],
  },
  {
    id: 'tiong-bahru-bites', size: 'day', destination: 'Tiong Bahru, Singapore',
    title: 'A neighbourhood made for grazing', moods: ['Bored', 'Curious', 'Homesick', 'Playful', 'Content'],
    wants: ['Good food', 'Hidden gems', 'Shopping', 'Gentle social energy'], price: 88, duration: 'A delicious half-day', travel: 'Stay central',
    why: 'Small bites, independent shops and a good café create enough gentle novelty to make an ordinary day feel considered.',
    stops: [
      { time: '10:30', title: 'Breakfast at Tiong Bahru Bakery', detail: 'Start with something warm and flaky, then let the neighbourhood choose the next turn.', search: 'Tiong Bahru Bakery Singapore', kind: 'Café', emoji: '🥐' },
      { time: '12:30', title: 'Lunch at Tiong Bahru Market', detail: 'Choose one classic hawker plate and one thing you have never tried.', search: 'Tiong Bahru Food Centre Singapore', kind: 'Restaurant', emoji: '🍜' },
      { time: '14:30', title: 'Browse BooksActually', detail: 'Find one book, object or local print to take home.', search: 'BooksActually Tiong Bahru', kind: 'Activity', emoji: '📚' },
      { time: '16:00', title: 'Tea at Plain Vanilla', detail: 'Close with cake and a little people-watching.', search: 'Plain Vanilla Tiong Bahru', kind: 'Café', emoji: '🧁' },
    ],
  },
  {
    id: 'east-coast-ride', size: 'day', destination: 'East Coast, Singapore',
    title: 'Move, eat, and stay by the sea', moods: ['Restless', 'Cabin fever', 'Energised', 'Adventurous', 'Celebratory'],
    wants: ['Outdoors', 'Water views', 'Good food', 'Sports & movement'], price: 76, duration: 'A breezy active day', travel: 'Across Singapore',
    why: 'Cycling gives restless energy a clean outlet, then the coast rewards you with shade, seafood and a wide-open horizon.',
    stops: [
      { time: '09:00', title: 'Cycle from East Coast Park', detail: 'Rent a bike and follow the coastline at the pace that feels right.', search: 'East Coast Park bicycle rental Singapore', kind: 'Activity', emoji: '🚲' },
      { time: '12:30', title: 'Lunch at East Coast Seafood Centre', detail: 'Make chilli crab or a simple seafood plate the midpoint.', search: 'East Coast Seafood Centre Singapore', kind: 'Restaurant', emoji: '🦀' },
      { time: '15:00', title: 'Coffee at The Coastal Settlement', detail: 'A slower, air-conditioned pause before the last stretch.', search: 'The Coastal Settlement Singapore', kind: 'Café', emoji: '☕' },
      { time: '17:30', title: 'Drinks at Georges Beach Club', detail: 'End with a cold drink and the sea still in view.', search: 'Georges Beach Club East Coast Singapore', kind: 'Bar', emoji: '🍺' },
    ],
  },
  {
    id: 'wellness-reset', size: 'day', destination: 'Orchard–Dempsey, Singapore',
    title: 'A reset that feels like a treat', moods: ['Stressed', 'Drained', 'Overwhelmed', 'Anxious', 'Low & heavy'],
    wants: ['Wellness', 'A little luxury', 'Good food', 'Indoors'], price: 210, duration: 'A restorative afternoon', travel: 'Stay central',
    why: 'The plan is deliberately low-effort: one treatment, one nourishing meal and one beautiful room to let your nervous system catch up.',
    stops: [
      { time: '13:00', title: 'Lunch at The Dempsey Cookhouse', detail: 'Start with a proper meal before the day gets quiet.', search: 'Dempsey Cookhouse Singapore', kind: 'Restaurant', emoji: '🍽️' },
      { time: '15:00', title: 'Treatment at COMO Shambhala', detail: 'Choose the treatment that makes your shoulders drop.', search: 'COMO Shambhala Urban Escape Singapore', kind: 'Activity', emoji: '🧖' },
      { time: '17:30', title: 'Tea at TWG Tea Salon', detail: 'A small ceremony and a slice of cake before the evening.', search: 'TWG Tea Salon Singapore Orchard', kind: 'Café', emoji: '🫖' },
      { time: '19:30', title: 'A quiet cocktail at Manhattan', detail: 'Finish with one beautifully made drink, then go home early if that is what feels good.', search: 'Manhattan bar Singapore Conrad Orchard', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'ubin-reset', size: 'day', destination: 'Pulau Ubin, Singapore',
    title: 'The island reset', moods: ['Restless', 'Cabin fever', 'Disconnected', 'Stressed'],
    wants: ['Nature', 'Water views', 'Hidden gems', 'Beautiful views'], price: 58, duration: 'A full, unhurried day', travel: 'Across Singapore',
    why: 'The boat crossing creates a clean mental break, then easy movement and wide green space let restless energy soften without demanding too much from you.',
    image: singaporeImage, imageAlt: 'The green shoreline and calm water of Pulau Ubin',
    stops: [
      { time: '9:15', title: 'Bumboat from Changi Point', detail: 'Let the short crossing mark the start of your day away.', search: 'Changi Point Ferry Terminal Pulau Ubin' },
      { time: '10:00', title: 'Slow cycle through the kampong', detail: 'Rent a bicycle near the jetty and take the quiet roads at your own pace.', search: 'Pulau Ubin bicycle rental' },
      { time: '12:30', title: 'Lunch at Cheong Lian Yuen', detail: 'Settle into the island’s long-running coffee shop for seafood and a casual local meal.', search: 'Cheong Lian Yuen Pulau Ubin', kind: 'Restaurant' },
      { time: '14:00', title: 'Chek Jawa boardwalk', detail: 'Mangroves, sea air and a long horizon to settle the nervous system.', search: 'Chek Jawa Wetlands' },
      { time: '17:00', title: 'Drinks at Little Island Brewing Co.', detail: 'A cold drink and an early bite in Changi Village before heading home.', search: 'Little Island Brewing Co Changi Village', kind: 'Bar' },
    ],
  },
  {
    id: 'gallery-drift', size: 'day', destination: 'Civic District, Singapore',
    title: 'Art, shade and a long lunch', moods: ['Drained', 'Overwhelmed', 'Low & heavy', 'Stressed', 'Reflective'],
    wants: ['Culture', 'Indoors', 'Good food', 'A little luxury'], price: 74, duration: '5–7 gentle hours', travel: 'Stay central',
    why: 'A low-friction indoor day gives your mind something beautiful to rest on, with enough structure to feel held and plenty of room to wander.',
    stops: [
      { time: '11:00', title: 'National Gallery Singapore', detail: 'Begin with one wing only; this is a drift, not a checklist.', search: 'National Gallery Singapore' },
      { time: '13:15', title: 'Lunch at National Kitchen', detail: 'Let modern Singaporean comfort food at the Gallery be the main event.', search: 'National Kitchen by Violet Oon', kind: 'Restaurant' },
      { time: '15:00', title: 'The Arts House and river walk', detail: 'A short, shaded wander with benches whenever you want one.', search: 'The Arts House Singapore' },
      { time: '16:30', title: 'Tea at The Grand Lobby', detail: 'End at Raffles Hotel with a small note of ceremony.', search: 'The Grand Lobby Raffles Singapore afternoon tea', kind: 'Café' },
    ],
  },
  {
    id: 'joo-chiat-colour', size: 'day', destination: 'Katong–Joo Chiat, Singapore',
    title: 'Colour back in the day', moods: ['Bored', 'Curious', 'Homesick', 'Disconnected'],
    wants: ['Good food', 'Culture', 'Make something', 'Hidden gems'], price: 66, duration: 'A bright half-day', travel: 'Stay central',
    why: 'Texture, colour and little discoveries give a flat day some edges again, while familiar food and neighbourhood energy keep it comforting.',
    stops: [
      { time: '10:30', title: 'Peranakan house walk', detail: 'Start among the colourful shophouses around Koon Seng Road.', search: 'Koon Seng Road Peranakan houses' },
      { time: '11:30', title: 'A hands-on creative hour', detail: 'Choose pottery, beading or a small craft workshop nearby.', search: 'Joo Chiat craft workshop' },
      { time: '13:00', title: 'Lunch at Baba Chews', detail: 'Choose the Peranakan plate that feels most like comfort today.', search: 'Baba Chews Katong', kind: 'Restaurant' },
      { time: '14:30', title: 'Tea at Neptune', detail: 'Pause at this bright Joo Chiat café before a slow East Coast walk.', search: 'Neptune cafe Joo Chiat Singapore', kind: 'Café' },
    ],
  },
  {
    id: 'southern-ridges', size: 'day', destination: 'Southern Singapore',
    title: 'A horizon and a little momentum', moods: ['Restless', 'Cabin fever', 'Celebratory', 'Curious', 'Adventurous', 'Energised'],
    wants: ['Nature', 'Beautiful views', 'Outdoors', 'A surprise'], price: 42, duration: '4–6 active hours', travel: 'Across Singapore',
    why: 'A clear path and changing viewpoints turn nervous energy into forward motion, then reward you with a view that feels bigger than the week.',
    stops: [
      { time: '15:00', title: 'Coffee at Canopy HortPark', detail: 'Start with a drink, then enter the trail without rushing.', search: 'Canopy HortPark Singapore', kind: 'Café' },
      { time: '16:00', title: 'Forest Walk', detail: 'Let the elevated path do the navigating for you.', search: 'Forest Walk Southern Ridges' },
      { time: '17:15', title: 'Henderson Waves', detail: 'Pause at the highest point for late-afternoon light.', search: 'Henderson Waves' },
      { time: '18:30', title: 'Drinks at Hopscotch', detail: 'Finish with playful local cocktails at Gillman Barracks.', search: 'Hopscotch Gillman Barracks', kind: 'Bar' },
    ],
  },
  {
    id: 'skyline-social', size: 'day', destination: 'Marina Bay, Singapore',
    title: 'A night above the city', moods: ['Lonely', 'Disconnected', 'Bored', 'Celebratory', 'Sociable', 'Confident'],
    wants: ['Social energy', 'City buzz', 'A good drink', 'Feel on top of the world', 'Nightlife', 'Beautiful views'], price: 165, duration: 'One electric evening', travel: 'Stay central',
    why: 'A room with a view, music and people arriving ready to have a good night gives you social possibility without forcing a formal introduction.',
    stops: [
      { time: '18:30', title: 'Dinner at LAVO', detail: 'Start with coastal Italian plates and wraparound city views on level 57.', search: 'LAVO Singapore Marina Bay Sands', kind: 'Restaurant' },
      { time: '20:30', title: 'A cocktail at Spago Bar & Lounge', detail: 'Move across the SkyPark for a drink in a convivial room overlooking the skyline.', search: 'Spago Bar Lounge Marina Bay Sands', kind: 'Bar' },
      { time: '22:00', title: 'CÉ LA VI Club Lounge', detail: 'Stay for DJs and a more open, high-energy crowd. On Wednesdays, check the current Ladies’ Night offer before going.', search: 'CÉ LA VI Singapore Ladies Night', kind: 'Bar' },
      { time: 'Late', title: 'Helix Bridge cool-down', detail: 'End with ten quiet minutes over the water before heading home.', search: 'Helix Bridge Singapore', kind: 'Activity' },
    ],
  },
  {
    id: 'orchard-glow-up', size: 'day', destination: 'Orchard Road, Singapore',
    title: 'The polished pick-me-up', moods: ['Drained', 'Bored', 'Celebratory', 'Homesick', 'Content', 'Inspired'],
    wants: ['Shopping', 'Wellness', 'Good food', 'A little luxury', 'City buzz'], price: 190, duration: 'A feel-good afternoon', travel: 'Stay central',
    why: 'A small upgrade to the ordinary—something good to eat, a little browsing and one indulgent ritual—can make the day feel newly yours.',
    stops: [
      { time: '12:30', title: 'Lunch at Merci Marcel Orchard', detail: 'Ease in over bright French plates in a relaxed room.', search: 'Merci Marcel Orchard Singapore', kind: 'Restaurant' },
      { time: '14:00', title: 'Browse Design Orchard', detail: 'Look for one local object, scent or piece that feels like a reset.', search: 'Design Orchard Singapore', kind: 'Activity' },
      { time: '15:30', title: 'Tea at Arteastiq Mandarin Gallery', detail: 'Sit down for tea and, if it appeals, a little art-jamming.', search: 'Arteastiq Mandarin Gallery', kind: 'Café' },
      { time: '18:00', title: 'Drinks at Manhattan', detail: 'Finish with one beautifully made drink in a bar that feels like an occasion.', search: 'Manhattan bar Singapore Conrad Orchard', kind: 'Bar' },
    ],
  },
  {
    id: 'neon-play', size: 'day', destination: 'Bugis–Kampong Glam, Singapore',
    title: 'Turn the volume back up', moods: ['Bored', 'Lonely', 'Restless', 'Celebratory', 'Playful', 'Sociable', 'Energised'],
    wants: ['City buzz', 'Social energy', 'Live music', 'A good drink', 'Nightlife', 'Dance'], price: 105, duration: 'An easy night out', travel: 'Stay central',
    why: 'A sequence of lively rooms lets you borrow energy from the city—food first, then conversation, music and the option to stay out only as long as it feels good.',
    stops: [
      { time: '19:00', title: 'Dinner at Tipo Pasta Bar', detail: 'Begin somewhere warm and lively with handmade pasta and a friendly pace.', search: 'Tipo Pasta Bar Aliwal Street Singapore', kind: 'Restaurant' },
      { time: '20:30', title: 'Drinks at Bar Stories', detail: 'Tell the bartender what you feel like drinking and let the cocktail be the surprise.', search: 'Bar Stories Haji Lane Singapore', kind: 'Bar' },
      { time: '22:00', title: 'Live music at Blu Jaz', detail: 'Drop into the room, take the edge seat first, and move closer if the energy feels right.', search: 'Blu Jaz Cafe live music Singapore', kind: 'Bar' },
    ],
  },
  {
    id: 'dempsey-playground', size: 'day', destination: 'Dempsey, Singapore',
    title: 'Play first, overthink later', moods: ['Playful', 'Bored', 'Uninspired', 'Restless', 'Celebratory', 'Spontaneous'],
    wants: ['A surprise', 'Good food', 'Make something', 'City buzz', 'Gentle social energy'], price: 118, duration: 'A colourful afternoon into evening', travel: 'Stay central',
    why: 'This is permission to be a little silly on purpose: immersive rooms, unlimited ice cream and a dinner that lets the day feel light again.',
    stops: [
      { time: '13:00', title: 'Museum of Ice Cream', detail: 'Book a slot, follow the rainbow rooms, then give yourself full permission to play in the sprinkle pool.', search: 'Museum of Ice Cream Singapore Dempsey tickets', kind: 'Activity', emoji: '🍦' },
      { time: '15:30', title: 'A sweet reset at MOIC Café & Bar', detail: 'Slow down over a cold drink or one more scoop before you leave the pink behind.', search: 'MOIC Cafe Bar Dempsey Singapore', kind: 'Café', emoji: '🧁' },
      { time: '18:30', title: 'Dinner at Dempsey Cookhouse & Bar', detail: 'Trade the sugar rush for a proper, lively dinner in a room that still feels like an occasion.', search: 'Dempsey Cookhouse and Bar Singapore', kind: 'Restaurant', emoji: '🍽️' },
      { time: '20:30', title: 'A nightcap at Dempsey Cookhouse & Bar', detail: 'End with one playful cocktail and no pressure to turn it into a big night.', search: 'Dempsey Cookhouse and Bar Singapore cocktails', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'new-bahru-live', size: 'day', destination: 'New Bahru, Singapore',
    title: 'A real-life refresh', moods: ['Playful', 'Bored', 'Uninspired', 'Sociable', 'Energised', 'Restless'],
    wants: ['Make something', 'Social energy', 'Live music', 'Good food', 'A surprise'], price: 72, duration: 'A live, low-stakes day out', travel: 'Stay central',
    event: { from: '2026-09-12', to: '2026-09-13', label: 'StarHub 5G Wellness Festival · New Bahru · 12–13 September' },
    why: 'A live, playful programme gives you things to do with your hands and people around you—without asking you to make a whole evening of it.',
    stops: [
      { time: '10:30', title: 'StarHub 5G Wellness Festival', detail: 'Choose one thing that sounds unlike your usual day: table tennis, watercolours, a petite garden workshop, yoga or the live-music lawn.', search: 'StarHub 5G Wellness Festival New Bahru September 2026', kind: 'Activity', emoji: '🎨' },
      { time: '13:00', title: 'Lunch at Dumpling Darlings', detail: 'Keep it relaxed with dumplings at New Bahru before browsing the creative stores.', search: 'Dumpling Darlings New Bahru Singapore', kind: 'Restaurant', emoji: '🥟' },
      { time: '15:00', title: 'Play a round at TopTable', detail: 'A quick game of table tennis or darts is an easy way to let the afternoon stay light.', search: 'TopTable New Bahru Singapore', kind: 'Activity', emoji: '🏓' },
      { time: '17:30', title: 'Drinks at Bar Bon Funk', detail: 'Land somewhere warm and grown-up for a glass of wine or cocktail before heading home.', search: 'Bar Bon Funk New Bahru Singapore', kind: 'Bar', emoji: '🍷' },
    ],
  },
  {
    id: 'botanic-soft-landing', size: 'day', destination: 'Tanglin, Singapore',
    title: 'The soft landing', moods: ['Low & heavy', 'Lonely', 'Drained', 'Homesick', 'Anxious', 'Reflective'],
    wants: ['Nature', 'Good food', 'Gentle social energy', 'Beautiful views'], price: 52, duration: 'A gentle half-day', travel: 'Keep it close',
    why: 'Green space gives the feeling room without isolating you; familiar rituals—coffee, a walk, a nourishing meal—make the day feel manageable again.',
    stops: [
      { time: '10:00', title: 'Coffee at Bee’s Knees', detail: 'Begin at The Garage, somewhere calm with no need to decide quickly.', search: 'Bees Knees The Garage Botanic Gardens', kind: 'Café' },
      { time: '11:00', title: 'Botanic Gardens ramble', detail: 'Take the lake route and sit whenever you find a good patch of shade.', search: 'Singapore Botanic Gardens' },
      { time: '13:00', title: 'Lunch at Open Farm Community', detail: 'Choose something warm and generous in a garden setting.', search: 'Open Farm Community Singapore', kind: 'Restaurant' },
      { time: '14:30', title: 'Tea at PS.Cafe Harding Road', detail: 'One quiet slice of cake before heading home.', search: 'PS Cafe Harding Road', kind: 'Café' },
    ],
  },
  {
    id: 'bintan-breathe', size: 'weekend', destination: 'Bintan, Indonesia',
    title: 'Two days in a slower rhythm', moods: ['Drained', 'Stressed', 'Overwhelmed', 'Restless'],
    wants: ['Water views', 'Nature', 'A little luxury', 'Good food'], price: 420, duration: '2 days, 1 night', travel: 'A short hop',
    why: 'The ferry is just far enough to feel like leaving, and the simple beach rhythm removes decisions until your shoulders finally drop.',
    stops: [
      { time: 'Day 1 · 9:00', title: 'Ferry to Bintan', detail: 'Travel light and leave the laptop at home.', search: 'Singapore Bintan ferry' },
      { time: 'Day 1 · 12:00', title: 'Lunch at Pujasera Lagoi', detail: 'Start with an easy local meal before checking into your beach stay.', search: 'Pujasera Lagoi Bintan', kind: 'Restaurant' },
      { time: 'Day 1 · 16:30', title: 'Drinks at Xana Beach Club', detail: 'Take a shaded seat by the sand and let the afternoon run out slowly.', search: 'Xana Beach Club Bintan', kind: 'Bar' },
      { time: 'Day 2 · 8:30', title: 'Coffee at The Patio', detail: 'Keep the resort morning unscheduled around a long breakfast.', search: 'The Patio Natra Bintan', kind: 'Café' },
    ],
  },
  {
    id: 'melaka-stories', size: 'weekend', destination: 'Melaka, Malaysia',
    title: 'A weekend of old streets and new tastes', moods: ['Bored', 'Curious', 'Homesick', 'Disconnected'],
    wants: ['Culture', 'Good food', 'Hidden gems', 'A surprise'], price: 310, duration: '3 days, 2 nights', travel: 'A road-trip radius',
    why: 'Layers of history, bold flavours and streets made for wandering give curiosity plenty to catch on—without requiring an ambitious trip.',
    stops: [
      { time: 'Day 1 · 17:00', title: 'Riverside arrival walk', detail: 'Check in near the old town and follow the river into evening.', search: 'Melaka River walk' },
      { time: 'Day 2 · 9:30', title: 'Breakfast at The Daily Fix', detail: 'Start over coffee and pandan pancakes, then roam beyond Jonker Walk.', search: 'The Daily Fix Melaka', kind: 'Café' },
      { time: 'Day 2 · 13:00', title: 'Lunch at Nancy’s Kitchen', detail: 'Follow the museum with classic Nyonya cooking and time to notice the details.', search: 'Nancys Kitchen Melaka', kind: 'Restaurant' },
      { time: 'Day 2 · 20:30', title: 'Drinks at Alto Sky Lounge', detail: 'Take in the old town from above with an unhurried nightcap.', search: 'Alto Sky Lounge Melaka', kind: 'Bar' },
      { time: 'Day 3 · 10:00', title: 'Market finds and a slow return', detail: 'Bring home one edible souvenir, not a rushed checklist.', search: 'Melaka local market' },
    ],
  },
  {
    id: 'penang-appetite', size: 'weekend', destination: 'George Town, Penang',
    title: 'Follow your appetite', moods: ['Celebratory', 'Bored', 'Curious', 'Lonely'],
    wants: ['Good food', 'Culture', 'Beautiful views', 'Gentle social energy'], price: 560, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'The city gives you an easy purpose—follow the next good bite—while murals, clan houses and evening streets add effortless discovery.',
    stops: [
      { time: 'Day 1 · 18:00', title: 'Dinner at Teksen', detail: 'Check in centrally, then share a few of the restaurant’s beloved Cantonese plates.', search: 'Teksen Restaurant Penang', kind: 'Restaurant' },
      { time: 'Day 2 · 9:00', title: 'Coffee at Ome by Spacebar', detail: 'Start with a careful brew, then graze through the market stalls nearby.', search: 'Ome by Spacebar Coffee Penang', kind: 'Café' },
      { time: 'Day 2 · 14:00', title: 'Clan houses and studio stops', detail: 'Mix one landmark with two places you discover by accident.', search: 'George Town Penang clan houses' },
      { time: 'Day 2 · 21:00', title: 'Drinks at Backdoor Bodega', detail: 'Find the hidden bar for inventive cocktails and a sociable room.', search: 'Backdoor Bodega Penang', kind: 'Bar' },
      { time: 'Day 3 · 10:00', title: 'Penang Hill finale', detail: 'Finish above the city before the journey home.', search: 'Penang Hill', kind: 'Activity' },
    ],
  },
  {
    id: 'desaru-light', size: 'weekend', destination: 'Desaru Coast, Malaysia',
    title: 'Sunlight, salt air, no agenda', moods: ['Drained', 'Stressed', 'Cabin fever', 'Celebratory'],
    wants: ['Water views', 'A little luxury', 'Nature', 'Beautiful views'], price: 470, duration: '2 days, 1 night', travel: 'A short hop',
    why: 'Low-effort travel and a broad beach make this feel like a proper exit without spending half the weekend getting there.',
    stops: [
      { time: 'Day 1 · 10:00', title: 'Ferry or drive to the coast', detail: 'Take the route with the fewest decisions from your starting point.', search: 'Singapore to Desaru Coast' },
      { time: 'Day 1 · 13:00', title: 'Lunch at Sea.Fire.Salt.', detail: 'Check in, eat by the coast, and let the beach decide the pace.', search: 'Sea Fire Salt Anantara Desaru', kind: 'Restaurant' },
      { time: 'Day 1 · 18:30', title: 'Drinks at Ember Beach Club', detail: 'Take a sunset drink by the sand and leave the rest of the evening open.', search: 'Ember Beach Club Desaru', kind: 'Bar' },
      { time: 'Day 2 · 9:00', title: 'Coffee at The Lounge', detail: 'Protect a quiet Anantara morning before a walk and late checkout.', search: 'The Lounge Anantara Desaru', kind: 'Café' },
    ],
  },
  {
    id: 'kl-city-charge', size: 'weekend', destination: 'Kuala Lumpur, Malaysia',
    title: 'A weekend with the city switched on', moods: ['Bored', 'Lonely', 'Celebratory', 'Restless'],
    wants: ['City buzz', 'Shopping', 'Social energy', 'A good drink', 'Nightlife', 'Feel on top of the world'], price: 620, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'Big-city scale, late dinners and sky-high drinks give you novelty and human energy without the planning load of a long-haul trip.',
    stops: [
      { time: 'Day 1 · 19:00', title: 'Dinner at Chocha Foodstore', detail: 'Land, check in centrally, then begin in a relaxed Chinatown dining room.', search: 'Chocha Foodstore Kuala Lumpur', kind: 'Restaurant' },
      { time: 'Day 1 · 21:30', title: 'Drinks at Bar Trigona', detail: 'Start the weekend with a polished cocktail and a buzzy hotel-bar crowd.', search: 'Bar Trigona Kuala Lumpur', kind: 'Bar' },
      { time: 'Day 2 · 11:00', title: 'Coffee at Feeka', detail: 'A late café breakfast before browsing Bukit Bintang and The Exchange TRX.', search: 'Feeka Coffee Roasters Kuala Lumpur', kind: 'Café' },
      { time: 'Day 2 · 18:30', title: 'Sunset at Vertigo', detail: 'Take the city in from above, then follow the energy into dinner.', search: 'Vertigo Banyan Tree Kuala Lumpur', kind: 'Bar' },
    ],
  },
  {
    id: 'langkawi-reset', size: 'weekend', destination: 'Langkawi, Malaysia',
    title: 'Island air without the overplanning', moods: ['Drained', 'Stressed', 'Cabin fever', 'Celebratory'],
    wants: ['Nature', 'Water views', 'A little luxury', 'Wellness', 'Beautiful views'], price: 760, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'Mangroves, sea air and an unhurried resort rhythm make this an easy reset when you want distance without a complicated itinerary.',
    stops: [
      { time: 'Day 1 · 17:00', title: 'Sunset at Pantai Cenang', detail: 'Arrive, drop your bags and let the beach mark the start of the weekend.', search: 'Pantai Cenang Langkawi sunset', kind: 'Activity', emoji: '🌅' },
      { time: 'Day 1 · 19:30', title: 'Dinner at The Cliff', detail: 'Choose a sea-view table and keep the first night deliberately simple.', search: 'The Cliff Langkawi restaurant', kind: 'Restaurant', emoji: '🍽️' },
      { time: 'Day 2 · 09:00', title: 'Mangrove boat through Kilim Geoforest Park', detail: 'Take a guided route through limestone cliffs, water and quiet coves.', search: 'Kilim Geoforest Park mangrove tour', kind: 'Activity', emoji: '🛶' },
      { time: 'Day 2 · 18:00', title: 'Drinks at Kalut Cafe & Bar', detail: 'A relaxed beach drink before an early night or one more walk.', search: 'Kalut Cafe and Bar Langkawi', kind: 'Bar', emoji: '🍹' },
    ],
  },
  {
    id: 'kuching-weekend', size: 'weekend', destination: 'Kuching, Malaysia',
    title: 'A soft adventure with a food trail', moods: ['Curious', 'Adventurous', 'Homesick', 'Inspired', 'Bored'],
    wants: ['Nature', 'Culture', 'Good food', 'Hidden gems', 'A surprise'], price: 720, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'Kuching balances wildlife and city texture: you can have a meaningful nature day and still be back for a proper dinner by the river.',
    stops: [
      { time: 'Day 1 · 19:00', title: 'Dinner at Top Spot Food Court', detail: 'Start with local seafood and an easy introduction to the city’s flavours.', search: 'Top Spot Food Court Kuching', kind: 'Restaurant', emoji: '🦐' },
      { time: 'Day 2 · 08:00', title: 'Semenggoh Wildlife Centre', detail: 'Take the morning visit and leave space for the experience to stay unhurried.', search: 'Semenggoh Wildlife Centre Kuching visiting hours', kind: 'Activity', emoji: '🦧' },
      { time: 'Day 2 · 16:00', title: 'Coffee at Indah House', detail: 'Cool down in a creative space before wandering the old town.', search: 'Indah House Kuching cafe', kind: 'Café', emoji: '☕' },
      { time: 'Day 2 · 20:00', title: 'Drinks at The Junk', detail: 'End with a lively riverfront room and a little local history around you.', search: 'The Junk Kuching bar', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'phuket-play', size: 'weekend', destination: 'Phuket, Thailand',
    title: 'A playful beach weekend', moods: ['Playful', 'Celebratory', 'Sociable', 'Energised', 'Restless'],
    wants: ['Water views', 'Social energy', 'A good drink', 'Nightlife', 'A surprise'], price: 900, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'Beach time, a boat day and a lively night give you the full reset button when you want the weekend to feel unmistakably different.',
    stops: [
      { time: 'Day 1 · 18:00', title: 'Sunset at Kata Noi', detail: 'Start with a swim or a quiet stretch of sand before dinner.', search: 'Kata Noi Beach Phuket sunset', kind: 'Activity', emoji: '🌊' },
      { time: 'Day 1 · 20:00', title: 'Dinner at Raya', detail: 'Make the first night about Southern Thai comfort and a slower table.', search: 'Raya Restaurant Phuket', kind: 'Restaurant', emoji: '🍛' },
      { time: 'Day 2 · 09:00', title: 'Phang Nga Bay boat day', detail: 'Choose a small-group route for limestone islands, water and a little adventure.', search: 'Phang Nga Bay small group boat tour', kind: 'Activity', emoji: '🛥️' },
      { time: 'Day 2 · 21:00', title: 'Drinks at The Library Phuket', detail: 'Finish with a high-energy room where it is easy to meet the night.', search: 'The Library Phuket bar', kind: 'Bar', emoji: '🍹' },
    ],
  },
  {
    id: 'koh-samui-slow', size: 'weekend', destination: 'Koh Samui, Thailand',
    title: 'Sun, spa, and nowhere urgent', moods: ['Drained', 'Stressed', 'Overwhelmed', 'Content', 'Romantic'],
    wants: ['Water views', 'Wellness', 'A little luxury', 'Beautiful views'], price: 1080, duration: '3 days, 2 nights', travel: 'A longer short flight',
    why: 'This is for when Singapore feels too close: warm water, one beautiful treatment and long gaps between plans let the system settle.',
    stops: [
      { time: 'Day 1 · 18:30', title: 'Dinner at Fisherman’s Village', detail: 'Walk the market and choose the table that feels most inviting.', search: 'Fisherman village Koh Samui dinner', kind: 'Restaurant', emoji: '🍽️' },
      { time: 'Day 2 · 09:00', title: 'Morning at Silver Beach', detail: 'Keep the first half of the day deliberately spacious.', search: 'Silver Beach Koh Samui', kind: 'Activity', emoji: '🏝️' },
      { time: 'Day 2 · 15:00', title: 'Treatment at Tamarind Springs', detail: 'Choose a treatment and let the afternoon disappear.', search: 'Tamarind Springs Koh Samui spa', kind: 'Activity', emoji: '🧖' },
      { time: 'Day 2 · 19:30', title: 'Drinks at The Jungle Club', detail: 'A hillside view for sunset, without needing a packed evening.', search: 'Jungle Club Koh Samui', kind: 'Bar', emoji: '🌄' },
    ],
  },
  {
    id: 'manila-city-break', size: 'weekend', destination: 'Manila, Philippines',
    title: 'A bright, social city break', moods: ['Sociable', 'Curious', 'Bored', 'Lonely', 'Celebratory'],
    wants: ['City buzz', 'Good food', 'Live music', 'Social energy', 'A good drink'], price: 680, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'Manila is generous with its energy: galleries, live rooms, excellent food and people who make a short trip feel full quickly.',
    stops: [
      { time: 'Day 1 · 19:00', title: 'Dinner at Toyo Eatery', detail: 'Start with a thoughtful Filipino menu that makes the trip feel special.', search: 'Toyo Eatery Manila', kind: 'Restaurant', emoji: '🍽️' },
      { time: 'Day 2 · 11:00', title: 'National Museum of Fine Arts', detail: 'Give the late morning to Filipino art and a little air-conditioning.', search: 'National Museum of Fine Arts Manila', kind: 'Activity', emoji: '🎨' },
      { time: 'Day 2 · 16:00', title: 'Coffee at Yardstick', detail: 'A proper coffee before the evening starts gathering pace.', search: 'Yardstick Coffee Manila', kind: 'Café', emoji: '☕' },
      { time: 'Day 2 · 21:00', title: 'Live music at 12 Monkeys', detail: 'Choose the current gig and let the room carry the rest of the night.', search: '12 Monkeys Music Hall Manila schedule', kind: 'Bar', emoji: '🎶' },
    ],
  },
  {
    id: 'bangkok-weekend', size: 'weekend', destination: 'Bangkok, Thailand',
    title: 'A weekend with the volume up', moods: ['Bored', 'Curious', 'Celebratory', 'Sociable', 'Energised'],
    wants: ['Culture', 'Good food', 'City buzz', 'A good drink', 'Nightlife'], price: 680, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'Bangkok makes a quick departure feel properly different: temples, galleries, late dinners and tiny bars give the weekend a pulse.',
    stops: [
      { time: 'Day 1 · 19:00', title: 'Dinner at Supanniga Eating Room', detail: 'Start with Thai flavours and a room that feels lively without being overwhelming.', search: 'Supanniga Eating Room Bangkok', kind: 'Restaurant', emoji: '🍛' },
      { time: 'Day 2 · 10:30', title: 'Bangkok Art and Culture Centre', detail: 'Choose one current exhibition, then let the rest of the day stay loose.', search: 'Bangkok Art and Culture Centre current exhibition', kind: 'Activity', emoji: '🎨' },
      { time: 'Day 2 · 16:00', title: 'Coffee at Gallery Drip', detail: 'A careful coffee and a cool pause before the evening heat lifts.', search: 'Gallery Drip Bangkok', kind: 'Café', emoji: '☕' },
      { time: 'Day 2 · 20:30', title: 'Drinks at Teens of Thailand', detail: 'End with a small, sociable cocktail room in Chinatown.', search: 'Teens of Thailand Bangkok', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'ho-chi-minh-weekend', size: 'weekend', destination: 'Ho Chi Minh City, Vietnam',
    title: 'A warm city break with a pulse', moods: ['Bored', 'Lonely', 'Restless', 'Sociable', 'Playful'],
    wants: ['Good food', 'Culture', 'City buzz', 'A good drink', 'Social energy'], price: 620, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'The city gives you movement without a rigid plan: one gallery, one excellent meal and one lively street at a time.',
    stops: [
      { time: 'Day 1 · 19:00', title: 'Dinner at Anan Saigon', detail: 'Start with modern Vietnamese plates that still feel rooted in the city.', search: 'Anan Saigon restaurant', kind: 'Restaurant', emoji: '🍜' },
      { time: 'Day 2 · 10:30', title: 'Museum of Fine Arts', detail: 'A calm, beautiful first look at local art and architecture.', search: 'Ho Chi Minh City Museum of Fine Arts', kind: 'Activity', emoji: '🖼️' },
      { time: 'Day 2 · 15:00', title: 'Coffee at The Workshop', detail: 'Reset over Vietnamese coffee before the evening heat lifts.', search: 'The Workshop Coffee Ho Chi Minh City', kind: 'Café', emoji: '☕' },
      { time: 'Day 2 · 20:30', title: 'Drinks at Layla Eatery & Bar', detail: 'A relaxed room for a drink and an easy conversation.', search: 'Layla Eatery and Bar Ho Chi Minh City', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'bali-weekend', size: 'weekend', destination: 'Ubud, Bali',
    title: 'Three days to come back to yourself', moods: ['Stressed', 'Drained', 'Low & heavy', 'Overwhelmed', 'Reflective'],
    wants: ['Nature', 'A little luxury', 'Make something', 'Good food', 'Wellness'], price: 920, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'Warmth, greenery and body-led days replace urgency with a softer rhythm, without asking you to commit to a full holiday.',
    stops: [
      { time: 'Day 1 · 19:00', title: 'Dinner at Hujan Locale', detail: 'Arrive, check in and eat thoughtful Indonesian food close to your base.', search: 'Hujan Locale Ubud', kind: 'Restaurant', emoji: '🍽️' },
      { time: 'Day 2 · 08:00', title: 'Tegalalang rice terrace walk', detail: 'Go early for cooler air and a quieter path.', search: 'Tegalalang Rice Terrace Ubud', kind: 'Activity', emoji: '🌿' },
      { time: 'Day 2 · 15:00', title: 'Tea at Seniman Coffee Studio', detail: 'Take a careful local brew and a slow afternoon pause.', search: 'Seniman Coffee Studio Ubud', kind: 'Café', emoji: '☕' },
      { time: 'Day 2 · 19:30', title: 'Drinks at Night Rooster', detail: 'Try one inventive cocktail in a small, warm room.', search: 'Night Rooster Ubud', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'siem-reap-weekend', size: 'weekend', destination: 'Siem Reap, Cambodia',
    title: 'Ancient light, easy evenings', moods: ['Curious', 'Inspired', 'Disconnected', 'Reflective', 'Homesick'],
    wants: ['Culture', 'Beautiful views', 'Good food', 'A surprise'], price: 760, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'Big history and small, unhurried evenings make this a weekend that feels expansive without becoming exhausting.',
    stops: [
      { time: 'Day 1 · 18:30', title: 'Dinner at Malis Siem Reap', detail: 'Settle in with Khmer dishes and an early night.', search: 'Malis Siem Reap', kind: 'Restaurant', emoji: '🍛' },
      { time: 'Day 2 · 05:00', title: 'Angkor Wat sunrise', detail: 'Use a local guide and keep the rest of the morning deliberately light.', search: 'Angkor Wat sunrise official tickets', kind: 'Activity', emoji: '🌅' },
      { time: 'Day 2 · 15:30', title: 'Coffee at The Little Red Fox Espresso', detail: 'Cool down with a good coffee before the evening market.', search: 'The Little Red Fox Espresso Siem Reap', kind: 'Café', emoji: '☕' },
      { time: 'Day 2 · 20:00', title: 'Drinks at Miss Wong', detail: 'A tucked-away cocktail bar for a gentle end to a full day.', search: 'Miss Wong Siem Reap', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'hanoi-weekend', size: 'weekend', destination: 'Hanoi, Vietnam',
    title: 'Old streets, new appetite', moods: ['Curious', 'Bored', 'Celebratory', 'Inspired', 'Sociable'],
    wants: ['Culture', 'Good food', 'Hidden gems', 'City buzz'], price: 700, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'Hanoi gives curiosity a satisfying route: old streets, small stools, excellent coffee and a city that keeps surprising you between stops.',
    stops: [
      { time: 'Day 1 · 19:00', title: 'Dinner at Nhà Hàng Ngon', detail: 'Start with a spread of Vietnamese classics in an easy first-night setting.', search: 'Nha Hang Ngon Hanoi', kind: 'Restaurant', emoji: '🍜' },
      { time: 'Day 2 · 10:00', title: 'Vietnam National Fine Arts Museum', detail: 'Spend the morning with lacquer, silk and modern Vietnamese work.', search: 'Vietnam National Fine Arts Museum Hanoi', kind: 'Activity', emoji: '🎨' },
      { time: 'Day 2 · 15:00', title: 'Egg coffee at Cafe Giang', detail: 'A little sweetness and a proper pause before the evening.', search: 'Cafe Giang Hanoi', kind: 'Café', emoji: '☕' },
      { time: 'Day 2 · 20:30', title: 'Drinks at Tadioto', detail: 'A creative, conversation-friendly bar for the final chapter.', search: 'Tadioto Hanoi', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'kyoto-noticing', size: 'global', destination: 'Kyoto, Japan',
    title: 'Four days of noticing things again', moods: ['Disconnected', 'Curious', 'Overwhelmed', 'Homesick'],
    wants: ['Culture', 'Good food', 'Nature', 'Beautiful views'], price: 1850, duration: '5 days, 4 nights', travel: 'Wander further',
    why: 'Small rituals, quiet lanes and seasonal detail invite your attention back into the world, one beautiful thing at a time.',
    stops: [
      { time: 'Day 1', title: 'Dinner at Omen Ginkaku-ji', detail: 'Settle into Higashiyama, then walk only as far as a restorative bowl of udon.', search: 'Omen Ginkakuji Kyoto', kind: 'Restaurant' },
      { time: 'Day 2', title: 'Early temples, slow afternoon', detail: 'Start before the crowds, then pause for tea and a garden.', search: 'Higashiyama temple walking route' },
      { time: 'Day 3', title: 'Arashiyama beyond the grove', detail: 'Cross the river and follow the quieter northern path.', search: 'Arashiyama Kyoto quiet route' },
      { time: 'Day 4 · 11:00', title: 'Tea at Ippodo Tea Kyoto Main Store', detail: 'Let someone guide you through one careful cup before the market.', search: 'Ippodo Tea Kyoto Main Store', kind: 'Café' },
      { time: 'Day 4 · 18:00', title: 'Drinks at K36', detail: 'End on a rooftop with Yasaka Pagoda and the city laid out below.', search: 'K36 rooftop Kyoto', kind: 'Bar' },
    ],
  },
  {
    id: 'ubud-unclench', size: 'global', destination: 'Ubud, Bali',
    title: 'A green week to unclench', moods: ['Stressed', 'Drained', 'Low & heavy', 'Overwhelmed', 'Anxious'],
    wants: ['Nature', 'A little luxury', 'Make something', 'Good food'], price: 1450, duration: '6 days, 5 nights', travel: 'Wander further',
    why: 'Warmth, greenery and body-led days replace urgency with a softer rhythm, while small creative moments keep the trip from feeling passive.',
    stops: [
      { time: 'Day 1', title: 'Dinner at Hujan Locale', detail: 'Arrive, check in, and eat thoughtful Indonesian food close to home base.', search: 'Hujan Locale Ubud', kind: 'Restaurant' },
      { time: 'Day 2', title: 'Coffee at Seniman', detail: 'Walk the rice fields early, then cool down over a careful local brew.', search: 'Seniman Coffee Studio Ubud', kind: 'Café' },
      { time: 'Day 3', title: 'Make something by hand', detail: 'Try ceramics, batik or cooking with a small local studio.', search: 'Ubud craft workshop' },
      { time: 'Day 4', title: 'Drinks at Night Rooster', detail: 'After a pool and treatment day, try one inventive cocktail in a small room.', search: 'Night Rooster Ubud', kind: 'Bar' },
    ],
  },
  {
    id: 'seoul-spark', size: 'global', destination: 'Seoul, South Korea',
    title: 'A city break with its volume up', moods: ['Bored', 'Celebratory', 'Curious', 'Lonely'],
    wants: ['Good food', 'Culture', 'Live music', 'A surprise'], price: 1750, duration: '5 days, 4 nights', travel: 'Wander further',
    why: 'Late-night energy, sharply different neighbourhoods and tiny obsessions to follow make it almost impossible for the days to blur together.',
    stops: [
      { time: 'Day 1', title: 'Dinner at Miro Sikdang', detail: 'Start with Korean comfort food in a lively neighbourhood room.', search: 'Miro Sikdang Seoul', kind: 'Restaurant' },
      { time: 'Day 2', title: 'Market-to-museum day', detail: 'Build the day around appetite and one excellent exhibition.', search: 'Seoul market museum itinerary' },
      { time: 'Day 3', title: 'Coffee at Anthracite Hannam', detail: 'Refuel between studios and design shops before the evening picks up.', search: 'Anthracite Hannam Seoul', kind: 'Café' },
      { time: 'Day 3 · Late', title: 'Drinks at Zest', detail: 'Try a low-waste cocktail in a polished but sociable Cheongdam bar.', search: 'Zest bar Seoul', kind: 'Bar' },
      { time: 'Day 4', title: 'Mountain edge, city view', detail: 'Take a manageable trail, then reward it properly.', search: 'easy Seoul hiking trail city view' },
    ],
  },
  {
    id: 'lisbon-light', size: 'global', destination: 'Lisbon, Portugal',
    title: 'Follow the light downhill', moods: ['Restless', 'Disconnected', 'Curious', 'Celebratory'],
    wants: ['Beautiful views', 'Good food', 'Culture', 'Live music'], price: 2650, duration: '7 days, 6 nights', travel: 'Wander further',
    why: 'Hills give restless energy somewhere to go, viewpoints reward every wander, and evenings arrive with music instead of another task.',
    stops: [
      { time: 'Day 1', title: 'Dinner at Prado', detail: 'Drop your bag, follow the lanes downhill, then settle in for seasonal Portuguese plates.', search: 'Prado restaurant Lisbon', kind: 'Restaurant' },
      { time: 'Day 2', title: 'Tram, tiles and a miradouro', detail: 'Choose one district and explore it slowly.', search: 'Lisbon tile museum miradouro' },
      { time: 'Day 3', title: 'Coffee at The Mill', detail: 'Start with a proper café breakfast before Belém and the river.', search: 'The Mill cafe Lisbon', kind: 'Café' },
      { time: 'Day 4', title: 'Drinks at PARK', detail: 'After Sintra, return for a rooftop drink over Lisbon at sunset.', search: 'PARK rooftop bar Lisbon', kind: 'Bar' },
    ],
  },
  {
    id: 'tokyo-after-dark', size: 'global', destination: 'Tokyo, Japan',
    title: 'Follow the city after dark', moods: ['Bored', 'Curious', 'Lonely', 'Celebratory'],
    wants: ['City buzz', 'Good food', 'Shopping', 'A good drink', 'Nightlife', 'Social energy'], price: 2200, duration: '6 days, 5 nights', travel: 'Wander further',
    why: 'Tokyo offers endless small decisions that feel playful instead of heavy: one counter seat, one neighbourhood, one tiny bar, then whatever catches your eye next.',
    stops: [
      { time: 'Day 1', title: 'Dinner at Afuri Harajuku', detail: 'Keep arrival simple with a bright bowl of yuzu ramen.', search: 'Afuri Harajuku Tokyo', kind: 'Restaurant' },
      { time: 'Day 2', title: 'Coffee at Koffee Mameya', detail: 'Begin with a precise, personal coffee experience before Omotesando.', search: 'Koffee Mameya Omotesando', kind: 'Café' },
      { time: 'Day 3', title: 'Shibuya from street to sky', detail: 'Browse, people-watch, then watch the crossings shrink beneath you.', search: 'Shibuya Sky Tokyo', kind: 'Activity' },
      { time: 'Day 3 · Late', title: 'Drinks at Bar Trench', detail: 'Take a counter seat in Ebisu for an inventive but unshowy cocktail.', search: 'Bar Trench Ebisu Tokyo', kind: 'Bar' },
    ],
  },
  {
    id: 'jakarta-kota-tua', size: 'day', destination: 'Kota Tua, Jakarta',
    title: 'Old streets, new stories', moods: ['Curious', 'Inspired', 'Disconnected', 'Bored', 'Reflective'],
    wants: ['Culture', 'Good food', 'Hidden gems', 'Make something'], price: 480000, duration: 'A rich half-day', travel: 'Within an hour',
    why: 'A compact loop through Jakarta’s old city gives a busy mind something tangible to notice: colonial facades, living history, and a good meal in between.',
    stops: [
      { time: '10:00', title: 'Museum Fatahillah', detail: 'Start with Jakarta’s layered history, then step outside before the galleries begin to blur.', search: 'Museum Fatahillah Kota Tua Jakarta', kind: 'Activity', emoji: '🏛️' },
      { time: '12:00', title: 'Lunch at Café Batavia', detail: 'Take the slower table and let the old-town atmosphere do some of the work.', search: 'Cafe Batavia Kota Tua Jakarta', kind: 'Restaurant', emoji: '🍽️' },
      { time: '14:00', title: 'Kota Tua creative walk', detail: 'Look for street painters, local design stalls and the details between the landmarks.', search: 'Kota Tua Jakarta art street', kind: 'Activity', emoji: '🎨' },
      { time: '16:00', title: 'Tea at Kedai Seni Djakarte', detail: 'Close with a cool drink and one thing you want to remember from the day.', search: 'Kedai Seni Djakarte Kota Tua', kind: 'Café', emoji: '🫖' },
    ],
  },
  {
    id: 'jakarta-macan-salihara', size: 'day', destination: 'South Jakarta, Indonesia',
    title: 'A gallery day with a live finale', moods: ['Inspired', 'Curious', 'Uninspired', 'Reflective', 'Disconnected'],
    wants: ['Culture', 'Indoors', 'Live music', 'Good food', 'A surprise'], price: 650000, duration: 'A thoughtful city day', travel: 'Within an hour',
    why: 'Contemporary art and a live programme give you fresh material to think about, without the pressure to be productive or social on demand.',
    stops: [
      { time: '11:00', title: 'Museum MACAN', detail: 'Choose one exhibition to really spend time with, then leave before it becomes homework.', search: 'Museum MACAN Jakarta current exhibition', kind: 'Activity', emoji: '🖼️' },
      { time: '14:00', title: 'Lunch at Dia.Lo.Gue', detail: 'Pair the gallery with a design-minded café and a meal that keeps the afternoon easy.', search: 'Dia.Lo.Gue Artspace Jakarta cafe', kind: 'Restaurant', emoji: '🍜' },
      { time: '16:30', title: 'Tea at Anomali Coffee Kemang', detail: 'Pause in Kemang before the evening programme.', search: 'Anomali Coffee Kemang Jakarta', kind: 'Café', emoji: '☕' },
      { time: '19:30', title: 'Live performance at Salihara Arts Center', detail: 'Check the current theatre, dance, music or talk programme and let the night be event-led.', search: 'Salihara Arts Center Jakarta events today', kind: 'Activity', emoji: '🎭' },
    ],
  },
  {
    id: 'jakarta-taman-mini', size: 'day', destination: 'East Jakarta, Indonesia',
    title: 'A curious day of Indonesia in miniature', moods: ['Curious', 'Playful', 'Homesick', 'Bored', 'Energised'],
    wants: ['Culture', 'Good food', 'A surprise', 'Beautiful views'], price: 520000, duration: 'A full, easy day', travel: 'Within an hour',
    why: 'You get a sense of the country without a long journey: architecture, regional traditions and a few playful stops that keep the day moving.',
    stops: [
      { time: '09:30', title: 'Taman Mini Indonesia Indah', detail: 'Choose two pavilions rather than trying to cover the whole park.', search: 'Taman Mini Indonesia Indah Jakarta', kind: 'Activity', emoji: '🗺️' },
      { time: '12:30', title: 'Lunch at Warung Tekko', detail: 'Keep lunch local and unfussy before the afternoon programme.', search: 'Warung Tekko Taman Mini Jakarta', kind: 'Restaurant', emoji: '🍛' },
      { time: '14:00', title: 'Museum Indonesia', detail: 'Spend time with the craft and textile rooms that catch your eye.', search: 'Museum Indonesia Taman Mini', kind: 'Activity', emoji: '🧵' },
      { time: '17:00', title: 'Tea at Anjungan Jawa Barat', detail: 'A shaded drink and a final walk before heading back into the city.', search: 'Anjungan Jawa Barat Taman Mini cafe', kind: 'Café', emoji: '🫖' },
    ],
  },
  {
    id: 'jakarta-kesenian', size: 'day', destination: 'Central Jakarta, Indonesia',
    title: 'A day for the live city', moods: ['Sociable', 'Inspired', 'Lonely', 'Curious', 'Energised'],
    wants: ['Culture', 'Live music', 'Social energy', 'Good food', 'City buzz'], price: 720000, duration: 'Late morning to night', travel: 'Within an hour',
    why: 'A good performance gives the day a centre of gravity, while nearby food and drinks keep you connected to the city rather than watching it pass by.',
    stops: [
      { time: '11:00', title: 'National Gallery Indonesia', detail: 'Start with one collection, not every room.', search: 'National Gallery of Indonesia current exhibition', kind: 'Activity', emoji: '🎨' },
      { time: '13:00', title: 'Lunch at Plataran Menteng', detail: 'Make lunch the reset between the gallery and the evening programme.', search: 'Plataran Menteng Jakarta', kind: 'Restaurant', emoji: '🍽️' },
      { time: '16:00', title: 'Tea at Tjikini 17', detail: 'A quiet pause near the arts district before the lights come up.', search: 'Tjikini 17 Jakarta cafe', kind: 'Café', emoji: '☕' },
      { time: '19:30', title: 'Performance at Gedung Kesenian Jakarta', detail: 'Check the current theatre, orchestra or dance listing and book the show that feels most alive.', search: 'Gedung Kesenian Jakarta schedule today', kind: 'Activity', emoji: '🎶' },
    ],
  },
  {
    id: 'jakarta-art-week', size: 'day', destination: 'Menteng–Kuningan, Jakarta',
    title: 'Small rooms, big ideas', moods: ['Inspired', 'Curious', 'Uninspired', 'Reflective'],
    wants: ['Culture', 'Indoors', 'Make something', 'A little luxury'], price: 880000, duration: 'A polished art crawl', travel: 'Within an hour',
    why: 'A short gallery crawl keeps the day fresh: each room changes the tone, and you can stop as soon as one idea feels enough.',
    stops: [
      { time: '11:00', title: 'ROH Projects', detail: 'Begin with contemporary Indonesian artists and one conversation about what you saw.', search: 'ROH Projects Jakarta current exhibition', kind: 'Activity', emoji: '🖼️' },
      { time: '13:00', title: 'Lunch at AMKC Atelier', detail: 'A design-forward room and a proper lunch between galleries.', search: 'AMKC Atelier Jakarta', kind: 'Restaurant', emoji: '🍽️' },
      { time: '15:00', title: 'Dia.Lo.Gue gallery stop', detail: 'Browse local design, illustration and small objects you might actually take home.', search: 'Dia.Lo.Gue Artspace Jakarta current exhibition', kind: 'Activity', emoji: '🧩' },
      { time: '17:00', title: 'Drinks at The Cocktail Club', detail: 'End with one considered drink and a view of the city’s evening shift.', search: 'The Cocktail Club Jakarta', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'jakarta-bogor-garden', size: 'day', destination: 'Bogor, West Java',
    title: 'Greenhouse weather for the mind', moods: ['Drained', 'Stressed', 'Cabin fever', 'Reflective', 'Anxious'],
    wants: ['Nature', 'Beautiful views', 'Good food', 'Gentle social energy'], price: 580000, duration: 'A full green day', travel: 'About 1–2 hours by car or train',
    why: 'A short escape to Bogor changes the air without asking for a whole weekend: big trees, cooler paths and a proper lunch create room to come back to yourself.',
    stops: [
      { time: '08:00', title: 'Train or car to Bogor', detail: 'Take whichever route is moving faster from your neighborhood today.', search: 'Jakarta to Bogor train travel time' },
      { time: '10:00', title: 'Bogor Botanical Gardens', detail: 'Follow the lake and canopy paths, stopping whenever the shade feels good.', search: 'Kebun Raya Bogor', kind: 'Activity', emoji: '🌿' },
      { time: '13:00', title: 'Lunch at Kedai Kita', detail: 'Keep it warm and local with pizza kayu bakar and something cold to drink.', search: 'Kedai Kita Bogor', kind: 'Restaurant', emoji: '🍕' },
      { time: '15:00', title: 'Tea at Lemongrass', detail: 'Let the afternoon taper off with a garden table before the return trip.', search: 'Lemongrass Bogor restaurant cafe', kind: 'Café', emoji: '🫖' },
    ],
  },
  {
    id: 'jakarta-sentul-waterfall', size: 'day', destination: 'Sentul, West Java',
    title: 'Water, movement, then a long lunch', moods: ['Restless', 'Cabin fever', 'Energised', 'Adventurous'],
    wants: ['Nature', 'Sports & movement', 'Water views', 'Good food'], price: 760000, duration: 'A full active day', travel: 'About 1–2 hours by car',
    why: 'A little effort makes the rest of the day feel earned: the drive, the trail and the water give restless energy somewhere useful to go.',
    stops: [
      { time: '07:30', title: 'Drive to Sentul', detail: 'Leave early enough to keep the trail cool and unhurried.', search: 'Jakarta to Sentul travel time' },
      { time: '09:30', title: 'Leuwi Hejo waterfall walk', detail: 'Take the marked route, swim only where local conditions allow, and keep the pace playful.', search: 'Leuwi Hejo waterfall Sentul', kind: 'Activity', emoji: '💧' },
      { time: '13:00', title: 'Lunch at Anthology Coffee', detail: 'A generous meal and cold drink after the trail.', search: 'Anthology Coffee Sentul', kind: 'Restaurant', emoji: '🍽️' },
      { time: '15:30', title: 'Tea at Edensor Hills', detail: 'Finish with a wide view before returning to Jakarta.', search: 'Edensor Hills Sentul cafe', kind: 'Café', emoji: '🌄' },
    ],
  },
  {
    id: 'jakarta-puncak-tea', size: 'weekend', destination: 'Puncak, West Java',
    title: 'Tea-country air and a slower morning', moods: ['Stressed', 'Drained', 'Overwhelmed', 'Reflective'],
    wants: ['Nature', 'Beautiful views', 'A little luxury', 'Good food'], price: 1850000, duration: '2 days, 1 night', travel: 'About 2–3 hours by car',
    why: 'The highlands create enough distance from Jakarta to reset your senses: mist, tea rows and a morning with nowhere urgent to be.',
    stops: [
      { time: 'Day 1 · 09:00', title: 'Drive into Puncak', detail: 'Leave before the traffic builds and use the journey as the transition.', search: 'Jakarta to Puncak travel time' },
      { time: 'Day 1 · 13:00', title: 'Lunch at The Lake House', detail: 'Settle by the water with a warm meal before checking in.', search: 'The Lake House Puncak', kind: 'Restaurant', emoji: '🍽️' },
      { time: 'Day 1 · 16:00', title: 'Tea walk at Gunung Mas', detail: 'Take the plantation path while the light is soft.', search: 'Gunung Mas Tea Plantation Puncak', kind: 'Activity', emoji: '🍃' },
      { time: 'Day 2 · 09:00', title: 'Coffee at Cimory Riverside', detail: 'A long breakfast and river view before the drive home.', search: 'Cimory Riverside Puncak', kind: 'Café', emoji: '☕' },
    ],
  },
  {
    id: 'jakarta-thousand-islands', size: 'weekend', destination: 'Pramuka Island, Thousand Islands',
    title: 'Two days where the water does the talking', moods: ['Cabin fever', 'Stressed', 'Celebratory', 'Adventurous'],
    wants: ['Nature', 'Water views', 'Beautiful views', 'A surprise'], price: 2400000, duration: '2 days, 1 night', travel: 'A short boat crossing',
    why: 'Island time is a hard reset from city noise: clear water, simple logistics and enough open sky to make the week feel smaller.',
    stops: [
      { time: 'Day 1 · 07:00', title: 'Boat from Marina Ancol', detail: 'Pack light and keep the crossing as part of the escape.', search: 'Marina Ancol to Pramuka Island boat schedule' },
      { time: 'Day 1 · 11:00', title: 'Snorkel and reef walk', detail: 'Choose a local guide and let the water set the pace.', search: 'Pramuka Island snorkeling guide', kind: 'Activity', emoji: '🐠' },
      { time: 'Day 1 · 18:00', title: 'Dinner by the harbour', detail: 'Keep it simple with grilled seafood and an early night.', search: 'Pramuka Island seafood dinner', kind: 'Restaurant', emoji: '🦐' },
      { time: 'Day 2 · 08:00', title: 'Coffee and island loop', detail: 'Walk the shoreline before the return boat.', search: 'Pramuka Island cafe', kind: 'Café', emoji: '☕' },
    ],
  },
  {
    id: 'jakarta-pelabuhan-ratu', size: 'weekend', destination: 'Pelabuhan Ratu, West Java',
    title: 'A wild coast to clear your head', moods: ['Restless', 'Low & heavy', 'Cabin fever', 'Adventurous'],
    wants: ['Nature', 'Water views', 'Beautiful views', 'A little luxury'], price: 2200000, duration: '2 days, 1 night', travel: 'About 3–4 hours by car',
    why: 'A longer drive earns you a dramatic coast, salt air and a horizon big enough to interrupt the loop in your head.',
    stops: [
      { time: 'Day 1 · 08:00', title: 'Drive to the south coast', detail: 'Leave early, with one coffee stop and no need to rush the road.', search: 'Jakarta to Pelabuhan Ratu drive' },
      { time: 'Day 1 · 13:00', title: 'Lunch at Cimaja Square', detail: 'Choose a simple local meal before the afternoon on the water.', search: 'Cimaja Square Pelabuhan Ratu', kind: 'Restaurant', emoji: '🍽️' },
      { time: 'Day 1 · 16:00', title: 'Sunset at Karang Hawu', detail: 'Take the cliffside view, staying clear of the surf zone.', search: 'Karang Hawu Beach sunset', kind: 'Activity', emoji: '🌊' },
      { time: 'Day 2 · 09:00', title: 'Coffee at Cimaja Beach Club', detail: 'A slow breakfast with the sea in view before heading back.', search: 'Cimaja Beach Club cafe', kind: 'Café', emoji: '☕' },
    ],
  },
  {
    id: 'jakarta-bandung-heritage', size: 'weekend', destination: 'Bandung, West Java',
    title: 'Art deco, cool air, good stories', moods: ['Curious', 'Inspired', 'Bored', 'Sociable', 'Homesick'],
    wants: ['Culture', 'Good food', 'Hidden gems', 'Beautiful views'], price: 2100000, duration: '2 days, 1 night', travel: 'About 2.5–3 hours by train or car',
    why: 'Bandung gives you a change of texture without a complicated trip: heritage streets, independent galleries and food worth travelling for.',
    stops: [
      { time: 'Day 1 · 08:00', title: 'Fast train or car to Bandung', detail: 'Use the fastest practical route from your neighborhood.', search: 'Jakarta Bandung fast train travel time' },
      { time: 'Day 1 · 12:30', title: 'Lunch at Batagor Kingsley', detail: 'Start with one of Bandung’s easy local classics.', search: 'Batagor Kingsley Bandung', kind: 'Restaurant', emoji: '🥟' },
      { time: 'Day 1 · 15:00', title: 'Bandung creative district walk', detail: 'Mix Braga heritage, NuArt or a current independent exhibition.', search: 'Bandung current art exhibition Braga NuArt', kind: 'Activity', emoji: '🎨' },
      { time: 'Day 1 · 20:00', title: 'Drinks at 18th Rooftop', detail: 'A city view and a low-key nightcap before tomorrow’s galleries.', search: '18th Rooftop Bandung', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'jakarta-bangkok-culture', size: 'global', destination: 'Bangkok, Thailand',
    title: 'A vivid weekend beyond the usual', moods: ['Bored', 'Curious', 'Celebratory', 'Sociable', 'Inspired'],
    wants: ['Culture', 'Good food', 'City buzz', 'Live music', 'A good drink'], price: 6500000, duration: '4 days, 3 nights', travel: 'A short flight',
    why: 'Bangkok keeps the senses awake: galleries, river light, street food and late-night rooms give a curious mood plenty to follow.',
    stops: [
      { time: 'Day 1 · 19:00', title: 'Dinner at Baan Langsuan', detail: 'Begin with a proper Thai meal close to your base.', search: 'Baan Langsuan Bangkok', kind: 'Restaurant', emoji: '🍛' },
      { time: 'Day 2 · 11:00', title: 'Bangkok Art and Culture Centre', detail: 'Start with a current exhibition before the city gets loud.', search: 'Bangkok Art and Culture Centre current exhibition', kind: 'Activity', emoji: '🎨' },
      { time: 'Day 3 · 10:00', title: 'Coffee at Gallery Drip', detail: 'Take a careful coffee break, then browse the creative district.', search: 'Gallery Drip Bangkok', kind: 'Café', emoji: '☕' },
      { time: 'Day 3 · 20:30', title: 'Drinks at Teens of Thailand', detail: 'A small, sociable cocktail room for the night you want.', search: 'Teens of Thailand Bangkok', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'jakarta-ho-chi-minh', size: 'global', destination: 'Ho Chi Minh City, Vietnam',
    title: 'A warm city break with a pulse', moods: ['Bored', 'Lonely', 'Restless', 'Sociable', 'Playful'],
    wants: ['Good food', 'Culture', 'City buzz', 'A good drink', 'Social energy'], price: 5500000, duration: '4 days, 3 nights', travel: 'A short flight',
    why: 'The city gives you movement without a rigid plan: one gallery, one excellent meal and one lively street at a time.',
    stops: [
      { time: 'Day 1 · 19:00', title: 'Dinner at Anan Saigon', detail: 'Start with modern Vietnamese plates that still feel rooted in the city.', search: 'Anan Saigon restaurant', kind: 'Restaurant', emoji: '🍜' },
      { time: 'Day 2 · 10:30', title: 'Ho Chi Minh City Museum of Fine Arts', detail: 'A calm, beautiful first look at local art and architecture.', search: 'Ho Chi Minh City Museum of Fine Arts', kind: 'Activity', emoji: '🖼️' },
      { time: 'Day 3 · 15:00', title: 'Coffee at The Workshop', detail: 'Reset over Vietnamese coffee before the evening heat lifts.', search: 'The Workshop Coffee Ho Chi Minh City', kind: 'Café', emoji: '☕' },
      { time: 'Day 3 · 20:30', title: 'Drinks at Layla Eatery & Bar', detail: 'A relaxed room for a drink and an easy conversation.', search: 'Layla Eatery and Bar Ho Chi Minh City', kind: 'Bar', emoji: '🍸' },
    ],
  },
  {
    id: 'jakarta-singapore-city', size: 'global', destination: 'Singapore',
    title: 'A polished city reset', moods: ['Drained', 'Inspired', 'Celebratory', 'Confident', 'Sociable'],
    wants: ['City buzz', 'Culture', 'A little luxury', 'Beautiful views', 'Good food'], price: 5000000, duration: '3 days, 2 nights', travel: 'A short flight',
    why: 'Singapore makes a short trip feel easy: excellent rooms, current exhibitions and skyline evenings without a heavy planning load.',
    stops: [
      { time: 'Day 1 · 19:00', title: 'Dinner at Burnt Ends', detail: 'Make the first night feel like an occasion with a table worth travelling for.', search: 'Burnt Ends Singapore reservations', kind: 'Restaurant', emoji: '🍽️' },
      { time: 'Day 2 · 11:00', title: 'A current show at National Gallery', detail: 'Choose the exhibition that matches your mood, then keep the afternoon open.', search: 'National Gallery Singapore current exhibitions', kind: 'Activity', emoji: '🎨' },
      { time: 'Day 2 · 16:00', title: 'Tea at Nylon Coffee Roasters', detail: 'A small, precise pause before the evening.', search: 'Nylon Coffee Roasters Singapore', kind: 'Café', emoji: '☕' },
      { time: 'Day 2 · 20:30', title: 'Rooftop drinks at Marina Bay Sands', detail: 'Choose the current rooftop or ladies’ night programme if you want an easy social room with a view.', search: 'Marina Bay Sands rooftop bar current events', kind: 'Bar', emoji: '🌆' },
    ],
  },
  {
    id: 'jakarta-yogyakarta-culture', size: 'global', destination: 'Yogyakarta, Indonesia',
    title: 'A long weekend of living culture', moods: ['Curious', 'Inspired', 'Homesick', 'Reflective', 'Disconnected'],
    wants: ['Culture', 'Good food', 'Make something', 'Hidden gems'], price: 3600000, duration: '3 days, 2 nights', travel: 'A short flight or fast train',
    why: 'Yogyakarta gives culture a pulse: batik studios, contemporary art, old streets and meals that feel connected to where you are.',
    stops: [
      { time: 'Day 1 · 16:00', title: 'Batik workshop in Prawirotaman', detail: 'Make something small with a local teacher before dinner.', search: 'Yogyakarta batik workshop Prawirotaman', kind: 'Activity', emoji: '🧵' },
      { time: 'Day 1 · 19:00', title: 'Dinner at Mediterranea', detail: 'A relaxed first night with a menu that works for a group or solo table.', search: 'Mediterranea Restaurant Yogyakarta', kind: 'Restaurant', emoji: '🍽️' },
      { time: 'Day 2 · 10:00', title: 'Sonobudoyo Museum', detail: 'Give the morning to Javanese objects, stories and performance traditions.', search: 'Museum Sonobudoyo Yogyakarta', kind: 'Activity', emoji: '🏛️' },
      { time: 'Day 2 · 18:00', title: 'Tea at Kafe 80s Bocor Alus', detail: 'Take a slow break before a current performance or gallery opening.', search: 'Yogyakarta current cultural events performance gallery', kind: 'Café', emoji: '☕' },
      { time: 'Day 2 · 20:30', title: 'Live performance at Taman Budaya Yogyakarta', detail: 'Check the current dance, theatre or music listing and choose the night’s anchor.', search: 'Taman Budaya Yogyakarta schedule current performance', kind: 'Activity', emoji: '🎭' },
    ],
  },
];

export function chooseEscape(
  size: EscapeSize,
  mood: string,
  wants: string[],
  budget: number,
  seed = 0,
  story = '',
  date = new Date().toISOString().slice(0, 10),
  location = '',
) {
  const selectedDate = date || new Date().toISOString().slice(0, 10);
  const startingPlace = location.toLowerCase();
  const jakartaStart = /(jakarta|indonesia|bogor|sentul|bandung|puncak|yogyakarta|pelabuhan ratu|thousand islands)/.test(startingPlace);
  const words = story.toLowerCase();
  const inferred = [
    /(quiet|peace|calm|rest|tired|exhaust)/.test(words) && 'Nature',
    /(food|eat|dinner|lunch|hungry|comfort)/.test(words) && 'Good food',
    /(art|museum|learn|history|culture)/.test(words) && 'Culture',
    /(sea|beach|water|swim|coast)/.test(words) && 'Water views',
    /(make|paint|pottery|creative|craft)/.test(words) && 'Make something',
    /(music|dance|concert|gig)/.test(words) && 'Live music',
    /(inside|indoor|rain|heat)/.test(words) && 'Indoors',
    /(treat|spa|luxury|pamper)/.test(words) && 'A little luxury',
    /(people|social|chat|mingle|meet|friends)/.test(words) && 'Social energy',
    /(city|buzz|busy|energy|crowd)/.test(words) && 'City buzz',
    /(bar|drink|cocktail|wine|beer)/.test(words) && 'A good drink',
    /(nightlife|club|late night|party)/.test(words) && 'Nightlife',
    /(dance|dancing)/.test(words) && 'Dance',
    /(shop|shopping|browse|fashion)/.test(words) && 'Shopping',
    /(spa|massage|wellness|sauna)/.test(words) && 'Wellness',
    /(workout|run|cycle|sport|active)/.test(words) && 'Sports & movement',
    /(romance|romantic|date night)/.test(words) && 'Romance',
  ].filter(Boolean) as string[];
  const allWants = [...new Set([...wants, ...inferred])];
  const candidates = escapes.filter((escape) => {
    const matchesSize = escape.size === size;
    const matchesDate = !escape.event || (selectedDate >= escape.event.from && selectedDate <= escape.event.to);
    const matchesStart = !jakartaStart || escape.size === 'global' || /(Jakarta|Indonesia|West Java|Bandung|Bogor|Puncak|Sentul|Yogyakarta|Pelabuhan Ratu|Thousand Islands)/i.test(escape.destination);
    return matchesSize && matchesDate && matchesStart;
  });
  if (!candidates.length) return null;
  const scored = candidates
    .map((escape) => ({
      escape,
      score:
        (escape.moods.includes(mood) ? 6 : 0) +
        escape.wants.filter((want) => allWants.includes(want)).length * 2 +
        (escape.event ? 3 : 0) +
        (budget > 0 ? (escape.price <= budget ? 1 : -Math.min(1.5, (escape.price - budget) / Math.max(budget, 1))) : 0) +
        ((escape.id.charCodeAt(0) + seed) % 7) / 10,
    }))
    .sort((a, b) => b.score - a.score);

  return scored[seed % scored.length]?.escape ?? scored[0].escape;
}
