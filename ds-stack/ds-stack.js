var Stack = function() {
    this._storage =[];
    this.add = function(value){
      this._storage.push(value);
    };
    this.remove = function() {
      if (this._storage.length-1) {
      	var removed=this._storage[this._storage.length-1];
      this._storage.splice(this._storage.length-1,1);
      return removed;
      }
      else{
      	return null;
      }
    };
  };