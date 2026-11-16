---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a75e85186edaaa4c8e76c863168b9d96cc5a12fd41c457abe26f420be5e62584
symbol: engine:Inno.Scene:M:Inno.Scene.SceneReloadService.#ctor(Inno.Scene.SceneWorld,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)
title: SceneReloadService.Constructor
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 8915c8a039947f0e8f786838f5891ec27b8fd26b0034bd51447fb313daca3bf4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `serialization`:** The serialization registry used to capture and restore scene state.

**Parameter `world`:** The isolated scene world whose active generation is captured.

**Parameter `assets`:** The asset reference generation used throughout capture, activation, and rollback.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `world`, `serialization`, or `assets` is null.
