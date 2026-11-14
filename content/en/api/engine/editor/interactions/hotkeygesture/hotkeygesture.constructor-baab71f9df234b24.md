---
uid: api.baab71f9df234b244f42de9739ad16532b465f9b142519e0f9ae58eeddb9ba50
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.HotKeyGesture.#ctor(Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier,System.String)"
source: xml
reviewed: fc6d2f5eeccaf23a29d1f2be8dd4e355195f46745abd68fc485d391721194187
title: "HotKeyGesture.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a keyboard gesture with an exact set of modifier keys after symbolic-key normalization.

## Parameters

**Parameter `key`:** The non-modifier key in the gesture.

**Parameter `modifiers`:** The modifier keys required by the gesture.

**Parameter `superModifierLabel`:** The display name of the Super modifier; the neutral name is used for explicitly constructed gestures.

## Exceptions

**Exception `T:System.ArgumentException`:** The modifier label is empty.
