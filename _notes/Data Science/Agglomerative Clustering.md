---
---

- The algorithm starts by declaring each point its own cluster, and then merges the two most similar clusters until some stopping criterion is satisfied.
- The stopping criterion implemented in *scikit-learn* is the number of clusters.
- <b>There are several linkage criteria that specify how exactly the "most similar cluster" is measured.</b> 
- Four choices are implemented in *scikit-learn*
	1. *ward* 
		The default choice, ward picks the two clusters to merge such that the variance within all clusters increases the least. tis often leads to clusters that are relatively equally sized.
	2. *average*
		average linkage merges the two clusters that have the smallest average distance between all their points.
	3. *complete*
		complete linkage (maximum linkage) merges the two clusters that have the smallest maximum distance between their points.
	4. *single*
		single uses the minimum of the distances between all observations of the two sets.

## Hierarchical clustering
Agglomerative clustering produces what is known as hierarchical clustering.

```python
from sklearn.cluster import AgglomerativeClustering

hc = AgglomerativeClustering(n_clusters=4, affinity='euclidean', linkage='single')
y_hc = hc.fit_predict(data)
```

## Dendrograms
<b>Dendrogram</b> is a tool to visualize hierarchical clustering that can handle multidimensional datasets.

```python
import scipy.cluster.hierarchy as sch

dendrogram = sch.dendrogram(sch.linkage(norm_data, method='single'))
```

The dendrogram shows data points on the bottom. Then, a tree is plotted with these points (representing single-point clusters) as the leaves, and a new node parent is added for each two clusters that are joined.
The <b>y-axis</b> in the dendrogram specify when in the agglomerative algorithm two clusters get merged. The <b>length</b> of each branch shows how far apart the merged clusters are.

## Drawbacks of Agglomerative Clustering
Agglomerative clustering still fails at separating complex shapes