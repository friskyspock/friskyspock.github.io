---
---

# Divergence and Curl of Electric field

  

### Gauss Law

  

$$

\oint_S \mathbf{E}.d\mathbf{a} = \frac{1}{\epsilon_0}Q_{enclosed}

$$

  

applying divergence theorem,

  

$$

\oint_S \mathbf{E}.d\mathbf{a} = \int_V(\mathbf{\nabla.E})d\tau

$$
$$

Q_{enclosed} = \int_V \rho d\tau

$$

$$

\mathbf{\nabla.E}=\frac{1}{\epsilon_0}\rho

$$

Applications of Gauss Law

### The Divergence of E


For a volume charge electric field can be given as.

  

$$

\mathbf{E(r)}=\frac{1}{4\pi\epsilon_0}\int_V\frac{\rho(\mathbf{r}')}{r^2}\mathbf{\hat{r}}d\tau'

$$

  

$$

\mathbf{\nabla.E}=\frac{1}{4\pi\epsilon_0}\int \mathbf{\nabla}\left(\frac{\mathbf{\hat{r}}}{r^2}\right)\rho(\mathbf{r'})d\tau'

$$

  

$$

\mathbf{\nabla}\left(\frac{\mathbf{\hat{r}}}{r^2}\right) = 4\pi\delta^3(\mathbf{r})

$$

  

$$

\mathbf{\nabla.E}=\frac{1}{4\pi\epsilon_0}\int 4\pi\delta^3(r-r')\rho(r')d\tau' = \frac{1}{\epsilon}\rho(r)

$$

  

### The Curl of E

  

$$

\mathbf{E}=\frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\mathbf{\hat{r}}

$$

  

$$

\oint \mathbf{E}.d\mathbf{l}=0

$$

  

by applying stokes theorem

  

$$

\mathbf{\nabla}\times\mathbf{E}=0

$$

  

## Poisson’s Equation and Laplace’s Equation

  

Electric field can written as the gradient of scalar potential

  

$$

\mathbf{E}=-\mathbf{\nabla}V

$$

  

Now we can put this into Divergence and Curl of E

  

$$

\mathbf{\nabla.E}=\mathbf{\nabla}.(-\mathbf{\nabla}V)=-\nabla^2V

$$

  

$$

\nabla^2V=-\frac{\rho}{\epsilon_0}

$$

  

$$

\mathbf{\nabla}\times\mathbf{E}=\mathbf{\nabla}\times(-\nabla V)

$$

  

$$

\nabla^2V=0

$$

  

## Properties of Conductors

  

1. $E=0$ inside the conductor

2. $\rho=0$ inside the conductor

3. Any net charge resides on the surface

4. A conductor is an equipotential

5. $E$ is perpendicular to the surface, just outside a conductor

  

# Boundary conditions and uniqueness theorem