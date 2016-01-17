import ManifestCollection from "../util/ManifestCollection";
import mustache = require("mustache");
import fs = require("fs");

class Scaffold
{
  protected collection:ManifestCollection;

  constructor(collection:ManifestCollection)
  {
    this.collection = collection;
  }

  public toString():string
  {
    var template
    return mustache.parse
  }
}
