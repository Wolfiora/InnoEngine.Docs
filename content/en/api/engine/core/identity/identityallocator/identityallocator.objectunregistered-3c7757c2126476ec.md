---
uid: api.3c7757c2126476ecbd6710f04a3129c3ee6d98e6082905e2ff7ec3ff3d943fbf
symbol: "engine:Inno.Core.Identity:E:Inno.Core.Identity.IdentityAllocator.ObjectUnregistered"
source: xml
reviewed: f2c9f4b0577cc1031fe139e70e8be1efc1062b2e54700867a723dac77d049772
title: "IdentityAllocator.ObjectUnregistered"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Occurs after an object has been permanently removed from this allocator.

## Remarks

Every observer is invoked. Multiple observer failures are reported as one `T:System.AggregateException` after notification completes.
