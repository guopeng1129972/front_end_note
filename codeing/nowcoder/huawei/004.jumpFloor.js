function jumpFloor(number) {
  // write code here
  if (number <= 1) return 1;
  return jumpFloor(number - 1) + jumpFloor(number - 2);
}
module.exports = {
  jumpFloor: jumpFloor,
};
