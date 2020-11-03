<template>
  <div class="contact-page">
    <div class="container">
      <div class="area-text-one">
        <div class="items">
          <h2>We’re here for any questions.</h2>
          <p>Feel free to get in touch with one of our sales <br> representatives for any questions you might have.</p>
          <a href="mailto:codeesat@gmail.com"><small>codeesat@gmail.com</small></a>
        </div>
      </div>
      <div class="area-text-two">
        <div class="items-two">
          <h5>PhotoSpace™ is powered by: </h5>
          <span>Imaging Solutions AG <br>
                  Althardstrasse 70 <br>
                  8105 Regensdorf / Zürich <br>
            Switzerland
          </span>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "ContactPage"
}
</script>

<style scoped lang="scss">
.contact-page {
  margin-top: 50px;
  height: 611px;
  width: 1020px;
  border-radius: 20px;
  background-color: #181A1B;
  opacity: 40%;
  box-shadow: 20px 5px 55px white;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 150px 150px;

    .area-text-one {
      color: white;
      margin: auto;

      .items {
        border: 3px solid #D0CCC6;
        box-shadow: 20px 10px;
        padding: 1px 10px 20px 30px;

        h2 {
          font-family: 'Lato', sans-serif;
          font-size: 45px;
          color: white;
        }

        p {
          font-family: 'Lato', sans-serif;
        }

        a {
          text-decoration: none;
          color: white;

          small {
            letter-spacing: 1px;

            &:hover {
              border-bottom: 3px solid red;
            }
          }
        }

      }
    }

    .area-text-two {
      color: white;
      margin-left: auto;

      .items-two {
        h5 {
          font-family: 'Oswald', sans-serif;
          letter-spacing: 2px;
        }

        span {
          font-family: 'Lato', sans-serif;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>