
### 下载依赖
```
npm i vue-common-directive
```


#### 批量注册指令
```
import Vue from 'vue'

import * as directives from 'vue-common-directive'

Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})
```

####  单独引用

```
js:
import { copy } from 'vue-common-directive'
vue.directive('copy', copy)

html:
<button v-copy="copyText">复制</button>
```

directive list
 - backtop 返回顶部

      参数 id： 给需要回到顶部的元素添加的id 可选
      offset： 偏移距离为 height 时显示指令绑定的元素 可选
   ```
   <div  v-backtop:app="400"> 回到顶部 </div>
   <div  v-backtop> 回到顶部 </div>
   ```
 - clickOut 判断为点击到元素外
 - ellipsis 文字超出省略  参数：width
    ```
    <div v-ellipsis:100> 需要省略的文字需要省略的文字需要省略的文字需要省略的文字</div>
    ```
 - resize 应元素宽高改变时执行的方法

 ```
  <div v-resize="resize"></div>
 ```
 - scrollPop 元素展示时 固定html滚动  只有当前弹窗可滚动
 - throttle  函数节流指令
 ```
<button v-throttle="{fn: throttle,time:3000}">throttle节流</button>
 ```
 - copy 复制文本 参数：需要复制的文本变量
 - longpress 长按2s  参数：长按两秒执行的函数
 - debounce 防抖1s 参数：Function
 - LazyLoad 延迟加载 参数：图片的src地址
 - waterMarker 水印 ` v-waterMarker="{text:'测试',textColor:'rgba(180, 180, 180, 0.5), font: ''}"`
- draggable 可视区域拖拽
  