///<reference path="../../../node.d.ts"/>

import FileCategoryType from "../enum/FileCategoryType";
import fs = require('fs');
import path = require('path');

class FileAssessment
{
	public static getFileCategoryString(type:FileCategoryType):string
	{
		return FileCategoryType[type];
	}

	public static getFileCategoryFromPath(filepath:string):FileCategoryType
	{
		var extension = path.extname(filepath).substr(1);

		switch(extension)
		{
			case 'wav':
			case 'ogg':
			case 'mp3':
			{
				return FileCategoryType.AUDIO;
			}

			case 'mp4':
			case 'mov':
			{
				return FileCategoryType.VIDEO;
			}

			case 'json':
			{
				return FileCategoryType.JSON;
			}

			case 'gif':
			case 'png':
			case 'jpg':
			{
				return FileCategoryType.BITMAP;
			}

			default:
			{
				return FileCategoryType.UNKNOWN;
			}
		}
	}

	public static getFilesizeInBytes(filepath:string):number
	{
		var stats = fs.statSync(filepath);
		var fileSizeInBytes = stats["size"]
		return fileSizeInBytes
	}
}

export default FileAssessment;
