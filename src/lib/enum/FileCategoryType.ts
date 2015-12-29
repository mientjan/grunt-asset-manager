enum FileCategoryType
{
	UNKNOWN = 1 << 0,
	AUDIO = 1 << 1,
	BITMAP = 1 << 2,
	BITMAP_JPG = 1 << 3,
	BITMAP_PNG = 1 << 4,
	BITMAP_GIF = 1 << 5,
	VIDEO = 1 << 6,
	JSON = 1 << 7,
	JSON_MANIFEST = 1 << 8
}

export default FileCategoryType;
