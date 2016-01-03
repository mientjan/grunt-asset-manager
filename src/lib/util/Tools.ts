export function log(...arg:any[])
{
	if(arg.length>1){
		console.log(JSON.stringify(arg, null, "\t"));
	} else {
		console.log(JSON.stringify(arg[0], null, "\t"));
	}
}
