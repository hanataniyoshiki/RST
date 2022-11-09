<template>
  <div class="Access">
    <div class="Access-cnt">
      <div class="Access-ttl">
        <h3>{{ id }}ACCESS</h3>
        <p>住所</p>
      </div>
      <div class="Access-ad">
        <p class="Access-ad-post">Txxx-xxxx</p>
        <p class="Access-ad-txt">大阪府xx市oo町 000丁000番地</p>
      </div>
    </div>
    <div class="Access-map">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'postemployeeView',
  data() {
    return {
      overlayDisplay: false,
      confirmDisplay: false,
      complitedDisplay: false,
      membersList: [],
      nameInput: '',
      positionInput: '',
      mottoInput: '',
      fileUrlInput: '',
      sortInput: '',
      confirmToggleDisplay: false,
      historyInput: '',
      displayValue: 0,
      textInput: '',
      targetId: '',
      updateName: '',
      updatePosition: '',
      updateMotto: '',
      updateHistory: '',
      updateContent: '',
      updateFileName: '',
      updateSort: '',
      updateDisplay: '',
      editToggleDisplay: true,
      editModalDisplay: false,
      updateChecked: '',
    }
  },
  methods: {
    openOverlay: function () {
      if (!this.nameInput) {
        alert('名前を入力してください。')
      } else if (!this.positionInput) {
        alert('ポジションを入力してください。')
      } else if (!this.mottoInput) {
        alert('座右の銘を入力してください。')
      } else if (!this.fileUrlInput) {
        alert('画像URLを入力してください。')
      } else if (this.sortInput === '') {
        alert('ソートを入力してください。')
      } else if (!this.historyInput) {
        alert('経歴を入力してください。')
      } else if (!this.textInput) {
        alert('iRupへの想いを入力してください。')
      } else {
        this.overlayDisplay = true
        this.confirmDisplay = true
        if (this.displayValue == 0) {
          this.displayText = '非表示'
        } else {
          this.displayText = '表示'
        }
      }
    },
    toggleSwitch: function () {
      if (this.confirmToggleDisplay == true) {
        this.displayValue = 0
      } else {
        this.displayValue = 1
      }
      if (this.confirmToggleDisplay == true) {
        this.confirmToggleDisplay = false
      } else {
        this.confirmToggleDisplay = true
      }
      if (this.updateDisplay == 0) {
        this.updateDisplay = 0
      } else {
        this.updateDisplay = 1
      }
    },
    backForm: function () {
      this.overlayDisplay = false
      this.confirmDisplay = false
    },
    submit: function (nameInput, positionInput, mottoInput, fileUrlInput, historyInput, textInput, sortInput) {
      this.$axios
        .post('/api/v1/employee/post', {
          name: nameInput,
          position: positionInput,
          motto: mottoInput,
          file_name: fileUrlInput,
          display: this.displayValue,
          history: historyInput,
          content: textInput,
          sort: sortInput,
        })
        .then((res) => {
          this.posts = res.data.posts
          this.complitedDisplay = true
          this.confirmDisplay = false
        })
        .catch((err) => {
          alert('投稿に失敗しました。\n入力内容をご確認下さい。')
          console.log(err)
        })
    },
    closeAll: function () {
      window.location.reload()
      this.overlayDisplay = false
      this.complitedDisplay = false
    },
    openCompleted: function () {
      window.location.reload()
      this.complitedDisplay = true
      this.confirmDisplay = false
    },
    deleteDisplay: function (id, title) {
      this.targetId = id
      const result = window.confirm(title + 'のイベントを削除しますか？')
      if (result == true) {
        this.$axios
          .post('api/v1/members/delete', {
            id: this.targetId,
          })
          .then(() => {
            this.$router.go({ path: this.$router.currentRoute.path, force: true })
          })
          .catch((err) => {
            console.log('err:', err)
          })
      }
    },
    openEditModal: function (id, name, position, motto, file_name, history, content, display, sort) {
      window.scroll({ top: 0, behavior: 'smooth' })
      this.targetId = id
      this.updateName = name
      this.updatePosition = position
      this.updateMotto = motto
      this.updateFileName = file_name
      this.updateHistory = history
      this.updateContent = content
      this.updateDisplay = display
      this.updateSort = sort
      this.overlayDisplay = true
      this.editModalDisplay = true
      if (this.updateDisplay == 1) {
        this.updateChecked = true
      } else {
        this.updateChecked = false
      }
    },
    editDisplay: function () {
      if (!this.updateName) {
        alert('名前を入力してください。')
      } else if (!this.updatePosition) {
        alert('ポジションを入力してください。')
      } else if (!this.updateMotto) {
        alert('座右の銘を入力してください。')
      } else if (!this.updateFileName) {
        alert('画像URLを入力してください。')
      } else if (this.updateSort === '') {
        alert('ソートを入力してください。')
      } else if (!this.updateHistory) {
        alert('経歴を入力してください。')
      } else if (!this.updateContent) {
        alert('iRupへの想いを入力してください。')
      } else {
        if (this.updateChecked == true) {
          this.updateDisplay = 1
        } else {
          this.updateDisplay = 0
        }
        this.$axios
          .post('api/v1/members/update', {
            id: this.targetId,
            name: this.updateName,
            position: this.updatePosition,
            motto: this.updateMotto,
            file_name: this.updateFileName,
            history: this.updateHistory,
            content: this.updateContent,
            display: this.updateDisplay,
            sort: this.updateSort,
          })
          .then((res) => {
            this.posts = res.data.posts
            this.complitedDisplay = true
            this.editModalDisplay = false
            window.scroll({ top: 0, behavior: 'smooth' })
          })
          .catch((err) => {
            alert('編集に失敗しました。')
            console.log('err:', err)
          })
      }
    },
    backEditModal: function () {
      this.overlayDisplay = false
      this.editModalDisplay = false
    },
  },
  async created() {
    await this.$axios
      .get('/api/v1/members/list')
      .then((response) => {
        this.membersList = response.data
      })
      .catch((err) => {
        console.log('err:', err)
      })
  },
}
</script>

<style lang="scss" scoped>
  .Access {
    margin-top: 100px;
    &-cnt {
      position: relative;
    }
    &-ttl {
      position: relative;
      h3 {
        text-align: right;
        font-size: 150px;
        color: transparent;
        -webkit-text-stroke: 1px #303030;
        margin: 0;
      }
      p {
        position: absolute;
        top: 26px;
        right: 10px;
        font-size: 45px;
        color: white;
      }
    }
    &-ad {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 450px;
      padding: 30px 0;
      background: #ffffff1a;
      border-right: solid #ffffff2b 1px;
      border-top: solid #ffffff2b;
      border-bottom: solid #ffffff2b 1px;
      &-post {
        color: #b3b3b3;
      }
      &-txt {
        margin-top: 10px;
        color: #b3b3b3;
      }
    }
  }

</style>