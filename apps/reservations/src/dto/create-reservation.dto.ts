export class CreateReservationDto {
  timestamp: Date;
  startDate: Date;
  endDate: Date;
  userId: string;
  placeId: string;
  invoiceId: string;
}
