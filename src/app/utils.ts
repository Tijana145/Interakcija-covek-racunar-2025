import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class Utils {
  public bootstrapClasses = {
    popup: 'card',
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-danger',   
    denyButton: 'btn btn-light'
  };

  public showDialog(text: string, callback: Function , confirm: string = 'Yes', cancel: string = 'No',) {
     Swal.fire({
          title: text,
          showCancelButton: true,
          confirmButtonText: confirm,
          cancelButtonText: cancel,
          buttonsStyling: false, 
          customClass: this.bootstrapClasses
        }).then((result) => {
          if (result.isConfirmed) {
            callback()
          }
        })
  }
  public showAlert(text: string){
    Swal.fire({
      icon: 'info',
      title: text,
      customClass: this.bootstrapClasses
  })
}

}