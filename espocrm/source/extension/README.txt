Endless Dream Travel Data Model 1.0.38

Target: EspoCRM 10.x

Creates nine travel entities and extends Contact and Account. No client data is included.
Version 1.0.38 adds configurable final-payment reminders, a branded editable client email template, a 6:00 AM daily summary with missing-client-email warnings, a manual Send Payment Reminder action, and Vendor Email Display Name.
Client reminders default off; reminder days default to 30, 14, 7, 3, and 1. A configured EspoCRM system outbound mailbox is required for delivery.
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
