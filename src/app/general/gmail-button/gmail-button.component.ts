import { Component } from '@angular/core';

@Component({
  selector: 'app-gmail-button',
  templateUrl: './gmail-button.component.html',
  styleUrls: ['./gmail-button.component.scss']
})
export class GmailButtonComponent {
  openGmail() {
    const isAndroid = /android/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !navigator.maxTouchPoints;

    if (isAndroid) {
      window.location.href = 'mailto:?view=cm';
    } else if (isIOS) {
      window.location.href = 'googlegmail:///co?to=&subject=&body=';
    } else {
      window.location.href = 'https://mail.google.com/';

      //tem que mudar esse link
    }
  }
}