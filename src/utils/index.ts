export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export function getDateFormattedString(
  locale: string,
  dateFormat = DATE_FORMAT_OPTIONS
) {
  return new Date().toLocaleDateString(locale, dateFormat);
}
