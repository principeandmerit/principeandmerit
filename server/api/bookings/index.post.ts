// server/api/bookings.post.ts
import { bookings } from '../../db/schema';
import { and, eq } from 'drizzle-orm'; // Import operators

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    // 1. Check if the slot is already taken
    // We search for any existing booking where both date AND time match
    const existingBooking = await db
      .select()
      .from(bookings)
      .where(
        and(
          eq(bookings.date, body.date),
          eq(bookings.time, body.time),
        ),
      )
      .limit(1);

    // 2. If a booking was found, return a 409 Conflict error
    if (existingBooking.length > 0) {
      throw createError({
        statusCode: 409,
        statusMessage: 'This date and time slot is already booked. Please choose another schedule.',
      });
    }

    const normalizedPhoneNumber = normalizePHPhone(body.phoneNumber);
    const sanitizedInfoText = sanitizeText(normalizedPhoneNumber);
    const normalizedNameFirst = toTitleCase(body.firstName);
    const normalizedNameMiddle = toTitleCase(body.middleName);
    const normalizedNameLast = toTitleCase(body.lastName);

    // 3. Insert into the database if slot is free
    const newBooking = await db.insert(bookings).values({
      service: body.service,
      date: body.date,
      time: body.time,
      firstName: normalizedNameFirst,
      middleName: normalizedNameMiddle,
      lastName: normalizedNameLast,
      email: body.email.toLowerCase(),
      phoneNumber: normalizedPhoneNumber,
      addressLine1: body.addressLine1,
      addressLine2: body.addressLine2,
      info: sanitizedInfoText,
    }).returning();

    return {
      success: true,
      data: newBooking[0],
    };
  }
  catch (error: any) {
    // Re-throw the 409 error we just created
    if (error.statusCode === 409) throw error;

    // Handle other errors
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to create booking',
    });
  }
});
