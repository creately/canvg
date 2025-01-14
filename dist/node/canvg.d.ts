declare namespace canvg {
  export interface Options {
    log?: boolean;
    useCORS?: boolean;
    ignoreMouse?: boolean;
    ignoreDimensions?: boolean;
    ignoreClear?: boolean;
    ignoreAnimation?: boolean;
    enableRedraw?: boolean;

    offsetX?: number;
    offsetY?: number;
    scaleWidth?: number;
    scaleHeight?: number;

    renderCallback?: (dom: Document) => void;
    errorCallback?: (error: Error) => void;
    forceRedraw?: () => boolean;
  }
}

declare function canvg(target?: string | HTMLCanvasElement, s?: string | Document, opts?: canvg.Options): void;

export = canvg;
