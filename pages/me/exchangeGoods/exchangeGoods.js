
Page({

    onRefund:function(){
        wx.navigateTo({
            url: 'refund/refund',
        })
    },
    onInquiry: function () {
        wx.navigateTo({
            url: 'inquiry/inquiry',
        })
    }
})