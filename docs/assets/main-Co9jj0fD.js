var De=Object.defineProperty;var he=h=>{throw TypeError(h)};var Te=(h,t,e)=>t in h?De(h,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[t]=e;var M=(h,t,e)=>Te(h,typeof t!="symbol"?t+"":t,e),jt=(h,t,e)=>t.has(h)||he("Cannot "+e);var i=(h,t,e)=>(jt(h,t,"read from private field"),e?e.call(h):t.get(h)),a=(h,t,e)=>t.has(h)?he("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(h):t.set(h,e),l=(h,t,e,s)=>(jt(h,t,"write to private field"),s?s.call(h,e):t.set(h,e),e),z=(h,t,e)=>(jt(h,t,"access private method"),e);var Et=(h,t,e,s)=>({set _(n){l(h,t,n,e)},get _(){return i(h,t,s)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();var st,wt,bt;class Zt{constructor(t,e){a(this,st);a(this,wt,{width:0,height:0});a(this,bt,{width:Number.MAX_SAFE_INTEGER,height:Number.MAX_SAFE_INTEGER});M(this,"_owner");this._owner=t,l(this,st,e)}getDegree(){return i(this,st)}addPossibleDegreesTo(t){t.add(i(this,st))}setMinimumSize(t){l(this,wt,{...t})}getMinimumSize(){return{...i(this,wt)}}setMaximumSize(t){l(this,bt,{...t})}getMaximumSize(){return{...i(this,bt)}}}st=new WeakMap,wt=new WeakMap,bt=new WeakMap;var zt;class Le extends Zt{constructor(e,s,n){super(e,s);a(this,zt);l(this,zt,n);const r={width:i(this,zt).length+2,height:1};this.setMinimumSize(r),this.setMaximumSize(r)}name(){return"checkbox"}}zt=new WeakMap;var yt;class ae extends Zt{constructor(e,s,n){super(e,s);a(this,yt);l(this,yt,n);const r={width:i(this,yt).length,height:1};this.setMinimumSize(r),this.setMaximumSize(r)}name(){return"label"}}yt=new WeakMap;var Yt;const L=class L extends Zt{constructor(e,s,n,r=n.length){super(e,s);a(this,Yt);l(this,Yt,[...n]);const o=Math.min(r,L.MIN_ITEM_SIZE)*1;let u=0;for(const f of n)u=Math.max(u,f.length);this.setMinimumSize({width:u+1,height:o}),this.setMaximumSize({width:Number.MAX_SAFE_INTEGER,height:Number.MAX_SAFE_INTEGER})}static createVariableInstances(e,s,n){if(n.length<=L.MIN_ITEM_SIZE)return[[s,u=>new L(u,s,n,L.MIN_ITEM_SIZE)]];const r=[],o=s-e;for(let u=L.MIN_ITEM_SIZE+1;u<n.length;++u){const f=s+o*(u/n.length-1),P=u;r.push([f,D=>new L(D,f,n,P)])}return r}name(){return"list box"}};Yt=new WeakMap,M(L,"MIN_ITEM_SIZE",4);let te=L;var Bt;class ce extends Zt{constructor(e,s,n){super(e,s);a(this,Bt);l(this,Bt,[...n]);let r=0;for(const u of n)r=Math.max(r,u.length);const o={width:r+1,height:n.length*1};this.setMinimumSize(o),this.setMaximumSize(o)}name(){return"radio buttons"}}Bt=new WeakMap;var Mt,_t,xt;const tt=class tt{constructor(t,e,s=tt.NO_DIR){a(this,Mt);a(this,_t);a(this,xt);l(this,Mt,t),l(this,_t,e),l(this,xt,s)}getOwner(){return i(this,Mt)}getDegree(){return i(this,_t)}getDirection(){return i(this,xt)}getEstimatedMinimumSize(t){const e=t.map(s=>s.getEstimatedMinimumSize());return this._calcSize(e)}getEstimatedMinimumSizeIf(t,e,s){const n=t.map(r=>e===r?s:r.getEstimatedMinimumSize());return this._calcSize(n)}getMinimumSize(t){const e=t.map(s=>s.getMinimumSize());return this._calcSize(e)}getMaximumSize(){return{width:Number.MAX_SAFE_INTEGER,height:Number.MAX_SAFE_INTEGER}}};Mt=new WeakMap,_t=new WeakMap,xt=new WeakMap,M(tt,"NO_DIR",-1),M(tt,"VERTICAL",0),M(tt,"HORIZONTAL",1);let I=tt;var nt,rt;class fe{constructor(){a(this,nt);a(this,rt);l(this,nt,-1),l(this,rt,""),this.userObject=null}setIndex(t){l(this,nt,t)}setName(t){l(this,rt,t)}index(){return i(this,nt)}name(){return i(this,rt)}}nt=new WeakMap,rt=new WeakMap;var ot;const et=class et extends fe{constructor(t){super(),this.es=[],this.v=i(et,ot),this.d=t}toString(){const t=this.name(),e=t?`(${t})`:"",s=this.isEmpty()?"<empty>":""+this.value();return`x${this.index()}${e} = ${s}`}size(){return this.es.length}at(t){return this.es.at(t)}has(t){return this.es.includes(t)}indexOf(t){return this.es.indexOf(t)}neighbors(){const t=[];for(const e of this.es)for(const s of e)s!==this&&t.push(s);return t}[Symbol.iterator](){return this.es[Symbol.iterator]()}connect(t){if(this.es.includes(t))throw new RangeError;this.es.push(t)}disconnect(t){if(!this.es.includes(t))throw new RangeError;this.es=this.es.filter(e=>e!==t)}domain(t){if(t===void 0)return this.d;this.d=t,this.clear()}assign(t){this.v=t}clear(){this.assign(i(et,ot))}value(){return this.v}isEmpty(){return this.value()===i(et,ot)}};ot=new WeakMap,a(et,ot,Number.MIN_VALUE);let St=et;class it{static create(t,e=null){if(Array.isArray(t))return new Re(t);if(e!==null)return new Ve(t,e);throw new RangeError}}var R;class Re extends it{constructor(e){super();a(this,R);l(this,R,[...e])}contains(e){return i(this,R).includes(e)}indexOf(e){return i(this,R).indexOf(e)}size(){return i(this,R).length}at(e){return i(this,R)[e]}[Symbol.iterator](){return i(this,R)[Symbol.iterator]()}}R=new WeakMap;var C,X;class Ve extends it{constructor(e,s){super();a(this,C);a(this,X);l(this,C,e|0),l(this,X,s|0)}contains(e){return i(this,C)<=e&&e<=i(this,X)}indexOf(e){return i(this,C)<=e&&e<=i(this,X)?e-i(this,C):-1}size(){return i(this,X)-i(this,C)+1}at(e){return i(this,C)+e}[Symbol.iterator](){let e=i(this,C);const s=i(this,X);return{next(){return e<=s?{value:e++,done:!1}:{value:null,done:!0}}}}}C=new WeakMap,X=new WeakMap;class $t extends fe{constructor(t){super(),this.es=[],this.r=t}static create(t,e){return e.length===1?new Oe(t,e[0]):e.length===2?new Pe(t,e[0],e[1]):e.length===3?new Fe(t,e[0],e[1],e[2]):new Xe(t,...e)}toString(){const t=this.name(),e=t?`(${t})`:"",s=this.degree(),n=s<0?"UNDEFINED":""+s;return`c${this.index()}${e} = ${n}`}size(){return this.es.length}at(t){return this.es.at(t)}has(t){return this.es.includes(t)}indexOf(t){return this.es.indexOf(t)}neighbors(){const t=[];for(const e of this.es)for(const s of e)s!==this&&t.push(s);return t}[Symbol.iterator](){return this.es[Symbol.iterator]()}relation(){return this.r}}class Oe extends $t{constructor(t,e){super(t),this.es=[e]}emptySize(){return this.es[0].isEmpty()?1:0}isDefined(){return!this.es[0].isEmpty()}status(){return this.es[0].isEmpty()?-1:this.r(this.es[0].value())===1?1:0}degree(){return this.es[0].isEmpty()?-1:this.r(this.es[0].value())}}class Pe extends $t{constructor(t,e,s){super(t),this.es=[e,s]}emptySize(){let t=0;return this.es[0].isEmpty()&&++t,this.es[1].isEmpty()&&++t,t}isDefined(){return!this.es[0].isEmpty()&&!this.es[1].isEmpty()}status(){return this.es[0].isEmpty()||this.es[1].isEmpty()?-1:this.r(this.es[0].value(),this.es[1].value())===1?1:0}degree(){return this.es[0].isEmpty()||this.es[1].isEmpty()?-1:this.r(this.es[0].value(),this.es[1].value())}}class Fe extends $t{constructor(t,e,s,n){super(t),this.es=[e,s,n]}emptySize(){let t=0;return this.es[0].isEmpty()&&++t,this.es[1].isEmpty()&&++t,this.es[2].isEmpty()&&++t,t}isDefined(){return!this.es[0].isEmpty()&&!this.es[1].isEmpty()&&!this.es[2].isEmpty()}status(){return this.es[0].isEmpty()||this.es[1].isEmpty()||this.es[2].isEmpty()?-1:this.r(this.es[0].value(),this.es[1].value(),this.es[2].value())===1?1:0}degree(){return this.es[0].isEmpty()||this.es[1].isEmpty()||this.es[2].isEmpty()?-1:this.r(this.es[0].value(),this.es[1].value(),this.es[2].value())}}var G;class Xe extends $t{constructor(e,...s){super(e);a(this,G);this.es=[...s],l(this,G,new Array(this.es.length))}emptySize(){let e=0;for(const s of this.es)e+=s.isEmpty()?1:0;return e}isDefined(){for(const e of this.es)if(e.isEmpty())return!1;return!0}status(){for(let e=0;e<this.es.length;++e){const s=this.es[e];if(s.isEmpty())return-1;i(this,G)[e]=s.value()}return this.r(...i(this,G))===1?1:0}degree(){for(let e=0;e<this.es.length;++e){const s=this.es[e];if(s.isEmpty())return-1;i(this,G)[e]=s.value()}return this.r(...i(this,G))}}G=new WeakMap;var ht,At,S,m;class Ge{constructor(){a(this,ht,t=>new St(t));a(this,At,(t,e)=>$t.create(t,e));a(this,S,[]);a(this,m,[])}setVariableFactory(t){l(this,ht,t)}setConstraintFactory(t){l(this,At,t)}addVariable(t){t.setIndex(i(this,S).length),i(this,S).push(t)}createDomain(t,e=null){if(Array.isArray(t))return it.create(t);if(e!==null)return it.create(t,e);throw new RangeError}createVariable(t,e=null,s){if(t instanceof St){const n=i(this,ht).call(this,t.domain());return this.addVariable(n),n.setName(n.name()),n.assign(n.value()),n}else if(t instanceof it){if(e!==null&&!t.contains(e))throw new Error;const n=i(this,ht).call(this,t);return this.addVariable(n),e!==null&&n.assign(e),s&&n.setName(s),n}throw new RangeError}createConstraint(t,e,s){const n=i(this,At).call(this,t,e);n.setIndex(i(this,m).length),i(this,m).push(n);for(const r of e)r.connect(n);return s&&n.setName(s),n}removeConstraint(t){const e=i(this,m).indexOf(t);i(this,m).splice(e,1);for(let s=e;s<i(this,m).length;++s)i(this,m)[s].setIndex(s);for(const s of t)s.disconnect(t)}clearAllVariables(){for(const t of i(this,S))t.clear()}reverseVariables(){i(this,S).reverse();for(let t=0;t<i(this,S).length;++t)i(this,S)[t].setIndex(t)}sortVariables(t){i(this,S).sort(t);for(let e=0;e<i(this,S).length;++e)i(this,S)[e].setIndex(e)}variables(){return i(this,S)}variableSize(){return i(this,S).length}variableAt(t){return i(this,S)[t]}variableOf(t){for(const e of i(this,S))if(e.name()===t)return e;return null}hasVariable(t){return i(this,S).includes(t)}constraints(){return i(this,m)}constraintSize(){return i(this,m).length}constraintAt(t){return i(this,m)[t]}constraintOf(t){for(const e of i(this,m))if(e.name()===t)return e;return null}hasConstraint(t){return i(this,m).includes(t)}constraintsBetween(t,e){const s=[];for(const n of t)n.has(e)&&s.push(n);return s}constraintDensity(){return i(this,m).length/i(this,S).length}emptySize(){let t=0;for(const e of i(this,S))t+=e.isEmpty()?1:0;return t}hasEmptyDomain(){for(const t of i(this,S))if(t.domain().size()===0)return!0;return!1}degree(){let t=1;for(const e of i(this,m)){const s=e.degree();if(s<0)return s;s<t&&(t=s)}return t}constraintsWithDegree(){const t=[];let e=1;for(const s of i(this,m)){const n=s.degree();n<e?(e=n,t.length=0,t.push(s)):n-e<Number.MIN_VALUE*10&&t.push(s)}return[t,e]}averageDegree(){let t=0;for(const e of i(this,m))t+=e.degree();return t/i(this,m).length}ratio(){return this.satisfiedConstraintSize()/i(this,m).length}satisfiedConstraintSize(){let t=0;for(const e of i(this,m))t+=e.status()===1?1:0;return t}violatingConstraintSize(){return i(this,m).length-this.satisfiedConstraintSize()}satisfiedConstraints(){const t=[];for(const e of i(this,m))e.status()===1&&t.push(e);return t}violatingConstraints(){const t=[];for(const e of i(this,m))e.status()===0&&t.push(e);return t}}ht=new WeakMap,At=new WeakMap,S=new WeakMap,m=new WeakMap;var at,It,vt,Ct,ut,k,lt,Nt,Dt,Tt,Lt;class de{constructor(){a(this,at,!0);a(this,It,t=>console.log(t));a(this,vt,()=>!1);a(this,Ct,Number.MAX_SAFE_INTEGER);a(this,ut,null);a(this,k,.8);a(this,lt,null);a(this,Nt,0);a(this,Dt,0);a(this,Tt,-1);a(this,Lt,0)}initialize(){l(this,Nt,i(this,ut)===null?Number.MAX_VALUE:Date.now()+i(this,ut)),l(this,Dt,0)}check(t=null){if(t!==null&&i(this,k)!==null&&i(this,k)<=t)return this.outputDebugString("Stop: Current evaluation value is above the target"),!0;if(i(this,Ct)<Et(this,Dt)._++)return this.outputDebugString("Stop: Number of iterations has reached the limit"),!1;if(i(this,Nt)<Date.now())return this.outputDebugString("Stop: Time limit has been reached"),!1;if(t!==null&&i(this,lt)!==null)if(t!==-1&&i(this,Tt)===t){if(i(this,lt)<Et(this,Lt)._++)return this.outputDebugString("Stop: Evaluation value has not changed for a certain number of times"),!1}else l(this,Tt,t),l(this,Lt,0);return null}solutionFound(t,e){return i(this,vt).call(this,t,e)}outputDebugString(t){i(this,at)&&i(this,It).call(this,t)}isDebugMode(){return i(this,at)}isTargetAssigned(){return i(this,k)!==null}getTarget(){return i(this,k)}setIterationLimit(t=null){l(this,Ct,t===null?Number.MAX_SAFE_INTEGER:t)}setTimeLimit(t=null){l(this,ut,t)}setTarget(t=null){l(this,k,t)}setSameEvaluationLimit(t=null){l(this,lt,t)}setListener(t){l(this,vt,t)}setDebugMode(t){l(this,at,t)}setDebugOutput(t){l(this,It,t)}}at=new WeakMap,It=new WeakMap,vt=new WeakMap,Ct=new WeakMap,ut=new WeakMap,k=new WeakMap,lt=new WeakMap,Nt=new WeakMap,Dt=new WeakMap,Tt=new WeakMap,Lt=new WeakMap;class ke{constructor(){}name(){return""}solve(t,e=new de){this.pro=t,this.monitor=e,this.preprocess();const s=this.exec();return this.postprocess(),s}preprocess(){}exec(){return!1}postprocess(){}}var $,U;const re=class re{constructor(t,e=null){a(this,$);a(this,U);if(t instanceof re)l(this,$,t.variable()),l(this,U,t.value());else if(t instanceof St)l(this,$,t),l(this,U,e??t.value());else throw new RangeError}apply(){i(this,$).assign(i(this,U))}toString(){return`v${i(this,$).index()} <- ${i(this,U)}`}value(){return i(this,U)}variable(){return i(this,$)}};$=new WeakMap,U=new WeakMap;let Q=re,ue=Math.random;function $e(h){return console.log(ue===Math.random),Math.floor(ue()*h)}var w;const oe=class oe{constructor(){a(this,w,[])}static fromVariables(t){const e=new oe;return e.setVariables(t),e}setProblem(t){i(this,w).length=0;for(const e of t.variables())i(this,w).push(new Q(e))}setAssignmentList(t){i(this,w).length=0;for(const e of t)i(this,w).push(new Q(e))}setVariables(t){i(this,w).length=0;for(const e of t)i(this,w).push(new Q(e))}addVariable(t,e=null){i(this,w).push(new Q(t,e))}apply(){for(const t of i(this,w))t.apply()}clear(){i(this,w).length=0}isEmpty(){return i(this,w).length===0}size(){return i(this,w).length}differenceSize(){let t=0;for(const e of i(this,w))e.variable().value()!==e.value()&&++t;return t}at(t){return i(this,w)[t]}[Symbol.iterator](){return i(this,w)[Symbol.iterator]()}random(){return i(this,w)[$e(i(this,w).length)]}};w=new WeakMap;let ee=oe;var W,_,Y;const F=class F{constructor(t){a(this,_);a(this,Y,0);l(this,_,new Array(t)),i(this,_).fill(i(F,W))}prunedSize(){return i(this,Y)}prune(t,e){if(i(this,_)[t]===i(F,W))++Et(this,Y)._;else throw new Error;i(this,_)[t]=e}isEmpty(){return i(this,_).length===i(this,Y)}isPruned(t){return i(this,_)[t]!==i(F,W)}recover(t){for(let e=0;e<i(this,_).length;++e)i(this,_)[e]===t&&(i(this,_)[e]=i(F,W),--Et(this,Y)._)}recoverAll(){i(this,_).fill(i(F,W)),l(this,Y,0)}};W=new WeakMap,_=new WeakMap,Y=new WeakMap,a(F,W,Number.MIN_SAFE_INTEGER);let ie=F;function Ue(h,t){let e=0,s=Number.MAX_VALUE;for(let n=0;n<h.length;++n){const r=h[n];if(!r.isEmpty())continue;const u=r.domain().size()-t[r.index()].prunedSize();u<s&&(s=u,e=n)}return e}function We(h,t){const e=[];for(let s=0;s<t.length;++s){e.push(new Array(t.length));for(let n=0;n<t.length;++n)n<s&&(e[s][n]=h.constraintsBetween(t[n],t[s]))}return e}function Ye(h){const t=new Array(h.variableSize());for(const e of h.variables())t[e.index()]=Be(h,e);return t}function Be(h,t){const e=new Array(h.variableSize());e.fill(Number.MAX_VALUE);const s=new Set;s.add(t),e[t.index()]=0,me(h,t,e,0,s);let n=0,r=0;for(let o=0;o<e.length;++o)e[o]!==Number.MAX_VALUE&&o!==t.index()&&(++n,r+=e[o]);return n===0?0:r/n}function me(h,t,e,s,n){const r=[];for(const o of t)for(const u of o)e[u.index()]===Number.MAX_VALUE&&(r.push(u),e[u.index()]=s+1);for(const o of r)n.add(o);for(const o of r)me(h,o,e,s+1,n)}var V,ct,O,j,B,ft,Rt,x,se,ge,pe,Ee,Se;class He extends ke{constructor(){super();a(this,x);a(this,V);a(this,ct);a(this,O);a(this,j);a(this,B);a(this,ft);a(this,Rt,!0)}setUsingMinimumRemainingValuesHeuristics(e){l(this,Rt,e)}name(){return"Fuzzy Forward Checking"}preprocess(){l(this,V,[...this.pro.variables()]),l(this,ct,We(this.pro,i(this,V))),l(this,O,Array.from(i(this,V),e=>new ie(e.domain().size()))),l(this,j,new ee),l(this,B,0),this.monitor.initialize()}exec(){let e=null;for(;e===null;)l(this,ft,!1),this.pro.clearAllVariables(),e=z(this,x,se).call(this,0),i(this,j).apply();return e===!0}}V=new WeakMap,ct=new WeakMap,O=new WeakMap,j=new WeakMap,B=new WeakMap,ft=new WeakMap,Rt=new WeakMap,x=new WeakSet,se=function(e,s=1){if(e===this.pro.variableSize()){const f=this.pro.degree();return i(this,j).setProblem(this.pro),this.monitor.outputDebugString(`	Evaluation ${f}`),i(this,B)<f&&(l(this,B,f),l(this,ft,!0),this.monitor.solutionFound(i(this,j),f))?!0:this.monitor.check(f)}let n=null;if((n=this.monitor.check())!==null)return n;const r=i(this,V)[i(this,Rt)?Ue(i(this,V),i(this,O)):e],o=r.domain(),u=i(this,O)[r.index()];for(let f=0,P=o.size();f<P;++f){if(u.isPruned(f))continue;r.assign(o.at(f));const D=Math.min(s,z(this,x,Se).call(this,r));if(!(D<=i(this,B))){if(z(this,x,ge).call(this,e,r)&&(n=z(this,x,se).call(this,e+1,D),n!==null||i(this,ft)))break;for(const pt of i(this,O))pt.recover(e)}}if(n===null){for(const f of i(this,O))f.recover(e);r.clear()}return n},ge=function(e,s){for(const n of i(this,V)){if(!n.isEmpty())continue;const r=z(this,x,pe).call(this,s.index(),n.index()),o=i(this,O)[n.index()],u=n.domain();for(const f of r)if(f.emptySize()===1&&!z(this,x,Ee).call(this,e,n,u,o,f))return!1}return!0},pe=function(e,s){return e<s?i(this,ct)[s][e]:i(this,ct)[e][s]},Ee=function(e,s,n,r,o){for(let u=0,f=n.size();u<f;++u)r.isPruned(u)||(s.assign(n.at(u)),o.degree()<=i(this,B)&&r.prune(u,e));return s.clear(),!r.isEmpty()},Se=function(e){let s=Number.MAX_VALUE;for(const n of e){const r=n.degree();0<=r&&r<s&&(s=r)}return s};var Vt,A,Ot,Pt,Ht,be;class we{constructor(){a(this,Ht);a(this,Vt);a(this,A);a(this,Ot,{width:0,height:0});a(this,Pt,{x:0,y:0});M(this,"_estMinSize",{width:Number.MAX_SAFE_INTEGER,height:Number.MAX_SAFE_INTEGER});M(this,"_states",[]);M(this,"_cans",[]);M(this,"_baseCans",[])}name(){return""}setParent(t){l(this,Vt,t)}getParent(){return i(this,Vt)}getVariable(){return i(this,A)}getEstimatedMinimumSize(){return{...this._estMinSize}}_getCandidateEntries(){return[]}_assignCandidates(t,e){e.length=0;for(const[s,n]of this._getCandidateEntries())t<=s&&e.push(n(this))}initializeProblem(t){this._assignCandidates(0,this._cans),this._baseCans=[...this._cans],l(this,A,t.createVariable(it.create([0]),0,this.name()+": type")),t.createConstraint(e=>z(this,Ht,be).call(this,e),[i(this,A)],this.name()+": type")}_typeToCandidate(t=null){return t===null&&i(this,A)&&(t=i(this,A).value()),t!==null&&this._states[t]?this._cans[this._states[t].comb[0]]:null}isValid(){return!(!i(this,A)||i(this,A).isEmpty()||!this._states[i(this,A).value()])}getMinimumSize(){return{...this._states[i(this,A).value()].size}}getMaximumSize(){return this._typeToCandidate().getMaximumSize()}getSize(){return{...i(this,Ot)}}setSize(t,e){l(this,Ot,{width:t,height:e})}getLocation(){return{...i(this,Pt)}}setLocation(t,e){l(this,Pt,{x:t,y:e})}}Vt=new WeakMap,A=new WeakMap,Ot=new WeakMap,Pt=new WeakMap,Ht=new WeakSet,be=function(t){return this._states.length===0?0:this._typeToCandidate(t).getDegree()};var g,Z,ze,ye,Me;const q=class q extends we{constructor(){super(...arguments);a(this,Z);a(this,g,[])}name(){const e=this._typeToCandidate();return(e==null?void 0:e.name())??"layout"}add(e){e.setParent(this),i(this,g).push(e)}children(){return i(this,g)}getDescendantSize(){let e=i(this,g).length;for(const s of i(this,g))s instanceof q&&(e+=s.getDescendantSize());return e}initializeProblem(e){super.initializeProblem(e);for(let s=0;s<i(this,g).length;++s){const n=i(this,g)[s];n.initializeProblem(e),e.createConstraint((r,o)=>z(this,Z,ze).call(this,s,r,o),[this.getVariable(),n.getVariable()],this.name()+": toChild"),n instanceof q&&e.createConstraint((r,o)=>z(this,Z,ye).call(this,n,r,o),[this.getVariable(),n.getVariable()],this.name()+": toChild")}}initializeEstimatedMinimumSize(){for(const n of i(this,g))n.initializeEstimatedMinimumSize();let e=Number.MAX_SAFE_INTEGER,s=Number.MAX_SAFE_INTEGER;for(const n of this._cans){const r=n.getEstimatedMinimumSize(i(this,g));e=Math.min(e,r.width),s=Math.min(s,r.height)}this._estMinSize={width:e,height:s}}initializeDomain(e){for(const u of i(this,g))if(!u.initializeDomain(e))return!1;const s=new Array(i(this,g).length+1).fill(0),n=new Array(i(this,g).length+1).fill(0);n[0]=this._cans.length;for(let u=0;u<i(this,g).length;++u)n[u+1]=i(this,g)[u]._states.length;let r=Number.MAX_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER;this._states.length=0;do{for(let f=0;f<i(this,g).length;++f)i(this,g)[f].getVariable().assign(s[f+1]);const u=this._cans[s[0]].getMinimumSize(i(this,g));this.getParent().checkGivenMaximumSize(this,u)&&(this._states.push({comb:[...s],size:u}),r=Math.min(r,u.width),o=Math.min(o,u.height))}while(z(this,Z,Me).call(this,s,n));for(const u of i(this,g))u.getVariable().clear();return this._estMinSize={width:r,height:o},this._states.length===0?!1:(this.getVariable().domain(e.createDomain(0,this._states.length-1)),!0)}checkGivenMaximumSize(e,s){for(const n of this._cans){const r=n.getEstimatedMinimumSizeIf(i(this,g),e,s);if(this.getParent().checkGivenMaximumSize(this,r))return!0}return!1}setWorstDegree(e){if(this._assignCandidates(e,this._cans),this._cans.length===0)return!1;for(const s of i(this,g))if(!s.setWorstDegree(e))return!1;return!0}addPossibleDegreesTo(e){for(const s of this._baseCans)e.add(s.getDegree());for(const s of i(this,g))s.addPossibleDegreesTo(e);e.add(q.SAME_DIRECTION)}doLayout(){this._typeToCandidate().doLayout(i(this,g),this.getSize())}};g=new WeakMap,Z=new WeakSet,ze=function(e,s,n){return this._states[s].comb[e+1]===n?1:0},ye=function(e,s,n){const r=this._typeToCandidate(s).getDirection(),o=e._typeToCandidate(n).getDirection();return r!==I.NO_DIR&&o!==I.NO_DIR&&r===o?q.SAME_DIRECTION:1},Me=function(e,s){for(let n=0;n<e.length&&(e[n]++,!(e[n]<s[n]));++n){if(n===e.length-1)return!1;e[n]=0}return!0},M(q,"SAME_DIRECTION",.5);let N=q;class Ze extends I{constructor(t,e){super(t,e,I.HORIZONTAL)}name(){return"horizontal array"}_calcSize(t){let e=0,s=0;for(const n of t)e+=n.width,s<n.height&&(s=n.height);return e+=(t.length-1)*1+2,s+=2,{width:e,height:s}}doLayout(t,e){let s=1;for(const n of t){const r=n.getMinimumSize(),o=n.getMaximumSize();n.setSize(r.width,Math.min(e.height-2,o.height)),n.setLocation(s,1),n instanceof N&&n.doLayout(),s+=n.getSize().width+1}}}class Ke extends I{constructor(t,e){super(t,e,I.VERTICAL)}name(){return"vertical array"}_calcSize(t){let e=0,s=0;for(const n of t)e<n.width&&(e=n.width),s+=n.height;return e+=2,s+=(t.length-1)*1+2,{width:e,height:s}}doLayout(t,e){let s=1;for(const n of t){const r=n.getMinimumSize(),o=n.getMaximumSize();n.setSize(Math.min(e.width-2,o.width),r.height),n.setLocation(1,s),n instanceof N&&n.doLayout(),s+=n.getSize().height+1}}}class qe extends I{constructor(t,e){super(t,e,I.HORIZONTAL)}name(){return"left labeling"}_calcSize(t){const e=t[0].width+1+t[1].width+2,s=Math.max(t[0].height,t[1].height)+2;return{width:e,height:s}}doLayout(t,e){const s=t[0],n=t[1],r=s.getMinimumSize(),o=n.getMaximumSize();s.setSize(r.width,r.height),s.setLocation(1,1),n.setSize(Math.min(e.width-2-(r.width+1),o.width),Math.min(e.height-2,o.height)),n.setLocation(1+s.getSize().width+1,1),n instanceof N&&n.doLayout()}}var dt;class je extends I{constructor(e,s){super(e,s,I.VERTICAL);a(this,dt,1)}name(){return"top labeling"}_calcSize(e){const s=Math.max(e[0].width,e[1].width+i(this,dt))+2,n=e[0].height+1+e[1].height+2;return{width:s,height:n}}doLayout(e,s){const n=e[0],r=e[1],o=n.getMinimumSize(),u=r.getMaximumSize();n.setSize(o.width,o.height),n.setLocation(1,1),r.setSize(Math.min(s.width-2-i(this,dt),u.width),Math.min(s.height-2-(o.height+1),u.height)),r.setLocation(1+i(this,dt),1+n.getSize().height+1),r instanceof N&&r.doLayout()}}dt=new WeakMap;class ne extends we{name(){const t=this._typeToCandidate();return(t==null?void 0:t.name())??"control"}initializeEstimatedMinimumSize(){let t=Number.MAX_SAFE_INTEGER,e=Number.MAX_SAFE_INTEGER;for(const s of this._cans){const n=s.getMinimumSize();t=Math.min(t,n.width),e=Math.min(e,n.height)}this._estMinSize={width:t,height:e}}initializeDomain(t){this._states.length=0;for(let e=0;e<this._cans.length;e+=1){const s=this._cans[e].getMinimumSize();this.getParent().checkGivenMaximumSize(this,s)&&this._states.push({comb:[e],size:s})}return this._states.length===0?!1:(this.getVariable().domain(t.createDomain(0,this._states.length-1)),!0)}setWorstDegree(t){return this._assignCandidates(t,this._cans),this._cans.length!==0}addPossibleDegreesTo(t){for(const e of this._baseCans)e.addPossibleDegreesTo(t)}}var Ft,Xt;class le extends ne{constructor(e,s){super();a(this,Ft);a(this,Xt);l(this,Ft,e),l(this,Xt,s)}name(){return"caption ("+super.name()+")"}_getCandidateEntries(){return[[1,e=>new ae(e,1,i(this,Ft))],[.8,e=>new ae(e,.8,i(this,Xt))]]}}Ft=new WeakMap,Xt=new WeakMap;var mt;class Jt extends ne{constructor(...e){super();a(this,mt);l(this,mt,e)}name(){return"single ("+super.name()+")"}_getCandidateEntries(){const e=te.createVariableInstances(.75,.9,i(this,mt));return e.push([1,s=>new ce(s,1,i(this,mt))]),e}}mt=new WeakMap;var gt,Gt;class Je extends ne{constructor(e,s){super();a(this,gt);a(this,Gt);l(this,gt,e),l(this,Gt,s)}name(){return"single boolean ("+super.name()+")"}_getCandidateEntries(){return[[.9,e=>new Le(e,.9,i(this,gt))],[1,e=>new ce(e,1,[i(this,gt),i(this,Gt)])]]}}gt=new WeakMap,Gt=new WeakMap;class Qt extends N{constructor(t){if(super(),t.children)for(const e of t.children)this.add(e)}_getCandidateEntries(){return[[.98,t=>new Ze(t,.98)],[1,t=>new Ke(t,1)]]}}class Qe extends N{constructor(t,e){super(),this.add(t),this.add(e)}_getCandidateEntries(){return[[1,t=>new qe(t,1)],[.9,t=>new je(t,.9)]]}}var y,H,kt,v,_e,xe,Ae,Ie,ve;class Wt{constructor(){a(this,v);a(this,y);a(this,H,{width:0,height:0});a(this,kt,0)}setRootContainer(t){l(this,y,t);const e=this;i(this,y).setParent(new class{checkGivenMaximumSize(s,n){const r=i(e,H).height,o=i(e,H).width;return n.height<=r&&n.width<=o}})}getRootContainer(){return i(this,y)}getLastSatisfactionDegree(){return i(this,kt)}layoutContainer(t){return!!z(this,v,_e).call(this,t)}}y=new WeakMap,H=new WeakMap,kt=new WeakMap,v=new WeakSet,_e=function(t){l(this,H,{...t});const e=new Ge;i(this,y).initializeProblem(e),z(this,v,Ie).call(this,e);const s=new Set;return i(this,y).addPossibleDegreesTo(s),z(this,v,xe).call(this,e,s)?(i(this,y).setSize(i(this,H).width,i(this,H).height),i(this,y).setLocation(0,0),i(this,y).doLayout(),!0):!1},xe=function(t,e){let s=0;console.log(`
solveProblem - started`),s=Date.now();let n=!1;const r=[...e.values()].sort((o,u)=>u-o);for(const o of r){if(o<=0||(console.log(`	Iteration in wsd ${o}`),!z(this,v,Ae).call(this,t,o)))continue;const u=new de;if(u.setTarget(o),u.setTimeLimit(100),new He().solve(t,u)){n=!0,l(this,kt,o);break}}return console.log(`solveProblem - finished (${n}, wsd = ${t.degree()})
`),console.log(`time: ${Date.now()-s}`),n},Ae=function(t,e){return!i(this,y).setWorstDegree(e)||(i(this,y).initializeEstimatedMinimumSize(),!i(this,y).initializeDomain(t))?(console.log("Failure: initializeDomain"),!1):!0},Ie=function(t){const e=Ye(t),s=[i(this,y).getVariable()];let n=[i(this,y)];for(;n.length>0;){const r=[];for(const o of n)for(const u of o.children())u instanceof N&&r.push(u);z(this,v,ve).call(this,r,e);for(const o of r)s.push(o.getVariable());n=r}t.sortVariables((r,o)=>s.indexOf(r)-s.indexOf(o))},ve=function(t,e){t.sort((s,n)=>{{const r=s.getDescendantSize(),u=n.getDescendantSize()-r;if(u!==0)return u}{const r=e[s.getVariable().index()];return e[n.getVariable().index()]-r}})},M(Wt,"DEBUG",!0),M(Wt,"SORT_BY_DESCENDANT",!0),M(Wt,"SORT_BY_PATH_LENGTH",!0);{let h=function(){b.width=400,b.height=560;const p=b.getContext("2d");let c=s(),E=0;b.addEventListener("mousemove",d=>{d.offsetX>=b.width-o&&d.offsetY>=b.height-o?(document.body.style.cursor="nw-resize",d.stopPropagation()):document.body.style.cursor=""}),b.addEventListener("mousedown",d=>{d.offsetX>=b.width-o&&d.offsetY>=b.height-o&&(u=!0,f=d.clientX,P=d.clientY)}),window.addEventListener("mousemove",d=>{if(document.body.style.cursor="",u){const T=d.clientX-f,K=d.clientY-P;b.width=Math.max(400,b.width+T),b.height=Math.max(400,b.height+K),pt&&(p==null||p.drawImage(D,0,0),e(b,p)),f=d.clientX,P=d.clientY,clearTimeout(E),E=setTimeout(()=>{t(c,b,p)},100)}}),window.addEventListener("mouseup",()=>{u=!1}),t(c,b,p)},t=function(p,c,E){E.clearRect(0,0,c.width,c.height),E.font="12px san-serif",n(p,c.width,c.height),r(p,E),pt&&(D.width=c.width,D.height=c.height,pt.drawImage(c,0,0)),e(c,E)},e=function(p,c){if(c){const E=o;c.fillStyle="rgba(0, 0, 0, 0.15)",c.fillRect(p.width-E,p.height-E,E,E),c.strokeStyle="rgba(0, 0, 0, 0.5)",c.lineWidth=2;for(let d=0;d<E;d+=6)c.beginPath(),c.moveTo(p.width-d,p.height),c.lineTo(p.width,p.height-d),c.stroke()}},s=function(){const p=new Wt,c=new Qt({children:[new le("Long Caption1","Caption1"),new Je("OK","Cancel")]}),E=new Jt("Checkbox"),d=new Jt("Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8"),T=new Qt({children:[E,d]}),K=new Qe(new le("Long Label2","Label2"),new Jt("Checkbox2")),J=new Qt({children:[K,c,T]});return p.setRootContainer(J),p},n=function(p,c,E){const d=Math.floor(c/o),T=Math.floor(E/o);return p.layoutContainer({width:d,height:T})},r=function(p,c){E(p.getRootContainer(),0,0);function E(d,T,K){const{x:J,y:Ut}=d.getLocation(),{width:Kt,height:qt}=d.getSize();if(c.strokeStyle=d.isValid()?"rgba(0, 0, 0, 0.5)":"rgba(255, 0, 0, 0.75)",c.lineWidth=1,c.strokeRect(T*o+J*o,K*o+Ut*o,Kt*o,qt*o),c.fillStyle="rgba(0, 0, 0, 0.1)",c.fillRect(T*o+J*o,K*o+Ut*o,Kt*o,qt*o),c.strokeStyle="",c.fillStyle="rgba(0, 0, 0, 0.85)",c.fillText(`${d.name()} ${Kt}, ${qt}`,T*o+(J+.1)*o,K*o+(Ut+.7)*o),d instanceof N)for(const Ne of d.children())E(Ne,J,Ut)}};document.addEventListener("DOMContentLoaded",()=>{h()});const o=24;let u=!1,f=0,P=0;const D=document.createElement("canvas"),pt=D.getContext("2d"),Ce=document.getElementById("placeholder"),b=document.createElement("canvas");Ce.appendChild(b),b.style.border="1px solid #0005"}
