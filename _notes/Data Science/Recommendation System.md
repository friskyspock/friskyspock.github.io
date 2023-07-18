---
---

### Collaborative filtering

### Traditional Collaborative Filtering
***
### Cosine based similarity
$$\cos(A,B)=A.B/ |A||B|$$
example:
| |1|2|3|4|
|-|-|-|-|-|
|A|3|5|0|1|
|B|1|4|0|0|
$cos(A,B)=0.94$
When $\cos{}$ value is near 1 then A and B are more related

### Correlation based similarity
$$
corr_{i,j} = 
$$
### How to reduce computation
- Randomly sample customers
- Discard infrequent buyers
- Discard items that are very popular or very unpopular

- Clustering can reduce no of rows
- PCA can reduce no of columns

### Runtime vs Quality of Recommendation
