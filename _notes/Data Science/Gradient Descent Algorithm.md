---
---

Process
1. Pick an initial set of weights (random) $w=(w_0,w_1,...w_d)$
2. Determine the descent direction $\nabla E(w^t)$
3. Choose a learning rate $\eta$
4. Update your position $w^{t+1}=w^t-\eta .\nabla E(w^t)$
5. Repeat from 2 until stopping criterion is satisfied

Typical stopping criteria

Basic Idea

Problems:
Choosing step size (learning rate too small convergence is slow and  inefficient too large -9 may not converge
- Can get stuck on "flat" areas of function
- Easily trapped in local minima

