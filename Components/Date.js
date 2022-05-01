
export function getCurrentDate() {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    // Darle el formato '01, 02, 03', etc
    month<10 ? month = '0' + month : {}
    date<10 ? date = '0' + date : {} 

    return year + '-' + month + '-' + date;//format: yyyy-mm-dd;
  }

export function cambioFormato(date) {
    date = String(date).split('-');
    
    switch(date[1]){
      case '01': date[1] = 'Enero'; break;
      case '02': date[1] = 'Febrero'; break;
      case '03': date[1] = 'Marzo'; break;
      case '04': date[1] = 'Abril'; break;
      case '05': date[1] = 'Mayo'; break;
      case '06': date[1] = 'Junio'; break;
      case '07': date[1] = 'Julio'; break;
      case '08': date[1] = 'Agosto'; break;
      case '09': date[1] = 'Septiembre'; break;
      case '10': date[1] = 'Octubre'; break;
      case '11': date[1] = 'Noviembre'; break;
      case '12': date[1] = 'Diciembre'; break;
    }

    return date[1] + ' ' + date[2]; 
  }
