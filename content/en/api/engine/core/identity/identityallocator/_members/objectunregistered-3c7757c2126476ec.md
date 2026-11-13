---
uid: api.3c7757c2126476ecbd6710f04a3129c3ee6d98e6082905e2ff7ec3ff3d943fbf
symbol: "engine:Inno.Core.Identity:E:Inno.Core.Identity.IdentityAllocator.ObjectUnregistered"
source: xml
reviewed: d1042dc806f7753770be15da52f447ac9c846fcf930877d38b16a685bd074380
title: "ObjectUnregistered"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Occurs after an object has been permanently removed from this allocator.

## Remarks

Every observer is invoked. Multiple observer failures are reported as one `T:System.AggregateException` after notification completes.
