---
---

# Ordinary Differential Equations

## Methods for solving ODEs

### Separation of variables

### First Order Linear

If the equation looks like
$$

\frac{dy}{dx}+P(x)y=Q(x)

$$

Use integrating factor $IF=e^{\int P(x)dx}$
### Homogeneous equation
$$

\frac{dy}{dx}=F\left( \frac{x}{y} \right)

$$

put $v=y/x$, and then solve like variable separable method
### Bernoulli equation

$$

\frac{dy}{dx}+P(x)y=Q(x)y^n

$$
put $u=y^{1-n}$ and solve using integrating factor\

## Partial Differential Equations
If PDE can write in following form,
$$

M(x,y)dx+N(x,y)dy=0

$$
This DE is called **exact** if

$$

\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}

$$
Obtain$\int Mdx+g(y)$  **OR**  $\int Ndy + h(x)$ which is a solution.

  

To obtain $g(y)$, solve the following equation

  

$$

\frac{d}{dy}[\int Mdx+g(y)] = N

$$

  

For **non-exact** DEs, use integrating factor

  

$$

IF = \exp\left(\int \frac{\frac{\partial N}{\partial x}-\frac{\partial N}{\partial y}}{M}dy\right)

$$

  

---

  

# Second order Differential Equations

  

## Homogenous SO DE

  

The form is

  

$$

⁍

$$

  

- Assume a solution $y=e^{kx}$

- Differentiate the assumed solution    $$

    y=e^{kx},\hspace{5mm}y'=ke^{kx},\hspace{5mm}y''=k^2e^{kx}

    $$
- Substitute derivatives in given DE, we will get    $$

    k^2+kp+q=0

    $$    which is called auxiliary equation or characteristic equation.

- Solve the auxiliary equation and find its root $k_1$ and $k_2$
    - If $k_1$ and $k_2$  are real and distinct roots then general solution is $y=Ae^{k_1x}+Be^{k_2x}$
    - If $k_1=k_2=k$ then general solution is $y=Ae^{kx}+Bxe^{kx}$
    - If $k_1=a+ib$ and $k_2=a-ib$ are complex roots then general solution is $y=e^{ax}(A\sin{bx}+B\cos{bx})$

## Non homogenous SO DE

$$

y''+py'+qy=f(x)

$$

The general solution is given in form $y=y_c+y_p$, where $y_c$ is complementary solution of homogeneous equation $y''+py'+qy=0$ and $y_p$ is particular solution of non homogenous DE.

| $f(x)$ | $y_p$ |
| --- | --- |
| $be^{ax}$+ lower order powers of x | $C_nx^n+C_{n-1}x^{n-1}+...+C_0$ |
| $P\cos{ax}$ or $Q\sin{ax}$ | $A\cos{ax}+B\sin{ax}$ |

# Special functions

  

### Bessel function