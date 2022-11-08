<template>
  <div class="business">
    <div class="business-content">
      <div class="business-content-title">
        <h1>Business Content</h1>
      </div>
      <div class="business-content-parag">
        <p>「注文住宅」「リノベーション」を中心に<br>
        手掛ける“家づくり”のプロ集団です。<br>
        型にとらわれず自由な発想で、<br>
        あなたにとって家族にとって<br>
        「大好きな暮らしを」考え、ご提案いたします。<br>
        <br>
        パパママハウスは「家づくり」を通して、<br>
        Only One & Artの〈ライフスタイル〉を<br>
        発信していきます。</p>
      </div>
      <div class="business-content-btn">
        <a href="#">▶︎詳しくはこちら</a>
      </div>
    </div>
    <div class="business-img">
      <img src="../assets/top_home_img.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerLists: [
        {
          list: '会社概要',
          href: '#'
        },
        {
          list: '事業内容',
          href: '#'
        },
                {
          list: '物件紹介',
          href: '#'
        },
        {
          list: 'お問い合わせ',
          href: '#'
        },
      ]
    }
  }
}
</script>


<style lang="scss">
.business {
  position: relative;
  margin-top: 200px;
  margin-bottom: 200px;
  &-content {
    width: 55vw;
    min-width: 900px;
    padding-top: 200px;
    background: #000000de;
    position: relative;
    border: solid #ffffff87 1px;
    box-shadow: 12px 8px 36px #ffffff70;
    &-title {
      position: absolute;
      top: -80px;
      left: 8px;
      font-size: 5vw;
      white-space: nowrap;
      h1 {
        color: white;
      }
    }
    &-parag {
      p {
        color: white;
        line-height: 30px;
        letter-spacing: 3px;
        font-size: 18px;
      }
    }
    &-btn {
      padding-bottom: 130px;
      margin-top: 70px;
      padding-left: 250px;
      a {
        color: white;
        padding: 20px 15px;
        background: #f0f8ff38;
        border: solid #717171 2px;
      }
    }
  }
  &-img {
    position: absolute;
    top: -30px;
    right: 0;
    z-index: -1;
    img {
      aspect-ratio: 4/3;
      width: 1000px;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
}

@media screen and (min-width: 1200px) {
  .business {
    &-content {
      &-title {
        h1 {
          font-size: 120px;
        }
      }
      &-parag {
        p {
        }
      }
      &-btn {
        a {
        }
      }
    }
    &-img {
      img {
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .business {
    &-content {
      width: 100%;
      min-width: 100%;
      &-title {
        top: -40px;
        h1 {
          font-size: 60px;
        }
      }
      &-parag {
        p {
        }
      }
      &-btn {
        a {
        }
      }
    }
    &-img {
      img {
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .business {
    position: unset;
    display: flex;
    flex-flow: column;
    margin-top: 100px;
    &-content {
      order: 2;
      padding-top: 0;
      border: none;
      &-title {
        h1 {
          font-size: 37px;
          margin-top: -35px;
        }
      }
      &-parag {
        padding-top: 42px;
        p {
          font-size: 14px;
          letter-spacing: 0;
        }
      }
      &-btn {
        padding-left: 0;
        padding-bottom: 72px;
        a {
        }
      }
    }
    &-img {
      position: unset;
      img {
        aspect-ratio: 9/3;
      }
    }
  }
}

</style>