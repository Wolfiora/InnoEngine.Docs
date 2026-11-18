---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4c40bf0267c41c11d7e241e5c91ff3ca7bf100382f0d823eace4b6577d5c1f80
symbol: engine:Inno.Scene:M:Inno.Scene.SceneTypeResolutionException.#ctor(System.Guid,System.String)
title: SceneTypeResolutionException.Constructor
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: 6fc4d11fd012b7caedac1e6edb5bf947b548bc0cb2e61a183be37251c8e1360a
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
