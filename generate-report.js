<script id="entry-template" type="text/x-handlebars-template">
<div class="entry">
  <h1>COM3150 Audit Report</h1>
  <hr>
  <div class="body">
    {{#each data}}
    <div class="module">
      <h2 class="module-title">{{name}}</h2>
      <div class="module-items">
      {{#each moduleItems}}
      {{#if published}}<h3 class="module-item-title">Published | {{type}} : {{title}}</h3>{{/if}}
      {{#unless published}}<h3 class="module-item-title">Unpublished | {{type}} : {{title}}</h3>{{/unless}}
      {{#with auditResults}}
        <div class="audit-results">
        {{#if videos}}<p class="notice">Review Video for Captions</p>{{/if}}
        {{#textWarnings text}}{{/textWarnings}}
        {{#if links}}
        <h4>LINKS:</h4>
        {{#each links}}
        {{#unlss title.includes('/preview')}}
        <ul>
          <li><span class="property-name">Href:</span> {{href}}</li>
          <li><span class="property-name">Anchor Text:</span> {{anchorText}}</li>
          {{#hasTitle this}}{{/hasTitle}}
          {{#isContextual contextualAnchorText}}{{/isContextual}}
          {{#bbRef bbReference}}{{/bbRef}}
          {{#pearsonRef pearsonReference}}{{/pearsonRef}}
          {{#isReachable isReachable}}{{/isReachable}}
          {{#unless @last}}<hr>{{/unless}}
        </ul>
        {{/unless}}
        {{/each}}
        {{/if}}
        {{#if images}}
        <h4>IMAGES:</h4>
        {{#each images}}
        <ul>
          {{#hasAlt alt}}{{/hasAlt}}
          <li><span class="property-name">Src:</span> {{src}}</li>
        </ul>
        {{#unless @last}}<hr>{{/unless}}
        {{/each}}
        {{/if}}
        </div>
      {{/with}}
      {{/each}}
      </div>
    </div>
    {{/each}}
</div>
</script>