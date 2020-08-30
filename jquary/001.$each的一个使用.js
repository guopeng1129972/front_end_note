/* 就是一个数组赋值的操作，记录一下
返回了一组数据，需要给id下面的所有input赋值，用jquary
按照返回节点的最后一个字符串，赋值给第几个input */
let $ = require('jquery')
const show_detail = (number) => {
for(let i=0,len=number;i<len;i++){
  $.each(g_promag_info[i],(k,v)=>{
    $('#dome_id input').eq(k.substr(-1)).val(v)
  })
}
}