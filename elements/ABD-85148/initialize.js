function(instance, context) {
	const $toggle = jQuery(`<input class="cz-switch" type="checkbox" />`);
    instance.canvas.append($toggle);
    instance.data.$toggle = $toggle;
    $toggle.change(function () {
        const currentValue = $toggle.is(":checked");
        instance.publishAutobinding(currentValue);
        instance.publishState("value", currentValue);
        instance.triggerEvent("changed");
    });
    
    
    instance.data.updateStyle = function updateStyle(style) {
        if (CDBubbleUtils.shallowEqual(style, instance.data.style)) {
            return;
        }
        
        instance.data.style = style;
        
        $toggle.css({
            "--cz-switch-handle-padding": style.padding + "px",
            "--cz-switch-bg-on": style.background_color_on,
            "--cz-switch-bg-off": style.background_color_off,
            "--cz-switch-bg-disabled": style.background_color_disabled,
            "--cz-switch-handle-on": style.handle_color_on,
            "--cz-switch-handle-off": style.handle_color_off,
            "--cz-switch-handle-disabled": style.handle_color_disabled,
            "--cz-switch-handle-border-color": style.handle_border_color,
            "--cz-switch-handle-border-width": style.handle_border_width + "px",
            "--cz-switch-border-color": style.border_color,
            "--cz-switch-border-width": style.border_width + "px",
        });
    }
        
    instance.data.updateInitialValue = function updateInitialValue(initialValue) {
        if (initialValue !== instance.data.initialValue) {
			instance.data.initialValue = initialValue;
            $toggle.prop("checked", initialValue);
        }
    }
    
    instance.data.updateValue = function(newValue) {
		$toggle.prop("checked", !!newValue);
    }
    
    instance.data.toggle = function() {
        const currentValue = $toggle.is(":checked");
        $toggle.prop("checked", !currentValue);
    }
    
    instance.data.updateAutobinding = function updateAutobinding(autobinding) {
        if (autobinding !== instance.data.autobinding) {
			instance.data.autobinding = autobinding;
            $toggle.prop("checked", autobinding);
        }
    }
}