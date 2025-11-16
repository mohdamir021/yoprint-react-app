// Helpers

export function generateArrayOfNumbers(length:number, multiplesOf?: number) {
  const multiples = multiplesOf ?? 1;
  return Array.from({length}, (_,index) => index * multiples)
}

export function catchAndLogError (error: unknown) {
  console.log(error)
}

// Debounce
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay = 300
) {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Scroll To
/**
 * Smoothly scrolls to a given element or position on the page.
 *
 * @param target - Element ID, React ref, or pixel number (Y position)
 * @param offset - Optional offset to adjust the final scroll position
 * @param behavior - Scroll behavior ('smooth' or 'auto')
 */
export const scrollTo = (
  target: string | HTMLElement | number | React.RefObject<HTMLElement>,
  offset: number = 0,
  behavior: ScrollBehavior = 'smooth'
): void => {
  let top: number | undefined;

  if (typeof target === 'number') {
    // Scroll to a specific Y coordinate
    top = target;
  } else if (typeof target === 'string') {
    // Scroll to an element by ID
    const element = document.getElementById(target);
    if (element) {
      top = element.getBoundingClientRect().top + window.scrollY;
    }
  } else if ('current' in target && target.current) {
    // Scroll to an element ref
    top = target.current.getBoundingClientRect().top + window.scrollY;
  } else if (target instanceof HTMLElement) {
    // Scroll to an element directly
    top = target.getBoundingClientRect().top + window.scrollY;
  }

  if (typeof top === 'number') {
    window.scrollTo({
      top: top + offset,
      behavior,
    });
  }
};

// String
export function toCapitalize(string: unknown) {
  const text = String(string ?? "-NA-");
  return `${text.at(0)?.toUpperCase()}${text.substring(1)}`;
}

