import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";

export class CaseTransformer {
  constructor() {}
  public cases = [
    "camel case",
    "snake case",
    "capital case",
    "constant case",
    "dot case",
    "header case",
    "no case",
    "param case",
    "pascal case",
    "path case",
    "sentence case",
  ];
  transform(input: string, caseTo: string): string {
    switch (caseTo) {
      case "camel case": {
        return camelCase(input);
      }
      case "capital case": {
        return capitalCase(input);
      }
      case "constant case": {
        return constantCase(input);
      }
      case "dot case": {
        return dotCase(input);
      }
      case "header case": {
        return headerCase(input);
      }
      case "no case": {
        return noCase(input);
      }
      case "param case": {
        return paramCase(input);
      }
      case "pascal case": {
        return pascalCase(input);
      }
      case "path case": {
        return pathCase(input);
      }
      case "sentence case": {
        return sentenceCase(input);
      }
      case "snake case": {
        return snakeCase(input);
      }
    }
    return input;
  }
}
