---
---

graph TD;
A(Data Mining) --> B(Supervised Machine Learning);
A --> C(Unsupervised);
B --> D("Regression, sum, NN, KNN");
C --> E("Clustering, PCA, Market basket analysis");

### Data Mining: Clustering

Cluster Analysis ('Data Segmentation') is an exploratory method for identifying homogenous groups (clusters) of records

- Agglomerative/ Hierarchical Clustering
- K Means Clustering
- DBSCAN Clustering

### [[Agglomerative Clustering]]
- Agglomerative clustering refers to a collection of clustering algorithms that all build upon the same principles.
- Agglomerative clustering cannot make predictions for new data points.

### [[K-Means Clustering]]
- It tries to find cluster centers that are representative of certain regions of the data.
- It is relatively easy to understand and implement. 
- It runs relatively quickly.
- k-means scales easily to large datasets.

### [[DBSCAN Clustering]]
- It does not require the user to set the number of cluster a priori, it can capture clusters of complex shapes.
- It can identify points that are not part of any cluster.
- DBSCAN is somewhat slower than agglomerative clustering and k-means, but still scales to relatively large datasets.
- DBSCAN works by identifying points that are in crowded/dense regions called core samples/core points.
- The idea behind DBSCAN is that clusters form dense regions of data, separated by regions that are relatively empty.