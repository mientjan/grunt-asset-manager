///<reference path="../../../node.d.ts"/>
///<reference path="../../../promise.d.ts"/>

import IManifest from "../interface/IManifest";
import FileCategoryType from "../enum/FileCategoryType";
import path = require("path");

class Manifest implements IManifest
{
	src:string;
	type:FileCategoryType;
	size:number;

	constructor(src:string, type:FileCategoryType, size:number){
		this.src = src;
		this.type = type;
		this.size = size;
	}

	public getTypeString():string
	{
		return FileCategoryType[this.type].toLowerCase();
	}

	public getTree(tree:any = {}, id:Array<string> = path.dirname(this.src).split(path.sep))
	{
		var key:string;
		if(id.length > 1){
			key = id.shift();

			if(!tree[key])
			{
				tree[key] = {};
			}

			this.getTree(tree[key], id);
		}
		else if(id.length == 1){
			key = id[0];

			if(!tree[key]){
				tree[key] = [];
			}

			tree[key].push(this);
		}
	}
}

export default Manifest;
