

// lange versie
$(document).ready(function(){
    $('#btnFetch').click(function fetch(){
        $('#loader').show();
        $.ajax({
            url:"https://api.coindesk.com/v1/bpi/currentprice.json",
            tyope:"GET",
            dataType:"JSON",
            data: JSON.stringify({ }),
            success:function(data){    
                $(".messages").html("");            
                $(".messages").append("<li>De prijs in USD: " + data['bpi']['USD']['rate'] + "</li>");
                $(".messages").append("<li>De prijs in GBP: " + data['bpi']['GBP']['rate'] + "</li>");
                $(".messages").append("<li>De prijs in EUR: " + data['bpi']['EUR']['rate'] + "</li>");
                $(".messages").append("<li>Deze prijzen zijn laatst geupdate om: " + data['time']['updated']+ "</li>");
            }
        });
        $('#loader').hide();
    });
});