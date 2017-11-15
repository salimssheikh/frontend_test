export const equalHeight = ($document,$log,$timeout)=>{

    return{
        restrict : 'C',
        compile : function(tElem,attrs){

                  return function(scope,elem,attrs){
                  $timeout(function () {
                   var max = 0;
                   var xy = angular.element($document.find("button"));

                   for (var index = 0; index < xy.length; index++) {
                      var element = xy[index];
                      if(element.offsetHeight > max){
                          max = element.offsetHeight
                      }else{
                          max = max;
                      }
                          
                  }
                    xy.css("height",max+"px");
 
                   });  
                
                }
        }
    }
}