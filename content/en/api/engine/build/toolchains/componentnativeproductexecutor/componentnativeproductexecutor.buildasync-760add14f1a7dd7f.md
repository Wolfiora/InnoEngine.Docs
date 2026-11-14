---
uid: api.760add14f1a7dd7fa54189b7aad2695d131507621c5fce3f00153f76538aa71c
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ComponentNativeProductExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken)"
source: xml
reviewed: e4a9655ce176ed12036536ad4609b2094f7ab33a147598c30637f1e2a92eb249
title: "ComponentNativeProductExecutor.BuildAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Builds or reuses the complete product with the operation's frozen tools.

## Parameters

**Parameter `context`:** The frozen operation.

**Parameter `plan`:** The complete dependency-ordered component plan.

**Parameter `cancellationToken`:** Cancels waits and unpublished work.

## Returns

The owned complete output and binding closure.
