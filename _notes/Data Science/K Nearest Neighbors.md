---
---

#### Bias: Training Error
Bias is difference between our actual and predicted values.
When bias is too high, assumptions made by our model are too basic, model couldn't capture the important features of our data. 
Basically this is Underfitting

#### Variance: Testing Error
Variance is the very opposite of Bias. During training, it allows our model to 'see the data
a certain number of times to find patterns in it. If it does not work on the data for long
enough, it will not find patterns and bias occurs.
We can define variance as the model's sensitivity to fluctuations in the data. Our model
may learn from noise. This will cause our model to consider trivial features as important

### The KNN Algorithm
1. Load the data
2. Initialize k to your chosen number of neighbors
3. for each example in data
	1. Calculate distance between query example and current example
	2. Add the distance and index of the example to an ordered collection
4. Sort the ordered collection of distances and indices in ascending order by distances
5. Pick first k entries
6. Get the labels of selected k entries
7. If regression, return the mean of k labels
8. If classification, return the mode of k labels