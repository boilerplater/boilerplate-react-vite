// declare let window: any;

declare interface Window {
  cordova: any;
}

// declare global {
declare namespace JSX {
  interface IntrinsicElements {
    'ion-app'             : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { class?: string }, HTMLElement>;
    'ion-page'            : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { class?: string }, HTMLElement>;
    'ion-back-button'     : React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement> & {
      'class' ?: string,
      'default-href' ?: string,
      'disabled' ?: string,
      'icon' ?: string,
      'mode' ?: string,
      'text' ?: string,
      'type' ?: string
    }, HTMLButtonElement>;
    'ion-button' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement> & {
      'button-type' ?: string,
      'color' ?: string,
      'disabled' ?: string,
      'expand' ?: string
    }, HTMLButtonElement>;
    'ion-buttons' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement> & {
      'collapse' ?: string
    }, HTMLButtonElement>;
    'ion-content' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'class' ?: string,
      'color' ?: string,
      'force-overscroll' ?: string,
      'fullscreen' ?: string,
      'scroll-events' ?: string,
      'scroll-x' ?: string,
      'scroll-y' ?: string
    }, HTMLElement>;
    'ion-header' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'collapse' ?: string,
      'mode' ?: string,
      'translucent' ?: string,
    }, HTMLElement>;
    'ion-icon' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'name' ?: string,
      'class' ?: string,
      'slot' ?: any,
      'ios' ?: string,
      'md' ?: string
    }, HTMLElement>;
    'ion-item' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'button' ?: string,
      'color' ?: string,
      'detail' ?: string,
      'detail-icon' ?: string,
      'disabled' ?: string,
      'download' ?: string,
      'href' ?: string,
      'lines' ?: string,
      'mode' ?: string,
      'rel' ?: string,
      'router-direction' ?: string,
      'target' ?: string,
      'type' ?: string
    }, HTMLElement>;
    'ion-label'          : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'ion-list'           : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'inset' ?: string,
      'lines' ?: string,
      'mode' ?: string
    }, HTMLElement>;
    'ion-menu' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'class' ?: string,
      'content-id' ?: string,
      'disabled' ?: string,
      'max-edge-start' ?: string,
      'menuId' ?: string,
      'side' ?: string,
      'swipe-gesture' ?: string,
      'type' ?: string
    }, HTMLElement>;
    'ion-menu-button' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement> & {
      'class' ?: string,
      'auto-hide' ?: string,
      'color' ?: string,
      'disabled' ?: string,
      'menu' ?: string,
      'mode' ?: string,
      'type' ?: string
    }, HTMLButtonElement>;
    'ion-menu-controller' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { class?: string }, HTMLElement>;
    'ion-modal' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement> & {
      'animated' ?: string,
      'backdrop-dismiss' ?: string,
      'class' ?: string,
      'component' ?: string,
      'css-class' ?: string,
      'keyboard-close' ?: string,
      'mode' ?: string,
      'show-backdrop' ?: string,
      'swipe-to-close' ?: string
    }, HTMLButtonElement>;
    'ion-searchbar' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'animated' ?: string,
      'autocomplete' ?: string,
      'autocorrect' ?: string,
      'cancel-button-icon' ?: string,
      'cancel-button-text' ?: string,
      'clear-icon' ?: string,
      'color' ?: string,
      'debounce' ?: string,
      'disabled' ?: string,
      'enterkeyhint' ?: string,
      'inputmode' ?: string,
      'mode' ?: string,
      'placeholder' ?: string,
      'search-icon' ?: string,
      'show-cancel-button' ?: string,
      'show-clear-button' ?: string,
      'spellcheck' ?: string,
      'type' ?: string,
      'value' ?: string,
    }, HTMLElement>;
    'ion-segment'        : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'color' ?: string,
      'disabled' ?: string,
      'mode' ?: string,
      'scrollable' ?: string,
      'swipe-gesture' ?: string,
      'value' ?: string,
    }, HTMLElement>;
    'ion-segment-button' : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'disabled' ?: string,
      'layout' ?: string,
      'mode' ?: string,
      'type' ?: string,
      'value' ?: string
    }, HTMLElement>;
    'ion-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { children?: any }, HTMLElement>;
    'ion-slides': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'mode' ?: string,
      'options' ?: string,
      'pager' ?: string,
      'scrollbar' ?: string
    }, HTMLElement>;
    'ion-split-pane'     : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'content-id' ?: string,
      'disabled' ?: string,
      'when' ?: string
    }, HTMLElement>;
    'ion-title'          : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'color' ?: string,
      'size' ?: string,
      'title' ?: string
    }, HTMLElement>;
    'ion-toolbar'        : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'color' ?: string,
      'mode' ?: string
    }, HTMLElement>;
    // 'ion-select': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { when?: string }, HTMLInputElement>; // Web component extended from input
  }
}
// }
