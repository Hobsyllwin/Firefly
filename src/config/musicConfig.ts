import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 禁用音乐播放器方法：
	// 模板默认侧边栏和导航栏两个都显示
	// 1. 侧边栏：在sidebarConfig.ts侧边栏配置把音乐组件enable设为false禁用即可
	// 2. 导航栏：在本配置文件把showInNavbar设为false禁用即可

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置（当 mode 为 'meting' 时使用，暂时停用，保留以便日后复用）
	// meting: {
	// 	// Meting API 地址
	// 	// 默认使用官方 API，也可以使用自定义 API
	// 	api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
	// 	// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
	// 	server: "netease",
	// 	// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
	// 	type: "playlist",
	// 	// 歌单/专辑/单曲 ID 或搜索关键词
	// 	id: "10046455237",
	// 	// 认证 token（可选）
	// 	auth: "",
	// 	// 备用 API 配置（当主 API 失败时使用）
	// 	fallbackApis: [
	// 		"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
	// 		"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
	// 	],
	// },

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			// {
			// 	name: "使一颗心免于哀伤",
			// 	artist: "知更鸟 / HOYO-MiX / Chevy",
			// 	url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
			// 	cover: "/assets/music/cover/109951169585655912.webp",
			// 	lrc: "",
			// },
			{
				name: "倒悬之海",
				artist: "西瓜JUN",
				url: "/assets/music/西瓜JUN - 倒悬之海.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/西瓜JUN - 倒悬之海.lrc",
			},
			{
				name: "鱼",
				artist: "西瓜JUN",
				url: "/assets/music/西瓜JUN - 鱼.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/西瓜JUN - 鱼.lrc",
			},
			{
				name: "Flamingo",
				artist: "米津玄師",
				url: "/assets/music/米津玄師 - Flamingo.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/米津玄師 - Flamingo.lrc",
			},
			{
				name: "マトリョシカ",
				artist: "米津玄師 / 初音ミク / GUMI",
				url: "/assets/music/米津玄師; 初音ミク; GUMI - マトリョシカ.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/米津玄師,初音ミク,GUMI - マトリョシカ.lrc",
			},
			{
				name: "灰色と青",
				artist: "米津玄師 / 菅田将暉",
				url: "/assets/music/米津玄師; 菅田将暉 - 灰色と青.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/米津玄師,菅田将暉 - 灰色と青.lrc",
			},
			{
				name: "夜に駆ける",
				artist: "YOASOBI",
				url: "/assets/music/YOASOBI - 夜に駆ける.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/YOASOBI - 夜に駆ける.lrc",
			},
			{
				name: "ミカヅキ",
				artist: "さユり",
				url: "/assets/music/さユり - ミカヅキ.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/さユり - ミカヅキ.lrc",
			},
			{
				name: "クネクネ (Wiggle Wiggle)",
				artist: "Raon",
				url: "/assets/music/Raon - クネクネ (Wiggle Wiggle).mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/Raon - クネクネ (Wiggle Wiggle).lrc",
			},
			{
				name: "Bloody Stream",
				artist: "Coda(小田和奏)",
				url: "/assets/music/Coda(小田和奏) - Bloody Stream.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/Coda(小田和奏) - Bloody Stream.lrc",
			},
			{
				name: "CH4NGE (Self Cover)",
				artist: "Giga",
				url: "/assets/music/Giga - CH4NGE (Self Cover).mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/Giga - CH4NGE (Self Cover).lrc",
			},
			{
				name: "Therefore I Am",
				artist: "Billie Eilish",
				url: "/assets/music/Billie Eilish - Therefore I Am.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/Billie Eilish - Therefore I Am.lrc",
			},
			{
				name: "Build Our Machine",
				artist: "Dagames",
				url: "/assets/music/Dagames - Build Our Machine.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/Dagames - Build Our Machine.lrc",
			},
			{
				name: "All Eyes On Me",
				artist: "OR3O",
				url: "/assets/music/OR3O - All Eyes On Me.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/OR3O - All Eyes On Me.lrc",
			},
		],
	},
};
