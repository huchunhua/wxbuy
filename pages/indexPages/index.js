// pages/indexPages/index..js
Page({
    onTap:function(){
        wx.navigateTo({
            url: 'search/search'
        })
    },
    onDetails:function(){
        wx.navigateTo({
            url: 'details/details',
        })
    },
})