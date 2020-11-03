<template>
  <div class="photos-page">
    <div class="container-area">
      <div class="layout">
        <div class="texts">
          <div class="text-items">
            <h1>Image quality by <br> industry experts.</h1>
            <span>Accurate. Fast. Fully automated.</span>
            <p>Say goodbye to sub-optimally shot photos due to limiting camera <br> equipment or poor conditions.
              Viesus™
              uses
              state-of-the-art algorithms <br> to analyze images to apply appropriate processing steps to achieve <br>
              photo-enhancement results that <strong>reflect reality as beautiful as it was.</strong></p>
          </div>
        </div>
        <div class="image-colums">
          <img src="../../assets/w17.jpeg" alt=""/>
        </div>
      </div>


      <div class="bottom-area">
        <div class="bottom-items">
          <div class="first-field">
            <div class="first-content-value">
              <img src="../../assets/IconOne.png" alt=""/>
              <h4>AI object detection <br>
                Intelligent detection of skin, sky <br> vegetation for specific enhancements.</h4>
            </div>
            <div class="second-content-value">
              <img src="../../assets/IconTwo.png" alt=""/>
              <h4>Local & global brightness correction
                Reveals hidden details.</h4>
            </div>
            <div class="third-content-value">
              <img src="../../assets/IconThree.png" alt=""/>
              <h4>Resampling <br>
                Smart resampling to minimize artefacts such as aliasing or pixels.</h4>
            </div>
          </div>
          <div class="second-field">
            <div class="second-first-content-value">
              <img src="../../assets/IconFour.png" alt=""/>
              <h4>Local & global color correction <br>
                Corrects color casting due to poor <br> lighting conditions or incorrect camera <br> settings.</h4>
            </div>

            <div class="second-second-content-value">
              <img src="../../assets/IconFive.png" alt=""/>
              <h4>Sharpness correction <br>
                Locally adapts sharpening and <br> smoothing to particular image areas.</h4>
            </div>
            <div class="second-third-content-value">
              <img src="../../assets/IconSix.png" alt=""/>
              <h4>Red-eye correction <br>
                Accurate detection and removal of red- <br> eyes.</h4>
            </div>
          </div>
          <div class="third-field">
            <div class="third-first-content-value">
              <img src="../../assets/IconSeven.png" alt=""/>
              <h4>Local & global contrast correction <br>
                Intelligently corrects murky and <br> underexposed photos. </h4>
            </div>
            <div class="third-second-content-value">
              <img src="../../assets/IconEight.png" alt=""/>
              <h4>Noise reduction <br>
                Intelligently reduces image noise.</h4>
            </div>
            <div class="third-third-content-value">
              <img src="../../assets/IconNine.png" alt=""/>
              <h4>PDF enhancement <br>
                Enhances photos in PDFs fast and <br> reliable.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: "PhotosPage",

}
</script>

<style scoped lang="scss">
.photos-page {
  .layout {
    display: grid;
    grid-template-columns: 600px 1fr;

    .texts {

      .text-items {
        h1 {
          color: #E8E6E3;
          font-family: 'Bree Serif', serif;
          font-size: 55px;
        }

        span {
          font-family: 'ABeeZee', sans-serif;
          font-size: 22px;
          color: white;
          font-weight: bolder;
        }

        p {
          font-family: 'ABeeZee', sans-serif;
          color: white;
          font-size: 17px;
          line-height: 1.5rem;

          strong {
            color: rebeccapurple;
            letter-spacing: 1px;
            border: 1px solid white;

            &:hover {
              background-color: white;
              font-family: Monospaced, serif;
            }
          }
        }
      }
    }

    .image-colums {
      margin-top: 40px;

      img {
        height: 361px;
        width: 482px;
        border-radius: 10px;
        transition: all .5s ease-in-out;
        &:hover {
          transform: scale(1.1);
          -webkit-transform: scale(1.1);
        }
      }
    }
  }


  .bottom-area {
    margin-top: 50px;
    box-shadow: 10px 5px 20px 10px rebeccapurple;
    padding: 10px;

    &:hover {
      box-shadow: 10px 5px 20px 10px #0F495F;

    }

    img {
      width: 103px;
      height: 110px;
    }

    h4 {
      color: white;
      font-size: 15px;
      font-family: 'Ubuntu', sans-serif;
      margin-left: 20px;
    }

    .bottom-items {
      display: grid;
      grid-template-columns: 395px 395px 395px;

      .first-field {

        .first-content-value {
          display: flex;
          padding-bottom: 50px;
        }

        .second-content-value {
          display: flex;
          padding-bottom: 50px;

        }

        .third-content-value {
          display: flex;

        }

      }

      .second-field {

        .second-first-content-value {
          display: flex;
          padding-bottom: 50px;

        }

        .second-second-content-value {
          display: flex;
          padding-bottom: 50px;

        }

        .second-third-content-value {
          display: flex;
        }
      }

      .third-field {

        .third-first-content-value {
          display: flex;
          padding-bottom: 50px;
        }

        .third-second-content-value {
          display: flex;
          padding-bottom: 50px;

        }

        .third-third-content-value {
          display: flex;
        }
      }
    }
  }

}
</style>