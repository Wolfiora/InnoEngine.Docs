---
uid: api.82c5c2d62fe354b2e0983adef126a9bafd97960436f69c59f47e6f9e6c3f0ac1
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheOwnerCatalog.Register(System.String,System.String,System.String,Inno.Build.Toolchains.BuildCacheArtifactRole,System.Threading.CancellationToken)"
source: xml
reviewed: 172ee6654bbec8c4116e2076a0d96255b48e3dc638ddf2f4c559600d750353e5
title: "Register"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Registers a publisher root; this never adopts unrecorded artifacts inside that root.

**Parameter `engineRoot`:** The absolute checkout owning the registration.

**Parameter `directory`:** The exact publisher root beneath the checkout.

**Parameter `id`:** The distribution's unique owner identity.

**Parameter `role`:** The publisher's actual artifact lifetime.

**Parameter `cancellationToken`:** Cancels before registration commits.

**Exception `T:System.IO.IOException`:** A registration crosses a link or ownership boundary.

**Exception `T:System.IO.InvalidDataException`:** An existing root has a different registration.

**Exception `T:System.OperationCanceledException`:** Cancellation precedes commit.
