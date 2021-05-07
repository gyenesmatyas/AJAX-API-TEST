

// lange versie
$(document).ready(function(){
    
    $('#btnCoindesk').click(function fetch(){
        $('#loader').show();
        $.ajax({
            url:"https://api.coindesk.com/v1/bpi/currentprice.json",
            tyope:"GET",
            dataType:"JSON",
            data: JSON.stringify({ }),
            success:function(data){    
                $(".coindeskMessages").html("");            
                $(".coindeskMessages").append("<li>De prijs in USD: " + data['bpi']['USD']['rate'] + "</li>");
                $(".coindeskMessages").append("<li>De prijs in GBP: " + data['bpi']['GBP']['rate'] + "</li>");
                $(".coindeskMessages").append("<li>De prijs in EUR: " + data['bpi']['EUR']['rate'] + "</li>");
                $(".coindeskMessages").append("<li>Deze prijzen zijn laatst geupdate om: " + data['time']['updated']+ "</li>");
            }
        });
        $('#loader').hide();
    });
    
    $('#btnCoinAPI').click(function fetch(){
        $('#loader').show();
        $.ajax({
            url:"https://rest.coinapi.io/v1/assets/eth?apikey=0A8976A2-B68B-4CF1-8E71-A614A73D7EB0",
            tyope:"GET",
            dataType:"JSON",
            data: JSON.stringify({ }),
            success:function(data){    
                $(".coinAPIMessages").html("");
                $(".coinAPIMessages").append("<li>ETH price in USD: " + data["0"].price_usd+ "</li>");
            }
        });
        $('#loader').hide();
    });
});