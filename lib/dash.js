/**
 * TODO
 */
 function dashPostprocessor () {
   this.process((doc, out) => {
     console.log('dash-dash process', doc.getAttribute('dash-dash'), '!!!');

     if (doc.getAttribute('dash-dash')) {
        doc.setAttribute('dash-kk', '--');
       console.log('dash-kk added', doc.getAttribute('dash-kk'), '!!!');
     }
     return out
   })
 }
 
 function register (registry) {
    console.log('dash-dash registered');

   registry.postprocessor(dashPostprocessor)
 }
 
 module.exports.register = register