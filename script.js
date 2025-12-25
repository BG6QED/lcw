// 呼号前缀池
let allowedPrefixesRaw = [
    // 单独前缀
    'ZV0','ZX0','ZS7','VK0','RI1A','KC4','CE9','DP1POL','DP0GVN','8J1RL','3Y','ZL9','ZL8','ZL7','ZL','ZK3','YJ',
    'VP6','VK9X','VK9W','VK9N','VK9M','VK9L','VK9C','VK0','VK','V8','V7','V6','T8','T3','T2','P2','WH9','NH9','KH9','AH9',
    'WH8S','NH8S','KH8S','AH8S','WH8','NH8','KH8','AH8','WH7K','NH7K','KH7K','AH7K','WH7','NH7','KH7','AH7','WH6','NH6','KH6','AH6',
    'WH5K','NH5K','KH5K','AH5K','WH5','NH5','KH5','AH5','WH4','NH4','KH4','AH4','WH3','NH3','KH3','AH3','WH2','NH2','KH2','AH2',
    'WH1','NH1','KH1','AH1','WH0','NH0','KH0','AH0','H40','H4','FW','FO0','FO','FK','E6','E5','DU','DV','DW','DX','DY','DZ',
    '4E','4F','4G','4H','4I','C2','A3','5W','4W','3D2','VP8','PZ','PY0F','PY','PU','PT','PS','PR','PP','ZW','PJ4','PJ2','OA','LW','LU',
    'HK0','HK','HC8','HC','FY','CX','CP','CE0Z','CE0Y','CE0X','XR','XQ','CC','CB','CA','3G','9Y','8R','YV0','ZF','VP9','VP5','VP2V','VP2M','VP2E',
    'VE','VY','VO','VA','XO','XJ','VX','VG','VA','CZ','CY','CK','CF','V3','V2','TI9','TI','TG','PJ7','PJ6','PJ5','XP','OX','WP5','NP5','KP5',
    'WP4','NP4','KP4','WP3','NP3','KP3','WP2','NP2','KP2','WP1','NP1','KP1','WL','NL','KL','AL','W','N','K','AL','AA','KG4','HP','HR','HI','HH',
    'FS','FP','FO0','FM','FJ','FG','CO','C6','8P','6Y','4U1UN','ZS8','ZS','ZD9','ZD8','ZD7','Z8','Z2','XT','V5','TZ','TY','TU','TT','TR','TN','TL',
    'TJ','T5','6O','ST','S9','S7','S0','J5','J2','FT','TO','FR','TX','FH','ET','EL','EA9','EA8','E3','D6','D4','D2','CT3','CN','5E','C9','C5','A2',
    '9X','9U','9Q','9L','9J','9G','8Q','7X','7Q','7P','6W','5Z','5X','5U','5T','5R','5N','5H','5A','3Y','3X','3V','3DA','3C0','3C','3B9','3B7','3B6',
    '3B8','3B','XX9','XZ','XW','XU','VU7','VU4','VU','AU','AT','UN','UO','UP','UQ','UK','YA','T6','SU','S2','P5','JY','JT','JD1','JS','JA','8N','8J',
    '7N','7J','HZ','7Z','HS','E2','D9','D7','DS','6N','6K','HL','EZ','EY','EX','EP','EK','E4','BS7H','BV','BU','BM','BX','BQ9P','BV9P','BI','BH','BG',
    'BD','BA','BR','BJ','BY','A7','A6','A5','A4','9V','9N','9W8','9W6','9W4','9W2','9M8','9M6','9M4','9M2','9M','9K','7O','5B','4Z','4X','4S','4L','4K',
    '4J','XV','3W','9W','BV9S','9M0','1S','ZA','Z6','Z3','YU','YT','YO','YL','UZ','UR','EO','EM','TK','TF','TC','TA','T7','SY2','SV2/A','SV5','SV9',
    'J4','SZ','SV','3Z','HF','SR','SN','8S','7S','SM','SA','S5','UI','UA','R','RI1F','RA2','UA2','OZ','OW','OU','OT','ON','OM','OK','OJ0','OH0','OH',
    'OE','LZ','LY','LX','LA','JX','JW','IS','I','HV','HB0','HB','HA','MC','MW','GC','2W','GW','MP','MU','GP','2U','GU','MZ','MS','MM','GZ','GS','2M',
    'GM','MH','MJ','GH','2J','GJ','MN','MI','GN','2I','GI','MT','MD','GT','2D','GD','MX','M','GX','G','2E','TP','TM','F','EW','EU','ES','ER','EJ','EI',
    'EH6','EA6','EH','EA','E7','Y8','DR','DA','CU','CT','C3','9H','9A','4U1ITU','4O','3A','1A'
];
for (let c = 'B'.charCodeAt(0); c <= 'H'.charCodeAt(0); c++) allowedPrefixesRaw.push('Y' + String.fromCharCode(c));
for (let c = 'A'.charCodeAt(0); c <= 'I'.charCodeAt(0); c++) allowedPrefixesRaw.push('8' + String.fromCharCode(c));
for (let c = 'A'.charCodeAt(0); c <= 'I'.charCodeAt(0); c++) allowedPrefixesRaw.push('7' + String.fromCharCode(c));
for (let c = 'U'.charCodeAt(0); c <= 'Z'.charCodeAt(0); c++) allowedPrefixesRaw.push('U' + String.fromCharCode(c));
for (let c = 'E'.charCodeAt(0); c <= 'I'.charCodeAt(0); c++) allowedPrefixesRaw.push('4' + String.fromCharCode(c));
for (let c = 'U'.charCodeAt(0); c <= 'Q'.charCodeAt(0); c++) allowedPrefixesRaw.push('U' + String.fromCharCode(c));
// 只保留长度为1~2的前缀，排除完整呼号和特殊长前缀
const allowedPrefixes = allowedPrefixesRaw.filter(p =>
    !/^Q/.test(p) && !/^0/.test(p) && !/^1/.test(p) && p.length <= 2
);

// 呼号生成函数（只用allowedPrefixes池）
function generateValidCallSign() {
    // B开头呼号优先用中国/台湾规范生成，其他呼号按通用规则
    const prefix = allowedPrefixes[Math.floor(Math.random() * allowedPrefixes.length)];
    if (prefix === 'B') {
        // 随机决定大陆或台湾规范
        if (Math.random() < 0.7) {
            return generateChinaCallSign();
        } else {
            return generateTaiwanCallSign();
        }
    }
    // 其他呼号按通用规则
    const regionNum = Math.floor(Math.random() * 10);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const suffixLen = 2 + Math.floor(Math.random() * 2); // 2~3位
    let suffix = '';
    for (let i = 0; i < suffixLen - 1; i++) {
        suffix += chars[Math.floor(Math.random() * chars.length)];
    }
    suffix += letters[Math.floor(Math.random() * letters.length)];
    return prefix + regionNum + suffix;
}
// 全局变量
let audioContext;
let oscillator;
let gainNode;
let isPlaying = false;
let currentKochLevel = 1;
let currentExercise = '';

// 学习统计数据
let practiceStats = {
    koch: { total: 0, correct: 0 },
    speed: { total: 0, correct: 0 },
    wae: { total: 0, correct: 0 }
};

// Koch方法每个级别新增的字符
const kochNewCharsPerLevel = {
    1: 'K,M', 2: 'U', 3: 'R', 4: 'E', 5: 'S', 6: 'N', 7: 'A', 8: 'P', 9: 'T', 10: 'L',
    11: 'W', 12: 'I', 13: '.', 14: 'J', 15: 'Z', 16: '=', 17: 'F', 18: 'O', 19: 'Y', 20: ',',
    21: 'V', 22: 'G', 23: '5', 24: '/', 25: 'Q', 26: '9', 27: '2', 28: 'H', 29: '3', 30: '8',
    31: 'B', 32: '?', 33: '4', 34: '7', 35: 'C', 36: '1', 37: 'D', 38: '6', 39: '0', 40: 'X'
};

// 摩尔斯码映射表
const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/', ',': '--..--', '.': '.-.-.-', '!': '-.-.--', '?': '..--..',
    '-': '-....-', '/': '-..-.', '"': '.-..-.', ':': '---...', ';': '-.-.-.',
    '(': '-.--.', ')': '-.--.-', '+': '.-.-.', '=': '-...-', '$': '...-..-'
};

