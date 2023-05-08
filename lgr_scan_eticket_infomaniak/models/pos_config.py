from odoo import models, fields, api

class ik_eticket_pos_config(models.Model):
    _inherit = 'pos.config'

    ik_scan = fields.Boolean('Scanning infomaniak etickets in POS')
    ik_api_key = fields.Char('API key from Infomaniak', help="Key must be have a shop access")
    ik_product = fields.Many2one('product.template', 'Product to add on scan', domain="[('available_in_pos', '=', True)]", help="This product will be add to cart when a scan is successfull")