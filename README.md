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

#### Really, classes for every property:value combo?!

**Disclaimer:** It's highly unlikely you'll use ALL of these classes. Feel free to slim it down as needed. I've included [all emmet has](http://docs.emmet.io/cheat-sheet/) (as far as CSS goes) to get you started.

## Why use utility classes?

#### Class names should communicate styles first, semantics second

As a frontend developer, when you go to edit code, you have to figure out what classes are doing what. Instead of inspecting in a developer tool or searching through stylesheets for a classname, utility classes communicate exactly what is going on without you having to search for it.

Semantic classnames don't communicate styles so you'll still have to go searching for what exactly the styles are for that class. 

Take [Bootstrap's](http://getbootstrap.com/) `.hide` class which is simply `.hide { display: none !important; }`. With a class like `.d-n`, you know _exactly_ what is happening (with less typing if that matters) than the slightly more vague `.hide` class. Most of us know it because we're familiar with Bootstrap, but emmet's abbreviations are much more direct.

#### Don't overdo it

If you find yourself using maybe more than 3 utility classes on one element, you may consider going back to the old way of more generic classnames

## Add your own custom emmet-esque classes!

Using emmet, you can also do things like this:

```
m0[tab] → margin: 0;
m20[tab] → margin: 20px;
m-10[tab] → margin: -10px;
m10-a--5[tab] → margin: 10px auto -5px;
```

Feel free to add your own emmet-esque classes to do the same. For example, I've added the following additional classes that I thought might be useful in `_custom.less`

```
.m0-a { margin: 0 auto; }
.m0   { margin: 0; }
.mt0  { margin-top: 0; }
.mr0  { margin-right: 0; }
.mb0  { margin-bottom: 0; }
.ml0  { margin-left: 0; }
.p0   { padding: 0; }
.pt0  { padding-top: 0; }
.pr0  { padding-right: 0; }
.pb0  { padding-bottom: 0; }
.pl0  { padding-left: 0; }
```

#### Don't forget to compile

```bash
$ gulp less
```

Running this will compile your less into two files, a minified version and a non-minified version.

[1]: http://emmet.io/