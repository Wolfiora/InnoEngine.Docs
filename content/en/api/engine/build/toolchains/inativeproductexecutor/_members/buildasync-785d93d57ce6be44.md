---
uid: api.785d93d57ce6be44022b52bc5e3d119e7175fe13a8b752a4d6a42b9da32468c2
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.INativeProductExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken)"
source: xml
reviewed: 68a9284593117bd042852bfed8047e5cf0797fbdea5158faeec7dee68ce07fc9
title: "BuildAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Builds or reuses the complete product with the operation's frozen tools.

**Parameter `context`:** The frozen operation.

**Parameter `plan`:** The complete dependency-ordered component plan.

**Parameter `cancellationToken`:** Cancels waits and unpublished work.

**Returns:** The owned complete output and binding closure.
