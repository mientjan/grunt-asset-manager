import FileCategoryType from "../enum/FileCategoryType";

interface IManifest {
	src:string;
	type:FileCategoryType;
	size:number;
}
export default IManifest;
