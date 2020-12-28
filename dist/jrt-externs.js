/** @abstract @implements {jrt.Target} */
jrt.Action = class extends jrt.Ajax {

   /**
    * @protected
    * @param {string} id
    */
   constructor(id) {
      /** @type {boolean} */
      this.running;

      /** @type {*} */
      this.result;
   }

   /**
    * @final
    * @protected
    * @param {*=} result
    * @return {boolean}
    */
   finish(result) {}
};
/** @abstract */
jrt.Ajax = class {

   constructor() {
      /** @protected @type {!jrt.App} */
      this.app;
   }

   /**
    * @param {string} filename
    * @param {!HTMLElement} elem
    * @return {boolean}
    */
   static include(filename, elem) {}

   /**
    * @param {string} filename
    * @param {boolean=} allowComments
    * @return {*}
    */
   static loadJsonFile(filename, allowComments) {}

   /**
    * @final
    * @protected
    * @param {!jrt.AjaxRequest} req
    */
   sendRequest(req) {}

   /**
    * @protected
    * @param {!jrt.AjaxRequest} req
    * @param {string} status
    * @param {!Object|string|!Document|!ArrayBuffer|!Blob|null} response
    */
   processResponse(req, status, response) {}
};
/** @record */
jrt.AjaxRequest = class {

   constructor() {
      /** @type {string} */
      this.baseUrl;

      /** @type {string|undefined} */
      this.servicePath;

      /** @type {string|undefined} */
      this.serviceName;

      /** @type {string|undefined} */
      this.method;

      /** @type {boolean|undefined} */
      this.safe;

      /** @type {!Object<!jrt.AjaxRequestValue>|undefined} */
      this.params;

      /** @type {string|undefined} */
      this.responseType;

      /** @type {boolean|undefined} */
      this.background;

      /** @type {number|undefined} */
      this.timeout;

      /** @type {!XMLHttpRequest|undefined} */
      this.xhr;
   }
};

jrt.AlertBox = class extends jrt.SystemDialogBox {
};

jrt.App = class extends jrt.Block {

   /**
    * @final
    * @return {!jrt.App}
    */
   static getInstance() {}

   /**
    * @protected
    * @param {?string=} version The app's version string.
    * @param {?boolean=} enableHistory Pass true to enable the browser's URL history.
    */
   constructor(version, enableHistory) {
      /** @const {string} */
      this.version;

      /** @type {string} */
      this.mainPageId;

      /** @type {!jrt.Page} */
      this.currentPage;

      /** @type {!jrt.TargetView} */
      this.currentView;
   }

   /**
    * @final
    * @return {?jrt.LocaleBundle}
    */
   getLocale() {}

   /**
    * @protected
    * @param {string} id
    * @return {?string}
    */
   getClassNameForTargetId(id, element) {}

   /**
    * @final
    * @param {string} id
    * @return {!jrt.Page}
    */
   getPage(id) {}

   /**
    * @final
    * @param {string} id
    * @return {!jrt.Dialog}
    */
   getDialog(id) {}

   /**
    * @final
    * @param {string} id
    * @return {!jrt.Action}
    */
   getAction(id) {}

   /**
    * @final
    * @param {string=} id
    */
   clearViewCache(id) {}

   /**
    * @protected
    */
   paused() {}

   /**
    * @protected
    */
   resumed() {}

   /**
    * @protected
    */
   closed() {}

   /**
    * @protected
    * @param {!Error} err
    */
   error(err) {}

   /**
    * @protected
    * @param {!jrt.AppRequest} req
    */
   pageRequested(req) {}

   /**
    * @protected
    * @param {!jrt.AppRequest} req
    */
   dialogRequested(req) {}

   /**
    * @protected
    * @param {!jrt.Modal} dialog
    */
   dialogClosed(dialog) {}

   /**
    * @protected
    * @param {!jrt.Action} action
    */
   actionFinished(action) {}

   /**
    * @final
    * @param {string} pageId
    * @param {?Object<!jrt.FormValue>=} params
    * @param {string=} method
    */
   navigateTo(pageId, params, method) {}

   /**
    * @final
    * @param {boolean=} dismissDialog
    */
   navigateBack(dismissDialog) {}

   /**
    * @final
    * @param {string} dialogId
    * @param {?Object<!jrt.FormValue>=} params
    */
   openDialog(dialogId, params) {}

   /**
    * @final
    * @param {string} actionId
    * @param {?Object<!jrt.FormValue>=} params
    */
   execute(actionId, params) {}

   /**
    * @final
    */
   wait() {}

   /**
    * @final
    */
   endWait() {}
};
/** @record */
jrt.AppRequest = class {

   constructor() {
      /** @type {string} */
      this.type;

      /** @type {?HTMLElement} */
      this.sourceElement;

      /** @type {?jrt.TargetView} */
      this.sourceView;

      /** @type {?jrt.Target} */
      this.source;

      /** @type {!jrt.Target} */
      this.target;

      /** @type {!Object<!jrt.FormValue>} */
      this.params;
   }
};

