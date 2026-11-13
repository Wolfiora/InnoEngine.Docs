---
uid: api.3fba7120b21c931a9ad7b70dc1a8e99a61aaadf9d842d12cbb15a1cc53655681
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheOwnerCatalog.ReadOwners(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: bc3c6a2a4202a4d8aa48f80b130fac8b708560bef4853e71807f94386d8d0f76
title: "ReadOwners"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Reads explicitly registered roots using each publisher's existing inventory and protection rules.

**Parameter `engineRoot`:** The absolute checkout containing registrations.

**Parameter `cancellationToken`:** Cancels reading before a cleanup plan exists.

**Returns:** Frozen owner descriptors; an unprepared checkout returns an empty list.

**Exception `T:System.IO.InvalidDataException`:** A registration is malformed or has an ambiguous identity.

**Exception `T:System.IO.IOException`:** A registered path crosses a link or leaves the checkout.
