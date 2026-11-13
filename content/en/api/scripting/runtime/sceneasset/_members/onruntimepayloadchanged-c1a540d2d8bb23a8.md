---
uid: api.c1a540d2d8bb23a8ceb1bfe2431b4bcfd11484eb33966738ab00f3d537cf0c6e
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.SceneAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte})"
source: xml
reviewed: d16be8c61e937ef0c6e9373a6a004af20a435d2d4adbf68584bebbe7bac0801c
title: "OnRuntimePayloadChanged"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Rebuilds runtime-derived state after the serialized asset payload changes.

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.
