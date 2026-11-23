---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a75e85186edaaa4c8e76c863168b9d96cc5a12fd41c457abe26f420be5e62584
symbol: engine:Inno.Scene:M:Inno.Scene.SceneReloadService.#ctor(Inno.Scene.SceneWorld,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)
title: SceneReloadService.Constructor
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: 20f8546a111f195db4dc9f7713f0678eed36ca5f9e85ee51c9e3767cc1eda528
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `world`:** The isolated scene world whose active generation is captured.

**Parameter `serialization`:** The serialization registry used to capture and restore scene state.

**Parameter `assets`:** The asset reference generation used throughout capture, activation, and rollback.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `world`, `serialization`, or `assets` is null.