// 常用摩尔斯码通联简语
const commonQSignals = [
    // ===== 呼叫 / 控制 =====
    'CQ', 'CQDX', 'QRZ', 'DE', 'K', 'KN', 'AR', 'SK', 'BT',
    'AA', 'RRR', 'BK', 'AS',

    // ===== 信号 / 状态 =====
    'RST', '5NN', 'QSB', 'QRM', 'QRN', 'QSY', 'QRX', 'QRV',
    'QRL', 'QRU', 'QRS', 'QRQ', 'QRO', 'QRP',

    // ===== 确认 / 结束 =====
    'QSL', 'QSO', 'TU', 'TNX', 'FB', 'OK',

    // ===== 问候 / 时间 =====
    'GA', 'GE', 'GM', 'GN', 'CUL', 'CUAGN',

    // ===== 人员 / 称呼 =====
    'OM', 'YL', 'XYL',
    'NAME', 'CALL', 'OP',
    'UR', 'MY', 'HR',

    // ===== 地点 / 路径 =====
    'QTH', 'LOC', 'GRID',
    'VIA', 'BURO', 'HOME',
    'DX', 'EU', 'AS', 'NA', 'AF', 'OC', 'SA',

    // ===== 设备 / 天线 / 功率 =====
    'RIG', 'ANT', 'ANTENNA',
    'YAGI', 'DIPOLE', 'VERT',
    'PWR', 'WATTS', 'AMP',
    'RX', 'TX', 'TRX',
    'KEY', 'MIC', 'SPKR',
    'ICOM', 'KENWOOD', 'YAESU',

    // ===== 传播 / 操作 =====
    'ES', 'FER', 'HW', 'ABT',
    'TEST', 'CONDX', 'WX',
    'INFO', 'RPRT',

    // ===== 天气 / 环境 =====
    'RAIN', 'SNOW', 'CLDY', 'SUNNY',
    'COLD', 'HOT', 'WARM',
    'TEMP', 'MINUS',

    // ===== 数字 / 竞赛 =====
    'NR', 'NO', 'SERIAL',
    'PSE', 'AGN', 'ALL',

    // ===== 礼貌 / 常用结尾 =====
    'HPE', 'GL', 'GP', 'VY',
    'DR', 'ALSO',

    // ===== 国家 / 示例 =====
    'CHINA', 'JAPAN', 'USA', 'RUSSIA',

    // ===== 常见数字词 =====
    '73', '88', '599', '55'
];

// 国家呼号前缀规则 - 根据ITU标准
const countryPrefixRules = {
    'CN': {
        prefix: 'B',
        stationTypes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'R', 'S', 'T', 'Y', 'Z'],
        regions: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        suffixLength: { min: 1, max: 4 },
        forbiddenSuffixes: ['QOA', 'QOB', 'QOC', 'QOD', 'QOE', 'QOF', 'QOG', 'QOH', 'QOI', 'QOJ', 'QOK', 'QOL', 'QOM', 'QON', 'QOO', 'QOP', 'QOQ', 'QOR', 'QOS', 'QOT', 'QOU', 'QOV', 'QOW', 'QOX', 'QOY', 'QOZ', 'SOS', 'XXX', 'TTT']
    },
    'International': {
        type1: {
            prefixLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            suffixLength: { min: 1, max: 4 },
            suffixLastChar: 'letter'
        },
        type2: {
            prefixLength: 2,
            numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            suffixLength: { min: 1, max: 4 },
            suffixLastChar: 'letter'
        }
    }
};

// 工具函数 - 显示反馈信息
function showFeedback(message, type, container) {
    if (!container) return;
    
    container.textContent = message;
    container.className = 'feedback-area';
    container.classList.add(type);
    
    setTimeout(() => {
        container.className = 'feedback-area';
        container.textContent = '';
    }, 3000);
}

// 工具函数 - 停止音频播放
function stopAudio() {
    if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
    }
    isPlaying = false;
}

// 工具函数 - 计算字符的摩尔斯码长度（以点为单位）
function getMorseCodeLength(char) {
    if (!morseCodeMap[char]) return 0;
    return morseCodeMap[char].split('').reduce((total, symbol) => {
        return total + (symbol === '.' ? 1 : 3) + 1;
    }, 0) - 1;
}

// 工具函数 - 计算单词的摩尔斯码总长度
function getWordMorseLength(word) {
    return word.split('').reduce((total, char) => {
        return total + getMorseCodeLength(char) + 3;
    }, 0) - 3 + 7;
}

// 工具函数 - 更新统计显示
function updateStats(moduleType, statsElementIds) {
    const stats = practiceStats[moduleType];
    document.getElementById(statsElementIds.total).textContent = stats.total;
    document.getElementById(statsElementIds.correct).textContent = stats.correct;
    
    const accuracy = stats.total > 0 
        ? Math.round((stats.correct / stats.total) * 100) 
        : 0;
    document.getElementById(statsElementIds.accuracy).textContent = `${accuracy}%`;
}

// 呼号生成相关函数

