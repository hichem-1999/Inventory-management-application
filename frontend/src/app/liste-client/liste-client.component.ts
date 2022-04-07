import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'app/model/client';
import { ClientService } from 'app/service/client.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

  public clients: Client[] = [];

		public editClient: any ;
		public deleteClient: any;

		constructor(private clientService:
		ClientService) { }

		ngOnInit(): void {
		this.getClient();
		}
	
		public getClient(): void {
		this.clientService.getClient().subscribe(
		(response: Client[]) => {
		this.clients = response;
		console.log(this.clients);
		},
		(error: HttpErrorResponse) => {
		alert(error.message);
		}
		);
		}

		public onUpdateClient(client: Client): void {
		this.clientService.editClient(client).subscribe(
		(response: Client) => {
		console.log(response);
		this.getClient();

		},
		(error: HttpErrorResponse) => {
		alert(error.message);
		}
		);
		}
		public onDeleteClient(idFrs: number): void {
		this.clientService.deleteClient(idFrs).subscribe(
		(response: void) => {
		console.log(response);
		this.getClient();
		},
		(error: HttpErrorResponse) => {
		alert(error.message);
		}
		);
		}
		public searchClient(key: string): void {
		console.log(key);
		const results: Client[] = [];
		for (const client of this.clients) {
		if (client.nomUser.toLowerCase().indexOf(key.toLowerCase()) !== -1,
		client.genreUser.toLowerCase().indexOf(key.toLowerCase()) !== -1

		) {
		results.push(client);
		}
		}
		this.clients = results;
		if (results.length === 0 || !key) {
		this.getClient();
		}
		}


		public onOpenModal(client: any, mode: string): void {

		const container = document.getElementById('main-container');
		const button = document.createElement('button');
		button.type = 'button';
		button.style.display = 'none';
		button.setAttribute('data-toggle', 'modal');
	
		if (mode === 'edit') {
		this.editClient = client;
		button.setAttribute('data-target', '#updateClientModal');
		}
		if (mode === 'delete') {
		this.deleteClient=client;
		button.setAttribute('data-target', '#deleteClientModal');
		console.log('function work or not');
		}

		container?.appendChild(button);
		button.click();
		}

		}
