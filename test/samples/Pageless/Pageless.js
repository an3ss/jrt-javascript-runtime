/**
 * App with no page class. The BODY element represents the app's only page.
 */
class Pageless extends jrt.App {

   /**
    * @override
    */
   constructor() {
      super();
      
      jrt.DialogBox.alert("Hello, world!");
   }
}
