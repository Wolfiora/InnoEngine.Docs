---
uid: api.1d66281e5eb457c6a481b6b42a520d16e36450dd1ee153540a21d26bab6f3005
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.EditorAssets.DecodeNative\u0060\u00601(System.Byte[])"
source: xml
reviewed: ee1924ea232488e16ccfa383bc756c796a1a21f4da7fe33b8b53b2b12e91afdc
title: "DecodeNative"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Decodes detached native asset bytes with the current authoring pipeline's converters and reference context.

**Type parameter `TAsset`:** Expected native asset type.

**Parameter `bytes`:** Bytes previously produced by the native asset source codec.

**Returns:** A detached asset value that can be edited without publishing it.