jrt.Block = class extends jrt.Element {

   /**
    * @param {string} selector
    * @param {!HTMLElement|!DocumentFragment=} baseElement
    * @return {?HTMLElement}
    */
   query(selector, baseElement) {}

   /**
    * @param {string} selector
    * @param {!HTMLElement|!DocumentFragment=} baseElement
    * @return {!NodeList<!HTMLElement>}
    */
   queryAll(selector, baseElement) {}
};

jrt.ConfirmBox = class extends jrt.SystemDialogBox {
};
/** @implements {jrt.TargetView} */
jrt.Dialog = class extends jrt.Modal {

   /**
    * @protected
    * @param {!HTMLDialogElement} element
    * @param {string=} mode
    */
   constructor(element, mode) {
      /** @type {string} */
      this.mode;
   }

   /**
    * @final
    * @param {?Object<!jrt.FormValue>=} params
    * @param {string=} method
    */
   open(params, method) {}
};

jrt.DialogBox = class extends jrt.Modal {
}

jrt.Element = class extends jrt.Ajax {

   /**
    * @param {string} id
    * @return {?HTMLElement}
    */
   static get(id) {}

   /**
    * @param {string|!Array<string|!Node>} html
    * @return {!DocumentFragment}
    */
   static createFragment(html) {}

   /**
    * @param {string} tagName
    * @param {string|!Node|!Array<string|!Node>|null=} content
    * @param {?string=} className
    * @param {?string=} title
    * @return {!HTMLElement}
    */
   static create(tagName, content, className, title) {}

   /**
    * @param {?string=} href
    * @param {string|!Node|!Array<string|!Node>|null=} content
    * @param {?string=} className
    * @param {?string=} title
    * @return {!HTMLAnchorElement}
    */
   static a(href, content, className, title) {}

   /**
    * @param {?string} htmlFor
    * @param {string|!Node|!Array<string|!Node>|null=} content
    * @param {?string=} className
    * @param {?string=} title
    * @return {!HTMLLabelElement}
    */
   static label(htmlFor, content, className, title) {}

   /**
    * @param {string} type
    * @param {?string=} name
    * @param {string|number|null=} value
    * @param {?string=} className
    * @param {?string=} title
    * @return {!HTMLInputElement}
    */
   static input(type, name, value, className, title) {}

   /**
    * @param {?string=} name
    * @param {?string=} value
    * @param {number=} rows
    * @param {?string=} className
    * @param {?string=} title
    * @return {!HTMLTextAreaElement}
    */
   static textarea(name, value, rows, className, title) {}

   /**
    * @param {?string=} action
    * @param {string|!Node|!Array<string|!Node>|null=} content
    * @param {?string=} className
    * @param {?string=} title
    * @return {!HTMLButtonElement}
    */
    static button(action, content, className, title) {}

   /**
    * @param {string} name
    * @param {?string=} className
    * @param {?string=} title
    * @return {!HTMLSelectElement}
    */
   static select(name, className, title) {}

   /**
    * @param {string|number} value
    * @param {?string=} label
    * @param {?string=} className
    * @return {!HTMLOptionElement}
    */
   static option(value, label, className) {}

   /**
    * @protected
    * @param {!HTMLElement} element
    */
   constructor(element) {
      super();

      /** @const {!HTMLElement} */
      this.element;
   }

   /**
    * @final
    * @protected
    * @param {string} eventType
    * @param {?Element=} element
    * @param {?string=} label
    * @param {boolean=} useCapture
    */
   listenToEvent(eventType, element, label, useCapture) {}

   /**
    * @final
    * @protected
    * @param {string} eventType
    * @param {?Element=} element
    */
   ignoreEvent(eventType, element) {}

   /**
    * @protected
    * @param {!Event} e
    * @param {?string} label
    */
   handleEvent(e, label) {}
};

