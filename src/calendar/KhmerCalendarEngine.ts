import type { KhmerDate } from './types.js';

export class KhmerCalendarEngine {
  calculate(_date: Date): KhmerDate {
    throw new Error(
      'Khmer calendar calculation engine is not implemented yet.'
    );
  }
}