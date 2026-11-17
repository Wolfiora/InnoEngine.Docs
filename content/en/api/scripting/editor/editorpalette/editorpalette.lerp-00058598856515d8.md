---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.00058598856515d8434c6aadbd613f6d308f035f976c1cde2f62953f3a034289
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorPalette.Lerp(System.Numerics.Vector4,System.Numerics.Vector4,System.Single)
title: EditorPalette.Lerp
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 69a821c8a6d5d242cdd73bd830a0d1de82ec4b6df11db8341c82d5ec0c1ff864
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `from`:** The color returned when `amount` is zero.

**Parameter `to`:** The color returned when `amount` is one.

**Parameter `amount`:** The interpolation amount, clamped to the inclusive zero-to-one range.

## Returns

The component-wise interpolated color.
