## 示例

在这里添加该组件的基础文档示例。

每个示例以`<div class="m-example"></div>`开头，后面添加相应的代码段。支持的代码段有：
- `css`，会以`<style>`包裹css代码的形式添加到文档中；
- `xml`，表示Regular模板，如果没有js代码段，会自动创建一个component对象，$inject到`.m-example`中；
- `javascript`，添加js代码，请自行声明一个component对象。

### 基本形式

<div class="m-example"></div>

```xml
<carousel />
```

### Message属性

<div class="m-example"></div>

```xml
<carousel message="Test" />
```

### 只读和禁用

<div class="m-example"></div>

```xml
<div class="g-row">
    <div class="g-col g-col-6"><carousel readonly /></div>
    <div class="g-col g-col-6"><carousel disabled /></div>
</div>
```

## 案例

在这里添加该组件的高级案例。

### 高级技巧

<div class="m-example"></div>

```xml
<carousel />
```
