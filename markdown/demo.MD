# 前端工程化 DEMO

## 文档

- [手把手带你入门前端工程化——超详细教程](https://juejin.im/post/6892003555818143752/)
- [ESlint + stylelint + VSCode 自动格式化代码(2020)](https://juejin.im/post/6892000216020189198)
- [名称](<路径(url)>)
  添加图片
  ![GitHub Logo](/images/logo.png)
  Format: ![Alt Text](url)

# blog

blog

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

2.换行： 在你想换行的地方加一个<br>就行.

3.强调：

_强调_ (示例：斜体)

_强调_ (示例：斜体)

**加重强调** (示例：粗体)

**加重强调** (示例：粗体)

**_特别强调_** (示例：粗斜体)

**_特别强调_** (示例：粗斜体)

4.代码:

```

    你的代码

```

5.圆点符(注意中间有一个空格)

- 第一条

- 第二条

- 第三条

1. 11
2. 22
3. 33
   - `a`:
     - `a.b`
   - `b`:
     - `b.a`
   - `c`:
     - `c.a`

6.缩进(行行缩进)

7.部分文字的高亮

例如：Thank `You` . Please `Call` Me `Coder`

> 宇宙
>
> > 太阳系
> >
> > > 地月系
> > >
> > > > 地球

8.链接

举个例子一目了然：

文字超链接:[百度](https://www.baidu.com)

图片超链接：![百度中的一张图片](https://www.baidu.com/...)

表格
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

<font color=#FF0000> 红色</font>
<font color=#DC143C> 红色</font>
<font color=#FFD700> 黄色</font>
<font color=#00FF00> 绿色</font>
<font color=#0000CD> 蓝色</font>
<font color=#FFA500> 橙色</font>

如果你想要给你的标题添加 id 或者 class，
请在标题最后添加 {#id .class1 .class2}。例如：

# 这个标题拥有 1 个 id {#my_id}

# 这个标题有 2 个 classes {.class1 .class2}

```javascript {highlight=[1-10,15,20-22]}
var a = 1;
```

- [ ] this is an incomplete item
      任务列表
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

上标
30^th^
下标
H~2~O

https://mp.weixin.qq.com/s/a9Cx2TOeA9jL2wo3KxGjcQ

这种代码的增删对比效果就是通过 diff 来做的，原始代码如下

```diff
// 数组去重
const unique = (arr)=>{
-  return Array.from(new Set(arr))
+  return [...new Set(arr)]
}
```

# git

第二步 将远程 master 分支 pull 本地
git pull origin master //如果本地如果有修改，是拉不下来的
备注：git pull origin master 相当于 git fetch + git merge //在实际使用中，git fetch 更安全一些，如下：
git fetch origin master //从远程获取最新版本到本地
git log -p master…origin/master //比较本地的 master 分支和 origin/master 分支的差别（这里没有差别）
git merge origin/master //合并
也可以使用这种方法：
git checkout master //切换到远程 master 分支
git pull; //将远程 master 分支合并到本地 master 分支
git checkout wangqing //切换到本地分支
git merge origin/master //合并

第三步 解决冲突
git stash list // 查看栈区内容
git stash apply stash@{0} // 将栈区内容恢复到本地 git stash pop
假如有冲突：
git diff 文件路径
在本地解决冲突文件
git status

第四步 将本地分支 push 到 master
注：若本地代码还未开发好（代码有缺陷），则不要 push
git add 文件路径
git status
git commit –m “add some test + date ”
git push

## git 删除本地分支

1 先切换到别的分支: git checkout dev_20180927

2 删除本地分支： git branch -d dev_20181018

3 如果删除不了可以强制删除，git branch -D dev_20181018

## 第一次上库

git branch --set-upstream-to=<remote>/<branch> master
git branch --set-upstream-to=origin/master master

# git 的 tag 功能

git 下打标签其实有 2 种情况

轻量级的：它其实是一个独立的分支,或者说是一个不可变的分支.指向特定提交对象的引用
带附注的：实际上是存储在仓库中的一个独立对象，它有自身的校验和信息，包含着标签的名字，标签说明，标签本身也允许使用 GNU Privacy Guard (GPG) 来签署或验证,电子邮件地址和日期，一般我们都建议使用含附注型的标签，以便保留相关信息
所以我们推荐使用第二种标签形式

创建 tag
git tag -a V1.2 -m 'release 1.2'
上面的命令我们成功创建了本地一个版本 V1.2 ,并且添加了附注信息 'release 1.2'

查看 tag
git tag

要显示附注信息,我们需要用 show 指令来查看
git show V1.2
但是目前这个标签仅仅是提交到了本地 git 仓库.如何同步到远程代码库
git push origin --tags

如果刚刚同步上去,你缺发现一个致命 bug ,需要重新打版本,现在还为时不晚.
git tag -d V1.2
到这一步我们只是删除了本地 V1.2 的版本,可是线上 V1.2 的版本还是存在,如何办?
这时我们可以推送的空的同名版本到线下,达到删除线上版本的目标:
git push origin :refs/tags/V1.2

如何获取远程版本?
git fetch origin tag V1.2
这样我们可以精准拉取指定的某一个版本.适用于运维同学部署指定版本.

# 上库报错

git config --global --unset http.proxy
git config --global --unset https.proxy

# 获取字符串的 ASCII 编码

str.charCodeAt(i)

# vscode 快捷键

command + p -> 转至文件
command + \ -> 新打开一个编辑区（这时候聚焦在新的编辑区上）
command + 1 -> 切换到编辑区 1
command + 2 -> 切换到编辑区 2

## markdown config

markdown all in one
markdoen image
markdown preview enhanced
