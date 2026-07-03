
function setPanel(group, id){
  document.querySelectorAll('[data-panel-group="'+group+'"]').forEach(function(el){el.classList.remove('active');});
  var target=document.getElementById(id); if(target){target.classList.add('active');}
  document.querySelectorAll('[data-button-group="'+group+'"]').forEach(function(btn){btn.classList.remove('active');});
  var active=document.querySelector('[data-button-target="'+id+'"]'); if(active){active.classList.add('active');}
}
function setTab(group, id){
  document.querySelectorAll('[data-tab-group="'+group+'"]').forEach(function(el){el.classList.remove('active');});
  var target=document.getElementById(id); if(target){target.classList.add('active');}
  document.querySelectorAll('[data-tab-button-group="'+group+'"]').forEach(function(btn){btn.classList.remove('active');});
  var active=document.querySelector('[data-tab-target="'+id+'"]'); if(active){active.classList.add('active');}
}
