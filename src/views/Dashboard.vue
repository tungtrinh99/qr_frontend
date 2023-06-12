<template>
  <div class="content">
    <div class="container">
      <div class="header">
        <div class="top">
          <p>Kiai QR <br><br> Leaderboard</p>
          <div class="search-bar">
            <input class="search" type="search" name="search">
            <img class="icon-search " src="@/assets/svgs/ic_search.svg" alt="">
          </div>
        </div>
      </div>
      <div class="body">
        <div class="leader-boarding">
          <div @click="$router.push({name: 'detail', params: {id: dataWomen[1].id}})" class="top top2">
            <div class="avatar">
              <img class="avt" :src="dataWomen[1]?.avatar" alt="">
              <div class="number">
                <span>2</span>
                <img src="@/assets/svgs/number_2.svg" alt="">
              </div>
            </div>
            <div class="info">
              <div class="name">{{ formatFullname(dataWomen[1]?.firstName, dataWomen[1]?.lastName) }}</div>
              <div class="vote-quantity">{{ dataWomen[1]?.messageCount }}</div>
              <div class="user-name">@{{ dataWomen[1]?.username }}</div>
            </div>
          </div>
          <div @click="$router.push({name: 'detail', params: {id: dataWomen[0].id}})" class="top top1">
            <div class="avatar">
              <img class="crown" src="@/assets/svgs/ic_crown.svg" alt="">
              <img class="avt" :src="dataWomen[0]?.avatar" alt="">
              <div class="number">
                <span>1</span>
                <img src="@/assets/svgs/number_1.svg" alt="">
              </div>
            </div>
            <div class="info">
              <div class="name">{{ formatFullname(dataWomen[0]?.firstName, dataWomen[0]?.lastName) }}</div>
              <div class="vote-quantity">{{ dataWomen[0]?.messageCount }}</div>
              <div class="user-name">@{{ dataWomen[0]?.username }}</div>
            </div>
          </div>
          <div @click="$router.push({name: 'detail', params: {id: dataWomen[2].id}})" class="top top3">
            <div class="avatar">
              <img class="avt" :src="dataWomen[2]?.avatar" alt="">
              <div class="number">
                <span>3</span>
                <img src="@/assets/svgs/number_3.svg" alt="">
              </div>
            </div>
            <div class="info">
              <div class="name">{{ formatFullname(dataWomen[2]?.firstName, dataWomen[2]?.lastName) }}</div>
              <div class="vote-quantity">{{ dataWomen[2]?.messageCount }}</div>
              <div class="user-name">@{{ dataWomen[2]?.username }}</div>
            </div>
          </div>
        </div>
        <div class="list-lady">
          <div
              @click="$router.push({ name: 'detail', params: { id: item.id }})"
              v-for="item in dataWomen.slice(3, dataWomen.length)"
              class="lady"
          >
            <div class="info">
              <img :src="item.avatar" alt="">
              <div class="wrap-text">
                <div class="name">{{ formatFullname(item.firstName, item.lastName) }}</div>
                <div class="user-name">@{{ item.username }}</div>
              </div>
            </div>
            <div class="vote-quantity">
              <img src="@/assets/svgs/ic_message.svg" alt="">
              {{ item._count?.Message }}
            </div>
          </div>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref, Ref} from "vue";
import axios from "@/plugins/axios";
import {Woman} from "@/types";
import {formatFullname} from "@/utils/format";

const dataWomen: Ref<Array<Woman>> = ref([]);
const fetchData = async () => {
  try {
    const data = await axios.get('women');
    if (data) {
      dataWomen.value = data.data;
    }
  } catch (error) {
    console.log(error)
  }
}
fetchData();
</script>
<style lang="css" scoped>
.content {
  padding: 0 24px;
}

.header p {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 12px;
  color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin: 16px 0 16px 0;
}

.header .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.body {
  margin-top: 8px;
}

.leader-boarding {
  display: flex;
  align-items: flex-end;
}

.leader-boarding .top {
  width: 33.33%;
  position: relative;
}

.leader-boarding .top .avatar .avt:hover {
  opacity: 0.8;
}