// 中国大陆呼号生成逻辑符合实际规范
function generateChinaCallSign() {
    const rules = countryPrefixRules.CN;
    // 第一部分：固定为B
    let callsign = rules.prefix;
    // 第二部分：电台种类
    // 一般业余台：G、H、I、D、A
    // 空间业余台：J
    // 中继/信标台：R
    // 其他字母由管理机构保留
    const stationTypes = ['G','H','I','D','A','Y','R'];
    const typeIndex = Math.floor(Math.random() * stationTypes.length);
    const stationType = stationTypes[typeIndex];
    callsign += stationType;
    // 第三部分：分区号
    let region;
    if (stationType === 'J') {
        region = '1'; // 空间业余台分区号为1
    } else {
        const regions = ['0','1','2','3','4','5','6','7','8','9'];
        region = regions[Math.floor(Math.random() * regions.length)];
    }
    callsign += region;
    // 第四部分：后缀，2~3位，最后一位必须是字母，不能全为数字，不能禁用组合
    let suffix;
    do {
        suffix = '';
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const suffixLength = 2 + Math.floor(Math.random() * 2); // 2~3位
        for (let i = 0; i < suffixLength - 1; i++) {
            suffix += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        // 最后一位必须是字母
        suffix += letters.charAt(Math.floor(Math.random() * letters.length));
    } while (
        rules.forbiddenSuffixes.includes(suffix) ||
        /^[0-9]+$/.test(suffix) // 不允许全数字
    );
    callsign += suffix;
    return callsign;
}

// 生成符合ITU方案一的国际呼号
function generateInternationalCallSignType1() {
    const rules = countryPrefixRules.International.type1;
    // 排除B开头
    const validPrefixes = rules.prefixLetters.filter(l => l !== 'B');
    const prefixIndex = Math.floor(Math.random() * validPrefixes.length);
    let callsign = validPrefixes[prefixIndex];
    
    // 1位数字
    const numberIndex = Math.floor(Math.random() * rules.numbers.length);
    callsign += rules.numbers[numberIndex];
    
    // 后缀（1-4个字符，最后一位必须是字母）
    const suffixLength = rules.suffixLength.min + 
                       Math.floor(Math.random() * (rules.suffixLength.max - rules.suffixLength.min + 1));
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let suffix = '';
    for (let i = 0; i < suffixLength - 1; i++) {
        suffix += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    // 最后一个字符必须是字母
    suffix += letters.charAt(Math.floor(Math.random() * letters.length));
    
    callsign += suffix;
    
    return callsign;
}

// 生成符合ITU方案二的国际呼号
function generateInternationalCallSignType2() {
    const rules = countryPrefixRules.International.type2;
    // 2个字符前缀，排除B开头
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let prefix = '';
    let firstLetter;
    do {
        firstLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    } while (firstLetter === 'B');
    prefix += firstLetter;
    // 第二位字母
    prefix += letters.charAt(Math.floor(Math.random() * letters.length));
    let callsign = prefix;
    
    // 1位数字
    const numberIndex = Math.floor(Math.random() * rules.numbers.length);
    callsign += rules.numbers[numberIndex];
    
    // 后缀（1-4个字符，最后一位必须是字母）
    const suffixLength = rules.suffixLength.min + 
                       Math.floor(Math.random() * (rules.suffixLength.max - rules.suffixLength.min + 1));
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    let suffix = '';
    for (let i = 0; i < suffixLength - 1; i++) {
        suffix += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    // 最后一个字符必须是字母
    suffix += letters.charAt(Math.floor(Math.random() * letters.length));
    
    callsign += suffix;
    
    return callsign;
}

function generateTaiwanCallSign() {
    // 台湾业余无线电呼号规则
    // 前缀：B
    let callsign = 'B';
    // 电台种类：M、N、O、P、Q、U、V、W、X
    const stationTypes = ['M','N','O','P','Q','U','V','W','X'];
    const typeIndex = Math.floor(Math.random() * stationTypes.length);
    const stationType = stationTypes[typeIndex];
    callsign += stationType;
    // 区域编号
    // 0:临时, 1:基隆/宜兰, 2:台北/新北, 3:桃園/新竹, 4:苗栗/台中, 5:彰化/南投/云林, 6:嘉义/台南, 7:高雄, 8:屏东/台东/花莲, 9:本岛以外
    const regions = ['0','1','2','3','4','5','6','7','8','9'];
    const regionIndex = Math.floor(Math.random() * regions.length);
    const region = regions[regionIndex];
    callsign += region;
    // 后缀规则
    let suffix = '';
    if (region === '0') {
        // 临时电台，后缀可为1~3位字母或数字
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const len = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < len; i++) {
            suffix += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    } else {
        // 正常电台
        if (stationType === 'X') {
            // X为中继台，后缀1位为特殊业余台，3位为二等业余台
            const twoOrThree = Math.random() < 0.5 ? 1 : 3;
            if (twoOrThree === 1) {
                suffix = randomLetters(1);
            } else {
                suffix = randomLetters(3);
            }
        } else {
            // 1位为特殊业余台，2位为一等业余台，3位为三等业余台
            const lenRand = Math.random();
            if (lenRand < 0.33) {
                suffix = randomLetters(1);
            } else if (lenRand < 0.66) {
                suffix = randomLetters(2);
            } else {
                suffix = randomLetters(3);
            }
        }
    }
    callsign += suffix;
    return callsign;
}
function randomLetters(n) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let s = '';
    for (let i = 0; i < n; i++) {
        s += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return s;
}

// Koch方法相关函数
function getKochLevelCharacters(level) {
    if (level < 1 || level > 40) return [];
    
    let characters = [];
    for (let i = 1; i <= level; i++) {
        if (!kochNewCharsPerLevel[i]) continue;
        
        const newChars = kochNewCharsPerLevel[i].split(',').map(c => c.trim());
        const validChars = newChars.filter(c => c !== '');
        characters = [...characters, ...validChars];
    }
    
    return [...new Set(characters)];
}

function getNewCharsForLevel(level) {
    if (level < 1 || level > 40 || !kochNewCharsPerLevel[level]) return [];
    return kochNewCharsPerLevel[level].split(',').map(c => c.trim()) || [];
}

function getRecommendedDuration(level) {
    return Math.min(60, 10 + Math.floor(level / 2) * 5);
}

// 计算基于时长的字符数量
function calculateCharacterCount(durationSeconds, wpm, useFarnsworth, type, level) {
    const dotDurationMs = 1200 / wpm;
    let charGap = dotDurationMs * 3;
    let wordGap = dotDurationMs * 7;
    
    if (useFarnsworth && wpm < 20) {
        const farnsworthFactor = 1.5 + (20 - wpm) * 0.1;
        charGap *= farnsworthFactor;
        wordGap *= farnsworthFactor;
    }
    
    let avgElementDurationMs;
    
    switch(type) {
        case 'koch':
            const currentChars = getKochLevelCharacters(level);
            const charLengths = currentChars.map(char => getMorseCodeLength(char));
            
            const avgCodeLength = charLengths.length > 0 
                ? charLengths.reduce((sum, len) => sum + len, 0) / charLengths.length 
                : 3.5;
                
            avgElementDurationMs = (avgCodeLength * dotDurationMs) + charGap;
            break;
        case 'code-groups':
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let groupLength = 0;
            for (let i = 0; i < 50; i++) {
                const char = chars.charAt(Math.floor(Math.random() * chars.length));
                groupLength += getMorseCodeLength(char);
            }
            const avgCharLength = groupLength / 50;
            avgElementDurationMs = (5 * avgCharLength * dotDurationMs) + 
                                  (4 * dotDurationMs * 3) + 
                                  dotDurationMs * 7;
            break;
        case 'plain-text':
        case 'words':
            let wordLength = 0;
            commonQSignals.forEach(word => {
                wordLength += getWordMorseLength(word);
            });
            const avgWordLength = wordLength / commonQSignals.length;
            avgElementDurationMs = avgWordLength * dotDurationMs;
            break;
        case 'callsign':
        case 'callsigns':
            let callSigns = [];
            for (let i = 0; i < 20; i++) {
                callSigns.push(generateValidCallSign());
            }
            let callSignLength = 0;
            callSigns.forEach(call => {
                callSignLength += getWordMorseLength(call);
            });
            const avgCallSignLength = callSignLength / callSigns.length;
            avgElementDurationMs = avgCallSignLength * dotDurationMs;
            break;
        case 'random':
            const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let randomCharLength = 0;
            for (let i = 0; i < randomChars.length; i++) {
                randomCharLength += getMorseCodeLength(randomChars[i]);
            }
            const avgRandomCharLength = randomCharLength / randomChars.length;
            avgElementDurationMs = (avgRandomCharLength * dotDurationMs) + charGap;
            break;
        default:
            avgElementDurationMs = (5 * dotDurationMs) + charGap;
    }
    
    const elementsNeeded = (durationSeconds * 1000) / avgElementDurationMs;
    return Math.max(3, Math.round(elementsNeeded));
}

// 摩尔斯码字符元素创建函数
function createMorseCharElement(char, code) {
    const element = document.createElement('div');
    element.className = 'morse-char-container';
    
    // 创建字符显示部分
    const charElement = document.createElement('div');
    charElement.className = 'morse-char';
    charElement.textContent = char === ' ' ? '空格' : char;
    
    // 将摩尔斯码转换为图形表示
    const codeVisual = document.createElement('div');
    codeVisual.className = 'morse-code-visual';
    
    code.split('').forEach(symbol => {
        const symbolElement = document.createElement('span');
        if (symbol === '.') {
            symbolElement.className = 'morse-dot';
            symbolElement.title = '点';
        } else if (symbol === '-') {
            symbolElement.className = 'morse-dash';
            symbolElement.title = '划';
        } else if (symbol === '/') {
            symbolElement.className = 'morse-space';
            symbolElement.title = '空格';
        }
        codeVisual.appendChild(symbolElement);
    });
    
    // 组合元素
    element.appendChild(charElement);
    element.appendChild(codeVisual);
    
    // 点击整个容器即可播放该字符的摩尔斯码（保留可中断性）
    element.addEventListener('click', async function() {
        // 如果正在播放，点击应当停止当前播放
        if (isPlaying) {
            stopAudio();
            return;
        }

        try {
            if (audioContext.state === 'suspended') {
                await audioContext.resume();
            }

            isPlaying = true;
            await playMorseCode(char, 20, 600, false);
        } catch (error) {
            console.error('播放单个字符时出错:', error);
        } finally {
            isPlaying = false;
        }
    });
    
    return element;
}

// 补充摩尔斯码视觉表示的CSS样式
const style = document.createElement('style');
style.textContent = `
.morse-char-container {
    flex: 0 0 calc(20% - 1rem);
    min-width: 120px;
    padding: 0.75rem;
    background-color: var(--light-gray);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: var(--transition);
}

.morse-char-container:hover {
    background-color: #e5e7eb;
    transform: translateY(-2px);
}

.morse-char {
    font-weight: bold;
    font-size: 1.25rem;
    color: var(--primary-color);
}

.morse-code-visual {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 24px;
    margin: 4px 0;
}

.morse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--secondary-color);
}

.morse-dash {
    width: 24px;
    height: 8px;
    border-radius: 2px;
    background-color: var(--secondary-color);
}

.morse-space {
    width: 32px;
    height: 2px;
    background-color: var(--medium-gray);
    align-self: center;
}

@media (max-width: 768px) {
    .morse-char-container {
        flex: 0 0 calc(33.333% - 1rem);
    }
}

@media (max-width: 480px) {
    .morse-char-container {
        flex: 0 0 calc(50% - 1rem);
    }
}

.koch-compact-char {
    display: inline-block;
    margin: 2px 4px;
    padding: 2px 6px;
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--primary-color);
    background: var(--light-gray);
    border-radius: 3px;
    cursor: default;
    user-select: none;
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}
.koch-compact-char:hover {
    background: #e5e7eb;
}
`;
document.head.appendChild(style);

// 音频相关函数
function calculateMorseDuration(text, wpm) {
    const dotDurationMs = 1200 / wpm;
    let totalDuration = 0;
    
    for (const char of text) {
        if (char === ' ') {
            totalDuration += dotDurationMs * 7; // 词间间隔
            continue;
        }
        
        const code = morseCodeMap[char.toUpperCase()];
        if (!code) continue;
        
        // 计算字符内的点和划的持续时间
        for (const symbol of code) {
            totalDuration += symbol === '.' ? dotDurationMs : dotDurationMs * 3;
            totalDuration += dotDurationMs; // 符号间间隔
        }
        
        // 减去最后一个符号后的间隔（将由字符间隔代替）
        totalDuration -= dotDurationMs;
        
        // 字符间间隔
        totalDuration += dotDurationMs * 3;
    }
    
    // 减去最后一个字符后的间隔
    totalDuration -= dotDurationMs * 3;
    
    return totalDuration;
}

// 音频播放核心函数（修复间隔问题）
async function playMorseCode(text, wpm, tone, useFarnsworth) {
    return new Promise(async (resolve, reject) => {
        if (!audioContext) {
            reject('音频上下文未初始化');
            return;
        }
        
        try {
            const dotDuration = 1200 / wpm; // 点的持续时间（毫秒）
            let charGap = dotDuration * 3;  // 字符间间隔（标准3个点长）
            const wordGap = dotDuration * 7; // 词间间隔（标准7个点长）
            const groupGap = dotDuration * 10; // 组间间隔（增强版，10个点长）
            
            // 应用Farnsworth节奏（慢速时放大间隔）
            if (useFarnsworth && wpm < 20) {
                const farnsworthFactor = 1.5 + (20 - wpm) * 0.1;
                charGap *= farnsworthFactor;
                wordGap *= farnsworthFactor;
                groupGap *= farnsworthFactor;
            }
            
            let currentTime = audioContext.currentTime;
            let charCount = 0; // 计数用于组间停顿
            
            // 逐字符处理
            for (const char of text) {
                if (!isPlaying) {
                    resolve();
                    return;
                }
                
                // 1. 处理空格（词间间隔）
                if (char === ' ') {
                    currentTime += wordGap / 1000;
                    charCount = 0; // 重置组计数
                    continue;
                }
                
                const code = morseCodeMap[char.toUpperCase()];
                if (!code) continue;
                
                // 2. 播放单个字符的摩尔斯码（点/划）
                for (const symbol of code) {
                    if (!isPlaying) {
                        resolve();
                        return;
                    }
                    oscillator = audioContext.createOscillator();
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(tone, currentTime);
                    oscillator.connect(gainNode);
                    
                    // 点/划的持续时间
                    const symbolDuration = symbol === '.' ? dotDuration : dotDuration * 3;
                    oscillator.start(currentTime);
                    oscillator.stop(currentTime + symbolDuration / 1000);
                    
                    // 推进时间
                    currentTime += symbolDuration / 1000;
                    currentTime += dotDuration / 1000; // 符号间间隔（1个点长）
                    
                    // 等待当前符号播放完成
                    await new Promise(resolve => {
                        oscillator.onended = resolve;
                    });
                }
                
                // 3. 添加字符间间隔
                currentTime += (charGap - dotDuration) / 1000;
                charCount++;
                
                // 4. 每5个字符添加组间长停顿
                if (charCount % 5 === 0 && char !== ' ') {
                    currentTime += (groupGap - charGap) / 1000;
                }
            }
            
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

// Koch模块播放函数
async function playExercise() {
    if (isPlaying) {
        stopAudio();
        playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
        isPlaying = false;
        return;
    }
    
    try {
        if (audioContext.state === 'suspended') {
            await audioContext.resume();
        }

        let exercise = currentExercise || generateExercise();
        const allowedChars = getKochLevelCharacters(currentKochLevel);
        
        // 仅过滤非法字符，保留空格
        exercise = exercise.split('').filter(char => {
            return allowedChars.includes(char) || char === ' ';
        }).join('');
        
        if (!exercise) {
            generateExercise();
            exercise = currentExercise;
            if (!exercise) {
                showFeedback('无法生成有效的练习内容，请检查当前级别设置', 'error', feedbackArea);
                return;
            }
        }
        
        isPlaying = true;
        playBtn.innerHTML = '<i class="fas fa-stop"></i> 停止';
        
        const speed = parseInt(speedSlider.value);
        const tone = parseInt(toneSlider.value);
        const useFarnsworth = farnsworthCheckbox.checked;
        
        // 播放带空格的完整文本
        await playMorseCode(exercise, speed, tone, useFarnsworth);
        
        isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
    } catch (error) {
        console.error('播放音频时出错:', error);
        showFeedback('播放音频时出错，请重试', 'error', feedbackArea);
        isPlaying = false;
        stopAudio();
        playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
    }
}

async function createAudioBlobUrl(text, wpm, tone, useFarnsworth) {
    const sampleRate = 44100;
    const maxDuration = 60; // 最长60秒
    const offlineContext = new OfflineAudioContext(1, sampleRate * maxDuration, sampleRate);

    const dotDuration = 1200 / wpm;
    let charGap = dotDuration * 3;
    const wordGap = dotDuration * 7;
    if (useFarnsworth && wpm < 20) {
        const farnsworthFactor = 1.5 + (20 - wpm) * 0.1;
        charGap *= farnsworthFactor;
    }

    let currentTime = 0;
    for (const char of text) {
        if (char === ' ') {
            currentTime += wordGap / 1000;
            continue;
        }
        const code = morseCodeMap[char.toUpperCase()];
        if (!code) continue;
        for (const symbol of code) {
            const duration = symbol === '.' ? dotDuration : dotDuration * 3;
            // 为每个点/划新建一个 oscillator
            const oscillator = offlineContext.createOscillator();
            const gainNode = offlineContext.createGain();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(tone, currentTime);
            oscillator.connect(gainNode);
            gainNode.connect(offlineContext.destination);

            gainNode.gain.setValueAtTime(1, currentTime);
            gainNode.gain.setValueAtTime(0, currentTime + duration / 1000);

            oscillator.start(currentTime);
            oscillator.stop(currentTime + duration / 1000);

            currentTime += duration / 1000;
            currentTime += dotDuration / 1000; // 符号间间隔
        }
        currentTime += (charGap - dotDuration) / 1000;
    }

    const audioBuffer = await offlineContext.startRendering();
    const wavBlob = audioBufferToWav(audioBuffer);
    return URL.createObjectURL(wavBlob);
}

async function createAndDownloadAudio(text, wpm, tone, useFarnsworth, prefix) {
    const blobUrl = await createAudioBlobUrl(text, wpm, tone, useFarnsworth);
    
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `${prefix}-${wpm}wpm-${tone}hz.wav`;
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
    }, 100);
}

function audioBufferToWav(buffer) {
    const numOfChannels = buffer.numberOfChannels;
    const length = buffer.length * numOfChannels * 2 + 44;
    const bufferArray = new ArrayBuffer(length);
    const view = new DataView(bufferArray);
    const channels = [];
    
    let sampleIndex = 0;
    
    // 写入WAV头部
    writeString(view, 0, 'RIFF');
    view.setUint32(4, length - 8, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numOfChannels, true);
    view.setUint32(24, buffer.sampleRate, true);
    view.setUint32(28, buffer.sampleRate * 2 * numOfChannels, true);
    view.setUint16(32, numOfChannels * 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, length - 44, true);
    
    // 准备声道数据
    for (let i = 0; i < numOfChannels; i++) {
        channels.push(buffer.getChannelData(i));
    }
    
    // 写入音频数据
    while (sampleIndex < buffer.length) {
        for (let i = 0; i < numOfChannels; i++) {
            const sample = Math.max(-1, Math.min(1, channels[i][sampleIndex]));
            view.setInt16(44 + sampleIndex * 2 * numOfChannels + i * 2, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
        }
        sampleIndex++;
    }
    
    return new Blob([bufferArray], { type: 'audio/wav' });
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}

// 模块初始化函数
function initKochLessonSelector() {
    const kochSelector = document.getElementById('koch-lesson-selector');
    const wavSelector = document.getElementById('wav-level');
    
    if (kochSelector) {
            kochSelector.onchange = function() {
            currentKochLevel = parseInt(this.value);
            const durationSlider = document.getElementById('koch-duration');
            const durationValue = document.getElementById('koch-duration-value');
            const recommendedDuration = getRecommendedDuration(currentKochLevel);
            durationSlider.value = recommendedDuration;
            durationValue.textContent = recommendedDuration;
            if (typeof updateKochModuleDisplay === 'function') {
                updateKochModuleDisplay();
            }
            if (typeof generateExercise === 'function') {
                generateExercise();
            }
            savePracticeStats();
        }
    }
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            stopAudio();
            
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.module').forEach(module => {
                module.classList.add('hidden');
                module.classList.remove('active');
            });
            
            this.classList.add('active');
            const targetId = this.getAttribute('href');
            const targetModule = document.querySelector(targetId);
            
            if (targetModule) {
                targetModule.classList.remove('hidden');
                targetModule.classList.add('active');
                
                if (targetId === '#koch' && typeof updateKochModuleDisplay === 'function') {
                    updateKochModuleDisplay();
                } else if (targetId === '#speed' && typeof window.speedGenerateExercise === 'function') {
                    window.speedGenerateExercise();
                } else if (targetId === '#wae' && typeof window.waeGenerateExercise === 'function') {
                    window.waeGenerateExercise();
                } else if (targetId === '#wav' && typeof window.generateWavContent === 'function') {
                    window.generateWavContent();
                }
            }
            
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });
    });
}

