import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcandidat',
  templateUrl: './addcandidat.component.html',
  styleUrls: ['./addcandidat.component.scss']
})
export class AddcandidatComponent implements OnInit {
  selectedFile: File | null = null;
  formData: any = {};
  CandidateForm: FormGroup;
  cvfileName = ''
  motfilename = ''
  detailOffre=JSON.parse(localStorage.getItem('offre'));
  constructor(private toastr: ToastrService,private formBuilder: FormBuilder) {

    this.CandidateForm = this.formBuilder.group({
      lastname: [''],
      firstname: [''],
      email: [''],
      statut:['Etudiant'],
      description:['']
    });
   }
  ngOnInit(): void {

  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if(event.target["name"]=='CV'){
      this.cvfileName = this.selectedFile.name

    }
    if(event.target["name"]=='motivation'){
      this.motfilename = this.selectedFile.name

    }
    console.log(event)

  }

  uploadFile(): void {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    // Make an HTTP POST request to upload the file

  }


  showNotification(from, align) {

    this.toastr.success(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Votre candidature pour l\'offre' +this.detailOffre.Titre+ ' a été envoyé avec succés à l\'entreprise '+ this.detailOffre.Entreprise+'</span>',
      "",
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: "toast-" + from + "-" + align
      }
    );

  }
  onSubmit() {
    // You can access form data from this.formData and perform actions (e.g., send data to a server).
    this.showNotification('top','right');
    console.log('Form Data Submitted:', this.CandidateForm.value);
  
    // Reset the form
  
  }
}
