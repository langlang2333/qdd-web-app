import Vue from 'vue'
import Router from 'vue-router'

// 网点列表
import StoreList from '@/pages/StoreList'
// 网点详情
import StoreDetail from '@/pages/StoreDetail'
// 产品列表
import ProductList from '@/pages/ProductList'
// 设备列表
import DeviceList from '@/pages/DeviceList'
// 产品详情
import ProductDetail from '@/pages/ProductDetail'
// 支付完成
import PayComplete from '@/pages/PayComplete'
// 订单详情
import OrderDetail from '@/pages/OrderDetail'
// 补缴欠款
import PayArrearage from '@/pages/PayArrearage'
// 优惠券列表
import CouponList from '@/pages/CouponList'
// 租赁电池入口
import RentBattery from '@/pages/RentBattery'
// 订单操作
import OrderOpsQRCode from '@/pages/OrderOpsQRCode'
// 退款账户设置
import UserPayAccount from '@/pages/UserPayAccount'
// 余额
import Balance from '@/pages/Balance'
// 运维首页
import OpsMain from '@/pages/OpsMain'
// 运维订单处理页面
import OpsOrderOps from '@/pages/OpsOrderOps'
// 运维订单处理步骤页面
import OpsOrderOpsStep from '@/pages/OpsOrderOpsStep'
// 资产管理-统计
import BatteryStatistics from '@/pages/BatteryStatistics'
// 资产管理-设备列表查询
import Equipmentlist from '@/pages/Equipmentlist'
// 资产管理-订货
import OrderBattery from '@/pages/OrderBattery'
// 资产管理-设备详情页面
import EquipmentDetail from '@/pages/EquipmentDetail'
// 资产管理-分配
import BatteryDistribution from '@/pages/BatteryDistribution'
// 财务管理-统计
import IncomeStatistics from '@/pages/IncomeStatistics'
// 财务管理-七天收益列表
import Incomelist from '@/pages/IncomeList'
// 用户中心-密码设置
import OpsUserPsw from '@/pages/OpsUserPsw'
// 用户中心-关于
import OpsAbout from '@/pages/OpsAbout'
// 电池查询-输入
import SearchMain from '@/pages/SearchMain'
// 分站电池统计
import StoreStatistics from '@/pages/StoreStatistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/devices',
      name: 'DeviceList',
      component: DeviceList
    },
    // 为了兼容已经发布的App使用products路径
    {
      path: '/products',
      name: 'StoreList',
      component: StoreList
    },
    {
      path: '/products-v0',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/products-v0/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/products/:id',
      name: 'StoreDetail',
      component: StoreDetail
    },
    {
      path: '/pay-complete',
      name: 'PayComplete',
      component: PayComplete
    },
    {
      path: '/orders/:orderId',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/pay-arrearage/:orderId',
      name: 'PayArrearage',
      component: PayArrearage
    },
    {
      path: '/coupons',
      name: 'CouponList',
      component: CouponList
    },
    {
      path: '/ops-main',
      name: 'OpsMain',
      component: OpsMain
    },
    {
      path: '/search-main',
      name: 'SearchMain',
      component: SearchMain
    },
    {
      path: '/ops-order-ops',
      name: 'OpsOrderOps',
      component: OpsOrderOps
    },
    {
      path: '/ops-order-ops-step',
      name: 'OpsOrderOpsStep',
      component: OpsOrderOpsStep
    },
    {
      path: '/store-statistics',
      name: 'StoreStatistics',
      component: StoreStatistics
    },
    {
      path: '/battery-statistics',
      name: 'BatteryStatistics',
      component: BatteryStatistics
    },
    {
      path: '/battery-distribution',
      name: 'BatteryDistribution',
      component: BatteryDistribution
    },
    {
      path: '/income-statistics',
      name: 'IncomeStatistics',
      component: IncomeStatistics
    },
    {
      path: '/equipment-list',
      name: 'Equipmentlist',
      component: Equipmentlist
    },
    {
      path: '/equipments/:ccusn',
      name: 'EquipmentDetail',
      component: EquipmentDetail
    },
    {
      path: '/order-battery',
      name: 'OrderBattery',
      component: OrderBattery
    },
    {
      path: '/income-list',
      name: 'Incomelist',
      component: Incomelist
    },
    {
      path: '/ops-user-psw',
      name: 'OpsUserPsw',
      component: OpsUserPsw
    },
    {
      path: '/ops-about',
      name: 'OpsAbout',
      component: OpsAbout
    },
    {
      path: '/rent-battery',
      name: 'RentBattery',
      component: RentBattery
    },
    {
      path: '/order-ops',
      name: 'OrderOpsQRCode',
      component: OrderOpsQRCode
    },
    {
      path: '/user-pay-account',
      name: 'UserPayAccount',
      component: UserPayAccount
    },
    {
      path: '/balance',
      name: 'Balance',
      component: Balance
    }
  ]
})
