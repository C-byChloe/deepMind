from alpaca.data.historical import CryptoHistoricalDataClient
from alpaca.data.requests import CryptoBarsRequest
from alpaca.data.timeframe import TimeFrame
import datetime as datetime
from alpaca.data.live import StockDataStream
from alpaca.trading.client import TradingClient
from alpaca.trading.requests import MarketOrderRequest
from alpaca.trading.enums import OrderSide, TimeInForce
from alpaca.trading.requests import LimitOrderRequest



# # paper=True enables paper trading
trading_client = TradingClient('PKW1EL4Y7U6BGWF0WBO1', 'hoANZBx5MRspeIyRwL2fAzelH0fhJdaCk1qhKa3f', paper=True)


##Market Order 
# preparing orders
market_order_data = MarketOrderRequest(
                    symbol="SPY",
                    qty=10,
                    side=OrderSide.BUY,
                    time_in_force=TimeInForce.DAY
                    )

# Market order
market_order = trading_client.submit_order(
                order_data=market_order_data
               )


## Twitter Sentiment Analysis 

limit_order_data = LimitOrderRequest(
                    symbol="BTC/USD",
                    limit_price=17000,
                    notional=4000,
                    side=OrderSide.BUY,
                    time_in_force=TimeInForce.GTC
                   )

# # Limit order
limit_order = trading_client.submit_order(
                order_data=limit_order_data
              )

# wss_client = StockDataStream('AKIQ3ALAC0B2HOM1PPNE', 'dMekSYsqKqyoF6WM4lJ8YnE92ERDxeQVrhvrjAxa')

# # async handler
# async def quote_data_handler(data):
#     # quote data will arrive here
#     print(data)


# wss_client.subscribe_quotes(quote_data_handler, "AAPL")

# wss_client.run()

# # no keys required for crypto data
# client = CryptoHistoricalDataClient()

# request_params = CryptoBarsRequest(
#                         symbol_or_symbols=["BTC/USD", "ETH/USD"],
#                         timeframe=TimeFrame.Day,
#                         start=datetime.datetime(2022, 12, 20, 14, 30)
#                  )

# bars = client.get_crypto_bars(request_params)
# bars.df
# print(bars)