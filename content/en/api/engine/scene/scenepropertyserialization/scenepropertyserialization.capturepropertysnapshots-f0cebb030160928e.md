---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f0cebb030160928e3ae2b4cf4755f2e2925272cec11e798a15c70198e73ec93d
symbol: engine:Inno.Scene:M:Inno.Scene.ScenePropertySerialization.CapturePropertySnapshots(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)
title: ScenePropertySerialization.CapturePropertySnapshots
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: f7114791ae3ba9f9a8b42db458251e77ac74f43817bffafb103ff29bf3961ae8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** Live scene object whose properties should be captured.

**Parameter `serialization`:** Registry owning the active converter generation.

**Parameter `assets`:** Resolver used to preserve canonical asset references.

## Returns

Stable ordered property snapshots suitable for compact delta comparison.
