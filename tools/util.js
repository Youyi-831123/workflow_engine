/*
 * @Date: 2022-01-26 16:16:09
 * @LastEditors: youyi
 * @LastEditTime: 2022-01-26 17:11:32
 */
export const dutil = {
    newGiud(){
        let guid = ''
        for(let i = 1; i<= 32; i++){
            // toString中数字表示转换基数
            // 如果转换的基数大于10，则会使用字母来表示大于9的数字，
            // 比如基数为16的情况，则使用a到f的字母来表示10到15。
            const n = Math.floor(Math.random()*16.0).toString(16)
            guid += n
            if(i === 8 || i === 12 || i === 16 || i === 20){
                guid += '_'
            }
        }
        return guid
    }
}