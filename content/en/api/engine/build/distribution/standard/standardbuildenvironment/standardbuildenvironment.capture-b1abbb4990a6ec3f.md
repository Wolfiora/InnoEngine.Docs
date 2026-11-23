---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b1abbb4990a6ec3f4216d1325c5ec4f6cb686c5d882b00655df5b80a0686be24
symbol: engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildEnvironment.Capture(System.String,Inno.Build.BuildTargetID,System.String,System.String)
title: StandardBuildEnvironment.Capture
kind: api
owners:
- Inno.Build.Distribution.Standard
apiSurface: source-clr
sourceFingerprint: e4394c45df26301bddacfe2247bedd10f52ebd04531c0bc6dc90ea0dfbb25398
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `applicationDirectory`:** The product or tool's installed location used for source provisioning.

**Parameter `toolsTarget`:** The native target explicitly selected for executable build tools, independently of exported games.

**Parameter `dotnetHost`:** An explicit SDK executable, or null to use DOTNET\_HOST\_PATH, the loaded shared runtime's muxer, then normal executable discovery when this process has no shared runtime installation.

**Parameter `nativeDependencies`:** An absolute consume-only dependency selection, or null for local source preparation.

## Returns

A frozen execution context; publication targets must be selected independently.

## Exceptions

**Exception `T:System.PlatformNotSupportedException`:** The distribution has no build execution integration for this system or processor.

**Exception `T:System.IO.FileNotFoundException`:** The selected managed SDK host cannot be located.
