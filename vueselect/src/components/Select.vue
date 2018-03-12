<template>
    <div>
        <i-select v-model="model1" @on-change="selChange" style="width:200px">
            <i-option v-for="item in selList1" :key="item.value" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select v-model="model2" @on-change="selChange" style="width:200px">
            <i-option v-for="item in selList2" :key="item.value" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select v-model="model3" @on-change="selChange" style="width:200px">
            <i-option v-for="item in selList3" :key="item.value" :value="item.value">{{ item.label }}</i-option>
        </i-select>
    </div>
</template>
<script>
  export default {
      data () {
          return {
              selList1: [],
              model1: '',
              selList2: [],
              model2: '',
              selList3: [],
              model3: '',
              selectlist: [
                {
                value:"1",
                label:"1"
                },
                {
                value:"2",
                label:"2"
                },
                {
                value:"3",
                label:"3"
                },
                {
                value:"4",
                label:"4"
                },
                {
                value:"5",
                label:"5"
                },
                {
                value:"6",
                label:"6"
                },
                {
                value:"7",
                label:"7"
                },
                {
                value:"8",
                label:"8"
                },
                {
                value:"9",
                label:"9"
                },
                {
                value:"10",
                label:"10"
                }
            ]
          }
      },
      methods: {
        init(){
            this.selList1=this.selectlist;
            this.selList2=this.selectlist;
            this.selList3=this.selectlist;
        },
        selChange(value){
            debugger
            this.selList1=this.selectlist.filter((item)=>{
                if(item.value!=this.model2&&item.value!=this.model3){
                    return item;
                }
            });
            this.selList2=this.selectlist.filter((item)=>{
                if(item.value!=this.model1&&item.value!=this.model3){
                    return item;
                }
            });
            this.selList3=this.selectlist.filter((item)=>{
                if(item.value!=this.model2&&item.value!=this.model1){
                    return item;
                }
            });
        },
      },
      created () {
        this.init();
      }
  }
</script>
