---
---

## Phase-space Dynamics
A mechanical system can completely described completely by Hamiltonian $H(q,p,t)$. The analysis of $p$ with respect to $q$ is phase-space dynamics. For this we will see an example,

### Simple Pendulum
$$

H(\theta,p)=T+V=\frac{p^2}{2ml^2}-mgl\cos{\theta}

$$

A python script is made to visualize this and phase space figure is shown below

```python
import matplotlib.pyplot as plt
import numpy as np

l = 100     # length of pendulum
m = 1       # mass of pendulum
g = 10
H = 50      # value of total energy

theta = np.linspace(-np.pi,np.pi,100)
p = np.power((2*m*l*l)*(H+(m*g*l*np.cos(theta))),0.5)

plt.plot(theta,p,theta,-p)
plt.xlabel("q")
plt.ylabel("p")
plt.title("Phase-space of simple pendulum")
plt.show()
```

- [ ]  Exercise the phase-space code of spring mass system

  
# Formulations of Classical Mechanics

## [[Newtonian Mechanics]]
Two sets of coordinates are required to specify the system

## Lagrangian Mechanics
Two sets of generalized coordinates describes system’s fundamental state. Generalized position ($q_i$) and their first derivative ($\dot{q}_i$).

<aside>
💡 <strong>Generalized coordinates</strong> are independent parameters which can completely specify system’s state. They can have any units like of energy, length squared or dimensionless.
</aside>

Dynamic laws are Euler-Lagrange equation
$$

\frac{d}{dt}\left( \frac{\partial L}{\partial \dot{q}_i} \right)-\frac{\partial L}{\partial q_i}=0

$$
<aside>

💡 <strong>Cyclic coordinates</strong> are which does not enter the Lagrangian. In other words, Lagrangian is independent of that generalized coordinate. The corresponding conserved quantity is called **constant of motion**.
</aside>

### Variation principles
For monogenic systems **Hamilton’s principle** states that the motion of the system from time $t_1$ to time $t_2$ is such that the line integral called action or action integral.
$$

S = \int_{t_1}^{t_2} Ldt

$$
Hamilton’s principle can summarize as bellow. The following equation is both necessary and sufficient condition for Lagrange’s equations.
$$

\delta S = \delta\int_{t_1}^{t_2}L(q_1,..,q_n,\dot{q}_1,...,\dot{q}_n,t)dt = 0

$$

## Hamiltonian Mechanics
Canonical coordinates are generalized position ($q$) and generalized momenta ($p$)
Dynamic equations are Hamiltonian or canonical equations
$$

\dot{q}_i=\frac{\partial H}{\partial p_i}, \hspace{1cm} \dot{p}_i = \frac{\partial H}{\partial q_i}

$$

| Newtonian                             | Lagrangian                | Hamiltonian               |
| ------------------------------------- | ------------------------- | ------------------------- |
| Relies on force which is vector       | Scalar energy function    | Scalar energy function    |
| Particle by particle description      | Energy of system as whole | Energy of system as whole |
| Explicitly uses cartesian coordinates | Coordinate independent    | Coordinate independent    |

  
## Canonical transformation
$$

(q,p)\longrightarrow (Q,P)

$$
### Generating function
Generators
$$

F_1=F_1(q,Q,t)

$$
$$

F_2=F_2(q,P,t)=F_1+PQ

$$
$$

F_3=F_3(p,Q,t)=F_1-pq

$$
$$

F_4=F_4(p,P,t)=F_1+PQ-pq

$$
Equations
$$

p=\frac{\partial F_1}{\partial q},P=-\frac{\partial F_1}{\partial Q}

$$ $$

p=\frac{\partial F_2}{\partial q}, Q=\frac{\partial F_2}{\partial P}

$$
$$

q=-\frac{\partial F_3}{\partial q}, P=-\frac{\partial F_3}{\partial Q}

$$
$$

q=-\frac{\partial F_4}{\partial p}, Q=-\frac{\partial F_4}{\partial P}

$$

# Small Oscillations
## Central Force Problem
Reduction to one-body problem
$$

L = T(\dot{R},\dot{r}) - U(r,\dot{r},...)

$$
To make this one-body problem we will find center of mass which can given as
$$

r'_1 = -\frac{m_2}{m_1+m_2}r, \hspace{1cm}  r'_2 = \frac{m_1}{m_1+m_2}

$$
also make sure to use reduced mass
$$

\frac{1}{\mu} = \frac{1}{m_1}+\frac{1}{m_2}

$$
We constrain ourselves only to forces such $V(r)$ is function of $r$ only
$$

L = \frac{1}{2}m(\dot{r}^2+r^2\dot{\theta}^2) - V(r)

$$