---
uid: api.10b209ee1d3d81ebb59c90b3ef4654197f8d12b4484634f7874fc771d76bacfa
symbol: "engine:Inno.Storage.Runtime:M:Inno.Storage.Runtime.StorageRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext)"
source: xml
reviewed: 765624874a3a092aa808b8076b085ccdfe1c97f29d34d6f4eaff71e5bddb3505
title: "StorageRuntimeFactory.Create"
kind: api
owners: [Inno.Storage.Runtime]
apiSurface: source-clr
---

Creates a storage feature over a newly allocated application sandbox.

## Parameters

**Parameter `context`:** The isolated session context passed to the storage factory.

## Returns

A new storage feature that exclusively owns any disposable storage adapter.
