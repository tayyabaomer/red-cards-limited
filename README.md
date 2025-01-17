
<!-- This link only load bootstrap 12 column layout system -->

# Why we don't use bootstrap.min.css link instead we use bootstrap-grid.min.css
In this website we are applying our own custom css as we prefer to use our css to flexibly apply any kind of style, as we are not using bootstrap for styling instead using to make website responive with its 12 column layout system including its property, container, row, col.

* for styling we use our custom css
* for responsive we use bootstrap 12 cloumn system

-------------------

# Bootstrap Link

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap-grid.min.css" integrity="sha512-i1b/nzkVo97VN5WbEtaPebBG8REvjWeqNclJ6AItj7msdVcaveKrlIIByDpvjk5nwHjXkIqGZscVxOrTb9tsMA==" crossorigin="anonymous" referrerpolicy="no-referrer" />









# Installing Webfonts
Follow these simple Steps.

## 1.
Put `general-sans/` Folder into a Folder called `fonts/`.

## 2.
Put `general-sans.css` into your `css/` Folder.

## 3. (Optional)
You may adapt the `url('path')` in `general-sans.css` depends on your Website Filesystem.

## 4.
Import `general-sans.css` at the top of your main Stylesheet.

```
@import url('general-sans.css');
```

## 5.


```
font-family: 'GeneralSans-Variable';
font-family: 'GeneralSans-VariableItalic';
font-family: 'GeneralSans-Extralight';
font-family: 'GeneralSans-ExtralightItalic';
font-family: 'GeneralSans-Light';
font-family: 'GeneralSans-LightItalic';
font-family: 'GeneralSans-Regular';
font-family: 'GeneralSans-Italic';
font-family: 'GeneralSans-Medium';
font-family: 'GeneralSans-MediumItalic';
font-family: 'GeneralSans-Semibold';
font-family: 'GeneralSans-SemiboldItalic';
font-family: 'GeneralSans-Bold';
font-family: 'GeneralSans-BoldItalic';
```

