import { Component, OnInit } from '@angular/core';

interface Projects {
  name: string;
  image: string;
  description: string;
  deployed: boolean;
  inAngular?: boolean;
  inNextjs?: boolean;
  inReact?: boolean;
  urlDeploy?: string;
  githubRepo?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  projects: Projects[] = [
    {
      name: 'Spotify Info',
      description: 'A web-app to see information about artists, songs and releases provided by the official Spotify API.',
      image: 'assets/images/spotify_app_angular.png',
      deployed: true,
      urlDeploy: 'https://spoti-app-rosy.vercel.app',
      githubRepo: 'https://github.com/klitown/spoti-app',
      inAngular: true
    },
    {
      name: 'Aire Libre',
      description: 'A website to see the quality of the air in Paraguay, using a open-source API',
      image: 'assets/images/aire_libre_nextjs.png',
      deployed: true,
      urlDeploy: 'https://aire-libre.vercel.app/',
      githubRepo: 'https://github.com/klitown/aire-libre',
      inNextjs: true
    },
  ];

  constructor() { }

}