---
uid: api.1e3268b94e94c01f07ed733e9420da43e4412619f7492403e624020f0150f4f1
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.ValidateConfiguration(System.String)"
source: xml
reviewed: 2a1a66a2299784107a44b452dcaad1528fb9394ce0013f2cbedc8739bf8099d7
title: "ValidateConfiguration"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Validates the configuration shared by all native component builds.

**Parameter `configuration`:** The debug or release token supplied by the build workflow.

**Exception `T:System.ArgumentException`:** The configuration is unsupported.
