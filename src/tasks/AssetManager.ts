///<reference path="../../node.d.ts"/>

import path = require("path");
import fs = require("fs");

import {ManagerType} from "../lib/enum/ManagerType";
import Manifest from "../lib/util/Manifest";
// import {AssetManagerGenerator} from "./assetmanager/Scaffold";

function Grunt(grunt:any)
{
	var options;

	grunt.registerMultiTask('asset-manager', '-', function() {

		var done = this.async();

		options = this.options({
			type: ManagerType[ManagerType.TYPESCRIPT].toLowerCase()
		});

		var files = [];

		for(var i = 0; i < this.files.length; i++)
		{
			var src:Array<string> = this.files[i].src;
			var dest:string = this.files[i].dest;
			var manifest = new Manifest(src, dest);
			console.log(manifest.tree);

		}



	});
}

export = Grunt;
