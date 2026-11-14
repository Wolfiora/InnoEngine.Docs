---
uid: api.82c5c2d62fe354b2e0983adef126a9bafd97960436f69c59f47e6f9e6c3f0ac1
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheOwnerCatalog.Register(System.String,System.String,System.String,Inno.Build.Toolchains.BuildCacheArtifactRole,System.Threading.CancellationToken)"
source: xml
reviewed: 5ebf7e2bf758568d03a08fcef3ed32740d09cfcce10e847e2c5f19b4cb3984d0
title: "BuildCacheOwnerCatalog.Register"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Registers a publisher root; this never adopts unrecorded artifacts inside that root.

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