function initKochModule() {
    const speedSlider = document.getElementById('koch-speed');
    const speedDisplay = document.getElementById('koch-speed-value');
    const toneSlider = document.getElementById('koch-tone');
    const toneDisplay = document.getElementById('koch-tone-value');
    const durationSlider = document.getElementById('koch-duration');
    const durationDisplay = document.getElementById('koch-duration-value');
    const farnsworthCheckbox = document.getElementById('koch-farnsworth');
    const allCharactersDisplay = document.getElementById('koch-all-characters');
    const newCharactersDisplay = document.getElementById('koch-new-characters');
    const displayArea = document.getElementById('koch-display');
    const inputField = document.getElementById('koch-input');
    const playBtn = document.getElementById('koch-play');
    const checkBtn = document.getElementById('koch-check');
    const regenerateBtn = document.getElementById('koch-regenerate');
    const feedbackArea = document.getElementById('koch-feedback');
    const downloadAudioBtn = document.getElementById('koch-download');
    
    // 设置初始时长为推荐值
    const recommendedDuration = getRecommendedDuration(currentKochLevel);
    durationSlider.value = recommendedDuration;
    durationDisplay.textContent = recommendedDuration;
    
    // 更新模块显示（紧凑+可点击发声+摩尔斯码）
    window.updateKochModuleDisplay = function() {
        const kochSelector = document.getElementById('koch-lesson-selector');
        if (kochSelector) {
            kochSelector.value = currentKochLevel;
        }
        const allChars = getKochLevelCharacters(currentKochLevel);
        const newChars = getNewCharsForLevel(currentKochLevel);
        allCharactersDisplay.innerHTML = '';
        newCharactersDisplay.innerHTML = '';
        allChars.forEach(char => {
            const code = morseCodeMap[char] || '';
            const span = document.createElement('span');
            span.className = 'koch-compact-char';
            span.textContent = char;
            span.title = code;
            span.style.cursor = 'pointer';
            // 点击发声
            span.addEventListener('click', async function(e) {
                e.stopPropagation();
                if (isPlaying) {
                    stopAudio();
                    return;
                }
                isPlaying = true;
                await playMorseCode(char, parseInt(speedSlider.value), parseInt(toneSlider.value), farnsworthCheckbox.checked);
                isPlaying = false;
            });
            // 摩尔斯码图形
            const codeVisual = document.createElement('div');
            codeVisual.className = 'morse-code-visual';
            if (code) {
                code.split('').forEach(symbol => {
                    if (symbol === '.') {
                        const dot = document.createElement('div');
                        dot.className = 'morse-dot';
                        codeVisual.appendChild(dot);
                    } else if (symbol === '-') {
                        const dash = document.createElement('div');
                        dash.className = 'morse-dash';
                        codeVisual.appendChild(dash);
                    } else if (symbol === '/') {
                        const space = document.createElement('div');
                        space.className = 'morse-space';
                        codeVisual.appendChild(space);
                    }
                });
            }
            span.appendChild(codeVisual);
            allCharactersDisplay.appendChild(span);
        });
        newChars.forEach(char => {
            const code = morseCodeMap[char] || '';
            const span = document.createElement('span');
            span.className = 'koch-compact-char';
            span.textContent = char;
            span.title = code;
            span.style.cursor = 'pointer';
            span.addEventListener('click', async function(e) {
                e.stopPropagation();
                if (isPlaying) {
                    stopAudio();
                    return;
                }
                isPlaying = true;
                await playMorseCode(char, parseInt(speedSlider.value), parseInt(toneSlider.value), farnsworthCheckbox.checked);
                isPlaying = false;
            });
            const codeVisual = document.createElement('div');
            codeVisual.className = 'morse-code-visual';
            if (code) {
                code.split('').forEach(symbol => {
                    if (symbol === '.') {
                        const dot = document.createElement('div');
                        dot.className = 'morse-dot';
                        codeVisual.appendChild(dot);
                    } else if (symbol === '-') {
                        const dash = document.createElement('div');
                        dash.className = 'morse-dash';
                        codeVisual.appendChild(dash);
                    } else if (symbol === '/') {
                        const space = document.createElement('div');
                        space.className = 'morse-space';
                        codeVisual.appendChild(space);
                    }
                });
            }
            span.appendChild(codeVisual);
            newCharactersDisplay.appendChild(span);
        });
        updateStats('koch', {
            total: 'koch-total',
            correct: 'koch-correct',
            accuracy: 'koch-accuracy'
        });
    };
    // 生成练习内容（5字符一组，组间空格）
    window.generateExercise = function() {
    const characters = getKochLevelCharacters(currentKochLevel);
    if (characters.length === 0) {
        displayArea.textContent = '无法生成练习，当前级别没有可用字符';
        return;
    }
    const duration = parseInt(durationSlider.value);
    const speed = parseInt(speedSlider.value);
    const useFarnsworth = farnsworthCheckbox.checked;
    const charCount = calculateCharacterCount(duration, speed, useFarnsworth, 'koch', currentKochLevel);
    
    // 至少生成5个字符（1组），向上取整为5的倍数
    const totalChars = Math.max(5, Math.ceil(charCount / 5) * 5);
    let exerciseArr = [];
    
    // 生成随机字符数组（避免连续重复字符）
    for (let i = 0; i < totalChars; i++) {
        let currentChar;
        // 30%概率避免和前一个字符重复（提升练习难度）
        if (i > 0 && Math.random() < 0.3) {
            do {
                const randomIndex = Math.floor(Math.random() * characters.length);
                currentChar = characters[randomIndex];
            } while (currentChar === exerciseArr[i-1] && characters.length > 1);
        } else {
            const randomIndex = Math.floor(Math.random() * characters.length);
            currentChar = characters[randomIndex];
        }
        exerciseArr.push(currentChar);
    }
    
    // 每5个字符插入一个空格
    let exercise = '';
    for (let i = 0; i < exerciseArr.length; i++) {
        exercise += exerciseArr[i];
        // 每5个字符加空格，且不是最后一个字符
        if ((i + 1) % 5 === 0 && i !== exerciseArr.length - 1) {
            exercise += ' ';
        }
    }
    
    currentExercise = exercise;
    displayArea.textContent = '点击播放按钮听取摩尔斯码';
    inputField.value = '';
    feedbackArea.className = 'feedback-area';
}
    // 播放练习的摩尔斯码
    async function playExercise() {
        if (isPlaying) {
            // 如果正在播放则停止
            stopAudio();
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
            isPlaying = false;
            return;
        }
        
        try {
            if (audioContext.state === 'suspended') {
                await audioContext.resume();
            }
            
            let exercise = currentExercise || generateExercise();
            const allowedChars = getKochLevelCharacters(currentKochLevel);
            exercise = exercise.split('').filter(char => allowedChars.includes(char)).join('');
            
            if (!exercise) {
                generateExercise();
                exercise = currentExercise;
                
                if (!exercise) {
                    showFeedback('无法生成有效的练习内容，请检查当前级别设置', 'error', feedbackArea);
                    return;
                }
            }
            
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-stop"></i> 停止';
            
            const speed = parseInt(speedSlider.value);
            const tone = parseInt(toneSlider.value);
            const useFarnsworth = farnsworthCheckbox.checked;
            
            await playMorseCode(exercise, speed, tone, useFarnsworth);
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
        } catch (error) {
            console.error('播放音频时出错:', error);
            showFeedback('播放音频时出错，请重试', 'error', feedbackArea);
            isPlaying = false;
            stopAudio();
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
        }
    }
    
    // 检查答案（逐字符比对，统计正确率，保存历史）
    function checkAnswer() {
        if (!currentExercise) return;
        // 保留分组空格，逐字符比对
        const correctStr = currentExercise.replace(/\s/g, '');
        const userInputRaw = inputField.value.trim().toUpperCase();
        const userInput = userInputRaw.replace(/\s/g, '');
        let correctCount = 0;
        let detail = [];
        for (let i = 0; i < correctStr.length; i++) {
            const userChar = userInput[i] || '';
            const correctChar = correctStr[i];
            const isCharCorrect = userChar === correctChar;
            if (isCharCorrect) correctCount++;
            detail.push({
                index: i+1,
                user: userChar,
                correct: correctChar,
                result: isCharCorrect ? '✔' : '✘'
            });
        }
        const accuracy = Math.round((correctCount / correctStr.length) * 100);
        // 横向滚动分组展示，鼠标悬停显示详情
        let feedbackHtml = `<div>正确率：${accuracy}% (${correctCount}/${correctStr.length})</div>`;
        const groupSize = 5;
        feedbackHtml += `<div style="margin-top:8px;width:100%;max-width:100vw;overflow-x:auto;white-space:nowrap;height:90px;display:flex;align-items:center;border:1px solid #eee;border-radius:6px;padding:8px 0;box-sizing:border-box;">`;
        for (let i = 0; i < detail.length; i++) {
            const d = detail[i];
            const color = d.result === '✔' ? '#22c55e' : '#ef4444';
            feedbackHtml += `<div style="display:inline-block;background:${color};color:#fff;padding:6px 8px;border-radius:4px;min-width:38px;text-align:center;margin-right:4px;position:relative;cursor:pointer;${(i%groupSize===0&&i!==0)?'margin-left:16px;box-shadow:0 0 0 2px #ddd;':''}" title="序号:${d.index}\n你的:${d.user||'-'}\n正确:${d.correct}\n结果:${d.result}">
                <span style="font-size:1.1rem;font-weight:bold;">${d.user||'-'}</span>
            </div>`;
        }
        feedbackHtml += '</div>';
        feedbackArea.className = 'feedback-area';
        feedbackArea.innerHTML = feedbackHtml;
        // 保存历史记录到localStorage，增加错误字符统计
        const history = JSON.parse(localStorage.getItem('kochHistory') || '[]');
        const wrongChars = detail.filter(d => d.result === '✘').map(d => d.user || '-').join('');
        history.unshift({
            time: new Date().toLocaleString(),
            exercise: currentExercise,
            input: userInputRaw,
            accuracy,
            wrongChars
        });
        // 最多保存50条
        localStorage.setItem('kochHistory', JSON.stringify(history.slice(0,50)));
        if (window.renderKochHistory) window.renderKochHistory();
    // Koch历史记录页面折叠显示，无弹窗无详情
    if (!document.getElementById('koch-history-list')) {
        const historyDiv = document.createElement('div');
        historyDiv.id = 'koch-history-list';
        historyDiv.style.margin = '16px 0';
        historyDiv.innerHTML = `
            <details open>
                <summary style="font-size:1.1rem;font-weight:bold;cursor:pointer;">Koch历史记录</summary>
                <div id="koch-history-table"></div>
            </details>
        `;
        feedbackArea.parentNode.insertBefore(historyDiv, feedbackArea.nextSibling);
        function renderKochHistory() {
            const history = JSON.parse(localStorage.getItem('kochHistory') || '[]');
            const tableDiv = document.getElementById('koch-history-table');
            if (!tableDiv) return;
            if (history.length === 0) {
                tableDiv.innerHTML = '<div style="color:#888;">暂无历史记录</div>';
                return;
            }
            let html = '<table style="font-size:1rem;max-width:100%;border-collapse:collapse;"><tr><th>时间</th><th>练习内容</th><th>你的答案</th><th>正确率</th></tr>';
            history.forEach(item => {
                // 逐字符比对，生成高亮和下划线
                let ex = item.exercise.replace(/\s/g, '');
                let ans = (item.input||'').replace(/\s/g, '');
                let exArr = ex.split('');
                let ansArr = ans.split('');
                let exHtml = '';
                let ansHtml = '';
                for (let i = 0; i < exArr.length; i++) {
                    const isWrong = ansArr[i] !== exArr[i];
                    // 练习内容：错误字符下划线
                    if (isWrong) {
                        exHtml += `<span style="text-decoration:underline;text-decoration-color:#ef4444;text-underline-offset:2px;">${exArr[i]}</span>`;
                    } else {
                        exHtml += `<span>${exArr[i]}</span>`;
                    }
                    // 你的答案：错误字符红色
                    if (ansArr[i] === undefined) {
                        ansHtml += `<span style="color:#ef4444;">-</span>`;
                    } else if (isWrong) {
                        ansHtml += `<span style="color:#ef4444;">${ansArr[i]}</span>`;
                    } else {
                        ansHtml += `<span>${ansArr[i]}</span>`;
                    }
                }
                html += `<tr><td>${item.time}</td><td style="word-break:break-all;white-space:normal;">${exHtml}</td><td style="word-break:break-all;white-space:normal;">${ansHtml}</td><td>${item.accuracy}%</td></tr>`;
            });
            html += '</table>';
            tableDiv.innerHTML = html;
        }
        window.renderKochHistory = renderKochHistory;
        renderKochHistory();
    }
    // 更新统计（累计字符总数和正确字符数）
    practiceStats.koch.total += correctStr.length;
    practiceStats.koch.correct += correctCount;
        savePracticeStats();
        updateStats('koch', {
            total: 'koch-total',
            correct: 'koch-correct',
            accuracy: 'koch-accuracy'
        });
        setTimeout(generateExercise, 2000);
    }
    
    // 事件监听器
    speedSlider.addEventListener('input', function() {
        speedDisplay.textContent = this.value;
        generateExercise();
    });
    
    toneSlider.addEventListener('input', function() {
        toneDisplay.textContent = this.value;
    });
    
    durationSlider.addEventListener('input', function() {
        durationDisplay.textContent = this.value;
        generateExercise();
    });
    
    farnsworthCheckbox.addEventListener('change', generateExercise);
    
    playBtn.addEventListener('click', playExercise);
    checkBtn.addEventListener('click', checkAnswer);
    regenerateBtn.addEventListener('click', function() {
        stopAudio();
        generateExercise();
    });
    
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkAnswer();
    });
    
    downloadAudioBtn.addEventListener('click', async function() {
        if (!currentExercise) return;
        
        try {
            const speed = parseInt(speedSlider.value);
            const tone = parseInt(toneSlider.value);
            const useFarnsworth = farnsworthCheckbox.checked;
            await createAndDownloadAudio(currentExercise, speed, tone, useFarnsworth, 'koch-exercise');
        } catch (error) {
            console.error('下载音频时出错:', error);
            showFeedback('下载音频时出错，请重试', 'error', feedbackArea);
        }
    });
    
    savePracticeStats();
    updateKochModuleDisplay();
}

