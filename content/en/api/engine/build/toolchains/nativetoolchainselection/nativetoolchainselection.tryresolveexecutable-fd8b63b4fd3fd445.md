---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fd8b63b4fd3fd4458db808dcd61d19f01338f67c9cabf05bf6433b76aa41773b
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainSelection.TryResolveExecutable(System.String,System.String@)
title: NativeToolchainSelection.TryResolveExecutable
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 04c579fe609b2bdd0a7d65d236e221f735fd0e3392dbcdcd2ccc84918a29d15d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** The declared tool identity to check.

**Parameter `executable`:** The frozen absolute path when present, or an empty string when absent.

## Returns

True only when this selection explicitly supplies the requested tool.

## Exceptions

**Exception `T:System.ArgumentException`:** The tool identity is empty.
