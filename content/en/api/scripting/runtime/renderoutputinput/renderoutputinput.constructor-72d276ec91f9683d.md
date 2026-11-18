---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.72d276ec91f9683dd7178a3caf32443842989a4a70686fd2f16ea45a13c0e998
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderOutputInput.#ctor(InnoEngine.Mathematics.Vector2,System.Boolean,InnoEngine.Mathematics.Vector2,InnoEngine.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String},System.Boolean)
title: RenderOutputInput.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: ebb567d1ce68209a404f996a581ddc3c147240d68f209a8ab0b44dd24e065d8c
apiScope: Runtime
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
