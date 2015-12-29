///<reference path="../node.d.ts"/>

import path = require("path");
import fs = require("fs");

import ManagerType = require("../src/enum/ManagerType");
// import {AssetManagerGenerator} from "./assetmanager/Scaffold";

function Grunt(grunt:any) 
{
	var options;

	grunt.registerMultiTask('asset-manager', '-', function() {

		var done = this.async();

		options = this.options({
			type: ManagerType[ManagerType.TYPESCRIPT].toLowerCase()
		});

		console.log(this.files);

		// for(var i = 0; i < this.files.length; i++)
		// {
		// 	var files = this.files[i];
		// 	var generator = new AssetManagerGenerator(files.src, files.dest);
		// }

	});
}

export = Grunt;
