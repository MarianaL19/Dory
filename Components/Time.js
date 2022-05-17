export function tiempoFormato(date) {
    if(String(date) === 'Selecciona la hora'){
      return 'Selecciona la hora';
    }else{
      return date;
    }
  }