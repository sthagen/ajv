import {Name} from "./codegen"

const names = {
  // validation function arguments
  data: new Name("data"), // data passed to validation function
  // args passed from referencing schema
  dataCxt: new Name("dataCxt"), // should not be used directly, it is destructured to the names below
  dataPath: new Name("dataPath"),
  parentData: new Name("parentData"),
  parentDataProperty: new Name("parentDataProperty"),
  rootData: new Name("rootData"), // root data - same as the data passed to the first/top validation function
  // function scoped variables
  vErrors: new Name("vErrors"), // null or array of validation errors
  errors: new Name("errors"), // counter of validation errors
  this: new Name("this"),
  // "globals"
  self: new Name("self"),
  scope: new Name("scope"),
}

export default names