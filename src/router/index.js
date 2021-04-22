/*
 * @Author: ShaoYongQiang 
 * @Date: 2019-12-06 13:38:00 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-04-22 10:33:27
 */
import React from 'react';
import RouterMap from '@/router/map';
import Routes from '@/router/routes';

//dva的Routerview 只能是一个函数
function RouterView(props) {
    const routes = props.routes ? props.routes : Routes;
    return <RouterMap routes={routes} {...props}></RouterMap>
}

export default RouterView;