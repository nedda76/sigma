import { describe, expect, it } from 'vitest';
import { sectorRef } from './sectors';

describe('sectorRef', () => {
  it('resolves a valid 2-digit CPV division to a SectorRef', () => {
    const ref = sectorRef('45', 'bg');
    expect(ref).not.toBeNull();
    expect(ref?.code).toBe('45');
    expect(typeof ref?.label).toBe('string');
    expect(ref?.label.length).toBeGreaterThan(0);
  });

  it('returns null for a null input', () => {
    expect(sectorRef(null, 'bg')).toBeNull();
  });

  it('returns null for an undefined input', () => {
    expect(sectorRef(undefined, 'bg')).toBeNull();
  });

  it('returns null for an empty string', () => {
    expect(sectorRef('', 'bg')).toBeNull();
  });

  it('returns null for an unrecognised division code', () => {
    expect(sectorRef('99', 'bg')).toBeNull();
  });

  it('always returns a non-empty short field', () => {
    const ref = sectorRef('45', 'bg');
    expect(typeof ref?.short).toBe('string');
    expect(ref!.short.length).toBeGreaterThan(0);
  });
});
