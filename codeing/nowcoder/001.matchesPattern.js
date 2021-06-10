function matchesPattern(str) {
  return /^\d{3}-\d{3}-\d{4}$/.test(str);
  //^表示匹配输入字符串的开始位置，$表示匹配输入字符串的结束位置
  //不加的话会通过如下字符串："a800-555-1212b"
}
