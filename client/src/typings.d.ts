interface IClassNames {
  [className: string]: any
}

declare module "*.module.css" {
  const classNames: IClassNames;
  export = classNames;
}
declare module '*.css' {
  const classNames: IClassNames;
  export = classNames;
}
declare module '*.scss' {
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.module.scss" {
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png" {
  const value: any;
  export = value;
}
declare module "*.svg" {
  const value: any;
  export = value;
}
