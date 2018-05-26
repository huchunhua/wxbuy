// pages/indexPages/details/details..js
Page({
    onGroup:function(){
        wx.navigateTo({
            url: 'group/group'
        })
    },
    onShop:function(){
        wx.navigateTo({
            url: 'shoppingIndex/shoppingIndex',
        })
    }
})