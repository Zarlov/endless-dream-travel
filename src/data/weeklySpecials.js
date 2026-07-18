import amawaterwaysSpecialImage from "../assets/specials/amawaterways.jpg";
import carnivalSpecialImage from "../assets/specials/carnival-cruise-line.png";
import disneyWorldSpecialImage from "../assets/specials/disney-world.png";
import vikingSpecialImage from "../assets/specials/viking.jpg";

export const weeklySpecialsLastUpdated = "July 18, 2026";

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
        "Royal Caribbean is featuring up to $850 off, 60% off the second guest, 3rd and 4th guests sail free on eligible cruises, and up to an extra $100 off select 2026 Caribbean sailings.",
      bestFor:
        "Families, Perfect Day at CocoCay, Caribbean getaways, Alaska, Europe, and big-ship experiences",
      finePrint:
        "The current BOGO60 booking window runs through August 3, 2026. Savings, free-guest eligibility, extra 2026 discounts, sailings, staterooms, and blackout dates vary. Taxes, fees, gratuities, and port expenses are additional.",
    },
    {
      line: "Norwegian Cruise Line",
      logo: brandLogos.ncl,
      image:
        "https://www.ncl.com/adobe/dynamicmedia/deliver/dm-aid--ff161251-4f98-4e8f-ae0f-253233c1a171/ncl-encore-waterfront-dining.jpg?preferwebp=true&quality=100",
      sourceUrl: "https://www.ncl.com/cruise-deals/semi-annual-sale",
      headline: "50% Off Cruises + Free Prepaid Gratuities",
      offer:
        "NCL's first Semi-Annual Sale offers 50% off cruises through February 2028, plus free prepaid gratuities on nearly 800 select sailings when booking a Balcony stateroom or above. Free at Sea™ can add drinks, specialty dining, Wi-Fi, and shore-excursion credits.",
      bestFor:
        "Balcony and Haven bookings, clients who value bundled perks, families, groups, and 2026–2028 planning",
      finePrint:
        "Limited-time sale scheduled through July 20, 2026, while supplies last. Free prepaid gratuities apply only to qualifying sailings and Balcony-or-higher categories. Free at Sea package gratuities, eligibility, airfare, and 3rd/4th guest offers vary.",
    },
    {
      line: "Carnival Cruise Line",
      logo: brandLogos.carnival,
      image: carnivalSpecialImage,
      sourceUrl: "https://www.carnival.com/cruise-deals",
      headline: "Current Cruise Deals + Last-Minute Fares",
      offer:
        "Carnival is featuring rotating limited-time savings and last-minute fares across the Caribbean, Bahamas, Mexico, Alaska, and other destinations. Short Bahamas cruises are currently appearing from under $200 per person on select dates before final pricing.",
      bestFor:
        "Budget-friendly family fun, quick getaways, Celebration Key, casual vacations, and flexible last-minute travelers",
      finePrint:
        "Fares change frequently and depend on sailing, occupancy, category, eligibility, and availability. Confirm the live rate before advertising a specific price. Taxes, fees, and port expenses may apply.",
    },
    {
      line: "MSC Cruises",
      logo: brandLogos.msc,
      image:
        "https://www.msccruisesusa.com/-/media/us/2024/drinks-included-plus-onboard-credit/oc-paddleboarding-group-tile-2x2-desktop.jpg?as=1&bc=transparent&hash=3F5BC7EFAF8112AC5646EA186CDF80E7&mh=465&mw=1245",
      sourceUrl: "https://www.msccruisesusa.com/cruise-deals",
      headline: "Last-Minute, Family & All-Inclusive Cruise Deals",
      offer:
        "MSC is featuring current last-minute, family, weekend, and all-inclusive cruise options for the Caribbean, Bahamas, Mediterranean, Northern Europe, and more, along with online savings on beverage, dining, internet, excursion, and Fun Pass packages.",
      bestFor:
        "Value-focused families, Caribbean and Bahamas escapes, Europe, Yacht Club upgrades, and travelers who want package choices",
      finePrint:
        "Cruise fares and package savings vary by ship, destination, sailing, experience level, and booking date. Military members may qualify for up to 10% off. Confirm current terms and availability before booking.",
    },
    {
      line: "Disney Cruise Line",
      logo: brandLogos.dcl,
      image:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1000/1000/75/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12%3A44%3A12+00%3A00=",
      sourceUrl: "https://disneycruise.disney.go.com/special-offers/",
      headline: "Save Up to 25% on Select Disney Cruises",
      offer:
        "Disney Cruise Line is offering savings of up to 25% off prevailing voyage fares on select dates and sailings. Eligible U.S. military members can also receive a $250 onboard credit per reservation on select Disney Wish and Disney Dream sailings during 2026.",
      bestFor:
        "Disney families, premium family cruising, character experiences, private-island stops, and eligible military households",
      finePrint:
        "Savings depend on the selected sailing, stateroom category, occupancy, and availability. The military credit requires eligibility and applies to select 2026 Disney Wish and Disney Dream sailings from Florida. Taxes, fees, gratuities, and Port Adventures are additional.",
    },
    {
      line: "Walt Disney World",
      logo: brandLogos.disneyWorld,
      image: disneyWorldSpecialImage,
      sourceUrl: "https://disneyworld.disney.go.com/special-offers/",
      headline: "Save Up to 30% on Late-Summer & Fall Rooms",
      offer:
        "Save up to 30% on select Disney Resort hotel rooms for most arrivals from July 30 through October 3, 2026. Other featured offers include the 4-Day, 4-Park Magic Ticket from $109 per day plus tax, a late-summer 2-Day, 2-Park ticket from $199 plus tax, and free dining plans for children ages 3–9 with qualifying 2026 packages.",
      bestFor:
        "Disney families, late-summer trips, fall getaways, longer resort stays, park-ticket savings, and dining-plan packages",
      finePrint:
        "Room discounts depend on resort, room type, stay length, and travel dates. Ticket offers have specific start dates, use windows, park limitations, and expiration dates. Package and dining-plan requirements apply.",
    },
    {
      line: "Virgin Voyages",
      logo: brandLogos.virgin,
      image:
        "https://virginvoyages.imgix.net/dam/jcr%3A16bdf05b-503a-4cc6-a27f-4750cf4df533/breakpoint%3Ddesktop.png",
      sourceUrl:
        "https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=140046&agencyId=31527&bookingChannel=FMLINK",
      headline: "70% Off 2nd Sailor + Free Balcony Upgrade",
      offer:
        "Virgin Voyages' summer sale includes 70% off the second Sailor and a free balcony upgrade on select voyages. Eligible fall and winter Caribbean bookings can also receive up to $300 in onboard credit: $50 for Sea Terraces or $300 for Rockstar Suites.",
      bestFor:
        "Adults-only Caribbean holidays, couples, modern dining, included Wi-Fi and fitness, Sea Terraces, and Rockstar Suites",
      finePrint:
        "The Caribbean onboard-credit offer is scheduled to end July 21, 2026, and applies to eligible voyages from September 19, 2026, through April 28, 2027. Cabin, voyage, combinability, and Lock It In Rate restrictions apply.",
    },
    {
      line: "Viking",
      logo: brandLogos.viking,
      image: vikingSpecialImage,
      sourceUrl: "https://www.viking.com/cruise-deals/index.html",
      headline: "Current River, Ocean & Expedition Offers",
      offer:
        "Viking continues to publish itinerary-specific savings across its river, ocean, and expedition voyages, with select offers that may include reduced deposits, airfare benefits, or special cruise-fare savings.",
      bestFor:
        "European river cruising, destination-focused ocean voyages, expedition travel, cultural enrichment, and premium adults-only journeys",
      finePrint:
        "Viking promotions are itinerary- and promo-code-specific. Air gateways, deposits, final-payment dates, departure dates, and combinability vary. Request current pricing for the selected voyage before promoting a specific benefit.",
    },
    {
      line: "AmaWaterways",
      logo: brandLogos.amaWaterways,
      image: amawaterwaysSpecialImage,
      sourceUrl: "https://www.amawaterways.com/agent/endlessdreamtravel",
      headline: "Anniversary Sale: Save Up to $2,500",
      offer:
        "AmaWaterways' Anniversary Sale offers savings of up to $2,500 per stateroom on select 2026 and 2027 departures worldwide, including Europe and Colombia. Early planners can also save up to $2,500 per stateroom on eligible 2028 river cruises.",
      bestFor:
        "Luxury river cruising, Europe, Colombia, 2026–2028 planning, immersive itineraries, and pre- or post-cruise land stays",
      finePrint:
        "Anniversary Sale bookings must be made by July 31, 2026. The 2028 Early Booking Rewards offer runs through September 30, 2026. Select departures, categories, destinations, and combinability rules apply.",
    },
    {
      line: "Sandals Resorts",
      logo: brandLogos.sandals,
      sourceUrl: "https://www.sandals.com/specials/",
      headline: "Black Friday in July: Up to 65% Off",
      offer:
        "Sandals' Black Friday in July sale features up to 65% off, up to $1,650 in resort credits, up to $750 in air credit, and 0% financing through Flex Pay on eligible stays. Weekly 7-7-7 Suite Deals can add 7% off seven selected rooms and suites for seven days.",
      bestFor:
        "Adults-only all-inclusive escapes, honeymoons, anniversaries, Caribbean couples trips, and clients ready to book quickly",
      finePrint:
        "Limited-time promotion. Resort credits, air credits, free nights, financing, room categories, travel dates, registration requirements, and combinability vary by resort and booking. Confirm the live offer before quoting.",
    },
    {
      line: "Beaches Resorts",
      logo: brandLogos.beaches,
      sourceUrl: "https://www.beaches.com/deals/",
      headline: "Black Friday in July: Family Savings Up to 65% Off",
      offer:
        "Beaches' Black Friday in July sale features savings up to 65%, up to $1,150 in credits, and up to $750 in air credit on eligible family resort stays. Current 7-7-7 Suite Deals add 7% off seven selected room categories for seven days.",
      bestFor:
        "Caribbean family vacations, multi-generational trips, Turks & Caicos, Jamaica, Sesame Street experiences, and all-inclusive ease",
      finePrint:
        "The current 7-7-7 booking window runs July 15–21, 2026; travel dates and room categories vary. Black Friday in July benefits, credits, free nights, and combinability depend on resort, room, booking, and travel dates.",
    },
  ];
}
