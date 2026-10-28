import disneyImage from "../assets/specials/disney-world.png";
import mscImage from "../assets/specials/msc-family-cruise.webp";

const cruiseImage = "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85";

export const weeklySpecialsLastUpdated = "October 28, 2026";

export function buildWeeklySpecials(brandLogos) {
  return [
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
      offer: "Save on select Disney Resorts Collection room-and-ticket packages of at least four nights and four ticket days. Eligible Value-resort packages generally save $40–$60 per night; the $250 maximum applies to selected resorts and dates.",
      bestFor: "Spring Break and summer 2027 Disney family vacations",
      finePrint: "Valid for select stays January 3–July 28, 2027. No fixed public booking deadline; resort, date and room exclusions apply and allocated inventory is limited. Cannot combine with another discount. A separate room-only offer provides up to 25% savings for select stays January 3–April 29, 2027.",
    },
    {
      line: "Princess Cruises", logo: { name: "Princess Cruises" }, image: cruiseImage,
      sourceUrl: "https://www.princess.com/cruise-deals-promotions/limited-time-offer",
      headline: "Fall Savings: Up to 45% Off + $99 Deposits",
      offer: "Selected voyages include instant fare savings and free third and fourth guest fares. A 6–8-day Balcony booking receives $150 instant savings per double-occupancy stateroom.",
      bestFor: "Families and couples planning Alaska, Caribbean, Europe and other cruise vacations",
      finePrint: "Book October 13–November 5, 2026 for selected voyages and categories; eligible travel dates vary. Up to 45% off is measured against launch fares and applies to guests 1–2. The advertised $450 instant savings requires a 13–17-day Mini-Suite or Suite, based on two guests. Free guests still pay required fees, taxes and expenses. The $99 deposit is per person for guests 1–2 and does not reduce the fare; full suites, Sanctuary Collection, World Cruises, voyages of 45+ days and bookings within final payment are excluded from the deposit offer. Capacity controls and combinability restrictions apply.",
    },
    {
      line: "MSC Cruises", logo: brandLogos.msc, image: mscImage,
      sourceUrl: "https://www.msccruisesusa.com/deals/promo-terms-and-conditions",
      headline: "Up to 35% Off + Kids Sail Free",
      offer: "Save on selected Bahamas, Caribbean, European and other cruises. Eligible children age 17 and younger receive free third or fourth guest cruise fares.",
      bestFor: "Families seeking value on selected ocean cruises",
      finePrint: "Book October 20–November 5, 2026 for selected departures; eligible travel dates vary. The fare discount applies to guests 1–2. New U.S. bookings only; limited inventory and combinability. Free children still pay government fees and taxes, and Kids Sail Free excludes Yacht Club. This cruise-only promotion does not include onboard credit, drinks or Wi-Fi. Confirm sailing, cabin and full family price before booking.",
    },
    {
      line: "Holland America", logo: { name: "Holland America Line" }, image: cruiseImage,
      sourceUrl: "https://www.hollandamerica.com/en/us/cruise-deals/terms?ICID=INTHWEB20260728RBFR5ASV7D",
      headline: "Save on Sunshine: Up to 50% Off",
      offer: "Selected 2026–27 voyages offer fare savings for the first two guests sharing a stateroom.",
      bestFor: "Couples and destination-focused travelers planning 2026–27 cruises",
      finePrint: "Book by December 31, 2026 for selected 2026–27 departures. New bookings only, based on double occupancy and available inventory. Up to 50% off is measured against launch fares, which may not have resulted in actual sales. Grand Voyages and cruises of three days or less are excluded. Confirm current fare and package inclusions before booking.",
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
