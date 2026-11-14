---
uid: api.21bd94243d0da9d8fd9549fa63aceccd7bb6450d3e073e8f52e9aec32e059a80
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneAsset.Capture(Inno.Scene.GameScene,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: ad945aeb4aecb2a06985cce59b72a4d5f6b08bb2be13d82edfba13cc794e194b
title: "SceneAsset.Capture"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Captures a runtime scene into a new unsaved scene asset.

## Parameters

**Parameter `scene`:** Scene to capture.

**Parameter `serialization`:** The serialization registry that owns the active scene converter generation.

**Parameter `assets`:** The asset database generation used to resolve references while collecting dependencies.

## Returns

A detached scene asset that an authoring asset database can save.
