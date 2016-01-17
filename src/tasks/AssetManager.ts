///<reference path="../../node.d.ts"/>
/// <reference path="../../mustache.d.ts"/>

import path = require("path");
import fs = require("fs");

import {ManagerType} from "../lib/enum/ManagerType";
import ManifestCollection from "../lib/util/ManifestCollection";
import {log} from "../lib/util/Tools";
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
			var manifest = new ManifestCollection(src, dest);
			log(manifest.getSortedByDirectory());
			log(manifest.getSortedByType());

		}

	});
}

export = Grunt;