function initSpeedModule() {
    const typeSelect = document.getElementById('speed-type');
    const speedSlider = document.getElementById('speed-speed');
    const speedDisplay = document.getElementById('speed-value');
    const toneSlider = document.getElementById('speed-tone');
    const toneDisplay = document.getElementById('speed-tone-value');
    const durationSlider = document.getElementById('speed-duration');
    const durationDisplay = document.getElementById('speed-duration-value');
    const repeatCheckbox = document.getElementById('speed-repeat');
    const displayArea = document.getElementById('speed-display');
    const inputField = document.getElementById('speed-input');
    const playBtn = document.getElementById('speed-play');
    const replayBtn = document.getElementById('speed-replay');
    const checkBtn = document.getElementById('speed-check');
    const regenerateBtn = document.getElementById('speed-regenerate');
    const feedbackArea = document.getElementById('speed-feedback');
    const downloadBtn = document.getElementById('speed-download');
    
    let isRepeating = false;
    let repeatInterval;
    
    // 生成代码组练习
    function generateCodeGroups(count) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let groups = [];
        
        for (let i = 0; i < count; i++) {
            let group = '';
            for (let j = 0; j < 5; j++) {
                group += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            groups.push(group);
        }
        
        return groups.join(' ');
    }
    
    // 生成纯文本练习
    function generatePlainText(count) {
        let text = '';
        for (let i = 0; i < count; i++) {
            const word = commonQSignals[Math.floor(Math.random() * commonQSignals.length)];
            text += word + ' ';
        }
        return text.trim();
    }
    
    // 生成通联简语练习
    function generateWords(count) {
        let words = [];
        for (let i = 0; i < count; i++) {
            words.push(commonQSignals[Math.floor(Math.random() * commonQSignals.length)]);
        }
        return words.join(' ');
    }
    
    // 生成呼号练习
    function generateCallSigns(count) {
        let callsigns = [];
        for (let i = 0; i < count; i++) {
            callsigns.push(generateValidCallSign());
        }
        return callsigns.join(' ');
    }
    
    // 生成练习
    window.speedGenerateExercise = function() {
        const type = typeSelect.value;
        const duration = parseInt(durationSlider.value);
        const speed = parseInt(speedSlider.value);
        const count = calculateCharacterCount(duration, speed, false, type);
        
        switch (type) {
            case 'code-groups':
                currentExercise = generateCodeGroups(count);
                break;
            case 'plain-text':
                currentExercise = generatePlainText(count);
                break;
            case 'callsign':
                currentExercise = generateCallSigns(count);
                break;
            case 'words':
                currentExercise = generateWords(count);
                break;
            default:
                currentExercise = generateCodeGroups(count);
        }
        
        displayArea.textContent = '点击播放按钮听取摩尔斯码';
        inputField.value = '';
        feedbackArea.className = 'feedback-area';
    }
    
    // 播放练习
    async function playExercise() {
        // 如果正在播放且不是重复模式，则停止播放
        if (isPlaying && !isRepeating) {
            stopAudio();
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
            isPlaying = false;
            return;
        }
        
        try {
            if (audioContext.state === 'suspended') {
                await audioContext.resume();
            }
            
            if (isRepeating) {
                stopRepeat();
                return;
            }
            
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-stop"></i> 停止';
            
            const speed = parseInt(speedSlider.value);
            const tone = parseInt(toneSlider.value);
            
            if (repeatCheckbox.checked) {
                isRepeating = true;
                playBtn.innerHTML = '<i class="fas fa-stop"></i> 停止重复';
                await playMorseCode(currentExercise, speed, tone, false);
                const contentDuration = calculateMorseDuration(currentExercise, speed);
                repeatInterval = setInterval(async () => {
                    if (!isRepeating) return;
                    await playMorseCode(currentExercise, speed, tone, false);
                }, contentDuration + 2000);
            } else {
                await playMorseCode(currentExercise, speed, tone, false);
                isPlaying = false;
                playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
            }
        } catch (error) {
            console.error('播放音频时出错:', error);
            showFeedback('播放音频时出错，请重试', 'error', feedbackArea);
            stopAudio();
            stopRepeat();
        }
    }
    
    // 停止重复播放
    function stopRepeat() {
        if (isRepeating) {
            clearInterval(repeatInterval);
            isRepeating = false;
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
        }
    }
    
    // 检查答案
    function checkAnswer() {
        if (!currentExercise) return;
        
        const userInput = inputField.value.trim().toUpperCase();
        const normalizedExercise = currentExercise.toUpperCase();
        const isCorrect = userInput === normalizedExercise;
        
        practiceStats.speed.total++;
        if (isCorrect) {
            practiceStats.speed.correct++;
            showFeedback(`正确! 答案是: ${currentExercise}`, 'success', feedbackArea);
        } else {
            showFeedback(`错误。你的答案: ${userInput}，正确答案: ${currentExercise}`, 'error', feedbackArea);
        }
        
        savePracticeStats();
        updateStats('speed', {
            total: 'speed-total',
            correct: 'speed-correct',
            accuracy: 'speed-accuracy'
        });
        setTimeout(window.speedGenerateExercise, 2000);
    }
    
    // 事件监听器
    speedSlider.addEventListener('input', function() {
        speedDisplay.textContent = this.value;
        window.speedGenerateExercise();
    });
    
    toneSlider.addEventListener('input', function() {
        toneDisplay.textContent = this.value;
    });
    
    durationSlider.addEventListener('input', function() {
        durationDisplay.textContent = this.value;
        window.speedGenerateExercise();
    });
    
    typeSelect.addEventListener('change', window.speedGenerateExercise);
    
    playBtn.addEventListener('click', playExercise);
    replayBtn.addEventListener('click', async function() {
        if (isPlaying) return;
        await playExercise();
    });
    
    checkBtn.addEventListener('click', checkAnswer);
    regenerateBtn.addEventListener('click', function() {
        stopAudio();
        stopRepeat();
        window.speedGenerateExercise();
    });
    
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkAnswer();
    });
    
    downloadBtn.addEventListener('click', async function() {
        if (!currentExercise) return;
        
        try {
            const speed = parseInt(speedSlider.value);
            const tone = parseInt(toneSlider.value);
            await createAndDownloadAudio(currentExercise, speed, tone, false, 'speed-exercise');
        } catch (error) {
            console.error('下载音频时出错:', error);
            showFeedback('下载音频时出错，请重试', 'error', feedbackArea);
        }
    });
    
    window.speedGenerateExercise();
    updateStats('speed', {
        total: 'speed-total',
        correct: 'speed-correct',
        accuracy: 'speed-accuracy'
    });
}

