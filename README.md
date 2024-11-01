# Simulación de Préstamos Bancarios

Este proyecto es una aplicación web sencilla para simular préstamos bancarios, permitiendo a los usuarios calcular el cronograma de pagos semanal con un monto específico, tasa de interés anual y número de semanas definido. Al finalizar la simulación, se genera un archivo PDF con el detalle del préstamo, que incluye un resumen de la amortización y una página de despedida.

## Características ✨

- **Cálculo de pagos**: Simula los pagos semanales de un préstamo bancario, especificando el monto, la tasa de interés anual, el número de semanas y el pago semanal.
- **Generación de PDF**: Permite exportar los resultados en un archivo PDF, que incluye:
  - Un resumen del préstamo (monto, tasa de interés, semanas de pago, y pago semanal).
  - Una tabla detallada con cada semana, mostrando el interés y saldo restante.
  - Una página de despedida agradeciendo al usuario por utilizar la aplicación.
- **Interfaz interactiva y fácil de usar**: Utiliza un diseño limpio y centrado con efectos visuales de transición y escalado.

## Tecnologías Utilizadas ✨

- **HTML5**: Estructura básica de la aplicación.
- **CSS3**: Estilización del formulario con estilos modernos y responsivos.
- **JavaScript**: Lógica para los cálculos de la amortización y generación del PDF.
- **jsPDF & jsPDF-AutoTable**: Bibliotecas para generar el PDF y crear una tabla de amortización dentro del archivo.

## Cómo Usar la Aplicación ✨

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en un navegador web.
3. Ingresa los detalles del préstamo en el formulario:
   - **Monto Prestado (MXN)**: El monto inicial del préstamo en pesos mexicanos.
   - **Tasa de Interés Anual (%)**: La tasa de interés anual aplicada al préstamo.
   - **Semanas de Pago**: El número total de semanas en que se realizarán los pagos.
   - **Pago Semanal (MXN)**: La cantidad que se pagará semanalmente.
4. Haz clic en el botón **Generar PDF**.
5. El archivo PDF se descargará automáticamente con el nombre `simulacion_prestamo.pdf`.

## Estructura del Proyecto ✨
index.html # Archivo principal de la aplicación
styles.css # Archivo de estilos CSS 
app.js # Archivo JavaScript con la lógica de simulación y generación del PDF
README.md # Documentación del proyecto

## Instalación y Dependencias ✨

Este proyecto no requiere instalación de dependencias adicionales, ya que utiliza bibliotecas de CDN:

- - [jsPDF](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js)
- [jsPDF-AutoTable](https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.13/jspdf.plugin.autotable.min.js)

## Contribuciones ✨
Las contribuciones son bienvenidas. Si deseas mejorar el proyecto o añadir nuevas características, no dudes en hacer un fork y abrir un pull request.

## Licencia ✨
Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

are.com/ajax/libs/jspdf-autotable/3.5.13/jspdf.plugin.autotable.min.js)
  

## Personalización ✨

Puedes ajustar los colores, fuentes y otros estilos en el archivo `styles.css`. También puedes modificar el mensaje de despedida en el archivo `app.js`, en la función `generatePDF()`.
¡Gracias por utilizar la Simulación de Préstamos Bancarios! Si tienes alguna sugerencia o encuentras algún problema, no dudes en abrir un issue.

Este `README.md` cubre todos los aspectos principales del proyecto: desde la funcionalidad hasta la estructura, dependencias y ejemplos de código.
## Copyright ✨
Copyright © 2024 DARKNIGHTH LTD. Todos los derechos reservados.

Este software no puede ser copiado, distribuido, modificado ni usado sin el permiso explícito del autor. Para obtener permisos de uso, distribución o modificación, comunícate con darknightth@mail.ru.

---

The following software and documentation are proprietary and protected by applicable copyright and intellectual property laws. Unauthorized use, reproduction, or distribution of this code or its parts is strictly prohibited.
