---
uid: api.10b209ee1d3d81ebb59c90b3ef4654197f8d12b4484634f7874fc771d76bacfa
symbol: "engine:Inno.Storage.Runtime:M:Inno.Storage.Runtime.StorageRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext)"
source: xml
reviewed: 0b87bdff29b405eaba5be35d421b7b5bf57fd9c25a915deac6d85cd44008baed
title: "Create"
kind: api
owners: [Inno.Storage.Runtime]
apiSurface: source-clr
---

Creates a storage feature over a newly allocated application sandbox.

**Parameter `context`:** The isolated session context passed to the storage factory.

**Returns:** A new storage feature that exclusively owns any disposable storage adapter.