function initWaeModule() {
    const formatSelect = document.getElementById('wae-format');
    const countSlider = document.getElementById('wae-count');
    const countDisplay = document.getElementById('wae-count-value');
    const speedSlider = document.getElementById('wae-speed');
    const speedDisplay = document.getElementById('wae-speed-value');
    const displayArea = document.getElementById('wae-display');
    const inputField = document.getElementById('wae-input');
    const playBtn = document.getElementById('wae-play');
    const checkBtn = document.getElementById('wae-check');
    const regenerateBtn = document.getElementById('wae-regenerate');
    const feedbackArea = document.getElementById('wae-feedback');
    
    // 生成WAE格式消息
    function generateWaeMessages(count) {
        const messages = [];
        for (let i = 0; i < count; i++) {
            const qtcNumber = i + 1;
            const callsign = generateValidCallSign();
            const serial = Math.floor(Math.random() * 1000);
            messages.push(`QTC ${qtcNumber} ${callsign} ${serial}`);
        }
        return messages.join(' / ');
    }
    
    // 生成DX格式消息
    function generateDxMessages(count) {
        const messages = [];
        for (let i = 0; i < count; i++) {
            const qtcNumber = i + 1;
            const callsign = generateValidCallSign();
            const report = Math.floor(Math.random() * 10) + 590;
            const zone = Math.floor(Math.random() * 40) + 1;
            messages.push(`QTC ${qtcNumber} ${callsign} ${report} ${zone}`);
        }
        return messages.join(' / ');
    }
    
    // 生成练习
    window.waeGenerateExercise = function() {
        const format = formatSelect.value;
        const count = parseInt(countSlider.value);
        
        if (format === 'wae') {
            currentExercise = generateWaeMessages(count);
        } else {
            currentExercise = generateDxMessages(count);
        }
        
        displayArea.textContent = '点击播放按钮听取摩尔斯码';
        inputField.value = '';
        feedbackArea.className = 'feedback-area';
    }
    
    // 播放练习
    async function playExercise() {
        if (isPlaying) {
            stopAudio();
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
            isPlaying = false;
            return;
        }
        
        try {
            if (audioContext.state === 'suspended') {
                await audioContext.resume();
            }
            
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-stop"></i> 停止';
            
            const speed = parseInt(speedSlider.value);
            const tone = 600;
            
            await playMorseCode(currentExercise, speed, tone, false);
            
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
        } catch (error) {
            console.error('播放音频时出错:', error);
            showFeedback('播放音频时出错，请重试', 'error', feedbackArea);
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放';
        }
    }
    
    // 检查答案
    function checkAnswer() {
        if (!currentExercise) return;
        
        const userInput = inputField.value.trim().toUpperCase();
        const normalizedExercise = currentExercise.toUpperCase();
        const isCorrect = userInput === normalizedExercise;
        
        practiceStats.wae.total++;
        if (isCorrect) {
            practiceStats.wae.correct++;
            showFeedback(`正确! 答案是: ${currentExercise}`, 'success', feedbackArea);
        } else {
            showFeedback(`错误。你的答案: ${userInput}，正确答案: ${currentExercise}`, 'error', feedbackArea);
        }
        
        savePracticeStats();
        updateStats('wae', {
            total: 'wae-total',
            correct: 'wae-correct',
            accuracy: 'wae-accuracy'
        });
        setTimeout(window.waeGenerateExercise, 2000);
    }
    
    // 事件监听器
    countSlider.addEventListener('input', function() {
        countDisplay.textContent = this.value;
        window.waeGenerateExercise();
    });
    
    speedSlider.addEventListener('input', function() {
        speedDisplay.textContent = this.value;
    });
    
    formatSelect.addEventListener('change', window.waeGenerateExercise);
    
    playBtn.addEventListener('click', playExercise);
    checkBtn.addEventListener('click', checkAnswer);
    regenerateBtn.addEventListener('click', function() {
        stopAudio();
        window.waeGenerateExercise();
    });
    
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkAnswer();
    });
    
    window.waeGenerateExercise();
    updateStats('wae', {
        total: 'wae-total',
        correct: 'wae-correct',
        accuracy: 'wae-accuracy'
    });
}

