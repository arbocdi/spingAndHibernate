(function(a,b){if(typeof define==="function"&&define.amd&&typeof require==="function"&&typeof require.specified==="function"&&require.specified("knockout")){define(["jquery","knockout"],b)
}else{b(a.jQuery,a.ko)}})(this,function(c,a){if(typeof a!=="undefined"&&a.bindingHandlers&&!a.bindingHandlers.multiselect){a.bindingHandlers.multiselect={after:["options","value","selectedOptions","enable","disable"],init:function(i,m,l,o,j){var p=c(i);
var e=a.toJS(m());p.multiselect(e);if(l.has("options")){var q=l.get("options");if(a.isObservable(q)){a.computed({read:function(){q();
setTimeout(function(){var r=p.data("multiselect");if(r){r.updateOriginalOptions()}p.multiselect("rebuild")
},1)},disposeWhenNodeIsRemoved:i})}}if(l.has("value")){var n=l.get("value");if(a.isObservable(n)){a.computed({read:function(){n();
setTimeout(function(){p.multiselect("refresh")},1)},disposeWhenNodeIsRemoved:i}).extend({rateLimit:100,notifyWhenChangesStop:true})
}}if(l.has("selectedOptions")){var g=l.get("selectedOptions");if(a.isObservable(g)){a.computed({read:function(){g();
setTimeout(function(){p.multiselect("refresh")},1)},disposeWhenNodeIsRemoved:i}).extend({rateLimit:100,notifyWhenChangesStop:true})
}}var f=function(r){setTimeout(function(){if(r){p.multiselect("enable")}else{p.multiselect("disable")
}})};if(l.has("enable")){var k=l.get("enable");if(a.isObservable(k)){a.computed({read:function(){f(k())
},disposeWhenNodeIsRemoved:i}).extend({rateLimit:100,notifyWhenChangesStop:true})}else{f(k)}}if(l.has("disable")){var h=l.get("disable");
if(a.isObservable(h)){a.computed({read:function(){f(!h())},disposeWhenNodeIsRemoved:i}).extend({rateLimit:100,notifyWhenChangesStop:true})
}else{f(!h)}}a.utils.domNodeDisposal.addDisposeCallback(i,function(){p.multiselect("destroy")})},update:function(i,j,k,h,f){var e=c(i);
var g=a.toJS(j());e.multiselect("setOptions",g);e.multiselect("rebuild")}}}function d(g,f){for(var e=0;
e<g.length;++e){f(g[e],e)}}function b(e,f){this.$select=c(e);this.options=this.mergeOptions(c.extend({},f,this.$select.data()));
if(this.$select.attr("data-placeholder")){this.options.nonSelectedText=this.$select.data("placeholder")
}this.originalOptions=this.$select.clone()[0].options;this.query="";this.searchTimeout=null;this.lastToggledInput=null;
this.options.multiple=this.$select.attr("multiple")==="multiple";this.options.onChange=c.proxy(this.options.onChange,this);
this.options.onSelectAll=c.proxy(this.options.onSelectAll,this);this.options.onDeselectAll=c.proxy(this.options.onDeselectAll,this);
this.options.onDropdownShow=c.proxy(this.options.onDropdownShow,this);this.options.onDropdownHide=c.proxy(this.options.onDropdownHide,this);
this.options.onDropdownShown=c.proxy(this.options.onDropdownShown,this);this.options.onDropdownHidden=c.proxy(this.options.onDropdownHidden,this);
this.options.onInitialized=c.proxy(this.options.onInitialized,this);this.options.onFiltering=c.proxy(this.options.onFiltering,this);
this.buildContainer();this.buildButton();this.buildDropdown();this.buildSelectAll();this.buildDropdownOptions();
this.buildFilter();this.updateButtonText();this.updateSelectAll(true);if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()
}this.options.wasDisabled=this.$select.prop("disabled");if(this.options.disableIfEmpty&&c("option",this.$select).length<=0){this.disable()
}this.$select.wrap('<span class="multiselect-native-select" />').after(this.$container);this.options.onInitialized(this.$select,this.$container)
}b.prototype={defaults:{buttonText:function(g,e){if(this.disabledText.length>0&&(e.prop("disabled")||(g.length==0&&this.disableIfEmpty))){return this.disabledText
}else{if(g.length===0){return this.nonSelectedText}else{if(this.allSelectedText&&g.length===c("option",c(e)).length&&c("option",c(e)).length!==1&&this.multiple){if(this.selectAllNumber){return this.allSelectedText+" ("+g.length+")"
}else{return this.allSelectedText}}else{if(this.numberDisplayed!=0&&g.length>this.numberDisplayed){return g.length+" "+this.nSelectedText
}else{var h="";var f=this.delimiterText;g.each(function(){var i=(c(this).attr("label")!==undefined)?c(this).attr("label"):c(this).text();
h+=i+f});return h.substr(0,h.length-this.delimiterText.length)}}}}},buttonTitle:function(g,e){if(g.length===0){return this.nonSelectedText
}else{var h="";var f=this.delimiterText;g.each(function(){var i=(c(this).attr("label")!==undefined)?c(this).attr("label"):c(this).text();
h+=i+f});return h.substr(0,h.length-this.delimiterText.length)}},checkboxName:function(e){return false
},optionLabel:function(e){return c(e).attr("label")||c(e).text()},optionClass:function(e){return c(e).attr("class")||""
},onChange:function(e,f){},onDropdownShow:function(e){},onDropdownHide:function(e){},onDropdownShown:function(e){},onDropdownHidden:function(e){},onSelectAll:function(){},onDeselectAll:function(){},onInitialized:function(e,f){},onFiltering:function(e){},enableHTML:false,buttonClass:"btn btn-default",inheritClass:false,buttonWidth:"auto",buttonContainer:'<div class="btn-group" />',dropRight:false,dropUp:false,selectedClass:"active",maxHeight:false,includeSelectAllOption:false,includeSelectAllIfMoreThan:0,selectAllText:" Select all",selectAllValue:"multiselect-all",selectAllName:false,selectAllNumber:true,selectAllJustVisible:true,enableFiltering:false,enableCaseInsensitiveFiltering:false,enableFullValueFiltering:false,enableClickableOptGroups:false,enableCollapsibleOptGroups:false,filterPlaceholder:"Search",filterBehavior:"text",includeFilterClearBtn:true,preventInputChangeEvent:false,nonSelectedText:"None selected",nSelectedText:"selected",allSelectedText:"All selected",numberDisplayed:3,disableIfEmpty:false,disabledText:"",delimiterText:", ",templates:{button:'<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',ul:'<ul class="multiselect-container dropdown-menu"></ul>',filter:'<li class="multiselect-item multiselect-filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text" /></div></li>',filterClearBtn:'<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',li:'<li><a tabindex="0"><label></label></a></li>',divider:'<li class="multiselect-item divider"></li>',liGroup:'<li class="multiselect-item multiselect-group"><label></label></li>'}},constructor:b,buildContainer:function(){this.$container=c(this.options.buttonContainer);
this.$container.on("show.bs.dropdown",this.options.onDropdownShow);this.$container.on("hide.bs.dropdown",this.options.onDropdownHide);
this.$container.on("shown.bs.dropdown",this.options.onDropdownShown);this.$container.on("hidden.bs.dropdown",this.options.onDropdownHidden)
},buildButton:function(){this.$button=c(this.options.templates.button).addClass(this.options.buttonClass);
if(this.$select.attr("class")&&this.options.inheritClass){this.$button.addClass(this.$select.attr("class"))
}if(this.$select.prop("disabled")){this.disable()}else{this.enable()}if(this.options.buttonWidth&&this.options.buttonWidth!=="auto"){this.$button.css({width:"100%",overflow:"hidden","text-overflow":"ellipsis"});
this.$container.css({width:this.options.buttonWidth})}var e=this.$select.attr("tabindex");if(e){this.$button.attr("tabindex",e)
}this.$container.prepend(this.$button)},buildDropdown:function(){this.$ul=c(this.options.templates.ul);
if(this.options.dropRight){this.$ul.addClass("pull-right")}if(this.options.maxHeight){this.$ul.css({"max-height":this.options.maxHeight+"px","overflow-y":"auto","overflow-x":"hidden"})
}if(this.options.dropUp){var e=Math.min(this.options.maxHeight,c('option[data-role!="divider"]',this.$select).length*26+c('option[data-role="divider"]',this.$select).length*19+(this.options.includeSelectAllOption?26:0)+(this.options.enableFiltering||this.options.enableCaseInsensitiveFiltering?44:0));
var f=e+34;this.$ul.css({"max-height":e+"px","overflow-y":"auto","overflow-x":"hidden","margin-top":"-"+f+"px"})
}this.$container.append(this.$ul)},buildDropdownOptions:function(){this.$select.children().each(c.proxy(function(g,h){var f=c(h);
var e=f.prop("tagName").toLowerCase();if(f.prop("value")===this.options.selectAllValue){return}if(e==="optgroup"){this.createOptgroup(h)
}else{if(e==="option"){if(f.data("role")==="divider"){this.createDivider()}else{this.createOptionValue(h)
}}}},this));c(this.$ul).off("change",'li:not(.multiselect-group) input[type="checkbox"], li:not(.multiselect-group) input[type="radio"]');
c(this.$ul).on("change",'li:not(.multiselect-group) input[type="checkbox"], li:not(.multiselect-group) input[type="radio"]',c.proxy(function(i){var e=c(i.target);
var h=e.prop("checked")||false;var f=e.val()===this.options.selectAllValue;if(this.options.selectedClass){if(h){e.closest("li").addClass(this.options.selectedClass)
}else{e.closest("li").removeClass(this.options.selectedClass)}}var j=e.val();var k=this.getOptionByValue(j);
var l=c("option",this.$select).not(k);var g=c("input",this.$container).not(e);if(f){if(h){this.selectAll(this.options.selectAllJustVisible,true)
}else{this.deselectAll(this.options.selectAllJustVisible,true)}}else{if(h){k.prop("selected",true);if(this.options.multiple){k.prop("selected",true)
}else{if(this.options.selectedClass){c(g).closest("li").removeClass(this.options.selectedClass)}c(g).prop("checked",false);
l.prop("selected",false);this.$button.click()}if(this.options.selectedClass==="active"){l.closest("a").css("outline","")
}}else{k.prop("selected",false)}this.options.onChange(k,h);this.updateSelectAll();if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()
}}this.$select.change();this.updateButtonText();if(this.options.preventInputChangeEvent){return false
}},this));c("li a",this.$ul).on("mousedown",function(f){if(f.shiftKey){return false}});c(this.$ul).on("touchstart click","li a",c.proxy(function(f){f.stopPropagation();
var h=c(f.target);if(f.shiftKey&&this.options.multiple){if(h.is("label")){f.preventDefault();h=h.find("input");
h.prop("checked",!h.prop("checked"))}var q=h.prop("checked")||false;if(this.lastToggledInput!==null&&this.lastToggledInput!==h){var o=this.$ul.find("li:visible").index(h.parents("li"));
var p=this.$ul.find("li:visible").index(this.lastToggledInput.parents("li"));if(o>p){var l=p;p=o;o=l}++p;
var n=this.$ul.find("li").not(".multiselect-filter-hidden").slice(o,p).find("input");n.prop("checked",q);
if(this.options.selectedClass){n.closest("li").toggleClass(this.options.selectedClass,q)}for(var m=0,k=n.length;
m<k;m++){var g=c(n[m]);var e=this.getOptionByValue(g.val());e.prop("selected",q)}}h.trigger("change")
}if(h.is("input")&&!h.closest("li").is(".multiselect-item")){this.lastToggledInput=h}h.blur()},this));
this.$container.off("keydown.multiselect").on("keydown.multiselect",c.proxy(function(h){if(c('input[type="text"]',this.$container).is(":focus")){return
}if(h.keyCode===9&&this.$container.hasClass("open")){this.$button.click()}else{var i=c(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");
if(!i.length){return}var e=i.index(i.filter(":focus"));if(h.keyCode===38&&e>0){e--}else{if(h.keyCode===40&&e<i.length-1){e++
}else{if(!~e){e=0}}}var g=i.eq(e);g.focus();if(h.keyCode===32||h.keyCode===13){var f=g.find("input");
f.prop("checked",!f.prop("checked"));f.change()}h.stopPropagation();h.preventDefault()}},this));if(this.options.enableClickableOptGroups&&this.options.multiple){c("li.multiselect-group input",this.$ul).on("change",c.proxy(function(k){k.stopPropagation();
var f=c(k.target);var j=f.prop("checked")||false;var l=c(k.target).closest("li");var i=l.nextUntil("li.multiselect-group").not(".multiselect-filter-hidden").not(".disabled");
var h=i.find("input");var g=[];var e=[];if(this.options.selectedClass){if(j){l.addClass(this.options.selectedClass)
}else{l.removeClass(this.options.selectedClass)}}c.each(h,c.proxy(function(n,m){var o=c(m).val();var p=this.getOptionByValue(o);
if(j){c(m).prop("checked",true);c(m).closest("li").addClass(this.options.selectedClass);p.prop("selected",true)
}else{c(m).prop("checked",false);c(m).closest("li").removeClass(this.options.selectedClass);p.prop("selected",false)
}e.push(this.getOptionByValue(o))},this));this.options.onChange(e,j);this.$select.change();this.updateButtonText();
this.updateSelectAll()},this))}if(this.options.enableCollapsibleOptGroups&&this.options.multiple){c("li.multiselect-group .caret-container",this.$ul).on("click",c.proxy(function(f){var h=c(f.target).closest("li");
var e=h.nextUntil("li.multiselect-group").not(".multiselect-filter-hidden");var g=true;e.each(function(){g=g&&c(this).is(":visible")
});if(g){e.hide().addClass("multiselect-collapsible-hidden")}else{e.show().removeClass("multiselect-collapsible-hidden")
}},this));c("li.multiselect-all",this.$ul).css("background","#f3f3f3").css("border-bottom","1px solid #eaeaea");
c("li.multiselect-all > a > label.checkbox",this.$ul).css("padding","3px 20px 3px 35px");c("li.multiselect-group > a > input",this.$ul).css("margin","4px 0px 5px -20px")
}},createOptionValue:function(j){var o=c(j);if(o.is(":selected")){o.prop("selected",true)}var m=this.options.optionLabel(j);
var h=this.options.optionClass(j);var n=o.val();var g=this.options.multiple?"checkbox":"radio";var k=c(this.options.templates.li);
var l=c("label",k);l.addClass(g);k.addClass(h);if(this.options.enableHTML){l.html(" "+m)}else{l.text(" "+m)
}var f=c("<input/>").attr("type",g);var e=this.options.checkboxName(o);if(e){f.attr("name",e)}l.prepend(f);
var i=o.prop("selected")||false;f.val(n);if(n===this.options.selectAllValue){k.addClass("multiselect-item multiselect-all");
f.parent().parent().addClass("multiselect-all")}l.attr("title",o.attr("title"));this.$ul.append(k);if(o.is(":disabled")){f.attr("disabled","disabled").prop("disabled",true).closest("a").attr("tabindex","-1").closest("li").addClass("disabled")
}f.prop("checked",i);if(i&&this.options.selectedClass){f.closest("li").addClass(this.options.selectedClass)
}},createDivider:function(f){var e=c(this.options.templates.divider);this.$ul.append(e)},createOptgroup:function(h){var e=c(h).attr("label");
var g=c(h).attr("value");var i=c('<li class="multiselect-item multiselect-group"><a href="javascript:void(0);"><label><b></b></label></a></li>');
var f=this.options.optionClass(h);i.addClass(f);if(this.options.enableHTML){c("label b",i).html(" "+e)
}else{c("label b",i).text(" "+e)}if(this.options.enableCollapsibleOptGroups&&this.options.multiple){c("a",i).append('<span class="caret-container"><b class="caret"></b></span>')
}if(this.options.enableClickableOptGroups&&this.options.multiple){c("a label",i).prepend('<input type="checkbox" value="'+g+'"/>')
}if(c(h).is(":disabled")){i.addClass("disabled")}this.$ul.append(i);c("option",h).each(c.proxy(function(j,k){this.createOptionValue(k)
},this))},buildSelectAll:function(){if(typeof this.options.selectAllValue==="number"){this.options.selectAllValue=this.options.selectAllValue.toString()
}var e=this.hasSelectAll();if(!e&&this.options.includeSelectAllOption&&this.options.multiple&&c("option",this.$select).length>this.options.includeSelectAllIfMoreThan){if(this.options.includeSelectAllDivider){this.$ul.prepend(c(this.options.templates.divider))
}var g=c(this.options.templates.li);c("label",g).addClass("checkbox");if(this.options.enableHTML){c("label",g).html(" "+this.options.selectAllText)
}else{c("label",g).text(" "+this.options.selectAllText)}if(this.options.selectAllName){c("label",g).prepend('<input type="checkbox" name="'+this.options.selectAllName+'" />')
}else{c("label",g).prepend('<input type="checkbox" />')}var f=c("input",g);f.val(this.options.selectAllValue);
g.addClass("multiselect-item multiselect-all");f.parent().parent().addClass("multiselect-all");this.$ul.prepend(g);
f.prop("checked",false)}},buildFilter:function(){if(this.options.enableFiltering||this.options.enableCaseInsensitiveFiltering){var f=Math.max(this.options.enableFiltering,this.options.enableCaseInsensitiveFiltering);
if(this.$select.find("option").length>=f){this.$filter=c(this.options.templates.filter);c("input",this.$filter).attr("placeholder",this.options.filterPlaceholder);
if(this.options.includeFilterClearBtn){var e=c(this.options.templates.filterClearBtn);e.on("click",c.proxy(function(g){clearTimeout(this.searchTimeout);
this.query="";this.$filter.find(".multiselect-search").val("");c("li",this.$ul).show().removeClass("multiselect-filter-hidden");
this.updateSelectAll();if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()
}},this));this.$filter.find(".input-group").append(e)}this.$ul.prepend(this.$filter);this.$filter.val(this.query).on("click",function(g){g.stopPropagation()
}).on("input keydown",c.proxy(function(g){if(g.which===13){g.preventDefault()}clearTimeout(this.searchTimeout);
this.searchTimeout=this.asyncFunction(c.proxy(function(){if(this.query!==g.target.value){this.query=g.target.value;
var h,i;c.each(c("li",this.$ul),c.proxy(function(l,m){var o=c("input",m).length>0?c("input",m).val():"";
var p=c("label",m).text();var j="";if((this.options.filterBehavior==="text")){j=p}else{if((this.options.filterBehavior==="value")){j=o
}else{if(this.options.filterBehavior==="both"){j=p+"\n"+o}}}if(o!==this.options.selectAllValue&&p){var n=false;
if(this.options.enableCaseInsensitiveFiltering){j=j.toLowerCase();this.query=this.query.toLowerCase()
}if(this.options.enableFullValueFiltering&&this.options.filterBehavior!=="both"){var k=j.trim().substring(0,this.query.length);
if(this.query.indexOf(k)>-1){n=true}}else{if(j.indexOf(this.query)>-1){n=true}}if(!n){c(m).css("display","none");
c(m).addClass("multiselect-filter-hidden")}if(n){c(m).css("display","block");c(m).removeClass("multiselect-filter-hidden")
}if(c(m).hasClass("multiselect-group")){h=m;i=n}else{if(n){c(h).show().removeClass("multiselect-filter-hidden")
}if(!n&&i){c(m).show().removeClass("multiselect-filter-hidden")}}}},this))}this.updateSelectAll();if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()
}this.options.onFiltering(g.target)},this),300,this)},this))}}},destroy:function(){this.$container.remove();
this.$select.show();this.$select.prop("disabled",this.options.wasDisabled);this.$select.data("multiselect",null)
},refresh:function(){var e={};c("li input",this.$ul).each(function(){e[c(this).val()]=c(this)});c("option",this.$select).each(c.proxy(function(g,h){var f=c(h);
var i=e[c(h).val()];if(f.is(":selected")){i.prop("checked",true);if(this.options.selectedClass){i.closest("li").addClass(this.options.selectedClass)
}}else{i.prop("checked",false);if(this.options.selectedClass){i.closest("li").removeClass(this.options.selectedClass)
}}if(f.is(":disabled")){i.attr("disabled","disabled").prop("disabled",true).closest("li").addClass("disabled")
}else{i.prop("disabled",false).closest("li").removeClass("disabled")}},this));this.updateButtonText();
this.updateSelectAll();if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()
}},select:function(j,k){if(!c.isArray(j)){j=[j]}for(var e=0;e<j.length;e++){var g=j[e];if(g===null||g===undefined){continue
}var h=this.getOptionByValue(g);var f=this.getInputByValue(g);if(h===undefined||f===undefined){continue
}if(!this.options.multiple){this.deselectAll(false)}if(this.options.selectedClass){f.closest("li").addClass(this.options.selectedClass)
}f.prop("checked",true);h.prop("selected",true);if(k){this.options.onChange(h,true)}}this.updateButtonText();
this.updateSelectAll();if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()
}},clearSelection:function(){this.deselectAll(false);this.updateButtonText();this.updateSelectAll();if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()
}},deselect:function(e,k){if(!c.isArray(e)){e=[e]}for(var f=0;f<e.length;f++){var h=e[f];if(h===null||h===undefined){continue
}var j=this.getOptionByValue(h);var g=this.getInputByValue(h);if(j===undefined||g===undefined){continue
}if(this.options.selectedClass){g.closest("li").removeClass(this.options.selectedClass)}g.prop("checked",false);
j.prop("selected",false);if(k){this.options.onChange(j,false)}}this.updateButtonText();this.updateSelectAll();
if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()}},selectAll:function(e,f){var e=typeof e==="undefined"?true:e;
var h=c("li:not(.divider):not(.disabled):not(.multiselect-group)",this.$ul);var g=c("li:not(.divider):not(.disabled):not(.multiselect-group):not(.multiselect-filter-hidden):not(.multiselect-collapisble-hidden)",this.$ul).filter(":visible");
if(e){c("input:enabled",g).prop("checked",true);g.addClass(this.options.selectedClass);c("input:enabled",g).each(c.proxy(function(i,j){var l=c(j).val();
var k=this.getOptionByValue(l);c(k).prop("selected",true)},this))}else{c("input:enabled",h).prop("checked",true);
h.addClass(this.options.selectedClass);c("input:enabled",h).each(c.proxy(function(i,j){var l=c(j).val();
var k=this.getOptionByValue(l);c(k).prop("selected",true)},this))}c('li input[value="'+this.options.selectAllValue+'"]',this.$ul).prop("checked",true);
if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()}if(f){this.options.onSelectAll()
}},deselectAll:function(e,f){var e=typeof e==="undefined"?true:e;var h=c("li:not(.divider):not(.disabled):not(.multiselect-group)",this.$ul);
var g=c("li:not(.divider):not(.disabled):not(.multiselect-group):not(.multiselect-filter-hidden):not(.multiselect-collapisble-hidden)",this.$ul).filter(":visible");
if(e){c('input[type="checkbox"]:enabled',g).prop("checked",false);g.removeClass(this.options.selectedClass);
c('input[type="checkbox"]:enabled',g).each(c.proxy(function(i,j){var l=c(j).val();var k=this.getOptionByValue(l);
c(k).prop("selected",false)},this))}else{c('input[type="checkbox"]:enabled',h).prop("checked",false);
h.removeClass(this.options.selectedClass);c('input[type="checkbox"]:enabled',h).each(c.proxy(function(i,j){var l=c(j).val();
var k=this.getOptionByValue(l);c(k).prop("selected",false)},this))}c('li input[value="'+this.options.selectAllValue+'"]',this.$ul).prop("checked",false);
if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()}if(f){this.options.onDeselectAll()
}},rebuild:function(){this.$ul.html("");this.options.multiple=this.$select.attr("multiple")==="multiple";
this.buildSelectAll();this.buildDropdownOptions();this.buildFilter();this.updateButtonText();this.updateSelectAll(true);
if(this.options.enableClickableOptGroups&&this.options.multiple){this.updateOptGroups()}if(this.options.disableIfEmpty&&c("option",this.$select).length<=0){this.disable()
}else{this.enable()}if(this.options.dropRight){this.$ul.addClass("pull-right")}},dataprovider:function(g){var e=0;
var f=this.$select.empty();c.each(g,function(j,l){var i;if(c.isArray(l.children)){e++;i=c("<optgroup/>").attr({label:l.label||"Group "+e,disabled:!!l.disabled});
d(l.children,function(n){var m={value:n.value,label:n.label||n.value,title:n.title,selected:!!n.selected,disabled:!!n.disabled};
for(var o in n.attributes){m["data-"+o]=n.attributes[o]}i.append(c("<option/>").attr(m))})}else{var h={value:l.value,label:l.label||l.value,title:l.title,"class":l["class"],selected:!!l.selected,disabled:!!l.disabled};
for(var k in l.attributes){h["data-"+k]=l.attributes[k]}i=c("<option/>").attr(h);i.text(l.label||l.value)
}f.append(i)});this.rebuild()},enable:function(){this.$select.prop("disabled",false);this.$button.prop("disabled",false).removeClass("disabled")
},disable:function(){this.$select.prop("disabled",true);this.$button.prop("disabled",true).addClass("disabled")
},setOptions:function(e){this.options=this.mergeOptions(e)},mergeOptions:function(e){return c.extend(true,{},this.defaults,this.options,e)
},hasSelectAll:function(){return c("li.multiselect-all",this.$ul).length>0},updateOptGroups:function(){var e=c("li.multiselect-group",this.$ul);
var f=this.options.selectedClass;e.each(function(){var g=c(this).nextUntil("li.multiselect-group").not(".multiselect-filter-hidden").not(".disabled");
var h=true;g.each(function(){var i=c("input",this);if(!i.prop("checked")){h=false}});if(f){if(h){c(this).addClass(f)
}else{c(this).removeClass(f)}}c("input",this).prop("checked",h)})},updateSelectAll:function(g){if(this.hasSelectAll()){var j=c("li:not(.multiselect-item):not(.multiselect-filter-hidden):not(.multiselect-group):not(.disabled) input:enabled",this.$ul);
var i=j.length;var f=j.filter(":checked").length;var e=c("li.multiselect-all",this.$ul);var h=e.find("input");
if(f>0&&f===i){h.prop("checked",true);e.addClass(this.options.selectedClass)}else{h.prop("checked",false);
e.removeClass(this.options.selectedClass)}}},updateButtonText:function(){var e=this.getSelected();if(this.options.enableHTML){c(".multiselect .multiselect-selected-text",this.$container).html(this.options.buttonText(e,this.$select))
}else{c(".multiselect .multiselect-selected-text",this.$container).text(this.options.buttonText(e,this.$select))
}c(".multiselect",this.$container).attr("title",this.options.buttonTitle(e,this.$select))},getSelected:function(){return c("option",this.$select).filter(":selected")
},getOptionByValue:function(h){var e=c("option",this.$select);var j=h.toString();for(var f=0;f<e.length;
f=f+1){var g=e[f];if(g.value===j){return c(g)}}},getInputByValue:function(h){var g=c("li input:not(.multiselect-search)",this.$ul);
var j=h.toString();for(var e=0;e<g.length;e=e+1){var f=g[e];if(f.value===j){return c(f)}}},updateOriginalOptions:function(){this.originalOptions=this.$select.clone()[0].options
},asyncFunction:function(h,g,e){var f=Array.prototype.slice.call(arguments,3);return setTimeout(function(){h.apply(e||window,f)
},g)},setAllSelectedText:function(e){this.options.allSelectedText=e;this.updateButtonText()}};c.fn.multiselect=function(f,g,e){return this.each(function(){var i=c(this).data("multiselect");
var h=typeof f==="object"&&f;if(!i){i=new b(this,h);c(this).data("multiselect",i)}if(typeof f==="string"){i[f](g,e);
if(f==="destroy"){c(this).data("multiselect",false)}}})};c.fn.multiselect.Constructor=b;c(function(){c("select[data-role=multiselect]").multiselect()
})});
!function(){(function(){function a(z){function k(){try{q.doScroll("left")}catch(l){h.setTimeout(k,50);
return}C("poll")}function C(l){if("readystatechange"!=l.type||"complete"==p.readyState){("load"==l.type?h:p)[t](w+l.type,C,!1),!y&&(y=!0)&&z.call(h,l.type||l)
}}var u=p.addEventListener,y=!1,F=!0,D=u?"addEventListener":"attachEvent",t=u?"removeEventListener":"detachEvent",w=u?"":"on";
if("complete"==p.readyState){z.call(h,"lazy")}else{if(p.createEventObject&&q.doScroll){try{F=!h.frameElement
}catch(A){}F&&k()}p[D](w+"DOMContentLoaded",C,!1);p[D](w+"readystatechange",C,!1);h[D](w+"load",C,!1)
}}function g(){d&&a(function(){var k=o.length;f(k?function(){for(var l=0;l<k;++l){(function(t){h.setTimeout(function(){h.exports[o[t]].apply(h,arguments)
},0)})(l)}}:void 0)})}for(var h=window,p=document,q=p.documentElement,n=p.head||p.getElementsByTagName("head")[0]||q,c="",s=p.getElementsByTagName("script"),e=s.length;
0<=--e;){var m=s[e],b=m.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(b){c=b[1]||"";m.parentNode.removeChild(m);
break}}var d=!0,r=[],j=[],o=[];c.replace(/[?&]([^&=]+)=([^&]+)/g,function(t,l,k){k=decodeURIComponent(k);
l=decodeURIComponent(l);"autorun"==l?d=!/^[0fn]/i.test(k):"lang"==l?r.push(k):"skin"==l?j.push(k):"callback"==l&&o.push(k)
});e=0;for(c=r.length;e<c;++e){(function(){var k=p.createElement("script");k.onload=k.onerror=k.onreadystatechange=function(){!k||k.readyState&&!/loaded|complete/.test(k.readyState)||(k.onerror=k.onload=k.onreadystatechange=null,--i,i||h.setTimeout(g,0),k.parentNode&&k.parentNode.removeChild(k),k=null)
};k.type="text/javascript";k.src="https://cdn.rawgit.com/google/code-prettify/master/loader/lang-"+encodeURIComponent(r[e])+".js";
n.insertBefore(k,n.firstChild)})(r[e])}for(var i=r.length,s=[],e=0,c=j.length;e<c;++e){s.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/"+encodeURIComponent(j[e])+".css")
}s.push("https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.css");(function(t){function l(u){if(u!==k){var v=p.createElement("link");
v.rel="stylesheet";v.type="text/css";u+1<k&&(v.error=v.onerror=function(){l(u+1)});v.href=t[u];n.appendChild(v)
}}var k=t.length;l(0)})(s);var f=function(){"undefined"!==typeof window&&(window.PR_SHOULD_USE_CONTINUATION=!0);
var k;(function(){function ae(L){function H(Q){var P=Q.charCodeAt(0);if(92!==P){return P}var R=Q.charAt(1);
return(P=B[R])?P:"0"<=R&&"7">=R?parseInt(Q.substring(1),8):"u"===R||"x"===R?parseInt(Q.substring(2),16):Q.charCodeAt(1)
}function F(P){if(32>P){return(16>P?"\\x0":"\\x")+P.toString(16)}P=String.fromCharCode(P);return"\\"===P||"-"===P||"]"===P||"^"===P?"\\"+P:P
}function J(U){var V=U.substring(1,U.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g"));
U=[];var R="^"===V[0],Q=["["];R&&Q.push("^");for(var R=R?1:0,S=V.length;R<S;++R){var P=V[R];if(/\\[bdsw]/i.test(P)){Q.push(P)
}else{var P=H(P),T;R+2<S&&"-"===V[R+1]?(T=H(V[R+2]),R+=2):T=P;U.push([P,T]);65>T||122<P||(65>T||90<P||U.push([Math.max(65,P)|32,Math.min(T,90)|32]),97>T||122<P||U.push([Math.max(97,P)&-33,Math.min(T,122)&-33]))
}}U.sort(function(ak,aj){return ak[0]-aj[0]||aj[1]-ak[1]});V=[];S=[];for(R=0;R<U.length;++R){P=U[R],P[0]<=S[1]+1?S[1]=Math.max(S[1],P[1]):V.push(S=P)
}for(R=0;R<V.length;++R){P=V[R],Q.push(F(P[0])),P[1]>P[0]&&(P[1]+1>P[0]&&Q.push("-"),Q.push(F(P[1])))
}Q.push("]");return Q.join("")}function E(U){for(var R=U.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),Q=R.length,V=[],S=0,P=0;
S<Q;++S){var T=R[S];"("===T?++P:"\\"===T.charAt(0)&&(T=+T.substring(1))&&(T<=P?V[T]=-1:R[S]=F(T))}for(S=1;
S<V.length;++S){-1===V[S]&&(V[S]=++l)}for(P=S=0;S<Q;++S){T=R[S],"("===T?(++P,V[P]||(R[S]="(?:")):"\\"===T.charAt(0)&&(T=+T.substring(1))&&T<=P&&(R[S]="\\"+V[T])
}for(S=0;S<Q;++S){"^"===R[S]&&"^"!==R[S+1]&&(R[S]="")}if(U.ignoreCase&&z){for(S=0;S<Q;++S){T=R[S],U=T.charAt(0),2<=T.length&&"["===U?R[S]=J(T):"\\"!==U&&(R[S]=T.replace(/[a-zA-Z]/g,function(aj){aj=aj.charCodeAt(0);
return"["+String.fromCharCode(aj&-33,aj|32)+"]"}))}}return R.join("")}for(var l=0,z=!1,v=!1,M=0,K=L.length;
M<K;++M){var O=L[M];if(O.ignoreCase){v=!0}else{if(/[a-z]/i.test(O.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){z=!0;
v=!1;break}}}for(var B={b:8,t:9,n:10,v:11,f:12,r:13},N=[],M=0,K=L.length;M<K;++M){O=L[M];if(O.global||O.multiline){throw Error(""+O)
}N.push("(?:"+E(O)+")")}return new RegExp(N.join("|"),v?"gi":"g")}function ah(v,H){function F(L){var K=L.nodeType;
if(1==K){if(!J.test(L.className)){for(K=L.firstChild;K;K=K.nextSibling){F(K)}K=L.nodeName.toLowerCase();
if("br"===K||"li"===K){B[E]="\n",l[E<<1]=z++,l[E++<<1|1]=L}}}else{if(3==K||4==K){K=L.nodeValue,K.length&&(K=H?K.replace(/\r\n?/g,"\n"):K.replace(/[ \t\r\n]+/g," "),B[E]=K,l[E<<1]=z,z+=K.length,l[E++<<1|1]=L)
}}}var J=/(?:^|\s)nocode(?:\s|$)/,B=[],z=0,l=[],E=0;F(v);return{a:B.join("").replace(/\n$/,""),c:l}}function ai(l,B,z,E,v){z&&(l={h:l,l:1,j:null,m:null,a:z,c:null,i:B,g:null},E(l),v.push.apply(v,l.g))
}function Y(l){for(var z=void 0,v=l.firstChild;v;v=v.nextSibling){var B=v.nodeType,z=1===B?z?l:v:3===B?x.test(v.nodeValue)?l:z:z
}return z===l?void 0:z}function ad(l,B){function z(T){for(var L=T.i,J=T.h,S=[L,"pln"],ak=0,N=T.a.match(v)||[],aj={},R=0,P=N.length;
R<P;++R){var H=N[R],U=aj[H],Q=void 0,O;if("string"===typeof U){O=!1}else{var M=F[H.charAt(0)];if(M){Q=H.match(M[1]),U=M[0]
}else{for(O=0;O<E;++O){if(M=B[O],Q=H.match(M[1])){U=M[0];break}}Q||(U="pln")}!(O=5<=U.length&&"lang-"===U.substring(0,5))||Q&&"string"===typeof Q[1]||(O=!1,U="src");
O||(aj[H]=U)}M=ak;ak+=H.length;if(O){O=Q[1];var K=H.indexOf(O),V=K+O.length;Q[2]&&(V=H.length-Q[2].length,K=V-O.length);
U=U.substring(5);ai(J,L+M,H.substring(0,K),z,S);ai(J,L+M+K,O,ac(U,O),S);ai(J,L+M+V,H.substring(V),z,S)
}else{S.push(L+M,U)}}T.g=S}var F={},v;(function(){for(var N=l.concat(B),M=[],J={},H=0,L=N.length;H<L;
++H){var P=N[H],K=P[3];if(K){for(var O=K.length;0<=--O;){F[K.charAt(O)]=P}}P=P[1];K=""+P;J.hasOwnProperty(K)||(M.push(P),J[K]=null)
}M.push(/[\0-\uffff]/);v=ae(M)})();var E=B.length;return z}function ab(l){var B=[],z=[];l.tripleQuotedStrings?B.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):l.multiLineStrings?B.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):B.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);
l.verbatimStrings&&z.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var E=l.hashComments;E&&(l.cStyleComments?(1<E?B.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):B.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),z.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):B.push(["com",/^#[^\r\n]*/,null,"#"]));
l.cStyleComments&&(z.push(["com",/^\/\/[^\r\n]*/,null]),z.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));
if(E=l.regexLiterals){var v=(E=1<E?"":"\n\r")?".":"[\\S\\s]";z.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+E+"])(?:[^/\\x5B\\x5C"+E+"]|\\x5C"+v+"|\\x5B(?:[^\\x5C\\x5D"+E+"]|\\x5C"+v+")*(?:\\x5D|$))+/")+")")])
}(E=l.types)&&z.push(["typ",E]);E=(""+l.keywords).replace(/^ | $/g,"");E.length&&z.push(["kwd",new RegExp("^(?:"+E.replace(/[\s,]+/g,"|")+")\\b"),null]);
B.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);E="^.[^\\s\\w.$@'\"`/\\\\]*";l.regexLiterals&&(E+="(?!s*/)");
z.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(E),null]);
return ad(B,z)}function af(N,K,J){function L(Q){var l=Q.nodeType;if(1==l&&!v.test(Q.className)){if("br"===Q.nodeName.toLowerCase()){H(Q),Q.parentNode&&Q.parentNode.removeChild(Q)
}else{for(Q=Q.firstChild;Q;Q=Q.nextSibling){L(Q)}}}else{if((3==l||4==l)&&J){var R=Q.nodeValue,S=R.match(B);
S&&(l=R.substring(0,S.index),Q.nodeValue=l,(R=R.substring(S.index+S[0].length))&&Q.parentNode.insertBefore(z.createTextNode(R),Q.nextSibling),H(Q),l||Q.parentNode.removeChild(Q))
}}}function H(l){function R(T,S){var aj=S?T.cloneNode(!1):T,V=T.parentNode;if(V){var V=R(V,1),ak=T.nextSibling;
V.appendChild(aj);for(var U=ak;U;U=ak){ak=U.nextSibling,V.appendChild(U)}}return aj}for(;!l.nextSibling;
){if(l=l.parentNode,!l){return}}l=R(l.nextSibling,0);for(var Q;(Q=l.parentNode)&&1===Q.nodeType;){l=Q
}M.push(l)}for(var v=/(?:^|\s)nocode(?:\s|$)/,B=/\r\n?|\n/,z=N.ownerDocument,F=z.createElement("li");
N.firstChild;){F.appendChild(N.firstChild)}for(var M=[F],P=0;P<M.length;++P){L(M[P])}K===(K|0)&&M[0].setAttribute("value",K);
var E=z.createElement("ol");E.className="linenums";K=Math.max(0,K-1|0)||0;for(var P=0,O=M.length;P<O;
++P){F=M[P],F.className="L"+(P+K)%10,F.firstChild||F.appendChild(z.createTextNode("\u00a0")),E.appendChild(F)
}N.appendChild(E)}function ag(l,z){for(var v=z.length;0<=--v;){var B=z[v];t.hasOwnProperty(B)?A.console&&console.warn("cannot override language handler %s",B):t[B]=l
}}function ac(l,v){l&&t.hasOwnProperty(l)||(l=/^\s*</.test(v)?"default-markup":"default-code");return t[l]
}function aa(ar){var ao=ar.j;try{var am=ah(ar.h,ar.l),ap=am.a;ar.a=ap;ar.c=am.c;ar.i=0;ac(ao,ap)(ar);
var al=/\bMSIE\s(\d+)/.exec(navigator.userAgent),al=al&&8>=+al[1],ao=/\n/g,Q=ar.a,aj=Q.length,am=0,S=ar.c,U=S.length,ap=0,aq=ar.g,O=aq.length,M=0;
aq[O]=aj;var N,an;for(an=N=0;an<O;){aq[an]!==aq[an+2]?(aq[N++]=aq[an++],aq[N++]=aq[an++]):an+=2}O=N;for(an=N=0;
an<O;){for(var J=aq[an],F=aq[an+1],K=an+2;K+2<=O&&aq[K+1]===F;){K+=2}aq[N++]=J;aq[N++]=F;an=K}aq.length=N;
var ak=ar.h;ar="";ak&&(ar=ak.style.display,ak.style.display="none");try{for(;ap<U;){var V=S[ap+2]||aj,T=aq[M+2]||aj,K=Math.min(V,T),P=S[ap+1],L;
if(1!==P.nodeType&&(L=Q.substring(am,K))){al&&(L=L.replace(ao,"\r"));P.nodeValue=L;var l=P.ownerDocument,E=l.createElement("span");
E.className=aq[M+1];var R=P.parentNode;R.replaceChild(E,P);E.appendChild(P);am<V&&(S[ap+1]=P=l.createTextNode(Q.substring(K,V)),R.insertBefore(P,E.nextSibling))
}am=K;am>=V&&(ap+=2);am>=T&&(M+=2)}}finally{ak&&(ak.style.display=ar)}}catch(H){A.console&&console.log(H&&H.stack||H)
}}var A="undefined"!==typeof window?window:{},Z=["break,continue,do,else,for,if,return,while"],X=[[Z,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],y=[X,"alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],W=[X,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],I=[X,"abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],X=[X,"abstract,async,await,constructor,debugger,enum,eval,export,function,get,implements,instanceof,interface,let,null,set,undefined,var,with,yield,Infinity,NaN"],G=[Z,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],D=[Z,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],Z=[Z,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],C=/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,x=/\S/,w=ab({keywords:[y,I,W,X,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",G,D,Z],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),t={};
ag(w,["default-code"]);ag(ad([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));
ag(ad([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);
ag(ad([],[["atv",/^[\s\S]+/]]),["uq.val"]);ag(ab({keywords:y,hashComments:!0,cStyleComments:!0,types:C}),"c cc cpp cxx cyc m".split(" "));
ag(ab({keywords:"null,true,false"}),["json"]);ag(ab({keywords:I,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:C}),["cs"]);
ag(ab({keywords:W,cStyleComments:!0}),["java"]);ag(ab({keywords:Z,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);
ag(ab({keywords:G,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);
ag(ab({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);
ag(ab({keywords:D,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);ag(ab({keywords:X,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]);
ag(ab({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);
ag(ad([],[["str",/^[\s\S]+/]]),["regex"]);var u=A.PR={createSimpleLexer:ad,registerLangHandler:ag,sourceDecorator:ab,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(l,z,v){v=v||!1;
z=z||null;var B=document.createElement("div");B.innerHTML="<pre>"+l+"</pre>";B=B.firstChild;v&&af(B,v,!0);
aa({j:z,m:v,h:B,l:1,a:null,i:null,c:null,g:null});return B.innerHTML},prettyPrint:k=function(V,S){function Q(){for(var ap=A.PR_SHOULD_USE_CONTINUATION?U.now()+250:Infinity;
H<K.length&&U.now()<ap;H++){for(var am=K[H],ak=O,ao=am;ao=ao.previousSibling;){var al=ao.nodeType,aj=(7===al||8===al)&&ao.nodeValue;
if(aj?!/^\??prettify\b/.test(aj):3!==al||/\S/.test(ao.nodeValue)){break}if(aj){ak={};aj.replace(/\b(\w+)=([\w:.%+-]+)/g,function(aq,l,ar){ak[l]=ar
});break}}ao=am.className;if((ak!==O||F.test(ao))&&!R.test(ao)){al=!1;for(aj=am.parentNode;aj;aj=aj.parentNode){if(B.test(aj.tagName)&&aj.className&&F.test(aj.className)){al=!0;
break}}if(!al){am.className+=" prettyprinted";al=ak.lang;if(!al){var al=ao.match(E),v;!al&&(v=Y(am))&&J.test(v.tagName)&&(al=v.className.match(E));
al&&(al=al[1])}if(z.test(am.tagName)){aj=1}else{var aj=am.currentStyle,an=P.defaultView,aj=(aj=aj?aj.whiteSpace:an&&an.getComputedStyle?an.getComputedStyle(am,null).getPropertyValue("white-space"):0)&&"pre"===aj.substring(0,3)
}an=ak.linenums;(an="true"===an||+an)||(an=(an=ao.match(/\blinenums\b(?::(\d+))?/))?an[1]&&an[1].length?+an[1]:!0:!1);
an&&af(am,an,aj);aa({j:al,h:am,m:an,l:aj,a:null,i:null,c:null,g:null})}}}H<K.length?A.setTimeout(Q,250):"function"===typeof V&&V()
}for(var T=S||document.body,P=T.ownerDocument||document,T=[T.getElementsByTagName("pre"),T.getElementsByTagName("code"),T.getElementsByTagName("xmp")],K=[],N=0;
N<T.length;++N){for(var L=0,M=T[N].length;L<M;++L){K.push(T[N][L])}}var T=null,U=Date;U.now||(U={now:function(){return +new Date
}});var H=0,E=/\blang(?:uage)?-([\w.]+)(?!\S)/,F=/\bprettyprint\b/,R=/\bprettyprinted\b/,z=/pre|xmp/i,J=/^code$/i,B=/^(?:pre|code|xmp)$/i,O={};
Q()}},y=A.define;"function"===typeof y&&y.amd&&y("google-code-prettify",[],function(){return u})})();
return k}();i||h.setTimeout(g,0)})()}();
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],["str",/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,null,"\"'"]],[["com",/^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],["kwd",/^(?:ADD|ALL|ALTER|AND|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONNECT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOLLOWING|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|MATCH|MATCHED|MERGE|NATURAL|NATIONAL|NOCHECK|NONCLUSTERED|NOCYCLE|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PARTITION|PERCENT|PIVOT|PLAN|PRECEDING|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|ROWS?|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|START|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNBOUNDED|UNION|UNIQUE|UNPIVOT|UPDATE|UPDATETEXT|USE|USER|USING|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WITHIN|WRITETEXT|XML)(?=[^\w-]|$)/i,null],["lit",/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],["pln",/^[a-z_][\w-]*/i],["pun",/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]]),["sql"]);
$("a.nofollow").each(function(){var b=$(this);var a=b.attr("href");if(a){b.attr("href",a.replace("#","?"))
}});$("form.filter select[multiple]").multiselect({includeSelectAllOption:true,allSelectedText:"- Any -",nonSelectedText:"- Any -",maxHeight:300});
$("pre[language=java]").addClass("prettyprint java-lang");$(document).ready(function(){updateMenuActiveItem();
var h=$("#versions-block");if(h){h.find("a").click(function(o){$versions=h.find("#versions");if($versions.children().length==0){var q=$("body.objectdb").attr("data-id");
var k=$("body.objectdb").attr("data-ver");var l="/versions/"+q+"/"+k;var n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");
var p=true;for(var m=0;m<n.length;m++){var j=n[m].split("=");if(j[0]=="ver"){if(p){l+="?";p=false}else{l+="&"
}l+=n[m]}}$versions.load(l)}else{$versions.empty()}o.preventDefault()})}$(".page-database-faq .open-menu a").click(function(i){if(i.ctrlKey||i.shiftKey){return true
}$(this).closest(".node").find(".content").toggle();return false});$(".section-api .member .name a").click(function(i){if(i.ctrlKey||i.shiftKey){return true
}$member=$(this).closest(".member");$member.find(".details").toggle();$member.find(".teaser").toggle();
return false});var g=$(window).width();if(g>=768){$(".filter-link").hide();$("#filter-collapse").addClass("in")
}var f=window.location.toString();var d=$("#search-text");if(f.search(/.*object\/database\//g)>=0){var c=f.replace(/.*object\/database\//g,"").replace(/\//g," ").replace(/\?.*/,"").replace("+"," ");
d.val(decodeURI(c))}else{d.val("search...");d.one("focus",0,function(){$("#search-box :text").val("")
})}var b=$("#master-checkbox");var e=$('input[name="selected-item"]');b.click(function(){e.prop("checked",b.prop("checked"));
a()});e.click(a);function a(){var i=e.filter(":checked").length;$("#deleteButton").prop("disabled",i==0)
}if(odb.user){$(".user-"+odb.user.id).show()}$(document).ajaxStart(function(){$("#odb-message").remove()
});$(document).ajaxError(function(i,l,k,j){showErrorMessage(l.statusText)});if(odb.refreshPath){odbRef();
$("body").mouseover(initRefCount)}});var refCount;function initRefCount(){refCount=24+Math.random()*12
}function odbRef(){if(refCount--<=0){location.replace(odb.refreshPath)}else{setTimeout("odbRef();",30000)
}}function showErrorMessage(a){$("#content-area").before("<div id='odb-message' />");var b=$("#odb-message");
b.html("<a href='#' class='close' data-dismiss='alert'aria-label='close'>&times;</a>");b.append(a);b.addClass("alert alert-danger");
b.get(0).scrollIntoView()}function updateMenuActiveItem(){var b=$("body.objectdb").attr("data-id");if(b){var a=$("#menu li ."+b);
a.addClass("active");$activeTrail=a.parents("#menu li").add(a);$activeTrail.addClass("active-trail");
$activeTrail.find(" > :checkbox").prop("checked",true)}}function getParamValues(b){var a=[];var d=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");
for(var c=0;c<d.length;c++){var e=d[c].split("=");if(e[0]==b){vars.push(e[1])}}return a};
