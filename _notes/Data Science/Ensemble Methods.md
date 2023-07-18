---
---


#### Bagging
that often considers homogeneous weak learners, learns them independently from each
other in parallel and combines them following some kind of deterministic averaging process

#### Boosting
that often considers homogeneous weak learners, learns them sequentially in a very
adaptative way (a base model depends on the previous ones) and combines them following a
deterministic strategy

#### Stacking
that often considers heterogeneous weak learners, learns them in parallel and combines
them by training a meta-model to output a prediction based on the different weak models predictions

### 2 kinds of bootstrap sampling
Sampling with replacement
Sampling without replacement

## [[Random Forest]]
1. Random sampling of training data points when building trees
2. Random subsets of features considered when splitting nodes
training data is sampling is done with replacement

Random Forest Pseudocode
1. Randomly select 'k' features from total 'm' features
2. Among 'k' calculate node 'd' using best split point
3. Split node into *daughter nodes* using best split
4. Repeat **1 to 3** steps until 'i' numbers of nodes are reached
5. Build the forest by repeating steps **1 to 4** for 'n' times to create n trees

Advantages of Random Forest algorithm
- can be used for both regression and classification
- will handle missing values internally
- overfitting problem will never come in any classification problem
- can be used for feature engineering

## Boosting
Adaptive Boosting
- done by building model from training data then creating second