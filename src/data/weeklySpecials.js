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
      headline: "Up to $900 Off + Kids Sail Free",
      offer:
        "Royal Caribbean is featuring up to $900 off select sailings, 60% off the second guest, and Kids Sail Free on qualifying cruises to the Caribbean, Alaska, Europe, and more.",
      bestFor:
        "Families, Perfect Day at CocoCay, Alaska adventures, Europe cruises, and big-ship experiences",
      finePrint:
        "Book by June 1, 2026. Select sailings, stateroom categories, departure dates, guest ages, and terms apply. Taxes, fees, gratuities, and port expenses are additional. Important change: family-focused free-guest messaging remains the lead promotion.",
    },
    {
      line: "Norwegian Cruise Line",
      logo: brandLogos.ncl,
      image:
        "https://www.ncl.com/adobe/dynamicmedia/deliver/dm-aid--ff161251-4f98-4e8f-ae0f-253233c1a171/ncl-encore-waterfront-dining.jpg?preferwebp=true&quality=100",
      sourceUrl: "https://www.ncl.com/cruise-deals/free-at-sea",
      headline: "Free at Sea™ Value Package",
      offer:
        "Norwegian Cruise Line continues its Free at Sea™ promotion with popular perks such as unlimited open bar, specialty dining, Wi-Fi, and shore excursion credits on qualifying sailings.",
      bestFor:
        "Flexible dining, relaxed cruise planning, groups, families, and travelers who like bundled extras",
      finePrint:
        "Limited-time ongoing promotion. Inclusions vary by ship, itinerary, sailing, and stateroom category. Package gratuities and service charges may apply. Important change: no major public change from the prior week.",
    },
    {
      line: "Carnival Cruise Line",
      logo: brandLogos.carnival,
      image: carnivalSpecialImage,
      sourceUrl: "https://www.carnival.com/cruise-deals",
      headline: "Up to 50% Off + Reduced Deposits",
      offer:
        "Carnival Cruise Line is featuring up to 50% off cruise fares with reduced deposits on select sailings, plus Pack & Go rates for flexible last-minute travelers.",
      bestFor:
        "Budget-friendly fun, quick getaways, family cruises, casual vacations, and last-minute escapes",
      finePrint:
        "Expiration varies by offer; many current promotions expire mid-May through early June 2026. Select sailings and categories only. Non-refundable deposits may apply. Taxes, fees, and port expenses are additional. Important change: earlier onboard-credit and upgrade-focused offers appear retired from the current cycle.",
    },
    {
      line: "MSC Cruises",
      logo: brandLogos.msc,
      image:
        "https://www.msccruisesusa.com/-/media/us/2024/drinks-included-plus-onboard-credit/oc-paddleboarding-group-tile-2x2-desktop.jpg?as=1&bc=transparent&hash=3F5BC7EFAF8112AC5646EA186CDF80E7&mh=465&mw=1245",
      sourceUrl: "https://www.msccruisesusa.com/cruise-deals",
      headline: "Summer Preview Sale + Kids Sail Free",
      offer:
        "MSC Cruises continues its Summer Preview Sale with up to 30% off select cruises plus Kids Sail Free on qualifying sailings. Caribbean and Bahamas itineraries from $199 remain highlighted on select departures.",
      bestFor:
        "Value-focused Caribbean, Bahamas, Europe, Alaska, and family cruising",
      finePrint:
        "Book by May 18, 2026, where available; dates may vary by market. Kids Sail Free applies to qualifying children sailing as 3rd/4th guests. Taxes and fees still apply. Important change: the $199 Caribbean promotion appears close to rotation.",
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
        "Book by June 14, 2026. Valid on select sailings from October 2026 through March 2027. Most stateroom categories qualify except Concierge and Suites. Taxes, fees, gratuities, and Port Adventures are additional. Important change: remains Disney’s headline family promotion.",
    },
    {
      line: "Virgin Voyages",
      logo: brandLogos.virgin,
      image:
        "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl: "https://www.virginvoyages.com/promotional-offers-and-discounts",
      headline: "70% Off Second Sailor + Instant Savings",
      offer:
        "Virgin Voyages is featuring 70% off the second Sailor plus up to $1,000 in instant savings on eligible adults-only voyages through 2028.",
      bestFor:
        "Adults-only escapes, modern ships, nightlife, elevated dining, and no-kids cruising",
      finePrint:
        "Book by May 28, 2026. Savings vary by cabin category and voyage length; select categories may be excluded. Important change: prior RockStar and Mega RockStar bonus savings appear to have expired, reducing peak promotional value.",
    },
    {
      line: "Viking",
      logo: brandLogos.viking,
      image: vikingSpecialImage,
      sourceUrl: "https://www.viking.com/cruise-deals/index.html",
      headline: "Up to 30% Off + Free Airfare",
      offer:
        "Viking continues its Spring Sale with up to 30% off select river, ocean, and expedition voyages plus free airfare and reduced deposits on qualifying departures.",
      bestFor:
        "European river cruising, destination-focused ocean cruises, expedition travel, and premium cultural itineraries",
      finePrint:
        "Book by May 31, 2026. Select 2026–2028 departures only. Airfare gateways and availability vary by itinerary. Important change: no significant public change identified from the prior week.",
    },
    {
      line: "AmaWaterways",
      logo: brandLogos.amaWaterways,
      image: amawaterwaysSpecialImage,
      sourceUrl: "https://www.amawaterways.com/special-offers",
      headline: "Complimentary Land Packages + Airfare Savings",
      offer:
        "AmaWaterways continues offering complimentary land packages on select Europe and Colombia river cruises, alongside AirPlus airfare offers starting around $599 roundtrip on qualifying departures. Triple Savings offers remain active on select itineraries.",
      bestFor:
        "Luxury river cruising, Europe, Colombia, immersive itineraries, and pre- or post-cruise land stays",
      finePrint:
        "Book-by dates vary by itinerary and promotion. Select departures and gateways only. Promotions may not be combinable. Important change: complimentary land packages remain the primary featured promotion while regional offers continue rotating.",
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
