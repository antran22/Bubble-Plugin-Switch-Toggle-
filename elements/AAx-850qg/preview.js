function(instance, properties) {
    jQuery("html").height("100%");
    jQuery("body").height("100%");
    jQuery("html").css("overflow", "hidden");
    jQuery("body").css("overflow", "hidden");
    
    
    const $style = jQuery(`
<style>
	*, *::after, *::before {
		box-sizing: border-box;
	}
    .cz-checkbox {
        width: 100%;
        height: 100%;
        position: relative;
        background: none;
        outline: none;
        border: none;
        margin: 0;
        padding: 0;
        -moz-appearance: none;
        -webkit-appearance: none;
        -o-appearance: none;
        transition: 0.2s;
        --checkmark-svg: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0.8 12 9.02'%3E%3Cpath d='M10.293 1.08601L4 7.37901L1.707 5.08601C1.5184 4.90385 1.2658 4.80306 1.0036 4.80534C0.741405 4.80761 0.490592 4.91278 0.305184 5.09819C0.119776 5.2836 0.0146072 5.53441 0.0123288 5.79661C0.0100503 6.05881 0.110845 6.31141 0.293003 6.50001L3.293 9.50001C3.48053 9.68748 3.73484 9.7928 4 9.7928C4.26517 9.7928 4.51947 9.68748 4.707 9.50001L11.707 2.50001C11.8892 2.31141 11.99 2.05881 11.9877 1.79661C11.9854 1.53441 11.8802 1.2836 11.6948 1.09819C11.5094 0.912783 11.2586 0.807614 10.9964 0.805336C10.7342 0.803057 10.4816 0.903852 10.293 1.08601Z' fill='black'%3E%3C/path%3E%3C/svg%3E");
        --handle-svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='28 116 200 24'%3E%3Cpath fill='currentColor' d='M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12Z'%3E%3C/path%3E%3C/svg%3E");
    }

    .cz-checkbox:before {
        cursor: pointer;
        position: relative;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        background: var(--cz-checkbox-bg-off, none);
        border: var(--cz-checkbox-border-width, 0px) solid var(--cz-checkbox-border-color, transparent);
        border-radius: var(--cz-checkbox-border-radius, 4px);
        transition: background-color 0.2s;
    }

    .cz-checkbox:after {
        cursor: pointer;
        position: absolute;
        display: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        mask-image: var(--checkmark-svg);
        -webkit-mask-image: var(--checkmark-svg);
        mask-position: center;
        -webkit-mask-position: center;
        height: calc(100% - var(--cz-checkbox-padding, 0px) * 2);
        aspect-ratio: 1;
        transition: 0.2s;
        content: "";
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
    }


    .cz-checkbox:checked:before {
        background-color: var(--cz-checkbox-bg-on, #39BA76);
    }

    .cz-checkbox:checked:after {
		display: block;
        background-color: var(--cz-checkbox-handle-color-on, #FFFFFF);
    }
    
    .cz-checkbox:indeterminate:before, .cz-checkbox.indeterminate:before {
        background-color: var(--cz-checkbox-bg-indeterminate, #AFAFAF);
    }
    
    .cz-checkbox:indeterminate:after, .cz-checkbox.indeterminate:after {
        display: block;
        mask-image: var(--handle-svg);
        -webkit-mask-image: var(--handle-svg);
        background-color: var(--cz-checkbox-handle-color-indeterminate, #FFFFFF);
    }

    .cz-checkbox:disabled:before {
        cursor: not-allowed;
        background-color: var(--cz-checkbox-bg-disabled, #D7D7D7);
    }

    .cz-checkbox:disabled:after {
        cursor: not-allowed;
        background-color: var(--cz-checkbox-handle-color-disabled, #FFFFFF);
    }
</style>	`);
    
    instance.canvas.append($style);
    const $toggle = jQuery(`<input class="cz-checkbox" type="checkbox" />`);
    instance.canvas.append($toggle);
    const style = properties;
    $toggle.css({
        "--cz-checkbox-padding": style.padding,
        "--cz-checkbox-bg-on": style.background_color_on,
        "--cz-checkbox-bg-off": style.background_color_off,
        "--cz-checkbox-bg-disabled": style.background_color_disabled,
        "--cz-checkbox-bg-indeterminate": style.background_color_indeterminate,
        "--cz-checkbox-handle-color-on": style.handle_color_on,
        "--cz-checkbox-handle-color-disabled": style.handle_color_disabled,
        "--cz-checkbox-handle-color-indeterminate": style.handle_color_indeterminate,
        "--cz-checkbox-border-color": style.border_color,
        "--cz-checkbox-border-width": style.border_width + "px",
        "--cz-checkbox-border-radius": style.border_radius + "px",
    });
    console.log(properties);
    $toggle.prop("checked", !!properties.editor_preview_toggle);
    $toggle.prop("disabled", !!properties.editor_preview_disabled);
    $toggle.prop("indeterminate", !!properties.editor_preview_indeterminate);
}