// Handlebars.registerHelper('list', function(items, options) {
//   var out = "<ul>";

//   for(var i=0, l=items.length; i<l; i++) {
//     out = out + "<li>" + options.fn(items[i]) + "</li>";
//   }

//   return out + "</ul>";
// });

Handlebars.registerHelper('hasTitle', (title) => {
	
	if(title) { return `<li><span class="property-name">Title:</span> ${title}</li>`; }

	return `<li>${createIssue('Missing Title')}</li>`;

});


Handlebars.registerHelper('hasAlt', (alt) => {
	
	if(alt) { return `<li><span class="property-name">Alt:</span> ${alt}</li>`; }

	return `<li>${createIssue('Missing Alt')}</li>`;

});


Handlebars.registerHelper('isContextual', (isContextual) => {
	
	if(!isContextual) { return `<li>${createIssue('Not Contextual')}</li>`; }
	
});


Handlebars.registerHelper('bbRef', (hasBlackboardReference) => {
	
	if(hasBlackboardReference) { return `<li>${createIssue('Blackboard Reference')}</li>`; }
	
});


Handlebars.registerHelper('pearsonRef', (hasPearsonReference) => {
	
	if(hasPearsonReference) { return `<li>${createIssue('Pearson Reference')}</li>`; }

});


Handlebars.registerHelper('textWarnings', (warnings) => {
	
	let html = '<span class="issue">';

	if(warnings.allCaps) { html += 'Review for All Caps<br>' }
	if(warnings.fontFamily) { html += 'Review for Font Family<br>' }
	if(warnings.fontFamily) { html += 'Review for Font Size<br>' }
	if(warnings.fontFamily) { html += 'Review for Underlined Words' }

	html += '</span>';

	return html;

});


function createIssue(text) {

	return `<span class="issue">${text}</span>`;

}

var source   = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var html = template(course);

document.body.innerHTML = html;