(jrt.Form = class extends jrt.Block {

   static initializer() {
      /** @type {boolean} */
      this.trimValues;
   }

   /**
    * @param {!jrt.FormControl|!HTMLOptionElement} elem
    * @return {string|number}
    */
   static getValue(elem) {}

   /**
    * @param {!jrt.FormControl|!RadioNodeList} elem
    * @return {?jrt.FormValue}
    */
   static getSubmitValue(elem) {}

   /**
    * @param {?HTMLFormElement} element
    */
   constructor(element) {
      /** @override @const {!HTMLFormElement} */
      this.element;
   }

   /**
    * @return {!Object<!jrt.FormValue>}
    */
   getValues() {}

   /**
    * @param {!Object<!jrt.FormValue>} values
    */
   setValues(values) {}

   /**
    * @param {string} name
    * @return {?jrt.FormControl|?RadioNodeList}
    */
   getControl(name) {}

   /**
    * @param {string} name
    * @return {?HTMLInputElement}
    */
   getInput(name) {}

   /**
    * @param {string} name
    * @return {?HTMLTextAreaElement}
    */
   getTextArea(name) {}

   /**
    * @param {string} name
    * @return {?RadioNodeList|?HTMLInputElement}
    */
   getRadioGroup(name) {}

   /**
    * @param {string} name
    * @return {?HTMLSelectElement}
    */
   getSelect(name) {}

   /**
    * @param {string} name
    * @return {?HTMLOutputElement}
    */
   getOutput(name) {}

   /**
    * @param {string} name
    * @return {?HTMLButtonElement}
    */
   getButton(name) {}

}).initializer();

jrt.HashUrl = class {

   /**
    * @param {string} hash
    * @return {?jrt.HashUrl}
    */
   static parse(hash) {}

   /**
    * @param {string} id
    * @param {?Object<!jrt.FormValue>=} params
    */
   constructor(id, params) {
      /** @type {string} */
      this.id;

      /** @type {!Object<!jrt.FormValue>} */
      this.params;
   }

   /**
    * @return {string}
    */
   format() {}
};

jrt.ImageBox = class extends jrt.SystemDialogBox {
};

(jrt.LocaleBundle = class {

   static initializer() {
      /** @type {!Array<string>} */
      this.supportedLanguages;

      /** @type {?string} */
      this.referenceLanguage;

      /** @type {string} */
      this.preferredLanguage;
   }

   /**
    * @param {?Array<string>=} supportedLanguages
    * @param {string=} referenceLanguage
    * @param {!Array<string>=} domains
    */
   static setConfiguration(supportedLanguages, referenceLanguage, domains) {}

   /**
    * @param {?string} lang
    * @return {!jrt.LocaleBundle}
    */
   static setBundle(lang) {}

   /**
    * @private
    * @param {?string} lang
    */
   constructor(lang) {
      /** @type {string} */
      this.lang;
   }

   /**
    * @param {string} text
    * @param {number|string|!Array<string>|null=} substitution
    * @param {string=} singularText
    * @return {string}
    */
   translate(text, substitution, singularText) {}

   /**
    * @param {string} msgid
    * @param {number|string|!Array<string>|null=} substitution
    * @param {string=} singularMsgid
    * @return {string}
    * @throws {!Error}
    */
   getString(msgid, substitution, singularMsgid) {}

   /**
    * @param {string} msgid
    * @return {?Array<string>}
    * @throws {!Error}
    */
   getStringArray(msgid) {}

}).initializer();

