export type LunarPhase = 'waxing' | 'waning';

export interface GregorianDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export interface KhmerLunarDate {
  day: number;
  phase: LunarPhase;

  /**
   * Lunar month number.
   *
   * This is NOT the Gregorian month.
   */
  month: number;

  /**
   * True when the calendar uses an intercalary/leap month.
   */
  isLeapMonth: boolean;

  /**
   * True when the lunar month has an additional day.
   */
  isLeapDay: boolean;
}

export interface KhmerZodiac {
  index: number;
}

export interface KhmerSak {
  index: number;
}

export interface KhmerDate {
  gregorian: GregorianDate;

  weekday: number;

  lunar: KhmerLunarDate;

  zodiac: KhmerZodiac;

  sak: KhmerSak;

  buddhistYear: number;
}