---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.87287accc1b0820b061a16a972e429cc5d2d6f649363907e4c7d14074e8f9adb
symbol: engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildDistribution.Create(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Toolchains.Bgfx.Tools.ToolRunner)
title: StandardBuildDistribution.Create
kind: api
owners:
- Inno.Build.Distribution.Standard
apiSurface: source-clr
reviewed: 41f96f11bbef52c05556e7796b2d1b85cd06b572dd4da7484b8fe44f9b37b4a8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The explicitly selected SDK and execution host.

**Parameter `tools`:** Borrowed frozen content-compilation tools, or null to consume this application's explicit deployment.

## Returns

A frozen standard distribution with backend configuration bound to the same platform identities.
