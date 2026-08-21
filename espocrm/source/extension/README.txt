Endless Dream Travel Data Model 1.0.35

Target: EspoCRM 10.x

Creates nine travel entities and extends Contact and Account. No client data is included.
Version 1.0.35 automatically calculates Booking Balance Due as Gross Sale minus Amount Paid to Vendor (minimum zero) whenever a Booking is saved.
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
