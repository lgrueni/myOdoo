odoo.define("lgr_scan_eticket_infomaniak.ScanButton", function (require) {
    "use strict";

    const { Gui } = require('point_of_sale.Gui');
    const PosComponent = require("point_of_sale.PosComponent");
    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require("point_of_sale.Registries");
    const core = require('web.core');

    var _t = core._t;

    class InfomaniakScanButton extends PosComponent {
        async onClick() { 
            var self = this;
            
            Gui.showPopup('TextInputPopup', {
                title: _t('Scan an eticket'),
            }).then(_res => {
                if(_res.confirmed) {
                    self.scanTicket(_res.payload)
                    .then(() => {
                        const product = this.env.pos.db.get_product_by_id(this.env.pos.config.ik_product[0])
                        this.env.pos.get_order().add_product(product)
                        Gui.showPopup('EticketIKSuccessPopup', {
                            title: _t('Success'),
                            body: _t('This e-ticket is valid')
                        })
                    })
                    .catch((_err) => {
                        Gui.showPopup('ErrorPopup', {
                            title: _t('E-ticket error'),
                            body: _err.error + ' [' + _err.error_code + ']',
                        })
                    })
                }
            })
        }

        scanTicket(_code) {
            return new Promise((resolve, reject) => {
                var self = this;
                var xhr = new XMLHttpRequest();
                
                var code = _code.split('^')
                code = code[0].substr(2)
                var url = 'https://etickets.infomaniak.com/api/shop/ticket/' + code + '/scan'

                xhr.open('PUT', url);
                xhr.setRequestHeader('key', this.env.pos.config.ik_api_key),
                xhr.setRequestHeader('Accept-Language', this.env.pos.user.lang),

                xhr.onreadystatechange = function() {
                    if(xhr.readyState == 4) {
                        if(xhr.status == 200) {
                            console.log(xhr.response)
                            resolve()
                        }
                        else {
                            reject(JSON.parse(xhr.response))
                        }
                    }
                }
                xhr.send();
            })
        }
    }
    InfomaniakScanButton.template = "InfomaniakScanButton"

    ProductScreen.addControlButton({
        component: InfomaniakScanButton,
        condition: function() {
            return this.env.pos.config.ik_scan;
        },
    });

    Registries.Component.add(InfomaniakScanButton);

    return InfomaniakScanButton;
})