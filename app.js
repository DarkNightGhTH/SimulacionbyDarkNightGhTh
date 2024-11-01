
const generatePDF = () => {
    
    const { jsPDF } = window.jspdf; 
    const amount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const weeks = parseInt(document.getElementById('weeks').value);
    const weeklyPayment = parseFloat(document.getElementById('weekly-payment').value);

   
    if (isNaN(amount) || isNaN(interestRate) || isNaN(weeks) || isNaN(weeklyPayment)) {
        alert("Por favor, ingresa todos los valores correctamente.");
        return;
    }

    const pdf = new jsPDF();
    pdf.text("Resumen de Simulación de Préstamo", 20, 20);
    pdf.text(`Monto Prestado: $${amount.toFixed(2)} MXN`, 20, 30);
    pdf.text(`Tasa de Interés Anual: ${interestRate}%`, 20, 40);
    pdf.text(`Semanas de Pago: ${weeks}`, 20, 50);
    pdf.text(`Pago Semanal: $${weeklyPayment.toFixed(2)} MXN`, 20, 60);

    
    pdf.autoTable({
        head: [['Semana', 'Interés', 'Saldo']],
        body: generateLoanSchedule(amount, interestRate, weeks, weeklyPayment),
        startY: 70
    });

    
    pdf.save("simulacion_prestamo.pdf");
};

const generateLoanSchedule = (amount, interestRate, weeks, weeklyPayment) => {
    const schedule = [];
    let balance = amount;
    const weeklyInterestRate = interestRate / 100 / 52;

    for (let week = 1; week <= weeks; week++) {
        const interest = balance * weeklyInterestRate;
        balance += interest - weeklyPayment;

        if (balance < 0) {
            balance = 0;
        }

        schedule.push([
            week,
            `$${interest.toFixed(2)}`,
            `$${balance.toFixed(2)}`
        ]);

        if (balance <= 0) break;
    }

    return schedule;
};

