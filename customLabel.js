import { LightningElement } from 'lwc';
import 	contactSaved from '@salesforce/label/c.contactSaved';
export default class Customlabel extends LightningElement {

    message;
    handleclick(){
    this.message = contactSaved;
}
}
