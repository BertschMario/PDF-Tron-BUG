import {AfterViewInit, Component, ElementRef, ViewChild} from "@angular/core";
import WebViewer, {WebViewerInstance} from "@pdftron/webviewer";

@Component({
  selector: 'web-viewer',
  template: `<div #viewer style="height: 100%"></div>`,
  standalone: true,
})
export class WebViewerComponent implements AfterViewInit {
  private instance!: WebViewerInstance;

  @ViewChild('viewer') viewerElement!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.initWebViewer();
  }

  private async initWebViewer() {
    this.instance = await WebViewer(
      {
        annotationUser: 'Test User',
        documentXFDFRetriever: () => new Promise<string>((resolve) => resolve('')),
        enableMeasurement: true,
        fullAPI: true,
        initialDoc: '',
        licenseKey: '',
        path: 'assets/pdftron-lib',
        additionalTranslations: {
          language: 'de',
          translations: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            'option.toolbarGroup.toolbarGroup-Forms': 'Formular',
          },
        },
      },
      this.viewerElement.nativeElement,
    );

    this.initPdfViewer();
  }

  private async initPdfViewer() {
    const { PDFNet } = this.instance.Core;
    console.log('INIT PDFNET');
    await PDFNet.initialize();
    console.log('PDFNET INITIALIZED');

    /*
    The code gets Stuck at "await PDFNet.initialize();"

    Here are all tested devices:

    Webviewer NOT works on:
    - iPad (9. Generation) => iPadOS-Version 16.6.1
    - iPhone 11 Pro Max => iOS-Version 16.6.1

    Webviewer works on:
    - iPhone 11 => iOS-Version 17.0.3
    - Windows => 10, 11
    - Linux => Ubuntu, Arch, Manjaro
    - Android => 11, 12, 13
     */
  }
}
