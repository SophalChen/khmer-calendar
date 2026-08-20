import { describe, expect, it } from 'vitest';
import { KhmerCalendarEngine } from '../src/calendar/KhmerCalendarEngine.js';

describe('Khmer Calendar Engine', () => {
  it('calculates August 20, 2026', () => {
    const engine = new KhmerCalendarEngine();

    const result = engine.calculate(
      new Date('2026-08-20T21:00:00+07:00')
    );

    expect(result.weekday).toBe('ថ្ងៃព្រហស្បតិ៍');
    expect(result.lunar.day).toBe(7);
    expect(result.lunar.phase).toBe('waxing');
    expect(result.lunar.month).toBe('ខែស្រាពណ៍');
    expect(result.zodiac.animal).toBe('ឆ្នាំមមី');
    expect(result.sak.name).toBe('អដ្ឋស័ក');
    expect(result.buddhistYear).toBe(2570);
  });
});