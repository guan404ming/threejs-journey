# 10-debug-ui

1. [Different types](https://lil-gui.georgealways.com/#Guide#Adding-Controllers) of elements could be added

    - **Range**: for numbers with minimum and maximum value
    - **Color**: for colors with various formats
    - **Text**: for simple texts
    - **Checkbox**: for booleans
    - **Select**: for a choice from a list of values
    - **Button**: to trigger functions
    - **Folder**: to organize your panel if you have too many elements

2.  Implement GUI ([lil-gui](https://lil-gui.georgealways.com/))

    ```js
    import GUI from 'lil-gui'
    const gui = new GUI()

    gui
        .add(mesh.position, 'y')
        .max(3)
        .min(-3)
        .step(0.01)
        .name("Cube Y")

    gui
        .addColor(mesh.material, 'color')
    ```
