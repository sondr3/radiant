type NestedRecord = {
  [key: string | number]: NestedRecord | string | Array<unknown>;
};

export const deepExplode = (obj: object): NestedRecord => {
  const self: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(obj)) {
    if (Array.isArray(val)) {
      self[key] = val.map((v) => (typeof v === "object" && v !== null ? deepExplode(v) : v));
    } else if (typeof val === "object" && val !== null) {
      self[key] = deepExplode(val as Record<string, unknown>);
    } else {
      self[key] = val;
    }
  }

  return self as NestedRecord;
};
