import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']  // เปลี่ยนจาก styleUrl เป็น styleUrls
})
export class ContactUsComponent {

  // ตัวแปรสำหรับเก็บข้อมูลของฟอร์ม
  contact = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    captcha: false
  };

  // ฟังก์ชันสำหรับจัดการเมื่อผู้ใช้กดส่งฟอร์ม
  onSubmit() {
    console.log('Form submitted:', this.contact);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    // สามารถเพิ่มโค้ดสำหรับส่งข้อมูลไปยัง backend หรือแสดงข้อความตอบกลับได้ที่นี่
  }
}
