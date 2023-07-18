---
---

Basic code is given below
```python
from xgboost import XGBClassifier

xgb = XGBClassifier(n_estimators=500, early_stopping_rounds=5)
xgb.fit(x_train,y_train,eval_set=[(x_val,y_val)])

result = xgb.predict(x_test)
```
*n_esimators* will decide how many cycles will algorithm run
*early_stopping_rounds* after how many cycles of degrading score will algorithm stops