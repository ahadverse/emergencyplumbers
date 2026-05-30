import type { CityData } from './cities';

const pick = (items: string[], seed: string) => items[seed.length % items.length];

export const getHeroBlurb = (city: CityData): string =>
  pick(
    [
      `Top-rated plumbing specialists serving the ${city.name} community. Available 24/7 for urgent leak detection, drain cleaning, and water heater repair.`,
      `Need a fast repair in ${city.name}? Our licensed master plumbers offer same-day service with upfront pricing and zero call fees — any time, day or night.`,
      `Providing immediate, 24-hour emergency plumbing responses across ${city.name} and every neighborhood in ${city.county}.`,
    ],
    city.slug,
  );

export const getServicesHeadline = (city: CityData): string =>
  pick(
    [
      `Every Plumbing Service.\nOne Phone Call.`,
      `${city.name}'s Most Complete\nPlumbing Team.`,
      `Licensed Plumbers Ready\nNow in ${city.name}.`,
    ],
    city.slug,
  );

export const getFaqHeadline = (city: CityData): string =>
  pick(
    [
      `Plumbing Questions About ${city.name}`,
      `What ${city.name} Homeowners Ask Us`,
      `Common Plumbing Issues in ${city.county}`,
    ],
    city.slug,
  );
