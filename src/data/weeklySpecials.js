import amawaterwaysSpecialImage from "../assets/specials/amawaterways.jpg";
import adventuresByDisneySpecialImage from "../assets/specials/adventures-by-disney-rhone.webp";
import beachesSpecialImage from "../assets/specials/beaches-resort.webp";
import disneyWorldSpecialImage from "../assets/specials/disney-world.png";
import exploraSpecialImage from "../assets/specials/explora-journeys.webp";
import sandalsSpecialImage from "../assets/specials/sandals-resort.webp";
import vikingSpecialImage from "../assets/specials/viking.jpg";

export const weeklySpecialsLastUpdated = "August 3, 2026";

export function buildWeeklySpecials(brandLogos) {
  return [
    {
      line: "Viking",
      logo: brandLogos.viking,
      image: vikingSpecialImage,
      sourceUrl: "https://www.vikingcruises.com/oceans/promotions.html",
      headline: "Summer Sale: Up to 35% Off + $25 Deposit",
      offer:
        "Save up to 35% on select river and ocean voyages, with free or reduced airfare, special cruise fares, and a $25 deposit. Select expedition journeys offer savings of up to 20%.",
      bestFor:
        "European river cruising, destination-focused ocean voyages, cultural enrichment, and premium adults-only travel",
      finePrint:
        "Book by August 31, 2026. Savings, airfare benefits, gateways, departure dates, stateroom categories, final-payment dates, and promotional codes vary by itinerary. Confirm live pricing before booking.",
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
      line: "Explora Journeys",
      logo: brandLogos.explora,
      logoPlacement: "top-left",
      image: exploraSpecialImage,
      sourceUrl:
        "https://explorajourneys.com/us/en/info/special-offers/an-invitation-to-celebrate",
      headline: "An Invitation to Celebrate: Save Up to 30%",
      offer:
        "Enjoy savings of up to 30% on select luxury ocean journeys, along with a reduced deposit of just 10%. Every journey includes an oceanfront suite, fine beverages, distinctive dining, Wi-Fi, wellness access, and gratuities.",
      bestFor:
        "Luxury travelers, Mediterranean escapes, spacious oceanfront suites, elevated dining, and all-inclusive-style cruising",
      finePrint:
        "Book by August 25, 2026. Valid on new reservations in eligible suite categories and select journeys. World Journey 2029, Monaco Grand Prix journeys, net fares, and certain promotional programs are excluded.",
    },
    {
      line: "Virgin Voyages",
      logo: brandLogos.virgin,
      image:
        "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl:
        "https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=140046&agencyId=31527&bookingChannel=FMLINK",
      headline: "70% Off 2nd Sailor + Free Balcony Upgrade",
      offer:
        "Save 70% on the second Sailor and receive a complimentary balcony upgrade on eligible voyages, including departures extending into October 2028.",
      bestFor:
        "Adults-only Caribbean and Mediterranean escapes, couples, modern dining, included Wi-Fi and fitness, and Sea Terrace cabins",
      finePrint:
        "Book by August 31, 2026. The offer applies as 35% off each eligible Sailor's base fare. Voyage, cabin, solo-category, group, fare, and combinability restrictions apply. The prior onboard-credit offer has ended.",
    },
    {
      line: "Disney Cruise Line",
      logo: brandLogos.dcl,
      image:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1000/1000/75/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12%3A44%3A12+00%3A00=",
      sourceUrl:
        "https://disneycruise.disney.go.com/special-offers/save-select-sailings/",
      headline: "Save Up to $1,500 on Fall & Holiday Cruises",
      offer:
        "Save up to $1,500 per stateroom on select Disney Wonder, Disney Treasure, and Disney Fantasy sailings departing October through December 2026.",
      bestFor:
        "Disney families, fall breaks, Halloween and holiday travel, premium family cruising, and character experiences",
      finePrint:
        "Book by August 30, 2026 for select sailings from October 1 through December 31, 2026. The headline assumes three eligible guests; savings vary by cruise length and stateroom category. Taxes, fees, gratuities, and Port Adventures are additional.",
    },
    {
      line: "Adventures by Disney",
      logo: { name: "Adventures by Disney" },
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
      sourceUrl: "https://www.ncl.com/cruise-deals/gma",
      headline: "Save Up to $500 with Your Travel Advisor",
      offer:
        "Save up to $500 per stateroom on select fall and winter 2026–2027 and summer 2027 cruises. This exclusive offer must be reserved by phone or through a travel advisor using promo code GMAOFFER.",
      bestFor:
        "Caribbean, Bahamas, Alaska, Bermuda, Europe, the Mexican Riviera, and clients who want advisor-only savings",
      finePrint:
        "Book by August 31, 2026. Savings vary by sailing and stateroom and are not available through standard online self-booking. NCL's former 50%-off flash sale and onboard-credit offer ended August 3.",
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
      headline: "Save Up to 30% on Late-Summer & Fall Rooms",
      offer:
        "Save up to 30% on select Disney Resort hotel rooms for qualifying five-night stays arriving through October 3, 2026. Additional ticket, holiday-room, Disney+ subscriber, and qualifying kids-dining offers are also available.",
      bestFor:
        "Disney families, late-summer trips, fall and holiday getaways, longer resort stays, and package savings",
      finePrint:
        "Savings depend on resort, room type, stay length, package, and travel dates. Ticket offers have specific start dates, park limitations, use windows, and expiration dates. Availability is limited.",
    },
    {
      line: "Sandals Resorts",
      logo: brandLogos.sandals,
      image: sandalsSpecialImage,
      sourceUrl: "https://www.sandals.com/specials/",
      headline: "Up to 65% Off + Resort & Air Credits",
      offer:
        "Save up to 65% and receive eligible resort and airfare credits on select adults-only Caribbean stays. The rotating 7-7-7 promotion adds 7% off seven featured room categories for seven days.",
      bestFor:
        "Adults-only all-inclusive escapes, honeymoons, anniversaries, Caribbean travel, and premium suites",
      finePrint:
        "The public offer page does not list one universal booking deadline. Savings, credits, resorts, room categories, registration requirements, and travel dates vary. Confirm the current promotion before booking.",
    },
    {
      line: "Beaches Resorts",
      logo: brandLogos.beaches,
      image: beachesSpecialImage,
      sourceUrl: "https://www.beaches.com/deals/",
      headline: "Up to 65% Off + Resort & Air Credits",
      offer:
        "Save up to 65% and receive eligible resort and airfare credits on select family all-inclusive vacations. The rotating 7-7-7 promotion adds 7% off featured room categories.",
      bestFor:
        "Caribbean family vacations, multi-generational trips, Turks & Caicos, Jamaica, Sesame Street experiences, and all-inclusive ease",
      finePrint:
        "Savings, credits, eligible resorts, room categories, registration requirements, and travel dates vary. The Tiny Traveler offer provides a $135 resort credit per eligible child, up to two children age 5 or younger, on qualifying stays through November 6, 2026.",
    },
  ];
}
