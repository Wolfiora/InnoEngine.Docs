---
uid: api.3fba7120b21c931a9ad7b70dc1a8e99a61aaadf9d842d12cbb15a1cc53655681
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheOwnerCatalog.ReadOwners(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: f6a7fc9dc8aebf1b106662b7189e4ef50c973a7cd60e9500dc579f6692ccedbd
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
