# tailwindcss 类名 {#getting-started}



## nth-child
使用类名 `[&>*:nth-child(n+2)]:border-t-[1px]` 控制子元素 出现多个时 除第一个 剩余元素增加顶部 border
```html
<div class="[&>*:nth-child(n+2)]:border-t-[1px]" >  // [!code ++]
    <div class="h-20">1</div>
    <div class="h-20">2</div>
    <div class="h-20">3</div>
</div>
```
