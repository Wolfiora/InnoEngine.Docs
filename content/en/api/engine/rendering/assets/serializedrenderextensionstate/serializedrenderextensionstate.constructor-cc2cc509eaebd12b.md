---
uid: api.cc2cc509eaebd12b8267e0a1c7fcb3dc2e26ce24fbeb0cae66496811300fa708
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.SerializedRenderExtensionState.#ctor(System.Guid,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: c2581f0fc86ec2b0c5adfaca4d8d8b723a5078f47e31f1cbf9e457ec3023a3e4
title: "SerializedRenderExtensionState.Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates immutable extension state from stable identity and property bytes.

## Parameters

**Parameter `stableTypeId`:** Stable type identity, or empty when the extension has no typed settings.

**Parameter `propertyData`:** Neutral native property bytes produced by asset serialization. Use the snapshot constructor when settings reference assets.
