export const weeklySpecialsLastUpdated = "2026-05-03";

// Weekly specials are stored here so future updates can be reviewed in a small pull request.
// logoKey should match a key in the brandLogos object in App.jsx.
export const weeklySpecials = [
  {
    line: "Royal Caribbean",
    logoKey: "rccl",
    image:
      "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/ships-big-time-nav-640-480",
    sourceUrl: "https://www.royalcaribbean.com/cruise-deals",
    headline: "60% Off Second Guest + Kids Sail Free",
    offer:
      "Royal Caribbean is featuring 60% off the second guest plus Kids Sail Free on qualifying sailings, along with rotating last-minute and destination-specific cruise deals.",
    bestFor:
      "Families, short getaways, Perfect Day at CocoCay, and big-ship experiences",
    finePrint: "Select sailings, categories, dates, and terms apply.",
  },
  {
    line: "Norwegian Cruise Line",
    logoKey: "ncl",
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
    logoKey: "carnival",
    image:
      "https://tbcdn.talentbrew.com/company/241/full_v3_0/img/Carnival-Cruise-Line-og.jpg",
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
    logoKey: "msc",
    image:
      "https://www.msccruisesusa.com/-/media/us/2024/drinks-included-plus-onboard-credit/oc-paddleboarding-group-tile-2x2-desktop.jpg?as=1&bc=transparent&hash=3F5BC7EFAF8112AC5646EA186CDF80E7&mh=465&mw=1245",
    sourceUrl: "https://www.msccruisesusa.com/cruise-deals",
    headline: "Up to 30% Off + Kids Sail Free",
    offer:
      "MSC is featuring a Summer Preview Sale with up to 30% off cruises plus Kids Sail Free on qualifying sailings, along with last-minute cruise deals and Drinks & Wi-Fi package options.",
    bestFor:
      "Value-focused Caribbean, Bahamas, Europe, and family cruising",
    finePrint: "Offer availability, ship, itinerary, and package rules apply.",
  },
  {
    line: "Walt Disney World",
    logoKey: "disneyWorld",
    image:
      "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1000/1000/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/50th/Cinderella-Castle-16x9.jpg",
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
    logoKey: "dcl",
    image:
      "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1000/1000/75/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12%3A44%3A12+00%3A00=",
    sourceUrl: "https://disneycruise.disney.go.com/special-offers/",
    headline: "Up to 25% Off Select Sailings",
    offer:
      "Disney Cruise Line is featuring savings up to 25% off voyage fare on select sailings, plus other limited offers such as kids fare savings on qualifying itineraries.",
    bestFor:
      "Disney families, character experiences, private island stops, and premium family cruising",
    finePrint: "Select sailings, categories, ships, and eligibility rules apply.",
  },
  {
    line: "Virgin Voyages",
    logoKey: "virgin",
    image:
      "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
    sourceUrl: "https://www.virginvoyages.com/cruise-deals/cruise-vacation-deals",
    headline: "Up to $1,200 Off + 70% Off 2nd Sailor",
    offer:
      "Virgin Voyages is featuring Spring Savings with up to $1,200 in instant savings, including 70% off the second Sailor and extra savings on RockStar and Mega RockStar Quarters.",
    bestFor:
      "Adults-only escapes, modern ships, nightlife, dining, and no-kids cruising",
    finePrint:
      "Applies to eligible new bookings, voyages, cabin categories, and dates.",
  },
  {
    line: "Viking",
    logoKey: "viking",
    image:
      "https://image-handler-api.viking.com/ew0KICAgICAgICAgICJidWNrZXQiOiAiaHR0cHM6Ly9hZW0tcHJvZC1wdWJsaXNoLnZpa2luZy5jb20iLA0KICAgICAgICAgICJrZXkiOiAiY29udGVudC9kYW0vdmlraW5nY3J1aXNlcy9lbi9tYWdub2xpYS1pbWFnZXMvcGFnZXMvbWFya2V0aW5nLXdlYi9tbHAvb25lLXZpa2luZy9vbmUtdmlraW5nLWxwL29uZS12aWtpbmctc3RpbGwtZnJhbWUvVmlraW5nLVdlYnNpdGUtRmFsbGJhY2stSW1hZ2VfMTZ4OS5qcGciLA0KICAgICAgICAgICJlZGl0cyI6IHsNCiAgICAgICAgICAgICJyZXNpemUiOiB7DQogICAgICAgICAgICAgICJ3aWR0aCI6IDE2MDAsDQogICAgICAgICAgICAgICJoZWlnaHQiOiBudWxsLA0KICAgICAgICAgICAgICAiZml0IjogImluc2lkZSIsDQogICAgICAgICAgICAgICJvcHRpb25zIjogew0KICAgICAgICAgICAgICAgICAgICAid2l0aG91dEVubGFyZ2VtZW50IiA6IHRydWUNCiAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfSwNCgkgICAgICAidG9Gb3JtYXQiOiAid2VicCINCiAgICAgICAgICB9DQogICAgICAgIH0%3D",
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
    logoKey: "amaWaterways",
    image:
      "https://www.amawaterways.com/Assets/Gallery/Large/AmaWaterways_Gold_Logo.png",
    sourceUrl: "https://www.amawaterways.com/offers",
    headline: "Complimentary Land Package + $599 Airfare",
    offer:
      "AmaWaterways is promoting a complimentary land package on select Europe and Colombia departures, paired with limited-time $599 roundtrip economy airfare on qualifying bookings.",
    bestFor:
      "Luxury river cruising, Europe, Mekong, Egypt, Africa, and immersive itineraries",
    finePrint:
      "Select departures, destinations, airfare rules, and booking terms apply.",
  },
  {
    line: "Sandals Resorts",
    logoKey: "sandals",
    image:
      "https://cdn.sandals.com/libs/ui/brands/assets/uploads/specials_widget_summer_loving2_e19e2dbd88.jpg",
    sourceUrl: "https://www.sandals.com/specials/",
    headline: "Summer Loving Sale",
    offer:
      "Sandals is featuring its Summer Loving sale with up to $1,000 instant credit, a $175 spa credit, and 1 free night at select adults-only all-inclusive resorts.",
    bestFor:
      "Couples, honeymoons, anniversaries, adults-only luxury, and all-inclusive Caribbean escapes",
    finePrint:
      "Travel windows, qualifying resorts, room categories, and combinability rules apply.",
  },
  {
    line: "Beaches Resorts",
    logoKey: "beaches",
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
