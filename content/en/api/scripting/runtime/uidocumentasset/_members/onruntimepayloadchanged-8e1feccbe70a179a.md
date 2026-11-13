---
uid: api.8e1feccbe70a179a6f08b6497e07e140831ec431e8829161923cdc186bc97a72
symbol: "scripting:Inno.UI:M:InnoEngine.UI.UiDocumentAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte})"
source: xml
reviewed: bcf5ebbef7618b86fd9ff02e5f6cacad28d073a961f1dda5c63e65e777f7da21
title: "OnRuntimePayloadChanged"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Rebuilds runtime-derived state after the serialized asset payload changes.

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.