function initWavModule() {
    const typeSelect = document.getElementById('wav-type');
    const levelSelect = document.getElementById('wav-level');
    const speedSlider = document.getElementById('wav-speed');
    const speedDisplay = document.getElementById('wav-speed-value');
    const toneSlider = document.getElementById('wav-tone');
    const toneDisplay = document.getElementById('wav-tone-value');
    const durationSlider = document.getElementById('wav-duration');
    const durationDisplay = document.getElementById('wav-duration-value');
    const farnsworthCheckbox = document.getElementById('wav-farnsworth');
    const previewArea = document.getElementById('wav-preview-text');
    const generateBtn = document.getElementById('wav-generate');
    const playBtn = document.getElementById('wav-play');
    const regenerateContentBtn = document.getElementById('wav-regenerate-content');
    const downloadBtn = document.getElementById('wav-download');
    const feedbackArea = document.getElementById('wav-feedback');
    
    let generatedContent = '';
    let audioBlobUrl = '';
    
    // 生成Koch课程内容
    function generateKochContent(level, duration, speed, useFarnsworth) {
        const chars = getKochLevelCharacters(level);
        const count = calculateCharacterCount(duration, speed, useFarnsworth, 'koch', level);
        
        let content = '';
        // 改进随机算法，避免重复模式
        for (let i = 0; i < count; i++) {
            if (i > 0 && i % 5 === 0) {
                content += ' ';
            } else {
                // 70%概率完全随机选择，30%概率避免连续相同字符
                let currentChar;
                if (i > 0 && content[i-1] !== ' ' && Math.random() < 0.3) {
                    do {
                        const randomIndex = Math.floor(Math.random() * chars.length);
                        currentChar = chars[randomIndex];
                    } while (currentChar === content[i-1] && chars.length > 1);
                } else {
                    const randomIndex = Math.floor(Math.random() * chars.length);
                    currentChar = chars[randomIndex];
                }
                content += currentChar;
            }
        }
        
        return content;
    }
    
    // 生成随机字符内容
    function generateRandomContent(duration, speed, useFarnsworth) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
        const count = calculateCharacterCount(duration, speed, useFarnsworth, 'random');
        
        let content = '';
        for (let i = 0; i < count; i++) {
            if (i > 0 && i % 6 === 0) {
                content += ' ';
            } else {
                content += chars[Math.floor(Math.random() * (chars.length - 1))];
            }
        }
        
        return content;
    }
    
    // 生成通联简语内容
    function generateWordsContent(duration, speed, useFarnsworth) {
        const count = calculateCharacterCount(duration, speed, useFarnsworth, 'words');
        
        let content = '';
        let currentLength = 0;
        
        while (currentLength < count) {
            const word = commonQSignals[Math.floor(Math.random() * commonQSignals.length)];
            if (currentLength + 1 > count) break;
            
            content += word + ' ';
            currentLength++;
        }
        
        return content.trim();
    }
    
    // 生成呼号内容
    function generateCallsignsContent(duration, speed, useFarnsworth) {
        const count = calculateCharacterCount(duration, speed, useFarnsworth, 'callsigns');
        
        let content = '';
        let currentLength = 0;
        
        while (currentLength < count) {
            const callsign = generateValidCallSign();
            if (currentLength + 1 > count) break;
            
            content += callsign + ' ';
            currentLength++;
        }
        
        return content.trim();
    }
    
    // 生成练习内容
    window.generateWavContent = function() {
        const type = typeSelect.value;
        const duration = parseInt(durationSlider.value);
        const speed = parseInt(speedSlider.value);
        const useFarnsworth = farnsworthCheckbox.checked;
        
        switch (type) {
            case 'koch':
                const level = parseInt(levelSelect.value);
                generatedContent = generateKochContent(level, duration, speed, useFarnsworth);
                break;
            case 'random':
                generatedContent = generateRandomContent(duration, speed, useFarnsworth);
                break;
            case 'words':
                generatedContent = generateWordsContent(duration, speed, useFarnsworth);
                break;
            case 'callsigns':
                generatedContent = generateCallsignsContent(duration, speed, useFarnsworth);
                break;
            default:
                generatedContent = generateRandomContent(duration, speed, useFarnsworth);
        }
        
        previewArea.textContent = generatedContent;
        downloadBtn.classList.add('hidden');
        
        if (audioBlobUrl) {
            URL.revokeObjectURL(audioBlobUrl);
            audioBlobUrl = '';
        }
    }
    
    // 播放生成的内容
    async function playGeneratedContent() {
        if (!generatedContent) return;
        if (isPlaying) {
            stopAudio();
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放内容';
            isPlaying = false;
            return;
        }
        
        try {
            if (audioContext.state === 'suspended') {
                await audioContext.resume();
            }
            
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-stop"></i> 停止播放';
            
            const speed = parseInt(speedSlider.value);
            const tone = parseInt(toneSlider.value);
            const useFarnsworth = farnsworthCheckbox.checked;
            
            await playMorseCode(generatedContent, speed, tone, useFarnsworth);
            
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放内容';
        } catch (error) {
            console.error('播放音频时出错:', error);
            showFeedback('播放音频时出错，请重试', 'error', feedbackArea);
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放内容';
        }
    }
    
    // 生成并下载音频
    async function generateAndDownload() {
        if (!generatedContent) {
            showFeedback('请先生成内容', 'error', feedbackArea);
            return;
        }
        
        try {
            generateBtn.disabled = true;
            generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 生成中...';
            showFeedback('正在生成音频，请稍候...', 'info', feedbackArea);
            
            const speed = parseInt(speedSlider.value);
            const tone = parseInt(toneSlider.value);
            const useFarnsworth = farnsworthCheckbox.checked;
            
            audioBlobUrl = await createAudioBlobUrl(generatedContent, speed, tone, useFarnsworth);
            
            showFeedback('音频生成成功！', 'success', feedbackArea);
            downloadBtn.classList.remove('hidden');
        } catch (error) {
            console.error('生成音频时出错:', error);
            showFeedback('生成音频时出错，请重试', 'error', feedbackArea);
        } finally {
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fas fa-magic"></i> 生成音频';
        }
    }
    
    // 下载生成的音频
    function downloadGeneratedAudio() {
        if (!audioBlobUrl) return;
        
        const a = document.createElement('a');
        a.href = audioBlobUrl;
        a.download = 'morse-training.wav';
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
            document.body.removeChild(a);
        }, 100);
    }
    
    // 事件监听器
    speedSlider.addEventListener('input', function() {
        speedDisplay.textContent = this.value;
        window.generateWavContent();
    });
    
    toneSlider.addEventListener('input', function() {
        toneDisplay.textContent = this.value;
    });
    
    durationSlider.addEventListener('input', function() {
        durationDisplay.textContent = this.value;
        window.generateWavContent();
    });
    
    farnsworthCheckbox.addEventListener('change', window.generateWavContent);
    
    typeSelect.addEventListener('change', function() {
        const levelGroup = document.getElementById('wav-level-group');
        levelGroup.style.display = this.value === 'koch' ? 'block' : 'none';
        window.generateWavContent();
    });
    
    levelSelect.addEventListener('change', window.generateWavContent);
    
    generateBtn.addEventListener('click', generateAndDownload);
    playBtn.addEventListener('click', playGeneratedContent);
    regenerateContentBtn.addEventListener('click', function() {
        stopAudio();
        window.generateWavContent();
    });
    downloadBtn.addEventListener('click', downloadGeneratedAudio);
    
    window.generateWavContent();
}

