---
uid: api.6fac08217cf080a2dad70ea484f6a72c75626655de8d1c3f48975784652c71fd
symbol: "engine:Inno.UI:M:Inno.UI.UiInputSnapshot.#ctor(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2,Inno.Core.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 6b9a2d290f0674059ca672c735390b35c445a54fd90099f1145f053244b942da
title: "UiInputSnapshot.Constructor"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Creates one backend-neutral UI input snapshot.

## Parameters

**Parameter `mousePosition`:** Pointer position in surface coordinates.

**Parameter `scrollDelta`:** Pointer wheel movement.

**Parameter `modifiers`:** Active keyboard modifiers.

**Parameter `keysPressed`:** Physical keys pressed this frame.

**Parameter `keysReleased`:** Physical keys released this frame.

**Parameter `buttonsPressed`:** Pointer buttons pressed this frame.

**Parameter `buttonsReleased`:** Pointer buttons released this frame.

**Parameter `textInput`:** Ordered Unicode text commits.
