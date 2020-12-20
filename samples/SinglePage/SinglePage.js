/**
 * Single page using BODY element.
 */
class SinglePage extends jrt.Page {

   /**
    * @override
    */
   requested(req) {
      jrt.SystemDialogBox.alert("This is a single-page application.");
   }
}
