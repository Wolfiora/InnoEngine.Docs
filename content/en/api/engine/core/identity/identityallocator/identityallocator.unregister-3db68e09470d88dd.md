---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3db68e09470d88dd6c64f065a08b420d34bcd4db73da7b376b95e5df331d2454
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Unregister(Inno.Core.Identity.IdentityObject)
title: IdentityAllocator.Unregister
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
reviewed: e8b0c284d8f0fa0e159a09e35e7603872e4938da2a3dbb63d1271ba5a747a8bc
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
