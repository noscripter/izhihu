/**
 * 收藏页
 */
  if(pageIs.Collection){
    //添加按钮
    $('#zh-list-meta-wrap')
      .append($('<span>', { 'class': 'zg-bull' }).text('•'))
      .append($('<a>', { href: 'javascript:;', id: 'getAllLinks' }).text('地址清单'));

    var btn = $('#getAllLinks');
    var result = [];
        
    //注册点击事件
    btn.click(function(){
      var allLinksCollection=new allLinks('Collections','#zh-list-answer-wrap','收藏夹内容');
	  if(!allLinksCollection.initDialog())return;
      $('.modal-dialog-bg').show();
      var y = ($win.height() - allLinksCollection.$dlg.width()) / 2
        , x = ($win.width() - allLinksCollection.$dlg.width()) / 2
      ;
      allLinksCollection.$dlg.css({'top': y, 'left': x}).fadeIn('slow');
      allLinksCollection.start();
    });
  }
  if(pageIs.Answers){
    //添加按钮
    $('.zm-profile-section-name')
      .append($('<span>', { 'class': 'zg-bull' }).text('•'))
      .append($('<a>', { href: 'javascript:;', id: 'getAllLinks' }).text('地址清单'));

    var btn = $('#getAllLinks');
    var result = [];
        
    //注册点击事件
    btn.click(function(){
      var allLinksAnswers=new allLinks('Answers','#zh-profile-answer-list','用户回答');
	  if(!allLinksAnswers.initDialog())return;
      $('.modal-dialog-bg').show();
      var y = ($win.height() - allLinksAnswers.$dlg.width()) / 2
        , x = ($win.width() - allLinksAnswers.$dlg.width()) / 2
      ;
      allLinksAnswers.$dlg.css({'top': y, 'left': x}).fadeIn('slow');
      allLinksAnswers.start();
    });
  }

  if(pageIs.MyCollection&&window.iZhihu.QuickFavo){
    var $favItems=$('#zh-favlists-wrap').children('.zm-item');
    $favItems.each(function(i,e){
    });
  }