function initConverterModule() {
    const inputField = document.getElementById('convert-input');
    const outputField = document.getElementById('morse-output');
    const speedSlider = document.getElementById('convert-speed');
    const speedDisplay = document.getElementById('convert-speed-value');
    const toneSlider = document.getElementById('convert-tone');
    const toneDisplay = document.getElementById('convert-tone-value');
    const farnsworthCheckbox = document.getElementById('convert-farnsworth');
    const playBtn = document.getElementById('convert-play');
    const copyBtn = document.getElementById('convert-copy');
    const downloadBtn = document.getElementById('convert-download');
    const feedbackArea = document.getElementById('convert-feedback');
    
    // 文本转摩尔斯码
    function textToMorse(text) {
        if (!text) return '输入文本以转换为摩尔斯码';
        
        const upperText = text.toUpperCase();
        let morse = [];
        
        for (let char of upperText) {
            if (morseCodeMap[char]) {
                morse.push(morseCodeMap[char]);
            } else if (char === ' ') {
                morse.push('/');
            }
        }
        
        return morse.join(' ');
    }
    
    // 转换文本
    function convertText() {
        const text = inputField.value;
        outputField.textContent = textToMorse(text);
    }
    
    // 播放摩尔斯码
    async function playMorse() {
        const text = inputField.value.trim();
        if (!text) {
            showFeedback('请输入要转换的文本', 'error', feedbackArea);
            return;
        }
        if (isPlaying) {
            stopAudio();
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放摩尔斯码';
            isPlaying = false;
            return;
        }
        
        try {
            if (audioContext.state === 'suspended') {
                await audioContext.resume();
            }
            
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-stop"></i> 停止';
            
            const speed = parseInt(speedSlider.value);
            const tone = parseInt(toneSlider.value);
            const useFarnsworth = farnsworthCheckbox.checked;
            
            await playMorseCode(text, speed, tone, useFarnsworth);
            
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放摩尔斯码';
        } catch (error) {
            console.error('播放音频时出错:', error);
            showFeedback('播放音频时出错，请重试', 'error', feedbackArea);
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i> 播放摩尔斯码';
        }
    }
    
    // 复制到剪贴板
    function copyToClipboard() {
        const text = outputField.textContent;
        if (text === '输入文本以转换为摩尔斯码') {
            showFeedback('没有可复制的内容', 'error', feedbackArea);
            return;
        }
        
        navigator.clipboard.writeText(text).then(() => {
            showFeedback('摩尔斯码已复制到剪贴板', 'success', feedbackArea);
        }).catch(err => {
            console.error('无法复制文本: ', err);
            showFeedback('复制失败，请手动复制', 'error', feedbackArea);
        });
    }
    
    // 下载音频
    async function downloadAudio() {
        const text = inputField.value.trim();
        if (!text) {
            showFeedback('请输入要转换的文本', 'error', feedbackArea);
            return;
        }
        
        try {
            const speed = parseInt(speedSlider.value);
            const tone = parseInt(toneSlider.value);
            const useFarnsworth = farnsworthCheckbox.checked;
            
            await createAndDownloadAudio(text, speed, tone, useFarnsworth, 'morse-conversion');
        } catch (error) {
            console.error('下载音频时出错:', error);
            showFeedback('下载音频时出错，请重试', 'error', feedbackArea);
        }
    }
    
    // 事件监听器
    inputField.addEventListener('input', convertText);
    
    speedSlider.addEventListener('input', function() {
        speedDisplay.textContent = this.value;
    });
    
    toneSlider.addEventListener('input', function() {
        toneDisplay.textContent = this.value;
    });
    
    playBtn.addEventListener('click', playMorse);
    copyBtn.addEventListener('click', copyToClipboard);
    downloadBtn.addEventListener('click', downloadAudio);
}

function generateMorseChart() {
    const chartContainer = document.getElementById('morse-chart');
    if (!chartContainer) return;
    
    const letters = [];
    const numbers = [];
    const symbols = [];
    
    for (const [char, code] of Object.entries(morseCodeMap)) {
        if (/[A-Z]/.test(char)) {
            letters.push({ char, code });
        } else if (/[0-9]/.test(char)) {
            numbers.push({ char, code });
        } else {
            symbols.push({ char, code });
        }
    }
    
    letters.sort((a, b) => a.char.localeCompare(b.char));
    numbers.sort((a, b) => a.char.localeCompare(b.char));
    
    // 创建标题
    const createSectionHeader = (text) => {
        const header = document.createElement('div');
        header.className = 'chart-section-header';
        header.textContent = text;
        return header;
    };
    
    // 添加字母部分
    chartContainer.appendChild(createSectionHeader('字母'));
    letters.forEach(item => {
        chartContainer.appendChild(createMorseCharElement(item.char, item.code));
    });
    
    // 添加数字部分
    chartContainer.appendChild(createSectionHeader('数字'));
    numbers.forEach(item => {
        chartContainer.appendChild(createMorseCharElement(item.char, item.code));
    });
    
    // 添加符号部分
    chartContainer.appendChild(createSectionHeader('符号'));
    symbols.forEach(item => {
        chartContainer.appendChild(createMorseCharElement(item.char, item.code));
    });
}

// 学习记录相关函数
function loadPracticeStats() {
    const savedStats = localStorage.getItem('morsePracticeStats');
    if (savedStats) {
        try {
            practiceStats = JSON.parse(savedStats);
        } catch (e) {
            console.error('Failed to parse saved stats:', e);
        }
    }
    
    const savedLevel = localStorage.getItem('currentKochLevel');
    if (savedLevel) {
        currentKochLevel = parseInt(savedLevel);
    }
}

function savePracticeStats() {
    localStorage.setItem('morsePracticeStats', JSON.stringify(practiceStats));
    localStorage.setItem('currentKochLevel', currentKochLevel.toString());
}

// DOM 元素加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    loadPracticeStats();
    initKochLessonSelector();
    initNavigation();
    initKochModule();
       initSpeedModule();
    initWaeModule();
    initWavModule();
    initConverterModule();
    generateMorseChart();
    
    // 初始化音频上下文
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
        gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
    } catch (e) {
        showFeedback('浏览器不支持Web Audio API，音频功能无法使用', 'error', document.querySelector('.module.active .feedback-area'));
    }
    
    // 首次加载时生成练习内容
    setTimeout(() => {
        if (typeof generateExercise === 'function') {
            generateExercise();
        }
    }, 100);
});
