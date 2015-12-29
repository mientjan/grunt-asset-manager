///<reference path="../../../node.d.ts"/>
///<reference path="../../../promise.d.ts"/>


//import util = require('assetmanager/Util');
//import fs = require('fs');
//import Promise = require('promise');
import path = require('path');
import FileCategory from "../enum/FileCategoryType";
import FileAssessment from "../util/FileAssessment"
import IHashMap from "../interface/IHashMap";
import IManifest from "../interface/IManifest";

class Manifest
{
	files:Array<IHashMap>;
	tree:IHashMap<any> = {};
	filesRelative:Array<string>;

	constructor(files:Array<string>, dest:string)
	{
		this.filesRelative = files.map(file => path.relative(path.dirname(dest), file) );
		this.files = files.map(file => {
			return {
				src:file,
				type:FileCategory[FileAssessment.getFileCategoryFromPath(file)].toLowerCase(),
				typen:FileAssessment.getFileCategoryFromPath(file),
				bytesize:FileAssessment.getFilesizeInBytes(file)
			}
		})

		this.files.forEach(file => this.manifestToObjectTree(this.tree, path.dirname(file.src), file));
	}

	protected manifestToObjectTree(obj:IHashMap<IHashMap<IManifest>|IManifest>, id:string, value:IManifest, seperator:string = path.sep)
	{
		var idList = id.split(seperator);
		if( idList.length == 1)
		{
			if(!obj[idList[0]]){
				obj[idList[0]] = [];
			}

			obj[idList[0]].push(value);
		} else {
			var key = idList.shift();
			obj[key] = this.manifestToObjectTree(obj[key], idList.join(seperator), value, seperator);
		}

		return obj;
	}

	toList():Array<any>
	{
		return this.files.map(file => {
			return {
				src:file,
				type:FileCategory[FileAssessment.getFileCategoryFromPath(file)].toLowerCase(),
				typen:FileAssessment.getFileCategoryFromPath(file),
				bytesize:FileAssessment.getFilesizeInBytes(file)
			}
		})
	}


}

export default Manifest;
