# 切换 root 用户

sudo su -

###网页上的小姑娘

```html
<div id="live2d-widget">
  <canvas
    id="live2dcanvas"
    width="300"
    height="600"
    style="position: fixed;opacity: 0.7;right: 0px;bottom: -20px;z-index: 99999;pointer-events: none;border: 1px dashed rgb(204, 204, 204);"
  ></canvas>
</div>
<script
  type="text/javascript"
  charset="utf-8"
  async=""
  src="https://cdn.jsdelivr.net/npm/live2d-widget@3.0.4/lib/L2Dwidget.0.min.js"
></script>
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/live2d-widget@3.0.4/lib/L2Dwidget.min.js?_=1557308476616"
></script>
<script type="text/javascript">
  L2Dwidget.init();
</script>
```

123.

```
mac上的 root 密码
root
```

101.201.102.176:22
ssh -p root@101.201.102.176:22
root
Cy199512.

丶新垣结衣
Cy199512.

添加用户：useradd -m -g 组 新建用户名  
注意：-m 自动建立用户家目录； -g 指定用户所在的组，否则会建立一个和用户名同名的组
[root@Server-n93yom ~]# useradd -m -g dev test1
[root@Server-n93yom ~]#

查询用户：在/etc/passwd 文件下存储的是用户的 list

修改和创建密码 passwd 用户名 如果不加用户名则默认修改当前登录者的密码
[root@Server-n93yom ~]# passwd test1
更多查看
https://www.cnblogs.com/guanbin-529/p/11227069.html
Guo112@qq.

##3、创建软链接，使 node 和 npm 命令全局有效。
通过创建软链接的方法，使得在任意目录下都可以直接使用 node 和 npm 命令：

ln -s /root/node-v6.9.5-linux-x64/bin/node /usr/local/bin/node
ln -s /root/node-v6.9.5-linux-x64/bin/npm /usr/local/bin/npm

ln -s /opt/node/bin/cnpm /usr/local/bin/cnpm
/sbin/iptables -I INPUT -p tcp --dport 3000 -j ACCEPT #开启 8888 端口

ln -s /usr/local/bin/node /usr/local/bin/node
ln -s /usr/local/bin/npm /usr/local/bin/npm
ln -s /usr/local/lib/node_modules/css /usr/local/bin/css
ln -s /usr/local/lib/node_modules/lint /usr/local/lib/node_modules/lint
ln -s /usr/local/lib/node_modules/ws /usr/local/bin/ws
ln -s /usr/local/lib/node_modules/express /usr/local/bin/express
ln -s /usr/local/lib/node_modules/mocha /usr/local/bin/mocha
ln -s /usr/local/lib/node_modules/webpack-dev-server /usr/local/lib/node_modules/webpack-dev-server
git clone https://github.com/guopeng1129972/animating-resume.git ##查看当前端口跟使用的程序
jobs -l

# jobs 命令只看当前终端生效的，关闭终端后，在另一个终端 jobs 已经无法看到后台跑得程序了，此时利用 ps（进程查看命令）

ps -ef  
ps -aux|grep chat.js

##npm 修改源 #获取原来的镜像地址
npm get registry
npm config set registry http://registry.npm.taobao.org/

###Linux 查看网络即时网速
sar -n DEV 1 100

1 代表一秒统计并显示一次
100 代表统计一百次
还可以使用 ntop 工具

.gitignore
.jshintrc
/blog
/blog/001
/dome
/dome/
/img

# 备注

#学号: G20200447050043 #姓名: 郭鹏 #班期: 5 #小组: 3 #作业&总结链接: https://github.com/guopeng1129972/Frontend-05-Template/tree/master/Week%2012

var selectorParts = selector.split(' ');
var exe=selector.match(/^[\#] [\.] [ ]$/);
let s2='HTTP/1.1 200 OK ';
s2.match(/(HTTP\/1.1) ([0-9]+) ([\S\s]+)/);
let selector ='#div .class div';
selector.match(/(^[#]+) (^[.]+) (^[ ]+)/);
RegExp.$0;
RegExp.$1;
RegExp.$2;

sudo spctl --master-disable

https://beian.miit.gov.cn/#
https://www.beian.miit.gov.cn/

文本解析

计算机是怎么产生随机数的？纯语言能写出来吗，还是有什么硬件的支持，这个随机数是真的随机的吗；

1.时间等 做种子（）

```js
//生成随机数
var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

我说这样 老板说不行

map()是同步的

## 任务 初始化文件

### .gitignore

.gitignore

```txt
*/**/.DS_Store
/.DS_Store
*/**/node_modules
```

### .jshintrc

.jshintrc

```json
{
  "esversion": 8
}
```

# mac 终端关机命令

- 1. 立即关机是
     sudo halt
     或者
     sudo shutdown -h now

- 2. 10 分钟后关机
     sudo shutdown -h +10

- 3. 晚上 8 点关机
     sudo shutdown -h 20:00

- 4. 立即重启
     sudo reboot
     或者
     sudo shutdown -r now

# n 安装 node 当前稳定版

n stable
node -v

# 后台运行程序

nohup ping www.ibm.com &

# sudo npm install -g @vue/cli 出错

是之前的 cli 包没删干净 删除 path 下的文件
➜ ~ sudo npm install -g @vue/cli
npm ERR! code ENOTEMPTY
npm ERR! syscall rename
npm ERR! path /usr/local/lib/node_modules/@vue/cli
npm ERR! dest /usr/local/lib/node_modules/@vue/.cli-pPsrUrBg
npm ERR! errno -66
npm ERR! ENOTEMPTY: directory not empty, rename '/usr/local/lib/node_modules/@vue/cli' -> '/usr/local/lib/node_modules/@vue/.cli-pPsrUrBg'
npm ERR! A complete log of this run can be found in:

# 显示系统隐藏文件

defaults write com.apple.finder AppleShowAllFiles -bool yes
删除'/usr/local/lib/node_modules/@vue/cli'该文件

### 我的三围

97
92
102

sudo spctl --master-disable

# git解决443上库不了
git config --global http.sslBackend "openssl"