<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
        <span className="header">🎬   Entertainment Hub     🎦</span>
    </div>
</template>

<style scoped>
  .header{
    width: 100%;
    position: fixed;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-family:var(--font-base);
    font-size: 2.3vw;
    padding-bottom: 15px;
    background-color: rgb(7, 7, 7);
    color:hsla(160, 100%, 37%, 1);
    box-shadow: 0px 1px 5px black;
    z-index: 100;
    padding-top: 5px;
}

@media (max-width:1000px){
    .header{
        padding-top: 10px;
        font-size: 6.8vw;
    }
}
</style>