---
---

# Density Based Spatial Clustering of Applications with Noise

$$
N_\epsilon(x)=B_d(x,\epsilon) = \{ y | \delta(x,y)\leq \epsilon\}
$$
```python
from sklearn.cluster import DBSCAN

dbscan = DBSCAN(eps=1, min_samples=2)
dbscan.fit(data)
y_dbscan = dbscan.labels_
```

There are two parameters in DBSCAN: *min_samples* and *eps*.

## Working of DBSCAN
- Pick an arbitrary point.
- Finds all points with distance *eps* or less from that point.
	- If there are less than *min_samples* points : labeled as noise
	- If there are more than *min_samples* points: labeled as core sample and assigned a new cluster label.
- All neighbors (within eps) of the point are visited.
	- If not been assigned a cluster: they are assigned the new cluster label that was just created.
	- If core sample: their neighbors are visited in turn, and so on.
	- The cluster grows until there are no more core samples within distance *eps* of cluster
- Another point is picked that hasn't been visited yet, and the same procedure is repeated.