---
uid: api.345078b60245e637a020cdb8ad14e2d13581445addc48b97de7521f41b8e920d
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderOutputInput.#ctor(Inno.Core.Mathematics.Vector2,System.Boolean,Inno.Core.Mathematics.Vector2,Inno.Core.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String},System.Boolean)"
source: xml
reviewed: e71cc999557e778b2a6df63329ad70d499c5c1ac4fe00e0af3908aaaa5544318
title: "RenderOutputInput.Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates an input snapshot for one output viewport.

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
