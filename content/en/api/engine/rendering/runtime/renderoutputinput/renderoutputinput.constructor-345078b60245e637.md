---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.345078b60245e637a020cdb8ad14e2d13581445addc48b97de7521f41b8e920d
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderOutputInput.#ctor(Inno.Core.Mathematics.Vector2,System.Boolean,Inno.Core.Mathematics.Vector2,Inno.Core.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String},System.Boolean)
title: RenderOutputInput.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: e90aeaed37fd1fb773584b5a42984e808f7e9a98f727407952b638e5163ccb42
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
