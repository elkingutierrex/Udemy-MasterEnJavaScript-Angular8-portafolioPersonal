import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../..//services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute,  Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService , UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  private url : string;
  public save_project : Array<any>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route : ActivatedRoute,
    private _router : Router
  ) {
    this.title = "Editar Proyecto";
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params=> {
      let id = params.id;

      this.getProject(id);
    })
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  onSubmit(){
    this._projectService.updateProject(this.project).subscribe(
     response=>{
        if (response.project) {

          if(this.filesToUpload){
              // subir la imagen
              this._uploadService.makeFileRequest(Global.url + "/upload-image" + '/' + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                this.status = 'success';
                this.save_project = response.project;
                console.log(result)
              });
          }else{
            this.status = 'success';
            this.save_project = response.project;
            console.log(response)
          }

        } else {
          this.status = 'failed';
        }
     }, error =>{
      console.log(<any>error);
     }
    )
  }

}
