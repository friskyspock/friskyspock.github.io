---
---

Auto-Correlation
Correlation between variable and its lagged version

Transforming Time Series Data
Used to remove noise and improve signal.
- Square root transform
- Log transform

typical plots
Time plot
Lag plot
ACF plot
Histogram

### Naïve Method
### Simple Average
### Moving Average Smoothing
- Centered moving average
- Trailing moving average
- Weighted moving average

### Exponential Smoothing
1. Simple exponential method
	- No trend
	- No seasonality
	- Level
	- Noise (cannot be model)

2. Holt's method
	- double exponential
	- Trend
	- No seasonality
	
3. Winter's method
	- Trend
	- Seasonality
	- Variants are possible

ARIMA (Auto Regressive Integrated Moving Average) Model
AR, MA, ARMA, ARIMA

Autoregression (AR) refers to the use of past values of the time series to predict future values. AR models assume that the value of the time series at a given time point is a function of the values at previous time points.

Moving Average (MA) refers to the use of past forecast errors to predict future values. MA models assume that the value of the time series at a given time point is a function of the errors made in the previous forecasts.

Integrated (I) refers to the differencing of the time series to make it stationary. Stationarity means that the statistical properties of the time series do not change over time. Differencing involves subtracting each value in the time series from its previous value to remove the trend and make the series stationary.

The order of the ARIMA model is denoted by (p, d, q), where p is the order of the autoregressive component, d is the order of differencing, and q is the order of the moving average component.
1.  **Identify the order of differencing (d)**: The first step in fitting an ARIMA model is often to apply differencing to the time series until it becomes stationary. The order of differencing required to achieve stationarity can be determined from the ACF plot. If the ACF plot shows a gradual decay without any significant spikes, then the time series may not require any differencing. However, if the ACF plot shows a significant positive spike at lag 1, then the time series may require first-order differencing (d=1). If the ACF plot shows a significant positive spike at lag 2, then the time series may require second-order differencing (d=2), and so on.

2.  **Identify the order of the autoregressive term (p)**: The order of the autoregressive (AR) term can be determined from the PACF plot. The PACF plot shows the relationship between the series and its lags, but only after removing the effects of any intermediate lags. If the PACF plot shows a significant positive spike at lag 1 and no significant spikes after that, then the AR term may be one (p=1). If there is a significant spike at lag 2 and no significant spikes after that, then the AR term may be two (p=2), and so on.

3.  **Identify the order of the moving average term (q)**: The order of the moving average (MA) term can also be determined from the ACF plot. If the ACF plot shows a significant spike at lag 1 and no significant spikes after that, then the MA term may be one (q=1). If there is a significant spike at lag 2 and no significant spikes after that, then the MA term may be two (q=2), and so on.