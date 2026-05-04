import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import primaryLogo from "./assets/logos/logo-primary.png";
import iconLogo from "./assets/logos/logo-icon.png";
import shipLogo from "./assets/logos/logo-ship.png";
import credentialsGraphic from "./assets/credentials/credentials-graphic.png";

import disneyWorldLogo from "./assets/brands/disney-world.svg";
import rcclLogo from "./assets/brands/rccl.png";
import dclLogo from "./assets/brands/dcl.png";
import nclLogo from "./assets/brands/ncl.png";
import vikingLogo from "./assets/brands/viking.png";
import amaWaterwaysLogo from "./assets/brands/amawaterways.jpg";
import carnivalLogo from "./assets/brands/carnival.png";
import sandalsLogo from "./assets/brands/sandals.png";
import beachesLogo from "./assets/brands/beaches.png";
import mscLogo from "./assets/brands/msc.png";
import virginLogo from "./assets/brands/virgin.png";

import {
  FaShip,
  FaWater,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaEnvelope,
  FaFacebookF,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaGlobeAmericas,
  FaTags,
} from "react-icons/fa";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdoeddd";

const BRAND = {
  black: "#0B0B0B",
  charcoal: "#1F1B1D",
  gold: "#F2AE63",
  goldLight: "#FFD09B",
  white: "#FFFFFF",
  softWhite: "#F7F4EF",
};

const brandLogos = {
  disneyWorld: {
    name: "Walt Disney World",
    src: disneyWorldLogo,
  },
  rccl: {
    name: "Royal Caribbean",
    src: rcclLogo,
  },
  dcl: {
    name: "Disney Cruise Line",
    src: dclLogo,
  },
  ncl: {
    name: "Norwegian Cruise Line",
    src: nclLogo,
  },
  viking: {
    name: "Viking",
    src: vikingLogo,
  },
  amaWaterways: {
    name: "AmaWaterways",
    src: amaWaterwaysLogo,
  },
  carnival: {
    name: "Carnival Cruise Line",
    src: carnivalLogo,
  },
  sandals: {
    name: "Sandals",
    src: sandalsLogo,
  },
  beaches: {
    name: "Beaches Resorts",
    src: beachesLogo,
  },
  msc: {
    name: "MSC Cruises",
    src: mscLogo,
  },
  virgin: {
    name: "Virgin Voyages",
    src: virginLogo,
  },
};

const heroImage =
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1500&q=80";

const services = [
  {
    icon: FaStar,
    logos: [brandLogos.disneyWorld, brandLogos.dcl],
    title: "Disney Vacations",
    text: "Walt Disney World, Disney Cruise Line, resorts, dining guidance, family flow, and magical details handled with care.",
  },
  {
    icon: FaShip,
    logos: [
      brandLogos.rccl,
      brandLogos.ncl,
      brandLogos.carnival,
      brandLogos.msc,
      brandLogos.virgin,
    ],
    title: "Ocean Cruises",
    text: "Compare cruise lines, ships, cabins, itineraries, add-ons, and current promotions without sorting through it alone.",
  },
  {
    icon: FaWater,
    logos: [brandLogos.viking, brandLogos.amaWaterways],
    title: "European River Cruises",
    text: "Viking, AmaWaterways, and other river cruise experiences matched to your travel style, pace, and budget.",
  },
  {
    icon: FaStar,
    logos: [brandLogos.sandals, brandLogos.beaches],
    title: "All-Inclusive Resorts",
    text: "Resort matching for couples, families, honeymoons, celebrations, and easy beach escapes, including Sandals and Beaches resort vacations.",
  },
  {
    icon: FaShieldAlt,
    title: "Trip Insurance",
    text: "Single-trip and annual travel protection options to help protect your vacation investment.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Excursions Worldwide",
    text: "Shore excursions, cruise add-ons, and standalone experiences almost anywhere your dream takes you.",
  },
];

