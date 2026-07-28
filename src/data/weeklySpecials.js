import amawaterwaysSpecialImage from "../assets/specials/amawaterways.jpg";
import carnivalSpecialImage from "../assets/specials/carnival-cruise-line.png";
import disneyWorldSpecialImage from "../assets/specials/disney-world.png";
import vikingSpecialImage from "../assets/specials/viking.jpg";

export const weeklySpecialsLastUpdated = "July 28, 2026";

export function buildWeeklySpecials(brandLogos) {
  return [
    {
      line: "Royal Caribbean",
      logo: brandLogos.rccl,
      image:
        "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/ships-big-time-nav-640-480",
      sourceUrl: "https://www.royalcaribbean.com/cruise-deals",
      headline: "60% Off 2nd Guest + 3rd & 4th Guests Sail Free",
      offer:
        "Royal Caribbean is featuring 60% off the second guest, plus free cruise fare for 3rd and 4th guests and Kids Sail Free on eligible cruises. Select short cruises also receive additional instant savings.",
      bestFor:
        "Families, Perfect Day at CocoCay, Caribbean getaways, Alaska, Europe, and big-ship experiences",
      finePrint:
        "Book the core offer by August 3, 2026. The short-cruise savings apply through July 30 on select departures through December 31, 2026. Free-guest offers have extensive holiday, summer, and spring-break blackout dates. Taxes, fees, gratuities, and port expenses are additional.",
    },
    {
      line: "Norwegian Cruise Line",
      logo: brandLogos.ncl,
      image:
        "https://www.ncl.com/adobe/dynamicmedia/deliver/dm-aid--ff161251-4f98-4e8f-ae0f-253233c1a171/ncl-encore-waterfront-dining.jpg?preferwebp=true&quality=100",
      sourceUrl: "https://www.ncl.com/cruise-deals/gma",
      headline: "Save Up to $500 with Your Travel Advisor",
      offer:
        "Save up to $500 per stateroom on select fall and winter 2026–2027 and summer 2027 cruises. This exclusive offer must be booked by phone or through a travel advisor using promo code GMAOFFER.",
      bestFor:
        "Caribbean, Bahamas, Alaska, Bermuda, Europe, Mexican Riviera, and clients who want advisor-only savings",
      finePrint:
        "Book by August 31, 2026 and mention GMAOFFER. Savings vary by eligible sailing and stateroom and are not available through normal online self-booking. NCL's separate 50%-off-all-cruises promotion is currently scheduled through August 3. The former free prepaid gratuities offer has ended.",
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
      headline: "Up to 30% Off + Up to $500 Onboard Credit",
      offer:
        "Save up to 30% on select cruises, receive up to $500 in onboard credit, and let eligible kids sail free. Discounted Drinks and Wi-Fi packages are also available on qualifying bookings.",
      bestFor:
        "Value-focused families, Caribbean and Bahamas escapes, Europe, Yacht Club upgrades, and travelers who want package choices",
      finePrint:
        "Book by August 4, 2026. Valid for new U.S. bookings on select sailings. Cruise discount applies to the first two guests. Kids 17 and younger may receive free cruise fare as eligible 3rd or 4th guests but still pay taxes and fees. The largest onboard credits generally require longer 2027-or-later sailings. Capacity controls and exclusions apply.",
    },
    {
      line: "Disney Cruise Line",
      logo: brandLogos.dcl,
      image:
        "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1000/1000/75/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12%3A44%3A12+00%3A00=",
      sourceUrl: "https://disneycruise.disney.go.com/special-offers/",
      headline: "Save Up to $1,500 on Fall & Holiday Cruises",
      offer:
        "Save up to $1,500 per stateroom on select Disney Wonder, Disney Treasure, and Disney Fantasy sailings departing October through December 2026.",
      bestFor:
        "Disney families, fall breaks, Halloween and holiday travel, premium family cruising, and character experiences",
      finePrint:
        "Book by August 30, 2026 for select sailings from October 1 through December 31, 2026. The $1,500 headline assumes three eligible guests; per-person savings vary by cruise length and stateroom category. Taxes, fees, gratuities, and Port Adventures are additional.",
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
        "Book an eligible 2027 voyage and receive 70% off the second Sailor, a complimentary balcony upgrade, and up to $400 in onboard credit—$400 for Rockstar Suites or $100 for Sea Terrace cabins.",
      bestFor:
        "Adults-only Caribbean holidays, couples, modern dining, included Wi-Fi and fitness, Sea Terraces, and Rockstar Suites",
      finePrint:
        "Book by July 31, 2026 for eligible voyages departing in 2027. The 70%-off headline is applied as 35% off each eligible Sailor's base fare. Cabin, voyage, fare, group, combinability, and solo-category restrictions apply.",
    },
    {
      line: "Viking",
      logo: brandLogos.viking,
      image: vikingSpecialImage,
      sourceUrl: "https://www.viking.com/cruise-deals/index.html",
      headline: "Summer Sale: Airfare Offers + $25 Deposit",
      offer:
        "Viking's Summer Sale features free or reduced airfare, reduced cruise fares, and a $25 deposit on select river, ocean, and expedition voyages.",
      bestFor:
        "European river cruising, destination-focused ocean voyages, expedition travel, cultural enrichment, and premium adults-only journeys",
      finePrint:
        "Book by July 31, 2026. Airfare benefits, gateways, cruise fares, travel dates, final-payment dates, and combinability vary by itinerary and promotional code. Confirm live pricing before booking.",
    },
    {
      line: "AmaWaterways",
      logo: brandLogos.amaWaterways,
      image: amawaterwaysSpecialImage,
      sourceUrl: "https://www.amawaterways.com/agent/endlessdreamtravel",
      headline: "Anniversary Sale: Save Up to $2,500",
      offer:
        "Save up to $2,500 per stateroom on select 2026 and 2027 departures, plus receive a $250 onboard credit, reserve with a $250-per-person deposit, and add eligible roundtrip economy airfare to Europe for $599 per person.",
      bestFor:
        "Luxury river cruising, Europe, Colombia, 2026–2028 planning, immersive itineraries, and pre- or post-cruise land stays",
      finePrint:
        "Book the Anniversary Sale by July 31, 2026. Select solo supplements are also waived or reduced through July 31. Air gateways, departures, categories, destinations, and combinability rules apply. The separate 2028 Early Booking Rewards offer runs through September 30, 2026.",
    },
    {
      line: "Sandals Resorts",
      logo: brandLogos.sandals,
      sourceUrl: "https://www.sandals.com/specials/",
      headline: "Up to 65% Off + Up to $1,650 in Credits",
      offer:
        "Sandals' Black Friday in July sale includes up to 65% off, up to $1,650 in resort credit, up to $750 in air credit, and 0% financing through Flex Pay. The rotating 7-7-7 adds 7% off seven featured rooms or suites for seven days.",
      bestFor:
        "Adults-only all-inclusive escapes, honeymoons, anniversaries, Caribbean travel, and premium suites",
      finePrint:
        "The public offer page does not list one universal booking deadline. Savings, credits, eligible resorts, room categories, and travel dates vary. The featured 7-7-7 room list rotates every seven days and is subject to availability.",
    },
    {
      line: "Beaches Resorts",
      logo: brandLogos.beaches,
      sourceUrl: "https://www.beaches.com/deals/",
      headline: "Up to 65% Off + Up to $1,150 in Credits",
      offer:
        "Beaches' Black Friday in July sale includes up to 65% off, up to $1,150 in resort credit, up to $750 in air credit, and 0% financing. The rotating 7-7-7 adds 7% off seven featured rooms or suites.",
      bestFor:
        "Caribbean family vacations, multi-generational trips, Turks & Caicos, Jamaica, Sesame Street experiences, and all-inclusive ease",
      finePrint:
        "Eligible Black Friday in July travel runs through December 26, 2028; the public page does not list one universal booking deadline. The Tiny Traveler offer provides a $135 resort credit per eligible child, up to two children age 5 or younger, on qualifying 5-night stays through November 6, 2026; registration is required.",
    },
    {
      line: "Princess Cruises",
      logo: {
        name: "Princess Cruises",
        src: "https://assets.princess.com/is/image/princesscruises/princess-cruises-logo?fmt=png-alpha",
      },
      image:
        "https://assets.princess.com/is/image/princesscruises/fairbanks-northern-lights%3AHero-Large?ts=1783019008866",
      sourceUrl: "https://www.princess.com/cruise-deals-promotions",
      headline: "Up to 40% Off + Up to $700 Instant Savings",
      offer:
        "Princess is featuring up to 40% off plus up to $700 in instant savings on select cruises. Eligible Caribbean departures may also include free cruise fare for third and fourth guests.",
      bestFor:
        "Alaska, Caribbean, Europe, multi-generational families, refined cruising, and flexible last-minute travelers",
      finePrint:
        "The supplier does not publish one universal closing date for all featured savings. Prices, discounts, free-guest eligibility, sailing dates, stateroom categories, and availability vary. Confirm the live promotion before quoting a specific itinerary.",
    },
  ];
}
