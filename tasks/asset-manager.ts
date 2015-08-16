///<reference path="../node.d.ts"/>

import path = require("path");
import fs = require("fs");

import ManagerTypeEnum = require("../library/ManagerTypeEnum");
import {AssetManagerGenerator} from "./asset-manager/Scaffold";

function Grunt(grunt){

	var options;

	grunt.registerMultiTask('asset-manager', 'Prefix CSS files.', function() {

		var done = this.async();

		options = this.options({
			type: ManagerTypeEnum[ManagerTypeEnum.TYPESCRIPT].toLowerCase()
		});

		console.log(this.filesSrc);
		console.log(this.files);

		for(var i = 0; i < this.files.length; i++)
		{
			var files = this.files[i];
			var generator = new AssetManagerGenerator(files.src, files.dest);

		}

	});
}

export = Grunt;