jrt.LocalStorage = class extends jrt.Serializable {

   /**
    * @param {boolean=} important
    * @return {!Array<string>}
    */
   static keys(important) {}

   /**
    * @param {string} key
    * @param {boolean=} decompress
    * @return {?string}
    */
   static getItem(key, decompress) {}

   /**
    * @param {string} key
    * @param {string} value
    * @param {boolean=} important
    * @param {boolean=} compress
    * @param {boolean=} makeRoom
    * @return {boolean}
    */
   static setItem(key, value, important, compress, makeRoom) {}

   /**
    * @param {string} key
    * @param {boolean=} decompress
    * @return {?Object}
    */
   static getObject(key, decompress) {}

   /**
    * @param {string} key
    * @param {!Object} obj
    * @param {boolean=} important
    * @param {boolean=} compress
    * @param {boolean=} makeRoom
    * @return {boolean}
    */
   static setObject(key, obj, important, compress, makeRoom) {}

   /**
    * @param {string} key The item's key.
    */
   static removeItem(key) {}

   /**
    * @param {boolean=} keepImportant
    */
   static clear(keepImportant) {}

   /**
    * @param {string} dataKey
    * @param {?Object=} properties
    * @param {boolean=} compressed
    */
   constructor(dataKey, properties, compressed) {
      /** @type {string} */
      this.dataKey;

      /** @type {boolean} */
      this.compressed;

      /** @protected @type {!jrt.App} */
      this.app;
   }

   /**
    * @final
    * @return {boolean}
    * @throws {!SyntaxError}
    */
   load() {}

   /**
    * @final
    * @param {boolean=} important
    */
   save(important) {}

   /**
    * @final
    */
   remove() {}

   /**
    * @protected
    * @param {!Object} storedData
    * @return {boolean}
    */
   import(storedData) {}

   /**
    * @protected
    * @return {?Object}
    */
   export() {}

   reset() {}

   /**
    * @return {boolean}
    */
   isEmpty() {}
};

jrt.LZW = class {

   /**
    * @param {string} str
    * @return {string}
    */
   static compress(str) {}

   /**
    * @param {string} str
    * @return {string}
    */
   static decompress(str) {}
};
/** @abstract */
jrt.Modal = class extends jrt.View {

   /**
    * @param {?jrt.DialogReturnValue=} returnValue
    * @return {boolean}
    */
   static close(returnValue) {}

   /**
    * @protected
    * @param {?HTMLDialogElement=} element
    */
   constructor(element) {
      /** @override @const {!HTMLDialogElement} */
      this.element;

      /** @type {!jrt.TargetView} */
      this.parent;

      /** @type {?jrt.DialogReturnValue} */
      this.returnValue;
   }

   show() {}

   /**
    * @param {?jrt.DialogReturnValue=} returnValue
    * @return {boolean}
    */
   close(returnValue) {}
};

const jrt = {};

/**
 * @typedef {!HTMLSelectElement|!HTMLInputElement|!HTMLTextAreaElement|!HTMLOutputElement|!HTMLButtonElement}
 */
jrt.FormControl;

/**
 * @typedef {string|number|boolean}
 */
jrt.FormValue;

/**
 * @typedef {string|number|boolean|!Object<string|number|boolean>|null}
 */
jrt.DialogReturnValue;

/**
 * @typedef {!jrt.FormValue|!Object<!jrt.AjaxRequestValue>|null}
 */
jrt.AjaxRequestValue;

/**
 * @typedef {!Object|string|!Document|!ArrayBuffer|!Blob}
 */
jrt.AjaxResponse;
/** @implements {jrt.TargetView} */
jrt.Page = class extends jrt.View {

   /**
    * @protected
    * @return {?string}
    */
   getParentId() {}
};

jrt.PromptBox = class extends jrt.SystemDialogBox {

   /**
    * @private
    */
   constructor() {
      /** @override @type {!jrt.Form} */
      this.form;

      /** @const {!HTMLInputElement|!HTMLTextAreaElement} */
      this.input;
   }
};

