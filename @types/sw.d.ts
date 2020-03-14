declare var env: string;

interface Document {
  createStyleSheet: any;
  cssText: string;
}

interface EventTarget {
  getAttribute: any;
  parentNode: HTMLElement;
  nextElementSibling: HTMLElement;
  currentTarget: any;
}

interface Element {
  style: any;
  parentNode: any;
  nextElementSibling: any;
}

interface DOMRect {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

interface ClientRect {
  // extension
  left: number;
  right: number;
  top: number;
  bottom: number;
}
