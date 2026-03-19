javascript:(function(){
if(document.getElementById('gs-live-counter')) return;

let d=document.createElement('div');
d.id='gs-live-counter';

Object.assign(d.style,{
position:'fixed',
top:'10px',
left:'50%',
transform:'translateX(-50%)',
zIndex:'2147483647',
backgroundColor:'#1a1a1a',
color:'#00ff00',
padding:'10px 20px',
fontFamily:'monospace',
fontSize:'18px',
fontWeight:'bold',
borderRadius:'5px',
border:'2px solid #00ff00',
boxShadow:'0 4px 15px rgba(0,0,0,0.5)',
pointerEvents:'none'
});

d.innerText='Highlight to Count';
document.body.appendChild(d);

document.addEventListener('mouseup',()=>{
let s=window.getSelection().toString();
let w=s?s.trim().split(/\s+/).filter(x=>x.length>0).length:0;
d.innerText='Words: '+w;
d.style.borderColor=w>0?'#00ff00':'#ff4444';
});
})();
