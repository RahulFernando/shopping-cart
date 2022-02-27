interface IPurchase {
  id?: Number;
  userId: Number;
  items: Array<IProductCart>;
  total: Number;
}
