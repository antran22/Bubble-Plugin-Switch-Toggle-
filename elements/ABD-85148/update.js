function(instance, properties, context) {
    const $toggle = instance.data.$toggle;

    instance.data.updateStyle({
        padding: properties.padding,
        background_color_on: properties.background_color_on,
        background_color_off: properties.background_color_off,
        background_color_disabled: properties.background_color_disabled,
        handle_color_on: properties.handle_color_on,
        handle_color_off: properties.handle_color_off,
        handle_color_disabled: properties.handle_color_disabled,
        handle_border_color: properties.handle_border_color,
        handle_border_width: properties.handle_border_width,
        border_width: properties.border_width,
        border_color: properties.border_color,
    });
    
    instance.data.updateInitialValue(properties.initial_value);
    if (properties.autobinding !== null && properties.autobinding !== undefined) {
		    instance.data.updateAutobinding(properties.autobinding);        
    }


    $toggle.prop("disabled", !!properties.disabled);
}