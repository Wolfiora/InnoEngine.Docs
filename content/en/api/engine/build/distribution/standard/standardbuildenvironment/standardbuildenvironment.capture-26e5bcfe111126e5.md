---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.26e5bcfe111126e5df9f6a64d6b8eb38aa0bd51a01a0ce7b41b20641ebaa501f
symbol: engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildEnvironment.Capture(System.String,Inno.Build.BuildTargetId,System.String,System.String)
title: StandardBuildEnvironment.Capture
kind: api
owners:
- Inno.Build.Distribution.Standard
apiSurface: source-clr
sourceFingerprint: 08c9dbcddf163814df140d4fb3a7aa38a8d1435e19b6eb28e9b8df0f8f79c580
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
