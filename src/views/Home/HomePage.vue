<template>
  <div class="main-page">
    <div class="main-items">
      <h1>Photos as they’re
        <br>meant to be.</h1>
      <p>Photo Space™ is the leading fully automatic image enhancement software,
        <br>used on
        <span>tens of millions of images</span> each day.
      </p>
      <div class="image">
        <img src="../../assets/w21.jpeg" alt="Fotoğraf" title="Source"/>

      </div>
      <div class="cards">
        <div class="card-one">
          <h4>Front-end SDK</h4>
          <span>
            Image enhancement in your frontend solutions with SDKs for iOS, macOS, Android, Windows and more.
          </span>
          <div class="card-footer">
            <button class="btn-footer">Get in touch<i class="fas fa-arrow-right"></i></button>
          </div>
        </div>
        <div class="card-two">
          <h4>Back-end SDK
          </h4>
          <span>Large scale image enhancement enabled for Windows server, Linux server, Webservices and more.</span>
          <div class="card-two-footer">
            <button class="btn-card-two-footer">Get in touch<i class="fas fa-arrow-right"></i></button>

          </div>
        </div>
        <div class="card-three">
          <h4>Utilities</h4>
          <span>Apply image enhancement directly with the commandline, PDF enhancer, batch/hotfolder, viewer tools.</span>
          <div class="card-three-footer">
            <button class="btn-card-three-footer">Get in touch<i class="fas fa-arrow-right"></i></button>
          </div>


        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped lang="scss">
.main-page {
  margin-top: 100px;
  text-align: center;

  .main-items {
    h1 {
      color: #E8E6E3;
      font-size: 60px;
      font-family: 'Cardo', serif;
    }

    p {
      color: gray;
      font-size: 20px;
      font-family: 'Cardo', serif;

      span {
        background: linear-gradient(#0F495F, #2A0E7C);
        color: white;
        border-radius: 20px;
        padding: 1px;
      }
    }

    .image {
      margin-top: 25px;

      img {
        width: 1032px;
        height: 656px;
        border-radius: 20px;
        box-shadow: 5px 5px 20px white;

        &:hover {
          box-shadow: 5px 5px 25px rebeccapurple;
        }
      }
    }

    .cards {
      display: flex;
      margin-top: 30px;
      padding: 0 50px;


      button {
        width: 170px;
        height: 51px;
        background-color: inherit;
        border: 1px solid gray;
        font-weight: bolder;
        color: #D0CCC6;
        border-radius: 10px;
        cursor: pointer;

        i {
          color: #D0CCC6;
          margin-left: 10px;
        }
      }

      h4 {
        color: #ffffff;
        font-size: 25px;
        font-family: 'Changa', sans-serif;
        font-weight: bolder;
      }

      span {
        color: #ffffff;
        font-size: 15px;
        font-family: 'Quattrocento Sans', sans-serif;
        font-weight: bolder;
      }

      .card-one {
        width: 442px;
        height: 289px;
        background: linear-gradient(#182B31, #291925);
        margin: 5px;
        border-radius: 20px;
        padding: 20px;

        .card-footer {
          margin-top: 40px;


        }
      }


      .card-two {
        width: 442px;
        height: 289px;
        background: linear-gradient(#182B31, #291925);
        margin: 5px;
        border-radius: 20px;
        padding: 20px;

        .card-two-footer {
          margin-top: 55px;

        }

      }

      .card-three {
        width: 442px;
        height: 289px;
        background: linear-gradient(#182B31, #291925);
        margin: 5px;
        border-radius: 20px;
        padding: 20px;

        .card-three-footer {
          margin-top: 40px;
        }
      }
    }
  }
}
</style>