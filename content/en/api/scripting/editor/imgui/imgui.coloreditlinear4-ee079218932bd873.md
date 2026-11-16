---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ee079218932bd87399dddf1a36daca78596eda8dfc680c6a65b6cbbe26a507ad
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.ColorEditLinear4(System.String,System.Numerics.Vector4@,InnoEditor.ImGui.ImGuiColorEditFlags)
title: ImGui.ColorEditLinear4
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: ac38bd245d440e6884d671e999c1d6a3fa77c6cddc48cda7267b7e583658fdf4
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `label`:** The stable identity and visible label of the color control.

**Parameter `value`:** Linear RGB and alpha; only changed RGB channels are decoded, while alpha is never transfer-encoded.

**Parameter `flags`:** Dear ImGui color-edit flags; display modes interpret sRGB values and input storage must be RGB.

## Returns

True if the display color changed and `value` contains decoded linear RGB.

## Exceptions

**Exception `T:System.ArgumentException`:** HSV input storage conflicts with the linear-RGB value contract.
