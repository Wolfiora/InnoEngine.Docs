---
uid: api.87287accc1b0820b061a16a972e429cc5d2d6f649363907e4c7d14074e8f9adb
symbol: "engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildDistribution.Create(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Toolchains.Bgfx.Tools.ToolRunner)"
source: xml
reviewed: e5fd8af1b40aebc917bd1ff8ad4193cf23e5b6cfdea5dcad67e545181622444a
title: "Create"
kind: api
owners: [Inno.Build.Distribution.Standard]
apiSurface: source-clr
---

Composes one explicit binding per implemented platform without resolving tools.

**Parameter `context`:** The explicitly selected SDK and execution host.

**Parameter `tools`:** Borrowed frozen content-compilation tools, or null to consume this application's explicit deployment.

**Returns:** A frozen standard distribution with backend configuration bound to the same platform identities.
