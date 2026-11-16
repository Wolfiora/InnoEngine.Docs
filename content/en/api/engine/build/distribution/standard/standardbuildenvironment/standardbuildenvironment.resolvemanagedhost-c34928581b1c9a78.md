---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c34928581b1c9a78d505b7009fe2ed28a2668b65a08856f8edcbedb9907b6c21
symbol: engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildEnvironment.ResolveManagedHost(System.String)
title: StandardBuildEnvironment.ResolveManagedHost
kind: api
owners:
- Inno.Build.Distribution.Standard
apiSurface: source-clr
reviewed: 56b9741b61e919aa3014835a455dc0a57bd8383415440beeb631088f80417cef
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
