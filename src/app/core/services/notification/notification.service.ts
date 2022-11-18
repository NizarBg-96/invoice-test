import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  fireErrorNotification(msg: string){
    Swal.fire("Une erreur s'est produite!",msg,'error')
  }
}
