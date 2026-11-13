---
uid: api.855417e1e25d798c417990b2dd3c4e7e87f46b47c892214eb40d5c6d8fb28af0
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorShortcutAttribute.#ctor(System.String,InnoEngine.Input.KeyCode,InnoEngine.Input.KeyModifier,System.Boolean)"
source: xml
reviewed: 75fd9dc498da475d25d741673431b48e22a1d8a80a5b7bee5d2537a5c444d610
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a shortcut scoped to an exact interaction area.

**Parameter `area`:** The exact focused area that accepts the shortcut, or an empty string for any area.

**Parameter `key`:** The non-modifier key that triggers the action.

**Parameter `modifiers`:** The exact additional modifier keys required by the gesture.

**Parameter `primary`:** Whether the platform primary modifier, Command on macOS or Control elsewhere, is required.
