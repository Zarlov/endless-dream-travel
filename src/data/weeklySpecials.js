import amawaterwaysSpecialImage from "../assets/specials/amawaterways.jpg";
import carnivalSpecialImage from "../assets/specials/carnival-cruise-line.png";
import disneyWorldSpecialImage from "../assets/specials/disney-world.png";
import vikingSpecialImage from "../assets/specials/viking.jpg";

export function buildWeeklySpecials(brandLogos) {
  return [
    {
      line: "Royal Caribbean",
      logo: brandLogos.rccl,
      image:
        "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/ships-big-time-nav-640-480",
      sourceUrl: "https://www.royalcaribbean.com/cruise-deals",
      headline: "Up to $850 Off + 3rd & 4th Guests Sail Free",
      offer:
        "Royal Caribbean is featuring up to $850 off, 3rd and 4th guests sail free, and up to $100 off longer cruises, alongside its 60% off second guest and Kids Sail Free offer.",
      bestFor:
        "Families, short getaways, Perfect Day at CocoCay, and big-ship experiences",
      finePrint: "Select sailings, categories, dates, guest counts, and terms apply.",
    },
    {
      line: "Norwegian Cruise Line",
      logo: brandLogos.ncl,
      image:
        "https://www.ncl.com/adobe/dynamicmedia/deliver/dm-aid--ff161251-4f98-4e8f-ae0f-253233c1a171/ncl-encore-waterfront-dining.jpg?preferwebp=true&quality=100",
      sourceUrl: "https://www.ncl.com/cruise-deals/free-at-sea",
      headline: "Free at Sea™ Value Package",
      offer:
        "Norwegian’s Free at Sea™ package includes popular perks such as unlimited open bar, specialty dining, shore excursion credits, and Wi-Fi, with value advertised at more than $2,000 per stateroom.",
      bestFor:
        "Flexible dining, families, groups, and relaxed cruise planning",
      finePrint: "Eligibility, gratuities, dates, and package terms apply.",
    },
    {
      line: "Carnival Cruise Line",
      logo: brandLogos.carnival,
      image: carnivalSpecialImage,
      sourceUrl: "https://www.carnival.com/cruise-deals",
      headline: "Up to 40% Off + Reduced Deposits",
      offer:
        "Carnival is featuring limited-time offers that may include up to 40% off cruise rates, 50% off deposits, room upgrades from $1, and up to $50 onboard credit on select sailings.",
      bestFor:
        "Budget-friendly fun, family cruises, quick trips, and casual vacations",
      finePrint: "Offers vary by sailing and can expire quickly.",
    },
    {
      line: "MSC Cruises",
      logo: brandLogos.msc,
      image:
        "https://www.msccruisesusa.com/-/media/us/2024/drinks-included-plus-onboard-credit/oc-paddleboarding-group-tile-2x2-desktop.jpg?as=1&bc=transparent&hash=3F5BC7EFAF8112AC5646EA186CDF80E7&mh=465&mw=1245",
      sourceUrl: "https://www.msccruisesusa.com/cruise-deals",
      headline: "Memorial Day Sale: Up to 40% Off + Kids Sail Free",
      offer:
        "MSC Cruises is featuring a Memorial Day Sale with up to 40% off cruises plus Kids Sail Free on qualifying sailings, along with an extended Cruise from $199 + Kids Sail Free offer to the Caribbean, Alaska, and more.",
      bestFor:
        "Value-focused Caribbean, Bahamas, Europe, Alaska, and family cruising",
      finePrint: "Select sailings, categories, dates, destinations, and terms apply.",
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
      line: "Disney Cruise Line",
      logo: brandLogos.dcl,
      image:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1000/1000/75/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12%3A44%3A12+00%3A00=",
      sourceUrl: "https://disneycruise.disney.go.com/special-offers/kids-discount/",
      headline: "Kids Sail 50% Off with 2 Full-Fare Guests",
      offer:
        "Disney Cruise Line is featuring Together at Sea savings with 50% off voyage fare for up to 3 kids ages 17 and younger when traveling with 2 full-fare Guests in the same stateroom on select sailings.",
      bestFor:
        "Disney families, character experiences, private island stops, and premium family cruising",
      finePrint:
        "Book by June 14, 2026; select ships, sailings, stateroom categories, and travel dates apply.",
    },
    {
      line: "Virgin Voyages",
      logo: brandLogos.virgin,
      image:
        "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl: "https://www.virginvoyages.com/cruise-deals",
      headline: "Up to $400 Onboard Credit + 70% Off 2nd Sailor",
      offer:
        "Virgin Voyages is featuring up to $400 in onboard credit, plus 70% off a second Sailor with instant savings and up to $1,000 instant savings on select 2026–2028 voyages.",
      bestFor:
        "Adults-only escapes, modern ships, nightlife, dining, and no-kids cruising",
      finePrint:
        "Promotional deadlines, voyage dates, cabin categories, onboard credit amounts, and terms vary by offer.",
    },
    {
      line: "Viking",
      logo: brandLogos.viking,
      image: vikingSpecialImage,
      sourceUrl: "https://www.viking.com/",
      headline: "Spring Sale: Up to 30% Off + Free Airfare",
      offer:
        "Viking is promoting a Spring Sale with up to 30% off, free airfare, and a $25 deposit on select 2026–2028 river, ocean, and expedition voyages.",
      bestFor:
        "European river cruising, destination-focused ocean cruises, and premium cultural travel",
      finePrint: "Offer expires May 31, 2026; select itineraries and terms apply.",
    },
    {
      line: "AmaWaterways",
      logo: brandLogos.amaWaterways,
      image: amawaterwaysSpecialImage,
      sourceUrl: "https://www.amawaterways.com/offers",
      headline: "Memorial Day Offer: Save Up to $2,500 Per Stateroom",
      offer:
        "AmaWaterways is featuring a Memorial Day Offer with savings up to $2,500 per stateroom, a complimentary land package for up to 4 nights, and flights from $599 on select European and Colombian river cruises.",
      bestFor:
        "Luxury river cruising, Europe, Colombia, immersive itineraries, and pre- or post-cruise land stays",
      finePrint:
        "Select departures, destinations, land package rules, airfare rules, and booking terms apply.",
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
