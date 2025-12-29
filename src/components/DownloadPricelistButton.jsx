import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PriceList from '@/components/PriceList';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const DownloadPriceListButton = () => {
  const priceListRef = useRef();
  const [isRendering, setIsRendering] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    setIsRendering(true);
    toast({
      title: 'Generating PDF...',
      description: 'Your price list is being created. Please wait.',
    });
    
    setTimeout(() => {
      const input = priceListRef.current;
      if (!input) {
          setIsRendering(false);
          toast({
              variant: "destructive",
              title: 'Error!',
              description: 'Could not find the price list content.',
          });
          return;
      }

      html2canvas(input, {
        scale: 2,
        useCORS: true,
        logging: false,
        width: input.scrollWidth,
        height: input.scrollHeight,
      })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'p',
          unit: 'mm',
          format: 'a4',
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const ratio = canvasWidth / canvasHeight;
        const imgWidth = pdfWidth;
        const imgHeight = imgWidth / ratio;

        let position = 0;
        let heightLeft = imgHeight;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = -pdfHeight + (imgHeight - heightLeft); // Simplified position calculation
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }

        pdf.save('EagleTouchTours-PriceList-2025.pdf');
        toast({
          title: 'Success!',
          description: 'The price list has been downloaded.',
        });
      })
      .catch(err => {
        console.error("Error generating PDF:", err);
        toast({
          variant: "destructive",
          title: 'Oh no! Something went wrong.',
          description: 'Could not generate the PDF. Please try again.',
        });
      })
      .finally(() => {
        setIsRendering(false);
      });
    }, 500);
  };

  return (
    <div>
      <div style={{ position: 'fixed', left: '-5000px', top: 0, zIndex: -1 }}>
        <div ref={priceListRef}>
          <PriceList />
        </div>
      </div>
      <Button 
        onClick={handleDownload} 
        disabled={isRendering}
        size="lg"
        className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
      >
        <Download className="mr-2 h-5 w-5" />
        {isRendering ? 'Generating...' : 'Download Full Price List'}
      </Button>
    </div>
  );
};

export default DownloadPriceListButton;