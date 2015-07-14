var invoice = function (oid) {

  this.oid = oid;
  this.number = "default value";

};

invoice.prototype = {

  get id () { return this._oid;},

  get number () { return this._number;},
  set number (value) { this._number = value; },

  get purchases () { return [new mod.purchase.purchase()]; }

};

invoice.new = function () {
  return new invoice(1);
};

module.exports = invoice;
