import amawaterwaysSpecialImage from "../assets/specials/amawaterways.jpg";
import adventuresByDisneySpecialImage from "../assets/specials/adventures-by-disney-rhone.webp";
import beachesSpecialImage from "../assets/specials/beaches-resort.webp";
import disneyWorldSpecialImage from "../assets/specials/disney-world.png";
import mscSpecialImage from "../assets/specials/msc-family-cruise.webp";
import vikingSpecialImage from "../assets/specials/viking.jpg";

export const weeklySpecialsLastUpdated = "August 24, 2026";

export function buildWeeklySpecials(brandLogos) {
  return [
    {
      line: "Royal Caribbean",
      logo: brandLogos.rccl,
      image:
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85",
      sourceUrl:
        "https://www.royalcaribbean.com/terms-and-conditions/promotions",
      headline: "60% Off the Second Guest + Family Savings",
      offer:
        "Save 60% on the second guest and receive free fares for eligible third and fourth guests on select sailings, including many Summer 2027 vacations.",
      bestFor:
        "Families, Caribbean and Bahamas cruises, short getaways, multi-generational travel, and activity-filled ships",
      finePrint:
        "Book by September 3, 2026. Applies to select three-night-or-longer sailings departing August 26, 2026 or later. Free guests must be age 12 or younger and still pay taxes, fees, and port expenses. Holiday, Alaska, China, and other itinerary exclusions apply.",
    },
    {
      line: "Viking",
      logo: brandLogos.viking,
      image: vikingSpecialImage,
      sourceUrl: "https://www.vikingcruises.com/oceans/promotions.html",
      headline: "Summer Sale: Special Fares + $25 Deposit",
      offer:
        "Explore select river and ocean voyages with special cruise fares, free or reduced airfare on eligible itineraries, and a $25 deposit.",
      bestFor:
        "European river cruising, destination-focused ocean voyages, cultural enrichment, and premium adults-only travel",
      finePrint:
        "Book by August 31, 2026. Airfare benefits, gateways, departure dates, stateroom categories, final-payment dates, and promotional codes vary by itinerary. The $25 deposit excludes World Cruises and has departure-date restrictions.",
    },
    {
      line: "AmaWaterways",
      logo: brandLogos.amaWaterways,
      image: amawaterwaysSpecialImage,
      sourceUrl: "https://www.amawaterways.com/offers/save",
      headline: "Summer Savings: Save Up to $2,500",
      offer:
        "Save up to $2,500 per stateroom on select 2026 and 2027 river cruises. Eligible Europe sailings can add AirPlus economy airfare from $599 per person for 2026 or $999 per person for 2027.",
      bestFor:
        "Luxury river cruising, Europe, Colombia, immersive itineraries, solo travelers, and pre- or post-cruise land stays",
      finePrint:
        "Book by September 30, 2026. Valid on select new FIT and group bookings; solo travelers receive half the stated stateroom savings. AirPlus gateways, routing, transfers, availability, and combinability restrictions apply.",
    },
    {
      line: "MSC Cruises",
      logo: brandLogos.msc,
      image: mscSpecialImage,
      sourceUrl:
        "https://www.msccruisesusa.com/cruise-deals/promo-terms-and-conditions",
      headline: "Up to 35% Off + Up to $500 Onboard Credit",
      offer:
        "Save up to 35% on select cruises, receive up to $500 in onboard credit, and let eligible kids sail free as third or fourth guests. A separate Europe offer provides up to $600 off select sailings.",
      bestFor:
        "Families, Caribbean and Bahamas cruises, Ocean Cay, European itineraries, and travelers seeking strong value",
      finePrint:
        "Book by August 31, 2026. New U.S. bookings only. Savings apply to select sailings and the first two guests; children still pay government taxes and fees. Yacht Club is excluded from Kids Sail Free, and offer combinability is limited.",
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
      headline: "Up to $500 Onboard Credit on Select Cruises",
      offer:
        "Receive up to $500 in onboard credit per stateroom on select Fall and Winter 2026–2027 and Summer 2027 cruises when booking with Endless Dream Travel.",
      bestFor:
        "Caribbean, Bahamas, Alaska, Bermuda, Europe, the Mexican Riviera, and clients who want advisor-only savings",
      finePrint:
        "Book by August 31, 2026 using GMAOFFER. Available by phone, personal cruise consultant, or travel advisor rather than online. Select sailings only; Sailaway categories are excluded, and the $500 maximum requires an eligible six-night-or-longer Suite or Haven booking.",
    },
    {
      line: "Holland America Line",
      logo: {
        name: "Holland America Line",
      },
      image:
        "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1200&q=85",
      sourceUrl:
        "https://www.hollandamerica.com/en/us/cruise-deals/deals-card-configuration/SOS26",
      headline: "Up to 40% Off + Up to $400 Onboard Credit",
      offer:
        "Save up to 40% on select tropical cruises and receive up to $400 in onboard credit on eligible warm-weather getaways.",
      bestFor:
        "Caribbean, Mexico, holiday sailings, refined mid-size ships, couples, and destination-focused cruising",
      finePrint:
        "Book by August 31, 2026 for select Fall 2026 through Spring 2027 warm-weather cruises. Savings and onboard credit vary by itinerary and stateroom; availability is capacity controlled.",
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
        "Book by August 31, 2026. Princess headlines up to $300 instant savings, while its detailed category table reaches $600 on certain longer mini-suite and suite voyages. Select sailings, categories, capacity controls, taxes, and fees apply.",
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
      sourceUrl: "https://www.beaches.com/deals/",
      headline: "Endless Summer: Up to $1,000 in Credit",
      offer:
        "Receive up to $1,000 in instant credit, up to $750 in airfare credit, and a complimentary catamaran cruise on eligible family vacations at Beaches Turks & Caicos and Beaches Negril.",
      bestFor:
        "Caribbean family vacations, multi-generational trips, Turks & Caicos, Jamaica, Sesame Street experiences, and all-inclusive ease",
      finePrint:
        "Book by September 7, 2026 for eligible travel through December 31, 2028. Credits depend on resort, room, stay length, registration, and travel dates. Contracted groups are excluded; other restrictions and combinability rules apply.",
    },
  ];
}
