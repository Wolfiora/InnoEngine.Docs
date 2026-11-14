---
uid: api.00575f0bf74f31cc2d68e5fdcb58bd087fc92df4e65f2072a2a056097abe6147
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeLinkPlan.GetStaticFileName(System.String)"
source: xml
reviewed: 908c748c322ea70ffb97c72918bfe4517395e27ae8c26c56314bc7000ff0dc0a
title: "NativeLinkPlan.GetStaticFileName"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Formats an explicitly declared logical archive using the selected platform format.

## Parameters

**Parameter `logicalName`:** The component-owned logical archive name.

## Returns

The exact platform file name.

## Exceptions

**Exception `T:System.NotSupportedException`:** Static linkage has no registered archive format.
