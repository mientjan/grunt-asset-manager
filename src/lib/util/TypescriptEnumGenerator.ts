/// <reference path="../../../node.d.ts"/>
/// <reference path="../../../promise.d.ts"/>

import ManifestCollection from "./ManifestCollection";
import FileCategoryType from "../enum/FileCategoryType";
import path = require("path");
import fs = require("fs");

class TypescriptEnumGenerator
{
	protected _manifest:ManifestCollection;
	public tree = {};
	public flatten = {};

	constructor(manifest:ManifestCollection)
	{
		this._manifest = manifest;
	}

	public getEnum():string
	{
		var tree = this.normalizeStructure(this._manifest.toObjectTree());
		var dir = [];
		for (let i = 0; i < FileCategoryType; i++) {
		    array[i];
		}


		return '';
	}

	public normalizeStructure(structure:any)
	{
		var keys = Object.keys(structure);

		if( keys.length == 1 )
		{
			return this.normalizeStructure(structure[keys[0]]);
		} else {
			return structure;
		}
	}

	public flattenStructure(baseKey:string, baseObject:any, structure:any, seperator:string = '_' )
	{
		for(var key in structure)
		{
			var value = structure[key];
			if( value )
			{
				if( typeof value == 'string' )
				{
					var name = path.parse(value).name.replace(/-/,'')
					baseObject[baseKey + seperator + key + seperator + name ] = value;
				}
				else if( value instanceof Array )
				{
					var allStrings = value.every(item => typeof item == 'string');
					if( allStrings )
					{

					}

				}
				else {
					this.flattenStructure(
							( baseKey.length > 0 ? baseKey + seperator : baseKey ) + key,
							baseObject, value
					);
				}
			}
		}

		return baseObject;
	}

	public toTypescript():Promise<string>
	{
		return new Promise<string>((resolve:(result:string) => void) => {
			fs.readFile('./template/assetenum.template.ts.txt', (err, data) => {

			})
		});
	}
}

export default TypescriptEnumGenerator;
