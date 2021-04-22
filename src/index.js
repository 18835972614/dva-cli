/*
 * @Author: ShaoYongQiang 
 * @Date: 2019-12-06 13:42:23 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-04-22 10:34:13
 */
import dva from 'dva'
import router from '@/router'
import history from '@/utils/history'
import { createModel } from '@/store'

const app = dva({
    history: history,
});
createModel(app)
app.router(router)
app.start('#root')

