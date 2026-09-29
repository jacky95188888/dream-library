/* Dream Library · Six Dream Keepers V1 */
(function(){
  const KEY='dream_selected_keeper_v1';
  const keepers={
    luna:{name:'Luna',role:'夢境館長',line:'歡迎回來，我一直在這裡，等你說出今天的夢。'},
    seraphine:{name:'Seraphine',role:'心靈解讀者',line:'每一個夢，都是你內心最真實的聲音。'},
    nyx:{name:'Nyx',role:'象徵探索者',line:'夢裡的符號從來不是隨機，而是通往更深真相的線索。'},
    aurelia:{name:'Aurelia',role:'創意啟發者',line:'夢是靈感的花園，在這裡，一切想像力都能被看見。'},
    celeste:{name:'Celeste',role:'星象指引者',line:'夢與星辰相連，我陪你看見屬於你的時間與方向。'},
    elara:{name:'Elara',role:'自然療癒者',line:'夢是自然給你的禮物，我陪你在其中找到平衡與力量。'}
  };
  function selectKeeper(id,announce){
    if(!keepers[id]) id='luna';
    localStorage.setItem(KEY,id);
    document.querySelectorAll('.keeper-card').forEach(c=>c.setAttribute('aria-pressed',String(c.dataset.keeper===id)));
    const k=keepers[id];
    document.querySelectorAll('.luna-name').forEach(el=>el.textContent=k.name);
    document.querySelectorAll('.luna-role').forEach(el=>el.textContent=k.role);
    const line=document.getElementById('luna-text');
    if(line && id!=='luna') line.textContent=k.line;
    const primary=document.querySelector('.dream-primary-copy small');
    if(primary) primary.textContent=k.name+' 將陪你閱讀潛意識留下的訊息';
    if(announce && typeof toast==='function') toast('已選擇 '+k.name+' ✦');
  }
  window.selectDreamKeeper=selectKeeper;
  document.addEventListener('DOMContentLoaded',function(){
    const saved=localStorage.getItem(KEY)||'luna';
    selectKeeper(saved,false);
    document.querySelectorAll('.keeper-card').forEach(card=>{
      card.addEventListener('click',()=>selectKeeper(card.dataset.keeper,true));
      card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectKeeper(card.dataset.keeper,true);}});
    });
  });
})();