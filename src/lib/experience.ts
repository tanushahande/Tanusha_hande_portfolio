/** Amdocs start date — experience auto-calculates from this */
export const AMDOCS_START_DATE = new Date(2025, 7, 1); // 1 Aug 2025

export interface ExperienceDisplay {
  months: number;
  value: number;
  suffix: string;
  badge: string;
}

export function getExperienceMonths(
  startDate: Date = AMDOCS_START_DATE,
  endDate: Date = new Date()
): number {
  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (endDate.getDate() < startDate.getDate()) {
    months -= 1;
  }

  return Math.max(1, months);
}

/** ≤10 months → "X Months" · from 11 months → "1+ Years", then "2+ Years", etc. */
export function getExperienceDisplay(
  startDate: Date = AMDOCS_START_DATE,
  endDate: Date = new Date()
): ExperienceDisplay {
  const months = getExperienceMonths(startDate, endDate);

  if (months <= 10) {
    return {
      months,
      value: months,
      suffix: months === 1 ? " Month" : " Months",
      badge: `${months} ${months === 1 ? "month" : "months"}`,
    };
  }

  const years = Math.floor(months / 12) + (months % 12 >= 11 ? 1 : 0);

  return {
    months,
    value: years,
    suffix: "+ Years",
    badge: `${years}+ years`,
  };
}
