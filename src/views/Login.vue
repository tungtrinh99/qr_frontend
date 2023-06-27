<template>
  <div class="login-page">
      <div class="container">
        <div class="background"></div>
        <div class="content-page">
          <div class="logo">Your Logo</div>
          <div class="login-form">
            <div class="top">
              <div class="title">
                <div class="top-left">Welcome to <span>LOREM</span></div>
                <div class="top-right">
                  <span>No Account ?</span><br>
                  <span>Sign up</span>
                </div>
              </div>
              <div class="subtitle">Sign in</div>
            </div>
            <div class="social-network-wrapper">
              <div class="google">
                <img src="@/assets/svgs/ic_google.svg" alt="">
                <span>Sign in with Google</span>
              </div>
              <div class="facebook">
                <img src="@/assets/svgs/ic_facebook.svg" alt="">
              </div>
              <div class="apple">
                <img src="@/assets/svgs/ic_apple.svg" alt="">
              </div>
            </div>
            <div class="form">
              <label for="email">Enter your username or email address</label>
              <br>
              <input id="email" type="text" placeholder="Username or email address">
              <br>
              <label for="password">Enter your Password</label>
              <br>
              <input id="password" type="text" placeholder="Password">
              <div>Forgot Password</div>
            </div>
            <div class="bottom">
              <div class="button-signup">
                <button>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<style lang="scss">
.login-page {
  background: #ECBC76;
  height: 100vh;
  .container {
    .content-page {
      .logo {
        color: #C6553B;
        font-size: 18px;
        font-family: Poppins;
        font-weight: 600;
      }

      .login-form {
        border-radius: 40px;
        background: #FFF;
        width: 326px;
        margin: 22px auto 0;
        padding: 44px 27px 79px;
        .top {
          .title {
            .top-left {
              color: #000;
              font-size: 16px;
              font-family: Poppins;
              span {
                color: #E48700;
              }
            }
            .top-right {
              color: #8D8D8D;
              font-size: 13px;
              font-family: Poppins;
              span:nth-child(2) {
                color: #E48700;
              }
            }
          }
          .subtitle {
            color: #000;
            textbox-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            font-size: 40px;
            font-family: Poppins;
            font-weight: 500;
          }
        }
        .social-network-wrapper {
          display: flex;
          .google {
            border-radius: 9px;
            background: #FFF4E3;
            width: 180px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            span {
              color: #E48700;
              font-size: 12px;
              font-family: Poppins;
            }
          }
          .facebook {
            width: 36px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 9px;
            background: #F2F2F2;
            margin-right: 10px;
          }
          .apple {
            width: 36px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 9px;
            background: #F2F2F2;
          }
        }
        .form {
          label {
            color: #000;
            font-size: 14px;
            font-family: Poppins;
          }
          input {
            border-radius: 9px;
            border: 1px solid #E48700;
            background: #FFF;
            width: 100%;
            height: 57px;
            padding-left: 15px;
          }
        }
        .bottom {
          .button-signup {
            display: flex;
            justify-content: center;
            button {
              border-radius: 10px;
              background: #E48700;
              box-shadow: 0px 4px 19px 0px rgba(119, 147, 65, 0.30);
              color: #FFF;
              font-size: 16px;
              font-family: Poppins;
              font-weight: 500;
              width: 272px;
              height: 54px;
              border: none;
            }
          }
        }
      }
    }
  }
}
</style>