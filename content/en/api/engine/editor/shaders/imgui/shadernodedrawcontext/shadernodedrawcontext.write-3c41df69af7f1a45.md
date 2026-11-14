---
uid: api.3c41df69af7f1a4510eb1a38ea0ea659d0b176324ababdd02543fd034661cfc9
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.Write\u0060\u00601(System.String,\u0060\u00600,System.String)"
source: xml
reviewed: 594e76f3e704ee8117a3a254a7d8f6fc9dd057df52e9da8a3c5cd849bd8d1a8a
title: "ShaderNodeDrawContext.Write"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Records an unsaved draft edit through shared history; only an explicit document save applies it to the asset.

## Type parameters

**Type parameter `T`:** Native serializable property type.

## Parameters

**Parameter `key`:** Stable node-local property key.

**Parameter `value`:** New detached value.

**Parameter `mergeKey`:** The current shared gesture key, or null for an independent edit.
