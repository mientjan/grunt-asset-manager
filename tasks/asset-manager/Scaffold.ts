///<reference path="../../node.d.ts"/>
///<reference path="../../promise.d.ts"/>


import path = require('path');
import util = require('util');
import fs = require('fs');
import Promise = require('promise');

import FileCategoryEnum from "./FileCategoryEnum"

class AssetManagerGenerator
{
	protected _files:Array<string> = [];
	protected _enum:AssetsEnumGenerator = null;
	protected _config:AssetsConfigGenerator = null;

	constructor(files:Array<string>, dest:string)
	{
		// make file paths relative to dest
		this._files = files.map((file) => {
			return path.relative(path.dirname(dest), file);
		});
		

		this._enum = new AssetsEnumGenerator(this._files);
		this._config = new AssetsConfigGenerator(this._enum);
	}

	public toJavascript():Promise<string>
	{
		return new Promise<string>((resolve:(result:string) => void) => {

		});
	}

	public toTypescript():Promise<string>
	{
		return new Promise<string>((resolve:(result:string) => void) => {
			fs.readFile('./template/assetenum.template.ts.txt', (err, data) => {

			})
		});
	}
}

class AssetsEnumGenerator
{
	public tree = {};
	public flatten = {};

	constructor(files:Array<string>)
	{
		for(var i = 0; i < files.length; i++)
		{
			var file = files[i];
			var parsed = path.parse(file);

			filepathToObject(this.tree, path.dirname(file), file, path.sep );
		}

		this.tree = this.normalizeStructure(this.tree);
		this.flatten = this.flattenStructure('', {}, this.tree);
		//console.log(this.tree);
		console.log(util.inspect(this.flatten, false, null));
		//console.log(this.flatten);

	}

	public normalizeStructure(structure:any)
	{
		var keys = Object.keys(structure);
		console.log(keys);
		
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
					var allStr = value.every((item) => { return typeof item == 'string' });
					console.log('allStr', allStr);

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

class AssetsConfigGenerator
{
	constructor(assetEnum:AssetsEnumGenerator)
	{
		
	}

	public toJavascript():string
	{
		return '';
	}

	public toTypescript():string
	{
		return '';
	}
}

function fileCategory(filepath:string):FileCategoryEnum
{
	var extension = path.extname(filepath);

	switch(extension)
	{
		case 'wav':
		case 'ogg':
		case 'mp3':
		{
			return FileCategoryEnum.AUDIO;
		}

		case 'mp4':
		case 'mov':
		{
			return FileCategoryEnum.VIDEO;
		}

		case 'json':
		{
			return FileCategoryEnum.JSON;
		}

		case 'gif':
		case 'png':
		case 'jpg':
		{
			return FileCategoryEnum.BITMAP;
		}

		default:
		{
			return FileCategoryEnum.UNKNOWN;
		}
	}
}

function filepathToObject(obj, id, value, seperator)
{
	//console.log(arguments);
	var seperator = seperator || path.sep;
	var value = value || '';

	var idList = id.split(seperator);


	if( idList.length == 1)
	{
		if(!obj[idList[0]]){
			obj[idList[0]] = [];
		}

		obj[idList[0]].push(value);
	} else {
		var key = idList.shift();
		obj[key] = filepathToObject(obj[key] || {}, idList.join(seperator), value, seperator);
	}

	return obj;
}

export {AssetManagerGenerator}