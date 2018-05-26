
Page({
    onAllOrder:function(){
        wx.navigateTo({
            url: '/pages/me/orderInfo/orderInfo',
        })
    },
    onAddress:function(){
        wx.navigateTo({
            url: '/pages/me/address/address',
        })
    },
    onMyShooping:function(){
        wx.navigateTo({
            url: '/pages/shopping/shopping',
        })
    },
    onChangeOrder:function(){
        wx.navigateTo({
            url: '/pages/me/exchangeGoods/exchangeGoods',
        })
    },
    onFightAlone:function(){
        wx.navigateTo({
            url: '/pages/me/meLogin/fightAlone/fightAlone',
        })
    }
})