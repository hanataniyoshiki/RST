<template>
  <div class="home">
    <div class="home-card">
      <div class="home-card-title">
        <h1>Sales</h1>
        <p>物件販売</p>
      </div>
    </div>
    <div class="home-card-area">
      <!-- 1 -->
      <div class="home-card-area-center">
        <div class="home-card-area-center-fot">
          <router-link to="#">
            <img src="../assets/top_home_img.jpg" alt="">
          </router-link>
        </div>
      </div>
      <!-- 2 -->
      <div class="home-card-area-center">
        <div class="home-card-area-center-fot">
          <router-link to="#">
            <img src="../assets/top_home_img.jpg" alt="">
          </router-link>
        </div>
      </div>
      <!-- 3 -->
      <div class="home-card-area-center">
        <div class="home-card-area-center-fot">
          <router-link to="#">
            <img src="../assets/top_home_img.jpg" alt="">
          </router-link>
        </div>
      </div>
      <!-- 4 -->
      <div class="home-card-area-center">
        <div class="home-card-area-center-fot">
          <router-link to="#">
            <img src="../assets/top_home_img.jpg" alt="">
          </router-link>
        </div>
      </div>
      <!-- 5 -->
      <div class="home-card-area-center">
        <div class="home-card-area-center-fot">
          <router-link to="#">
            <img src="../assets/top_home_img.jpg" alt="">
          </router-link>
        </div>
      </div>
      <!-- 6 -->
      <div class="home-card-area-center">
        <div class="home-card-area-center-fot">
          <router-link to="#">
            <img src="../assets/top_home_img.jpg" alt="">
          </router-link>
        </div>
      </div>
      <!-- 7 -->
      <div class="home-card-area-center">
        <div class="home-card-area-center-fot">
          <router-link to="#">
            <img src="../assets/top_home_img.jpg" alt="">
          </router-link>
        </div>
      </div>
      <!-- 8 -->
      <div class="home-card-area-center">
        <div class="home-card-area-center-fot">
          <router-link to="#">
            <img src="../assets/top_home_img.jpg" alt="">
          </router-link>
        </div>
      </div>
      <!-- 9 -->
      <div class="home-card-area-center">
        <div class="home-card-area-center-fot">
          <router-link to="#">
            <img src="../assets/top_home_img.jpg" alt="">
          </router-link>
        </div>
      </div>
      <div class="home-card-btn">
        <a href="#">物件一覧</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerLists: [
      ]
    }
  },
}
</script>


<style lang="scss">

.home {
  text-align: left;
  &-card {
    background: #23232363;;
    &-title {
      position: relative;
      display: inline-block;
      padding: 0 30px;
      background: black;
      h1 {
        color: #ffffff3d;
        font-size: 150px;
      }
      p {
        position: absolute;
        top: 15px;
        right: 21px;
        font-size: 45px;
        color: white;
      }
    }
    &-area {
      width: 70vw;
      min-width: 750px;
      max-width: 2000px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      background: rgba(35, 35, 35, 0.3882352941);
      padding: 0 20px;
      padding-top: 20px;
      &-center {
        &-fot {
          img {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
        }
      }
    }
    &-btn {
      margin-top: 25px;
      margin-bottom: 25px;
      margin-left: auto;
      a {
        text-decoration: none;
        padding: 10px 30px;
        background: #eaeaea;
        color: rgb(0, 0, 0);
        &:hover {
          background: #cacaca;
        }
      }
    }
  }
}

// 限定的なStyle
.home-card-area-center {
  &:nth-of-type(1) {
    width: 23%;
  }
  &:nth-of-type(2) {
    width: 33%;
  }
  &:nth-of-type(3) {
    width: 43%;
  }
  &:nth-of-type(4) {
    width: 63%;
  }
  &:nth-of-type(5) {
    width: 23%;
  }
  &:nth-of-type(6) {
    width: 13%;
  }
  &:nth-of-type(7) {
    width: 33%;
  }
  &:nth-of-type(8) {
    width: 33%;
  }
    &:nth-of-type(9) {
    width: 33%;
  }
}

@media screen and (min-width: 1200px) {
}

@media screen and (max-width: 900px) {

  .home {
    &-card {
      &-title {
        h1 {
        }
        p {
        }
      }
      &-area {
        min-width: 90vw;
        &-center {
          &-fot {
            img {
            }
          }
        }
      }
      &-btn {
        margin-left: auto;
        a {
        }
      }
    }
  }
  // 限定的なStyle
  .home-card-area-center {
    &:nth-of-type(1) {
      width: 49.5%;
    }
    &:nth-of-type(2) {
      width: 49.5%;
    }
    &:nth-of-type(3) {
      width: 49.5%;
    }
    &:nth-of-type(4) {
      width: 49.5%;
    }
    &:nth-of-type(5) {
      width: 49.5%;
    }
    &:nth-of-type(6) {
      width: 49.5%;
    }
    &:nth-of-type(7) {
      width: 49.5%;
    }
    &:nth-of-type(8) {
      width: 49.5%;
    }
    &:nth-of-type(9) {
      width: 49.5%;
      display: none;
    }
  }
}

@media screen and (max-width: 500px) {
  .home {
    &-card {
      &-title {
        h1 {
          font-size: 60px;
        }
        p {
          font-size: 16px;
        }
      }
      &-area {
        &-center {
          &-fot {
            img {
            }
          }
        }
      }
      &-btn {
        margin-left: auto;
        margin-right: auto;
        a {
        }
      }
    }
  }
}

</style>