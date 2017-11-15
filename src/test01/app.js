export const test01 = {
    template: require('./app.html'),
    controller($scope,buttonService,$log) {
       $scope.locale='en';
       setModelData();
       
       $scope.setLocale=function(){
      
            setModelData();
       }

       function setModelData(){
            buttonService.getButtonModel().then(function(response){
            $scope.button_model=response.data[0][$scope.locale];
        });
      }

    }
};
