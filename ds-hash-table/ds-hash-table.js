
var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      _bocket:[],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        var index=hashFn(key, max);
          this._bocket=[];
          var found=false;
        //your code is here
        if(!this._storage[index]){
          this._storage[index]=this._bocket;
          this._storage[index].push([key,value]);

          //this._storage[index] =this._bocket[index];// value;
        }
        else{
          for (var i = this._storage[index].length - 1; i >= 0; i--) {
           if(this._storage[index][i][0] === key){
            this._storage[index][i][0]=key;
            this._storage[index][i][1]=value;
            found=true;
           }
          }
          if (!found) {
            this._storage[index].push([key,value]); 
             }
        }
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};

