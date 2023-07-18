---
---

# The Schrodinger equation
Plane wave monochromatic wave describes as
$$

\Psi(r,t)=Ae^{i(k.r-\omega t)}

$$  

$$

H=\frac{p^2}{2m}+V

$$

  

$$

E\rightarrow i\hbar \frac{\partial}{\partial t};\hspace{1cm} p\rightarrow-i\hbar\nabla

$$

  

$$

i\hbar\frac{\partial\Psi}{\partial t}=H\Psi = \left[-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V(x) \right]\Psi

$$

  

### Some Commutation relations

  

$$

[x,p_x]=i\hbar

$$

  

### Raising and lowering operators

  

$$

[L^2,L_{x,y,z}]=[L^2,L_{\pm}]=0

$$

  

$$

[L_x,L_y]=i\hbar L_z

$$

  

$$

[L_x,p_x]=0

$$

  

$$

[L_x,x]=0

$$

  

### Pauli Matrices and its eigenvectors

  

$$

S_i=\frac{\hbar}{\sqrt{2}}\sigma_i

$$

  

$$

\sigma_x=\begin{bmatrix}0&1\\1&0\end{bmatrix}.\sigma_y=\begin{bmatrix}0&-i\\i&0\end{bmatrix}, \sigma_z=\begin{bmatrix}1&0\\0&-1\end{bmatrix}

$$

  

$$

\ket{\sigma_x}=\frac{1}{\sqrt{2}}\begin{bmatrix}1\\1\end{bmatrix}_+,\frac{1}{\sqrt{2}}\begin{bmatrix}1\\-1\end{bmatrix}_-

$$

  

$$

\ket{\sigma_y}=\frac{1}{\sqrt{2}}\begin{bmatrix}1\\i\end{bmatrix}_+,\frac{1}{\sqrt{2}}\begin{bmatrix}1\\-i\end{bmatrix}_-

$$

  

$$

\ket{\sigma_z}=\begin{bmatrix}1\\0\end{bmatrix}_+,\begin{bmatrix}0\\1\end{bmatrix}_-

$$

  

## Hydrogen atom

  

### Ground state wave function

  

$$

\Psi_{100}=\frac{1}{\sqrt{\pi a_0^3}}e^{-\frac{r}{a_0}}

$$

  

## Particle in One Dimensional box

  

$$

\Psi_n(x)=\sqrt{\frac{2}{L}}\sin{\frac{n\pi x}{L}}

$$

  

$$

E_n=\frac{\hbar^2\pi^2}{2ml^2}n^2

$$

  

### Time Independent Perturbation

  

$$

E_n^{(1)}=\bra{\phi_n}H'\ket{\phi_n}

$$

  

$$

E_n^{(2)}=\sum_{m\neq n}\frac{\bra{\phi_m}H'\ket{\phi_n}}{E_n^{(0)}-E_m^{(0)}}

$$

