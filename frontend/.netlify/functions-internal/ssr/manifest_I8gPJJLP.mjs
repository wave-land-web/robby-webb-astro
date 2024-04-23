import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_AKpy6RvW.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"mixing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/mixing","isIndex":false,"type":"page","pattern":"^\\/mixing\\/?$","segments":[[{"content":"mixing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mixing.astro","pathname":"/mixing","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"privacy-policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy-policy","isIndex":false,"type":"page","pattern":"^\\/privacy-policy\\/?$","segments":[[{"content":"privacy-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.astro","pathname":"/privacy-policy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"production/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/production","isIndex":false,"type":"page","pattern":"^\\/production\\/?$","segments":[[{"content":"production","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/production.astro","pathname":"/production","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"success/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DYNehn2B.js"}],"styles":[{"type":"inline","content":".social-icons.astro-dv46nlzh{position:fixed;right:1.25rem;bottom:2rem;z-index:100;margin:0 auto}@media (min-width: 768px){.social-icons.astro-dv46nlzh{right:2rem}}.social-icons.astro-dv46nlzh a.astro-dv46nlzh{display:block;width:1.5rem;height:1.5rem;.astro-dv46nlzh[data-icon=instagram]{width:100%;height:auto;stroke:var(--color-grey);stroke-linecap:round;stroke-linejoin:round;stroke-width:2;transition:stroke var(--transition-normal);&:hover{stroke:var(--color-pink)}}}.main-content.astro-ftvwmmpp{position:relative;max-width:var(--container-max-width);min-height:100vh;margin:0 auto;padding:var(--spacing-section) 1rem}@media (min-width: 768px){.main-content.astro-ftvwmmpp{padding:var(--spacing-section)}}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.footer.astro-sz7xmlte{padding:2rem var(--spacing-section);background-color:var(--color-black-faded);box-shadow:inset 0 1px 0 0 var(--color-black-border);.footer-info.astro-sz7xmlte{width:100%;max-width:var(--container-max-width);margin:0 auto;display:flex;flex-direction:column;gap:1rem;text-align:center;@media (min-width: 768px){flex-direction:row;justify-content:space-between}& p.astro-sz7xmlte{margin:0;font-size:var(--size-xs);color:var(--color-grey)}& a.astro-sz7xmlte{display:inline-flex;align-items:center;gap:.25rem;color:var(--color-grey);transition:var(--transition-normal);&:hover{color:var(--color-pink);.astro-sz7xmlte[data-icon=arrow-top-right]{stroke:var(--color-pink)}}.astro-sz7xmlte[data-icon=arrow-top-right]{width:.75rem;height:.75rem;stroke:var(--color-grey);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:var(--transition-normal)}}}}a.astro-tvrurpns{position:relative;z-index:10;width:clamp(200px,20vw,260px);.astro-tvrurpns[data-icon]{width:100%;height:auto}}a.astro-ue6dt2m4{color:var(--color-grey)}.nav-items.astro-ue6dt2m4,.logo-custom.astro-ue6dt2m4{display:none}@media (min-width: 1024px){.logo-custom.astro-ue6dt2m4{display:block}}@media (min-width: 768px){.nav-items.astro-ue6dt2m4,.nav-group.astro-ue6dt2m4{display:flex;gap:clamp(2rem,5vw,4rem)}.nav-items.astro-ue6dt2m4{justify-content:center;align-items:center;width:100%;font-size:var(--size-sm)}}@media (min-width: 1024px){.nav-items.astro-ue6dt2m4{justify-content:space-between}.nav-group.astro-ue6dt2m4{width:100%;max-width:300px;&:nth-of-type(2){justify-content:flex-end}}}a.astro-g5chvtba{color:var(--color-grey)}.hamburger.astro-g5chvtba{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:2rem;height:2rem;z-index:4;background-color:transparent;border:none;cursor:pointer}@media (min-width: 768px){.hamburger.astro-g5chvtba{display:none}}.hamburger.astro-g5chvtba .top.astro-g5chvtba,.hamburger.astro-g5chvtba .middle.astro-g5chvtba,.hamburger.astro-g5chvtba .bottom.astro-g5chvtba{height:2px;border-radius:5px;background-color:var(--color-white);transition:all var(--transition-normal)}.hamburger.astro-g5chvtba .top.astro-g5chvtba,.hamburger.astro-g5chvtba .middle.astro-g5chvtba,.hamburger.astro-g5chvtba .bottom.astro-g5chvtba{width:22px}.hamburger.astro-g5chvtba .top.astro-g5chvtba{transform:translateY(-4px)}.hamburger.astro-g5chvtba .bottom.astro-g5chvtba{transform:translateY(4px)}.hamburger.astro-g5chvtba.active .top.astro-g5chvtba{transform:translateY(2px) rotate(45deg)}.hamburger.astro-g5chvtba.active .middle.astro-g5chvtba{opacity:0}.hamburger.astro-g5chvtba.active .bottom.astro-g5chvtba{transform:translateY(-2px) rotate(-45deg)}.mobile-nav-overlay.astro-g5chvtba{position:absolute;top:0;left:0;width:100%;height:100vh;opacity:0;z-index:-1;visibility:hidden;background-color:var(--color-black);transition:opacity var(--transition-normal),visibility 0s var(--transition-normal),z-index 0s var(--transition-normal)}.hamburger.astro-g5chvtba.active+.mobile-nav-overlay.astro-g5chvtba{opacity:1;visibility:visible;transition:opacity var(--transition-normal);z-index:3}.mobile-nav-overlay.astro-g5chvtba ul.astro-g5chvtba{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2.5rem}.mobile-nav-overlay.astro-g5chvtba ul.astro-g5chvtba li.astro-g5chvtba{font-size:clamp(var(--size-md),8vw,var(--size-lg))}.icons.astro-g5chvtba{display:flex;justify-content:center;align-items:center;gap:2rem;margin-top:2rem}.icons.astro-g5chvtba svg.astro-g5chvtba{width:var(--size-lg);height:var(--size-lg);transition:all var(--transition-normal)}.icons.astro-g5chvtba svg.astro-g5chvtba:hover{color:var(--color-primary)}.navigation.astro-cf5drfxn{background-color:var(--color-black-faded);box-shadow:inset 0 -1px 0 0 var(--color-black-border);.container.astro-cf5drfxn{display:flex;align-items:center;justify-content:space-between;gap:2rem;max-width:var(--container-max-width);margin:0 auto;padding:1rem;@media (min-width: 768px){flex-direction:column;padding:2rem var(--spacing-section)}@media (min-width: 1024px){.logo-custom.astro-cf5drfxn{display:none}}}}:root{--color-black: #000000;--color-black-faded: #0a0a0a;--color-black-border: #2d2d2d;--color-white: #ededed;--color-white-faded: #f5f5f550;--color-grey: #a1a1a1;--color-yellow: #c3ae69;--color-pink: #f49ac2;--font-nunito-sans: \"Nunito Sans\", sans-serif;--size-xxs: .75rem;--size-xs: 1rem;--size-sm: 1.25rem;--size-md: 1.563rem;--size-lg: 2.441rem;--size-xl: 3.052rem;--size-xxl: 3.815rem;--size-xxxl: 4.5rem;--container-max-width: 1800px;--container-medium-width: 1200px;--container-small-width: 600px;--spacing-section: clamp(4rem, 10vw, 6rem);--spacing-base: clamp(1rem, 2vw, 1.5rem);--transition-normal: .25s ease-in-out;--transition-long: .5s ease-in-out;--border-radius: .25rem}html{scrollbar-color:var(--color-grey) var(--color-black);scrollbar-width:thin}body{color:var(--color-white);background:var(--color-black);font-family:var(--font-nunito-sans);font-size:var(--size-xs);font-weight:300;line-height:normal;letter-spacing:.04rem}body[data-overlay-displayed=true]{overflow:hidden}h1,h2,h3,h4,h5{margin:0;font-weight:900;text-wrap:balance}h1{font-size:clamp(var(--size-lg),10vw,var(--size-xxl))}h2{font-size:clamp(var(--size-md),5vw,var(--size-xl))}h3{font-size:clamp(var(--size-md),5vw,var(--size-lg))}h4{font-size:clamp(var(--size-sm),5vw,var(--size-md))}h5{font-size:clamp(var(--size-xs),5vw,var(--size-sm))}a{text-decoration:none;color:var(--color-white);transition:all var(--transition-normal)}a:hover,a[aria-current=true]{color:var(--color-pink)}svg{transition:fill var(--transition-normal)}ul,ol{list-style:none;padding:0;margin:0}img{display:block;max-width:100%;height:auto;border-radius:var(--border-radius)}p{margin:0 auto var(--spacing-base);font-size:clamp(var(--size-xs),2vw,var(--size-sm))}article p{text-wrap:balance}strong{font-weight:900}.site-cta{display:block;max-width:fit-content;margin:0 auto;padding:clamp(.75rem,5vw,1rem) clamp(1.5rem,5vw,2rem);color:var(--color-white);background:transparent;font-size:clamp(var(--size-sm),2vw,var(--size-md));border:1px solid var(--color-white);border-radius:4rem;letter-spacing:.05rem;transition:all var(--transition-normal);cursor:pointer}.site-cta:hover{color:var(--color-black);background:var(--color-pink);border:1px solid var(--color-pink)}.site-cta.pill{display:inline-block;margin:0;padding:.25rem .5rem;border-radius:4px;font-size:clamp(var(--size-xs),2vw,var(--size-sm))}.error{font-size:clamp(var(--size-xs),2vw,var(--size-sm));color:var(--color-pink)}.aos-fade,.aol-fade{opacity:0;transition:opacity var(--transition-long);&.active{opacity:1}}\nh1.astro-yj6ryvpd{margin-bottom:var(--spacing-section);text-align:center}\n"}],"routeData":{"route":"/discography","isIndex":false,"type":"page","pattern":"^\\/discography\\/?$","segments":[[{"content":"discography","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/discography.astro","pathname":"/discography","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DYNehn2B.js"}],"styles":[{"type":"inline","content":".social-icons.astro-dv46nlzh{position:fixed;right:1.25rem;bottom:2rem;z-index:100;margin:0 auto}@media (min-width: 768px){.social-icons.astro-dv46nlzh{right:2rem}}.social-icons.astro-dv46nlzh a.astro-dv46nlzh{display:block;width:1.5rem;height:1.5rem;.astro-dv46nlzh[data-icon=instagram]{width:100%;height:auto;stroke:var(--color-grey);stroke-linecap:round;stroke-linejoin:round;stroke-width:2;transition:stroke var(--transition-normal);&:hover{stroke:var(--color-pink)}}}.main-content.astro-ftvwmmpp{position:relative;max-width:var(--container-max-width);min-height:100vh;margin:0 auto;padding:var(--spacing-section) 1rem}@media (min-width: 768px){.main-content.astro-ftvwmmpp{padding:var(--spacing-section)}}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.footer.astro-sz7xmlte{padding:2rem var(--spacing-section);background-color:var(--color-black-faded);box-shadow:inset 0 1px 0 0 var(--color-black-border);.footer-info.astro-sz7xmlte{width:100%;max-width:var(--container-max-width);margin:0 auto;display:flex;flex-direction:column;gap:1rem;text-align:center;@media (min-width: 768px){flex-direction:row;justify-content:space-between}& p.astro-sz7xmlte{margin:0;font-size:var(--size-xs);color:var(--color-grey)}& a.astro-sz7xmlte{display:inline-flex;align-items:center;gap:.25rem;color:var(--color-grey);transition:var(--transition-normal);&:hover{color:var(--color-pink);.astro-sz7xmlte[data-icon=arrow-top-right]{stroke:var(--color-pink)}}.astro-sz7xmlte[data-icon=arrow-top-right]{width:.75rem;height:.75rem;stroke:var(--color-grey);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:var(--transition-normal)}}}}a.astro-tvrurpns{position:relative;z-index:10;width:clamp(200px,20vw,260px);.astro-tvrurpns[data-icon]{width:100%;height:auto}}a.astro-ue6dt2m4{color:var(--color-grey)}.nav-items.astro-ue6dt2m4,.logo-custom.astro-ue6dt2m4{display:none}@media (min-width: 1024px){.logo-custom.astro-ue6dt2m4{display:block}}@media (min-width: 768px){.nav-items.astro-ue6dt2m4,.nav-group.astro-ue6dt2m4{display:flex;gap:clamp(2rem,5vw,4rem)}.nav-items.astro-ue6dt2m4{justify-content:center;align-items:center;width:100%;font-size:var(--size-sm)}}@media (min-width: 1024px){.nav-items.astro-ue6dt2m4{justify-content:space-between}.nav-group.astro-ue6dt2m4{width:100%;max-width:300px;&:nth-of-type(2){justify-content:flex-end}}}a.astro-g5chvtba{color:var(--color-grey)}.hamburger.astro-g5chvtba{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:2rem;height:2rem;z-index:4;background-color:transparent;border:none;cursor:pointer}@media (min-width: 768px){.hamburger.astro-g5chvtba{display:none}}.hamburger.astro-g5chvtba .top.astro-g5chvtba,.hamburger.astro-g5chvtba .middle.astro-g5chvtba,.hamburger.astro-g5chvtba .bottom.astro-g5chvtba{height:2px;border-radius:5px;background-color:var(--color-white);transition:all var(--transition-normal)}.hamburger.astro-g5chvtba .top.astro-g5chvtba,.hamburger.astro-g5chvtba .middle.astro-g5chvtba,.hamburger.astro-g5chvtba .bottom.astro-g5chvtba{width:22px}.hamburger.astro-g5chvtba .top.astro-g5chvtba{transform:translateY(-4px)}.hamburger.astro-g5chvtba .bottom.astro-g5chvtba{transform:translateY(4px)}.hamburger.astro-g5chvtba.active .top.astro-g5chvtba{transform:translateY(2px) rotate(45deg)}.hamburger.astro-g5chvtba.active .middle.astro-g5chvtba{opacity:0}.hamburger.astro-g5chvtba.active .bottom.astro-g5chvtba{transform:translateY(-2px) rotate(-45deg)}.mobile-nav-overlay.astro-g5chvtba{position:absolute;top:0;left:0;width:100%;height:100vh;opacity:0;z-index:-1;visibility:hidden;background-color:var(--color-black);transition:opacity var(--transition-normal),visibility 0s var(--transition-normal),z-index 0s var(--transition-normal)}.hamburger.astro-g5chvtba.active+.mobile-nav-overlay.astro-g5chvtba{opacity:1;visibility:visible;transition:opacity var(--transition-normal);z-index:3}.mobile-nav-overlay.astro-g5chvtba ul.astro-g5chvtba{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2.5rem}.mobile-nav-overlay.astro-g5chvtba ul.astro-g5chvtba li.astro-g5chvtba{font-size:clamp(var(--size-md),8vw,var(--size-lg))}.icons.astro-g5chvtba{display:flex;justify-content:center;align-items:center;gap:2rem;margin-top:2rem}.icons.astro-g5chvtba svg.astro-g5chvtba{width:var(--size-lg);height:var(--size-lg);transition:all var(--transition-normal)}.icons.astro-g5chvtba svg.astro-g5chvtba:hover{color:var(--color-primary)}.navigation.astro-cf5drfxn{background-color:var(--color-black-faded);box-shadow:inset 0 -1px 0 0 var(--color-black-border);.container.astro-cf5drfxn{display:flex;align-items:center;justify-content:space-between;gap:2rem;max-width:var(--container-max-width);margin:0 auto;padding:1rem;@media (min-width: 768px){flex-direction:column;padding:2rem var(--spacing-section)}@media (min-width: 1024px){.logo-custom.astro-cf5drfxn{display:none}}}}:root{--color-black: #000000;--color-black-faded: #0a0a0a;--color-black-border: #2d2d2d;--color-white: #ededed;--color-white-faded: #f5f5f550;--color-grey: #a1a1a1;--color-yellow: #c3ae69;--color-pink: #f49ac2;--font-nunito-sans: \"Nunito Sans\", sans-serif;--size-xxs: .75rem;--size-xs: 1rem;--size-sm: 1.25rem;--size-md: 1.563rem;--size-lg: 2.441rem;--size-xl: 3.052rem;--size-xxl: 3.815rem;--size-xxxl: 4.5rem;--container-max-width: 1800px;--container-medium-width: 1200px;--container-small-width: 600px;--spacing-section: clamp(4rem, 10vw, 6rem);--spacing-base: clamp(1rem, 2vw, 1.5rem);--transition-normal: .25s ease-in-out;--transition-long: .5s ease-in-out;--border-radius: .25rem}html{scrollbar-color:var(--color-grey) var(--color-black);scrollbar-width:thin}body{color:var(--color-white);background:var(--color-black);font-family:var(--font-nunito-sans);font-size:var(--size-xs);font-weight:300;line-height:normal;letter-spacing:.04rem}body[data-overlay-displayed=true]{overflow:hidden}h1,h2,h3,h4,h5{margin:0;font-weight:900;text-wrap:balance}h1{font-size:clamp(var(--size-lg),10vw,var(--size-xxl))}h2{font-size:clamp(var(--size-md),5vw,var(--size-xl))}h3{font-size:clamp(var(--size-md),5vw,var(--size-lg))}h4{font-size:clamp(var(--size-sm),5vw,var(--size-md))}h5{font-size:clamp(var(--size-xs),5vw,var(--size-sm))}a{text-decoration:none;color:var(--color-white);transition:all var(--transition-normal)}a:hover,a[aria-current=true]{color:var(--color-pink)}svg{transition:fill var(--transition-normal)}ul,ol{list-style:none;padding:0;margin:0}img{display:block;max-width:100%;height:auto;border-radius:var(--border-radius)}p{margin:0 auto var(--spacing-base);font-size:clamp(var(--size-xs),2vw,var(--size-sm))}article p{text-wrap:balance}strong{font-weight:900}.site-cta{display:block;max-width:fit-content;margin:0 auto;padding:clamp(.75rem,5vw,1rem) clamp(1.5rem,5vw,2rem);color:var(--color-white);background:transparent;font-size:clamp(var(--size-sm),2vw,var(--size-md));border:1px solid var(--color-white);border-radius:4rem;letter-spacing:.05rem;transition:all var(--transition-normal);cursor:pointer}.site-cta:hover{color:var(--color-black);background:var(--color-pink);border:1px solid var(--color-pink)}.site-cta.pill{display:inline-block;margin:0;padding:.25rem .5rem;border-radius:4px;font-size:clamp(var(--size-xs),2vw,var(--size-sm))}.error{font-size:clamp(var(--size-xs),2vw,var(--size-sm));color:var(--color-pink)}.aos-fade,.aol-fade{opacity:0;transition:opacity var(--transition-long);&.active{opacity:1}}\nh1.astro-yj6ryvpd{margin-bottom:var(--spacing-section);text-align:center}\n.album.astro-xkiijjty{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:var(--spacing-section);max-width:var(--container-medium-width);margin:0 auto;& h2.astro-xkiijjty{margin-bottom:clamp(1rem,4vw,1.5rem)}& p.astro-xkiijjty:last-of-type{margin-bottom:clamp(1.5rem,4vw,2rem)}.album-links.astro-xkiijjty{display:flex;gap:clamp(.5rem,2vw,1rem)}}\n"}],"routeData":{"route":"/discography/[...slug]","isIndex":false,"type":"page","pattern":"^\\/discography(?:\\/(.*?))?\\/?$","segments":[[{"content":"discography","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/discography/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.robbywebb.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/joshnussbaum/Sites/robby-webb-astro/frontend/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/joshnussbaum/Sites/robby-webb-astro/frontend/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/joshnussbaum/Sites/robby-webb-astro/frontend/src/pages/discography.astro",{"propagation":"none","containsHead":true}],["/Users/joshnussbaum/Sites/robby-webb-astro/frontend/src/pages/discography/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/joshnussbaum/Sites/robby-webb-astro/frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/joshnussbaum/Sites/robby-webb-astro/frontend/src/pages/mixing.astro",{"propagation":"none","containsHead":true}],["/Users/joshnussbaum/Sites/robby-webb-astro/frontend/src/pages/privacy-policy.astro",{"propagation":"none","containsHead":true}],["/Users/joshnussbaum/Sites/robby-webb-astro/frontend/src/pages/production.astro",{"propagation":"none","containsHead":true}],["/Users/joshnussbaum/Sites/robby-webb-astro/frontend/src/pages/success.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/discography.astro":"chunks/pages/discography_CZ4d9-6W.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DnrTjvnz.mjs","\u0000@astrojs-manifest":"manifest_I8gPJJLP.mjs","/Users/joshnussbaum/Sites/robby-webb-astro/frontend/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CjxyrDsp.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_BWgxDXBA.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_ziw-YR8O.mjs","\u0000@astro-page:src/pages/discography@_@astro":"chunks/discography_DGiS8uRs.mjs","\u0000@astro-page:src/pages/discography/[...slug]@_@astro":"chunks/_.._SEzYhOCH.mjs","\u0000@astro-page:src/pages/mixing@_@astro":"chunks/mixing_CB8QCHYo.mjs","\u0000@astro-page:src/pages/privacy-policy@_@astro":"chunks/privacy-policy_K8Mrfr_u.mjs","\u0000@astro-page:src/pages/production@_@astro":"chunks/production_Bj-ZQGSF.mjs","\u0000@astro-page:src/pages/success@_@astro":"chunks/success_Dfv_-5zz.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_qLRB50NV.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.AZmTyhVl.js","/astro/hoisted.js?q=0":"_astro/hoisted.CArTfLyg.js","/astro/hoisted.js?q=2":"_astro/hoisted.DYNehn2B.js","@astrojs/react/client.js":"_astro/client.CwWKiGVO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/landing-page-hero.DO1D6_LS.jpg","/_astro/production_what-is-production.CZpwJwCf.webp","/_astro/mixing_what-is-mixing.lDEeFdIP.webp","/_astro/production_what-you-can-expect.1rp_4E9J.webp","/_astro/mixing_what-you-can-expect.Bs0EpFjK.webp","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/mstile-150x150.png","/robots.txt","/site.webmanifest","/_astro/client.CwWKiGVO.js","/_astro/hoisted.AZmTyhVl.js","/_astro/hoisted.CArTfLyg.js","/_astro/hoisted.DYNehn2B.js","/images/headshot.jpg","/404.html","/contact/index.html","/mixing/index.html","/privacy-policy/index.html","/production/index.html","/success/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };