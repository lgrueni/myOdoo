# -*- coding: utf-8 -*-

#Scan eticket from Infomaniak on POS
#Copyright (C) 2023  Louis Grüninger

#This program is free software: you can redistribute it and/or modify
#it under the terms of the GNU General Public License as published by
#the Free Software Foundation, either version 3 of the License, or
#(at your option) any later version.

#This program is distributed in the hope that it will be useful,
#but WITHOUT ANY WARRANTY; without even the implied warranty of
#MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#GNU General Public License for more details.

#You should have received a copy of the GNU General Public License
#along with this program.  If not, see <https://www.gnu.org/licenses/>.

{
	"name" : "Scan eticket from Infomaniak",
	"version" : "1.1.0",
	"author" : "Louis Grüninger",
    "licence": "GPL-3 or any later version",
	"depends" : [
		'base',
		'point_of_sale'
	],
	"data" : [
        'views/pos_config.xml',
        'templates/sources.xml'
	],
    'qweb': [
        'static/src/xml/SuccessPopup.xml',
        'static/src/xml/scanButton.xml',
    ],
	"installable" : True,
}
