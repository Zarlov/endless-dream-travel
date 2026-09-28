import beachesImage from "../assets/specials/beaches-resort.webp";
import disneyImage from "../assets/specials/disney-world.png";
import mscImage from "../assets/specials/msc-family-cruise.webp";
import sandalsImage from "../assets/specials/sandals-resort.webp";

const princessLogo = { name: "Princess Cruises", src: "https://assets.princess.com/is/image/princesscruises/princess-cruises-logo?fmt=png-alpha" };
const cruiseImage = "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85";

export const weeklySpecialsLastUpdated = "September 28, 2026";

export function buildWeeklySpecials(brandLogos) {
  return [
    {
      line: "MSC Cruises", logo: brandLogos.msc, image: mscImage,
      sourceUrl: "https://www.msccruisesusa.com/cruise-deals/cruise-from-199-plus-onboard-credit",
      headline: "Cruises From $199 + Up to $500 Onboard Credit",
      offer: "Select cruises start at $199, with onboard credit on eligible sailings and Kids Sail Free for qualifying third and fourth guests.",
      bestFor: "Families, Caribbean and Bahamas cruises, and value-focused travelers",
      finePrint: "Book by October 7, 2026 for select departures through November 10, 2028. New U.S. bookings only. Onboard credit varies by length and category; the $500 maximum requires a 10-night-or-longer Yacht Club booking in 2027–28. Kids Sail Free excludes Yacht Club; children still pay taxes and fees. Limited availability and combinability.",
    },
    {
      line: "Beaches Resorts", logo: brandLogos.beaches, image: beachesImage,
      sourceUrl: "https://www.beaches.com/winter-splash-registration/",
      headline: "Winter Splash: Up to $1,400 Instant Credit",
      offer: "Qualifying family stays can also receive up to $750 airfare credit and $175 spa credit.",
      bestFor: "Caribbean family vacations, Turks & Caicos, Jamaica, and multi-generational trips",
      finePrint: "Book by October 5, 2026. Instant-credit travel extends through December 31, 2028; airfare and spa dates vary by resort. The largest instant credit requires 10 nights; airfare and spa benefits require five paid nights. Flights must be booked through Beaches/Sandals. Register within 72 hours; blackouts and room restrictions apply.",
    },
    {
      line: "Sandals Resorts", logo: brandLogos.sandals, image: sandalsImage,
      sourceUrl: "https://www.sandals.com/island-escapes-registration/",
      headline: "Island Escapes: Up to $1,500 Instant Credit",
      offer: "Qualifying stays can add up to $500 airfare credit and a complimentary catamaran cruise for two.",
      bestFor: "Couples, honeymoons, anniversaries, and all-inclusive Caribbean escapes",
      finePrint: "Book by October 5, 2026. Instant-credit travel extends through December 31, 2028; airfare dates run through September 7, 2027 and catamaran dates through December 25, 2027 at select resorts. Maximum instant credit requires 10 nights. Airfare and excursion require five paid nights; book flights through Sandals and register within 72 hours.",
    },
    {
      line: "Royal Caribbean", logo: brandLogos.rccl, image: cruiseImage,
      sourceUrl: "https://www.royalcaribbean.com/terms-and-conditions/promotions",
      headline: "60% Off the Second Guest + Family Savings",
      offer: "Kids Sail Free and free third/fourth guests are available on select cruises alongside the second-guest discount.",
      bestFor: "Families, Caribbean and Bahamas cruises, and activity-filled ships",
      finePrint: "Book by October 5, 2026. Select departures begin September 2026; free third/fourth guest departures run through August 20, 2027. Kids Sail Free requires a child age 12 or younger sharing with two paying guests. Free guests pay taxes and port expenses. Holiday, spring-break, summer and Alaska exclusions apply.",
    },
    {
      line: "Virgin Voyages", logo: brandLogos.virgin,
      image: "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl: "https://www.virginvoyages.com/cruise-deals",
      headline: "Up to $1,000 Off + 70% Off the Second Sailor",
      offer: "Save instantly on eligible adults-only voyages and receive the advertised second-Sailor fare discount.",
      bestFor: "Couples, adults-only Caribbean escapes, Europe, and longer voyages",
      finePrint: "Book by November 2, 2026 for eligible travel through October 28, 2028. The $1,000 maximum requires a 14-night-or-longer Mega RockStar booking; shorter sailings and lower cabins receive less. The second-Sailor benefit is applied across the cabin fare. Some rates and contracted groups are excluded.",
    },
    {
      line: "Princess Cruises", logo: princessLogo,
      image: "https://assets.princess.com/is/image/princesscruises/fairbanks-northern-lights%3AHero-Large?ts=1783019008866",
      sourceUrl: "https://www.princess.com/cruise-deals-promotions/limited-time-offer",
      headline: "Up to 40% Off + $99 Deposits",
      offer: "Select cruises also include instant savings and free third and fourth guest fares.",
      bestFor: "Alaska, Caribbean, Europe, and multi-generational family cruising",
      finePrint: "Book by October 12, 2026. Princess advertises up to $300 instant savings. Discounts apply to select sailings and the first two guests; free third/fourth guests still pay required taxes and cruise expenses. Benefits vary by voyage and category; capacity controls apply.",
    },
    {
      line: "Walt Disney World", logo: brandLogos.disneyWorld, image: disneyImage,
      sourceUrl: "https://disneyworld.disney.go.com/special-offers/spring-2027-package-offer/",
      headline: "Save Up to $250 Per Night on Spring 2027 Packages",
      offer: "Save on select Disney Resorts Collection room-and-ticket packages of at least four nights and four ticket days.",
      bestFor: "Spring Break and summer 2027 Disney family vacations",
      finePrint: "Valid for select stays January 3–July 28, 2027. No fixed public booking deadline; resort, date and room exclusions apply and allocated inventory is limited. Cannot combine with another discount. A separate room-only offer covers select stays through April 29, 2027.",
    },
    {
      line: "Oceania Cruises", logo: { name: "Oceania Cruises" }, image: cruiseImage,
      sourceUrl: "https://www.oceaniacruises.com/special-offers/fall-sale",
      headline: "Fall Sale: Up to 40% Off Select Cruises",
      offer: "Explore select Mediterranean, Caribbean, Northern Europe and other destination-rich voyages with included dining, gratuities and Wi-Fi.",
      bestFor: "Luxury travelers, couples, and small-ship destination cruising",
      finePrint: "Book by November 3, 2026. New bookings in selected categories and departures only; capacity controlled. Fares vary and are generally per person based on double occupancy. Your World Included offers a choice of wine and beer or shore-excursion credit, which varies by voyage length.",
    },
    {
      line: "Disney Cruise Line", logo: brandLogos.dcl, image: cruiseImage,
      sourceUrl: "https://disneycruise.disney.go.com/special-offers/domestic-special-rates/",
      headline: "Save Up to 25% on Select Sailings",
      offer: "Special guaranteed-stateroom rates are available on a changing list of Disney cruises.",
      bestFor: "Flexible families comfortable with Disney assigning their stateroom",
      finePrint: "No fixed booking deadline; eligible ships, departures and categories change with inventory. New IGT/OGT/VGT bookings require immediate full payment, are nonrefundable, do not allow cabin selection or name changes, and cannot combine with other promotions. Taxes, gratuities and extras remain additional.",
    },
    {
      line: "Princess Alaska 2028", logo: princessLogo,
      image: "https://assets.princess.com/is/image/princesscruises/fairbanks-northern-lights%3AHero-Large?ts=1783019008866",
      sourceUrl: "https://www.princess.com/cruise-deals-promotions/early-booking-bonus",
      headline: "2028 Alaska: Up to $500 Savings + $500 Credit",
      offer: "Book eligible 2028 Alaska cruises and cruisetours early for instant savings, onboard credit and select planning perks.",
      bestFor: "Families and couples selecting 2028 Alaska sailing dates and cruisetours early",
      finePrint: "No published booking deadline; eligible inventory is limited. The maximum instant savings requires a longer Mini-Suite or Suite voyage. Onboard credit and other benefits vary by sailing and cabin; confirm the quoted itinerary before promising both maximums.",
    },
  ];
}
