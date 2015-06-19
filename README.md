# emmet css

A boilerplate utility stylesheet using [emmet][1] abbreviations as classnames.

```
// emmet abbreviation
d:n → display: none;
// CSS class (all `:` are replaced with `-`) 
.d-n { display: none; }
```

Currently using emmet 1.3.1. View [emmet docs](http://docs.emmet.io/).

## Purpose
To have a set of abbreviated utility classes for quick, easy, and communicative styling with classnames. Thanks to [emmet][1], we have a standardized set of abbreviations for every css property and value known to man (ok, maybe not 100%, but close).

## Really, one CSS class for every property/value combo??

**Disclaimer:** It's highly unlikely you'll use ALL of these classes. Feel free to slim it down as needed. I've included [all emmet has](http://docs.emmet.io/cheat-sheet/) (as far as CSS goes) as a starting point.

## Why use utility classes?

**Disclaimer:** Personal opinions below:

### 1. Class names should communicate styles first, semantics second

As a frontend developer, when you go to edit code, you have to figure out what classes are doing what. Instead of inspecting in a developer tool or searching through stylesheets for a classname, utility classes communicate exactly what is going on without you having to search for it.

Semantic classnames don't communicate styles so you'll still have to go searching for what exactly the styles are for that class. 

Take [Bootstrap's](http://getbootstrap.com/) `.hide` class which is simply `.hide { display: none !important; }`. With a class like `.d-n`, you know _exactly_ what is happening (with less typing if that matters) than the slightly more vague `.hide`.

### 2. Don't overdo it

If you find yourself using maybe more than 3 utility classes on one element, consider using a more generic (typical) classname.

## Emmet Extended!

Using emmet, you can do things like this:

```
m0[tab] → margin: 0;
m20[tab] → margin: 20px;
m-10[tab] → margin: -10px;
m10-a--5[tab] → margin: 10px auto -5px;
```

Feel free to add your own emmet-like classes to do the same. For example, I've added the following additional classes that I thought might be useful in `_custom.less`

```
.m0-a { margin: 0 auto; }
```

### Don't forget to compile

```bash
$ gulp less
```

Running this will compile your less into two files, a minified version and a non-minified version.

[1]: http://emmet.io/