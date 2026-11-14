---
uid: api.7f58bd2c74ea7aa8e5883674be9d126d4373d4477fa3735114d16119fc83744a
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorShortcutAttribute.#ctor(System.String,Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier,System.Boolean)"
source: xml
reviewed: 3168af0368df66b6bc2566beafe5a74aa48ee390e83737ec449f88e820d6ed12
title: "EditorShortcutAttribute.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a shortcut scoped to an exact interaction area.

## Parameters

**Parameter `area`:** The exact focused area that accepts the shortcut, or an empty string for any area.

**Parameter `key`:** The non-modifier key that triggers the action.

**Parameter `modifiers`:** The exact additional modifier keys required by the gesture.

**Parameter `primary`:** Whether the platform primary modifier, Command on macOS or Control elsewhere, is required.
