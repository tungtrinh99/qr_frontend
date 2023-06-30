<template>
  <div class="login-page">
    <div class="container">
      <div class="background"></div>
      <div class="content">
        <div class="logo">
          <p>Kiai QR <br><br> Leaderboard</p>
        </div>
        <form @submit.prevent="login" class="login-form">
          <div class="top">
            <div class="title">
              <div class="top-left">Welcome to <span>QR</span></div>
              <div class="top-right">
                <span>No Account ?</span><br>
                <span style="color: #E48700; cursor: pointer">Sign up</span>
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
            <div class="input-form">
              <label for="email">Enter your username or email address</label>
              <div class="input-wrapper">
                <input v-model="state.email" class="input-inner" id="email" type="text" placeholder="Username or email address">
              </div>
            </div>
            <div class="input-form">
              <label for="password">Enter your Password</label>
              <div class="input-wrapper">
                <input v-model="state.password" class="input-inner" id="password" type="password" placeholder="Password">
              </div>
            </div>
            <div class="forgot-password">Forgot Password</div>
          </div>
          <div class="bottom">
            <div class="button-signup">
              <button
                  @click="login"
              >Sign in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { computed, getCurrentInstance, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
const {
  proxy
} = getCurrentInstance() as any
import { useRouter } from 'vue-router'
const authStore = useAuthStore();
const router = useRouter();

const state = reactive({
  email: '',
  password: ''
})
const rules = computed(() => {
  return {
    email: {
      required,
      email,
      regex: (value: string) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
    },
    password: {
      required,
      // regex: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)
    }
  }
})
const v$ = useVuelidate(rules, state)


const login = async (e) => {
  e.preventDefault();
  v$.value.$touch();
  if (!v$.value.$invalid) {
    try {
      const response = await proxy.$axios.post('/login', {
        email: state.email,
        password: state.password
      })
      if (!response) {
        return;
      }
      proxy.$toast.success(proxy.$t('message.login-success'))
      localStorage.setItem('token', response.data.accessToken)
      authStore.setToken(response.data.accessToken)
      await router.push('/dashboard');
    } catch (error) {
      proxy.$toast.error(error);
    }
  }
}
</script>
<style lang="scss">
.login-page {
  background: #ECBC76;
  height: 100vh;

  .container {
    .content {
      padding: 0 22px 16px;
      height: auto !important;
      .logo {
        p {
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 12px;
          color: #FFFFFF;
          margin: 16px 0 16px 0;
        }
      }

      .login-form {
        border-radius: 40px;
        background: #FFF;
        padding: 44px 27px 79px;
        max-width: 326px;
        margin: 0 auto;

        .top {
          margin-bottom: 62px;

          .title {
            display: flex;
            justify-content: space-between;

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
            text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
            font-size: 40px;
            font-family: Poppins;
            font-weight: 700;
          }
        }

        .social-network-wrapper {
          display: flex;
          margin-bottom: 52px;

          .google {
            border-radius: 9px;
            background: #FFF4E3;
            width: 180px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            cursor: pointer;

            span {
              color: #E48700;
              font-size: 12px;
              font-family: Poppins;
              margin-left: 12px;
            }
          }

          .facebook {
            flex: 1;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 9px;
            background: #F2F2F2;
            margin-right: 10px;
            cursor: pointer;
          }

          .apple {
            flex: 1;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 9px;
            background: #F2F2F2;
            cursor: pointer;
          }
        }

        .form {
          .input-form:nth-child(1) {
            margin-bottom: 38px;
          }
          label {
            color: #000;
            font-size: 14px;
            font-family: Poppins;
            margin-bottom: 16px;
            display: block;
          }
          .input-wrapper {
            border-radius: 9px;
            border: 1px solid #E48700;
            background: #FFF;
            height: 57px;
            outline: none;
            padding: 1px 11px;


            input {
              width: 100%;
              border: none;
              padding: 0;
              outline: none;
              background: none;
              height: 57px;

              &::placeholder {
                color: #808080;
                font-size: 13px;
                font-family: Poppins;
                font-weight: 300;
              }
            }
          }

          .forgot-password {
            margin-top: 12px;
            color: #E48700;
            font-size: 11px;
            font-family: Poppins;
            cursor: pointer;
            display: flex;
            justify-content: flex-end;
          }
        }

        .bottom {
          margin-top: 47px;
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
              width: 100%;
              height: 54px;
              border: none;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>