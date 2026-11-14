---
uid: api.21fd41f65fe50ccd48ccc31617157a5662874bf956d03021acf71489944fe6b1
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.EditorAssets.EncodeNative(InnoEngine.Assets.AssetObject)"
source: xml
reviewed: 45a85a366e6b98d08f42afbcd1563fe1246d07308b890f80245c905b5fa1c588
title: "EditorAssets.EncodeNative"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Encodes a detached native asset with the current authoring pipeline's converters and reference context.

**Parameter `asset`:** Complete detached value to encode without saving or importing it.

**Returns:** Reload-safe native asset bytes suitable for draft state and History payloads.
