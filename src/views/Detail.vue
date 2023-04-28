<template>
  <div class="content">
    <div class="container">
      <div class="header">
        <div class="top">
          <img @click="$router.back()" class="icon-back" src="@/assets/svgs/btn_back.svg" alt="">
          <div class="title">Messages</div>
        </div>
        <div class="detail-info">
          <img class="detail-avatar" src="@/assets/svgs/nhi.jpg" alt="">
          <div class="name">Trương Yến Nhi</div>
        </div>
      </div>
      <div class="body">
        <div class="list-message">
          <div class="message">
            <div class="message-avt">
              <img src="@/assets/svgs/avt_detail.svg" alt="">
            </div>
            <div class="message-text">
              <div class="message-text-top">
                <div class="message-name">Trịnh Xuân Tùng</div>
                <div class="message-time">9:40 AM</div>
              </div>
              <div class="message-text-bottom">
                <div class="message-content">
                  Chúc em một ngày 8/3 vui vẻ, tràn đầy niềm vui trong cuộc sống...
                  Chúc em một ngày 8/3 vui vẻ, tràn đầy niềm vui trong cuộc sống...
                  Chúc em một ngày 8/3 vui vẻ, tràn đầy niềm vui trong cuộc sống...
                </div>
              </div>
            </div>
          </div>
          <div class="message">
            <div class="message-avt">
              <img src="@/assets/svgs/avt_detail.svg" alt="">
            </div>
            <div class="message-text">
              <div class="message-text-top">
                <div class="message-name">Trịnh Xuân Tùng</div>
                <div class="message-time">9:40 AM</div>
              </div>
              <div class="message-text-bottom">
                <div class="message-content">
                  Chúc em một ngày 8/3 vui vẻ, tràn đầy niềm vui trong cuộc sống...
                </div>
              </div>
            </div>
          </div>
          <div class="message">
            <div class="message-avt">
              <img src="@/assets/svgs/avt_detail.svg" alt="">
            </div>
            <div class="message-text">
              <div class="message-text-top">
                <div class="message-name">Trịnh Xuân Tùng</div>
                <div class="message-time">9:40 AM</div>
              </div>
              <div class="message-text-bottom">
                <div class="message-content">
                  Chúc em một ngày 8/3 vui vẻ, tràn đầy niềm vui trong cuộc sống...
                </div>
              </div>
            </div>
          </div>
          <div class="message">
            <div class="message-avt">
              <img src="@/assets/svgs/avt_detail.svg" alt="">
            </div>
            <div class="message-text">
              <div class="message-text-top">
                <div class="message-name">Trịnh Xuân Tùng</div>
                <div class="message-time">9:40 AM</div>
              </div>
              <div class="message-text-bottom">
                <div class="message-content">
                  Chúc em một ngày 8/3 vui vẻ, tràn đầy niềm vui trong cuộc sống...
                </div>
              </div>
            </div>
          </div>
          <div class="message">
            <div class="message-avt">
              <img src="@/assets/svgs/avt_detail.svg" alt="">
            </div>
            <div class="message-text">
              <div class="message-text-top">
                <div class="message-name">Trịnh Xuân Tùng</div>
                <div class="message-time">9:40 AM</div>
              </div>
              <div class="message-text-bottom">
                <div class="message-content">
                  Chúc em một ngày 8/3 vui vẻ, tràn đầy niềm vui trong cuộc sống...
                </div>
              </div>
            </div>
          </div>
          <div class="message">
            <div class="message-avt">
              <img src="@/assets/svgs/avt_detail.svg" alt="">
            </div>
            <div class="message-text">
              <div class="message-text-top">
                <div class="message-name">Trịnh Xuân Tùng</div>
                <div class="message-time">9:40 AM</div>
              </div>
              <div class="message-text-bottom">
                <div class="message-content">
                  Chúc em một ngày 8/3 vui vẻ, tràn đầy niềm vui trong cuộc sống...
                </div>
              </div>
            </div>
          </div>
          <div class="message">
            <div class="message-avt">
              <img src="@/assets/svgs/avt_detail.svg" alt="">
            </div>
            <div class="message-text">
              <div class="message-text-top">
                <div class="message-name">Trịnh Xuân Tùng</div>
                <div class="message-time">9:40 AM</div>
              </div>
              <div class="message-text-bottom">
                <div class="message-content">
                  Chúc em một ngày 8/3 vui vẻ, tràn đầy niềm vui trong cuộc sống...
                </div>
              </div>
            </div>
          </div>
          <div class="message">
            <div class="message-avt">
              <img src="@/assets/svgs/avt_detail.svg" alt="">
            </div>
            <div class="message-text">
              <div class="message-text-top">
                <div class="message-name">Trịnh Xuân Tùng</div>
                <div class="message-time">9:40 AM</div>
              </div>
              <div class="message-text-bottom">
                <div class="message-content">
                  Chúc em một ngày 8/3 vui vẻ, tràn đầy niềm vui trong cuộc sống...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="input-message">
          <input placeholder="Gửi lời chúc đến" class="" type="text">
          <img src="@/assets/svgs/ic_send.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.content {
  padding: 0 12px;
}

.container {
  height: 100vh;
}

.header .top {
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 12px;
}

.header .top .icon-back {
  cursor: pointer;
}

.header .detail-info {
  padding-top: 16px;
  text-align: center;
  padding-bottom: 12px;
}

.header .detail-info .name {
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  color: #FFFFFF;
}

.header .detail-info .detail-avatar {
  border-radius: 50%;
  margin-bottom: 8px;
  border: 3px solid #EC9A00;
  width: 80px;
  height: 80px;
  background-color: #FFFFFF;
  object-fit: contain;
}

.title {
  text-align: start;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #FFFFFF;
  margin-left: 12px;
}

.list-message {
  border-radius: 12px;
  height: calc(100svh - 243px);
  overflow: auto;
}

.list-message .message {
  background-color: #FFF9F6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 8px;
}

.list-message .message:last-child {
  border: none;
}

.list-message .message .message-avt {
  margin-right: 16px;
}

.list-message .message .message-avt img {
  border-radius: 50%;
  border: 1px solid #DB7B33;
  width: 43px;
  object-fit: contain;
  background-color: #FFFFFF;
}

.list-message .message .message-text {
  flex: 1;
}

.list-message .message .message-text .message-text-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-message .message .message-text .message-text-top .message-name {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #AC5412;
}

.list-message .message .message-text .message-text-top .message-time {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  color: rgba(0, 0, 0, 0.7);
}

.list-message .message .message-text .message-text-bottom .message-content {
  margin-top: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
}

.footer {
  position: fixed;
  bottom: 12px;
  left: 12px;
  right: 12px;
  z-index: 1000;
}

.footer .input-message {
  width: 100%;
}

.footer .input-message input {
  width: calc(100% - 52px);
  border-radius: 16.5px;
  background: rgba(255, 249, 246, 1);
  border: 1px solid rgba(227, 148, 89, 1);
  height: 33px;
  padding-left: 12px;
  padding-right: 40px;
  outline: none;
  color: #000000;
}

.footer .input-message img {
  position: absolute;
  right: 6px;
  top: 7px;
}
</style>