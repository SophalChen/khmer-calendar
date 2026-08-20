import { KhmerCalendarEngine } from './KhmerCalendarEngine.js';

export class KhmerCalendar {
  private constructor(
    private readonly date: Date,
    private readonly engine: KhmerCalendarEngine
  ) {}

  static parse(value: string): KhmerCalendar {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      throw new Error(`Invalid date: ${value}`);
    }

    return new KhmerCalendar(
      date,
      new KhmerCalendarEngine()
    );
  }

  static now(): KhmerCalendar {
    return new KhmerCalendar(
      new Date(),
      new KhmerCalendarEngine()
    );
  }

  static today(): KhmerCalendar {
    const date = new Date();

    date.setHours(0, 0, 0, 0);

    return new KhmerCalendar(
      date,
      new KhmerCalendarEngine()
    );
  }
}