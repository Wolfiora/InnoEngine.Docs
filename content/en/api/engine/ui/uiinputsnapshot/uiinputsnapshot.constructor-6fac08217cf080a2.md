---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6fac08217cf080a2dad70ea484f6a72c75626655de8d1c3f48975784652c71fd
symbol: engine:Inno.UI:M:Inno.UI.UiInputSnapshot.#ctor(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2,Inno.Core.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String})
title: UiInputSnapshot.Constructor
kind: api
owners:
- Inno.UI
apiSurface: source-clr
reviewed: 96780a4d2ee0259a1396486f1d55891468fc45e35bae46b6c88e1ef7545fd560
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `mousePosition`:** Pointer position in surface coordinates.

**Parameter `scrollDelta`:** Pointer wheel movement.

**Parameter `modifiers`:** Active keyboard modifiers.

**Parameter `keysPressed`:** Physical keys pressed this frame.

**Parameter `keysReleased`:** Physical keys released this frame.

**Parameter `buttonsPressed`:** Pointer buttons pressed this frame.

**Parameter `buttonsReleased`:** Pointer buttons released this frame.

**Parameter `textInput`:** Ordered Unicode text commits.
