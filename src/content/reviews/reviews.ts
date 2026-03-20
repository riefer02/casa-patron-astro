interface PlatformRating {
  platform: string;
  rating: number;
  maxRating: number;
  reviewCount: number;
  url: string;
}

interface Review {
  author: string;
  date: string;
  isoDate: string;
  rating: number;
  platform: string;
  text: string;
  featured?: boolean;
  groupSize?: string;
}

export const platformRatings: PlatformRating[] = [
  {
    platform: "Airbnb",
    rating: 4.9,
    maxRating: 5,
    reviewCount: 94,
    url: "https://www.airbnb.com/rooms/52652912",
  },
  {
    platform: "Evolve",
    rating: 4.93,
    maxRating: 5,
    reviewCount: 27,
    url: "https://evolve.com/vacation-rentals/us/nm/alto/176-neill-rd",
  },
  {
    platform: "VRBO",
    rating: 4.9,
    maxRating: 5,
    reviewCount: 21,
    url: "https://www.vrbo.com/affiliates/casa-patron",
  },
  {
    platform: "Booking.com",
    rating: 9.8,
    maxRating: 10,
    reviewCount: 10,
    url: "https://www.booking.com/hotel/us/casa-patron.html",
  },
];

export const reviews: Review[] = [
  {
    author: "Margarita",
    date: "January 2026",
    isoDate: "2026-01",
    rating: 4,
    platform: "Evolve",
    text: "Nice property, can accommodate large groups. Very spacious and comfortable. The kitchen is well-equipped and the views from the back patio are incredible. We had a wonderful time with our extended family.",
    groupSize: "Large group",
  },
  {
    author: "Cody",
    date: "August 2025",
    isoDate: "2025-08",
    rating: 5,
    platform: "Evolve",
    text: "It was great. The house is exactly as pictured and the location is perfect for accessing Ski Apache and Ruidoso.",
  },
  {
    author: "Ray",
    date: "March 2025",
    isoDate: "2025-03",
    rating: 5,
    platform: "Evolve",
    text: "Absolutely perfect. The property exceeded all of our expectations. Elk, deer, and wild horses roam through the property daily. The house is beautifully designed with plenty of space for our group. We will definitely be back!",
    featured: true,
  },
  {
    author: "Cathy V.",
    date: "January 2025",
    isoDate: "2025-01",
    rating: 5,
    platform: "Evolve",
    text: "This place was awesome! Great kitchen, dining living area. The house had everything we needed for a comfortable stay. Beautiful views and a wonderful location close to all the attractions in the area.",
  },
  {
    author: "Oscar",
    date: "September 2024",
    isoDate: "2024-09",
    rating: 4,
    platform: "Evolve",
    text: "Really enjoyed this beautiful house. The setting is peaceful and the amenities are top-notch. Great location for exploring the Ruidoso area.",
  },
  {
    author: "Kerri",
    date: "March 2024",
    isoDate: "2024-03",
    rating: 5,
    platform: "Evolve",
    text: "The ingenious design allows both private and family time. Each suite has its own space while the great room brings everyone together. The hot tub under the stars was a highlight. We're already planning our return trip!",
    featured: true,
  },
  {
    author: "Juan A.",
    date: "January 2024",
    isoDate: "2024-01",
    rating: 5,
    platform: "Evolve",
    text: "Clean, beautiful view. The property is well-maintained and the mountain scenery is breathtaking. A perfect spot for a winter getaway near Ski Apache.",
  },
  {
    author: "Mary",
    date: "January 2024",
    isoDate: "2024-01",
    rating: 5,
    platform: "Evolve",
    text: "Simply beautiful. Perfect accommodations for 11 guests. Every room was thoughtfully appointed and the common areas are spacious enough for everyone to enjoy together. The kitchen was a dream for preparing family meals. Can't wait to return!",
    featured: true,
    groupSize: "11 guests",
  },
  {
    author: "Megan J.",
    date: "October 2023",
    isoDate: "2023-10",
    rating: 5,
    platform: "Evolve",
    text: "Abundance of space with wonderful back patio views. The house is perfect for large groups who want to spread out but still have great gathering areas. The surrounding nature is stunning in the fall.",
  },
  {
    author: "Dustin P.",
    date: "July 2023",
    isoDate: "2023-07",
    rating: 5,
    platform: "Evolve",
    text: "Great property with excellent views and plenty of room. We loved the outdoor spaces and the proximity to hiking trails. A truly relaxing mountain retreat.",
  },
  {
    author: "Oscar V.",
    date: "July 2023",
    isoDate: "2023-07",
    rating: 5,
    platform: "Evolve",
    text: "Amazing! Clean and welcoming. Only 10 minutes to downtown Ruidoso. The house has everything you need and the location can't be beat. Perfect base for exploring everything the area has to offer.",
  },
];
