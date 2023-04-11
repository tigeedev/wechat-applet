## 依赖组件

uni-drawer mx-datepicker（DatePicker） 代码单选多选参考了sl-filter

## 使用说明

```jsx
复制代码<template>
<view class="page-content">
        <view @tap="orderbyChange" :class="{'text-theme': hasChoose}">
            <span></span>筛选按钮
        </view>
        <fjj-condition ref='condition' @touchmove.stop :color="color" :list="menuList" :defaultValue="defaultValue" @result="resultConditon" />
    </view>
</template>
复制代码import fjjCondition from '@/components/fjj-condition/fjj-condition.vue';
    export default {
        data() {
            return {
                color: '#4D7BFE',
                hasChoose: false,
                menuList: [],
                defaultValue: {},
            };
        },
        components: {
            fjjCondition,
        },
        onLoad() {
            setTimeout(() => {
                this.menuList = [{
                    'title': '多选',
                    'type': 'custom',
                    'key': 'custom1',
                    'isMutiple': true, //多选
                    'detailList': [{
                        title: '多选选项1',
                        value: "1",
                        isSelected: true
                    }, {
                        title: '多选选项2',
                        value: "2",
                    }, {
                        title: '多选选项3',
                        value: "3",
                    }, {
                        title: '多选选项4',
                        value: "4",
                    }, {
                        title: '多选选项5',
                        value: "5",
                    }, {
                        title: '多选选项6',
                        value: "6",
                    }],
                }, {
                    'title': '多选带更多',
                    'type': 'custom',
                    'key': 'custom3',
                    'isMutiple': true, //多选
                    'detailList': [{
                        title: '多选选项1',
                        value: "1",
                    }, {
                        title: '多选选项2',
                        value: "2",
                    }, {
                        title: '多选选项3',
                        value: "3",
                    }, {
                        title: '多选选项4',
                        value: "4",
                    }, {
                        title: '多选选项5',
                        value: "5",
                    }, {
                        title: '多选选项6',
                        value: "6",
                    }, {
                        title: '多选选项7',
                        value: "7",
                    }],
                }, {
                    'title': '单选',
                    'type': 'custom',
                    'key': 'custom2',
                    'isMutiple': false, //单选
                    'detailList': [{
                        title: '选项1',
                        value: "1",
                    }, {
                        title: '选项2',
                        value: "2",
                    }],
                }, {
                    'title': '日期范围',
                    'type': 'range',
                    'key': 'time1',
                    'minName': 'time1MinName',
                    'maxName': 'time1MaxName',
                }, {
                    'title': '日期范围2',
                    'type': 'range',
                    'key': 'time11',
                }, {
                    'title': '日期范围带时间',
                    'type': 'rangetime',
                    'key': 'time2',
                }, {
                    'title': '日期',
                    'type': 'date',
                    'key': 'time3',
                }, {
                    'title': '日期2',
                    'type': 'date',
                    'key': 'time4',
                }, {
                    'title': '金额范围',
                    'type': 'rangenumber',
                    'key': 'count',
                }, {
                    'title': '输入框',
                    'type': 'singleinput',
                    'key': 'input',
                }]
                this.defaultValue = {
                    custom1: ['1', '2'],
                    custom3: ['2', '3'],
                    custom2: 1,
                    time1: ['2021/02/01', '2021/02/03'],
                    time2: ['2021/10/01 00:00:00', '2021/10/07 23:59:59'],
                    time3: '2021/04/01',
                    count: [10, 20],
                    input: 'fjj',
                };
            },2000)

        },
        methods: {
            //筛选返回值
            resultConditon(obj) {
                this.$refs.condition.visibleDrawer = false;
                this.hasChoose = obj.hasChoose;
                console.log(obj);
            },
            orderbyChange(obj) {
                this.$refs.condition.visibleDrawer = true;
            }
        }
    };
```

## 属性说明

|    属性名    |   类型   | 默认值  |                   说明                    |
| :----------: | :------: | :-----: | :---------------------------------------: |
|     list     |  Array   |   []    |           筛选面板列表数据 必填           |
|    color     |  String  | #4D7BFE |                 颜色 选填                 |
|    result    | Function |         |             点击确定后返回值              |
| defaultValue |  Object  |         | 默认值（有默认值则会调用回调函数@result） |

## list值说明

|   属性名   |  类型   |                             说明                             |
| :--------: | :-----: | :----------------------------------------------------------: |
|    type    | String  | range日期范围筛选、rangetime日期带时分秒范围筛选、custom单选多选、rangenumber数量范围筛选（）、date日期、singleinput输入框 |
|   title    | String  |                           显示名称                           |
|    key     | String  |                           名称key                            |
| isMutiple  | Boolean |                type为custom生效，是否支持多选                |
| detailList |  Array  |                  type为custom生效，选择列表                  |
|  minName   | String  | type为range、rangetime、rangenumber生效，返回日期或数量范围开始值 |
|  maxName   | String  | type为range、rangetime、rangenumber生效，返回日期或数量范围结束值 |

## result返回值说明

|   属性名   |  类型   |                        说明                         |
| :--------: | :-----: | :-------------------------------------------------: |
| hasChoose  | Boolean |               筛选面板用户是否选择值                |
|   result   | Object  |                 list对应key选择的值                 |
| str_result | Object  | list对应key选择的值 ，key选的值返回逗号隔开的字符串 |