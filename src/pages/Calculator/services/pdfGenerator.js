import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatCurrency } from '../utils/calculator.js';

/**
 * Generate professional quotation PDF
 * @param {object} formData - Customer form data
 * @param {object} calculation - Calculation result
 * @returns {jsPDF} - Generated PDF document
 */
export const generateQuotationPDF = (formData, calculation) => {
  const pdf = new jsPDF();

  // Set font
  pdf.setFont('helvetica');

  // Colors
  const primaryColor = [255, 122, 0]; // Orange
  const textColor = [10, 10, 10]; // Black

  // Header - Company Name
  pdf.setFontSize(24);
  pdf.setTextColor(...primaryColor);
  pdf.text('RIZEONIX Enterprise', pdf.internal.pageSize.width / 2, 30, { align: 'center' });

  // Subtitle
  pdf.setFontSize(12);
  pdf.setTextColor(...textColor);
  pdf.text('Solar Cleaning System Services', pdf.internal.pageSize.width / 2, 40, { align: 'center' });

  // Customer Details Section
  pdf.setFontSize(14);
  pdf.setTextColor(...primaryColor);
  pdf.text('QUOTATION', 20, 60);

  // Customer Info
  pdf.setFontSize(10);
  pdf.setTextColor(...textColor);

  let yPosition = 75;

  pdf.text('To:', 20, yPosition);
  pdf.text(formData.customerName, 40, yPosition);

  yPosition += 10;
  pdf.text('Address:', 20, yPosition);
  const addressLines = pdf.splitTextToSize(formData.address, 120);
  pdf.text(addressLines, 40, yPosition);

  yPosition += addressLines.length * 5 + 5;
  pdf.text('Phone:', 20, yPosition);
  pdf.text(formData.mobileNumber, 40, yPosition);

  yPosition += 10;
  pdf.text('Date:', 20, yPosition);
  pdf.text(new Date().toLocaleDateString('en-IN'), 40, yPosition);

  // Service Details Table
  yPosition += 20;

  const tableData = [
    [
      calculation.serviceType,
      calculation.panelCount.toString(),
      formatCurrency(calculation.basePrice) +
      (calculation.automationCost > 0 ? ` + ${formatCurrency(calculation.automationCost)} (${calculation.automationSetCount} Set${calculation.automationSetCount > 1 ? 's' : ''})` : '')
    ]
  ];

  const autoTableResult = autoTable(pdf, {
    startY: yPosition,
    head: [['Service Type', 'Number of Panels', 'Cost Price']],
    body: tableData,
    theme: 'grid',
    headStyles: {
      fillColor: primaryColor,
      textColor: [255, 255, 255],
      fontSize: 10,
      fontStyle: 'bold',
    },
    bodyStyles: {
      fontSize: 9,
      textColor: textColor,
    },
    columnStyles: {
      0: { cellWidth: 50 },
      1: { cellWidth: 40, halign: 'center' },
      2: { cellWidth: 70 },
    },
    margin: { left: 20, right: 20 },
  });

  // Get the final Y position after the table
  yPosition = (pdf.lastAutoTable?.finalY || autoTableResult?.finalY || yPosition) + 15;

  // GST and Total
  pdf.setFontSize(10);
  pdf.text(`GST: ${formatCurrency(calculation.gst)}`, 20, yPosition);

  yPosition += 10;
  pdf.setFontSize(12);
  pdf.setTextColor(...primaryColor);
  pdf.text(`Total Price: ${formatCurrency(calculation.totalPrice)}`, 20, yPosition);

  // Footer Note
  yPosition += 20;
  pdf.setFontSize(9);
  pdf.setTextColor(...textColor);
  pdf.text('Note:', 20, yPosition);
  yPosition += 8;
  const noteText = 'Given Price Is Estimate Price. Final Price Will Be Discussed In Meeting.';
  const noteLines = pdf.splitTextToSize(noteText, 170);
  pdf.text(noteLines, 20, yPosition);

  // Contact Information
  yPosition += noteLines.length * 5 + 10;
  pdf.setFontSize(10);
  pdf.setTextColor(...primaryColor);
  pdf.text('Contact Us:', 20, yPosition);
  yPosition += 8;
  pdf.setFontSize(9);
  pdf.setTextColor(...textColor);
  pdf.text('+91 78742 33854', 20, yPosition);

  return pdf;
};

/**
 * Download the generated PDF
 * @param {object} formData - Customer form data
 * @param {object} calculation - Calculation result
 */
export const downloadQuotationPDF = (formData, calculation) => {
  const pdf = generateQuotationPDF(formData, calculation);

  // Generate filename
  const customerName = formData.customerName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  const filename = `quotation-${customerName}.pdf`;

  // Download the PDF
  pdf.save(filename);
};