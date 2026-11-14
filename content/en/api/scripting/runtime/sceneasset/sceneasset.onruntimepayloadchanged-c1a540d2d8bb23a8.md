---
uid: api.c1a540d2d8bb23a8ceb1bfe2431b4bcfd11484eb33966738ab00f3d537cf0c6e
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.SceneAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte})"
source: xml
reviewed: e2b1d84a7e6aa800f41ad5533d6ca0cf109f11b103ce626d694c1ff83bba9a12
title: "SceneAsset.OnRuntimePayloadChanged"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Rebuilds runtime-derived state after the serialized asset payload changes.

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.
