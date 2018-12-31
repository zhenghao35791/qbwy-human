import Vue from 'vue'
import { getToken } from '@/utils/auth'

// tomcat部署的请求头
let dmParams = getToken('VUE_APP_Params')
let dmIp = getToken('VUE_APP_Ip')

// 汇总报告
export const getGatherReport = (userId, params) => Vue.axios.get(`${dmIp}/${dmParams}/${userId}/summary/report/`, params)

// omc文件及时性 数据类型，资源：nrm；性能：pm
export const getTimelinessOmc = (userId, dataType, params) => Vue.axios.get(`${dmIp}/${dmParams}/${userId}/quality/report/oss/${dataType}/omc/intime`, params)

// 文件 汇总报告 reportSequence编号（4表示文件大小汇总报告；5表示文件格式汇总报告）
export const getFileReport = (userId, params) => Vue.axios.get(`${dmIp}/${dmParams}/${userId}/summary/report/files`, params)
