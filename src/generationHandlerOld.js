// const mjml2html = require("mjml");

// const generationHandler = enrichedTemplates => {
//   let htmlEmails = [];
//   let errors = [];

//   for (let i = 0; i < enrichedTemplates.length; i++) {
//     try {
//       let htmlTemplate = mjml2html(enrichedTemplates[i].html);
//       enrichedTemplates[i].html = htmlTemplate.html;

//       htmlEmails.push(enrichedTemplates[i]);
//     } catch (err) {
//       errors.push({
//         enrichedTemplatesIndex: i,
//         enrichedTemplates: JSON.stringify(enrichedTemplates[i]),
//         error: err
//       });
//     }
//   }

//   let response = buildResponse(htmlEmails, errors);
//   return response;
// };

// function buildResponse(htmlEmails, errors) {
//   return {
//     isSuccess: errors.length > 0 ? false : true,
//     data: htmlEmails,
//     errors: errors
//   };
// }

// module.exports = generationHandler;