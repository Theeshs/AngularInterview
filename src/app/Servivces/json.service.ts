import { Injectable } from '@angular/core';
import { example } from './example';
// import  *  as  data  from  '../../assets/example'


@Injectable({
  providedIn: 'root'
})
export class JSONService {

  constructor() { }
  /**
   * Here I'm returning a Promise. Since I wanted to set a delay for this I have used setTimout function here.
   * In here I'm creating a single object by going trough that JSON data and pushing it to an array. Then I'm
   * resolving that array If that array length is more than 0.
   */
  getData() {
    let dataArray = []
    return new Promise((resolve, reject) => {
      setTimeout(() => {
    
          example.data.forEach(element => {
            console.log(element)
            // debugger
            let retutnObject = {
              'ID': element.id,
              'TYPE': element.type,
              "LINKS": element.links.self,
              'ATTRIBUTES URN': element.attributes.urn,
              'ATTRIBUTES CREATED AT': element.attributes.created_at,
              'ATTRIBUTES UPDATED AT': element.attributes.updated_at,
              'ATTRIBUTES CONTENT': element.attributes.content,
              'ATTRIBUTES PROPERTIES': element.attributes.properties,
              'ATTRIBUTES DISPLAY POROPERTY TYPE': element.attributes.display_properties.type,
              'ATTRIBUTESDISPLAY POROPERTY IMAGE': element.attributes.display_properties.image,
              'AUTHERES LINK SELF': element.relationships.authors.links.self,
              'AUTHORS LINK RELATED': element.relationships.authors.links.related,
              'PUBLISHERS LINK SELF': element.relationships.publishers.links.self,
              'PUBLISHERS LINK RELATED': element.relationships.publishers.links.related,
              'LINK FIRST': example.links.first,
              'LINK LAST': example.links.last
            }
            dataArray.push(retutnObject)
          });

        dataArray.length > 0 ? resolve(dataArray) : reject('No data')
          
      }, 2000)
    })
  }
}
