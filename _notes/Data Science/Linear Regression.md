---
---

### Evaluation Metrics for linear regression
1. Mean Absolute Error
2. Mean Squared Error (MSE)
3. Root mean squared error (RMSE)

### Evaluation metrics for LR models
1. R-squared
2. Adjusted R-squared

###
# Multiple Linear Regression

## Linear Regression Assumptions
1.  Linearity
2.  Endogeneity
3.  Normality and Homoscedasticity
4.  No autocorrelation
5.  No multicollinearity

#### Linearity
The following equation shows linearity
$$ \gamma =\beta_0 + \beta_1x + \beta_2x + ... + \epsilon $$
Fixes if linearity isn't followed:
-   Run non-linear algorithm
-   Exponential transformation
-   Log transformation

#### Endogeneity
occurs when predictor variable (x) is correlated with error term (e)
$$ \sigma_{x\epsilon} =0 \hspace{1cm}\forall x,\epsilon $$
Omitted variable bias

#### Normality and Homoscedasticity
-   Normality: $\epsilon \sim N(0,\sigma^2)$ error form normal distribution, fix: CLT
-   Zero mean: fix: intercept
-   Homoscedasticity: to have equal variance $\sigma_{\epsilon_1}^2 = \sigma_{\epsilon_2}^2 = ... =\sigma^2$

heteroscedastic data will look like this:
![[Homoscedasticity.png]]
Prevention:
-   Look for omitted variable bias
-   Look for outlier
-   Semi log transformation

#### No autocorrelation
- Autocorrelation is the Correlation of a series with a lagged copy of itself We need it while working with time series.

#### No multicollinearity
- One variable is correlated to other variables.

*Error should not be dependent on any variable*

[[Flow for Data]]


### SkLearn LinearRegression

A sample code
```python
from sklearn.linear_model import LinearRegression
#x is dependent
reg = LinearRegression
reg.fit(x,y)
```

A multiple regression case
```python
from sklearn.linear_model import LinearRegression

reg = LinearRegression
reg.fit(x,y)

reg.coef_
reg.intercept_

# Get the R-squared of the regression
reg.score(x,y)

# feature selection
from sklearn.feature_selection import f_regression

f_regression(x,y)
p_values = f_regression(x,y)[1]

```

Some steps to follow while doing linear regression
1. Checking categorical and numerical columns
2. Resolving with NA values
3. Dividing categorical columns into dummy columns