const promoCards = [
  {
    title: "Family vacations",
    text: "Theme parks, cruises, resorts, and multi-generation trips planned around comfort, budget, and fun.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cruise getaways",
    text: "Royal Caribbean, Norwegian, Disney Cruise Line, MSC, Carnival, Virgin Voyages, river cruises, and more.",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Resort escapes",
    text: "All-inclusive vacations with food, drinks, transfers, entertainment, and relaxation built into the experience.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
];

const destinations = [
  "Disney magic on land or sea",
  "Caribbean & Bahamas cruising",
  "European river cruise journeys",
  "Adults-only cruise escapes",
  "All-inclusive beach resorts",
  "Worldwide excursions",
];

const steps = [
  {
    title: "Dream",
    text: "Tell us where you want to go, who is traveling, your budget, and what would make the trip feel perfect.",
  },
  {
    title: "Compare",
    text: "We research options, explain the trade-offs, and help narrow choices so the planning feels manageable.",
  },
  {
    title: "Book",
    text: "You choose the vacation you love, and we help with the details before departure.",
  },
];

const trustItems = [
  "College of Disney Knowledge",
  "Sandals Specialist",
  "Cruise Line certifications",
  "MSC and Royal Caribbean training",
];

const quickFacts = ["Free service", "Real guidance", "Less stress"];

const weeklySpecials = [
  {
    line: "Royal Caribbean",
    logo: brandLogos.rccl,
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
    logo: brandLogos.msc,
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
    logo: brandLogos.disneyWorld,
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
    logo: brandLogos.dcl,
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
    logo: brandLogos.virgin,
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
    logo: brandLogos.viking,
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
    logo: brandLogos.amaWaterways,
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
    logo: brandLogos.sandals,
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

function BrandLogo({ variant = "full", size = "header" }) {
  const fullLogoSizeClasses = {
    header: "h-14 sm:h-16 w-auto",
    footer: "h-12 sm:h-14 w-auto",
    hero: "h-24 sm:h-28 w-auto",
  };

  const iconLogoSizeClasses = {
    header: "h-12 w-12",
    footer: "h-10 w-10",
    hero: "h-20 w-20 sm:h-24 sm:w-24",
  };

  const shipLogoSizeClasses = {
    header: "h-12 w-12",
    footer: "h-10 w-10",
    hero: "h-16 w-16 sm:h-20 sm:w-20",
  };

  if (variant === "ship") {
    return (
      <img
        src={shipLogo}
        alt="Endless Dream Travel ship icon"
        className={`${shipLogoSizeClasses[size]} object-contain drop-shadow-xl`}
      />
    );
  }

  if (variant === "icon") {
    return (
      <img
        src={iconLogo}
        alt="Endless Dream Travel icon"
        className={`${iconLogoSizeClasses[size]} rounded-[1.4rem] object-cover shadow-xl ring-1 ring-[#F2AE63]/25`}
      />
    );
  }

  return (
    <img
      src={primaryLogo}
      alt="Endless Dream Travel logo"
      className={`${fullLogoSizeClasses[size]} object-contain`}
    />
  );
}

function IconBadge({ icon: Icon, children, variant = "light" }) {
  const base =
    "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl font-black shadow-sm";
  const style =
    variant === "dark"
      ? "bg-[#0B0B0B] text-[#F2AE63] ring-1 ring-[#F2AE63]/30"
      : "bg-[#F2AE63]/15 text-[#0B0B0B] ring-1 ring-[#F2AE63]/35";

  return (
    <span className={`${base} ${style}`}>
      {Icon ? <Icon className="h-5 w-5" /> : children}
    </span>
  );
}

function LogoBadge({ logo, size = "normal" }) {
  const sizeClass =
    size === "large" ? "h-16 min-w-40 px-5" : "h-12 min-w-28 px-4";

  return (
    <div
      className={`inline-flex ${sizeClass} items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-[#F2AE63]/35`}
      title={logo.name}
    >
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        className="max-h-9 max-w-[9rem] object-contain"
      />
    </div>
  );
}

function LogoCluster({ logos = [] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {logos.map((logo) => (
        <LogoBadge key={logo.name} logo={logo} />
      ))}
    </div>
  );
}

function CheckMark() {
  return <FaCheckCircle className="h-5 w-5 text-[#F2AE63]" />;
}

function ArrowIcon() {
  return <FaArrowRight className="ml-2 h-3.5 w-3.5" />;
}

function runContentTests() {
  const requiredServiceTitles = [
    "Disney Vacations",
    "Ocean Cruises",
    "European River Cruises",
    "All-Inclusive Resorts",
    "Trip Insurance",
    "Excursions Worldwide",
  ];

  const missingServices = requiredServiceTitles.filter(
    (title) => !services.some((service) => service.title === title)
  );

  const allServicesHaveVisuals = services.every(
    (service) => typeof service.icon === "function" || service.logos?.length > 0
  );
  const allWeeklySpecialsHaveLogos = weeklySpecials.every(
    (special) => special.logo?.src && special.logo?.name
  );
  const hasContactEmail = "amy@endlessdreamtravel.com".includes("@");
  const hasThreeSteps = steps.length === 3;
  const hasPromoCards = promoCards.length === 3;
  const hasWeeklySpecials = weeklySpecials.length >= 11;
  const usesBrandPalette =
    BRAND.black === "#0B0B0B" &&
    BRAND.gold === "#F2AE63" &&
    BRAND.white === "#FFFFFF";

  return {
    passed:
      missingServices.length === 0 &&
      allServicesHaveVisuals &&
      allWeeklySpecialsHaveLogos &&
      hasContactEmail &&
      hasThreeSteps &&
      hasPromoCards &&
      hasWeeklySpecials &&
      usesBrandPalette,
    missingServices,
    allServicesHaveVisuals,
    allWeeklySpecialsHaveLogos,
    hasContactEmail,
    hasThreeSteps,
    hasPromoCards,
    hasWeeklySpecials,
    usesBrandPalette,
  };
}

const contentTestResults = runContentTests();

function handleVacationRequest(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const name = formData.get("name") || "";
  const email = formData.get("email") || "";
  const tripType = formData.get("tripType") || "";
  const travelDates = formData.get("travelDates") || "";
  const details = formData.get("details") || "";

  const subject = encodeURIComponent("Vacation Quote Request");

  const body = encodeURIComponent(
    [
      "New vacation quote request:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Trip Type: ${tripType}`,
      `Ideal Travel Dates: ${travelDates}`,
      "",
      "Dream Trip Details:",
      details,
    ].join("\n")
  );

  window.location.href = `mailto:amy@endlessdreamtravel.com?subject=${subject}&body=${body}`;
}
export default function EndlessDreamTravelWebsite() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleVacationRequest(event) {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
   }
  }
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      {!contentTestResults.passed && (
        <div className="bg-red-100 px-5 py-3 text-sm font-bold text-red-900">
          Content check failed. Review logo imports, service visuals, contact,
          brand palette, step, or promo-card data.
        </div>
      )}

      <section className="relative overflow-hidden bg-[#0B0B0B]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 12% 10%, rgba(242,174,99,0.22), transparent 30%), radial-gradient(circle at 86% 12%, rgba(255,255,255,0.09), transparent 25%), linear-gradient(135deg, #0B0B0B 0%, #1F1B1D 52%, #0B0B0B 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0B] to-transparent" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <BrandLogo variant="full" size="header" />
            <span className="sr-only">Endless Dream Travel</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-white/80 md:flex">
            <a href="#services" className="transition hover:text-[#F2AE63]">
              Services
            </a>
            <a href="#specialties" className="transition hover:text-[#F2AE63]">
              Specialties
            </a>
            <a href="#weekly-specials" className="transition hover:text-[#F2AE63]">
              Weekly Specials
            </a>
            <a href="#process" className="transition hover:text-[#F2AE63]">
              How it works
            </a>
            <a href="#contact" className="transition hover:text-[#F2AE63]">
              Contact
            </a>
          </div>

          <Button
            asChild
            className="hidden rounded-full bg-[#F2AE63] px-5 font-black text-[#0B0B0B] hover:bg-[#FFD09B] md:inline-flex"
          >
            <a href="#contact">Free Quote</a>
          </Button>
        </nav>

        <div
          id="top"
          className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F2AE63]/30 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-2xl backdrop-blur">
              <FaStar className="h-3.5 w-3.5 text-[#F2AE63]" />
              Our travel planning services are 100% free
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Modern vacation planning for dream trips without the overwhelm.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Disney vacations, ocean cruises, European river cruises,
              all-inclusive resorts, trip insurance, and excursions — planned
              with personal guidance from Endless Dream Travel.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#F2AE63] px-8 py-6 text-base font-black text-[#0B0B0B] hover:bg-[#FFD09B]"
              >
                <a href="#contact" className="inline-flex items-center">
                  Start My Free Quote <ArrowIcon />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-[#F2AE63]/35 bg-white/5 px-8 py-6 text-base font-bold text-white hover:bg-white/10 hover:text-[#F2AE63]"
              >
                <a href="#services">See What We Plan</a>
              </Button>
            </div>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {quickFacts.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#F2AE63]/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur"
                >
                  <FaCheckCircle className="mb-2 h-4 w-4 text-[#F2AE63]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#F2AE63]/20 blur-3xl" />
            <Card className="relative overflow-hidden rounded-[2.25rem] border-[#F2AE63]/25 bg-white/5 shadow-2xl backdrop-blur">
              <CardContent className="p-0">
                <div
                  className="relative h-[30rem] bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(11,11,11,0.06), rgba(11,11,11,0.78)), url(${heroImage})`,
                  }}
                >
                  <div className="absolute left-5 top-5 flex h-24 w-24 items-center justify-center rounded-[1.5rem] border border-[#F2AE63]/25 bg-[#0B0B0B]/82 p-4 shadow-2xl backdrop-blur-md sm:h-28 sm:w-28">
                    <BrandLogo variant="ship" size="hero" />
                  </div>
                  <div className="absolute inset-x-5 bottom-5 rounded-[1.75rem] border border-[#F2AE63]/25 bg-[#0B0B0B]/78 p-5 shadow-2xl backdrop-blur-md">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#F2AE63]">
                      Featured Planning
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      From idea to itinerary
                    </h2>
                    <p className="mt-2 leading-7 text-white/78">
                      We help you compare destinations, vendors, specials,
                      cabins, resorts, excursions, and protection options.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section
        id="services"
        className="bg-[#F7F4EF] px-5 py-24 text-[#0B0B0B] lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9B642B]">
                What We Plan
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                One travel advisor. Endless vacation possibilities.
              </h2>
            </div>
            <p className="text-lg leading-8 text-black/65">
              From the first idea to the final details, we help you compare
              destinations, vendors, protection options, and memorable
              experiences so your trip feels easier from the start.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <Card className="group h-full overflow-hidden rounded-[2rem] border-[#F2AE63]/20 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#F2AE63]/45 hover:shadow-xl">
                  <CardContent className="p-7">
                    <div className="mb-6">
                      {service.logos?.length ? (
                        <LogoCluster logos={service.logos} />
                      ) : (
                        <IconBadge icon={service.icon} />
                      )}
                    </div>
                    <h3 className="text-xl font-black text-[#0B0B0B]">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7 text-black/62">
                      {service.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="weekly-specials"
        className="bg-[#0B0B0B] px-5 py-24 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F2AE63]">
                Weekly Specials
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Current travel offers, organized for quick comparison.
              </h2>
            </div>
            <div className="rounded-[2rem] border border-[#F2AE63]/25 bg-white/5 p-6">
              <p className="text-lg leading-8 text-white/72">
                Travel promotions change often. We review featured offers weekly
                and verify current pricing before you book.
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F2AE63]">
                Updated weekly
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {weeklySpecials.map((special) => (
              <Card
                key={special.line}
                className="h-full overflow-hidden rounded-[2rem] border-[#F2AE63]/25 bg-white text-[#0B0B0B] shadow-xl"
              >
                <CardContent className="flex h-full flex-col p-0">
                  <div className="relative h-48 overflow-hidden bg-[#F7F4EF]">
                    {special.image ? (
                      <img
                        src={special.image}
                        alt={`${special.line} featured special`}
                        className="h-full w-full object-cover"
                        onError={(event) => {
                          event.currentTarget.src = special.logo.src;
                          event.currentTarget.className =
                            "h-full w-full bg-white object-contain p-8";
                        }}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center p-8">
                        <LogoBadge logo={special.logo} size="large" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <LogoBadge logo={special.logo} />
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#0B0B0B] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#F2AE63] shadow-lg">
                        <FaTags className="h-3 w-3" /> Special
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9B642B]">
                      {special.line}
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-tight text-[#0B0B0B]">
                      {special.headline || special.line}
                    </h3>
                    <p className="mt-4 leading-7 text-black/65">
                      {special.offer}
                    </p>
                    <div className="mt-5 rounded-2xl bg-[#F7F4EF] p-4">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9B642B]">
                        Best For
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-black/70">
                        {special.bestFor}
                      </p>
                    </div>
                    {special.finePrint && (
                      <p className="mt-4 text-xs leading-5 text-black/45">
                        {special.finePrint}
                      </p>
                    )}
                    <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
                      <a
                        href={special.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-[#F2AE63]/35 px-4 py-3 text-sm font-black text-[#0B0B0B] transition hover:bg-[#FFF1DF]"
                      >
                        View supplier offer
                      </a>
                      <a
                        href="mailto:amy@endlessdreamtravel.com?subject=Weekly%20Special%20Request"
                        className="inline-flex items-center justify-center rounded-full bg-[#F2AE63] px-4 py-3 text-sm font-black text-[#0B0B0B] transition hover:bg-[#FFD09B]"
                      >
                        Ask for pricing <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-white/55">
            Promotions are subject to availability, eligibility, blackout dates,
            room or stateroom category, taxes, port fees, resort fees when
            applicable, and supplier terms. Final pricing should always be
            confirmed before booking.
          </p>
        </div>
      </section>

      <section
        id="specialties"
        className="bg-white px-5 py-24 text-[#0B0B0B] lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9B642B]">
              Popular Trip Styles
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Vacation styles for every kind of traveler
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/62">
              Whether you want family fun, a relaxing cruise, or a resort
              escape, we help match the trip style to the right destination,
              vendor, and value.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {promoCards.map((card) => (
              <Card
                key={card.title}
                className="overflow-hidden rounded-[2rem] border border-[#F2AE63]/25 bg-[#0B0B0B] text-white shadow-xl"
              >
                <CardContent className="p-0">
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(11,11,11,0.05), rgba(11,11,11,0.72)), url(${card.image})`,
                    }}
                  />
                  <div className="p-7">
                    <h3 className="text-2xl font-black text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 leading-7 text-white/70">
                      {card.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[#F2AE63]/25 bg-[#F7F4EF] px-5 py-4 font-bold text-black/75"
              >
                <FaStar className="h-4 w-4 text-[#F2AE63]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0B] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F2AE63]">
              Certified Guidance
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Credentials that build trust before the first message.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Specialist training and vendor knowledge help us guide you through
              the details with confidence, from destination choices to booking
              decisions.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#F2AE63]/22 bg-white/5 p-4 font-semibold text-white"
                >
                  <div className="mb-2">
                    <CheckMark />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-[#F2AE63]/25 bg-white shadow-2xl">
            <CardContent className="p-5 sm:p-7">
              <img
                src={credentialsGraphic}
                alt="Endless Dream Travel certifications and specialist credentials"
                className="w-full rounded-[1.5rem] object-contain"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        id="process"
        className="bg-[#F7F4EF] px-5 py-24 text-[#0B0B0B] lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9B642B]">
              How It Works
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Simple, personal, and easy to follow
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Card
                key={step.title}
                className="rounded-[2rem] border-[#F2AE63]/20 bg-white shadow-sm"
              >
                <CardContent className="p-8">
                  <div className="mb-8">
                    <IconBadge variant="dark">{index + 1}</IconBadge>
                  </div>
                  <h3 className="text-2xl font-black text-[#0B0B0B]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-black/62">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-white px-5 py-24 text-[#0B0B0B] lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9B642B]">
              Start Planning
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Request your free vacation quote
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/62">
              Send your trip idea, travel dates, number of travelers, and
              must-haves. We will help turn your dream vacation into a clear
              plan.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:amy@endlessdreamtravel.com"
                className="flex items-center gap-3 rounded-2xl border border-[#F2AE63]/25 bg-[#F7F4EF] p-4 font-bold text-black/75 transition hover:border-[#F2AE63] hover:bg-[#FFF1DF]"
              >
                <FaEnvelope className="h-5 w-5 text-[#F2AE63]" />
                amy@endlessdreamtravel.com
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100095220074150"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[#F2AE63]/25 bg-[#F7F4EF] p-4 font-bold text-black/75 transition hover:border-[#F2AE63] hover:bg-[#FFF1DF]"
              >
                <FaFacebookF className="h-5 w-5 text-[#F2AE63]" />
                Message us on Facebook
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-[#F2AE63]/25 bg-[#F7F4EF] p-4 font-bold text-black/75">
                <FaGlobeAmericas className="h-5 w-5 text-[#F2AE63]" />
                endlessdreamtravel.com
              </div>
            </div>
          </div>

          <Card className="rounded-[2rem] border-[#F2AE63]/25 bg-[#F7F4EF] shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <form className="grid gap-5" onSubmit={handleVacationRequest}>
                <input type="hidden" name="_subject" value="New Vacation Quote Request" />
                <input type="hidden" name="source" value="Endless Dream Travel Website" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-black/75">
                    Name
                    <input
                      name="name"
                      className="rounded-2xl border border-[#F2AE63]/25 bg-white px-4 py-3 text-[#0B0B0B] outline-none ring-[#F2AE63] transition focus:ring-2"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-black/75">
                    Email
                    <input
                      name="email"
                      type="email"
                      className="rounded-2xl border border-[#F2AE63]/25 bg-white px-4 py-3 text-[#0B0B0B] outline-none ring-[#F2AE63] transition focus:ring-2"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-black/75">
                    Trip type
                    <select 
                      name="tripType"
                      className="rounded-2xl border border-[#F2AE63]/25 bg-white px-4 py-3 text-[#0B0B0B] outline-none ring-[#F2AE63] transition focus:ring-2"
                    >
                      <option>Disney vacation</option>
                      <option>Ocean cruise</option>
                      <option>European river cruise</option>
                      <option>All-inclusive resort</option>
                      <option>Excursions</option>
                      <option>Trip insurance</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-black/75">
                    Ideal travel dates
                    <input
                      name="travelDates"
                      className="rounded-2xl border border-[#F2AE63]/25 bg-white px-4 py-3 text-[#0B0B0B] outline-none ring-[#F2AE63] transition focus:ring-2"
                      placeholder="Month, season, or dates"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-bold text-black/75">
                  Dream trip details
                  <textarea
                    name="details"
                    className="min-h-36 rounded-2xl border border-[#F2AE63]/25 bg-white px-4 py-3 text-[#0B0B0B] outline-none ring-[#F2AE63] transition focus:ring-2"
                    placeholder="Destination ideas, number of travelers, budget, ages of kids, cruise line preferences, resort must-haves, or anything else we should know."
                    required
                  />
                </label>

                <Button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="rounded-full bg-[#0B0B0B] py-6 text-base font-black text-white hover:bg-[#1F1B1D]"
                >
                  {formStatus === "sending" ? "Sending..." : "Submit Vacation Request"}
                </Button>

                {formStatus === "success" && (
                  <p className="rounded-2xl bg-green-100 p-4 text-center text-sm font-bold text-green-800">
                    Thank you! Your vacation request was sent successfully.
                  </p>
                )}

                {formStatus === "error" && (
                  <p className="rounded-2xl bg-red-100 p-4 text-center text-sm font-bold text-red-800">
                    Something went wrong. Please email amy@endlessdreamtravel.com directly.
                  </p>
                )}

                <p className="text-center text-xs leading-5 text-black/50">
                  Prefer email? Send your vacation details to amy@endlessdreamtravel.com and we will help you get started.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#0B0B0B] px-5 py-10 text-white/65 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <BrandLogo variant="full" size="footer" />
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Endless Dream Travel. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
