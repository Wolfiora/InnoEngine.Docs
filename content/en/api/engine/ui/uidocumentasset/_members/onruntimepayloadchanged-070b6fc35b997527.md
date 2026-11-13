---
uid: api.070b6fc35b99752787608e8bbee8a1aa892e7487b34aad8c8bff8d4a071369d8
symbol: "engine:Inno.UI:M:Inno.UI.UiDocumentAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte})"
source: xml
reviewed: 9f177d644faf8a760bbf22a103b46abaeeb18ff8a401268c10f04e567029fdf9
title: "OnRuntimePayloadChanged"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Rebuilds runtime-derived state after the serialized asset payload changes.

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.
