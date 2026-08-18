Endless Dream Travel Data Model 1.0.5

Target: EspoCRM 10.x

Creates nine travel entities and extends Contact and Account. No client data is included.
Version 1.0.5 improves traveler, address, quote and automatic trip-total workflows while preserving import identity fields.
Install from Administration > Extensions, then confirm the automatic rebuild completed.
Review roles before importing data.

Import identity fields:
Contact.edtExternalId <- ContactExternalId
EdtHousehold.externalId <- HouseholdExternalId
EdtTrip.externalId <- TripExternalId
EdtBooking.externalId <- BookingExternalId
EdtTripTraveler.externalId <- TripTravelerExternalId
EdtBookingTraveler.externalId <- BookingTravelerExternalId
EdtCommission.externalId <- CommissionExternalId
EdtQuote.externalId <- QuoteExternalId
EdtLoyaltyMembership.externalId <- LoyaltyExternalId
EdtSegmentMembership.externalId <- SegmentMembershipExternalId
