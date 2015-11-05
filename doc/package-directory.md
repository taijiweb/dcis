# Domcom package directory hierarchy

  Below is the directory hierarchy of domcom-isomorphic package. They are ordered by their importance, the more important folders and files are put in the front.

  The folder domcom-isomorphic/src/ are not expanded, they are just the coffee-script files to generated the javascript files in domcom-isomorphic/lib/.

  The folders domcom-isomorphic/node_modules/ are not expanded, because they are public libraries folder.

    domcom    ...................................  // the web framework to provide dom component
    |- src/   ...................................  // the coffee-script source code folder
    |  |
    |- doc    ...................................   // document folder
    |  |- api-referenc  .........................   // API references
    |  |- package-directory.md   ................   // package directory hierachy
    |  \- Chinese    ............................   // Chinese document
    |     |- README.CN.md    .......................// README for github and npm, in Chinese
    |     |- 介绍和辅导教程.md    ................. // introduction and tutorial (Chinese)
    |     |- 概念和原理.md  .....................   // Concepts and theory (Chinese)
    |     |- API参考.md  ........................   // API references (Chinese)
    |     |- 目录结构.md  .......................   // package directory hierachy (Chinese)
    |     |- 文件夹和模块介绍.md  ...............   // introduction to folder and module (Chinese)
    |     |- 速查表.md  .........................   // cheatsheet (Chinese)
    |     |- 常问问题.md  .......................   // frequently asked questions (Chinese)
    |
    |- test/    .................................   // test folder
    |  |- mocha/    ..............................  // mocha test coffee-script folder
    |  |  |- test-accordion.coffee    ...........   // tests for accordion component
    |  |  |- test-base-component.coffee    ......   // tests for base component
    |  |  |- test-component.coffee    ...........   // tests for component
    |  |  |- test-component-event.coffee    .....   // tests for component, aka Component.on, Component.off, Component.emit
    |  |  |- test-for-demo.coffeev    ...........   // tests for some content in demo, including todoMVC, for debugging the demos
    |  |  |- test-dc.coffee    ..................   // tests for utilities which are direclty hooked on dc
    |  |  |- test-flow.coffee    ................   // tests for reactive functions in flow/
    |  |  |- test-event.coffee    ...............   // tests for event on Tag component
    |  |  |- test-if-case-func.coffee    ........   // tests for If, Case and Func component
    |  |  |- test-list-each.coffee    ...........   // tests for List, Each component
    |  |  |- test-directive.coffee    ...........   // tests for the directives
    |  |  |- test-property.coffee    ............   // tests for properties of Tag component
    |  |  |- test-ref-clone.coffee    ...........   // tests for references and clone to component
    |  |  |- test-route.coffee    ...............   // tests for Route component
    |  |  |- test-toString.coffee    ............   // tests toString of component classes
    |  |  |- test-util.coffee    ................   // tests for dc/util module
    |  |  |- helper.coffee    ...................   // some helper functions for testing
    |  |  \- index.coffee    ....................   // the index file for all tests, used in mocha-runner.html and mocha-runner-dist.html
    |  |
    |- demo/    .................................   // demo folder
    |  |- todomvc/    ...........................   // todoMVC sample folder
    |  |  |- index.html    ......................   // todoMVC html page for webpack-server
    |  |  |- index-dist.html    .................   // todoMVC html page for distribution
    |  |  |- learn.json    ......................   // the learn.json file need by todoMVC site
    |  |  \- todomvc.coffee    ..................   // the all code for todoMVC app
    |  |
    |  |- app.css    ............................   // css for demo, used in index.html
    |  |- demo-accordion.coffee    ..............   // demo for accordion
    |  |- demo-auto-width-edit.coffee    ........   // demo for automatic width <input, type="text"> component
    |  |- demo-builtins.coffee    ...............   // demo for some builtins
    |  |- demo-controls.coffee    ...............   // demo for some controls
    |  |- demo-counter.coffee    ................   // demo for a simple counter
    |  |- demo-dialog.coffee    .................   // demo for a simple dialog
    |  |- demo-each.coffee    ...................   // demo for some each components
    |  |- demo-event.coffee    ..................   // demo for Tag event
    |  |- demo-if-component.coffee    ...........   // demo for If component
    |  |- demo-mount-unmount.coffee    ..........   // demofor mount/unmount component
    |  |- demo-show-hide.coffee    ..............   // demo for $show / $hide directives
    |  |- demo-splitter.coffee    ...............   // demo for $splitter directive
    |  |- demo-sum.coffee    ....................   // demo for sum
    |  |- demo-switch-1-2-3-4.coffee    .........   // demo for switch 1 2 3 4
    |  |- demo-text-model.coffee    .............   // demo text input with $model directive
    |  |- index.coffee    .......................   // the index file to start all demos
    |  |- index.html    .........................   // index.html for the demo, using webpack-hot-server
    |  \- index-dist.html    ....................   // index.html for the demo, using the code in dist/ folder
    |
    |- lib/    ..................................  // generated javascript files from domcom/src/ coffee-script files
    |
    |- README.md    .............................  // README for github and npm
    |- LICENSE    ...............................  // MIT LICENSE of domcom
    |- gulpfile.js    ...........................  // gulpfile, just require the gulpfile.coffee
    |- gulpfile.coffee    .......................  // gulpfile in coffee-script
    |- package.json     .........................  // node_modules package json file for npm
    |- .gitattribute     ........................  // .gitattribute for git
    |- .gitignore     ...........................  // .gitignore for git, ignored files and folder
    |
    |- node_modules/    .........................  // node modules folder for npm package.json

