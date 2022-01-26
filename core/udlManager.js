/*
 * @Date: 2022-01-26 14:34:24
 * @LastEditors: youyi
 * @LastEditTime: 2022-01-26 16:00:18
 */
export default {
    Transactions: {},
    addTran(instanceId){
        let res = false
        // 初始化值
        // hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）
        if(!this.Transactions.hasOwnProperty(instanceId)){
            this.Transactions[instanceId] = {
                form: null,
                pages: {}
            }
            res = true
        }
        return res
    },
    getTranByInstanceId(instanceId){
        let res = {}
        if(this.Transactions.hasOwnProperty(instanceId)){
            res = this.Transactions[instanceId]
        }
        return res
    },
    deleteTran(instanceId){
        delete this.Transactions[instanceId]
    },
    addPage(pageId){
        let res = false
        if(!this.pages.hasOwnProperty(pageId)){
            this.pages[pageId] = {}
            res = true
        }
        return res
    },
    getPageById(pageId){
        let res = {}
        if(this.pages.hasOwnProperty(pageId)){
            res = this.pages[pageId]
        }
        return res
    }
}