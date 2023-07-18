---
---

#### Scaling
MinMaxScaler
```python
from sklearn.preprocessing import MinMaxScaler  

scaler = MinMaxScaler(feature_range=(0, 1))  
rescaledX = scaler.fit_transform(X)
```

#### Normalization

```python
from sklearn.preprocessing import Normalizer  

scaler = Normalizer().fit(X)  
normalizedX = scaler.transform(X)
```

#### Standardization

```python
from sklearn.preprocessing import StandardScaler  

scaler = StandardScaler().fit(X)  
rescaledX = scaler.transform(X)
```


Do not confuse **Normalizer** with **MinMaxScaler**. The **Normalizer** class from _Sklearn_ normalizes samples individually to unit norm. It is not column based but a row-based normalization technique. In other words, the range will be determined either by rows or columns.

- *StandardScaler*
It ensures that for each feature the mean is 0 and the variance is 1, bringing all features to the same magnitude.
This scaling does not ensure any particular minimum and maximum values for the features.
- *RobustScaler*
It ensures statistical properties for each feature that guarantee that they are on the same scale. 
It uses the median and quartiles that makes ignore data points that are very different from the rest (measurement errors/outliers). 
- *MinMaxScaler*
It shifts the data such that all features are exactly between 0 and 1. 
- *Normalizer*
It scales each data point such that the feature vector has a Euclidean length of 1.
It projects a data point on the circle (or sphere, in the case of higher dimensions) with a radius 1. This means every data point is scaled by a different number (by the inverse of its length). 
This normalization is often used when only the direction (or angle) of the data matters, not the length of the feature vector. 