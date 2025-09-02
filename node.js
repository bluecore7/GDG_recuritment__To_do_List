let i =1
  const sel = document.getElementById('oneToTwelve');
  for (i; i <= 12; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    sel.appendChild(opt);
  }

  const sel_1=document.getElementById("0to60")
  for  (i=0;i<=60;i++){
    const opt_1=document.createElement('option');
        opt_1.value=i;
        opt_1.textContent=i;
        sel_1.appendChild(opt_1);
    
  }