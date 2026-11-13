---
uid: api.baab71f9df234b244f42de9739ad16532b465f9b142519e0f9ae58eeddb9ba50
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.HotKeyGesture.#ctor(Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier,System.String)"
source: xml
reviewed: f4b8b6139087a5251e5e5b9b98f0559d374c9fb45647effadfa4f0f405124300
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a keyboard gesture with an exact set of modifier keys after symbolic-key normalization.

**Parameter `key`:** The non-modifier key in the gesture.

**Parameter `modifiers`:** The modifier keys required by the gesture.

**Parameter `superModifierLabel`:** The display name of the Super modifier; the neutral name is used for explicitly constructed gestures.

**Exception `T:System.ArgumentException`:** The modifier label is empty.
