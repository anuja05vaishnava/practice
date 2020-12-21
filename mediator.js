var employee = (function(){


    var details = {};

    
    var put = function( detail, fn ){

        if ( !details[detail] ){ 
          details[detail] = [];
        }

        details[detail].push( { context: this, callback: fn } );

        return this;
    };

   
    var get = function( detail ){

        var args;

        if ( !details[detail] ){
          return false;
        } 

        args = Array.prototype.slice.call( arguments, 1 );
        for ( var i = 0, l = details[detail].length; i < l; i++ ) {

            var subscription = details[detail][i];
            subscription.callback.apply( subscription.context, args );
        }
        return this;
    };

    return {
        get: get,
        put: put,
        installTo: function( obj ){
            obj.put = put;
            obj.get = get;
        }
    };

}());
