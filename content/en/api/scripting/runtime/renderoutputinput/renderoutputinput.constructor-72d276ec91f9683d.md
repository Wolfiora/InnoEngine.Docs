---
uid: api.72d276ec91f9683dd7178a3caf32443842989a4a70686fd2f16ea45a13c0e998
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderOutputInput.#ctor(InnoEngine.Mathematics.Vector2,System.Boolean,InnoEngine.Mathematics.Vector2,InnoEngine.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String},System.Boolean)"
source: xml
reviewed: 26043ce46aa56255f946c533ec317e9309d8d1d5a84aabeac87f885feac8b040
title: "RenderOutputInput.Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates an input snapshot for one output viewport.

## Parameters

**Parameter `pointerPosition`:** Pointer coordinates relative to the viewport's top-left corner.

**Parameter `pointerInside`:** Whether the pointer is within this output.

**Parameter `scrollDelta`:** Pointer wheel movement.

**Parameter `modifiers`:** Current keyboard modifiers.

**Parameter `keysPressed`:** Keys pressed this frame.

**Parameter `keysReleased`:** Keys released this frame.

**Parameter `buttonsPressed`:** Pointer buttons pressed this frame.

**Parameter `buttonsReleased`:** Pointer buttons released this frame.

**Parameter `textInput`:** Ordered Unicode text commits.

**Parameter `interactionEnabled`:** Whether the output may dispatch game interaction.
