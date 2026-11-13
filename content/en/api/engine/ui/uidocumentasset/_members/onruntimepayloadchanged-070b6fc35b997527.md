---
uid: api.070b6fc35b99752787608e8bbee8a1aa892e7487b34aad8c8bff8d4a071369d8
symbol: "engine:Inno.UI:M:Inno.UI.UiDocumentAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte})"
source: xml
reviewed: 9323022e20a01182375973b1f01b61b84b32feb7a19e3b5a7aaac3ba2a27e8cb
title: "OnRuntimePayloadChanged"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Rebuilds runtime-derived state after the serialized asset payload changes.

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.
