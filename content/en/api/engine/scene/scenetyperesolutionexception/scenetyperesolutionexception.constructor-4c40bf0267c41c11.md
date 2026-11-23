---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4c40bf0267c41c11d7e241e5c91ff3ca7bf100382f0d823eace4b6577d5c1f80
symbol: engine:Inno.Scene:M:Inno.Scene.SceneTypeResolutionException.#ctor(System.Guid,System.String)
title: SceneTypeResolutionException.Constructor
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: fa41fada979fe0cdc0d1effefbcf387b54ddbb3426d955af2d4e02be060365b0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `stableTypeID`:** The stable identity stored by the serialized scene element.

**Parameter `elementKind`:** The human-readable scene element kind, such as component or system.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `stableTypeID` is empty or `elementKind` is empty.
