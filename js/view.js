'use strict';
{
    $(document).ready( function(){
        $('input:visible').eq(0).focus(); //$Band Nameにフォーカスを当てる
    });

    var userData = {};

    $(document).on('keydown', '#input_text_Band_Name', function(e) {
        if(e.which == 13){
            var input_text = $('#input_text_Band_Name').val();
            if(input_text == ''){
                $('#input_error_Band_Name').css('display', 'inline-block');
            }else{
                $('#input_error_Band_Name').css('display', 'none');
                $('#input_text_Password_id').css('display', 'inline-block');
                userData = {"Band_Name" : input_text};
                $('input:visible').eq(1).focus(); //$Passwordにフォーカスを当てる
            }
        } 
        if(e.shiftKey){
            if(e.keyCode === 37)
            history.go(-1);
        }
    });

    $(document).on('keydown', '#input_text_Password', function(e) {
        if(e.which == '13'){
            var input_text = $('#input_text_Password').val();
            var n = input_text.length;
            if(isHalfWidthAlphanumeric(input_text)){
                $('#input_error_Password').css('display', 'none');
                $('#input_text_Password_again_id').css('display', 'inline-block');
                $('input:visible').eq(2).focus(); //$Passwordにフォーカスを当てる                
            }
            if(input_text == ''){
                $('#input_error_Password').css('display', 'inline-block');
            }//else if(n < 12){
            /*    $('#input_error_Password').css('display', 'none');
                $('#input_text_Password_again_id').css('display', 'inline-block');
                $('input:visible').eq(2).focus(); //$Passwordにフォーカスを当てる
            }else if(n > 12){
                $('#input_error_Password').css('display', 'inline-block');
                alert('Please input 12 characters or less');
            }else if(n < 8){
                $('#input_error_Password').css('display', 'inline-block');
                alert('Please input 8 characters or less');
            }*/
        }
        if(e.shiftKey){
            if(e.keyCode === 37)
            history.go(-1);            
        }
    });

    /**
 * 半角英数字かチェック
 * @return true:半角英数字である(もしくは対象文字列がない), false:半角英数字でない
 */
function isHalfWidthAlphanumeric(value) {
    if ( value == null )
      return;
    if( value.match( /[^A-Za-z0-9s.-]+/ ) || value.match( /[^0-9.,-]+/ )  ) {
      alert("半角英文字で入力してください");
     }
     return true;
  }
  /**
   * 半角数字かチェック
   * @return true:半角数字である(もしくは対象文字列がない), false:半角数字でない
   */
  function isNumeric(value) {
    if ( value == null )
      return;
    if( value.match( /[^0-9.,-]+/ ) ) {
      alert("半角数字で入力して下さい。");
      return false;
    }
    return true;
  }
  /**
   * ひらがな・カタカナかチェック
   * @return true:ひらがな・カタカナである(もしくは対象文字列がない), false:ひらがな・カタカナでない
   */
  function isKana(value) {
    if ( value == null )
      return;
    if( value.match( /[^ぁ-んァ-ン　s]+/ ) ) {
      alert("ひらがなもしくはカタカナで入力して下さい。");
      return false;
    }
    return true;
  }
}