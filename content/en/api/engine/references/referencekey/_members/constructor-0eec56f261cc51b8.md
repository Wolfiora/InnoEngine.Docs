---
uid: api.0eec56f261cc51b854e814655425ec9be37b9ec4c75aa7ec25a6427e36f00cf1
symbol: "engine:Inno.References:M:Inno.References.ReferenceKey.#ctor(System.Guid,System.String)"
source: xml
reviewed: 150d723184b920d2cab3bb7899183da6bb13756dfd27791bb8c21732a32f2a0d
title: "Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Creates a key for one reference slot.

**Parameter `ownerPersistentId`:** The persistent identity of the object that owns the slot.

**Parameter `path`:** The stable property or structural path inside the owner.

**Exception `T:System.ArgumentException`:** Thrown when the owner identity or path is empty.
