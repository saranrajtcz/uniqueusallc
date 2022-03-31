import { Component, AfterViewInit } from '@angular/core';
import * as $ from "jquery";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BillPay';
  //mobile button
  public isCollapsed = true;
  //nav scroll animation
  ngAfterViewInit() {
    $(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if ( $(window).scrollTop()) {
	    $('nav').addClass('stuck');
           $('.navbar-brand').removeClass('text-white');
      $('.nav-link').addClass('text-dark');
	  }

	  else{
		    $('nav').removeClass('stuck');
           $('.navbar-brand').addClass('text-white');
      $('.nav-link').removeClass('text-dark');
	  }
  })
})
//smooth scroll
    $(document).ready(function () {
      $("a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top-80
  },1000)

 })


    });
    //button outline change animations
    $(document).ready(function () {
      $('.nav a').on('click', function() {
    ($('.navbar-collapse') as any).collapse('hide');
});
    })





     }
}
