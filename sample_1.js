/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
 define(['N/record','N/currentRecord', 'N/log'], 
    function(record, currentRecord, log) {
    function fieldChanged_bodytoline(context,name) {
        
        try {
            var recObject = context.currentRecord;
            var stCurrField = name;
            log.debug({
                title: 'FieldChanged', 
                details: 'Field '+name
                });

            //more changes to the file    
            //another change
            //yet another change
            // and another one
            // another one after commit
            // new repo new line
            // if (stCurrSublist === 'item' && stCurrField === 'department') {
            if (stCurrField === 'department' && 
            (recObject.getValue({fieldId: fieldName})!='' || recObject.getValue({fieldId: fieldName})!=null)) 
            {
                var newLineVal = recObject.getValue({
                    fieldId: fieldName
                });
                recObject.setCurrentSublistValue({
                    sublistId: 'item',
                    fieldId: stCurrField,
                    ignoreFieldChange: false
                });
            }
        } catch (e) {
            alert(e.name + ': ' + e.message);
        }
    }
    return {
        fieldChanged: fieldChanged_bodytoline
    };
}); 