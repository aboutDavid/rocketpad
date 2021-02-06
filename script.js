var minify = require("html-minifier").minify;
var emojis = [
  "😀",
  "😁",
  "😂",
  "😃",
  "😄",
  "😅",
  "😆",
  "😇",
  "😈",
  "👿",
  "😉",
  "😊",
  "☺️",
  "😋",
  "😌",
  "😍",
  "😎",
  "😏",
  "😐",
  "😑",
  "😒",
  "😓",
  "😔",
  "😕",
  "😖",
  "😗",
  "😘",
  "😙",
  "😚",
  "😛",
  "😜",
  "😝",
  "😞",
  "😟",
  "😠",
  "😡",
  "😢",
  "😣",
  "😤",
  "😥",
  "😦",
  "😧",
  "😨",
  "😩",
  "😪",
  "😫",
  "😬",
  "😭",
  "😮",
  "😯",
  "😰",
  "😱",
  "😲",
  "😳",
  "😴",
  "😵",
  "😶",
  "😷",
  "😸",
  "😹",
  "😺",
  "😻",
  "😼",
  "😽",
  "😾",
  "😿",
  "🙀",
  "👣",
  "👤",
  "👥",
  "👶",
  "👶🏻",
  "👶🏼",
  "👶🏽",
  "👶🏾",
  "👶🏿",
  "👦",
  "👦🏻",
  "👦🏼",
  "👦🏽",
  "👦🏾",
  "👦🏿",
  "👧",
  "👧🏻",
  "👧🏼",
  "👧🏽",
  "👧🏾",
  "👧🏿",
  "👨",
  "👨🏻",
  "👨🏼",
  "👨🏽",
  "👨🏾",
  "👨🏿",
  "👩",
  "👩🏻",
  "👩🏼",
  "👩🏽",
  "👩🏾",
  "👩🏿",
  "👪",
  "👨‍👩‍👧",
  "👨‍👩‍👧‍👦",
  "👨‍👩‍👦‍👦",
  "👨‍👩‍👧‍👧",
  "👩‍👩‍👦",
  "👩‍👩‍👧",
  "👩‍👩‍👧‍👦",
  "👩‍👩‍👦‍👦",
  "👩‍👩‍👧‍👧",
  "👨‍👨‍👦",
  "👨‍👨‍👧",
  "👨‍👨‍👧‍👦",
  "👨‍👨‍👦‍👦",
  "👨‍👨‍👧‍👧",
  "👫",
  "👬",
  "👭",
  "👯",
  "👰",
  "👰🏻",
  "👰🏼",
  "👰🏽",
  "👰🏾",
  "👰🏿",
  "👱",
  "👱🏻",
  "👱🏼",
  "👱🏽",
  "👱🏾",
  "👱🏿",
  "👲",
  "👲🏻",
  "👲🏼",
  "👲🏽",
  "👲🏾",
  "👲🏿",
  "👳",
  "👳🏻",
  "👳🏼",
  "👳🏽",
  "👳🏾",
  "👳🏿",
  "👴",
  "👴🏻",
  "👴🏼",
  "👴🏽",
  "👴🏾",
  "👴🏿",
  "👵",
  "👵🏻",
  "👵🏼",
  "👵🏽",
  "👵🏾",
  "👵🏿",
  "👮",
  "👮🏻",
  "👮🏼",
  "👮🏽",
  "👮🏾",
  "👮🏿",
  "👷",
  "👷🏻",
  "👷🏼",
  "👷🏽",
  "👷🏾",
  "👷🏿",
  "👸",
  "👸🏻",
  "👸🏼",
  "👸🏽",
  "👸🏾",
  "👸🏿",
  "💂",
  "💂🏻",
  "💂🏼",
  "💂🏽",
  "💂🏾",
  "💂🏿",
  "👼",
  "👼🏻",
  "👼🏼",
  "👼🏽",
  "👼🏾",
  "👼🏿",
  "🎅",
  "🎅🏻",
  "🎅🏼",
  "🎅🏽",
  "🎅🏾",
  "🎅🏿",
  "👻",
  "👹",
  "👺",
  "💩",
  "💀",
  "👽",
  "👾",
  "🙇",
  "🙇🏻",
  "🙇🏼",
  "🙇🏽",
  "🙇🏾",
  "🙇🏿",
  "💁",
  "💁🏻",
  "💁🏼",
  "💁🏽",
  "💁🏾",
  "💁🏿",
  "🙅",
  "🙅🏻",
  "🙅🏼",
  "🙅🏽",
  "🙅🏾",
  "🙅🏿",
  "🙆",
  "🙆🏻",
  "🙆🏼",
  "🙆🏽",
  "🙆🏾",
  "🙆🏿",
  "🙋",
  "🙋🏻",
  "🙋🏼",
  "🙋🏽",
  "🙋🏾",
  "🙋🏿",
  "🙎",
  "🙎🏻",
  "🙎🏼",
  "🙎🏽",
  "🙎🏾",
  "🙎🏿",
  "🙍",
  "🙍🏻",
  "🙍🏼",
  "🙍🏽",
  "🙍🏾",
  "🙍🏿",
  "💆",
  "💆🏻",
  "💆🏼",
  "💆🏽",
  "💆🏾",
  "💆🏿",
  "💇",
  "💇🏻",
  "💇🏼",
  "💇🏽",
  "💇🏾",
  "💇🏿",
  "💑",
  "👩‍❤️‍👩",
  "👨‍❤️‍👨",
  "💏",
  "👩‍❤️‍💋‍👩",
  "👨‍❤️‍💋‍👨",
  "🙌",
  "🙌🏻",
  "🙌🏼",
  "🙌🏽",
  "🙌🏾",
  "🙌🏿",
  "👏",
  "👏🏻",
  "👏🏼",
  "👏🏽",
  "👏🏾",
  "👏🏿",
  "👂",
  "👂🏻",
  "👂🏼",
  "👂🏽",
  "👂🏾",
  "👂🏿",
  "👀",
  "👃",
  "👃🏻",
  "👃🏼",
  "👃🏽",
  "👃🏾",
  "👃🏿",
  "👄",
  "💋",
  "👅",
  "💅",
  "💅🏻",
  "💅🏼",
  "💅🏽",
  "💅🏾",
  "💅🏿",
  "👋",
  "👋🏻",
  "👋🏼",
  "👋🏽",
  "👋🏾",
  "👋🏿",
  "👍",
  "👍🏻",
  "👍🏼",
  "👍🏽",
  "👍🏾",
  "👍🏿",
  "👎",
  "👎🏻",
  "👎🏼",
  "👎🏽",
  "👎🏾",
  "👎🏿",
  "☝",
  "☝🏻",
  "☝🏼",
  "☝🏽",
  "☝🏾",
  "☝🏿",
  "👆",
  "👆🏻",
  "👆🏼",
  "👆🏽",
  "👆🏾",
  "👆🏿",
  "👇",
  "👇🏻",
  "👇🏼",
  "👇🏽",
  "👇🏾",
  "👇🏿",
  "👈",
  "👈🏻",
  "👈🏼",
  "👈🏽",
  "👈🏾",
  "👈🏿",
  "👉",
  "👉🏻",
  "👉🏼",
  "👉🏽",
  "👉🏾",
  "👉🏿",
  "👌",
  "👌🏻",
  "👌🏼",
  "👌🏽",
  "👌🏾",
  "👌🏿",
  "✌",
  "✌🏻",
  "✌🏼",
  "✌🏽",
  "✌🏾",
  "✌🏿",
  "👊",
  "👊🏻",
  "👊🏼",
  "👊🏽",
  "👊🏾",
  "👊🏿",
  "✊",
  "✊🏻",
  "✊🏼",
  "✊🏽",
  "✊🏾",
  "✊🏿",
  "✋",
  "✋🏻",
  "✋🏼",
  "✋🏽",
  "✋🏾",
  "✋🏿",
  "💪",
  "💪🏻",
  "💪🏼",
  "💪🏽",
  "💪🏾",
  "💪🏿",
  "👐",
  "👐🏻",
  "👐🏼",
  "👐🏽",
  "👐🏾",
  "👐🏿",
  "🙏",
  "🙏🏻",
  "🙏🏼",
  "🙏🏽",
  "🙏🏾",
  "🙏🏿",
  "🌱",
  "🌲",
  "🌳",
  "🌴",
  "🌵",
  "🌷",
  "🌸",
  "🌹",
  "🌺",
  "🌻",
  "🌼",
  "💐",
  "🌾",
  "🌿",
  "🍀",
  "🍁",
  "🍂",
  "🍃",
  "🍄",
  "🌰",
  "🐀",
  "🐁",
  "🐭",
  "🐹",
  "🐂",
  "🐃",
  "🐄",
  "🐮",
  "🐅",
  "🐆",
  "🐯",
  "🐇",
  "🐰",
  "🐈",
  "🐱",
  "🐎",
  "🐴",
  "🐏",
  "🐑",
  "🐐",
  "🐓",
  "🐔",
  "🐤",
  "🐣",
  "🐥",
  "🐦",
  "🐧",
  "🐘",
  "🐪",
  "🐫",
  "🐗",
  "🐖",
  "🐷",
  "🐽",
  "🐕",
  "🐩",
  "🐶",
  "🐺",
  "🐻",
  "🐨",
  "🐼",
  "🐵",
  "🙈",
  "🙉",
  "🙊",
  "🐒",
  "🐉",
  "🐲",
  "🐊",
  "🐍",
  "🐢",
  "🐸",
  "🐋",
  "🐳",
  "🐬",
  "🐙",
  "🐟",
  "🐠",
  "🐡",
  "🐚",
  "🐌",
  "🐛",
  "🐜",
  "🐝",
  "🐞",
  "🐾",
  "⚡️",
  "🔥",
  "🌙",
  "☀️",
  "⛅️",
  "☁️",
  "💧",
  "💦",
  "☔️",
  "💨",
  "❄️",
  "🌟",
  "⭐️",
  "🌠",
  "🌄",
  "🌅",
  "🌈",
  "🌊",
  "🌋",
  "🌌",
  "🗻",
  "🗾",
  "🌐",
  "🌍",
  "🌎",
  "🌏",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌚",
  "🌝",
  "🌛",
  "🌜",
  "🌞",
  "🍅",
  "🍆",
  "🌽",
  "🍠",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🍔",
  "🍕",
  "🍖",
  "🍗",
  "🍘",
  "🍙",
  "🍚",
  "🍛",
  "🍜",
  "🍝",
  "🍞",
  "🍟",
  "🍡",
  "🍢",
  "🍣",
  "🍤",
  "🍥",
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🍰",
  "🍱",
  "🍲",
  "🍳",
  "🍴",
  "🍵",
  "☕️",
  "🍶",
  "🍷",
  "🍸",
  "🍹",
  "🍺",
  "🍻",
  "🍼",
  "🎀",
  "🎁",
  "🎂",
  "🎃",
  "🎄",
  "🎋",
  "🎍",
  "🎑",
  "🎆",
  "🎇",
  "🎉",
  "🎊",
  "🎈",
  "💫",
  "✨",
  "💥",
  "🎓",
  "👑",
  "🎎",
  "🎏",
  "🎐",
  "🎌",
  "🏮",
  "💍",
  "❤️",
  "💔",
  "💌",
  "💕",
  "💞",
  "💓",
  "💗",
  "💖",
  "💘",
  "💝",
  "💟",
  "💜",
  "💛",
  "💚",
  "💙",
  "🏃",
  "🏃🏻",
  "🏃🏼",
  "🏃🏽",
  "🏃🏾",
  "🏃🏿",
  "🚶",
  "🚶🏻",
  "🚶🏼",
  "🚶🏽",
  "🚶🏾",
  "🚶🏿",
  "💃",
  "💃🏻",
  "💃🏼",
  "💃🏽",
  "💃🏾",
  "💃🏿",
  "🚣",
  "🚣🏻",
  "🚣🏼",
  "🚣🏽",
  "🚣🏾",
  "🚣🏿",
  "🏊",
  "🏊🏻",
  "🏊🏼",
  "🏊🏽",
  "🏊🏾",
  "🏊🏿",
  "🏄",
  "🏄🏻",
  "🏄🏼",
  "🏄🏽",
  "🏄🏾",
  "🏄🏿",
  "🛀",
  "🛀🏻",
  "🛀🏼",
  "🛀🏽",
  "🛀🏾",
  "🛀🏿",
  "🏂",
  "🎿",
  "⛄️",
  "🚴",
  "🚴🏻",
  "🚴🏼",
  "🚴🏽",
  "🚴🏾",
  "🚴🏿",
  "🚵",
  "🚵🏻",
  "🚵🏼",
  "🚵🏽",
  "🚵🏾",
  "🚵🏿",
  "🏇",
  "🏇🏻",
  "🏇🏼",
  "🏇🏽",
  "🏇🏾",
  "🏇🏿",
  "⛺️",
  "🎣",
  "⚽️",
  "🏀",
  "🏈",
  "⚾️",
  "🎾",
  "🏉",
  "⛳️",
  "🏆",
  "🎽",
  "🏁",
  "🎹",
  "🎸",
  "🎻",
  "🎷",
  "🎺",
  "🎵",
  "🎶",
  "🎼",
  "🎧",
  "🎤",
  "🎭",
  "🎫",
  "🎩",
  "🎪",
  "🎬",
  "🎨",
  "🎯",
  "🎱",
  "🎳",
  "🎰",
  "🎲",
  "🎮",
  "🎴",
  "🃏",
  "🀄️",
  "🎠",
  "🎡",
  "🎢",
  "🚃",
  "🚞",
  "🚂",
  "🚋",
  "🚝",
  "🚄",
  "🚅",
  "🚆",
  "🚇",
  "🚈",
  "🚉",
  "🚊",
  "🚌",
  "🚍",
  "🚎",
  "🚐",
  "🚑",
  "🚒",
  "🚓",
  "🚔",
  "🚨",
  "🚕",
  "🚖",
  "🚗",
  "🚘",
  "🚙",
  "🚚",
  "🚛",
  "🚜",
  "🚲",
  "🚏",
  "⛽️",
  "🚧",
  "🚦",
  "🚥",
  "🚀",
  "🚁",
  "✈️",
  "💺",
  "⚓️",
  "🚢",
  "🚤",
  "⛵️",
  "🚡",
  "🚠",
  "🚟",
  "🛂",
  "🛃",
  "🛄",
  "🛅",
  "💴",
  "💶",
  "💷",
  "💵",
  "🗽",
  "🗿",
  "🌁",
  "🗼",
  "⛲️",
  "🏰",
  "🏯",
  "🌇",
  "🌆",
  "🌃",
  "🌉",
  "🏠",
  "🏡",
  "🏢",
  "🏬",
  "🏭",
  "🏣",
  "🏤",
  "🏥",
  "🏦",
  "🏨",
  "🏩",
  "💒",
  "⛪️",
  "🏪",
  "🏫",
  "🇦🇺",
  "🇦🇹",
  "🇧🇪",
  "🇧🇷",
  "🇨🇦",
  "🇨🇱",
  "🇨🇳",
  "🇨🇴",
  "🇩🇰",
  "🇫🇮",
  "🇫🇷",
  "🇩🇪",
  "🇭🇰",
  "🇮🇳",
  "🇮🇩",
  "🇮🇪",
  "🇮🇱",
  "🇮🇹",
  "🇯🇵",
  "🇰🇷",
  "🇲🇴",
  "🇲🇾",
  "🇲🇽",
  "🇳🇱",
  "🇳🇿",
  "🇳🇴",
  "🇵🇭",
  "🇵🇱",
  "🇵🇹",
  "🇵🇷",
  "🇷🇺",
  "🇸🇦",
  "🇸🇬",
  "🇿🇦",
  "🇪🇸",
  "🇸🇪",
  "🇨🇭",
  "🇹🇷",
  "🇬🇧",
  "🇺🇸",
  "🇦🇪",
  "🇻🇳",
  "⌚️",
  "📱",
  "📲",
  "💻",
  "⏰",
  "⏳",
  "⌛️",
  "📷",
  "📹",
  "🎥",
  "📺",
  "📻",
  "📟",
  "📞",
  "☎️",
  "📠",
  "💽",
  "💾",
  "💿",
  "📀",
  "📼",
  "🔋",
  "🔌",
  "💡",
  "🔦",
  "📡",
  "💳",
  "💸",
  "💰",
  "💎",
  "🌂",
  "👝",
  "👛",
  "👜",
  "💼",
  "🎒",
  "💄",
  "👓",
  "👒",
  "👡",
  "👠",
  "👢",
  "👞",
  "👟",
  "👙",
  "👗",
  "👘",
  "👚",
  "👕",
  "👔",
  "👖",
  "🚪",
  "🚿",
  "🛁",
  "🚽",
  "💈",
  "💉",
  "💊",
  "🔬",
  "🔭",
  "🔮",
  "🔧",
  "🔪",
  "🔩",
  "🔨",
  "💣",
  "🚬",
  "🔫",
  "🔖",
  "📰",
  "🔑",
  "✉️",
  "📩",
  "📨",
  "📧",
  "📥",
  "📤",
  "📦",
  "📯",
  "📮",
  "📪",
  "📫",
  "📬",
  "📭",
  "📄",
  "📃",
  "📑",
  "📈",
  "📉",
  "📊",
  "📅",
  "📆",
  "🔅",
  "🔆",
  "📜",
  "📋",
  "📖",
  "📓",
  "📔",
  "📒",
  "📕",
  "📗",
  "📘",
  "📙",
  "📚",
  "📇",
  "🔗",
  "📎",
  "📌",
  "✂️",
  "📐",
  "📍",
  "📏",
  "🚩",
  "📁",
  "📂",
  "✒️",
  "✏️",
  "📝",
  "🔏",
  "🔐",
  "🔒",
  "🔓",
  "📣",
  "📢",
  "🔈",
  "🔉",
  "🔊",
  "🔇",
  "💤",
  "🔔",
  "🔕",
  "💭",
  "💬",
  "🚸",
  "🔍",
  "🔎",
  "🚫",
  "⛔️",
  "📛",
  "🚷",
  "🚯",
  "🚳",
  "🚱",
  "📵",
  "🔞",
  "🉑",
  "🉐",
  "💮",
  "㊙️",
  "㊗️",
  "🈴",
  "🈵",
  "🈲",
  "🈶",
  "🈚️",
  "🈸",
  "🈺",
  "🈷",
  "🈹",
  "🈳",
  "🈂",
  "🈁",
  "🈯️",
  "💹",
  "❇️",
  "✳️",
  "❎",
  "✅",
  "✴️",
  "📳",
  "📴",
  "🆚",
  "🅰",
  "🅱",
  "🆎",
  "🆑",
  "🅾",
  "🆘",
  "🆔",
  "🅿️",
  "🚾",
  "🆒",
  "🆓",
  "🆕",
  "🆖",
  "🆗",
  "🆙",
  "🏧",
  "♈️",
  "♉️",
  "♊️",
  "♋️",
  "♌️",
  "♍️",
  "♎️",
  "♏️",
  "♐️",
  "♑️",
  "♒️",
  "♓️",
  "🚻",
  "🚹",
  "🚺",
  "🚼",
  "♿️",
  "🚰",
  "🚭",
  "🚮",
  "▶️",
  "◀️",
  "🔼",
  "🔽",
  "⏩",
  "⏪",
  "⏫",
  "⏬",
  "➡️",
  "⬅️",
  "⬆️",
  "⬇️",
  "↗️",
  "↘️",
  "↙️",
  "↖️",
  "↕️",
  "↔️",
  "🔄",
  "↪️",
  "↩️",
  "⤴️",
  "⤵️",
  "🔀",
  "🔁",
  "🔂",
  "#⃣",
  "0⃣",
  "1⃣",
  "2⃣",
  "3⃣",
  "4⃣",
  "5⃣",
  "6⃣",
  "7⃣",
  "8⃣",
  "9⃣",
  "🔟",
  "🔢",
  "🔤",
  "🔡",
  "🔠",
  "ℹ️",
  "📶",
  "🎦",
  "🔣",
  "➕",
  "➖",
  "〰",
  "➗",
  "✖️",
  "✔️",
  "🔃",
  "™",
  "©",
  "®",
  "💱",
  "💲",
  "➰",
  "➿",
  "〽️",
  "❗️",
  "❓",
  "❕",
  "❔",
  "‼️",
  "⁉️",
  "❌",
  "⭕️",
  "💯",
  "🔚",
  "🔙",
  "🔛",
  "🔝",
  "🔜",
  "🌀",
  "Ⓜ️",
  "⛎",
  "🔯",
  "🔰",
  "🔱",
  "⚠️",
  "♨️",
  "♻️",
  "💢",
  "💠",
  "♠️",
  "♣️",
  "♥️",
  "♦️",
  "☑️",
  "⚪️",
  "⚫️",
  "🔘",
  "🔴",
  "🔵",
  "🔺",
  "🔻",
  "🔸",
  "🔹",
  "🔶",
  "🔷",
  "▪️",
  "▫️",
  "⬛️",
  "⬜️",
  "◼️",
  "◻️",
  "◾️",
  "◽️",
  "🔲",
  "🔳",
  "🕐",
  "🕑",
  "🕒",
  "🕓",
  "🕔",
  "🕕",
  "🕖",
  "🕗",
  "🕘",
  "🕙",
  "🕚",
  "🕛",
  "🕜",
  "🕝",
  "🕞",
  "🕟",
  "🕠",
  "🕡",
  "🕢",
  "🕣",
  "🕤",
  "🕥",
  "🕦",
  "🕧"
];
document.addEventListener("DOMContentLoaded", async () => {
  const node = await window.Ipfs.create({ repo: "ipfs-" + Math.random() });
  window.node = node;

  if (location.hash.substr(1) !== "" && location.hash.substr(1).length > 10) {
    console.log("Loading hash", location.hash.substr(1));
    for await (const data of node.cat(location.hash.substr(1))) {
      quill.setContents(JSON.parse(data.toString()));
      document.querySelector("header").setAttribute("loaded", "true");
      document.querySelector("main").setAttribute("loaded", "true");
      document.querySelector(".loader").setAttribute("loaded", "true");
    }
  } else {
    document.querySelector("header").setAttribute("loaded", "true");
    document.querySelector("main").setAttribute("loaded", "true");
    document.querySelector(".loader").setAttribute("loaded", "true");
  }
});
async function generate() {
  const getBase64FromUrl = async url => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function() {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  };
  var startTime = new Date().valueOf();
  var promise = await fetch("./template.ejs");
  var template = await promise.text();
  var promise = await fetch("./css/markdown.css");
  var css = await promise.text();
  var quillhtml = window.quill.container.firstChild.innerHTML;
  var ejs = window.ejs;
  var icon = await getBase64FromUrl(
    `https://cors-anywhere.herokuapp.com/https://emojicdn.elk.sh/${encodeURIComponent(
      document.querySelector("#emojipicker").value
    )}?style=microsoft`
  );
  var output = ejs.render(template, {
    css: css,
    html: quillhtml,
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
    icon: document.querySelector("#emojipicker").value.startsWith("Choose")
      ? await getBase64FromUrl(
          `https://cors-anywhere.herokuapp.com/emojicdn.elk.sh/${encodeURIComponent(
            "🚀"
          )}?style=microsoft`
        )
      : icon
  });
  output = minify(output, {
    useShortDoctype: true,
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true
  });
  return `<!-- 🚀 Generated in ${(new Date().valueOf() - startTime) /
    1000} seconds by RocketPad (https://rocketpad.glitch.me) | View it on GitHub at https://github.com/aboutDavid/rocketpad -->
${output}`;
}
async function copy() {
  const { cid } = await window.node.add(await generate());
  await window.node.pin.add(cid.string);
  navigator.clipboard
    .writeText(`https://gateway.ipfs.io/ipfs/${cid.string}`)
    .then(
      function() {
        console.log("Copied!");
        document.getElementById("copybtn").innerHTML = "Copied to clipboard!";
        setTimeout(function() {
          document.getElementById("copybtn").innerHTML = "Copy Link";
        }, 3000);
      },
      function() {
        console.error("Failed to copy");
        document.getElementById("copybtn").innerHTML = "Failed to copy!";
        setTimeout(function() {
          document.getElementById("copybtn").innerHTML = "Copy Link";
        }, 3000);
      }
    );
}
async function saveDraft() {
  const { cid } = await window.node.add(JSON.stringify(quill.getContents()));
  navigator.clipboard.writeText(`${location.href}${cid.string}`).then(
    function() {
      console.log("Copied!");
      document.getElementById("savebtn").innerHTML = "Copied to clipboard!";
      setTimeout(function() {
        document.getElementById("savebtn").innerHTML = "Save Draft";
      }, 3000);
    },
    function() {
      console.error("Failed to copy");
      document.getElementById("savebtn").innerHTML = "Failed to copy!";
      setTimeout(function() {
        document.getElementById("savebtn").innerHTML = "Save Draft";
      }, 3000);
    }
  );
}
async function downloadHTML() {
  window.download(
    await generate(),
    new Date().toISOString() + ".html",
    "text/html"
  );
}

