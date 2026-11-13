---
uid: api.7f58bd2c74ea7aa8e5883674be9d126d4373d4477fa3735114d16119fc83744a
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorShortcutAttribute.#ctor(System.String,Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier,System.Boolean)"
source: xml
reviewed: eeaf0e84b1f51af16fb8586fcfca028399f1a165f129dbb1b2672ae6a28aa043
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a shortcut scoped to an exact interaction area.

**Parameter `area`:** The exact focused area that accepts the shortcut, or an empty string for any area.

**Parameter `key`:** The non-modifier key that triggers the action.

**Parameter `modifiers`:** The exact additional modifier keys required by the gesture.

**Parameter `primary`:** Whether the platform primary modifier, Command on macOS or Control elsewhere, is required.
