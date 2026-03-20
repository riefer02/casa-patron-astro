interface EventInfo {
  dates?: string;
  schedule?: string[];
  pricing?: string;
  notes?: string;
}

interface LocalAttraction {
  name: string;
  url: string;
  description: string;
  tags: string[];
  eventInfo?: EventInfo;
}

export const localAttractions: LocalAttraction[] = [
  // Upcoming 2026 Events
  {
    name: "Midtown Market 2026",
    url: "https://www.ruidosoparksandrec.com/news-information/midtown-market",
    description:
      "Shop fresh New Mexico produce, artisan foods, handmade crafts, and regional wines at Country Club Park every Saturday morning. A great way to experience the local community and take home a taste of the mountains.",
    tags: ["market", "local", "family"],
    eventInfo: {
      dates: "June 6 - October 3, 2026",
      schedule: ["Saturdays, 9:00 AM - 1:00 PM"],
    },
  },
  {
    name: "Brewdoso 2026",
    url: "https://www.discoverruidoso.com/calendar-of-events",
    description:
      "Brewdoso returns to Wingfield Park for a full day of craft beer, live music, and mountain-town energy. Sample regional and national brews, enjoy food vendors and artisan booths, and settle in for an evening of concerts under the pines.",
    tags: ["beer", "music", "entertainment"],
    eventInfo: {
      dates: "June 20, 2026",
      schedule: ["12:00 PM - 9:00 PM"],
    },
  },
  {
    name: "Lincoln County Art Loop 2026",
    url: "https://www.discoverruidoso.com/calendar-of-events",
    description:
      "The 31st Annual Lincoln County Art Loop is a juried fine art show drawing over 100 acclaimed artists from across the country. Explore paintings, sculpture, pottery, jewelry, and more while enjoying regional wines and live music.",
    tags: ["art", "culture", "local"],
    eventInfo: {
      dates: "July 3-5, 2026",
      schedule: [
        "Friday & Saturday: 10:00 AM - 5:00 PM",
        "Sunday: 12:00 PM - 4:00 PM",
      ],
    },
  },
  {
    name: "Mescalero Apache Ceremonial Dances & Rodeo",
    url: "https://mescaleroapachetribe.com/",
    description:
      "Experience the annual Mescalero Apache coming-of-age ceremony and rodeo over Fourth of July weekend. Dancers from Native American tribes across the Southwest gather for this powerful cultural celebration on the Mescalero Apache Reservation.",
    tags: ["culture", "family", "entertainment"],
    eventInfo: {
      dates: "July 4th weekend, 2026",
    },
  },
  {
    name: "IRONMAN 70.3 Ruidoso 2026",
    url: "https://www.ironman.com/",
    description:
      "The first IRONMAN event ever held in New Mexico! Watch world-class athletes tackle a 1.2-mile swim at Grindstone Lake, a 56-mile bike through the Sacramento Mountains, and a 13.1-mile run through Ruidoso's stunning high-altitude course.",
    tags: ["sports", "fitness", "outdoor"],
    eventInfo: {
      dates: "July 11-12, 2026",
      notes:
        "Registration opens April 23, closes July 1. Offers qualifying slots for the 2027 IRONMAN 70.3 World Championship.",
    },
  },
  {
    name: "Ruidoso RunFest 2026",
    url: "https://runsignup.com/Race/NM/Ruidoso/RuidosoMarathonHalfMarathonSchlotzskysBunRun5KandKids1MileFunRun",
    description:
      "The 2nd Annual Ruidoso RunFest features a marathon, half marathon, 47K/50K ultramarathon, Friday night 5K, and Kids 1K. Finish at Wingfield Park for a beer garden, food trucks, and live music in the cool mountain air.",
    tags: ["sports", "fitness", "outdoor"],
    eventInfo: {
      dates: "September 18-19, 2026",
      pricing: "$65-$75 (marathon/half) | $85 (47K/50K)",
    },
  },
  {
    name: "XTERRA World Championship 2026",
    url: "https://www.xterraplanet.com/",
    description:
      "Wild West XTERRA returns to Ruidoso for the XTERRA World Championship and 30th anniversary celebration. Athletes tackle high-altitude swimming, mountain biking, and trail running around Grindstone Lake and Lincoln National Forest.",
    tags: ["sports", "fitness", "outdoor"],
    eventInfo: {
      dates: "October 8-11, 2026",
    },
  },
  // Year-Round Attractions
  {
    name: "Ski Apache",
    url: "https://www.skiapache.com/",
    description:
      "Owned by the Mescalero Apache Tribe, Ski Apache boasts 750 skiable acres across 55 runs, all accessible via 11 lifts including New Mexico's only eight-passenger gondola. Just 20 minutes from Casa Patron.",
    tags: ["ski", "snowboard", "winter", "family"],
    eventInfo: {
      dates: "2026-2027 Season: Late November - Early April",
      notes:
        "Free Kids' Ticket Program: children 12 and under ski free with a paying adult. Season passes available. Check website for current conditions and opening date.",
    },
  },
  {
    name: "Spencer Theater for the Performing Arts",
    url: "https://spencertheater.com/",
    description:
      "A world-class 514-seat performing arts venue right here in Alto, NM. Enjoy concerts, plays, dance performances, and special events in an intimate mountain setting. The theater hosts approximately 30-35 shows per year.",
    tags: ["entertainment", "culture", "arts"],
    eventInfo: {
      notes: "Phone: 575-336-4800. Check website for current schedule and tickets.",
    },
  },
  {
    name: "Inn of the Mountain Gods Resort & Casino",
    url: "https://www.innofthemountaingods.com/",
    description:
      "A full-service resort on the Mescalero Apache Reservation featuring a casino, championship 18-hole golf course, full-service spa, and Lake Mescalero with boat rentals. Enjoy live entertainment at Club 49, multiple dining options, horseback riding, and stunning Sierra Blanca views.",
    tags: ["casino", "golf", "spa", "entertainment"],
    eventInfo: {
      notes:
        "287 Carrizo Canyon Road, Mescalero, NM. Live concerts and weekly comedy shows year-round.",
    },
  },
  {
    name: "Flying J Ranch",
    url: "https://www.flyingjranch.com/",
    description:
      "A beloved Alto tradition since 1982. Enjoy an authentic chuckwagon BBQ dinner followed by a western music show, gunfights, pony rides, and gold panning. A must-do family experience in the Sacramento Mountains.",
    tags: ["family", "dining", "entertainment"],
    eventInfo: {
      dates: "Memorial Day through Labor Day",
      schedule: ["Open nightly except Sundays"],
    },
  },
  {
    name: "Grindstone Lake & Trails",
    url: "https://www.ruidosoparksandrec.com/grindstone-lake-trail-system",
    description:
      "An 18-mile multi-use trail system with lakeside loops, mesa climbs, and scenic ridge views — less than 5 minutes from Midtown Ruidoso. Fish for rainbow trout, catfish, and bass, or kayak and canoe on the lake. The Wibit floating water park returns summer 2026.",
    tags: ["hiking", "fishing", "outdoor"],
    eventInfo: {
      pricing: "Parking: $10 (summer/holidays) | Wibit Water Park: $20/person",
      notes:
        "NM fishing license required (ages 12+). Non-motorized boats allowed. Wibit Water Park open Memorial Day - August.",
    },
  },
  {
    name: "Lincoln Historic Site",
    url: "https://nmhistoricsites.org/lincoln",
    description:
      "Step back in time at this remarkably preserved frontier town with 17 original structures from the Lincoln County War era (1878-1881). Walk in the footsteps of Billy the Kid and Pat Garrett. A fascinating half-day trip from Casa Patron.",
    tags: ["history", "culture", "family"],
    eventInfo: {
      schedule: ["Thursday - Monday, 10:00 AM - 4:00 PM"],
      pricing: "$7 per adult",
    },
  },
  {
    name: "Noisy Water Winery & Local Sips Trail",
    url: "https://noisywaterwinery.com/",
    description:
      "Explore Ruidoso's vibrant craft beverage scene with 10+ wineries, breweries, and tasting rooms along the Local Sips Trail. Noisy Water Winery offers 30+ wines including unique chile-infused varieties. Don't miss Downshift Brewing, Tall Pines Beer & Wine Garden, and the Enchanted Vine Barn.",
    tags: ["wine", "brewery", "local"],
    eventInfo: {
      notes:
        "Most tasting rooms are in Midtown Ruidoso along Sudderth Drive, within walking distance of each other.",
    },
  },
  {
    name: "Golf Courses in Ruidoso & Alto",
    url: "https://www.thelinksatsierrablanca.com/",
    description:
      "Play four scenic mountain courses: The Links at Sierra Blanca (Scottish links-style par-72), Inn of the Mountain Gods Championship Course (Golf Digest Top 40 Casino Courses), Cree Meadows (Lincoln County's oldest, since 1947), and Rainmakers in Alto. All set against stunning Sierra Blanca views.",
    tags: ["golf", "outdoor"],
    eventInfo: {
      notes: "Public tee times available at all courses. Open year-round, weather permitting.",
    },
  },
  {
    name: "Horseback Riding",
    url: "https://www.grindstonestables.com",
    description:
      "Explore the Sacramento Mountains on horseback with several local stables. Grindstone Stables offers 30-minute guided rides, Inn of the Mountain Gods has 1-hour rides along Lake Mescalero, and Bonito Stables welcomes walk-ins from 10 AM to 3 PM.",
    tags: ["outdoor", "family", "nature"],
    eventInfo: {
      pricing:
        "Grindstone Stables: starting at 5:30 PM | Inn of the Mountain Gods: $32/ride, ages 8+",
      notes: "Reservations recommended. Most stables open summer through fall.",
    },
  },
  {
    name: "Ruidoso Winter Park",
    url: "https://ruidosowinterpark.com/",
    description:
      "Experience snow tubing at Ruidoso's Winter Park in Alto, NM. With more lift capacity and snow making than anywhere in the Rockies, enjoy multiple lanes for all ages, magic carpet lifts, and VIP Igloos to warm up with hot drinks.",
    tags: ["winter", "tubing", "family"],
    eventInfo: {
      pricing: "Starting at $27 per person | Kids 3 and under: FREE",
      notes:
        "Season typically runs late November through March. Also home to the Screaming Eagle Mountain Coaster — NM's only mountain coaster ($25/ride). Call (575) 336-7079 for current hours.",
    },
  },
  {
    name: "Alto Lake",
    url: "https://www.ruidosoparksandrec.com/alto-lake",
    description:
      "Alto Lake is a serene natural area that offers fishing opportunities and scenic nature walks. It's a perfect spot for outdoor enthusiasts looking for a peaceful escape.",
    tags: ["fishing", "nature", "outdoor"],
  },
  {
    name: "Pillow's Funtrackers",
    url: "https://funtrackers-ruidoso.net/",
    description:
      "Family fun with three go-kart tracks, 18-hole mini golf, bumper boats, a maze, gemstone panning, and a full arcade. Open daily in summer, weekends in the off-season. Great for kids and kids at heart.",
    tags: ["family", "entertainment", "outdoor"],
    eventInfo: {
      pricing: "$7/ride | Gemstone panning: $10 | 20-ticket bundle: $100",
    },
  },
  {
    name: "Discover Ruidoso - Calendar of Events",
    url: "https://www.discoverruidoso.com/calendar-of-events",
    description:
      "The official tourism website for Ruidoso offers a comprehensive calendar of events, including concerts, festivals, and community activities throughout the year.",
    tags: ["events", "music", "information"],
  },
  {
    name: "Ruidoso Restaurants",
    url: "https://www.visitruidoso.com/restaurants/",
    description:
      "From fine dining at Michael J's and The Texas Club to local favorites like Casa Blanca, Tina's Cafe, and Hall of Flame Burgers — Ruidoso's dining scene punches well above its weight. Visit Ruidoso provides a full restaurant guide.",
    tags: ["restaurants", "dining"],
  },
];
