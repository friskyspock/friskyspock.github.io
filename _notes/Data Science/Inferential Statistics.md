---
---

### Point Estimators
Use a statistics from sample to estimate the corresponding population parameter

A Good point estimator should have following characteristics
- Unbiased Estimators
	- mean of sampling distribution of sample estimators is same as target parameter.
- Minimal Variance

Problem with point estimators
- point estimator (e.g. sample mean) is a single number that varies from sample to sample.
- we don't have any measures of how confident we are that point estimator is closed to actual target parameter.
We address these shortcomings by computing confidence intervals

Normal Distributions
- If distribution of individuals is normal then distribution of sample mean is also normal
- the mean of distribution of sample mean is same as mean of individuals
- the standard deviation of sample is equal to standard deviation of individuals divided by square root of n
$$\sigma_{\bar{x}} = \frac{\sigma_x}{\sqrt{n}}$$
![[sample mean distribution.png|500]]

### Confidence Interval
Instead of giving single number (the point estimator), we give interval of values centered on point estimator. i.e. $(\bar{x}-E,\bar{x}+E)$

- **Assumption 1**: The distribution of sample means is normal
	- By Central Limit Theorem, this is good assumption if sample size $n>30$ for any distribution. Also true for smaller n if underlying distribution is normal.
- **Assumption 2**: We know $\sigma_x$ the standard deviation of population of individual measurements.
	- This is NOT good assumption, we will later see how to use *t-statistics* in this case.

##### Level of confidence 
- **$1-\alpha$  is probability that interval contains true mean** ($\alpha$ is the probability that interval misses the mean)
- Usual values of ($1-\alpha$) are 90%, 95% and 99%

Calculating z-interval

```python
from scipy import stats
stats.norm.ppf(z_value,mean,standard_deviation)
```

Starting from z-interval and working backwards

## Hypothesis testing
Hypothesis testing is a statistical method that is used in making statistical decisions using experimental data. Hypothesis testing is basically an assumption that we make about the population parameter.
**Null Hypothesis**: Argument made so far, Or Hypothesis saying there is no difference or change
**Alternative Hypothesis**: New hypothesis that is hypothesis you want to prove with solid ground obtained from sample data

Two methods for hypothetical test
Classical Test Statistical Method
- Compare x-bar values 
- Compute boundary values A and B which are sample mean corresponding to a probability of $\alpha$ and compare it to measured $\bar{x}$ value (or its z-score) for the sample
p-value method
- Compare probabilities (area under pdf)
- Compute the probability corresponding to the measured sample mean and compare it to $\alpha$.

#### Procedure for Hypothesis Testing
1. Define Null and Alternative hypothesis
2. Identify the test statistics to be used for testing the validity of null hypothesis. For example: z-test or t-test
3. Decide the significant value ($\alpha$). Typical value for is 0.05
4. Calculate the p-value (probability value), which is conditional probability of observing the test statistic value when null hypothesis is true. Use function provided in scipy.stats module for calculaitng p-value
5. Take decision to reject or retain null hypothesis based on p-value and significance

**p-value<$\alpha$ reject the null hypothesis**

### An example for 1 sample 2 tail test
![[pvalue method.png]]
To calculate using critical method
```python
stats.norm.ppf(0.95,0,1)
stats.norm.ppf(0.05,0,1)
```

To calculate using p-value method
```python
zvalue = (xbar-mu)/(sigma/sqrt(n))
pvalue = stats.norm.sf(zvalue)
```

#### z-test vs t-test
![[Pasted image 20230410151529.png]]

## Student's T distribution
If the distribution of sample means is approximately normal, then the distribution of following statistics has a t-distribution
$$t=\frac{\bar{x}-\mu}{s/\sqrt{n}}$$
- T-distributions are family of distributions similar to standard normal(Z) distribution.
- Degrees of freedom $= n-1$. (n=sample size)
- 1 distribution for each degree of freedom
- Bell shaped
- Mean = 0
- Standard deviation $>1$. but approaches 1 as n increases
- Larger n $\rightarrow$ standard normal

#### Two Independent Samples
- If both population are normally distributed,
$$d=\bar{x}_1-\bar{x}_2$$$$\mu_d=\mu_1-\mu_2$$$$\sigma_d=\sqrt{\frac{\sigma^2_1}{n_1}+\frac{\sigma^2_2}{n_2}}$$
#### Pooled vs Non-pooled T-tests
If we data from independent samples from two populations with different standard deviations, then we use non-pooled versions of T-test.
![[Pasted image 20230411014940.png]]

code for two sample test
```python
stats.ttest_ind(a=group1, b=group2, equal_var=True)
```