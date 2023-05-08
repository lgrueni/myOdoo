odoo.define('lgr_scan_eticket_infomaniak.EticketIKSuccessPopup', function(require) {
    'use strict';

    const AbstractAwaitablePopup = require('point_of_sale.AbstractAwaitablePopup');
    const Registries = require('point_of_sale.Registries');

    // formerly ConfirmPopupWidget
    class EticketIKSuccessPopup extends AbstractAwaitablePopup {}
    EticketIKSuccessPopup.template = 'EticketIKSuccessPopup';
    EticketIKSuccessPopup.defaultProps = {
        confirmText: 'Ok',
        title: 'Success',
        body: '',
    };

    Registries.Component.add(EticketIKSuccessPopup);

    return EticketIKSuccessPopup;
});
