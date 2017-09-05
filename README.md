# form-input-placeholder-to-label
Simple UI interaction for adding animation to placeholder text on inputs.

This is a simple script that mimics the functionality of text inputs in Google's Material Design library. The script, combined with a little CSS places the actual form label inside the input giving it the appearence of placeholder text. When the field is focused, the label animates up above the input, allowing users to still see what the label for the field is after they've filled it out.

The script is currently an ES6 class, so a transpiler like Babel is still required to use it inside certain browsers. Once the script is imported, it can be attached to an input field by passing creating a new instance. The constructor take 2 arguments. The first is a jQuery object representing the field(s) to bind the functionality to. The second is the name of the parent element that wraps both the form label and the form input.

For example, if your markup looked like this:
```
    <div class="formField">
        <label for="" class="formField-label">Sample Label</label>
        <input type="text" class="formField-input">
    </div>
```

A new instance of the script would look like this:

```
new FormField($('input[type=text]'), '.formField');
```

See a demo https://jajohnso.github.io/form-input-placeholder-to-label/
