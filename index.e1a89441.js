window.onload=function(){var n,e=0,t=0,c=document.getElementById("secondes"),i=document.getElementById("minutes"),o=this.document.getElementById("start"),r=this.document.getElementById("stop"),l=this.document.getElementById("reset");function d(){++t<=9&&(c.innerHTML="0"+t),t>9&&(c.innerHTML=t),t>59&&(e++,i.innerHTML="0"+e,t=0,c.innerHTML="0"+t),e>9&&(i.innerHTML=e)}o.onclick=function(){clearInterval(n),n=setInterval(d,1e3)},r.onclick=function(){clearInterval(n)},l.onclick=function(){clearInterval(n),t="00",e="00",c.innerHTML=t,i.innerHTML=e}};
//# sourceMappingURL=index.e1a89441.js.map
