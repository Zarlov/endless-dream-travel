import beachesImage from "../assets/specials/beaches-resort.webp";
import disneyImage from "../assets/specials/disney-world.png";
import sandalsImage from "../assets/specials/sandals-resort.webp";

const cruiseImage = "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85";

export const weeklySpecialsLastUpdated = "October 20, 2026";

export function buildWeeklySpecials(brandLogos) {
  return [
    {
      line: "Princess Cruises", logo: { name: "Princess Cruises" }, image: cruiseImage,
      sourceUrl: "https://www.princess.com/cruise-deals-promotions/limited-time-offer",
      headline: "Fall Savings: Up to 45% Off + $99 Deposits",
      offer: "Selected voyages include instant fare savings and free third and fourth guest fares. A 6–8-day Balcony booking receives $150 instant savings per double-occupancy stateroom.",
      bestFor: "Families and couples planning Alaska, Caribbean, Europe and other cruise vacations",
      finePrint: "Book October 13–November 5, 2026 for selected voyages and categories; eligible travel dates vary. Up to 45% off is measured against launch fares and applies to guests 1–2. The advertised $450 instant savings requires a 13–17-day Mini-Suite or Suite, based on two guests. Free guests still pay required fees, taxes and expenses. The $99 deposit is per person for guests 1–2 and does not reduce the fare; full suites, Sanctuary Collection, World Cruises, voyages of 45+ days and bookings within final payment are excluded from the deposit offer. Capacity controls and combinability restrictions apply.",
    },
    {
      line: "AmaWaterways", logo: brandLogos.amaWaterways, image: cruiseImage,
      sourceUrl: "https://www.amawaterways.com/offers/save",
      headline: "Save Up to $2,500 + a Balcony Upgrade",
      offer: "Season of More adds a complimentary one-category upgrade for eligible balcony cabins, or $250 onboard credit per stateroom for suites.",
      bestFor: "River-cruise travelers planning Europe, the Mekong, Egypt or Colombia",
      finePrint: "Book October 1–December 31, 2026 for select 2026–28 river cruises; Africa is excluded. Savings vary by sailing and are per stateroom based on double occupancy. Upgrades apply to eligible balcony categories, excluding suites, and depend on availability. Suites receive $250 onboard credit instead of the upgrade. Airfare, land packages, visas and gratuities are additional; combinability restrictions apply.",
    },
    {
      line: "Walt Disney World", logo: brandLogos.disneyWorld, image: disneyImage,
      sourceUrl: "https://disneyworld.disney.go.com/special-offers/spring-2027-package-offer/",
      headline: "Save Up to $250 Per Night on Spring 2027 Packages",
      offer: "Save on select Disney Resorts Collection room-and-ticket packages of at least four nights and four ticket days.",
      bestFor: "Spring Break and summer 2027 Disney family vacations",
      finePrint: "Valid for select stays January 3–July 28, 2027. No fixed public booking deadline; resort, date and room exclusions apply and allocated inventory is limited. Cannot combine with another discount. A separate room-only offer provides up to 25% savings for select stays January 3–April 29, 2027.",
    },
    {
      line: "Sandals Resorts", logo: brandLogos.sandals, image: sandalsImage,
      sourceUrl: "https://www.sandals.com/the-great-jamaica-comeback-registration/",
      headline: "Jamaica: Up to $1,500 Instant Credit",
      offer: "Qualifying stays can add up to $500 airfare credit and a complimentary Jamaican adventure for two.",
      bestFor: "Couples, honeymoons and all-inclusive Jamaica escapes",
      finePrint: "Book October 6–November 2, 2026. Instant-credit travel extends through December 31, 2028; airfare dates vary by resort through September 30, 2027, and excursion travel ends December 25, 2027. Maximum instant credit generally requires 10 nights. Airfare and excursion require five paid nights; airfare requires two qualifying adult flight tickets booked through Sandals. Register within 72 hours for the excursion. Blackouts and resort restrictions apply.",
    },
    {
      line: "Beaches Resorts", logo: brandLogos.beaches, image: beachesImage,
      sourceUrl: "https://www.beaches.com/winter-escape-registration/",
      headline: "Winter Escapes: Stay Savings + $175 Resort Credit",
      offer: "Eligible family stays receive instant room savings, airfare credit and $175 resort credit for qualifying extras. For travel November 3 onward, a seven-night stay receives $400 instant room savings; 10+ nights receive $500.",
      bestFor: "2027–28 family vacations in Turks & Caicos and Jamaica",
      finePrint: "Book October 6–November 2, 2026. Instant-credit travel extends through December 31, 2028. For travel November 3 onward, instant credit tops out at $500 for 10+ nights; shorter stays receive less. Airfare credit varies by resort and dates, with eligible travel through October 5, 2027. Airfare and resort benefits require five paid nights; flights must be booked through Beaches/Sandals. Register within 72 hours. Resort credit is vouchers for eligible extras, not cash or a fare discount. Resort-credit travel ends December 20, 2028; holiday and spring-break blackouts and voucher restrictions apply.",
    },
    {
      line: "Virgin Voyages", logo: brandLogos.virgin,
      image: "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl: "https://www.virginvoyages.com/promotional-terms-and-conditions",
      headline: "70% Off the Second Sailor + Instant Savings",
      offer: "Eligible Sea Terrace, Sea View and Insider bookings receive the second-Sailor fare offer. A qualifying 6–9-night Sea Terrace adds $100 instant fare savings per cabin.",
      bestFor: "Couples and adults planning Caribbean, European and other ocean escapes",
      finePrint: "Book September 1–November 2, 2026 for eligible open, non-charter voyages; travel dates vary. The second-Sailor offer is applied as 35% off each eligible guest's base fare and excludes RockStar suites and selected solo cabins. Instant savings vary by length and category; the $1,000 maximum requires a 14+ night Mega RockStar Suite and does not combine with the second-Sailor discount. Instant savings exclude voyages of three nights or less, Lock-It-In rates and selected solo cabins. Contracted groups and other exclusions apply; confirm the quoted fare's benefits.",
    },
    {
      line: "Royal Caribbean", logo: brandLogos.rccl, image: cruiseImage,
      sourceUrl: "https://www.royalcaribbean.com/terms-and-conditions/promotions",
      headline: "60% Off the Second Guest + Family Savings",
      offer: "Kids Sail Free and free third and fourth guest fares are available on selected sailings with the second-guest discount.",
      bestFor: "Families, Caribbean and Bahamas cruises, and activity-filled ships",
      finePrint: "Book October 6–November 2, 2026 for eligible departures from October 7, 2026. Free third/fourth guest departures run through August 20, 2027. Kids Sail Free applies to children age 12 or younger sharing with the first and second guests. Free guests still pay taxes and port expenses. Major holiday, spring-break, summer and Alaska cruisetour exclusions apply; confirm eligibility for the selected departure.",
    },
    {
      line: "Holland America 2027 Early Booking", logo: { name: "Holland America Line" }, image: cruiseImage,
      sourceUrl: "https://www.hollandamerica.com/en/us/cruise-deals",
      headline: "2027 Early-Booking Benefits + $99 Per-Person Deposit",
      offer: "Eligible Have It All bookings include beverage and Wi-Fi upgrades, prepaid crew appreciation, specialty dining and up to $300 shore-excursion credit.",
      bestFor: "Travelers planning 2027 Alaska, Europe and Canada/New England cruises",
      finePrint: "Book by November 2, 2026 for selected 2027 cruises. Amenities, shore-excursion credit and dining allocations vary by voyage length and package. The $99 deposit is per person for eligible first and second guests outside final payment; it lowers the upfront payment, not the total fare. Grand Voyages are excluded. Final-payment deadlines and cancellation rules apply. Confirm eligible sailings, categories and package pricing before booking.",
    },
    {
      line: "Viking", logo: brandLogos.viking, image: cruiseImage,
      sourceUrl: "https://www.vikingcruises.com/oceans/promotions.html",
      headline: "Special Cruise Fares + a $25 Deposit",
      offer: "Selected ocean itineraries include special fares and reduced or complimentary airfare from eligible gateways.",
      bestFor: "Adults planning destination-focused ocean cruises in 2026–29",
      finePrint: "Book October 1–31, 2026 for eligible 2026–29 ocean cruises. U.S. residents only; fares, airfare and gateways vary by departure and category. The $25 deposit applies to itineraries of 35 days or less departing March 2027 onward, and longer itineraries departing May 2027 onward; World Cruises are excluded. Early final payment applies: 2027 cruises generally require payment by December 17, 2026 or 120 days before departure, whichever is earlier. Confirm the itinerary's full terms before booking.",
    },
    {
      line: "Oceania Cruises", logo: { name: "Oceania Cruises" }, image: cruiseImage,
      sourceUrl: "https://www.oceaniacruises.com/special-offers/fall-sale",
      headline: "Fall Sale: Up to 40% Off Select Cruises",
      offer: "Explore selected Mediterranean, Caribbean and Northern Europe voyages with savings on eligible fares.",
      bestFor: "Luxury travelers, couples, and small-ship destination cruising",
      finePrint: "Book by November 3, 2026. New bookings in selected categories and departures only; capacity controlled. Fares vary and are generally per person based on double occupancy. Eligible travel dates vary; confirm inclusions and availability on your quote.",
    },
    {
      line: "Disney Cruise Line", logo: brandLogos.dcl, image: cruiseImage,
      sourceUrl: "https://disneycruise.disney.go.com/special-offers/buy-2-get-2-half-off/",
      headline: "Disney Adventure: 50% Off Third & Fourth Guests",
      offer: "Sail from Singapore with half-price voyage fares for the third and fourth guests sharing a stateroom with two full-fare guests.",
      bestFor: "Families planning a Singapore vacation with a Disney cruise",
      finePrint: "Book by December 20, 2026 for selected Disney Adventure sailings January 4–December 16, 2027. February 4 and 8 and March 8 and 22, 2027 are excluded. Eligible categories 05A–11A only; Concierge and Suites excluded. Taxes, port expenses, gratuities and Port Adventures cost extra. Cannot combine with other discounts. Limited allocated inventory; eligible existing bookings require Disney to apply the offer. Airfare to Singapore is additional.",
    },
  ];
}
