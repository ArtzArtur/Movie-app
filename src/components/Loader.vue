<template>
  <div class="grid place-content-center min-h-[250px]">
      <p>Loading please wait..</p>
      <div class="flex justify-between p-4">
        <div class="dot h-1 w-1 bg-slate-600"></div>
        <div class="dot h-1 w-1 bg-slate-600"></div>
        <div class="dot h-1 w-1 bg-slate-600"></div>
        <div class="dot h-1 w-1 bg-slate-600"></div>
        <div class="dot h-1 w-1 bg-slate-600"></div>
        <div class="dot h-1 w-1 bg-slate-600"></div>
      </div>
  </div>
</template>

<style scoped>
  .dot{
    animation:blink 1.8s linear infinite;
  }
  @keyframes blink{
    50%{
      opacity:0;
    }
    100%{
      opacity:1;
    }
  }
.dot{
  animation: ;
}
  .dot:nth-child(0){
    animation-delay:0s;
  }
  .dot:nth-child(1){
    animation-delay:0.3s;
  }
  .dot:nth-child(2){
    animation-delay:0.6s;
  }
  .dot:nth-child(3){
    animation-delay:0.9s;
  }
  .dot:nth-child(4){
    animation-delay:1.2s;
  }
  .dot:nth-child(5){
    animation-delay:1.5s;
  }
  .dot:nth-child(6){
    animation-delay:1.8s;
  }
</style>