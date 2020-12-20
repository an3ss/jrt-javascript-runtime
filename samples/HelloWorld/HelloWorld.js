
class HelloWorld extends jrt.App {
  /**
    * This app just shows a message when the constructor is called.
    */
   constructor() {
      super();

      jrt.SystemDialogBox.alert("Hello, world!");
   }
}
