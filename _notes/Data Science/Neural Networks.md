---
---

## Perceptron
The perceptron is a single neuron in neural networks. It gives a binary output. The way perceptron works is by learning and adjusting weights for inputs.
$$
\text{output} =
    \begin{cases}
        0 & \text{if } w.x+b\leq 0\\
        1 & \text{if } w.x+b>0
    \end{cases}
$$
## Sigmoid neuron
Basically we use sigmoid function on perceptron, i.e., $\sigma(w.x+b)$

$$
\sigma(z)=\frac{1}{1+e^{-z}}
$$

$$
\text{output of sigmoid nueron} = \frac{1}{1+exp(-(w.x+b))}
$$
### Gradient Descend Update Rules

$$

w_k \rightarrow w'_k = w_k - \eta\frac{\partial C}{\partial w_k}

$$

$$

b_l \rightarrow b'_l = b_l - \eta\frac{\partial C}{\partial b_l}

$$
## Backpropagation
The technique was introduced in 1970s. But famous 1987 paper by David Rumelhart, Geoffrey Hinton, and Ronald Williams. That paper describes several neural networks where backpropagation works far faster than earlier approaches to learning, making it possible to use neural nets to solve problems which had previously been insoluble.
$$a^l_j=\sigma\left( \sum_k w^l_{jk}a^{l-1}_k+b^l_j \right)$$
$$a^l=\sigma(w^la^{l-1}+b^l)$$

## Cost function
$$
C=\frac{1}{2n}\sum_x\lVert y(x)-a^L(x)\rVert^2
$$
assumption 1: we will assume $C$ is average of all $C_x$s
assumption 2 : $C$ is a function of output activations

##### Backpropagation is about understanding how changing the weights and biases in a network changes the cost function. i.e. computing $\partial C/\partial w^l_{jk}$ and $\partial C/\partial b^l_j$.
The four fundamental equations behind backpropagation 