function load() {
  if (typeof Storage !== "undefined") {
    if (localStorage.getItem("autoSave")) {
      quill.setContents(JSON.parse(localStorage.getItem("autoSave")));
    } else {
      quill.setContents({
        ops: [
          { insert: "rocketpad" },
          { attributes: { header: 1 }, insert: "\n" },
          { insert: "This is " },
          { attributes: { bold: true }, insert: "rocketpad" },
          {
            insert:
              ", a web app that allows you to create mini-essays/websites and publish them to the distributed web via IPFS. It uses Quill.js as the editor due to its portability and its ability to work 100% offline. It saves your documents using IPFS. Here's a quick demo showing what you can use in your documents:\n\nQuotes"
          },
          { attributes: { blockquote: true }, insert: "\n" },
          { insert: "headers" },
          { attributes: { header: 2 }, insert: "\n" },
          { attributes: { bold: true }, insert: "bold" },
          { insert: " and " },
          { attributes: { italic: true }, insert: "italicized" },
          { insert: " text, maybe a bit of " },
          { attributes: { strike: true }, insert: "strikethrough" },
          { insert: "? What about " },
          { attributes: { background: "#ffff00" }, insert: "highlighting" },
          {
            insert:
              '?\n\nFun Fact: You can use markdown!\n\nWhen you are done with a document, make sure to click "Copy Link" to copy the link of your article.\n\n'
          },
          {
            attributes: {
              color: "var(--tertiary)",
              background: "#ffffff",
              link:
                "https://twitter.com/UpscaleDavid/status/1357862556845690882"
            },
            insert: "Twitter"
          },
          { attributes: { color: "#222222" }, insert: " | " },
          {
            attributes: {
              color: "var(--tertiary)",
              background: "#ffffff",
              link: "https://github.com/aboutDavid/rocketpad"
            },
            insert: "Github"
          },
          { attributes: { color: "#222222" }, insert: " | " },
          {
            attributes: {
              color: "var(--tertiary)",
              background: "#ffffff",
              link: "https://glitch.com/edit/#!/rocketpad"
            },
            insert: "Glitch"
          },
          { insert: "\n" }
        ]
      });
    }
  } else {
    console.error("Autosave not supported on this browser!");
  }
}
var i = 0;
var el = document.querySelector("#emojipicker");
while (i < emojis.length) {
  var emoji = emojis[i];

  var option = document.createElement("option");
  option.value = emoji;
  option.text = emoji;
  el.add(option, null);
  i++;
}