.leader-boarding .top .avatar {
  position: relative;
  display: flex;
  justify-content: center;
}

.leader-boarding .top1 .avatar {
  top: 31px;
}

.leader-boarding .top2 .avatar {
  top: 24px;
}

.leader-boarding .top3 .avatar {
  top: 24px;
}

.leader-boarding .top .avatar .avt {
  background-color: #FFFFFF;
}

.leader-boarding .top3 .avatar .avt {
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border: 3px solid #37B766;
  object-fit: contain;
  width: 68px;
  height: 68px;
}

.leader-boarding .top2 .avatar .avt {
  border-radius: 50%;
  border: 3px solid #4B9ABE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  object-fit: contain;
  width: 68px;
  height: 68px;
}

.leader-boarding .top1 .avatar .avt {
  border-radius: 50%;
  border: 3px solid #EC9A00;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  object-fit: contain;
  width: 82px;
  height: 82px;
}

.leader-boarding .top .avatar .crown {
  position: absolute;
  top: -31px;
}

.leader-boarding .top .avatar .number {
  position: absolute;
  bottom: -10px;
}

.leader-boarding .top .avatar .number span {
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  color: #FFFFFF;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 40%;
  transform: translateY(-50%);
}

.leader-boarding .top.top1 .info {
  padding-top: 57px;
  padding-bottom: 34px;
  padding-bottom: 34px;
  padding-left: 12px;
  padding-right: 12px;
}

.leader-boarding .top .info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 43px;
  padding-bottom: 17px;
  padding-left: 12px;
  padding-right: 12px;
}

.leader-boarding .top .info .name {
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: #FFFFFF;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}

.leader-boarding .top .info .vote-quantity {
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
}

.leader-boarding .top.top1 .info .user-name {
  margin-top: 16px;
}

.leader-boarding .top1 .info {
  border-radius: 30px 30px 0 0;
  background-color: #DB7B33;
}

.leader-boarding .top2 .info {
  border-radius: 12px 0 0 12px;
}

.leader-boarding .top3 .info {
  border-radius: 0 12px 12px 0;
}

.leader-boarding .top2 .info,
.leader-boarding .top3 .info {
  background-color: #C66821;
}

.leader-boarding .top1 .info .vote-quantity {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #F9C96E;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.leader-boarding .top2 .info .vote-quantity {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #4B9ABE;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.leader-boarding .top3 .info .vote-quantity {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #37B766;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.leader-boarding .top .info .user-name {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #FCD6C3;
  margin-top: 8px;
}

.list-lady {
  margin-top: 8px;
  height: calc(100svh - 335px);
  overflow: auto;
  margin-bottom: 8px;
}

.list-lady .lady {
  margin-top: 8px;
  border-bottom: 1px solid rgba(227, 148, 89, 0.5);
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-color: #FFF9F6;
}

.list-lady .lady:nth-child(1) {
  margin-top: 0;
}

.list-lady .lady:hover {
  opacity: 0.8;
}

.list-lady .lady .info {
  display: flex;
  align-items: center;
  flex: 1;
}

.list-lady .lady .info img {
  width: 60px;
  height: 60px;
  border: 1px solid #DB7B33;
  border-radius: 50%;
  object-fit: contain;
}

.list-lady .lady .info .wrap-text {
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-left: 20px;
  flex: 1;
}

.list-lady .lady .info .wrap-text .name {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #AC5412;
  max-width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.list-lady .lady .info .wrap-text .user-name {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
}

.list-lady .lady .vote-quantity {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #AC5412;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.list-lady .lady .vote-quantity img {
  margin-bottom: 4px;
}

.search-bar .search {
  border: 1px solid #F3F3F3;
  box-shadow: 0px 2px 6px rgba(108, 108, 108, 0.05), inset 0px 0px 3px 1px rgba(108, 108, 108, 0.05);
  border-radius: 6px;
  outline: none;
  background: rgba(255, 249, 246, 1);
  border: 1px solid rgba(227, 148, 89, 1);
  height: 32px;
  transition: visibility 0s, opacity 0.3s linear;
  opacity: 0;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>