
/**
 * @author BlackCat
 */

class moneyManager {
    constructor(type, object = "") {
        this.type = type;
        this.object = object;
    }
    mType() {
        switch (this.type) {
            case "llmoney":
                return "llmoney";
            case "scoreboard":
                return "scoreboard";
            default:
                //return logger.error(`未知的经济类型 : ${this.type}`);
                //return `未知的经济类型 : ${this.type}`;
                throw new Error("未知的经济类型" + this.type);
        }
    }
    set(xuid, value) {
        switch (this.type) {
            case "llmoney":
                return money.set(xuid, value);
            case "scoreboard":
                //return Scoreboard.setPlayerScore(data.xuid2uuid(xuid), this.object, value);
                return mc.setPlayerScore(data.xuid2uuid(xuid), this.object, value);
            default:
                //return logger.error(`未知的经济类型 : ${this.type}`);
                //return `未知的经济类型 : ${this.type}`;
                throw new Error("未知的经济类型" + this.type);
        }
    }
    add(xuid, value) {
        switch (this.type) {
            case "llmoney":
                return money.add(xuid, value);
            case "scoreboard":
                //return Scoreboard.addPlayerScore(data.xuid2uuid(xuid), this.object, value);
                return mc.addPlayerScore(data.xuid2uuid(xuid), this.object, value);
            default:
                //return logger.error(`未知的经济类型 : ${this.type}`);  
                //return `未知的经济类型 : ${this.type}`;
                throw new Error("未知的经济类型" + this.type);
        }
    }
    reduce(xuid, value) {
        switch (this.type) {
            case "llmoney":
                return money.reduce(xuid, value);
            case "scoreboard":
                //return Scoreboard.reducePlayerScore(data.xuid2uuid(xuid), this.object, value);
                return mc.reducePlayerScore(data.xuid2uuid(xuid), this.object, value);
            default:
                //return logger.error(`未知的经济类型 : ${this.type}`);
                //return `未知的经济类型 : ${this.type}`;
                throw new Error("未知的经济类型" + this.type);
        }
    }
    trans(xuid1, xuid2, value, PayNote) {
        switch (this.type) {
            case "llmoney":
                return money.trans(xuid1, xuid2, value, PayNote);
            case "scoreboard":
                //Scoreboard.addPlayerScore(data.xuid2uuid(xuid2), this.object, value);
                //return Scoreboard.reducePlayerScore(data.xuid2uuid(xuid1), this.object, value);
                return mc.reducePlayerScore(data.xuid2uuid(xuid1), this.object, value) && mc.addPlayerScore(data.xuid2uuid(xuid2), this.object, value);
            default:
                //return logger.error(`未知的经济类型 : ${this.type}`);
                //return `未知的经济类型 : ${this.type}`;
                throw new Error("未知的经济类型" + this.type);
        }
    }
    get(xuid) {
        switch (this.type) {
            case "llmoney":
                return money.get(xuid);
            case "scoreboard":
                //return Scoreboard.getPlayerScore(data.xuid2uuid(xuid), this.object);
                return mc.getPlayerScore(data.xuid2uuid(xuid), this.object);
            default:
                //throw new Error("未知的经济类型" + this.type);
                //return `未知的经济类型 : ${this.type}`;
                throw new Error("未知的经济类型" + this.type);
        }
    }
    getHistory(xuid, time = 86400 * 1) {
        switch (this.type) {
            case "llmoney":
                let record = money.getHistory(xuid, 86400 * time); // 1 天 = 86400 秒
                let resultArray = record.map(transaction => {
                    let from = transaction.from === "System" ? "系统" : transaction.from;
                    let to = transaction.to === "System" ? "系统" : transaction.to;
                    let note;
                    switch (transaction.note) {
                        case "TPRConsume":
                            note = "随机传送消耗经济";
                            break;
                        case "RefreshChunkConsume":
                            note = "刷新区块消耗经济";
                            break;
                        default:
                            note = transaction.note;
                            break;
                    }
                    return `付款人: ${from}, 收款人: ${to}, 金额: ${transaction.money}, 时间: ${transaction.time}, 备注: ${note}`;
                });
                return resultArray.join('\n');
            case "scoreboard":
                //return logger.error(`计分板经济暂不支持查询历史账单`);
                //throw new Error("计分板经济暂不支持查询历史账单");
                return `计分板经济暂不支持查询历史账单`;
            default:
                //return logger.error(`未知的经济类型 : ${this.type}`);
                //return `未知的经济类型 : ${this.type}`;
                throw new Error("未知的经济类型" + this.type);
        }
    }
    clearHistory(time = 86400 * 1) {
        switch (this.type) {
            case "llmoney":
                return money.clearHistory(time);
            case "scoreboard":
                //return logger.error(`计分板经济暂不支持删除历史账单记录`);
                //throw new Error("计分板经济暂不支持删除历史账单记录");
                return `计分板经济暂不支持删除历史账单记录`;
            default:
                //return logger.error(`未知的经济类型 : ${this.type}`);
                //return `未知的经济类型 : ${this.type}`;
                throw new Error("未知的经济类型" + this.type);
        }
    }
}

module.exports = moneyManager