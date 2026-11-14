---
uid: api.1e3268b94e94c01f07ed733e9420da43e4412619f7492403e624020f0150f4f1
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.ValidateConfiguration(System.String)"
source: xml
reviewed: e9927801f2da2797d7f7c5d3b1af364ae3a0a3d7fdee4390413c051b69f24913
title: "ToolchainEnvironment.ValidateConfiguration"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Validates the configuration shared by all native component builds.

## Parameters

**Parameter `configuration`:** The debug or release token supplied by the build workflow.

## Exceptions

**Exception `T:System.ArgumentException`:** The configuration is unsupported.
