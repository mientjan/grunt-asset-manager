///<reference path="../../node.d.ts"/>
///<reference path="../../promise.d.ts"/>


//import util = require('assetmanager/Util');
//import fs = require('fs');
//import Promise = require('promise');
import path = require('path');
import FileCategory from "../enum/FileCategoryType";
import FileAssessment from "../util/FileAssessment";
import IManifest from "../interface/IManifest";

export class Manifest
{
	files:Array<string>;

	constructor(files:Array<string>, dest:string)
	{
		this.files = files.map(file => path.relative(path.dirname(dest), file) );
	}

	toJSON():Array<IManifest>
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

	toString():string
	{
		return JSON.stringify(this.toJSON());
	}
}
