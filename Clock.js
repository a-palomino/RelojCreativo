//En este Sketch se define la clase Clock, que se encargará de gestionar el paso del tiempo

class Clock{
  
  static printHora(){
    text(this.formatHora() + ":" + minute() + ":" + second(), width/2,height/2);
  }
  
  static formatHora(){
    return hour();
  }
}