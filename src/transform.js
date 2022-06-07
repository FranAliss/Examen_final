function transform(num) {
  let res = '';
  switch(num){
    case 1:
      res = "uno";
    break;
    case 2:
      res = "dos";
    break;
    case 3:
      res = "tres";
    break;
    case 4:
      res = "cuatro";
    break;
    case 5:
      res = "cinco";
    break;
    case 6:
      res = "seis";
    break;
    case 7:
      res = "siete";
    break;
    case 8:
      res = "ocho";
    break;
    case 9:
      res = "nueve";
    break;
  }
  return res;
}

export default transform;
