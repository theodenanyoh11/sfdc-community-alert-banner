import { LightningElement, wire, track, api} from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import PORTAL_TITLE from '@salesforce/schema/Support_Center_Alert__c.Alert_Title__c';
import PORTAL_MESSAGE from '@salesforce/schema/Support_Center_Alert__c.Alert_Message__c';

const FIELDS = [
    'Support_Center_Alert__c.Alert_Title__c',
    'Support_Center_Alert__c.Alert_Message__c',

]

export default class ScAlertBanner extends LightningElement {
    recordId = 'aL73C000000001TSAQ'; //You need to fix this and set it to query the id of the active SCA record if there's one

    @wire(getRecord, { 
        recordId: '$recordId',
        fields: FIELDS 
    })
    PortalAlert;

    get title (){
        return getFieldValue(this.PortalAlert.data, PORTAL_TITLE)
    }

    get message (){
        return getFieldValue(this.PortalAlert.data, PORTAL_MESSAGE)
    }

}