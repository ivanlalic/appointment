(this.webpackJsonpdates=this.webpackJsonpdates||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},15:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),o=(t(15),t(9)),i=t(2),m=t(4),s=t(5),u=t(20),p=function(e){var a=e.crearCita,t=Object(n.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),r=Object(i.a)(t,2),c=r[0],o=r[1],p=Object(n.useState)(!1),d=Object(i.a)(p,2),h=d[0],E=d[1],f=function(e){o(Object(s.a)(Object(s.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))},b=c.mascota,v=c.propietario,g=c.fecha,N=c.hora,w=c.sintomas;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Crear Cita"),h?l.a.createElement("p",{className:"alerta-error"},"Todos los campos son obligatorios"):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==b.trim()&&""!==v.trim()&&""!==g.trim()&&""!==N.trim()&&""!==w.trim()?(E(!1),c.id=Object(u.a)(),a(c),o({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})):E(!0)}},l.a.createElement("label",null,"Nombre de la mascota"),l.a.createElement("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre de la mascota",onChange:f,value:b}),l.a.createElement("label",null,"Nombre del due\xf1o"),l.a.createElement("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"Nombre del due\xf1o",onChange:f,value:v}),l.a.createElement("label",null,"Fecha"),l.a.createElement("input",{type:"date",name:"fecha",className:"u-full-width",onChange:f,value:g}),l.a.createElement("label",null,"Hora"),l.a.createElement("input",{type:"time",name:"hora",className:"u-full-width",onChange:f,value:N}),l.a.createElement("label",null,"Sintoma"),l.a.createElement("textarea",{className:"u-full-width",name:"sintomas",onChange:f,value:w}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Agregar cita")))},d=t(6),h=t.n(d),E=function(e){var a=e.cita,t=e.eliminarCita;return l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Mascota: ",l.a.createElement("span",null,a.mascota)," "),l.a.createElement("p",null,"Owner: ",l.a.createElement("span",null,a.propietario)," "),l.a.createElement("p",null,"Date: ",l.a.createElement("span",null,a.fecha)," "),l.a.createElement("p",null,"Hour: ",l.a.createElement("span",null,a.hora)," "),l.a.createElement("p",null,"Symptoms: ",l.a.createElement("span",null,a.sintomas)," "),l.a.createElement("button",{className:"button eliminar u-full-width",onClick:function(){return t(a.id)}},"Delete \xd7"))};E.propType={cita:h.a.object.isRequired,eliminarCita:h.a.func.isRequired};var f=E;var b=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var a=Object(n.useState)(e),t=Object(i.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){e?localStorage.setItem("citas",JSON.stringify(r)):localStorage.setItem("citas",JSON.stringify([]))}),[r,e]);var m=function(e){var a=r.filter((function(a){return a.id!==e}));c(a)},s=0===r.length?"No hay citas":"Administra tus citas";return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Administrador de Pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(p,{crearCita:function(e){c([].concat(Object(o.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,s),r.map((function(e){return l.a.createElement(f,{key:e.id,cita:e,eliminarCita:m})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.582d11b6.chunk.js.map