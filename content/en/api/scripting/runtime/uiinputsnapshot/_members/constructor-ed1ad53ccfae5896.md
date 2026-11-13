---
uid: api.ed1ad53ccfae5896c75d69890f90fb7e0cc96e7c831d0795afec7a7467b76326
symbol: "scripting:Inno.UI:M:InnoEngine.UI.UiInputSnapshot.#ctor(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2,InnoEngine.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: f8ecdb9d382c5dd2ec1aca050707cfc2ac207536de24da2f3808c5850a545eed
title: "Constructor"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Creates one backend-neutral UI input snapshot.

**Parameter `mousePosition`:** Pointer position in surface coordinates.

**Parameter `scrollDelta`:** Pointer wheel movement.

**Parameter `modifiers`:** Active keyboard modifiers.

**Parameter `keysPressed`:** Physical keys pressed this frame.

**Parameter `keysReleased`:** Physical keys released this frame.

**Parameter `buttonsPressed`:** Pointer buttons pressed this frame.

**Parameter `buttonsReleased`:** Pointer buttons released this frame.

**Parameter `textInput`:** Ordered Unicode text commits.
