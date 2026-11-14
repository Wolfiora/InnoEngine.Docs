---
uid: api.1d66281e5eb457c6a481b6b42a520d16e36450dd1ee153540a21d26bab6f3005
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.EditorAssets.DecodeNative\u0060\u00601(System.Byte[])"
source: xml
reviewed: 8bcd630de35d534b458ab65593a9374414c04a2999c3e2e362d5501ac835d640
title: "EditorAssets.DecodeNative"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Decodes detached native asset bytes with the current authoring pipeline's converters and reference context.

## Type parameters

**Type parameter `TAsset`:** Expected native asset type.

## Parameters

**Parameter `bytes`:** Bytes previously produced by the native asset source codec.

## Returns

A detached asset value that can be edited without publishing it.
