import amawaterwaysSpecialImage from "../assets/specials/amawaterways.jpg";
import carnivalSpecialImage from "../assets/specials/carnival-cruise-line.png";
import disneyWorldSpecialImage from "../assets/specials/disney-world.png";
import vikingSpecialImage from "../assets/specials/viking.jpg";

export const weeklySpecialsLastUpdated = "June 1, 2026";

export function buildWeeklySpecials(brandLogos) {
  return [
    {
      line: "Royal Caribbean",
      logo: brandLogos.rccl,
      image:
        "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/ships-big-time-nav-640-480",
      sourceUrl: "https://www.royalcaribbean.com/cruise-deals",
      headline: "Up to $900 Off + 3rd & 4th Guests Sail Free",
      offer:
        "Royal Caribbean is currently highlighting an extended cruise-deals offer with up to $900 off, 3rd and 4th guests sail free, 60% off the second guest, Kids Sail Free, and bonus savings on short getaways.",
      bestFor:
        "Families, Perfect Day at CocoCay, Alaska adventures, Europe cruises, and big-ship experiences",
      finePrint:
        "Extended limited-time offer. Select sailings, stateroom categories, departure dates, guest ages, and terms apply. Taxes, fees, gratuities, and port expenses are additional. Updated to remove a same-day June 1 expiration from the prior posting.",
    },
    {
      line: "Norwegian Cruise Line",
      logo: brandLogos.ncl,
      image:
        "https://www.ncl.com/adobe/dynamicmedia/deliver/dm-aid--ff161251-4f98-4e8f-ae0f-253233c1a171/ncl-encore-waterfront-dining.jpg?preferwebp=true&quality=100",
      sourceUrl: "https://www.ncl.com/cruise-deals/free-at-sea",
      headline: "Free at Sea™ Value Package",
      offer:
        "Norwegian Cruise Line continues its Free at Sea™ promotion with popular perks such as unlimited open bar, specialty dining, Wi-Fi, and shore excursion credits on qualifying sailings. Select sailings may also include free airfare for the second guest or free 3rd and 4th guests.",
      bestFor:
        "Flexible dining, relaxed cruise planning, groups, families, and travelers who like bundled extras",
      finePrint:
        "Ongoing limited-time promotion. Inclusions vary by ship, itinerary, sailing, and stateroom category. Package gratuities and service charges may apply.",
    },
    {
      line: "Carnival Cruise Line",
      logo: brandLogos.carnival,
      image: carnivalSpecialImage,
      sourceUrl: "https://www.carnival.com/cruise-deals",
      headline: "Current Cruise Deals + Pack & Go Rates",
      offer:
        "Carnival Cruise Line continues to feature rotating cruise deals for 2026–2028 sailings, including limited-time fare savings, reduced-deposit offers, and Pack & Go rates for flexible last-minute travelers.",
      bestFor:
        "Budget-friendly fun, quick getaways, family cruises, casual vacations, and last-minute escapes",
      finePrint:
        "Offer dates, savings, deposits, and eligibility vary by sailing and category. Taxes, fees, and port expenses are additional. Updated to avoid relying on older mid-May promotional language.",
    },
    {
      line: "MSC Cruises",
      logo: brandLogos.msc,
      image:
        "https://www.msccruisesusa.com/-/media/us/2024/drinks-included-plus-onboard-credit/oc-paddleboarding-group-tile-2x2-desktop.jpg?as=1&bc=transparent&hash=3F5BC7EFAF8112AC5646EA186CDF80E7&mh=465&mw=1245",
      sourceUrl: "https://www.msccruisesusa.com/cruise-deals",
      headline: "Last-Minute Deals + Drinks & Wi‑Fi Included",
      offer:
        "MSC Cruises is currently listing last-minute cruise deals from $297, early-booking options for 2026–2027 cruises, and an Add Now & Save offer with drinks and Wi‑Fi included on select sailings.",
      bestFor:
        "Value-focused Caribbean, Bahamas, Europe, Alaska, last-minute escapes, and family cruising",
      finePrint:
        "Select sailings, categories, destinations, packages, and terms apply. Taxes and fees still apply. Updated to replace the expired May 18 / June 1 sale messaging with offers currently shown on MSC’s deals page.",
    },
    {
      line: "Disney Cruise Line",
      logo: brandLogos.dcl,
      image:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1000/1000/75/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12%3A44%3A12+00%3A00=",
      sourceUrl: "https://disneycruise.disney.go.com/special-offers/",
      headline: "Kids Sail 50% Off",
      offer:
        "Disney Cruise Line’s Together at Sea savings allows up to three children ages 17 and under to sail for 50% off with two full-fare Guests in the same stateroom on eligible sailings.",
      bestFor:
        "Disney families, character experiences, private island stops, school-break trips, and premium family cruising",
      finePrint:
        "Book by June 14, 2026. Valid on select sailings from October 2026 through March 2027. Most stateroom categories qualify except Concierge and Suites. Taxes, fees, gratuities, and Port Adventures are additional.",
    },
    {
      line: "Virgin Voyages",
      logo: brandLogos.virgin,
      image:
        "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl: "https://www.virginvoyages.com/promotional-offers-and-discounts",
      headline: "Adults-Only Cruise Deals",
      offer:
        "Virgin Voyages continues to feature rotating adults-only cruise promotions on select voyages, with savings commonly focused on the second Sailor, instant savings, onboard value, and seasonal destination launches.",
      bestFor:
        "Adults-only escapes, modern ships, nightlife, elevated dining, and no-kids cruising",
      finePrint:
        "Offer amounts, booking deadlines, voyage dates, cabin categories, and exclusions change frequently. Updated to remove the expired May 28 promotion and use current rotating-offer language until a new fixed-date public offer is confirmed.",
    },
    {
      line: "Viking",
      logo: brandLogos.viking,
      image: vikingSpecialImage,
      sourceUrl: "https://www.viking.com/cruise-deals/index.html",
      headline: "Current Viking Cruise Deals",
      offer:
        "Viking continues to promote rotating river, ocean, and expedition cruise deals, which may include airfare offers, reduced deposits, and special savings on select 2026–2028 departures.",
      bestFor:
        "European river cruising, destination-focused ocean cruises, expedition travel, and premium cultural itineraries",
      finePrint:
        "Offer details, air gateways, deposits, departure dates, and combinability vary by itinerary. Updated to remove the expired May 31 Spring Sale language.",
    },
    {
      line: "AmaWaterways",
      logo: brandLogos.amaWaterways,
      image: amawaterwaysSpecialImage,
      sourceUrl: "https://www.amawaterways.com/special-offers",
      headline: "Current River Cruise Special Offers",
      offer:
        "AmaWaterways continues to feature rotating river cruise offers, including savings on select Europe and Colombia departures, air promotions, land-package values, and itinerary-specific incentives.",
      bestFor:
        "Luxury river cruising, Europe, Colombia, immersive itineraries, and pre- or post-cruise land stays",
      finePrint:
        "Book-by dates vary by itinerary and promotion. Select departures and gateways only. Promotions may not be combinable. Updated to use safer current-offer language rather than a single date-sensitive Memorial Day offer.",
    },
    {
      line: "Walt Disney World",
      logo: brandLogos.disneyWorld,
      image: disneyWorldSpecialImage,
      sourceUrl: "https://disneyworld.disney.go.com/special-offers/",
      headline: "Save Up to 30% on Rooms This Summer",
      offer:
        "Walt Disney World is featuring savings of up to 30% on rooms at select Disney Resorts Collection hotels for qualifying summer 2026 stays, with additional passholder and dining-related offers available.",
      bestFor:
        "Families, Disney fans, holiday trips, special celebrations, and magical park vacations",
      finePrint: "Savings vary by resort, stay length, dates, and eligibility.",
    },
    {
      line: "Sandals Resorts",
      logo: brandLogos.sandals,
      image:
        "https://cdn.sandals.com/libs/ui/brands/assets/uploads/specials_widget_summer_loving2_e19e2dbd88.jpg",
      sourceUrl: "https://www.sandals.com/specials/",
      headline: "Suite Deals + Summer Sale Savings",
      offer:
        "Sandals is featuring limited-time Suite Deals with an additional 7% off on 7 qualifying rooms or suites, plus Summer Sale savings of up to $1,500 off and up to $750 air credit for qualifying summer travel.",
      bestFor:
        "Couples, honeymoons, anniversaries, adults-only luxury, and all-inclusive Caribbean escapes",
      finePrint:
        "Travel windows, qualifying resorts, room categories, suite eligibility, airfare rules, and combinability terms apply.",
    },
    {
      line: "Beaches Resorts",
      logo: brandLogos.beaches,
      image:
        "https://cdn.sandals.com/libs/ui/brands/assets/uploads/ffj_specials_card_585894edfb.jpg",
      sourceUrl: "https://www.beaches.com/deals/",
      headline: "Fall Fam Jam",
      offer:
        "Beaches is featuring Fall Fam Jam with a free Sesame Street® character breakfast and yoga, a $175 spa credit, and 1 free night on qualifying Beaches vacations.",
      bestFor:
        "Families, multi-generation trips, kids clubs, water parks, and all-inclusive Caribbean vacations",
      finePrint:
        "Travel dates, resort eligibility, room categories, and offer terms apply.",
    },
  ];
}
