/* Selected professional projects — image galleries loaded independently of simulated Product Lab demos. */
(() => {
  const galleryData={"pace":[["01-portfolio.webp","Project portfolio","Portfólio de projetos"],["02-project-overview.webp","Project overview","Visão geral do projeto"],["03-timeline.webp","Timeline and milestones","Cronograma e marcos"],["04-team.webp","Project team","Equipe do projeto"],["05-performance.webp","Project performance","Indicadores do projeto"],["06-gantt.webp","Full Gantt view","Gantt completo"],["07-boards.webp","Boards","Quadros"],["08-board.webp","Task board","Quadro de tarefas"],["09-resources.webp","Resource forecasting","Previsão de recursos"],["10-documents.webp","Document management","Controle documental"],["11-indicators.webp","KPIs","Indicadores gerenciais"]],"bihub":[["01-overview.webp","Analytics portal overview","Visão inicial do portal"],["02-folders.webp","Report folders","Pastas de relatórios"],["03-report.webp","Embedded Power BI report","Relatório Power BI incorporado"]],"primeai":[["01-conversation.webp","AI conversation","Conversa com IA"],["02-quotation.webp","Engineering quotations (testing)","Cotações de engenharia (em testes)"]],"traininghub":[["01-dashboard.webp","Training management dashboard","Dashboard de treinamentos"],["02-request.webp","New training request","Nova solicitação de treinamento"]]};
  const projectTitles={
    pace:"PACE — Projects & Documents",bihub:"BI Hub — Analytics Portal",
    primeai:"PrimeAI — Engineering AI",traininghub:"TrainingHUB — Training Management"
  };
  const path=(id,filename)=>"assets/projects/professional/"+id+"/"+filename;
  const $=id=>document.getElementById(id);
  const dialog=$("caseGalleryDialog");
  if(!dialog)return;
  let activeId=null, activeIndex=0;
  const isPt=()=>document.documentElement.lang.toLowerCase().startsWith("pt");
  function draw(){
    const slides=galleryData[activeId];if(!slides||!slides.length)return;
    const slide=slides[activeIndex];
    $("caseGalleryTitle").textContent=projectTitles[activeId];
    $("caseGalleryCounter").textContent=(activeIndex+1)+" / "+slides.length;
    $("caseGalleryImage").src=path(activeId,slide[0]);
    $("caseGalleryImage").alt=(isPt()?slide[2]:slide[1])+" — "+projectTitles[activeId];
    $("caseGalleryCaption").textContent=isPt()?slide[2]:slide[1];
    $("caseGalleryThumbs").innerHTML="";
    for(let i=0;i<slides.length;i++){
      const img=document.createElement("img");img.src=path(activeId,slides[i][0]);img.alt="";
      img.loading="lazy";
      const button=document.createElement("button");button.type="button";
      button.className=i===activeIndex?"active":"";button.setAttribute("aria-label",(isPt()?"Imagem ":"Screenshot ")+(i+1));
      button.append(img);button.addEventListener("click",()=>{activeIndex=i;draw()});
      $("caseGalleryThumbs").append(button);
    }
  }
  function step(by){const slides=galleryData[activeId];activeIndex=(activeIndex+by+slides.length)%slides.length;draw()}
  document.querySelectorAll("[data-case-gallery]").forEach(button=>{
    const img=button.querySelector("img");
    if(img){
      const hide=()=>{button.hidden=true};
      img.addEventListener("error",hide);
      if(img.complete&&img.naturalWidth===0)hide();
    }
    button.addEventListener("click",()=>{
      const id=button.dataset.caseGallery;
      if(!galleryData[id])return;
      activeId=id;activeIndex=0;draw();dialog.showModal();
    });
  });
  $("caseGalleryClose").addEventListener("click",()=>dialog.close());
  $("caseGalleryPrev").addEventListener("click",()=>step(-1));
  $("caseGalleryNext").addEventListener("click",()=>step(1));
  dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});
  document.addEventListener("keydown",event=>{
    if(!dialog.open)return;
    if(event.key==="ArrowLeft"){event.preventDefault();step(-1)}
    if(event.key==="ArrowRight"){event.preventDefault();step(1)}
  });
})();
