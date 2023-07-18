---
---


```python
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=4, init='k-means++', random_state=0)
kmeans.fit_predict(data)
```

Elbow method to find correct number of clusters
```python
wcss = []
for i in range(1,11):
	kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, random_state=0, n_init='auto')
	kmeans.fit(data)
    wcss.append(kmeans.inertia_)
    
plt.plot(range(1,11),wcss)
plt.title('Elbow Method')
plt.xlabel('Number of clusters')
plt.ylabel('WCSS')
```

#### K-Means Algorithm
- Assigning each data point to the closest cluster center,
- and then setting each cluster center as the mean of the data points that are assigned to it.
- The algorithm is finished when the assignment of instances to clusters no longer changes.
- The steps are
	1. Choose k=3
	2. Compute centroid for each point
	3. Compute distance between each point to each centroid
	4. Move/ Shift data points to nearest centroid
	5. Repeat step 3 & 4 for all data points
	6. Recompute centroids
	7. Repeat steps from 2 to 6 multiple times till you don't have to move any data points

#### Drawbacks of K-Means
- Even if you know the "right" number of clusters for a given dataset, k-means might not always be able to recover them. 
- It relies on a random initialization, which means the outcome of the algorithm depends ona random seed.
- Each cluster is defined solely by its center, which means that each cluster is a convex shape. As a result of this , k-means can only capture relatively simple shapes.
- k-means also assumes that all clusters have the same "diameter" in some sense, it always draws the boundary between clusters to be exactly in the middle between the cluster centers.
- k-means also assumes that all directions are equally important for each cluster.

#### K-Means as decomposition/Vector quantization
- There are interesting parallels between k-means and the decomposition methods like PCA and NMF.
- PCA tries to find directions of maximum variance in the data.
- NMF tries to find additive components, which often correspond to "extremes" or "parts" of the data.
- Both methods tried to express the data points as a sum over some components.
- <b>k-means</b> tries to represent each data point using cluster center.
- The view of k-means as a decomposition method, where each point is represented using a single point, is called *vector quantization*.
- An interesting aspect of vector quantization using k-means is that we can use many more clusters than input dimensions to encode our data.