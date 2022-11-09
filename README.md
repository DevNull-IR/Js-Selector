# Js Selector

Select is beautiful :))


Version: `1.1`

Fixed all bugs

## use:

```html
<script src="/JsSelector.js"></script>
```

OR 

```html
<script src="https://github.com/DevNull-IR/Js-Selector"></script>
```

## Using :)

```js
let Selector = new JsSelector(Selecting);
```

Replace Selecting by your selector (class=., id=#, tagName, [Attribute])(For example Css Code)


set Event for class's and other's
```js
let Selector = new JsSelector(".my_classes");
Selector.addEventListener("click", function (){
    alert("This is a test!");
});
```

add, remove and toggle class: 

Add Class:
```js
let Selector = new JsSelector(".my_classes");
Selector.AddClass("class_name");
```


Remove Class:
```js
let Selector = new JsSelector(".my_classes");
Selector.RemoveClass("class_name");
```

Toggle Class:
```js
let Selector = new JsSelector(".my_classes");
Selector.ToggleClass("class_name");
```
add, remove and toggle id: 

Add Id:
```js
let Selector = new JsSelector(".my_classes");
Selector.AddId("id_name");
```


Remove Class:
```js
let Selector = new JsSelector(".my_classes");
Selector.RemoveId("id_name");
```

Toggle Class:
```js
let Selector = new JsSelector(".my_classes");
Selector.RemoveId("id_name");
```


add Css Code in Element('s) Selected: 

```js
let Selector = new JsSelector(".my_classes");
Selector.setStyle("color: red", "background-color: #fff", "font-size: 12px");
```

## Click
Click:
```js

let Selector = new JsSelector(".my_classes");


Selector.Onclick(function (){
    console.log("This test");
});
```

Click and get events:

```js

let Selector = new JsSelector(".my_classes");


Selector.Onclick(function (){
    console.log(Selector.event);
});
```

Click and get Attribute:

```js

let Selector = new JsSelector(".my_classes");


Selector.Onclick(function (){
    console.log(Selector.Attributes);
}, "Attributes1", "Attributes2");
```


### setAttributes

```js

let Selector = new JsSelector(".my_classes");


Selector.setAttribute("name", "value");
```

