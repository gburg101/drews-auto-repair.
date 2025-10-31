
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles */
:root{
  --green-500: #22c55e;
  --green-400: #4ade80;
  --black-900: #050505;
}

/* diagonal animated background */
.bg-diag {
  background: linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(6,24,6,1) 50%, rgba(3,12,3,1) 100%);
  background-size: 300% 300%;
  animation: diagShift 20s linear infinite;
}
@keyframes diagShift {
  0%{ background-position: 0% 50% }
  50%{ background-position: 100% 50% }
  100%{ background-position: 0% 50% }
}

/* soft green glow for forms */
.form-glow {
  box-shadow: 0 8px 40px rgba(34,197,94,0.08), inset 0 1px 0 rgba(255,255,255,0.02);
  background-image: linear-gradient(180deg, rgba(34,197,94,0.02), transparent 60%);
  transition: box-shadow 0.35s ease, transform 0.25s ease;
}

/* subtle glow outline */
.form-glow::after{
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 1rem;
  pointer-events: none;
  box-shadow: 0 0 48px rgba(34,197,94,0.06);
  opacity: 1;
}

/* logo sheen animation */
.logo-sheen{
  position: relative;
  overflow: hidden;
}
.logo-sheen::after{
  content: '';
  position: absolute;
  top: -50%;
  left: -40%;
  width: 40%;
  height: 200%;
  background: linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.0) 100%);
  transform: rotate(20deg);
  animation: sheen 10s linear infinite;
  animation-delay: 2s;
  opacity: 0.9;
}
@keyframes sheen {
  0%{ transform: translateX(-200%) rotate(20deg); opacity: 0 }
  7%{ opacity: 0.9 }
  20%{ transform: translateX(200%) rotate(20deg); opacity: 0 }
  100%{ transform: translateX(200%) rotate(20deg); opacity: 0 }
}

/* nav link sheen on hover */
.nav-sheen:hover::after{
  content:'';
  position:absolute;
  inset:0;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 100%);
  mix-blend-mode: overlay;
  animation: navSheen 700ms ease;
}
@keyframes navSheen {
  from{ transform: translateX(-120%) }
  to{ transform: translateX(120%) }
}

/* utility to center success box */
.center-box { display:flex; align-items:center; justify-content:center; }
