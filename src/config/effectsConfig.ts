import type { SakuraConfig } from "../types/effectsConfig";

// 特效配置 - 集中管理所有动画特效
// 当前特效：末世废土风粒子（灰烬尘埃下沉 + 余烬火星上升发光闪烁）

export const sakuraConfig: SakuraConfig = {
	// 是否启用粒子特效
	enable: true,

	// 是否允许用户在设置中切换
	switchable: true,

	// 粒子数量（越大越密，也越耗性能）
	sakuraNum: 70,

	// 越界限制次数，-1为无限循环（粒子特效下保持 -1 即可）
	limitTimes: -1,

	// 粒子半径范围（单位：像素）
	size: {
		// 最小半径
		min: 1.5,
		// 最大半径
		max: 5.0,
	},

	// 粒子不透明度（废土风偏淡，营造尘埃感）
	opacity: {
		// 最小不透明度
		min: 0.1,
		// 最大不透明度
		max: 0.55,
	},

	// 粒子移动速度
	speed: {
		// 水平漂移（负值向左，正值向右；范围跨 0 形成左右飘散）
		horizontal: {
			// 水平速度最小值
			min: -0.3,
			// 水平速度最大值
			max: 0.3,
		},
		// 垂直下沉速度（仅作用于灰烬尘埃；火星为上升，速度内部固定）
		vertical: {
			// 垂直速度最小值
			min: 0.15,
			// 垂直速度最大值
			max: 0.5,
		},
		// 旋转速度（粒子为圆点，此项当前不影响渲染，保留以兼容配置类型）
		rotation: 0.03,
		// 消失速度（粒子特效下未使用，保留以兼容配置类型）
		fadeSpeed: 0.03,
	},

	// 层级，确保粒子在合适的层级显示
	zIndex: 100,
};
