---
uid: api.cc2cc509eaebd12b8267e0a1c7fcb3dc2e26ce24fbeb0cae66496811300fa708
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.SerializedRenderExtensionState.#ctor(System.Guid,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 5ea1b41cb098908a44a78503f2ab9f794b685d8191c29cf83119a8660bf162bb
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates immutable extension state from stable identity and property bytes.

**Parameter `stableTypeId`:** Stable type identity, or empty when the extension has no typed settings.

**Parameter `propertyData`:** Neutral native property bytes produced by asset serialization. Use the snapshot constructor when settings reference assets.
