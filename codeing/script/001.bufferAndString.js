// node 环境下 Buffer 与string的转化
export default bufferToString= (buffData,rule) =>{
  // Buffer ->String
return buffData.toString(rule||"utf-8");
}
export default stringToBuffer =(str,rule) =>{
  // String->Buffer
  return Buffer.from(str, rule||"utf-8");
}