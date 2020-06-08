import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup.vue'

const install = (Vue)=>{
	//require.context("路径"，"是否遍历子路径"，"文件后缀名")用于大量导入模块
	const requireComponent = require.context(".",true,/\.vue/);
	requireComponent.keys().forEach(fileName=>{
		const config = requireComponent(fileName)
		Vue.component(config.default.name,config.default);
	})
}

if(typeof window.vue !== "undefined"){
	install(Vue)
}

export default {
	install
}