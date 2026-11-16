---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4c40bf0267c41c11d7e241e5c91ff3ca7bf100382f0d823eace4b6577d5c1f80
symbol: engine:Inno.Scene:M:Inno.Scene.SceneTypeResolutionException.#ctor(System.Guid,System.String)
title: SceneTypeResolutionException.Constructor
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 6de4f40ce02249a3839c1b6a477ff45bc218b542d121041165a13b08b61c1c65
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `stableTypeId`:** The stable identity stored by the serialized scene element.

**Parameter `elementKind`:** The human-readable scene element kind, such as component or system.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `stableTypeId` is empty or `elementKind` is empty.
