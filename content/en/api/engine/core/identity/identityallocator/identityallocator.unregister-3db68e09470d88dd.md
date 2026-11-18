---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3db68e09470d88dd6c64f065a08b420d34bcd4db73da7b376b95e5df331d2454
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Unregister(Inno.Core.Identity.IdentityObject)
title: IdentityAllocator.Unregister
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
sourceFingerprint: 35ce700a855a6c6c97b4354f5c47e9286488497f239d6336c2cd34840806b21a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `obj`:** The identity object to remove.

## Returns

`true` when the object was registered; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `obj` is null.

**Exception `T:System.AggregateException`:** Thrown after removal when one or more observers fail.
