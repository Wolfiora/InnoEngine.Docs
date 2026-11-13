---
uid: api.dcc508c7acb44e6e09e28a58b18c7635debddad3042473c9b839ed3537665504
symbol: "engine:Inno.Build.BrowserWasm32:M:Inno.Build.BrowserWasm32.BrowserWasm32NativeProductExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken)"
source: xml
reviewed: f71a7e38b9ee00ca0045fc1af83f419f0d9556dfbb533467b508bca907728b81
title: "BuildAsync"
kind: api
owners: [Inno.Build.BrowserWasm32]
apiSurface: source-clr
---

Publishes one exact static closure without discovering components or reselecting tools.

**Parameter `context`:** The owned checkout and previously resolved Emscripten selection.

**Parameter `plan`:** The frozen product component graph with backend-owned static definitions.

**Parameter `cancellationToken`:** Cancels generation and drains active compilation before returning.

**Returns:** The immutable complete native closure and corresponding managed binding selection.

**Exception `T:System.InvalidOperationException`:** The tools, target or static component capability are incompatible.

**Exception `T:System.IO.InvalidDataException`:** A component produces an incomplete or foreign archive closure.

**Exception `T:System.OperationCanceledException`:** Preparation was canceled before publication.