(jrt.Runtime = class {

   static initializer() {
      /** @const {string} */
      this.platform;

      /** @const {!URL} */
      this.location;

      /** @const {boolean} */
      this.isTouch;

      /** @const {boolean} */
      this.isLocal;

      /** @const {boolean} */
      this.isDevel;
   }

   /**
    * @return {?boolean}
    */
   static isOffline() {}

   /**
    * @throws {!jrt.JrtError}
    */
   static restart() {}

   /**
    * @throws {!jrt.Error}
    */
   static reload() {}

   static exit() {}

}).initializer();

/** @abstract */
jrt.Serializable = class {

   /**
    * @param {?Object=} properties
    */
   constructor(properties) {
      /** @protected @type {!jrt.App} */
      this.app;
   }

   /**
    * @return {!Object}
    */
   getProperties() {}

   /**
    * @param {!Object} properties
    */
   setProperties(properties) {}
};
/** @abstract */
(jrt.SystemDialogBox = class extends jrt.DialogBox {

   static initializer() {
      /**
       * @typedef {{
       *    title: (string|undefined),
       *    class: (string|undefined),
       *    showCloseButton: (boolean|undefined),
       *    translateButtons: (boolean|undefined),
       *    buttonTextOk: (string|undefined),
       *    buttonTextCancel: (string|undefined),
       *    buttonTextAlt: (string|undefined),
       *    autofocus: (string|undefined)
       * }}
       */
      jrt.SystemDialogBox.Options;
   }

   /**
    * @param {!jrt.SystemDialogBox.Options} options
    */
   static setDefaultOptions(options) {}

   /**
    * @param {string|!Array<string>} message
    * @param {?jrt.SystemDialogBox.Options=} options
    * @return {!jrt.AlertBox}
    */
   static alert(message, options) {}

   /**
    * @param {string|!Array<string>} message
    * @param {?jrt.SystemDialogBox.Options=} options
    * @return {!jrt.ConfirmBox}
    */
   static confirm(message, options) {}

   /**
    * @param {string|!Array<string>} message
    * @param {string=} value
    * @param {?jrt.SystemDialogBox.Options=} options
    * @return {!jrt.PromptBox}
    */
   static prompt(message, value, options) {}

   /**
    * @param {string} imgSrc
    * @param {?jrt.SystemDialogBox.Options=} options
    * @return {!jrt.SystemDialogBox}
    */
   static image(imgSrc, options) {}

}).initializer();
/** @interface */
jrt.Target = class {

   /**
    * @param {string} id
    */
   constructor(id) {
      /** @type {string} */
      this.id;

      /** @type {!jrt.AppRequest} */
      this.req;

      /** @type {?jrt.Target} */
      this.caller;
   }

   /**
    * @protected
    */
   requested() {}

   /**
    * @protected
    * @param {!jrt.Action} action
    */
   actionFinished(action) {}

   /**
    * @protected
    * @param {!jrt.Modal} dialog
    */
   dialogClosed(dialog) {}
};
/** @interface */
jrt.TargetView = class extends jrt.Target {
   /**
    * @protected
    */
   shown() {}

   /**
    * @protected
    */
   hidden() {}
};

jrt.Template = class {

   /**
    * @param {!HTMLTemplateElement} template
    * @param {!HTMLElement=} target
    * @throws {!jrt.Error}
    */
   constructor(template, target) {
      /** @type {!HTMLTemplateElement} */
      this.template;

      /** @type {!HTMLElement} */
      this.target;
   }

   /**
    * @return {!HTMLElement|!DocumentFragment}
    */
   clone() {}

   /**
    * @param {?HTMLElement|?DocumentFragment=} elem
    * @return {!HTMLElement|!DocumentFragment}
    * @throws {!jrt.Error}
    */
   prepend(elem) {}

   /**
    * @param {?HTMLElement|?DocumentFragment=} elem
    * @return {!HTMLElement|!DocumentFragment}
    * @throws {!jrt.Error}
    */
   append(elem) {}

   clear() {}
};
/** @abstract */
jrt.View = class extends jrt.Block {

   /**
    * @protected
    * @param {!HTMLElement} element
    */
   constructor(element) {
      /** @const {string} */
      this.id;

      /** @type {?jrt.Form} */
      this.form;
   }

   /**
    * @return {boolean}
    */
   isVisible() {}
};
