export class buttonService{

    constructor($http,$location){

        'ngInject';
        this._http =$http;
        this._location = $location;
     }

    getButtonModel(){
        return this._http.get(this._location.path()+'/data.json');
    }  

}