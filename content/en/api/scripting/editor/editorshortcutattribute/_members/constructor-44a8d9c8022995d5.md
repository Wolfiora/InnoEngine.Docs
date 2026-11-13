---
uid: api.44a8d9c8022995d524d1d3077ceaa7a0ee1390705a4eb30d66998aa44d7306a6
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorShortcutAttribute.#ctor(InnoEngine.Input.KeyCode,InnoEngine.Input.KeyModifier,System.Boolean)"
source: xml
reviewed: e036cf46d3176161e69c6c63c9dbcf7f30217166a0d7c560f92a9960eea2fe81
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a shortcut that can be dispatched from any focused interaction surface.

**Parameter `key`:** The non-modifier key that triggers the action.

**Parameter `modifiers`:** The exact additional modifier keys required by the gesture.

**Parameter `primary`:** Whether the platform primary modifier, Command on macOS or Control elsewhere, is required.
