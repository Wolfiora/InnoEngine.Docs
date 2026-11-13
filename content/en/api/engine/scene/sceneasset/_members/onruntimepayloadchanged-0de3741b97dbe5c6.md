---
uid: api.0de3741b97dbe5c655a2dfa514bd4757d509fd22fb73826d1790720326c32865
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte})"
source: xml
reviewed: 08c0d1acbdeddf0288a5bcdc9fb4bc2e512b1ba0679253111cdbba1a91a4f193
title: "OnRuntimePayloadChanged"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Rebuilds runtime-derived state after the serialized asset payload changes.

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.
