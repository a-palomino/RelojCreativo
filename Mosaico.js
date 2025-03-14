class Mosaico{
  
  constructor(parts,rows,col){
    
    
    this.parts = parts;
    this.col = col;
    this.rows = rows;
    this.shapes = []; //Array con las formas a rellenar el mosaico
    //Array con los colores a pintar las partes del mosaico
    this.partesColoresAM = { 0: color(255,0,0,150),
      1: color(0,255,0,150),
      2: color(0,0,255,150),
      3: color(255,0,255,150),
      4: color(0,255,255,150),
      5: color(255,255,0,150),
      6: color(255,255,125,150),
      7: color(125,255,255,150),
      8: color(255,125,255,150),
      9: color(255,125,125,150),
      10: color(125,125,255,150),
      11: color(125,255,125,150)};

this.partesColoresPM = { 0: color(255,0,0,75),
      1: color(0,255,0,75),
      2: color(0,0,255,75),
      3: color(255,0,255,75),
      4: color(0,255,255,75),
      5: color(255,255,0,75),
      6: color(255,255,125,75),
      7: color(125,255,255,75),
      8: color(255,125,255,75),
      9: color(255,125,125,75),
      10: color(125,125,255,75),
      11: color(125,255,125,75)};
}


  
  //Método para crear el mosaico
  createMosaico(){
    
    //Calculamos las medidas que debe tener las partes del mosaico
    let partsWidth = width / this.rows;
    let partsHeight = height / this.col;
    let x1 = 0;
    let y1 = 0;
    let iterator = 0;
    //Bucle para crear y posicionar las partes
    for(let i = 0; i < this.col; i++){
      x1 = 0;
      
      for(let j = 0; j < this.rows; j++ ){
        
        //Dibujamos la parte
        
        this.createParte(j,i,x1,y1,partsWidth,partsHeight,iterator);
        x1 += partsWidth;
        iterator++;
        
      }
      y1 += partsHeight;
    }
    
  }
  
  //Función que crea las partes del mosaico
  createParte(num,col,posX,posY,pWidth,pHeight,iterator){
    
    //En función del número y la columna a que corresponda la parte, su forma     será diferente
    //Calculamos las coordenadas de los vertices
    var x1 = posX;
    var y1 = posY;
    var x2 = posX+pWidth;
    var y2 = posY;
    var x3 = x2;
    var y3 = posY + pHeight;
    var x4 = x1;
    var y4 = y3;
    
    var colorParte = this.gestionPartesColores(iterator);
    //Referéncia a la columna superior e inferior, puesto que ambas son iguales
    if(col == 0 || col == 2){
      
      switch(num){
        
        case 0:
          
          //Creamos la forma personalizada 1
          fill(colorParte);
          stroke("black");
          strokeWeight(8);
          beginShape();
          vertex(x1, y1);
          vertex(x2, y2);
          bezierVertex(x2+15,y2+15,x3-15,y3-15,x3,y3);
          vertex(x3, y3);
          vertex(x4, y4);
            // Stop drawing the shape.
          // Connect the first and last vertices.
          endShape(CLOSE);
        break;
        
        case 1:
          //Creamos la forma personalizada 2
          fill(colorParte);
          stroke("black");
          strokeWeight(8);
          beginShape();
          vertex(x1, y1);
          vertex(x2, y2);
          bezierVertex(x2+15,y2+15,x3-15,y3-15,x3,y3);
          vertex(x3, y3);
          vertex(x4, y4);
          bezierVertex(x4-15,y4-15,x1+15,y1+15,x1,y1);
          endShape(CLOSE);
        break;
        
        case 2:
          //Creamos la forma personalizada 3
          fill(colorParte);
          stroke("black");
          strokeWeight(8);
          beginShape();
          vertex(x1, y1);
          vertex(x2, y2);
          bezierVertex(x2+15,y2+15,x3-15,y3-15,x3,y3);
          vertex(x3, y3);
          vertex(x4, y4);
          bezierVertex(x4-15,y4-15,x1+15,y1+15,x1,y1);
            // Stop drawing the shape.
          // Connect the first and last vertices.
          endShape(CLOSE);
        break;
        
        case 3:
          //Creamos la forma personalizada 4
          fill(colorParte);
          stroke("black");
          strokeWeight(8);
          beginShape();
          vertex(x1, y1);
          vertex(x2, y2);
          vertex(x3, y3);
          vertex(x4, y4);
          bezierVertex(x4-15,y4-15,x1+15,y1+15,x1,y1);
          endShape(CLOSE);
        break;
      }
    }else if (col == 1){ //Referéncia a la columna central, pues que al tener el ojo en el centro la geometría cambia
      
      switch(num){
        
        case 0:
          
          //Creamos la forma personalizada 1
          fill(colorParte);
          stroke("black");
          strokeWeight(8);
          beginShape();
          vertex(x1, y1);
          vertex(x2, y2);
          bezierVertex(x2+15,y2+15,x3-15,y3-15,x3,y3);
          vertex(x3, y3);
          vertex(x4, y4);
          endShape(CLOSE);
        break;
        
        case 1:
          //Creamos la forma personalizada 2
          
          //El ancho será la mitad
          x2 = x2 - (pWidth/2);
          x3 = x2;
          fill(colorParte);
          stroke("black");
          strokeWeight(8);
          beginShape();
          vertex(x1, y1);
          vertex(x2, y2);
          bezierVertex(x2+5,y2+5,x3+5,y3,x3,y3);
          vertex(x3, y3);

          vertex(x4, y4);
          bezierVertex(x4-15,y4-15,x1+15,y1+15,x1,y1);
          endShape(CLOSE);
        break;
        
        case 2:
          //Creamos la forma personalizada 3
          //El ancho será la mitad y estará desplazado a la derecha
          x1 = x1 + (pWidth/2);
          x4 = x1;
          fill(colorParte);
          stroke("black");
          strokeWeight(8);
          beginShape();
          vertex(x1, y1);
          vertex(x2, y2);
          bezierVertex(x2+15,y2+15,x3-15,y3-15,x3,y3);
          vertex(x3, y3);
          vertex(x4, y4);
          bezierVertex(x4+5,y4+5,x1+5,y1,x1,y1);
          endShape(CLOSE);
        break;
        
        case 3:
          //Creamos la forma personalizada 4
          fill(colorParte);
          stroke("black");
          strokeWeight(8);
          beginShape();
          vertex(x1, y1);
          vertex(x2, y2);
          vertex(x3, y3);
          vertex(x4, y4);
          bezierVertex(x4-15,y4-15,x1+15,y1+15,x1,y1);
          endShape(CLOSE);
        break;
      }
    }
    
    
    
  }
  
  
  
  /**Metodo para gestionar los colores de las partes, en función de la hora y la parte el color será distinto.
  *@param iterator, Número correspondiente de la parte que debe obtener el color
  */
  gestionPartesColores(iterator){
    
    //Comprovamos la hora
    if(Clock.formatHora() >= iterator+1){
      //Formato AM o PM
      //Pasamos un color u otro en función de si ha oscurecido o sigue de dia
      
      //AM format
      if(Clock.formatHora() <= 12){
        //Es de noche aún
        if(Clock.formatHora() <= 6){
          return this.partesColoresPM[iterator];
        }else{
          return this.partesColoresAM[iterator]
        }
         }
          //PM Format
          else{
           if(Clock.formatHora() >= iterator+13){
             //Es de noche
             if(Clock.formatHora() >= 21){
               return this.partesColoresPM[iterator];
             }else{
               return this.partesColoresAM[iterator]
             }
           }
           
        }
    }
    
    //Si no se cumple, esa parte queda en gris
    return color(125);
  }
  
  
}