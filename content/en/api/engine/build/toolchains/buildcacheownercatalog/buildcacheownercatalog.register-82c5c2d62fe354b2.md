---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.82c5c2d62fe354b2e0983adef126a9bafd97960436f69c59f47e6f9e6c3f0ac1
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheOwnerCatalog.Register(System.String,System.String,System.String,Inno.Build.Toolchains.BuildCacheArtifactRole,System.Threading.CancellationToken)
title: BuildCacheOwnerCatalog.Register
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 60be46de79f3611555cec2064f2cb853da127917d07d0cdcaf7c34545471a3dd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The absolute checkout owning the registration.

**Parameter `directory`:** The exact publisher root beneath the checkout.

**Parameter `id`:** The distribution's unique owner identity.

**Parameter `role`:** The publisher's actual artifact lifetime.

**Parameter `cancellationToken`:** Cancels before registration commits.

## Exceptions

**Exception `T:System.IO.IOException`:** A registration crosses a link or ownership boundary.

**Exception `T:System.IO.InvalidDataException`:** An existing root has a different registration.

**Exception `T:System.OperationCanceledException`:** Cancellation precedes commit.
