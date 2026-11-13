---
uid: api.27b8fb427c7e3adedb783a39866af74822d2d0462dd47c3eb6994ff39518833e
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.EditorAssets.DecodeNative\u0060\u00601(System.Byte[])"
source: xml
reviewed: 86f51d6fbf89040a4581753f0e44ae2216c94c5d92661d68312287b3c664290b
title: "DecodeNative"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Decodes detached native asset bytes with the current authoring pipeline's converters and reference context.

**Type parameter `TAsset`:** Expected native asset type.

**Parameter `bytes`:** Bytes previously produced by the native asset source codec.

**Returns:** A detached asset value that can be edited without publishing it.
