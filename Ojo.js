//En este Sketch se gestiona un Ojo que representa los minutos y segundos
//Apoyado por el sketch de https://editor.p5js.org/jackiehu/sketches/Sy7JkKJk4

//Propiedades del ojo
var moverse;
class Ojo{
  
  constructor(){
    this.moverse = false; //Boolean de animación de la pupila
    this.movEstado = 0; // 0 = Moverse a la derecha, 1 = Moverse a la izquierda, 2 = Moverse de vuelta al centro y finalizar la animación
    this.posPupila = createVector(0,0);
    this.tiempoAnim = millis(); //Tiempo de espera para volver a realizar la animación
  }
  
  /**
  *Esta función dibuja un ojo en el centro de la pantalla. El color que lo rellena representa los
  *segundos, pues con su paso se vuelve cada vez más azul.
  */
  dibujarOjoGeneral(){
    //Forma de fuera
    let colorOjo = this.getionarColorOjo();
    fill(colorOjo);
    translate(width/2,height/2);
    beginShape();
    vertex(-80,0);
    bezierVertex(-30,-50,30,-50,80,0);//Curva superior
    bezierVertex(30,50,-30,50,-80,0);//Curva inferior
    endShape();
    
    
    
    //Si pestañea dibujamos la linea
    if(second() == 0){
      line(-80,0,80,0);
    }else{
      //Iris
      this.gestionarAnimacion();
      
      if(this.moverse){
        //Actualizamos la posición de la pupila
        this.animarPupila();
      }
      //Dibujamos la pupila
      ellipse(this.posPupila.x,this.posPupila.y,30,30);
    }
  }
  
  /**
  *Esta función devuelve el color con el cual el ojo debe rellenarse.
  */
  getionarColorOjo(){
    let porcentajeBruto = (second() * 100) / 59;
    let porcentaje = porcentajeBruto / 100;
    //console.log(porcentajeBruto + " :: " + porcentaje + " :segundos: " + second());
    let blanco = color("white");
    let azul = color(0,125,255); // Azul celeste
    let colorFinal;
    if(second() > 0){
      colorFinal = lerpColor(blanco,azul,porcentaje);
    }else{
      colorFinal = color(245,185,158);
    }
    
    return colorFinal;
  }
  
  dibujarPestanas(){
    let porcentajeBruto1; //Curva ojo superior
    let porcentajeBruto2; //Curva ojo inferior
    let porcentaje1;
    let porcentaje2;
    let posX;
    let posY;
    let minutos1 = minute() > 29 ? 29 : minute();
    let minutos2 = minute() > 29 ? minute() - 29 : minute();
    console.log(minutos2);
    //Recorremos el bucle para dibujar las pestañas en la parte superior
    for (let i = 0; i <= minutos1; i++){
      //Calculamos el porcentaje de progreso
      porcentajeBruto1 = (i * 100) / 30;
      porcentaje1 = porcentajeBruto1 / 100;
      
      //Calculamos la posición de la pestaña
      posX = bezierPoint(-80,-30,30,80,porcentaje1);
      posY = bezierPoint(0,-50,-50,0,porcentaje1);
      
      //Resaltamos las pestañas que señalan los minutos 1,10,20 y 30
      if(i == 0 || i == 9 || i == 19 || i == 29){
        //Dibujamos la pestaña larga
        strokeWeight(2);
        line(posX,posY,posX,posY-20);
      }else{
        //Dibujamos la pestaña normal
        strokeWeight(2);
        line(posX,posY,posX,posY-10);
      }
      
    }
    
    //Comprovamos si debe dibujarse pestañas en la parte inferior
    if(minute() > 29){
      //Recorremos el bucle para dibujar las pestañas en la parte inferior
      for (let i = 0; i <= minutos2; i++){
        //Calculamos el porcentaje de progreso
        porcentajeBruto2 = (i * 100) / 30;
        porcentaje2 = porcentajeBruto2 / 100;

        //Calculamos la posición de la pestaña
        posX = bezierPoint(80,30,-30,-80,porcentaje2);
        posY = bezierPoint(0,50,50,0,porcentaje2);

        //Resaltamos las pestañas que señalan los minutos 40,50 y 60
        if(i == 9 || i == 19 || i == 29){
          //Dibujamos la pestaña larga
          strokeWeight(2);
          line(posX,posY,posX,posY+20);
        }else{
          //Dibujamos la pestaña normal
          strokeWeight(2);
          line(posX,posY,posX,posY+10);
        }

      }
    }
    
  }
  
  //Esta función anima la pupila del ojo
  animarPupila(){
    let maxDerecha = 40;
    let maxIzquierda = -40;
      switch(this.movEstado){
        //Movimiento a la derecha
        case 0: 
          if(this.posPupila.x < maxDerecha){
            this.posPupila.x += 0.3;
          }else{
            this.movEstado = 1;
          }
        break;
        
        //Movimiento a la izquierda
        case 1:
          if(this.posPupila.x > maxIzquierda){
            this.posPupila.x -= 0.3;
          }else{
            this.movEstado = 2;
          }
        break;
        
        //Movimiento al centro
        case 2:
          if(this.posPupila.x < 0){
            this.posPupila.x += 0.3;
          }else{
            this.movEstado = 0;
            this.tiempoAnim = millis(); //Reseteamos el tiempo de espera
            this.moverse = false; //Se termina la animación
          }
        break;
      }
    }
  
  /**
  *Esta función se encarga de gestionar cuando debe activarse la animación de la pupila
  */
  gestionarAnimacion(){
    
    if(!this.moverse){
      let tiempo = millis() - this.tiempoAnim;
      //Debe esperar 30 segundos
      if(tiempo >= 30000){
        this.moverse = true;  
      }
      
    }
  }
  
  /**
  *Esta función se encarga de dibujar y gestionar las variables relativas al ojo
  */
  gestionarOjo(){
      this.dibujarOjoGeneral();
      this.dibujarPestanas();
    }
  
}