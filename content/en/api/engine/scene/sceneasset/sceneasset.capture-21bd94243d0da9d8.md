---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.21bd94243d0da9d8fd9549fa63aceccd7bb6450d3e073e8f52e9aec32e059a80
symbol: engine:Inno.Scene:M:Inno.Scene.SceneAsset.Capture(Inno.Scene.GameScene,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)
title: SceneAsset.Capture
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: ad945aeb4aecb2a06985cce59b72a4d5f6b08bb2be13d82edfba13cc794e194b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** Scene to capture.

**Parameter `serialization`:** The serialization registry that owns the active scene converter generation.

**Parameter `assets`:** The asset database generation used to resolve references while collecting dependencies.

## Returns

A detached scene asset that an authoring asset database can save.
