using my from '../db/schema';
 
type PersonList {
  data : array of {
    id   : Integer;
    name : String;
  };
}

service PersonService {
  action importData(payload: PersonList);
  function getNameById(id: Integer) returns String;
}