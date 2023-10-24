const menu = doccument.queryselectoe('.menu')
const menulist = doccument.queryselector('nav u1')
menu.addeventlisterner('cliclk',()=>{
    menulist.classlist.toggle('showmenu')
})

