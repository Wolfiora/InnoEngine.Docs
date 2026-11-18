---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3fba7120b21c931a9ad7b70dc1a8e99a61aaadf9d842d12cbb15a1cc53655681
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheOwnerCatalog.ReadOwners(System.String,System.Threading.CancellationToken)
title: BuildCacheOwnerCatalog.ReadOwners
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 37c9698ce267915199396367218d4277e51f499f315d6bdfa965e883d726d1c3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The absolute checkout containing registrations.

**Parameter `cancellationToken`:** Cancels reading before a cleanup plan exists.

## Returns

Frozen owner descriptors; an unprepared checkout returns an empty list.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A registration is malformed or has an ambiguous identity.

**Exception `T:System.IO.IOException`:** A registered path crosses a link or leaves the checkout.
