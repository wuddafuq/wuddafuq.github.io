
async function lookup(){
 const q=document.getElementById('search').value.toLowerCase();
 if(!q)return;
 const items=await fetch('https://prices.runescape.wiki/api/v1/osrs/mapping').then(r=>r.json());
 const item=items.find(i=>i.name.toLowerCase().includes(q));
 if(!item){result('Item not found');return;}
 const prices=await fetch('https://prices.runescape.wiki/api/v1/osrs/latest?id='+item.id).then(r=>r.json());
 const p=prices.data[item.id];
 document.getElementById('result').innerHTML=`<h3>${item.name}</h3>
 <p>High: ${p.high}</p><p>Low: ${p.low}</p>`;
}
function result(t){document.getElementById('result').innerText=t;}
