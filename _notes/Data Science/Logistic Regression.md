---
---

Logistic Regression is used when our target variable is binary.
$$
P_i = E(Y_i=1|X) = 1/(1+exp(\beta_0+\beta_1D_1+...\beta_{n+1}x))
$$
$$
\ln\left(\frac{P_i}{1-P_i}\right)=\beta_0+\beta_1D_1+...\beta_{n+1}x
$$
 $P_i/(1-P_i)$ is called Odds ratio.

 $$
 \text{Odds ratio}= 
 \begin{cases} 
 \geq 1 & \text{ sucess}\\ 
 <1 &\text{ failure} 
 \end{cases}
 $$
### Classification tables (Confusion matrix)
- Sensitivity
- Specificity
- ROC
|             |Observed 1's|Observed 0's|
|-------------|------------|------------|
|Predicted 1's|TP          |FP          |
|Predicted 0's|FN          |TN          |

$$\text{Sensitivity}= \frac{TP}{TP+FN}$$
$$\text{Specificity}=\frac{TN}{TN+FP}$$

$$\text{Precision}=\frac{TP}{TP+FP}$$
$$\text{F-Score}=\frac{2\times\text{Recall}\times\text{Precision}}{\text{Recall}+\text{Precision}}$$

ROC (Receiver Operator Characteristics)