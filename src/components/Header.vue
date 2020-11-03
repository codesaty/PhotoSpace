<template>
  <div class="header-component">
    <header>
      <Content class="header-area">
        <router-link class="company-name" to="/">
          <span>Photo Space</span>
        </router-link>
        <form action="" class="search-value">
          <div class="icon-search">
            <i class="fas fa-search"></i>
          </div>
          <input type="text" placeholder="Search">
        </form>
        <nav class="navbar-field">
          <router-link class="home" to="/">
            <i class="fas fa-home"></i>
          </router-link>
          <router-link class="photo" to="/Photos">
            <i class="fas fa-camera"></i>
          </router-link>
          <router-link class="contact" to="/Contact">
            <i class="fas fa-phone-square"></i>
          </router-link>
          <router-link class="button-header" to="/">
            <button class="btn-header">Başlamak</button>
          </router-link>
        </nav>
      </Content>
    </header>
    <br>
    <hr>

  </div>

</template>

<script>
import Content from "@/components/Content";

export default {
  name: "Header",
  components: {
    Content
  }
}
</script>

<style scoped lang="scss">

.header-area {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-top: 20px;

  .company-name {
    text-decoration: none;


    span {
      color: #ffff;
      font-family: 'Itim', cursive;
      font-size: 26px;
      font-weight: bolder;
      letter-spacing: 1px;

      &:hover {
        color: rebeccapurple;
      }
    }
  }

  .search-value {

    .icon-search {
      i {

        font-size: 17px;
        position: absolute;
        top: 30px;
        color: #ffffff;
        padding-left: 5px;
      }
    }

    input {
      background-color: #181A1B;
      border: 1px solid gray;
      color: #ffff;
      border-radius: 5px;
      padding: 2px 30px;
      height: 29px;
      width: 140px;
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 15px;
      letter-spacing: 1px;

      &::placeholder {
        color: #fff;

      }

      &:focus {
        outline: 0;
      }
    }
  }

  .navbar-field {
    i {
      font-size: 23px;
      color: #D0CCC6;
      margin-left: 30px;

      &:hover {
        color: rebeccapurple;

      }
    }

    .button-header {
      margin-left: 30px;

      button {
        background-color: rebeccapurple;
        color: #ffffff;
        border-radius: 20px;
        border: 1px solid rebeccapurple;
        width: 100px;
        height: 42px;
        font-weight: bolder;
        font-family: 'Noto Serif JP', serif;
        cursor: pointer;
      }
    }
  }


}

</style>