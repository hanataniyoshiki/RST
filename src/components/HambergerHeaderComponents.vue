<template>
    <div id="app-hd">
      <div id="nav" class="navTrf" :class='{"is-active":open}'>
        <ul>
          <li><a href="#">SERVICE</a></li>
          <li><a href="#">HOME</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
      <div class="headerContent__menu" id="hamburger" @click="open = !open">
        <span class="headerContent__menuline" id="line1" :class='{"line_1":open}'></span>
        <span class="headerContent__menuline" id="line2" :class='{"line_2":open}'></span>
        <span class="headerContent__menuline" id="line3" :class='{"line_3":open}'></span>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
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

.headerContent{
  display: flex;
	font-family: 'Henny Penny';
	justify-content: space-around;
	align-items: center;
  background: rgba(67, 66, 66, 0.5);
	position: fixed;
	z-index: 4;
	width: 100vw;
	padding: 20px 0;
  @media (max-width:750px){
    justify-content: none;
  }
  &--text{
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.3);
    -webkit-text-stroke: 1px white;
    padding-right: 40px;
    padding-left: 2vw;
    @media (max-width:750px){
      padding: 0;
    }
    @media (max-width:450px){
      font-size: 2rem;
    }
  }
  &__list{
    width: 100%;
    padding-right: 2vw;
    @media (max-width:750px){
      display: none;
		}
    & > ul{
			display: flex;
			align-items: center;
			justify-content: space-between;
        & > li > a{
          color: rgba(255, 255, 255, 0);
          -webkit-text-stroke: 0.7px white;
        }
        a:nth-of-type(1){
          &:hover{
            color: rgb(255, 255, 255);
            text-shadow: 5px 5px 5px rgb(255, 255, 255);
          }
        }
    }
  }
  &__menuline{
    display: block;
    position: absolute;
    left: 0;
    width: 30px;
    height: 3px;
    background: white;
    transition: 1s;
    border-radius: 4px;
  }
}

#nav{
  position: absolute;
	top: 0;
	right: 0%;
	width: 65%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.874);
	transition: .7s;
  ul{
    padding-top: 80px;
    li{
      list-style-type: none;
      font-size: 20px;
      border-bottom: double 6px #98989882;
      a{
        display: block;
        text-decoration: none;
        color: white;
        margin: 0 15px;
        padding: 10px;
        transition: .5s;
        &:hover{
          color: rgb(0, 0, 0);
          background: rgba(255, 166, 0, 0.6);
          border-bottom: none;
        }
      }
    }
  }
}

#hamburger{
  display: block;
  position: absolute;
  top: 30px;
  right: 5px;
  width: 50px;
  height: 24px;
  cursor: pointer;
  transition: 1s;
}

#app-hd{
  @media (min-width:751px){
    display: none;
  }
}

.navTrf{
  transform: translateX(100vw);
  -webkit-transform: translateX(100vw);
  -moz-transform: translateX(100vw);
  -ms-transform: translateX(100vw);
  -o-transform: translateX(100vw);
}

#line1{
  top: 0;
}

#line2{
  top: 10px;
}

#line3{
  bottom: 0;
}

.in{
  transform: translateX(100%);
}

.line_1, .line_2, .line_3{
  background: white;
}

.line_1{
  transform: rotate(-45deg);
  top: 0;
}

.line_2{
  opacity: 0
}

.line_3{
  transform: rotate(45deg);
  bottom: 0;
}
.is-active{
  transform: translateX(0);
}
</style>
