---
---

Lasso (L1)
- Least Absolute Shrinkage and Selection Operator
- Also used for feature selection
$$J(\theta) = MSE(\theta)+\alpha\sum_{i=1}^n|\theta_i|$$

Ridge (L2) Regression
$$Cost(W)=RSS(W)+\lambda\times(\text{sum of squares of weights)}$$
$$\sum_{i=1}^N\left\{y_i-\sum_{j=0}^M w_jx_{ij}\right\}^2+\lambda\sum_{j=0}^M w_j^2$$
Elastic Net
Middle ground between lasso regression and ridge regression
$$J(\theta) = MSE(\theta)+r\alpha\sum_{i=1}^n|\theta_i|+\frac{1-r}{2}\alpha\sum_{i=1}^n\theta_i^2$$


##### What is bias?
Bias is difference between the average prediction of our model and the correct value which we are trying to predict. Model with high bias pays very little attention to the training data and oversimplifies the model. It always leads to high error on training and test data.

##### What is variance?
Variance is the variability of model prediction for a given data point or a value which tells us spread of our data. Model with high variance pays a lot of attention to training data and does not generalize on the data which it hasn't seen before. As a result, such models perform very well on training data but has high error rates on test data.

Trade off means one increases other decreases and vice-versa. i.e. if you try to increase training accuracy, testing accuracy will decrease. Similarly if you try to increase testing accuracy, training accuracy will decrease. This is called **Bias Variance Trade off**.

- Low Bias Low Variance: - Ideal Model but practically its not possible
- Low Bias High Variance - Overfitted Model
- High Blas Low Variance - Underfitted Model
- High Bias High Variance - Inconsistent predictions