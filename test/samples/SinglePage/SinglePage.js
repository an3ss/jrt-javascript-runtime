/**
 * Single page using BODY element.
 */
class SinglePage extends jrt.Page {

   /**
    * @override
    */
   targetRequested(req) {
      jrt.DialogBox.alert("Hello, world!");
   }
}
