<template>
  <div class="hd-contents">
    <div class="hd-contents-center-txt">
      <p>Your Favorite House</p>
    </div>
    <div class="hd-contents-link">
      <div class="hd-contents-link-category" v-for="box in headerBox" :key="box">
        <a href="#"><p>{{ box.text }}</p></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bkimg: '../assets/top_home_img.jpg',
      headerBox: [
        {
          text: 'SERVICE',
          href: "#"
        },
        {
          text: 'HOME',
          href: "#"
        },
        {
          text: 'CONTACT',
          href: "#"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hd-contents {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 900px;
  max-height: 1500px;
  // ▼可能であればVueで取得したい
  background-image: url('../assets/top_home_img.jpg');
  background-size: cover;
  &-center-txt {
    font-size: 10vw;
    color: white;
    opacity: 0.8;
    -webkit-text-stroke: 1px #000000;
    text-shadow: 6px 6px 2px black;
  }
  &-link {
    width: 80%;
    position: absolute;
    bottom: 18vh;
    display: flex;
    justify-content: space-around;
    &-category {
      background: rgb(0 0 0 / 44%);
      border: solid white 1px;
      padding: 30px 0px;
      width: 18%;
      max-width: 220px;
      min-width: 200px;
      a {
        color: white;
        font-size: 18px;
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .hd-contents-link {
    flex-flow: column;
    align-items: center;
    bottom: 40px;
  }

  .hd-contents-center-txt {
    font-size: 90px;
    margin-top: -200px;
  }

  .hd-contents-link-category:nth-of-type(n + 2) {
    margin-top: 30px;
  }
}

</style>