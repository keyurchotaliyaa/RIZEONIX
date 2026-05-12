import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const formatNumber = (amount) => {
  return Number(amount || 0).toLocaleString('en-IN', {
    maximumFractionDigits: 0,
  });
};

/**
 * Generate professional quotation PDF
 * @param {object} formData - Customer form data
 * @param {object} calculation - Calculation result
 * @returns {jsPDF} - Generated PDF document
 */
export const generateQuotationPDF = (formData, calculation) => {
  const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageWidth = pdf.internal.pageSize.width;
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  const primaryColor = [255, 122, 0];
  const textColor = [30, 30, 30];
  const secondaryColor = [100, 100, 100];

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(24);
  pdf.setTextColor(...primaryColor);
  pdf.text('RIZEONIX Enterprise', pageWidth / 2, 60, { align: 'center' });

  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(...secondaryColor);
  pdf.text('Solar Cleaning System Services', pageWidth / 2, 80, { align: 'center' });

  pdf.setDrawColor(...primaryColor);
  pdf.setLineWidth(1.3);
  pdf.line(margin, 95, pageWidth - margin, 95);

  const headerY = 120;
  pdf.setFontSize(13);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...primaryColor);
  pdf.text('QUOTATION DETAILS', margin, headerY);

  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(...textColor);

  let yPosition = headerY + 22;
  const labelX = margin;
  const valueX = margin + 100;
  const lineHeight = 18;

  pdf.text('Customer Name:', labelX, yPosition);
  pdf.text(formData.customerName || '-', valueX, yPosition);

  yPosition += lineHeight;
  pdf.text('Phone:', labelX, yPosition);
  pdf.text(formData.mobileNumber || '-', valueX, yPosition);

  yPosition += lineHeight;
  pdf.text('Address:', labelX, yPosition);
  const addressLines = pdf.splitTextToSize(formData.address || '-', contentWidth - 100);
  pdf.text(addressLines, valueX, yPosition);
  yPosition += addressLines.length * lineHeight;

  yPosition += 6;
  pdf.text('Date:', labelX, yPosition);
  pdf.text(new Date().toLocaleDateString('en-IN'), valueX, yPosition);

  yPosition += 32;

  const costText = formatNumber(calculation.basePrice) +
    (calculation.automationCost > 0
      ? ` + ${formatNumber(calculation.automationCost)} (${calculation.automationSetCount} set)`
      : '');

  const autoTableResult = autoTable(pdf, {
    startY: yPosition,
    head: [[
      { content: 'Service Type', styles: { halign: 'center' } },
      { content: 'Number Of Panels', styles: { halign: 'center' } },
      { content: 'Cost Price', styles: { halign: 'center' } },
    ]],
    body: [[
      { content: calculation.serviceType, styles: { cellPadding: 10 } },
      { content: calculation.panelCount.toString(), styles: { halign: 'center', cellPadding: 10 } },
      { content: costText, styles: { cellPadding: 10, overflow: 'linebreak' } },
    ]],
    theme: 'grid',
    styles: {
      font: 'helvetica',
      fontSize: 10,
      textColor: textColor,
      lineColor: [240, 240, 240],
      lineWidth: 0.5,
      overflow: 'linebreak',
    },
    headStyles: {
      fillColor: primaryColor,
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      halign: 'center',
      fontSize: 11,
      cellPadding: 10,
    },
    bodyStyles: {
      fillColor: [255, 255, 255],
      minCellHeight: 24,
    },
    columnStyles: {
      0: { cellWidth: 220 },
      1: { cellWidth: 120, halign: 'center' },
      2: { cellWidth: contentWidth - 360 },
    },
    margin: { left: margin, right: margin },
    didParseCell: (data) => {
      if (data.section === 'body' && data.row.index % 2 === 0) {
        data.cell.styles.fillColor = [248, 248, 248];
      }
    },
  });

  const tableFinalY = autoTableResult?.finalY || pdf.lastAutoTable?.finalY || yPosition;
  yPosition = tableFinalY + 44;

  pdf.setDrawColor(...primaryColor);
  pdf.setLineWidth(0.8);
  pdf.line(margin, yPosition - 18, pageWidth - margin, yPosition - 18);

  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...primaryColor);
  pdf.text('Total Price', margin, yPosition);
  pdf.text(`${formatNumber(calculation.totalPrice)} /-`, pageWidth - margin, yPosition, { align: 'right' });

  yPosition += 20;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(...secondaryColor);
  const noteText = 'Note: This is an estimated quotation. Final price will be confirmed after consultation and site visit.';
  const noteLines = pdf.splitTextToSize(noteText, contentWidth);
  pdf.text(noteLines, margin, yPosition);

  yPosition += noteLines.length * 14 + 20;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...primaryColor);
  pdf.text('Contact Us', margin, yPosition);

  yPosition += 16;
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(...textColor);
  pdf.text('Email: rizeonixenterprise@gmail.com', margin, yPosition);
  yPosition += lineHeight;
  pdf.text('Phone: +91 78742 33854', margin, yPosition);

  return pdf;
};

/**
 * Download the generated PDF
 * @param {object} formData - Customer form data
 * @param {object} calculation - Calculation result
 */
export const downloadQuotationPDF = (formData, calculation) => {
  const pdf = generateQuotationPDF(formData, calculation);
  const customerName = (formData.customerName || 'quotation').replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  const filename = `quotation-${customerName}.pdf`;
  pdf.save(filename);
};