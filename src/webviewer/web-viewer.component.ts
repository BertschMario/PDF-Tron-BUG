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

    // Should be executed if everything works correctly
    console.log('PDFNET INITIALIZED');
    alert('PDFNet.initialize worked')
  }
}
