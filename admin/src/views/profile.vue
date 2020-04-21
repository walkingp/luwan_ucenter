<template>
  <section>
    <el-page-header @back="() => this.$router.back()" content="详情页面"></el-page-header>
    <el-divider></el-divider>
    <el-form ref="form" :model="model" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="model.username" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="() => this.$router.back()">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import { Form as ElForm } from "element-ui";
import Component from "vue-class-component";
import { get, post, put } from "./../utils/http";

@Component({})
export default class extends Vue {
  loading: boolean = false;
  isEdit: boolean = false;
  model: any = {
    title: "",
    parent: ""
  };
  parent: any = [];

  fetch() {
    get(`profile`).then((res: any) => {
      this.model = res.data;
    });
  }

  created() {
    this.fetch();
  }
}
</script>
