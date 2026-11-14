---
uid: api.1d063997f221a8090e3c8bb7b71a6f8c7d310f455d53a837dbdada74fe909949
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.HotKeyGesture.#ctor(InnoEngine.Input.KeyCode,InnoEngine.Input.KeyModifier,System.String)"
source: xml
reviewed: 63ad82552c99984a568921df22c154543042b83ac50cee0df3536b6522a5041b
title: "HotKeyGesture.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a keyboard gesture with an exact set of modifier keys after symbolic-key normalization.

## Parameters

**Parameter `key`:** The non-modifier key in the gesture.

**Parameter `modifiers`:** The modifier keys required by the gesture.

**Parameter `superModifierLabel`:** The display name of the Super modifier; the neutral name is used for explicitly constructed gestures.

## Exceptions

**Exception `T:System.ArgumentException`:** The modifier label is empty.
