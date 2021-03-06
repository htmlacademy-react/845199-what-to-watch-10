import dayjs from 'dayjs';

export const getFilmRateLevel = (filmRate: number): string => {
  if (filmRate >= 0 && filmRate <= 3) {
    return 'Bad';
  } else if (filmRate > 3 && filmRate <= 5) {
    return 'Normal';
  } else if (filmRate > 5 && filmRate <= 8) {
    return 'Good';
  } else if (filmRate > 8 && filmRate < 10) {
    return 'Very good';
  } else if (filmRate === 10) {
    return 'Awesome';
  }
  return '';
};

export const getTimeFromMins = (mins: number): string => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
};

export const humanizeDayDate = (data: string): string => dayjs(data).format('MMMM D, YYYY');

export const getReviewDateTime = (data: string): string => dayjs(data).format('YYYY-MM-DD');
