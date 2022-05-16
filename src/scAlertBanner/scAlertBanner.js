import { LightningElement, wire, api} from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import PORTAL_NAME from '@salesforce/schema/aptk_alert__Company_Alert__c.Name';
import PORTAL_MESSAGE from '@salesforce/schema/aptk_alert__Company_Alert__c.aptk_alert__Message__c';
import PORTAL_LINK_LABEL from '@salesforce/schema/aptk_alert__Company_Alert__c.link_label__c';
import PORTAL_LINK from '@salesforce/schema/aptk_alert__Company_Alert__c.link__c';

const FIELDS = [
    'aptk_alert__Company_Alert__c.Name',
    'aptk_alert__Company_Alert__c.aptk_alert__Message__c',
    'aptk_alert__Company_Alert__c.link_label__c',
    'aptk_alert__Company_Alert__c.link__c',

]

export default class ScAlertBanner extends LightningElement {
    recordId = 'aL13C0000004C9iSAE';

    @wire(getRecord, { 
        recordId: '$recordId',
        fields: FIELDS 
    })
    PortalAlert;

    get name (){
        return getFieldValue(this.PortalAlert.data, PORTAL_NAME)
    }

    get message (){
        return getFieldValue(this.PortalAlert.data, PORTAL_MESSAGE)
    }

    get link (){
        return getFieldValue(this.PortalAlert.data, PORTAL_LINK)
    }

    get link_label (){
        return getFieldValue(this.PortalAlert.data, PORTAL_LINK_LABEL)
    }
}