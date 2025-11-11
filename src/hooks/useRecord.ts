import { useState, useMemo, useCallback } from "react";

type PartialOrFull<T> = Partial<T> | ((prev: T) => Partial<T>);

export function useRecord<T extends object>(initialValue?: T) {
  const [record, setRecord] = useState<T>(initialValue ?? ({} as T));

  // Efficient, memoized setter that merges updates
  const set = useCallback((update: PartialOrFull<T>) => {
    setRecord(prev => {
      const partial = typeof update === "function" ? update(prev) : update;
      return { ...prev, ...partial };
    });
  }, []);

  // Expose record fields and set method in a flattened way
  // Object spread will merge all fields with the setter
  const handler = useMemo(() => ({ ...record, set }), [record, set]);

  return handler;
}
