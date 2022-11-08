<template>
  <header class="hd">
    <div class="hd-ttl">
      <h1>株式会社リアスター</h1>
    </div>
    <ul class="hd-cat">
      <li class="hd-cat-list" v-for="hdlist in headerLists" :key="hdlist">
        <a :href="hdlist.href">{{ hdlist.list }}</a>
      </li>
    </ul>
    <HambergerHeaderComponents />
  </header>
</template>
<script>
import HambergerHeaderComponents from '@/components/HambergerHeaderComponents.vue'
export default {
  components: {
    HambergerHeaderComponents,
  },
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
h1 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

header {
  z-index: 1;
}

.hd {
  position: fixed;
  width: 100vw;
  background: #242424c2;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  &-ttl {
    margin-left: 20px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    h1 {
      color: #ffffffd1;
      font-weight: normal;
    }
  }
  &-cat {
    display: flex;
    flex-wrap: wrap;
    &-list {
      margin-left: 25px;
      list-style: none;
      &:last-of-type {
        margin-right: 20px;
      }
      a {
        color: #ffffffd1;
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .hd {
    &-cat {
      display: none;
    }
  }
}
</style>
