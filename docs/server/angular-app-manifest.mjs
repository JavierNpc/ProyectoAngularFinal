
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ProyectoAngularFinal/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ProyectoAngularFinal"
  },
  {
    "renderMode": 2,
    "route": "/ProyectoAngularFinal/visorpersonajes"
  },
  {
    "renderMode": 2,
    "route": "/ProyectoAngularFinal/crearpersonaje"
  },
  {
    "renderMode": 2,
    "route": "/ProyectoAngularFinal/crearpersonaje/raza"
  },
  {
    "renderMode": 2,
    "route": "/ProyectoAngularFinal/crearpersonaje/estadisticas"
  },
  {
    "renderMode": 2,
    "route": "/ProyectoAngularFinal/crearpersonaje/habilidades"
  },
  {
    "renderMode": 2,
    "route": "/ProyectoAngularFinal/crearpersonaje/nombre"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 957, hash: 'db730de780beed615d49d1efa38e2f390d092cea8cf82cdfcb783d9b9693e548', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1255, hash: 'd465ca6981626adc07192ef28c85e8cf0594f71d56e5ab8f6ea32dff14b34e2e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'visorpersonajes/index.html': {size: 7558, hash: 'fe75c5956c804f029eff0668cfb211e75e1869f2f9acdfed9af139bec8bc2dce', text: () => import('./assets-chunks/visorpersonajes_index_html.mjs').then(m => m.default)},
    'crearpersonaje/raza/index.html': {size: 3256, hash: '19a309df0357be866ec714d450c12c605ea342a3df5a4aa05697f209f68a2e1e', text: () => import('./assets-chunks/crearpersonaje_raza_index_html.mjs').then(m => m.default)},
    'crearpersonaje/habilidades/index.html': {size: 3256, hash: '19a309df0357be866ec714d450c12c605ea342a3df5a4aa05697f209f68a2e1e', text: () => import('./assets-chunks/crearpersonaje_habilidades_index_html.mjs').then(m => m.default)},
    'crearpersonaje/nombre/index.html': {size: 3256, hash: '19a309df0357be866ec714d450c12c605ea342a3df5a4aa05697f209f68a2e1e', text: () => import('./assets-chunks/crearpersonaje_nombre_index_html.mjs').then(m => m.default)},
    'crearpersonaje/index.html': {size: 7208, hash: '9d315f159e1da81a44641792bde8549836b98a59d5ca6245c8554226ecb9233a', text: () => import('./assets-chunks/crearpersonaje_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2966, hash: 'a17ee647d2efebd3ae5e289ddf6b5e5916847121e338bf9d3618e81008ac3380', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'crearpersonaje/estadisticas/index.html': {size: 3256, hash: 'b38b24c5e32bd5480b427e682c78b3ac9a47ff880fc3eff1f58f6022c0795b38', text: () => import('./assets-chunks/crearpersonaje_estadisticas_index_html.mjs').then(m => m.default)},
    'styles-SYYH6SQ4.css': {size: 212, hash: 'QEZ6RUlRMD0', text: () => import('./assets-chunks/styles-SYYH6SQ4_css.mjs').then(m => m.default)}
  },
};
