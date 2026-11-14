---
uid: api.3db68e09470d88dd6c64f065a08b420d34bcd4db73da7b376b95e5df331d2454
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Unregister(Inno.Core.Identity.IdentityObject)"
source: xml
reviewed: 60af2b048cea61b2a6a35015be9576b2f88793ee5690c17768786a905fc9a3b8
title: "IdentityAllocator.Unregister"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Removes an object from this session and notifies every unregistration observer.

## Parameters

**Parameter `obj`:** The identity object to remove.

## Returns

`true` when the object was registered; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `obj` is null.

**Exception `T:System.AggregateException`:** Thrown after removal when one or more observers fail.
