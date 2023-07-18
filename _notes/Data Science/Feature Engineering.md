---
---

Algorithms
- One Hot Encoding
- Binning, Discretization, Linear Models, Trees

Automatic 
- 


3 Techniques
- Univariate Selection using Chi-Square test
- RFE - Recursive Feature Elimination
- Tree based feature selection

### Univariate Selection
$$\large
\chi^2(D,t,c)=\sum_{e_t\in\{0,1\}}\sum_{e_c\in\{0,1\}}\frac{(N_{e_te_c}-E_{e_te_c})^2}{E_{e_te_c}}
$$
### Recursive Feature Elimination 
(RFE) works by recursively removing attributes and building a model on those attributes remain.

### Tree based methods
C5.0
CART
