---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a75e85186edaaa4c8e76c863168b9d96cc5a12fd41c457abe26f420be5e62584
symbol: engine:Inno.Scene:M:Inno.Scene.SceneReloadService.#ctor(Inno.Scene.SceneWorld,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)
title: SceneReloadService.Constructor
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: a5945c38eae37105ef73f3e95d222643f07484d914b1b59709d77967f59ed159

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `serialization`:** The serialization registry used to capture and restore scene state.

**Parameter `world`:** The isolated scene world whose active generation is captured.

**Parameter `assets`:** The asset reference generation used throughout capture, activation, and rollback.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `world`, `serialization`, or `assets` is null.
