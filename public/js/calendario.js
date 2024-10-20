const { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, subMonths, format, isSameMonth, isToday, eachDayOfInterval } = require('date-fns');
const { es } =  require('date-fns/locale');

let fechaActual = new Date();
 function generarCalendario() {
   const inicioMes = startOfMonth(fechaActual);
   const finMes = endOfMonth(fechaActual);

   const inicioSemana = startOfWeek(inicioMes, { weekStartsOn: 0 });
   const finSemana = endOfWeek(finMes, { weekStartsOn: 0 });

   const diasDelMes = eachDayOfInterval({
     start: inicioSemana,
     end: finSemana,
   });

   const semanas = [];
   let semanaActual = [];

   diasDelMes.forEach((dia) => {
     const diaObjeto = {
       dia: format(dia, "d", { locale: es }),
       mes: format(dia, "MMMM", { locale: es }).toLocaleUpperCase(),
       anio: format(dia, "yyyy", { locale: es }),
       isFromCurrentMonth: isSameMonth(dia, fechaActual),
       esHoy: isToday(dia),
     };

     semanaActual.push(diaObjeto);

     if (semanaActual.length === 7) {
       semanas.push(semanaActual);
       semanaActual = [];
     }
   });

   return semanas;
 }

 function cargarMesAnterior() {
   fechaActual = subMonths(fechaActual, 1);
   return generarCalendario();
 }

 function cargarMesSiguiente() {
   fechaActual = addMonths(fechaActual, 1);
   return generarCalendario();
 }

 function cargarMesActual() {
   fechaActual = new Date();
   return generarCalendario();
 }

 module.exports = { cargarMesAnterior, cargarMesSiguiente, cargarMesActual};
