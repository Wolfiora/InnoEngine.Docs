---
uid: api.4c40bf0267c41c11d7e241e5c91ff3ca7bf100382f0d823eace4b6577d5c1f80
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneTypeResolutionException.#ctor(System.Guid,System.String)"
source: xml
reviewed: 6de4f40ce02249a3839c1b6a477ff45bc218b542d121041165a13b08b61c1c65
title: "SceneTypeResolutionException.Constructor"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates an exception for one unresolved serialized scene type.

**Parameter `stableTypeId`:** The stable identity stored by the serialized scene element.

**Parameter `elementKind`:** The human-readable scene element kind, such as component or system.

**Exception `T:System.ArgumentException`:** Thrown when `stableTypeId` is empty or `elementKind` is empty.
