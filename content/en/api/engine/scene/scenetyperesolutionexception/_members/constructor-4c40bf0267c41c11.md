---
uid: api.4c40bf0267c41c11d7e241e5c91ff3ca7bf100382f0d823eace4b6577d5c1f80
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneTypeResolutionException.#ctor(System.Guid,System.String)"
source: xml
reviewed: 1aefb07638e3395aac8b2997ea4e7bbb89de700080f5a0816bcb756f0893047b
title: "Constructor"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates an exception for one unresolved serialized scene type.

**Parameter `stableTypeId`:** The stable identity stored by the serialized scene element.

**Parameter `elementKind`:** The human-readable scene element kind, such as component or system.

**Exception `T:System.ArgumentException`:** Thrown when `stableTypeId` is empty or `elementKind` is empty.
