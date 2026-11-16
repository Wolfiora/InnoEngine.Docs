---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c34928581b1c9a78d505b7009fe2ed28a2668b65a08856f8edcbedb9907b6c21
symbol: engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildEnvironment.ResolveManagedHost(System.String)
title: StandardBuildEnvironment.ResolveManagedHost
kind: api
owners:
- Inno.Build.Distribution.Standard
apiSurface: source-clr
reviewed: 179d088beef261ef4c525f6109b7f60eea6567fa11ca9d1b175e0e13a7db9ba1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `dotnetHost`:** Explicit executable, or null to use DOTNET\_HOST\_PATH and then the currently loaded runtime's installation. Normal executable discovery is used only when there is no shared runtime installation.

## Returns

The absolute existing managed SDK executable selected for this operation.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** The selected SDK executable is unavailable.

**Exception `T:System.PlatformNotSupportedException`:** No standard execution host is registered for this system and processor.
