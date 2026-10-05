import disneyImage from "../assets/specials/disney-world.png";

const princessLogo = { name: "Princess Cruises", src: "https://assets.princess.com/is/image/princesscruises/princess-cruises-logo?fmt=png-alpha" };
const cruiseImage = "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85";

export const weeklySpecialsLastUpdated = "October 5, 2026";

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
      line: "Holland America", logo: { name: "Holland America Line" }, image: cruiseImage,
      sourceUrl: "https://www.hollandamerica.com/en/us/cruise-deals",
      headline: "2027 Early-Booking Benefits + $99 Deposit",
      offer: "Eligible Have It All bookings include beverage and Wi-Fi upgrades, prepaid crew appreciation, specialty dining and up to $300 shore-excursion credit.",
      bestFor: "Travelers planning 2027 Alaska, Europe and Canada/New England cruises",
      finePrint: "Book by November 2, 2026 for selected 2027 cruises. Amenities, shore-excursion credit and dining allocations vary by voyage length and package. The $99 deposit is a reduced deposit, not the total fare; final-payment deadlines and cancellation rules apply. Confirm eligible sailings, categories and package pricing before booking.",
    },
    {
      line: "Virgin Voyages", logo: brandLogos.virgin,
      image: "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl: "https://www.virginvoyages.com/cruise-deals",
      headline: "70% Off the Second Sailor on Eligible Cabins",
      offer: "Eligible adults-only voyages offer second-Sailor savings, with additional instant savings on qualifying cabins.",
      bestFor: "Couples, adults-only Caribbean escapes, Europe, and longer voyages",
      finePrint: "Book by November 2, 2026 for eligible travel through October 28, 2028. The second-Sailor offer applies to eligible Sea Terrace, Sea View and Insider cabins; RockStar suites are excluded. The fare discount is applied as 35% off each eligible Sailor. Separate instant savings vary by cabin and length; the $1,000 maximum is for 14-night-or-longer Mega RockStar bookings. Do not assume both maximum benefits apply together. Rates, groups and combinability exclusions apply.",
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
      line: "Explora Journeys", logo: brandLogos.explora, image: cruiseImage,
      sourceUrl: "https://explorajourneys.com/us/en/info/special-offers/an-invitation-to-celebrate",
      headline: "Up to 30% Savings + a 10% Deposit",
      offer: "An Invitation to Celebrate offers savings on selected ocean journeys across all suite categories, with a reduced deposit.",
      bestFor: "Luxury travelers, couples and all-inclusive ocean journeys",
      finePrint: "Reserve by October 27, 2026 for selected journeys listed in the offer; eligible travel dates vary, including 2026–28 collections. The page gives October 27 in its offer text and October 28 in its detailed terms; we use the earlier deadline. World Journey 2029 and Formula 1 Monaco journeys are excluded. Savings and availability vary; only specified benefits can combine. The deposit is part of the fare, with remaining payment due under booking terms.",
    },
    {
      line: "Viking", logo: brandLogos.viking, image: cruiseImage,
      sourceUrl: "https://www.vikingcruises.com/oceans/promotions.html",
      headline: "Special Cruise Fares + a $25 Deposit",
      offer: "Selected ocean itineraries include special fares and reduced or complimentary airfare from eligible gateways.",
      bestFor: "Adults planning destination-focused ocean cruises in 2026–29",
      finePrint: "Book October 1–31, 2026 for eligible 2026–29 ocean cruises. U.S. residents only; fares, airfare and gateways vary by departure and category. World Cruises are excluded from the $25 deposit. Early final payment applies: 2027 cruises generally require payment by December 17, 2026 or 120 days before departure, whichever is earlier. Confirm the itinerary's full terms before booking.",
    },
    {
      line: "Princess Cruises", logo: princessLogo,
      image: "https://assets.princess.com/is/image/princesscruises/fairbanks-northern-lights%3AHero-Large?ts=1783019008866",
      sourceUrl: "https://www.princess.com/cruise-deals-promotions/limited-time-offer",
      headline: "Up to 40% Off + $99 Deposits",
      offer: "Select cruises also include instant savings and free third and fourth guest fares.",
      bestFor: "Alaska, Caribbean, Europe, and multi-generational family cruising",
      finePrint: "Book by October 12, 2026. Instant savings vary by cabin and cruise length. Discounts apply to select sailings and the first two guests; free third/fourth guests still pay required taxes and cruise expenses. Benefits vary by voyage and category; capacity controls apply.",
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
      line: "Disney Cruise Line Placeholder Offer", logo: brandLogos.dcl, image: cruiseImage,
      sourceUrl: "https://disneycruise.disney.go.com/special-offers/onboard-offer/",
      headline: "Placeholder Holders: Save 20% or 25%",
      offer: "Redeem a qualifying onboard placeholder for enhanced voyage-fare savings on listed Disney cruises, including selected Florida departures.",
      bestFor: "Disney cruisers who already hold an eligible onboard placeholder",
      finePrint: "No fixed public booking deadline; capacity-controlled, listed departures in 2026–27 only. Travel must fall within the placeholder's 24-month validity. The enhanced 20% or 25% discount replaces the usual 10% benefit on qualifying sailings. Stateroom, sailing and combinability restrictions apply; confirm eligibility before adjusting an existing reservation.",
    },
    {
      line: "Disney Cruise Line", logo: brandLogos.dcl, image: cruiseImage,
      sourceUrl: "https://disneycruise.disney.go.com/special-offers/domestic-special-rates/",
      headline: "Save Up to 25% on Select Sailings",
      offer: "Special guaranteed-stateroom rates are available on a changing list of Disney cruises.",
      bestFor: "Flexible families comfortable with Disney assigning their stateroom",
      finePrint: "No fixed booking deadline; eligible ships, departures and categories change with inventory. New IGT/OGT/VGT bookings require immediate full payment, are nonrefundable, do not allow cabin selection or name changes, and cannot combine with other promotions. Taxes, gratuities and extras remain additional.",
    },
  ];
}
