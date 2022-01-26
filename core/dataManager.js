/*
 * @Date: 2022-01-26 14:22:49
 * @LastEditors: youyi
 * @LastEditTime: 2022-01-26 14:32:33
 */
export default {
    ContextStore: {},
    SetContext: function(instanceId, context){
        this.ContextStore[instanceId] = context
    },
    GetContext: function(instanceId){
        return this.ContextStore[instanceId]
    },
    DeleteContext: function(instanceId) {
        delete this.ContextStore[instanceId]
    }
}