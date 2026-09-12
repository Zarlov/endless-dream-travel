import adventuresByDisneySpecialImage from "../assets/specials/adventures-by-disney-rhone.webp";
import beachesSpecialImage from "../assets/specials/beaches-resort.webp";
import disneyWorldSpecialImage from "../assets/specials/disney-world.png";
import exploraSpecialImage from "../assets/specials/explora-journeys.webp";
import vikingSpecialImage from "../assets/specials/viking.jpg";

export const weeklySpecialsLastUpdated = "September 12, 2026";

export function buildWeeklySpecials(brandLogos) {
  return [
    {
      line: "Royal Caribbean",
      logo: brandLogos.rccl,
      image:
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85",
      sourceUrl:
        "https://www.royalcaribbean.com/terms-and-conditions/promotions",
      headline: "60% Off the Second Guest",
      offer:
        "Save 60% on the second guest on eligible Royal Caribbean cruises, with itineraries ranging from quick Caribbean escapes to longer destination-rich vacations.",
      bestFor:
        "Families, Caribbean and Bahamas cruises, short getaways, multi-generational travel, and activity-filled ships",
      finePrint:
        "Book by October 5, 2026 for sailings departing September 4, 2026 or later. New individual and named group bookings at prevailing rates only. Taxes, fees, port expenses, capacity controls, and other exclusions apply.",
    },
    {
      line: "Viking",
      logo: brandLogos.viking,
      image: vikingSpecialImage,
      sourceUrl: "https://www.vikingcruises.com/oceans/promotions.html",
      headline: "End of Season Sale: Save Up to 35%",
      offer:
        "Save up to 35% on select river and ocean voyages, with special fares, free or reduced airfare on eligible itineraries, and a $25 deposit.",
      bestFor:
        "European river cruising, destination-focused ocean voyages, cultural enrichment, and premium adults-only travel",
      finePrint:
        "Book by September 30, 2026. New U.S. bookings only. Air benefits, gateways, departure dates, stateroom categories, promotional codes, and early final-payment dates vary. The $25 deposit excludes World Cruises and has departure-date restrictions.",
    },
    {
      line: "Explora Journeys",
      logo: brandLogos.explora,
      image: exploraSpecialImage,
      sourceUrl:
        "https://explorajourneys.com/us/en/info/special-offers/an-invitation-to-the-ocean",
      headline: "Save Up to $5,500 Per Person",
      offer:
        "Receive up to $5,500 per person in savings on select luxury journeys through the Mediterranean, Northern Europe, the Americas, the Caribbean, and South America.",
      bestFor:
        "Luxury travelers, couples, premium all-inclusive cruising, spontaneous winter escapes, and oceanfront suite accommodations",
      finePrint:
        "Book by September 29, 2026 for select journeys departing through February 5, 2027. Requires an OT1 Guarantee or Penthouse Guarantee suite, full payment at reservation, and a nonrefundable fare. Select journeys are excluded.",
    },
    {
      line: "Adventures by Disney",
      logo: brandLogos.adventuresDisney,
      image: adventuresByDisneySpecialImage,
      sourceUrl:
        "https://www.adventuresbydisney.com/special-offers/rhone-river-cruise-special-offer/",
      headline: "Save $400 Per Person on the Rhône",
      offer:
        "Save $400 per person on select 2027 Rhône River Cruise: Lyon & Provence departures, with immersive family-friendly experiences through the Rhône Valley and Provence.",
      bestFor:
        "Families and multi-generational travelers seeking a guided premium river cruise through southern France",
      finePrint:
        "Book by September 23, 2026 for select departures from June 3 through September 23, 2027. New U.S. bookings only; suites, Category E, airfare, extensions, and group bookings are excluded.",
    },
    {
      line: "Norwegian Cruise Line",
      logo: brandLogos.ncl,
      image:
        "https://www.ncl.com/adobe/dynamicmedia/deliver/dm-aid--ff161251-4f98-4e8f-ae0f-253233c1a171/ncl-encore-waterfront-dining.jpg?preferwebp=true&quality=100",
      sourceUrl: "https://www.ncl.com/cruise-deals/promotion-terms",
      headline: "50% Off All Cruises + Up to $500 Onboard Credit",
      offer:
        "For a very limited time, save 50% on every open-for-sale cruise and receive up to $500 in onboard credit per stateroom on select sailings.",
      bestFor:
        "Caribbean, Bahamas, Alaska, Bermuda, Europe, the Mexican Riviera, families, couples, and longer voyages",
      finePrint:
        "Exceptional short-window offer: book by September 14, 2026 at 11:59 p.m. ET. The 50% discount applies to new individual bookings in all categories. Onboard credit is available on select 4-night-or-longer sailings and varies by cruise length and category; the $500 maximum requires a Suite or The Haven on a sailing of 6 nights or longer. Additional restrictions apply.",
    },
    {
      line: "Virgin Voyages",
      logo: brandLogos.virgin,
      image:
        "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl: "https://www.virginvoyages.com/cruise-deals",
      headline: "Up to $1,000 Off + 70% Off the Second Sailor",
      offer:
        "Save instantly on eligible Virgin Voyages sailings and receive 70% off the second Sailor across qualifying inventory.",
      bestFor:
        "Adults-only vacations, couples, celebrations, Caribbean escapes, Europe, and longer repositioning voyages",
      finePrint:
        "Current limited-time offer has no published end date and applies to eligible travel from September 1, 2026 through October 28, 2028. The $1,000 maximum requires a 14-night-or-longer Mega RockStar booking; shorter voyages and lower categories receive less.",
    },
    {
      line: "Princess Cruises",
      logo: {
        name: "Princess Cruises",
        src: "https://assets.princess.com/is/image/princesscruises/princess-cruises-logo?fmt=png-alpha",
      },
      image:
        "https://assets.princess.com/is/image/princesscruises/fairbanks-northern-lights%3AHero-Large?ts=1783019008866",
      sourceUrl:
        "https://www.princess.com/cruise-deals-promotions/limited-time-offer",
      headline: "Up to 40% Off + $99 Deposits",
      offer:
        "Save up to 40% on the first two guests, reserve with a $99 deposit, receive instant savings on select cruises, and let third and fourth guests sail free on eligible voyages.",
      bestFor:
        "Alaska, Caribbean, Europe, multi-generational families, refined cruising, and longer destination-rich voyages",
      finePrint:
        "Book by October 12, 2026. Princess advertises up to $300 instant savings, with amounts varying by voyage length and category. Discounts apply to select sailings and the first two guests; free third and fourth guests still pay required taxes and expenses.",
    },
    {
      line: "Walt Disney World",
      logo: brandLogos.disneyWorld,
      image: disneyWorldSpecialImage,
      sourceUrl: "https://disneyworld.disney.go.com/special-offers/",
      headline: "Save Up to 20% on Holiday Resort Rooms",
      offer:
        "Save up to 20% on select Disney Resorts Collection rooms for eligible holiday stays. Disney+ subscribers can also save up to 25% on qualifying room-and-ticket packages with complimentary Park Hopper benefits.",
      bestFor:
        "Disney families, late-summer trips, fall and holiday getaways, longer resort stays, and package savings",
      finePrint:
        "Valid for most Sunday-through-Thursday nights October 4–November 19, 2026 and most nights November 22–December 24, 2026. Savings vary by resort and room; length-of-stay requirements and exclusions may apply. Discounted inventory is limited.",
    },
    {
      line: "Beaches Resorts",
      logo: brandLogos.beaches,
      image: beachesSpecialImage,
      sourceUrl: "https://www.beaches.com/sale/",
      headline: "Winter Splash Sale: Up to $2,325 in Credits",
      offer:
        "Make a family escape even sweeter with up to $1,400 in instant credit, up to $750 in air credit, and a $175 spa credit on qualifying Beaches vacations.",
      bestFor:
        "Caribbean family vacations, multi-generational trips, Turks & Caicos, Jamaica, Sesame Street experiences, and all-inclusive ease",
      finePrint:
        "Book September 8–October 5, 2026. Credit amounts vary by resort, room category, stay length, travel dates, and availability. Registration and other offer requirements apply; confirm eligible accommodations and full terms before booking.",
    },
  ];
}
