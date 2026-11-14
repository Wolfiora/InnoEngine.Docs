---
uid: api.8e1feccbe70a179a6f08b6497e07e140831ec431e8829161923cdc186bc97a72
symbol: "scripting:Inno.UI:M:InnoEngine.UI.UiDocumentAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte})"
source: xml
reviewed: 61e60f9953274381a76d6abb5d4a997ae8f089c9fd0dcea6a23992b7c994de7a
title: "UiDocumentAsset.OnRuntimePayloadChanged"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Rebuilds runtime-derived state after the serialized asset payload changes.

## Parameters

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.
