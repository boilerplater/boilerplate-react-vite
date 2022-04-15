function isScrollable(elem: HTMLElement): boolean {
  const hasScrollableContent = elem.scrollHeight > elem.clientHeight;
  const overflowYStyle = window.getComputedStyle(elem).overflowY;
  const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;
  return hasScrollableContent && !isOverflowHidden;
}

function getScrollableParent(elem: HTMLElement): HTMLElement {
  // return (!elem || elem === document.body)
  //     ? document.body
  //     : (isScrollable(elem) ? elem : getScrollableParent(elem.parentNode));

  if (elem && elem !== document.body) {
    if (isScrollable(elem)) {
      return elem;
    }

    return getScrollableParent(elem.parentNode as HTMLElement);
  }

  return document.body;
}

function getScrollParent(node: HTMLElement): HTMLElement | null {
  if (node === null) {
    return null;
  }

  if (node.scrollHeight > node.clientHeight) {
    return node;
  }

  return getScrollParent(node.parentNode as HTMLElement);
}

export {
  isScrollable,
  getScrollableParent,
  getScrollParent
};
