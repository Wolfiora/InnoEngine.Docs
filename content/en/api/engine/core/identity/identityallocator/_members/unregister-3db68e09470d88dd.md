---
uid: api.3db68e09470d88dd6c64f065a08b420d34bcd4db73da7b376b95e5df331d2454
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Unregister(Inno.Core.Identity.IdentityObject)"
source: xml
reviewed: 618dd05e2aa01dd32080e8119e2c5ff72639764ccfa23b912c81fa494c7cd99e
title: "Unregister"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Removes an object from this session and notifies every unregistration observer.

**Parameter `obj`:** The identity object to remove.

**Returns:** `true` when the object was registered; otherwise, `false`.

**Exception `T:System.ArgumentNullException`:** Thrown when `obj` is null.

**Exception `T:System.AggregateException`:** Thrown after removal when one or more observers fail.
