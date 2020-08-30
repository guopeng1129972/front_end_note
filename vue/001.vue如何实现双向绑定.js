let obj = {};
Object.defineProperty(obj, 'title', {
  set: function (val) {
    console.log(val)
    this._title = "hello" + val
  },
  get:function(){
    return this._title
  }
})

title='world'
console.log(title)
//有问题 下来改 例子没跑下来