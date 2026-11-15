---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a757c658ed78fe1cd1cb6f49d2ebb123bda504c8133acec137677183063b4ed8
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.DeleteDirectory(System.String)
title: ToolchainEnvironment.DeleteDirectory
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 5e81a5f5b10482cea54d9b64c8bfd93270fbad513201c89a7f52defa9ddca4aa

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Deletes one explicitly resolved toolchain output directory when it exists.

## Parameters

**Parameter `path`:** The exact directory selected by a toolchain command.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `path` is empty or does not resolve to an absolute path.
