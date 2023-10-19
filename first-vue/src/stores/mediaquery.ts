let x = window.matchMedia("(max-width: 1025px)");
checkWidth(x); // Call listener function at run time
x.addListener(checkWidth); // Attach listener function on state changes


function checkWidth(x:any){
    let desktopView;
    
    if (!x.matches) {
        desktopView = true;
      } else {
        desktopView = false;
      }};
      
export default {
   desktopView : x.matches
   
  };


    



