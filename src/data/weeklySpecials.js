import beachesImage from "../assets/specials/beaches-resort.webp";
import disneyImage from "../assets/specials/disney-world.png";
import sandalsImage from "../assets/specials/sandals-resort.webp";

const cruiseImage = "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85";

export const weeklySpecialsLastUpdated = "October 14, 2026";

export function buildWeeklySpecials(brandLogos) {
  return [
    {
      line: "Virgin Voyages", logo: brandLogos.virgin,
      image: "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl: "https://www.virginvoyages.com/cruise-deals",
      headline: "Caribbean Sale: Up to $250 Balcony Onboard Credit",
      offer: "Selected Sea Terrace bookings receive $50–$250 onboard credit per cabin; eligible RockStar suites receive $300–$500. Qualifying cabins can combine credit with continuing fare offers.",
      bestFor: "Couples, adults-only Caribbean escapes, Europe, and longer voyages",
      finePrint: "Book October 9–22, 2026 for listed October 2026–October 2028 departures. The $250 balcony maximum applies to selected Brilliant Lady voyages; other eligible Sea Terraces receive $50–$100. RockStar suites do not qualify for the 70%-off-second-Sailor benefit. Lock-It-In rates, chartered sailings and contracted groups are excluded from the credit. Credit is per cabin, nonrefundable and not cash savings; confirm sailing and cabin eligibility.",
    },
    {
      line: "Sandals Resorts", logo: brandLogos.sandals, image: sandalsImage,
      sourceUrl: "https://www.sandals.com/the-great-jamaica-comeback-registration/",
      headline: "Jamaica: Up to $1,500 Instant Credit",
      offer: "Qualifying stays can add up to $500 airfare credit and a complimentary Jamaican adventure for two.",
      bestFor: "Couples, honeymoons and all-inclusive Jamaica escapes",
      finePrint: "Book October 6–November 2, 2026. Instant-credit travel extends through December 31, 2028; airfare dates vary by resort through September 30, 2027, and excursion travel ends December 25, 2027. Maximum instant credit generally requires 10 nights. Airfare and excursion require five paid nights, two qualifying adult flight tickets booked through Sandals, and registration within 72 hours for the excursion. Blackouts and resort restrictions apply.",
    },
    {
      line: "Holland America", logo: { name: "Holland America Line" }, image: cruiseImage,
      sourceUrl: "https://www.hollandamerica.com/en/us/cruise-deals/terms",
      headline: "Holiday Savings + Up to $200 Onboard Credit",
      offer: "Save on Sunshine includes up to 50% off eligible fares, $50 onboard credit per guest for up to four guests, and specialty dining on select 2026 holiday cruises.",
      bestFor: "Couples and families planning a warm-weather holiday cruise",
      finePrint: "Book by October 21, 2026 for selected 2026–27 departures. Fare savings are against launch fares and apply to guests 1–2 on new bookings. Credit is $50 per eligible guest, up to $200 per cabin; it is not cash savings. Holiday specialty dining applies to guests 1–2 on selected 2026 holiday cruises. Grand Voyages and cruises of three days or less are excluded. Capacity controls apply; confirm all benefits on the quoted sailing.",
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
      finePrint: "Valid for select stays January 3–July 28, 2027. No fixed public booking deadline; resort, date and room exclusions apply and allocated inventory is limited. Cannot combine with another discount. A separate room-only offer covers select stays through April 29, 2027.",
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
      line: "Beaches Resorts", logo: brandLogos.beaches, image: beachesImage,
      sourceUrl: "https://www.beaches.com/winter-escape-registration/",
      headline: "Winter Escapes: Resort Credit + Stay Savings",
      offer: "Eligible family stays receive instant credit, airfare credit and $175 resort credit for qualifying extras such as spa services, photos or private dinners.",
      bestFor: "Family vacations in Turks & Caicos and Jamaica",
      finePrint: "Book October 6–November 2, 2026. Instant-credit travel extends through December 31, 2028. For travel November 3 onward, instant credit tops out at $500 for 10+ nights; shorter stays receive less. Airfare credit varies by resort and dates, with eligible travel through October 5, 2027. Airfare and resort benefits require five paid nights; flights must be booked through Beaches/Sandals. Register within 72 hours. Resort-credit travel ends December 20, 2028; blackouts and voucher restrictions apply.",
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
      line: "Oceania Cruises", logo: { name: "Oceania Cruises" }, image: cruiseImage,
      sourceUrl: "https://www.oceaniacruises.com/special-offers/fall-sale",
      headline: "Fall Sale: Up to 40% Off Select Cruises",
      offer: "Explore select Mediterranean, Caribbean, Northern Europe and other destination-rich voyages with included dining, gratuities and Wi-Fi.",
      bestFor: "Luxury travelers, couples, and small-ship destination cruising",
      finePrint: "Book by November 3, 2026. New bookings in selected categories and departures only; capacity controlled. Fares vary and are generally per person based on double occupancy. Your World Included offers a choice of wine and beer or shore-excursion credit, which varies by voyage length.",
    },
    {
      line: "Holland America 2027 Early Booking", logo: { name: "Holland America Line" }, image: cruiseImage,
      sourceUrl: "https://www.hollandamerica.com/en/us/cruise-deals",
      headline: "2027 Early-Booking Benefits + $99 Per-Person Deposit",
      offer: "Eligible Have It All bookings include beverage and Wi-Fi upgrades, prepaid crew appreciation, specialty dining and up to $300 shore-excursion credit.",
      bestFor: "Travelers planning 2027 Alaska, Europe and Canada/New England cruises",
      finePrint: "Book by November 2, 2026 for selected 2027 cruises. Amenities, shore-excursion credit and dining allocations vary by voyage length and package. The $99 deposit is per person for eligible first and second guests outside final payment; final-payment deadlines and cancellation rules apply. Confirm eligible sailings, categories and package pricing before booking.",
    },
    {
      line: "Disney Cruise Line", logo: brandLogos.dcl, image: cruiseImage,
      sourceUrl: "https://disneycruise.disney.go.com/special-offers/domestic-special-rates/",
      headline: "Selected Disney Treasure Sailings: Save 30%",
      offer: "The restricted-rate table lists 30% voyage-fare savings in eligible Verandah categories on Disney Treasure departures December 19, 2026, February 27, 2027 and March 6, 2027.",
      bestFor: "Flexible families comfortable with Disney assigning their stateroom",
      finePrint: "No fixed booking deadline; listed sailings and VGT inventory can change or sell out. Confirm the current rate before booking. New IGT/OGT/VGT bookings require immediate full payment, are nonrefundable, do not allow cabin selection or name changes, and cannot combine with other promotions. Taxes, gratuities and extras remain additional.",
    },
    {
      line: "Disney Cruise Line Placeholder Offer", logo: brandLogos.dcl, image: cruiseImage,
      sourceUrl: "https://disneycruise.disney.go.com/special-offers/onboard-offer/",
      headline: "Placeholder Holders: Save 20% or 25%",
      offer: "Redeem a qualifying onboard placeholder for enhanced voyage-fare savings on listed Disney cruises, including selected Florida departures.",
      bestFor: "Disney cruisers who already hold an eligible onboard placeholder",
      finePrint: "No fixed public booking deadline; capacity-controlled, listed departures in 2026–27 only. Travel must fall within the placeholder's 24-month validity. The enhanced 20% or 25% discount replaces the usual 10% benefit on qualifying sailings. Stateroom, sailing and combinability restrictions apply; confirm eligibility before adjusting an existing reservation.",
    },
  ];
}
