---
uid: api.159e1ca6dc9f513e98a97c8a9a46b7343b563e5c661ec5e2f1e5727951437477
symbol: "engine:Inno.Input:M:Inno.Input.InputSnapshot.#ctor(System.Int64,System.Collections.Generic.IEnumerable{Inno.Core.Input.KeyCode},System.Collections.Generic.IEnumerable{Inno.Core.Input.KeyCode},System.Collections.Generic.IEnumerable{Inno.Core.Input.KeyCode},System.Collections.Generic.IEnumerable{Inno.Core.Input.MouseButton},System.Collections.Generic.IEnumerable{Inno.Core.Input.MouseButton},System.Collections.Generic.IEnumerable{Inno.Core.Input.MouseButton},Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2,Inno.Core.Input.KeyModifier,System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: 5754b2aac3ace0632623c905ba4ca22b78c459555a853a90c07f82df4f96f72b
title: "Constructor"
kind: api
owners: [Inno.Input]
apiSurface: source-clr
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
