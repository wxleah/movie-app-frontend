import{r as v,j as e}from"./index-kl3zBwE0.js";import{u as d,b as l,M as m,R as c,a as x}from"./MovieListHeading-c1S1m_rd.js";function F(){const{favorites:i,removeFavoriteMovie:a}=d(),[s,t]=v.useState(void 0),r=o=>{t(o)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"row d-flex align-items-center mt-4 mb-4",children:e.jsx(l,{heading:"Favorite"})}),e.jsxs("div",{className:"row",children:[i.map((o,n)=>e.jsx(m,{movie:o,FavoriteComponent:c,handleFavoritesClick:a,handleSelected:r},n)),s?e.jsx(x,{movieId:s.id.toString(),onClose:()=>t(void 0)}):null]})]})}export{F as default};