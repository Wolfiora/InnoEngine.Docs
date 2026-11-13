---
uid: api.75d86e348d451e7afb39415a68886f33c7f7e96c5da5b1e519d08820011e6aa8
symbol: "scripting:Inno.Input:M:InnoEngine.Input.InputSnapshot.#ctor(System.Int64,System.Collections.Generic.IEnumerable{InnoEngine.Input.KeyCode},System.Collections.Generic.IEnumerable{InnoEngine.Input.KeyCode},System.Collections.Generic.IEnumerable{InnoEngine.Input.KeyCode},System.Collections.Generic.IEnumerable{InnoEngine.Input.MouseButton},System.Collections.Generic.IEnumerable{InnoEngine.Input.MouseButton},System.Collections.Generic.IEnumerable{InnoEngine.Input.MouseButton},InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2,InnoEngine.Input.KeyModifier,System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: 32be9d62e15836566fabaef8f361a5b6334de47301ece097fdb6215e7ac36dfc
title: "Constructor"
kind: api
owners: [Inno.Input]
apiSurface: editor-script
apiScope: Runtime
---

Creates a complete immutable input snapshot.

**Parameter `frameIndex`:** The runtime frame that owns the snapshot.

**Parameter `keysDown`:** Keys held at the frame boundary.

**Parameter `keysPressed`:** Keys newly pressed since the previous snapshot.

**Parameter `keysReleased`:** Keys newly released since the previous snapshot.

**Parameter `mouseButtonsDown`:** Pointer buttons held at the frame boundary.

**Parameter `mouseButtonsPressed`:** Pointer buttons newly pressed since the previous snapshot.

**Parameter `mouseButtonsReleased`:** Pointer buttons newly released since the previous snapshot.

**Parameter `mousePosition`:** Current pointer position in window coordinates.

**Parameter `mouseDelta`:** Pointer movement accumulated since the previous snapshot.

**Parameter `scrollDelta`:** Wheel movement accumulated since the previous snapshot.

**Parameter `modifiers`:** Active keyboard modifiers at the frame boundary.

**Parameter `textInput`:** Ordered Unicode text commits captured since the previous snapshot.
