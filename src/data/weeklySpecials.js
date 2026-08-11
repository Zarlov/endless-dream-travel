import amawaterwaysSpecialImage from "../assets/specials/amawaterways.jpg";
import adventuresByDisneySpecialImage from "../assets/specials/adventures-by-disney-rhone.webp";
import beachesSpecialImage from "../assets/specials/beaches-resort.webp";
import disneyWorldSpecialImage from "../assets/specials/disney-world.png";
import exploraSpecialImage from "../assets/specials/explora-journeys.webp";
import mscSpecialImage from "../assets/specials/msc-family-cruise.webp";
import sandalsSpecialImage from "../assets/specials/sandals-resort.webp";
import vikingSpecialImage from "../assets/specials/viking.jpg";

export const weeklySpecialsLastUpdated = "August 10, 2026";

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
        "Book by August 19, 2026. New U.S. bookings only. Savings apply to select sailings and the first two guests; children still pay government taxes and fees. Yacht Club is excluded from Kids Sail Free, and offer combinability is limited.",
    },
    {
      line: "Virgin Voyages",
      logo: brandLogos.virgin,
      image:
        "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl:
        "https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=140046&agencyId=31527&bookingChannel=FMLINK",
      headline: "Europe Sale: Up to $500 Onboard Credit",
      offer:
        "Book an eligible European voyage and receive up to $500 in onboard credit, a complimentary balcony upgrade, and 70% off the second Sailor.",
      bestFor:
        "Adults-only Caribbean and Mediterranean escapes, couples, modern dining, included Wi-Fi and fitness, and Sea Terrace cabins",
      finePrint:
        "Book by August 12, 2026 for select Europe departures from August 20, 2026 through October 22, 2028. Onboard credit varies by voyage length and eligible Sea Terrace or RockStar category. Lock It In rates, reduced-rate cabins, and contracted groups are excluded. The 70%-off and balcony offer continues through August 31.",
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
      headline: "Save Up to 20% on Holiday Resort Rooms",
      offer:
        "Save up to 20% on select Disney Resorts Collection rooms for eligible holiday stays. Disney+ subscribers can also save up to 25% on qualifying room-and-ticket packages with complimentary Park Hopper benefits.",
      bestFor:
        "Disney families, late-summer trips, fall and holiday getaways, longer resort stays, and package savings",
      finePrint:
        "Valid for most Sunday-through-Thursday nights October 4–November 19, 2026 and most nights November 22–December 24, 2026. Savings vary by resort and room; length-of-stay requirements and exclusions may apply. Discounted inventory is limited.",
    },
    {
      line: "Sandals Resorts",
      logo: brandLogos.sandals,
      image: sandalsSpecialImage,
      sourceUrl: "https://www.sandals.com/sale/?variant=exp1",
      headline: "The Great Jamaica Comeback Sale",
      offer:
        "Receive up to $1,500 in instant credit, up to $350 in airfare credit, and a complimentary Jamaican adventure on eligible stays at seven Sandals resorts in Jamaica.",
      bestFor:
        "Adults-only all-inclusive escapes, honeymoons, anniversaries, Caribbean travel, and premium suites",
      finePrint:
        "The public offer page does not state one universal booking or travel deadline. Resort, room, stay-length, airfare, registration, and excursion requirements vary. Confirm live eligibility and inventory before booking.",
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
