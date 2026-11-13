---
uid: api.de5589bc4c74ca17ab6a3f1b905b0b91ec22cbf0d66a53f6e9deb13cfed24d5f
symbol: "engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildHosts.Capture"
source: xml
reviewed: 39258f5fecd2add500f7c6d30d8da8f3d65f84d3688b0f56618ff180cd758f05
title: "Capture"
kind: api
owners: [Inno.Build.Distribution.Standard]
apiSurface: source-clr
---

Captures the current execution machine from registered platform providers.

**Returns:** The selected immutable host and execution capabilities.

**Exception `T:System.PlatformNotSupportedException`:** No registered provider supports the current machine.
